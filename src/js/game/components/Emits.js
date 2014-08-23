define(['ash'], function (Ash) {
    var Emits = Ash.Class.extend({
        componentClass: null,
        constructor: function (componentClass) {
            this.componentClass = componentClass;
        }
    });

    return Emits;
});

// todo : don't forget to add this component to Components.js
