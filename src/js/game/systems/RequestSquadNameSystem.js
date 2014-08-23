define([
    'ash', 
    'game/nodes/RequestSquadNameNode', 
    'game/components/Components',
    'jquery', 
    'sprintf'
], function (Ash, RequestSquadNameNode, Components, $, sp) {
    var RequestSquadNameSystem = Ash.System.extend({
        nodes: null,
        names: [
            "Alpha",
            "Bravo",
            "Charlie",
            "Delta",
            "Echo",
            "Foxtrot",
            "Golf",
            "Hotel",
            "India",
            "Juliet",
            "Kilo",
            "Lima",
            "Mike",
            "November",
            "Oscar",
            "Papa",
            "Quebec",
            "Romeo",
            "Sierra",
            "Tango",
            "Uniform",
            "Victor",
            "Whiskey",
            "X-ray",
            "Yankee",
            "Zulu",
            ],
        nameCounter: 0,

        constructor: function () {
            return this;
        },

        addToEngine: function (engine) {
            this.nodes = engine.getNodeList(RequestSquadNameNode);
            for(var node = this.nodes.head; node; node = node.next) {
                this.addNode(node);
            }
            this.nodes.nodeAdded.add(this.addNode, this);
            this.nodes.nodeRemoved.add(this.removeNode, this);
        },

        removeFromEngine: function (engine) {
            this.nodes = null;
        },

        newName: function () {
            var i = this.nameCounter;
            var name = [];
            do{
                var digit = i % this.names.length;
                name.unshift( this.names[digit] );
                i -= digit;
                i /= this.names.length;
            } while(i>0);

            this.nameCounter++;

            return name.join("-");
        },

        addNode: function (node) {
            node.entity.add(new Components.SquadName(this.newName()));
            node.entity.remove(Components.RequestSquadName);
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

    return RequestSquadNameSystem;
});
