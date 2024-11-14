(function(global) {
    // Global configuration settings
    const config = {
        apiUrl: 'https://api.example.com',
        defaultLayout: 'cose',  // Default Cytoscape layout
        graphContainerId: 'cy', // Container ID for the graph
        importFormats: ['.json', '.xml'], // Example import formats
        exportFormats: ['.json', '.svg'], // Example export formats
    };

    // Expose the config to the global scope (window)
    global.config = config;

})(window); // Pass window object to the IIFE
