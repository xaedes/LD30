define([
    'ash', 
    'game/nodes/CreateSquadCommandNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, CreateSquadCommandNode, Components, $, sp) {
    var CreateSquadCommandSystem = Ash.System.extend({
        nodes: null,
        creator: null,

        constructor: function (creator) {
            this.creator = creator;
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(CreateSquadCommandNode);
            for(var node = this.nodes.head; node; node = node.next) {
                this.addNode(node);
            }
            this.nodes.nodeAdded.add(this.addNode, this);
            this.nodes.nodeRemoved.add(this.removeNode, this);
        },

        removeFromEngine: function (engine) {
            this.nodes = null;
        },


        addNode: function (node) {
            // hire a person
            this.creator.createSquad();
            
            // command finished -> destroy
            this.creator.destroyEntity(node.entity);
        },

        removeNode: function (node) {

        },
        updateNode: function (node) {


        },

        update: function (time) {
            for(var node = this.nodes.head; node; node = node.next) {
                this.updateNode(node);
            }
        }
    });

    return CreateSquadCommandSystem;
});
