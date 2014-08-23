define(['ash'], function (Ash) {
    var DropDownList = Ash.Class.extend({
    	caption: null,
        constructor: function (caption) {
        	this.caption = caption;
        }
    });

    return DropDownList;
});
