define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var RandomNameNode = Ash.Node.create({
        randomName : Components.RandomName,
    });

    return RandomNameNode;
});
