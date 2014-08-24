define([
    'ash', 
    'game/nodes/CanChangeSquadNode',  
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, CanChangeSquadNode, Components, $, sp) {
    var ChangeSquadSystem = Ash.System.extend({
        canChangeNodes: null,
        creator: null,

        constructor: function (creator) {
            this.creator = creator;
            return this;
        },

        addToEngine: function (engine) {
            this.canChangeNodes = engine.getNodeList(CanChangeSquadNode);
            for(var node = this.canChangeNodes.head; node; node = node.next) {
                this.addCanChangeNode(node);
            }
            this.canChangeNodes.nodeAdded.add(this.addCanChangeNode, this);
            this.canChangeNodes.nodeRemoved.add(this.removeCanChangeNode, this);

        },

        removeFromEngine: function (engine) {
            this.canChangeNodes = null;
        },


        addCanChangeNode: function (soldierNode) {
            // create drop down list
            var changesquadUI = this.creator.createChangeSquadInterface(soldierNode.entity);
        },

        removeCanChangeNode: function (node) {

        },
        updateCanChangeNode: function (node) {

        },

        update: function (time) {
            for(var node = this.canChangeNodes.head; node; node = node.next) {
                this.updateCanChangeNode(node);
            }
        }
    });

    return ChangeSquadSystem;
});
