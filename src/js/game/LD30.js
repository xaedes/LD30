define([
    'ash',
    'jquery',
    'underscore',
    'brejep/tickprovider',
    'brejep/keypoll',

    'game/systems/PersonDisplaySystem',    
    'game/systems/SquadDisplaySystem',    
    'game/systems/SquadMemberDisplaySystem',    
    'game/systems/RandomNameSystem',    

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
    RandomNameSystem,

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

            this.engine.addSystem( new PersonDisplaySystem(), SystemPriorities.only);
            this.engine.addSystem( new SquadDisplaySystem(), SystemPriorities.only);
            this.engine.addSystem( new SquadMemberDisplaySystem(), SystemPriorities.only);
            this.engine.addSystem( new RandomNameSystem(), SystemPriorities.only);

            this.creator = new EntityCreator(this.engine);

            // create 5 soldiers

            var squad = this.creator.createSquad();
            for (var i = 0; i < 5; i++) {
                this.creator.createSoldier(squad);
            };

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
