(function(global) {
    // Global configuration settings
//    const config = {
//        apiUrl: 'https://api.example.com',
//        defaultLayout: 'cose',  // Default Cytoscape layout
//        graphContainerId: 'cy', // Container ID for the graph
//        importFormats: ['.json', '.xml'], // Example import formats
//        exportFormats: ['.json', '.svg'], // Example export formats
//    };
var selectedTool="archicgEditor";
var tools=["archicgEditor"];
var toolsMenuItems=[];
var initialgraph =[]
var acg_Edges = []
var acg_Nodes = []

var palettesMenu= [
    { id: 'archimate', text: 'ArchiMate' , checked:true},
    { id: 'meta', text: 'Meta', checked:true },
    { id: 'visual', text: 'Visual', checked:true }
  ]

    // Expose the config to the global scope (window)
    //global.config = config;
    global.selectedTool=selectedTool
    global.palettesMenu=palettesMenu
    global.initialgraph=initialgraph
    global.acg_Edges=acg_Edges
    global.acg_Nodes=acg_Nodes
    global.languageConfig = {
      coreLanguages: [
          { name: "archimate", addToPalette: true }
          //,
          //{ name: "archimateExtension", addToPalette: false }
      ],
      extensionLanguages: [
        //  { name: "Extension1", coreLanguages: ["CoreLanguage1"], addToPalette: true },
        //  { name: "Extension2", coreLanguages: ["CoreLanguage1", "CoreLanguage2"], addToPalette: false }
      ]
  };

})(window); // Pass window object to the IIFE

