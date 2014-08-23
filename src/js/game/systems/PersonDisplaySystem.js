define([
    'ash', 
    'game/nodes/PersonDisplayNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, PersonDisplayNode, Components, $, sp) {
    var PersonDisplaySystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(PersonDisplayNode);
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
            html = [
                "<div class='soldier'>",
                "foo",
                "</div>",
            ];

            $("#soldiers").append(html.join("\n"));
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

    return PersonDisplaySystem;
});
