define([
    'ash', 
    'game/nodes/ChangeSquadCommandNode', 
    'game/nodes/SelectedSquadNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, ChangeSquadCommandNode, SelectedSquadNode, Components, $, sp) {
    var ChangeSquadCommandSystem = Ash.System.extend({
        nodes: null,
        creator: null,

        constructor: function (creator) {
            this.creator = creator;
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(ChangeSquadCommandNode);
            for(var node = this.nodes.head; node; node = node.next) {
                this.addNode(node);
            }
            this.nodes.nodeAdded.add(this.addNode, this);
            this.nodes.nodeRemoved.add(this.removeNode, this);

            this.selectedSquadNodes = engine.getNodeList(SelectedSquadNode);
        },

        removeFromEngine: function (engine) {
            this.nodes = null;
        },


        addNode: function (node) {
            if (this.selectedSquadNodes.head !== null) {
                node.cmd.soldier.remove(Components.SquadMember());
                node.cmd.soldier.remove(Components.WithoutSquad());

                //get selected Squad
                node.cmd.soldier.add(new Components.SquadMember(this.selectedSquadNodes.head.entity));
            }
            this.creator.destroyEntity(node.entity);

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
