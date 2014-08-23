define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SelectedSquadNode = Ash.Node.create({
        selectedSquad: Components.SelectedSquad,
        htmlObject: Components.HTMLObject,
    });

    return SelectedSquadNode;
});