define([
    'ash', 
    'game/nodes/RandomNameNode', 
    'game/components/Components',
    'jquery', 
    'sprintf',
    'chancejs',
], function (Ash, RandomNameNode, Components, $, sp, Chance) {
    var RandomNameSystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            this.chance = new Chance();
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(RandomNameNode);
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
            node.entity.add(new Components.Name(this.chance.first(),this.chance.last()));
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

    return RandomNameSystem;
});
