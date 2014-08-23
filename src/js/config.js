// Set the require.js configuration for your application.
require.config({

    // Initialize the application with the main application file.
    deps: ["game"],

    paths: {
        // JavaScript folders.
        brejep: "lib/ashjs-asteroids-example/lib/brejep", 
        game: "game",

        // Libraries
        ash: "lib/ash-js/build/ash",
        sprintf: "lib/sprintf.js/src/sprintf",
        underscore: "lib/underscore/underscore",
        lzstring: "lib/lzstring/libs/lz-string-1.3.3",
        jquery: "lib/jquery/jquery-2.1.1",
        chancejs: "lib/chancejs/chance",
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "underscore": {
            "exports": "_"
        },
        "sprintf": {
            "exports": "sprintf"
        },
        "lzstring": {
            "exports": "LZString"
        },
        "chancejs": {
            "exports": "Chance"
        },
    }
});
