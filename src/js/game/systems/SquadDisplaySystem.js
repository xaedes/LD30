define([
    'ash', 
    'game/nodes/SquadDisplayNode', 
    'game/nodes/SelectedSquadNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, SquadDisplayNode, SelectedSquadNode, Components, $, sp) {
    var SquadDisplaySystem = Ash.System.extend({
        nodes: null,
        selectedNodes: null,

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

            this.selectedNodes = engine.getNodeList(SelectedSquadNode);
        },

        removeFromEngine: function (engine) {
            this.nodes = null;
        },


        addNode: function (node) {
            // create htmlObject
            var html = [
                "<div class='squad'>",
                    "<h2>",
                        "<i class='fa fa-lg'></i>",
                        node.name.name,
                    "</h2>",
                "</div>",
            ];

            var htmlObject = $(html.join("\n"));
            node.entity.add(new Components.HTMLObject(htmlObject));

            node.entity.add(new Components.Selectable('h2','h2>i','fa-square-o','fa-check-square-o', this.selectedNodes));

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
