(function tools_iffe(global) {
    // Configuration object to store registered toolbars
    const tools_config = {
        registeredToolbars: {}, // Store registered toolbars by name
    };

    const tools = {
        /**
         * Initialize the tools manager.
         */
        init: function () {
            console.log('Tools manager initialized.');
        },

        /**
         * Register a toolbar definition.
         * @param {string} name - Unique name of the toolbar.
         * @param {object} definition - Toolbar configuration or callback to create it.
         */
        registerToolbar: function (name, definition) {
            if (tools_config.registeredToolbars[name]) {
                console.warn(`Toolbar "${name}" is already registered.`);
                return;
            }
            tools_config.registeredToolbars[name] = definition;
            console.log(`Toolbar "${name}" registered.`);
        },

        /**
         * Activate a registered toolbar by name.
         * @param {string} name - Name of the toolbar to activate.
         * @returns {boolean} - Whether the toolbar was successfully activated.
         */
        activateToolbar: function (name) {
            const toolbar = tools_config.registeredToolbars[name];
            if (!toolbar) {
                console.error(`Toolbar "${name}" is not registered.`);
                return false;
            }

            // Example: Inject the toolbar into the left panel
            if (typeof toolbar === 'function') {
                toolbar(); // Call the creation callback
            } else if (typeof toolbar === 'object') {
                // Handle object-based definitions (e.g., W2UI toolbar config)
                w2ui['layout'].content('left', $().w2toolbar(toolbar));
            }

            console.log(`Toolbar "${name}" activated.`);
            return true;
        },

        /**
         * List all registered toolbars.
         * @returns {string[]} - Array of registered toolbar names.
         */
        listToolbars: function () {
            return Object.keys(tools_config.registeredToolbars);
        },
    };

    // Expose the tools manager globally
    global.tools = tools;
    console.log("toolManager created")
})(window); // Pass window object to the IIFE
    