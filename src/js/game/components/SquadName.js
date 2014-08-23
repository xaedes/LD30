define(['ash'], function (Ash) {

    var SquadName = Ash.Class.extend({
        name: null,
        constructor: function (name) {
        	this.name = name;
        }
    });

    return SquadName;
});

// todo : don't forget to add this component to Components.js
