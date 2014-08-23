define(['ash'], function (Ash) {
    var Name = Ash.Class.extend({
        first: null,
        last: null,
        constructor: function (first, last) {
            this.first = first;
            this.last = last;
        }
    });

    return Name;
});

// todo : don't forget to add this component to Components.js
