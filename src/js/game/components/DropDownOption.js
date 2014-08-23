define(['ash'], function (Ash) {
    var DropDownOption = Ash.Class.extend({
        dropDownList: null,
        caption: null,
        constructor: function (dropDownList, caption) {
            this.dropDownList = dropDownList;
            this.caption = caption;
        }
    });

    return DropDownOption;
});

// todo : don't forget to add this component to Components.js
