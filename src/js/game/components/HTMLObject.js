define(['ash'], function (Ash) {
    var HTMLObject = Ash.Class.extend({
    	// hold jquery html object
    	// this can be moved around in the DOM for example with:
    	//  htmlObject.appendTo($("#foobar")) 
    	htmlObject: null, 
        constructor: function (htmlObject) {
        	this.htmlObject = htmlObject;
        }
    });

    return HTMLObject;
});

// todo : don't forget to add this component to Components.js