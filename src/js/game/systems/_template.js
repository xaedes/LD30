define([
    'ash', 
    'game/nodes/???Node', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, ???Node, Components, $, sp) {
    var ???System = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(???Node);
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

        },

        removeNode: function (node) {

        },
        updateNode: function (node) {


        },

        update: function (time) {
            // for(var node = this.nodes.head; node; node = node.next) {
            //     this.updateNode(node);
            // }
        }
    });

    return ???System;
});
