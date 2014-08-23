define([
    'ash', 
    'game/nodes/SquadDisplayNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, SquadDisplayNode, Components, $, sp) {
    var SquadDisplaySystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(SquadDisplayNode);
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
            // create htmlObject
            html = [
                "<div class='squad'>",
                    "<h2>",
                        node.name.name,
                    "</h2>",
                "</div>",
            ];

            htmlObject = $(html.join("\n"));
            node.entity.add(new Components.HTMLObject(htmlObject));


            // append it to the DOM in a default location if there 
            // is no parent yet (due to other systems)
            if(htmlObject.parent().length==0) {
                htmlObject.appendTo($("#squads"));
            }
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

    return SquadDisplaySystem;
});
