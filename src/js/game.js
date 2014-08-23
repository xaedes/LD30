require([
    'brejep/fillsnfixes',
    'brejep/keypoll',
    'game/LD30'
], function(Fixes, KeyPoll, LD30) {
        'use strict';

        function Game() {
            // Game initialisation
            this.initialise = function() {
                // some polyfills and additions to base javascript classes
                Fixes.initialise();

                var gamewrapper = document.getElementById('game-wrapper');

                // init keyboard poll
                KeyPoll.initialise(window);


                this.ld30 = new LD30(gamewrapper);
                this.ld30.start();
            };

        }

        // start!
        var game = new Game();
        window.game = game;
        game.initialise();
    }
);
 
