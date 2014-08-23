define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var SquadMemberDisplayNode = Ash.Node.create({
        squadMember : Components.SquadMember,
        htmlObject : Components.HTMLObject,
    });

    return SquadMemberDisplayNode;
});
