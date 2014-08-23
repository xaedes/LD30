define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var CanChangeSquadNode = Ash.Node.create({
        canChangeSquad: Components.CanChangeSquad,
    });

    return CanChangeSquadNode;
});
