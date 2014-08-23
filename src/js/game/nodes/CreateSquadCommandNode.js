define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var CreateSquadCommandNode = Ash.Node.create({
        createSquadCommand : Components.CreateSquadCommand,
    });

    return CreateSquadCommandNode;
});
