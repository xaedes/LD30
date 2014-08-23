define([
    'ash', 
    'game/components/Components'   
], function (
    Ash, 
    Components
) {
    var ChangeSquadDropDownAffectsNode = Ash.Node.create({
        dropDownList : Components.DropDownList,
        affects : Components.Affects,
        htmlObject : Components.HTMLObject,
    });

    return ChangeSquadDropDownAffectsNode;
});
