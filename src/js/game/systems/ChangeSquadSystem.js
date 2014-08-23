define([
    'ash', 
    'game/nodes/CanChangeSquadNode', 
    'game/nodes/ChangeSquadDropDownAffectsNode', 
    'game/nodes/NamedSquadNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, CanChangeSquadNode, ChangeSquadDropDownAffectsNode, NamedSquadNode, Components, $, sp) {
    var ChangeSquadSystem = Ash.System.extend({
        canChangeNodes: null,
        dropdownAffectsNodes: null,
        squadNodes: null,
        creator: null,

        constructor: function (creator) {
            this.creator = creator;
            return this;
        },

        addToEngine: function (engine) {
            this.canChangeNodes = engine.getNodeList(CanChangeSquadNode);
            for(var node = this.canChangeNodes.head; node; node = node.next) {
                this.addCanChangeNode(node);
            }
            this.canChangeNodes.nodeAdded.add(this.addCanChangeNode, this);
            this.canChangeNodes.nodeRemoved.add(this.removeCanChangeNode, this);

            this.dropdownAffectsNodes = engine.getNodeList(ChangeSquadDropDownAffectsNode);
            for(var node = this.dropdownAffectsNodes.head; node; node = node.next) {
                this.addDropdownAffectsNode(node);
            }
            this.dropdownAffectsNodes.nodeAdded.add(this.addDropdownAffectsNode, this);
            this.dropdownAffectsNodes.nodeRemoved.add(this.removeDropdownAffectsNode, this);


            this.squadNodes = engine.getNodeList(NamedSquadNode);
            for(var node = this.squadNodes.head; node; node = node.next) {
                this.addSquadNode(node);
            }
            this.squadNodes.nodeAdded.add(this.addSquadNode, this);
            this.squadNodes.nodeRemoved.add(this.removeSquadNode, this);
        },

        removeFromEngine: function (engine) {
            this.canChangeNodes = null;
        },


        addCanChangeNode: function (node) {
            // create drop down list
            var dropdown = this.creator.createChangeSquadInterface(node.entity);

            // create options
            for(var squadNode = this.squadNodes.head; squadNode; squadNode = squadNode.next) {
                this.creator.createChangeSquadOption(node.entity, squadNode.entity, squadNode.name);
            }
        },

        removeCanChangeNode: function (node) {

        },
        updateCanChangeNode: function (node) {

        },

        addDropdownAffectsNode: function (node) {
            // move drop down list to the soldier it affects
            
            if(node.affects.entity!==null) {
                var entityHTMLObject = node.affects.entity.get(Components.HTMLObject);
                if(entityHTMLObject!==null) {
                    node.htmlObject.htmlObject.appendTo(entityHTMLObject.htmlObject);
                }
            }

        },

        removeDropdownAffectsNode: function (node) {

        },
        updateDropdownAffectsNode: function (node) {


        },

        addSquadNode: function (node) {
            // move drop down list to the soldier it affects
            
            if(node.affects.entity!==null) {
                var entityHTMLObject = node.affects.entity.get(Components.HTMLObject);
                if(entityHTMLObject!==null) {
                    node.htmlObject.htmlObject.appendTo(entityHTMLObject.htmlObject);
                }
            }

        },

        removeSquadNode: function (node) {

        },
        updateSquadNode: function (node) {


        },

        update: function (time) {
            for(var node = this.canChangeNodes.head; node; node = node.next) {
                this.updateCanChangeNode(node);
            }
            for(var node = this.dropdownAffectsNodes.head; node; node = node.next) {
                this.updateDropdownAffectsNode(node);
            }
            for(var node = this.squadNodes.head; node; node = node.next) {
                this.updateSquadNode(node);
            }
        }
    });

    return ChangeSquadSystem;
});
