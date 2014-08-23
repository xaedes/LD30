define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var ExampleNode = Ash.Node.create({
        example : Components.Example,
    });

    return ExampleNode;
});
