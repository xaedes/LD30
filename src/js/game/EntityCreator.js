define([
    'ash',
    'game/components/Components',
    'brejep/keyboard'
], function (
    Ash,
    Components,
    Keyboard
) {

    var EntityCreator = Ash.Class.extend({
        game: null,

        constructor: function (game) {
            this.game = game;
        },

        destroyEntity: function(entity) {
            this.game.removeEntity(entity);
        }, 

        createSoldier: function() {
            var entity = new Ash.Entity()
                .add(new Components.Person())
                .add(new Components.RandomName())
                .add(new Components.Display())
                ;
            this.game.addEntity(entity);
            return entity;
        },
    });

    return EntityCreator;
});
