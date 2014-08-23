define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SquadDisplayNode = Ash.Node.create({
        squad : Components.Squad,
        display : Components.Display,
    });

    return SquadDisplayNode;
});
