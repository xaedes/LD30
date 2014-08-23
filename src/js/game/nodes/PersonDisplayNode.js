define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var PersonDisplayNode = Ash.Node.create({
        person : Components.Person,
        display : Components.Display,
    });

    return PersonDisplayNode;
});
