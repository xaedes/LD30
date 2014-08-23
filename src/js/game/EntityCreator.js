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

        createSquad: function() {
            var entity = new Ash.Entity()
                .add(new Components.Squad())
                .add(new Components.Display())
                ;
            this.game.addEntity(entity);
            return entity;
        },
        createSoldier: function(squad) {
            var entity = new Ash.Entity()
                .add(new Components.Person())
                .add(new Components.RandomName())
                .add(new Components.Display())
                ;
            if(squad!==null) {
                entity.add(new Components.SquadMember(squad));
            }
            this.game.addEntity(entity);
            return entity;
        },
    });

    return EntityCreator;
});
