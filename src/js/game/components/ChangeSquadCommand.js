define(['ash'], function (Ash) {
    var ChangeSquadCommand = Ash.Class.extend({
        soldier: null, // ref to entity
        squad: null,   // ref to entity
        constructor: function (soldier, squad) {
        	this.soldier = soldier;
        	this.squad = squad;
        }
    });

    return ChangeSquadCommand;
});
