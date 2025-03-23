(function LanguageManagerIIFE(global) {
    // Private structure to store languages as a hash table (dictionary)
    const languages = {
        core: {}, // Core languages (Hash table)
        extensions: {}, // Extensions (Hash table, extensions keyed by core language)
        pendingExtensions: {}, // Pending extensions
        pendingPalettes: [], // Pending languages to be added to the palette
    };

    // Helper functions

    // Check if a core language is registered
    function isCoreLanguageRegistered(name) {
        return !!languages.core[name];
    }

    // Check if all core languages are registered
    function areAllCoreLanguagesRegistered(coreLanguages) {
        return coreLanguages.every(isCoreLanguageRegistered);
    }

    // Push language to the palette
    function pushToPalette(languageName, definition) {
        if (global.PaletteManager) {
            global.PaletteManager.addLanguage(languageName, definition);
            console.log(`Language "${languageName}" pushed to the palette.`);
        } else {
            console.warn(
                `PaletteManager is not available. Language "${languageName}" not pushed to the palette.`
            );
        }
    }

    // Process languages pending for palette addition
    function processPendingPalettes() {
        const stillPending = [];
        for (const { name, definition } of languages.pendingPalettes) {
            if (isCoreLanguageRegistered(name) || languages.extensions[name]) {
                pushToPalette(name, definition);
            } else {
                stillPending.push({ name, definition });
            }
        }
        languages.pendingPalettes = stillPending;
    }

    // Activate any pending extensions
    function activatePendingExtensions() {
        for (const [extensionName, { coreLanguages, definition }] of Object.entries(
            languages.pendingExtensions
        )) {
            if (areAllCoreLanguagesRegistered(coreLanguages)) {
                registerExtensionLanguage(extensionName, coreLanguages, definition);
                delete languages.pendingExtensions[extensionName];
            }
        }
        processPendingPalettes();
    }

    // Public API for LanguageManager

    // Register a core language
    function registerCoreLanguage(name, definition, addToPalette = false) {
        if (isCoreLanguageRegistered(name)) {
            console.warn(`Core language "${name}" is already registered.`);
            return;
        }

        // Store the core language definition using its name as the key
        languages.core[name] = definition;
        console.log(`Core language "${name}" registered successfully.`);
        
        if (addToPalette) {
            pushToPalette(name, definition);
        }

        // Activate pending extensions after core language is registered
        activatePendingExtensions();
    }

    // Register an extension language
    function registerExtensionLanguage(name, coreLanguages, definition, addToPalette = false) {
        coreLanguages = Array.isArray(coreLanguages) ? coreLanguages : [coreLanguages];

        if (areAllCoreLanguagesRegistered(coreLanguages)) {
            for (const coreLanguage of coreLanguages) {
                if (!languages.extensions[coreLanguage]) {
                    languages.extensions[coreLanguage] = {};
                }
                languages.extensions[coreLanguage][name] = definition;
            }
            console.log(`Extension language "${name}" registered successfully.`);

            if (addToPalette) {
                pushToPalette(name, definition);
            }
        } else {
            languages.pendingExtensions[name] = { coreLanguages, definition };
            if (addToPalette) {
                languages.pendingPalettes.push({ name, definition });
            }
            console.warn(`Extension language "${name}" is pending.`);
        }
    }

    // Push a language to the palette
    function pushLanguageToPalette(name) {
        const definition = languages.core[name] || languages.extensions[name] || languages.pendingExtensions[name]?.definition;
        
        if (!definition) {
            console.error(`Language "${name}" not found.`);
            return;
        }
        pushToPalette(name, definition);
    }

    // Get a list of all core languages
    function getCoreLanguages() {
        return Object.keys(languages.core);
    }

    // Get a list of extensions for a core language
    function getExtensionsForCoreLanguage(coreLanguage) {
        if (!isCoreLanguageRegistered(coreLanguage)) {
            console.error(`Core language "${coreLanguage}" not registered.`);
            return [];
        }
        return Object.keys(languages.extensions[coreLanguage] || {});
    }

    // Retrieve the definition of a core language by name
    function getCoreLanguageDefinition(name) {
        return languages.core[name] || null;
    }

    // Retrieve the definition of an extension language by name
    function getExtensionLanguageDefinition(name) {
        for (const [coreLanguage, extensions] of Object.entries(languages.extensions)) {
            if (extensions[name]) {
                return extensions[name];
            }
        }
        return languages.pendingExtensions[name]?.definition || null;
    }

    // Expose the LanguageManager globally
    global.LanguageManager = {
        registerCoreLanguage,
        registerExtensionLanguage,
        pushLanguageToPalette,
        getCoreLanguages,
        getExtensionsForCoreLanguage,
        getCoreLanguageDefinition,
        getExtensionLanguageDefinition,
    };

    console.log("LanguageManager created.");
})(window);

