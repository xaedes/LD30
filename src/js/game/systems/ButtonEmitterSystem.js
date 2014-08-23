define([
    'ash', 
    'game/nodes/ButtonEmitterNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, ButtonEmitterNode, Components, $, sp) {
    var ButtonEmitterSystem = Ash.System.extend({
        nodes: null,
        creator: null,

        constructor: function (creator) {
            this.creator = creator;
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(ButtonEmitterNode);
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
            var self = this;
            node.htmlObject.htmlObject.click(function () {
                var emission = self.creator.createEntity();
                emission.add(new node.emits.componentClass());
            });
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

    return ButtonEmitterSystem;
});
