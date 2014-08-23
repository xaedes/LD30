define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var DropDownOptionEmitterNode = Ash.Node.create({
    	option : Components.DropDownOption,
    	emits : Components.Emits,
    	gotSelected : Components.GotSelected,
    });

    return DropDownOptionEmitterNode;
});
