define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SelectableNode = Ash.Node.create({
        selectable : Components.Selectable,
        htmlObject : Components.HTMLObject,
    });

    return SelectableNode;
});
