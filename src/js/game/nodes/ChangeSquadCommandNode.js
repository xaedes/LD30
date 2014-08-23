define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var ChangeSquadCommandNode = Ash.Node.create({
        cmd : Components.ChangeSquadCommand,
    });

    return ChangeSquadCommandNode;
});
