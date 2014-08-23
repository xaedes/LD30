define([
    'ash', 
    'game/nodes/ChangeSquadCommandNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, ChangeSquadCommandNode, Components, $, sp) {
    var ChangeSquadCommandSystem = Ash.System.extend({
        nodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(ChangeSquadCommandNode);
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
            node.cmd.soldier.remove(Components.SquadMember);
            node.cmd.soldier.remove(Components.WithoutSquad());
            node.cmd.soldier.add(new Components.SquadMember(node.cmd.squad));
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

    return ChangeSquadCommandSystem;
});
