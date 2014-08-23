define([
    'game/components/Person',
    'game/components/Display',
    'game/components/RandomName',
    'game/components/PersonName',
    'game/components/Squad',
    'game/components/SquadMember',
    'game/components/HTMLObject',
    'game/components/Button',
    'game/components/Emits',
    'game/components/HireCommand',
    'game/components/CreateSquadCommand',
    'game/components/SquadName',
    'game/components/RequestSquadName',

    // insert new componente above
    'ash'
], function (
    Person,
    Display,
    RandomName,
    PersonName,
    Squad,
    SquadMember,
    HTMLObject,
    Button,
    Emits,
    HireCommand,
    CreateSquadCommand,
    SquadName,
    RequestSquadName,

    // insert new componente above
    Ash
) {
    var Components = {
        Person: Person,
        Display: Display,
        RandomName: RandomName,
        PersonName: PersonName,
        Squad: Squad,
        SquadMember: SquadMember,
        HTMLObject: HTMLObject,
        Button: Button,
        Emits: Emits,
        HireCommand: HireCommand,
        CreateSquadCommand: CreateSquadCommand,
        SquadName: SquadName,
        RequestSquadName: RequestSquadName,

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
