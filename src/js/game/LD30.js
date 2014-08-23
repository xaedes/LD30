define([
    'ash',
    'jquery',
    'underscore',
    'brejep/tickprovider',
    'brejep/keypoll',

    'game/systems/PersonDisplaySystem',    
    'game/systems/SquadDisplaySystem',    
    'game/systems/SquadMemberDisplaySystem',    
    'game/systems/ButtonDisplaySystem',    
    'game/systems/ButtonEmitterSystem',    
    'game/systems/RandomNameSystem',    
    'game/systems/HireCommandSystem',    
    'game/systems/CreateSquadCommandSystem',    
    'game/systems/RequestSquadNameSystem',    
    'game/systems/ChangeSquadSystem',    
    'game/systems/DropDownListSystem',    
    'game/systems/DropDownOptionDisplaySystem',    
    'game/systems/DropDownOptionEmitterSystem',    
    'game/systems/ChangeSquadCommandSystem',    
    'game/systems/SquadSelectionSystem',    

    'game/systems/SystemPriorities',    
    'game/EntityCreator', 
], function (
    Ash,
    $,
    _,
    TickProvider,
    KeyPoll,

    PersonDisplaySystem,
    SquadDisplaySystem,
    SquadMemberDisplaySystem,
    ButtonDisplaySystem,
    ButtonEmitterSystem,
    RandomNameSystem,
    HireCommandSystem,
    CreateSquadCommandSystem,
    RequestSquadNameSystem,
    ChangeSquadSystem,
    DropDownListSystem,
    DropDownOptionDisplaySystem,
    DropDownOptionEmitterSystem,
    ChangeSquadCommandSystem,
    SquadSelectionSystem,

    SystemPriorities,
    EntityCreator
) {

    var LD30 = Ash.Class.extend({
        engine: null,
        tickProvider: null,
        creator: null,
        gamewrapper: null,

        constructor: function (gamewrapper) {
            this.engine = new Ash.Engine();
            this.gamewrapper = $(gamewrapper);

            this.tickProvider = new TickProvider(null);

            this.creator = new EntityCreator(this.engine);

            this.engine.addSystem( new PersonDisplaySystem(),                       SystemPriorities.only);
            this.engine.addSystem( new SquadDisplaySystem(),                        SystemPriorities.only);
            this.engine.addSystem( new SquadMemberDisplaySystem(),                  SystemPriorities.only);
            this.engine.addSystem( new ButtonDisplaySystem(),                       SystemPriorities.only);
            this.engine.addSystem( new ButtonEmitterSystem(this.creator),           SystemPriorities.only);
            this.engine.addSystem( new RandomNameSystem(),                          SystemPriorities.only);
            this.engine.addSystem( new HireCommandSystem(this.creator),             SystemPriorities.only);
            this.engine.addSystem( new CreateSquadCommandSystem(this.creator),      SystemPriorities.only);
            this.engine.addSystem( new RequestSquadNameSystem(),                    SystemPriorities.only);
            this.engine.addSystem( new ChangeSquadSystem(this.creator),             SystemPriorities.only);
            this.engine.addSystem( new DropDownListSystem(),                        SystemPriorities.only);
            this.engine.addSystem( new ChangeSquadCommandSystem(),                  SystemPriorities.only);
            this.engine.addSystem( new DropDownOptionEmitterSystem(this.creator),   SystemPriorities.only);
            this.engine.addSystem( new SquadSelectionSystem(),                      SystemPriorities.only);
            this.engine.addSystem( new DropDownOptionDisplaySystem(),               SystemPriorities.dropdownoptions);


            this.creator.createHireButton();
            this.creator.createCreateSquadButton();
            // create 5 soldiers
            for (var i = 0; i < 5; i++) {
                this.creator.createSoldier(null);
            };

            // export to window
            window.construct = this.construct;
        },
        start: function () {
            this.tickProvider.add(this.engine.update, this.engine);
            this.tickProvider.start();
        },
        construct: function(constructor, args) {
            //http://stackoverflow.com/a/1608546/798588
            function F() {
                return constructor.apply(this, args);
            }
            F.prototype = constructor.prototype;
            return new F();
        },
    });

    // For the time now
    // http://stackoverflow.com/a/10211214/798588
    Date.prototype.timeNow = function () {
         return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    }

    return LD30;
});
