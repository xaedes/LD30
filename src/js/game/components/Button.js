define(['ash'], function (Ash) {
    var Button = Ash.Class.extend({
    	caption: null,
        constructor: function (caption) {
        	this.caption = caption;
        }
    });

    return Button;
});

// todo : don't forget to add this component to Components.js