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
      addLanguage(languageId, config) {
        const paletteContainer = getPaletteContainer();
        if (!paletteContainer) return;
  
        if (!languages[languageId]) {
          languages[languageId] = config;
  
          const languageDiv = document.createElement("div");
          languageDiv.id = `language-${languageId}`;
          languageDiv.classList.add("language-group");
          paletteContainer.appendChild(languageDiv);
  
          this.renderLanguage(languageId);
        }
      },
  
      renderLanguage(languageId) {
        const paletteContainer = getPaletteContainer();
        if (!paletteContainer) return;
  
        const language = languages[languageId];
        const languageDiv = document.getElementById(`language-${languageId}`);
        if (!languageDiv) return;
  
        languageDiv.innerHTML = ""; // Réinitialise l'affichage
  
        // Crée un fieldset pour chaque groupe d'icônes
        language.groups.forEach((group) => {
          const fieldset = document.createElement("fieldset");
          fieldset.id = `group-${group.id}`;
          fieldset.classList.add("palette-group");
  
          const legend = document.createElement("legend");
          legend.textContent = group.name;
          fieldset.appendChild(legend);
  
          const groupDiv = document.createElement("div");
          groupDiv.classList.add("icon-group");
          group.icons.forEach((icon) => {
            const button = document.createElement("button");
            button.id = icon.id;
            button.innerHTML = icon.text; // Texte ou SVG ici
            button.setAttribute(
              "onmouseenter",
              `w2tooltip.show(this, { html: '${icon.tooltip}' });`
            );
            button.setAttribute("onmouseleave", "w2tooltip.hide();");
            groupDiv.appendChild(button);
          });
  
          fieldset.appendChild(groupDiv);
          languageDiv.appendChild(fieldset);
        });
      },
  
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
  })(window);
  