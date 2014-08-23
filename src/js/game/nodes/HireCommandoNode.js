define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var HireCommandoNode = Ash.Node.create({
        hireCommando : Components.HireCommando,
    });

    return HireCommandoNode;
});
