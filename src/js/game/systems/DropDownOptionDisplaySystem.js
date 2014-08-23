define([
    'ash', 
    'game/nodes/DropDownOptionDisplayNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, DropDownOptionDisplayNode, Components, $, sp) {
    var DropDownOptionDisplaySystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(DropDownOptionDisplayNode);
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
                "<option>",
                    node.dropDownOption.caption,
                "</option>",
            ];
            var htmlObject = $(html.join("\n"));
            node.entity.add(new Components.HTMLObject(htmlObject));

            // add reference to option entity
            htmlObject[0].entity = node.entity;

            // append it to the DOM in a default location if there 
            // is no parent yet (due to other systems)
            if(htmlObject.parent().length==0) {
                // no default
                var ddHTML = node.dropDownOption.dropDownList.get(Components.HTMLObject);
                if(ddHTML!==null){
                    htmlObject.appendTo(ddHTML.htmlObject.find("select"));
                } else {
                    console.log("no htmlobject, this case wasn't considered... and now???");
                }
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

    return DropDownOptionDisplaySystem;
});
