define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var RandomNamePersonNode = Ash.Node.create({
        person : Components.Person,
        randomName : Components.RandomName,
    });

    return RandomNamePersonNode;
});
