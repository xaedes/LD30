define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var ChangeSquadDropDownAffectsNode = Ash.Node.create({
        changingSquad: Components.ChangingSquad,
        dropDownList : Components.DropDownList,
        affects : Components.Affects,
        htmlObject : Components.HTMLObject,
    });

    return ChangeSquadDropDownAffectsNode;
});
