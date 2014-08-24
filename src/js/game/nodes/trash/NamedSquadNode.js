define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var NamedSquadNode = Ash.Node.create({
        squad : Components.Squad,
        name : Components.SquadName,
    });

    return NamedSquadNode;
});
