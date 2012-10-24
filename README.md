#Datasets


Datasets are an awesome feature of HTML5, but what if you want to access them with older browsers? You can use jQuery's "data" method to get specific data-attributes, but what if you want to get all the data attributes for a specific element?

##Usage
###HTML

`<div id="foo" data-leftMargin="10px">Move Me!</div>`

###JS
`var fooDataset = $("foo").dataset();`

This will give you:

`var fooDataset = {
leftMargin: 10px }`

**If you have any modifications, I accept pull requests!**

*@realchaseadams on twitter*