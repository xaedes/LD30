define(['ash'], function (Ash) {
    var Parent = Ash.Class.extend({
        entity: null,
        constructor: function (entity) {
            this.entity = entity;
        }
    });

    return Parent;
});

// todo : don't forget to add this component to Components.js
