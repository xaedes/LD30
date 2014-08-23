define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var HireCommandNode = Ash.Node.create({
        hireCommand : Components.HireCommand,
    });

    return HireCommandNode;
});
