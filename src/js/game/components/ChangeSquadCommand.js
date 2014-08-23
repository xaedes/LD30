define(['ash'], function (Ash) {
    var ChangeSquadCommand = Ash.Class.extend({
        soldier: null,
        squad: null,
        constructor: function (soldier, squad) {
        	this.soldier = soldier;
        	this.squad = squad;
        }
    });

    return ChangeSquadCommand;
});
