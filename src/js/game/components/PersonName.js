define(['ash'], function (Ash) {
    var PersonName = Ash.Class.extend({
        first: null,
        last: null,
        constructor: function (first, last) {
            this.first = first;
            this.last = last;
        }
    });

    return PersonName;
});

// todo : don't forget to add this component to Components.js
