define(['ash'], function (Ash) {
    var Emits = Ash.Class.extend({
        componentClass: null,
        constructorArguments: null,
        constructor: function (componentClass) {
            this.componentClass = componentClass;
           	this.constructorArguments = Array.prototype.slice.call(arguments,1);
        }
    });

    return Emits;
});

// todo : don't forget to add this component to Components.js
