define([
    'ash', 
    'game/nodes/DropDownOptionEmitterNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, DropDownOptionEmitterNode, Components, $, sp) {
    var DropDownOptionEmitterSystem = Ash.System.extend({
        nodes: null,
        creator: null,

        constructor: function (creator) {
            this.creator = creator;
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(DropDownOptionEmitterNode);
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
            var emission = this.creator.createEntity();            
            emission.add(construct(node.emits.componentClass, node.emits.constructorArguments));
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

    return DropDownOptionEmitterSystem;
});
