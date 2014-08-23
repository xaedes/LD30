define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var ButtonDisplayNode = Ash.Node.create({
        button : Components.Button,
        display : Components.Display,
    });

    return ButtonDisplayNode;
});
