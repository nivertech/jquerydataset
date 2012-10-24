(function (win, doc, $) {
  "use strict";

/**
 * CREATE A DATASET
 * ============================================================================
 * Sometimes you wanna be able to grab your entire dataset of an element rather
 * that just a specific attribute with $.data('foo'), so this plugin grabs all
 * your data attributes for an individual element and adds them to a dataset that
 * you can use. It also helps to make your javascript more modular.
 *
 * ` EXAMPLE USAGE (Vanilla JS)
 * ===================================
 * var testDataset = createDataSet(document.getElementById('testing-data');
 *
 * ` EXAMPLE USAGE (jQuery)
 * ===================================
 * var testDataset = $("#testing-data").dataset();
 * result is the entire data set for testing-data.
 *
 */

/**
 * Checks for html5 dataset support in the browser for creating datasets
 * without having to loop through an elements attributes on supported browsers.
 *
 * @return {Boolean} Support of Dataset
 */
 function testDataset() {
   var dummy = doc.createElement('div'),
       supportsDataset;

   /* Sets a dummy data attribute to our dummy div */
   dummy.setAttribute('data-dummy', 'true');

   /* If dummy has a dataset (html5 supported), return true! */
   if (dummy.dataset) {
     supportsDataset = true;
   /* Otherwise, return false! */
   } else {
     supportsDataset = false;
   }

   return supportsDataset;
 }

 // Set the supports dataset one time.
 var supportsDataset = testDataset();

 /**
  * Create a dataset based on the element's data attributes.
  *
  * @param {DOMNode} element The element you want to get data attributes from.
  * @return {Object} All the data attributes properties and values.
  */
 function createDataset( element ) {
   var dataset = {};
   /* Just set the html5 dataset to dataset because it's supported. */
   if (supportsDataset === true) {
     dataset = element.dataset;
   /* Otherwise, we're gonna loop through the attributes, find the one's that match
    * data-, remove the data- and push the property and value to the dataset object.
    */
   } else {
     var attributeset = element.attributes,
         prop, val;

     for (var i = 0; i < attributeset.length; i++) {
       if (attributeset[i].name.match(/^data-/)) {
         prop = attributeset[i].name.replace(/^data-/, '');
         val = attributeset[i].value;
         dataset[prop] = val;
       }
     }
   }

   /* Return the dataset object */
   return dataset;
 }

 /* Make it a jQuery plugin */
 $.fn.dataset = function () {
   return createDataset(this[0]);
 };


}(window, document, jQuery));
