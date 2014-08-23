define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SquadDisplayNode = Ash.Node.create({
        squad : Components.Squad,
        name : Components.SquadName,
        display : Components.Display,
    });

    return SquadDisplayNode;
});
