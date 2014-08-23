define([
    'game/components/Person',
    'game/components/Display',
    'game/components/RandomName',
    'game/components/Name',
    'game/components/Squad',
    'game/components/SquadMember',
    'game/components/HTMLObject',
    'game/components/Button',
    'game/components/Emits',
    'game/components/HireCommando',

    // insert new componente above
    'ash'
], function (
    Person,
    Display,
    RandomName,
    Name,
    Squad,
    SquadMember,
    HTMLObject,
    Button,
    Emits,
    HireCommando,

    // insert new componente above
    Ash
) {
    var Components = {
        Person: Person,
        Display: Display,
        RandomName: RandomName,
        Name: Name,
        Squad: Squad,
        SquadMember: SquadMember,
        HTMLObject: HTMLObject,
        Button: Button,
        Emits: Emits,
        HireCommando: HireCommando,

        // insert new componente above
    
        // get name (as string) of component class
        getName: function(componentClass) {
            // _.pairs(object): Convert an object into a list of [key, value] pairs.
            var pairs = _.pairs(this); 
            for (var i = 0; i < pairs.length; i++) {
                if(pairs[i][1] == componentClass) { 
                    return pairs[i][0];
                }
            };
            return null;
        }
    };

    return Components;
});
