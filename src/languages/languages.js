(function LanguageManagerIIFE(global) {
    const languages = {
        core: {},
        extensions: {},
        pendingExtensions: {},
    };

    /**
     * Checks if a core language is already registered.
     */
    function isCoreLanguageRegistered(name) {
        return !!languages.core[name];
    }

    /**
     * Checks if all specified core languages are registered.
     */
    function areAllCoreLanguagesRegistered(coreLanguages) {
        return coreLanguages.every(isCoreLanguageRegistered);
    }

    /**
     * Activates pending extensions once their core languages are registered.
     */
    function activatePendingExtensions() {
        for (const [extensionName, { coreLanguages, definition }] of Object.entries(languages.pendingExtensions)) {
            if (areAllCoreLanguagesRegistered(coreLanguages)) {
                registerExtensionLanguage(extensionName, coreLanguages, definition);
                delete languages.pendingExtensions[extensionName];
            }
        }
    }

    /**
     * Registers a core language and explicitly adds it to the palette.
     */
 
     function registerCoreLanguage(name, definition, addToPalette = false) {
        if (isCoreLanguageRegistered(name)) {
            console.warn(`Core language "${name}" is already registered.`);
            return;
        }

        // Store the core language definition using its name as the key
        languages.core[name] = definition;
        console.log(`Core language "${name}" registered successfully.`);
        
        if (addToPalette) {
            console.log('add to palette will be launch')
            PaletteManager.addLanguage(name, {
                groups: definition.groups || [], // Define the groups of icons
            });
        }

        // Activate pending extensions after core language is registered
        activatePendingExtensions();
    }

    /**
     * Registers an extension language for one or more core languages and explicitly adds it to the palette.
     */
    function registerExtensionLanguage(name, coreLanguages, definition) {
        coreLanguages = Array.isArray(coreLanguages) ? coreLanguages : [coreLanguages];

        if (areAllCoreLanguagesRegistered(coreLanguages)) {
            for (const coreLanguage of coreLanguages) {
                if (!languages.extensions[coreLanguage]) {
                    languages.extensions[coreLanguage] = {};
                }
                languages.extensions[coreLanguage][name] = definition;

                // Explicitly add to the palette
                PaletteManager.addLanguage(name, {
                    groups: definition.groups || [],
                    isExtension: true,
                    coreLanguageId: coreLanguage,
                });
            }
            console.log(`Extension language "${name}" registered successfully.`);
        } else {
            languages.pendingExtensions[name] = { coreLanguages, definition };
            console.warn(`Extension language "${name}" is pending.`);
        }
    }

    /**
     * Retrieves the list of registered core languages.
     */
    function getCoreLanguages() {
        return Object.keys(languages.core);
    }

    /**
     * Retrieves the list of extensions for a specific core language.
     */
    function getExtensionsForCoreLanguage(coreLanguage) {
        if (!isCoreLanguageRegistered(coreLanguage)) {
            console.error(`Core language "${coreLanguage}" not registered.`);
            return [];
        }
        return Object.keys(languages.extensions[coreLanguage] || {});
    }

    /**
     * Retrieves the definition of a registered core language.
     */
    function getCoreLanguageDefinition(name) {
        return languages.core[name] || null;
    }

    /**
     * Retrieves the definition of a registered extension language.
     */
    function getExtensionLanguageDefinition(name) {
        for (const [coreLanguage, extensions] of Object.entries(languages.extensions)) {
            if (extensions[name]) {
                return extensions[name];
            }
        }
        return languages.pendingExtensions[name]?.definition || null;
    }

    // Expose the LanguageManager API
    global.LanguageManager = {
        registerCoreLanguage,
        registerExtensionLanguage,
        getCoreLanguages,
        getExtensionsForCoreLanguage,
        getCoreLanguageDefinition,
        getExtensionLanguageDefinition,
    };

    console.log("LanguageManager created with explicit palette update.");
})(window);
