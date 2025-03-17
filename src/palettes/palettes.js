(function palettes_iffe(global) {
  const languages = {}; // Stocke les configurations des langages ajoutés
  const viewpoints = {}; // Stocke les viewpoints pour filtrer les éléments visibles

  function getPaletteContainer() {
    // Récupère le conteneur principal de la palette
    const container = document.getElementById("palette");
    if (!container) {
      console.error("Le conteneur de la palette n'a pas encore été initialisé.");
    }
    return container;
  }

  // L'objet contenant toutes les fonctions du gestionnaire de palettes
  const PaletteManager = {
    addLanguage(languageId, config, options = {}) {
      console.log("addlanguage called")
      const { isExtension = false, coreLanguageId = null } = options;
      console.log(options.isExtension)
      console.log(options.coreLanguageId)
      const paletteContainer = getPaletteContainer();
      if (!paletteContainer) return;

      if (!languages[languageId]) {
        languages[languageId] = config;
        const languageDiv = document.createElement("div");
        languageDiv.id = `language-${languageId}`;
        languageDiv.classList.add("language-group");
        paletteContainer.appendChild(languageDiv);

        if (isExtension && coreLanguageId) {
          languageDiv.classList.add("extension-language");
          languageDiv.setAttribute("data-core-language", coreLanguageId);
        }
        paletteContainer.appendChild(languageDiv);
        this.renderLanguage(languageId);
      }
    },

    renderLanguage(languageId) {
      const paletteContainer = getPaletteContainer();
      if (!paletteContainer) return;

      const language = languages[languageId];
      if (!language) {
        console.error(`Language with ID '${languageId}' not found.`);
        return;
      }

      const languageDiv = document.getElementById(`language-${languageId}`);
      if (!languageDiv) {
        console.error(`Language container with ID 'language-${languageId}' not found.`);
        return;
      }

      // Clear the existing content in the language container
      languageDiv.innerHTML = "";

      // Create a fieldset for each group of icons
      language.groups.forEach((group) => {
        const fieldset = document.createElement("fieldset");
        fieldset.id = `group-${group.id}`;
        fieldset.classList.add("palette-group");

        // Create a legend for the group
        const legend = document.createElement("legend");
        legend.textContent = group.name;
        fieldset.appendChild(legend);

        const groupDiv = document.createElement("div");
        groupDiv.classList.add("icon-group");

        // Add buttons for each icon in the group
        group.icons.forEach((icon) => {
          const button = document.createElement("button");
          button.id = icon.id;
          button.classList.add("palette-icon-button");

          // Wrap `icon.svgShape` in proper <svg> tags
          const svgWrapper = document.createElement("div");
          svgWrapper.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
               <g fill="${icon.color}" stroke="black" stroke-width="2" stroke-width:2'>
                 ${icon.svgShape.trim()}
                 <g>
              </svg>
            `.trim();

          const svgElement = svgWrapper.firstElementChild; // Extract the actual <svg> element

          if (svgElement && svgElement.tagName === "svg") {
            // Set the button size to match the SVG size
            const svgWidth = svgElement.getAttribute("width") || "50";
            const svgHeight = svgElement.getAttribute("height") || "50";

            button.style.width = `${svgWidth}px`;
            button.style.height = `${svgHeight}px`;

            button.appendChild(svgElement);
          } else {
            console.warn(`Invalid SVG content for icon: ${icon.id}`);
            button.textContent = "❓"; // Fallback text if SVG is invalid
          }

          // Add tooltip handling
          button.setAttribute(
            "onmouseenter",
            `w2tooltip.show(this, { html: '${icon.shortTooltip}' });`
          );
          button.setAttribute("onmouseleave", "w2tooltip.hide();");

          groupDiv.appendChild(button);
        });

        fieldset.appendChild(groupDiv);
        languageDiv.appendChild(fieldset);

      });
      // Dynamically calculate and set the width of the group
    }
    ,
    applyViewpoint(viewpointName) {
      const paletteContainer = getPaletteContainer();
      if (!paletteContainer) return;

      const viewpoint = viewpoints[viewpointName] || [];
      // Parcours tous les boutons dans la palette
      const buttons = paletteContainer.querySelectorAll("button");
      buttons.forEach((button) => {
        if (viewpoint.includes(button.id)) {
          button.style.display = ""; // Affiche si présent dans le viewpoint
        } else {
          button.style.display = "none"; // Masque sinon
        }
      });
    },
  };

  // Attache l'objet PaletteManager à l'objet global (ex. window)
  global.PaletteManager = PaletteManager;
  console.log("paletteManager created")
})(window);
