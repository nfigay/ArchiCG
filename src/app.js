
(function (global) {

   // start the application
   // prevent loading the application if not wished
   window.onload = function () {
      window.addEventListener('beforeunload', (event) => {
         event.returnValue = 'You may have unsaved changes.';
         console.log("beforeunload listener triggered");
      });
      console.log("app loaded");

      //init the ui interface based on W2UI and requiring ui.js was imported in the HTML before   
      ui.init();
      ui.initW2UILayout()

      // integration by the language manager of the archimate language
      // requires palettes/palettes.js, palettes/paletteArchiMate.js, languages/languages.js and  languages/archimate.js imported in the html before      
      //LanguageManager.registerCoreLanguage("archimate", language, addToPalette = true)
      LanguageManager.registerCoreLanguage("ArchiMate", ArchiMateLanguage, addToPalette = true);
      // console.log(config)
   };


})(window); // Pass window object to the IIFE