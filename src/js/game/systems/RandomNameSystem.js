define([
    'ash', 
    'game/nodes/RandomNamePersonNode', 
    'game/components/Components',
    'jquery', 
    'sprintf',
    'chancejs',
], function (Ash, RandomNamePersonNode, Components, $, sp, Chance) {
    var RandomNameSystem = Ash.System.extend({
        nodesPersonName: null,

        constructor: function () {
            this.chance = new Chance();
            return this;
        },

        addToEngine: function (engine) {
            this.nodesPersonName = engine.getNodeList(RandomNamePersonNode);
            for(var node = this.nodesPersonName.head; node; node = node.next) {
                this.addNodePersonName(node);
            }
            this.nodesPersonName.nodeAdded.add(this.addNodePersonName, this);
            this.nodesPersonName.nodeRemoved.add(this.removeNode, this);
        },

        removeFromEngine: function (engine) {
            this.nodesPersonName = null;
        },


        addNodePersonName: function (node) {
            node.entity.add(new Components.PersonName(this.chance.first(),this.chance.last()));
        },

        removeNode: function (node) {

        },
        updateNode: function (node) {


        },

        update: function (time) {
            for(var node = this.nodesPersonName.head; node; node = node.next) {
                this.updateNode(node);
            }
        }
    });

    return RandomNameSystem;
});
