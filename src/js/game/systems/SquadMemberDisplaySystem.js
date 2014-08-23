define([
    'ash', 
    'game/nodes/SquadMemberDisplayNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, SquadMemberDisplayNode, Components, $, sp) {
    var SquadMemberDisplaySystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(SquadMemberDisplayNode);
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
            // move node entity display into squad display
            if(node.squadMember.squad!==null) {
                var squadHTMLObject = node.squadMember.squad.get(Components.HTMLObject);
                if(squadHTMLObject!==null) {
                    node.htmlObject.htmlObject.appendTo(squadHTMLObject.htmlObject);
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

    return SquadMemberDisplaySystem;
});
