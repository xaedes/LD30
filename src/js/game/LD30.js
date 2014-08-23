define([
    'ash',
    'jquery',
    'underscore',

    'game/EntityCreator',    

    'brejep/tickprovider',
    'brejep/keypoll'
], function (
    Ash,
    $,
    _,
    EntityCreator,
    TickProvider,
    KeyPoll
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
