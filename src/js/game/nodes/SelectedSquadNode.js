define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SelectedSquadNode = Ash.Node.create({
        selectable : Components.Selectable,
        selected: Components.Selected,
        htmlObject: Components.HTMLObject,
        squad: Components.Squad,
    });

    return SelectedSquadNode;
});
