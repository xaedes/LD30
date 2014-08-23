define(['ash'], function (Ash) {
    var SquadMember = Ash.Class.extend({
        squad: null, // reference to squad Entity(!)
        constructor: function (squad) {
            this.squad = squad;
        }
    });

    return SquadMember;
});

// todo : don't forget to add this component to Components.js
