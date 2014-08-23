define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SelectableSquadNode = Ash.Node.create({
        squad : Components.Squad,
        selectable : Components.Selectable,
        htmlObject : Components.HTMLObject,
    });

    return SelectableSquadNode;
});
