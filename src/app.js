
(function(global) {
    

   // Démarrer l’application
   window.onload = function () {
    console.log("window.onload")
    ui.init();
    ui.initW2UILayout()  
    PaletteManager.addLanguage("archimate", archiMateConfig);
    
   // console.log(config)
}   ;

})(window); // Pass window object to the IIFE