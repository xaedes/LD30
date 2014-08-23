define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var ButtonEmitterNode = Ash.Node.create({
    	button : Components.Button,
    	emits : Components.Emits,
    	htmlObject : Components.HTMLObject,
    });

    return ButtonEmitterNode;
});
