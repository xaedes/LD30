define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var RequestSquadNameNode = Ash.Node.create({
        requestSquadName : Components.RequestSquadName,
    });

    return RequestSquadNameNode;
});
