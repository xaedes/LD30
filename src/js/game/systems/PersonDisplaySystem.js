define([
    'ash', 
    'game/nodes/PersonDisplayNode', 
    'game/nodes/SelectedPersonNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, PersonDisplayNode, SelectedPersonNode, Components, $, sp) {
    var PersonDisplaySystem = Ash.System.extend({
        nodes: null,
        selectedNodes: null,

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
            
            this.selectedNodes = engine.getNodeList(SelectedPersonNode);
        },

        removeFromEngine: function (engine) {
            this.nodes = null;
        },


        addNode: function (node) {
            // create htmlObject
            var html = [
                "<div class='soldier'>",
                    "<span class='name'>",
                        "<i class='fa fa-lg'></i>",
                        "<span class='first'>",
                            node.name.first,
                        "</span> ",
                        "<span class='last'>",
                            node.name.last,
                        "</span>",
                    "</span>",
                "</div>",
            ];
            var htmlObject = $(html.join("\n"));
            node.entity.add(new Components.HTMLObject(htmlObject));

            node.entity.add(new Components.Selectable('.name','.name>i','fa-square-o','fa-check-square-o', this.selectedNodes));

            // append it to the DOM in a default location if there 
            // is no parent yet (due to other systems)
            if(htmlObject.parent().length==0) {
                htmlObject.appendTo($("#soldiers"));
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

    return PersonDisplaySystem;
});
