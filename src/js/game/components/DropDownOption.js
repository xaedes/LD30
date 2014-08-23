define(['ash'], function (Ash) {
    var DropDownOption = Ash.Class.extend({
        caption: null,
        constructor: function (caption) {
            this.caption = caption;
        }
    });

    return DropDownOption;
});

// todo : don't forget to add this component to Components.js
