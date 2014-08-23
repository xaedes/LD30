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
        createEntity: function() {
            var entity = new Ash.Entity();
            this.game.addEntity(entity);
            return entity;
        },
        createHireButton: function() {
            var entity = new Ash.Entity()
                .add(new Components.Display())
                .add(new Components.Button("Hire"))
                .add(new Components.Emits(Components.HireCommando))
                ;
            this.game.addEntity(entity);
            return entity;
        },
        createCreateSquadButton: function() {
            var entity = new Ash.Entity()
                .add(new Components.Display())
                .add(new Components.Button("Create Squad"))
                .add(new Components.Emits(Components.CreateSquadCommando))
                ;
            this.game.addEntity(entity);
            return entity;
        },
        createChangeSquadInterface: function(soldier) {
            var entity = new Ash.Entity()
                .add(new Components.Display())
                .add(new Components.DropDownList("Change Squad"))
                .add(new Components.Emits(Components.ChangeSquadCommand))
                .add(new Components.Affects(soldier))
                ;
            this.game.addEntity(entity);
            return entity;
        },
        createSquad: function() {
            var entity = new Ash.Entity()
                .add(new Components.Squad())
                .add(new Components.Display())
                .add(new Components.RequestSquadName())
                ;
            this.game.addEntity(entity);
            return entity;
        },
        createSoldier: function(squad) {
            var entity = new Ash.Entity()
                .add(new Components.Person())
                .add(new Components.RandomName())
                .add(new Components.Display())
                .add(new Components.CanChangeSquad())
                ;
            if(squad!==null) {
                entity.add(new Components.SquadMember(squad));
            } else {
                entity.add(new Components.WithoutSquad());
            }
            this.game.addEntity(entity);
            return entity;
        },
    });

    return EntityCreator;
});
