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
                "<div>",
                    "<select>",
                    "</select>",
                    "<button>",
                        node.dropDownList.caption,
                    "</button>",
                "</div>",
            ];
            var htmlObject = $(html.join("\n"));
            node.entity.add(new Components.HTMLObject(htmlObject));

            var select = htmlObject.find("select");
            htmlObject.find("button").click(function() {
                var selected = select.find("option:selected");
                if(selected.length>0) {
                    var optionEntity = selected[0].entity;
                    optionEntity.add(new Components.GotSelected());
                }
            });
            

            // append it to the DOM in a default location if there 
            // is no parent yet (due to other systems)
            if(htmlObject.parent().length==0) {
                // no default
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
