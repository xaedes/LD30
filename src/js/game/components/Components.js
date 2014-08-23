define([
    'ash'
], function (
    Ash
) {
    var Components = {
        // get name (as string) of component class
        getName: function(componentClass) {



            // _.pairs(object): Convert an object into a list of [key, value] pairs.
            var pairs = _.pairs(this); 
            for (var i = 0; i < pairs.length; i++) {
                if(pairs[i][1] == componentClass) { 
                    return pairs[i][0];
                }
            };
            return null;
        }
    };

    return Components;
});
