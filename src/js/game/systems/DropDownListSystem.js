define([
    'ash', 
    'game/nodes/DropDownListNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, DropDownListNode, Components, $, sp) {
    var DropDownListSystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(DropDownListNode);
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

    return DropDownListSystem;
});
