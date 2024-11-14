// archicg.js

(function(global) {
    // Ensure config.js is loaded before accessing config
    if (!global.config) {
        console.error('Config file not loaded');
        return;
    }

    // Accessing the config object from config.js
    const config = global.config;
    
    // Initialize core state object
    const state = {
        userSettings: null,
        currentGraph: null,
        currentPalette: null,
    };

    // Function to check if external libraries (like Cytoscape.js and W2UI) are available
    function initializeLibraries() {
        if (typeof cytoscape === 'function') {
            console.log('Cytoscape.js is ready.');
        } else {
            console.error('Cytoscape.js not found.');
        }

        if (typeof w2ui === 'object') {
            console.log('W2UI is ready.');
        } else {
            console.error('W2UI not found.');
        }
    }

    // Initialize the application by setting up libraries, state, and UI
    function initApp() {
        initializeLibraries();
        
        console.log('ArchiCG application initialized.');

        // Call the main app logic function (defined in app.js)
        if (typeof startApp === 'function') {
            startApp();
        } else {
            console.error('Main application logic not found in app.js');
        }
    }

    // Expose necessary objects globally (config, state, initApp)
    global.config = config;
    global.state = state;
    global.initApp = initApp;

    // Call the initialization function immediately after loading
    initApp();

})(window); // Expose to the global window object