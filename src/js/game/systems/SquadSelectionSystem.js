define([
    'ash', 
    'game/nodes/SelectableSquadNode', 
    'game/nodes/SelectedSquadNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, SelectableSquadNode, SelectedSquadNode, Components, $, sp) {
    var SquadSelectionSystem = Ash.System.extend({
        nodes: null,
        selectedNodes: null,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(SelectableSquadNode);
            for(var node = this.nodes.head; node; node = node.next) {
                this.addNode(node);
            }
            this.nodes.nodeAdded.add(this.addNode, this);
            this.nodes.nodeRemoved.add(this.removeNode, this);


            this.selectedNodes = engine.getNodeList(SelectedSquadNode);
            for(var node = this.selectedNodes.head; node; node = node.next) {
                this.addSelectedNode(node);
            }
            this.selectedNodes.nodeAdded.add(this.addSelectedNode, this);
            this.selectedNodes.nodeRemoved.add(this.removeSelectedNode, this);
        },

        removeFromEngine: function (engine) {
            this.nodes = null;
        },


        addNode: function (node) {
            var self = this;
            node.htmlObject.htmlObject.find(node.selectable.iconSelector).addClass(node.selectable.unselectedIcon);
            node.htmlObject.htmlObject.click(function(){
                // only one selected entity is allowed
                // so remove all Selected components from 
                // all other entities
                for(var selectedNode = self.selectedNodes.head; selectedNode; selectedNode = selectedNode.next) {
                    selectedNode.entity.remove(Components.Selected);
                }
                // and now select 
                node.entity.add(new Components.Selected());
            });
        },

        removeNode: function (node) {

        },

        addSelectedNode: function (node) {
            node.htmlObject.htmlObject.find(node.selectable.iconSelector).removeClass(node.selectable.unselectedIcon);
            node.htmlObject.htmlObject.find(node.selectable.iconSelector).addClass(node.selectable.selectedIcon);
        },

        removeSelectedNode: function (node) {
            node.htmlObject.htmlObject.find(node.selectable.iconSelector).removeClass(node.selectable.selectedIcon);
            node.htmlObject.htmlObject.find(node.selectable.iconSelector).addClass(node.selectable.unselectedIcon);
        },
        updateNode: function (node) {


        },

        update: function (time) {
            for(var node = this.nodes.head; node; node = node.next) {
                this.updateNode(node);
            }
        }
    });

    return SquadSelectionSystem;
});
