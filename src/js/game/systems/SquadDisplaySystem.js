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
        selectedSquadNodes: null,

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

            this.selectedSquadNodes = engine.getNodeList(SelectedSquadNode);
            for(var node = this.selectedSquadNodes.head; node; node = node.next) {
                this.addSelectedSquadNode(node);
            }
            this.selectedSquadNodes.nodeAdded.add(this.addSelectedSquadNode, this);
            this.selectedSquadNodes.nodeRemoved.add(this.removeSelectedSquadNode, this);
        },

        removeFromEngine: function (engine) {
            this.nodes = null;
            this.selectedSquadNodes = null;
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


            // append it to the DOM in a default location if there 
            // is no parent yet (due to other systems)
            if(htmlObject.parent().length==0) {
                htmlObject.appendTo($("#squads"));
            }
            htmlObject.find("h2>i").addClass("fa-square-o");
            var self = this;

            htmlObject.click(function () {
                for(var selectedSquadNode = self.selectedSquadNodes.head; selectedSquadNode; selectedSquadNode = selectedSquadNode.next) {
                    selectedSquadNode.entity.remove(Components.SelectedSquad);
                }
                node.entity.add(new Components.SelectedSquad());
            });
        },

        removeNode: function (node) {

        },
        updateNode: function (node) {


        },

        addSelectedSquadNode: function (node) {
            node.htmlObject.htmlObject.find("h2>i").removeClass("fa-square-o");
            node.htmlObject.htmlObject.find("h2>i").addClass("fa-check-square-o");
        },

        removeSelectedSquadNode: function (node) {
            node.htmlObject.htmlObject.find("h2>i").removeClass("fa-check-square-o");
            node.htmlObject.htmlObject.find("h2>i").addClass("fa-square-o");
        },

        update: function (time) {
            for(var node = this.nodes.head; node; node = node.next) {
                this.updateNode(node);
            }
        }
    });

    return SquadDisplaySystem;
});
