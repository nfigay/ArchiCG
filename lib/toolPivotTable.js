tools=tools.concat(["PivotTable"]);
console.log("Pivot Table tool added");

var toolbarPivotTableDefinition={
    name: 'toolbarPivotTableDefinition',
    style   : 'background-color: white',
    items: [
        
        { type: 'button',  id: 'pivotTable01',  text: 'Apply' },  
        { type: 'spacer' },
        { type: 'button',  id: 'switch',  text: 'Show', style:" text-align: center;" },
    ]  ,
    onClick: function(event) {
      if (event.target=="pivotTable01"){
        $(function(){
            $("#pivottable").pivot(
                [
                    {source: "ArchiMateCG Viewer and Analyser", target: "Practices"},
                    {source: "Archi", target: "Export Model as Compound Graph"},
                    {source: "Archi", target: "exportModelAsCompoundGraph"},
                    {source: "Archi", target: "exportModelAsCompoundGraph"},
                    {source: "Archi", target: "exportModelAsCompoundGraph"},
                    {source: "Archi", target: "Import as Open Exchange Format"},
                    {source: "Archi", target: "Archi Models"},
                    {source: "ArchiMate Model Repositories", target: "square"},
                    {source: "ArchiMate Modelling Platforms", target: "ArchiMate Model Repositories"},
                    {source: "ArchiMate Modelling Platforms", target: "Import as Open Exchange Format"},
                    {source: "ArchiMate Modelling Platforms", target: "Export as Open Exchange Format"},
                    {source: "ArchiMateCG Viewer and Analyser", target: "ArchiMateCG Viewer and Analyser Product"},
                    {source: "ArchiMateCG Viewer and Analyser", target: "Business Cases"},
                    {source: "ArchiMateCG Viewer and Analyser", target: "Business Cases"},
                    {source: "ArchiMateCG Viewer and Analyser", target: "Business Cases"},
                    {source: "ArchiMateCG Viewer and Analyser", target: "ArchiMateCG Features"},
                    {source: "ArchiMateCG Viewer and Analyser Product", target: "Enterprise Cartography Requirements"}
                ],
                {
                    rows: ["source"],
                    cols: ["target"]
                }
            );
         });
      };
      if (event.target=="switch"){
        if (event.target=="switch"){
            if (document.getElementById("pivottable").style.display == "block"){
              document.getElementById("pivottable").style.display = "none";
              document.getElementById("cy").style.height = "100%";
         //     document.getElementById("cy").style.display = "block";
            }else{
              document.getElementById("pivottable").style.display = "block";
              document.getElementById("cy").style.height = "75%";
              document.getElementById("pivottable").style.height = "25%";
              try{
                //refreshing the pivot table??
              } catch(error){}

            };
          }
      };

  }
}
config.toolbarPivotTableDefinition=toolbarPivotTableDefinition;
