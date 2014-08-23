define([
    'ash', 
    'game/nodes/ButtonDisplayNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, ButtonDisplayNode, Components, $, sp) {
    var ButtonDisplaySystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(ButtonDisplayNode);
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
            var html = [
                "<button>",
                    node.button.caption,
                "</button>",
            ];
            var htmlObject = $(html.join("\n"));
            node.entity.add(new Components.HTMLObject(htmlObject));

            var parent = node.entity.get(Components.Parent);
            if (parent !== null) {
                var parentHTML = parent.entity.get(Components.HTMLObject);
                htmlObject.appendTo(parentHTML.htmlObject);
            }

            // append it to the DOM in a default location if there 
            // is no parent yet (due to other systems)
            if(htmlObject.parent().length==0) {
                htmlObject.appendTo($("#commandos"));
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

    return ButtonDisplaySystem;
});
