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
        squad: Components.Squad,
        htmlObject: Components.HTMLObject,
    });

    return SelectedSquadNode;
});