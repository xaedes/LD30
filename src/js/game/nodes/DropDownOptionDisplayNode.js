define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var DropDownOptionDisplayNode = Ash.Node.create({
        dropDownOption : Components.DropDownOption,
        display : Components.Display,
    });

    return DropDownOptionDisplayNode;
});
