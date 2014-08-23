define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var DropDownListNode = Ash.Node.create({
        dropDownList : Components.DropDownList,
        display : Components.Display,
    });

    return DropDownListNode;
});
