define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var CreateSquadCommandoNode = Ash.Node.create({
        createSquadCommando : Components.CreateSquadCommando,
    });

    return CreateSquadCommandoNode;
});
