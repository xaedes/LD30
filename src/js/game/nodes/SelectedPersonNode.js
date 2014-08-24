define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SelectedPersonNode = Ash.Node.create({
        selectable : Components.Selectable,
        selected: Components.Selected,
        htmlObject: Components.HTMLObject,
        person: Components.Person,
    });

    return SelectedPersonNode;
});
