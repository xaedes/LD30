define(['ash'], function (Ash) {
    var Selectable = Ash.Class.extend({
        clickSelector: null,
        iconSelector: null,
        unselectedIcon: null,
        selectedIcon: null,
        constructor: function (clickSelector, iconSelector, unselectedIcon, selectedIcon) {
            this.clickSelector = clickSelector;
            this.iconSelector = iconSelector;
            this.unselectedIcon = unselectedIcon;
            this.selectedIcon = selectedIcon;
        }
    });

    return Selectable;
});

// todo : don't forget to add this component to Components.js