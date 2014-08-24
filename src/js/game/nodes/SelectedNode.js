define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SelectedNode = Ash.Node.create({
        selectable : Components.Selectable,
        selected: Components.Selected,
        htmlObject: Components.HTMLObject,
    });

    return SelectedNode;
});