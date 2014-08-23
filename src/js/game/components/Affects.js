define(['ash'], function (Ash) {
    var Affects = Ash.Class.extend({
        entity: null,
        constructor: function (entity) {
            this.entity = entity;
        }
    });

    return Affects;
});

// todo : don't forget to add this component to Components.js
