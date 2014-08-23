define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var ChangeSquadNode = Ash.Node.create({
        canChangeSquad: Components.CanChangeSquad,
    });

    return ChangeSquadNode;
});
