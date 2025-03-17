//ArchiMate Compound Graph Selector version 0.1 2022-06-26
// Advanced filtering tool based on finding neightbours or shortest path

tools=tools.concat(["ACGSearch"]);
console.log("ArchiMateCG Selector loaded");
var depths=["1","2","3","4","5","6","7","8","9"];
var depthsList;
var theDepth;
var ACGSearchDirected=false;
var ACGSearchFull=true;
var ACGOngoing=true;
var ACGOutgoing=true;
depths.forEach((depth) => {depthsList += '<option value="'+depth+'" />';})

var toolbarACGSearchDefinition={
    name: 'ACGSearchDefinition',
    style   : 'background-color: white',
    items: [
        
        { type: 'button',  id: 'about',  text: 'About', style:" text-align: center;" },
        { type: 'new-line' },		  
        { type: 'check',  id: 'onvisible', text: 'On visible graph', checked: false },
        { type: 'check',  id: 'onfull',   text: 'On full graph',  checked: true},
        { type: 'new-line' },		  
        { type: 'check',  id: 'ongoing', text: 'On going Edges', checked: true },
        { type: 'check',  id: 'outgoing', text: 'Out going Edges', checked: true},
        { type: 'new-line' },
        { type: 'html',  id: 'depth',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Depth: 
        <input id="theDepth"  list="depths" style="color:blue;"  size="8" >
        <datalist id="depths">${depthsList}</datalist>
        </div>` },
        { type: 'spacer' },
        { type: 'button',  id: 'neighborhood',  text: 'Selected neighborhood>>', style:" text-align: center;" },
 //       { type: 'new-line' },{ type: 'new-line' },{ type: 'new-line' },
 //       { type: 'html',  id: 'item02',  html: 'Hide: ' },
 //       { type: 'button',  id: 'hideSelected',  text: 'Selected', color   : 'gray', },
 //       { type: 'button',  id: 'hideUnselected',  text: 'Unselected' },
 //       { type: 'button',  id: 'showAll',  text: 'Show all' },
 //       { type: 'new-line' },
 //       { type: 'html',  id: 'item03',  html: 'Delete: ' },
 //       { type: 'button',  id: 'deleteSelected',  text: 'Selected' },
 //       { type: 'button',  id: 'deleteUnselected',  text: 'Unselected' },
 //       { type: 'button',  id: 'deleteAll',  text: 'All' },
 //       { type: 'button',  id: 'restore',  text: 'Restore' },
        { type: 'new-line' },{ type: 'new-line' },{ type: 'new-line' },
        { type: 'button',  id: 'select-source',  text: 'Make selection the source' },
        { type: 'new-line' }, 
        { type: 'html',  source: 'pathsource',  html: `<div style=" height: 30px;display: flex;
        align-items: center;">Id:<input id="pathsource"  style="color:blue;"  size="30" ></div>` },
        { type: 'new-line' },
        { type: 'button',  id: 'select-target',  text: 'Make selection the target' },
        { type: 'new-line' }, 
        { type: 'html',  id: 'pathtarget',  html: `<div style=" height: 30px;display: flex;
        align-items: center;">Id:<input id="pathtarget"  style="color:blue;"  size="30" ></div>` },
        { type: 'new-line' },
        { type: 'check',  id: 'directed', text: 'Directed', checked: false, tooltip: 'Parameter for neighborhood and shortest path' },
        { type: 'spacer' },
        { type: 'button',  id: 'shortpath',  text: 'Find Shortest Path >>' }        
    ]  ,
    onClick: function(event) {
  
        if (event.target=="neighborhood"){
            theDepth=document.getElementById('theDepth').value;
            //console.log (theDepth)
            if (depths.includes(theDepth)){
                var myFilter="";
                if (!ACGSearchFull){myFilter=':visible'}
                var startingSelection=cy.nodes(':selected');
                if (ACGOutgoing && ACGOngoing ){
                    for (var i = 0; i < theDepth; i++) {
                        if (myFilter==""){cy.nodes(':selected').neighbourhood().select();}
                        else{cy.nodes(':selected').neighbourhood(myFilter).select();}
                        }
                    }
                if (ACGOutgoing && !ACGOngoing ){
                    for (var i = 0; i < theDepth; i++) {
                        if (myFilter==""){cy.nodes(':selected').successors().select()}
                        else{cy.nodes(':selected').successors(myFilter).select();}
                        }
                    }
                if (!ACGOutgoing && ACGOngoing ){
                    for (var i = 0; i < theDepth; i++) {
                        if (myFilter==""){cy.nodes(':selected').predecessors().select();}
                        else{cy.nodes(':selected').predecessors(myFilter).select();}
                        }
                    }
                }
            else {alert(`Depth should be an integer from 1 to 9`)}
          }

        if (event.target=="ongoing"){
            if (w2ui['ACGSearchDefinition'].get(event.target).checked){
                w2ui['ACGSearchDefinition'].check('outgoing');
                ACGOngoing=false;ACGOutgoing=true;              
            }
            else{ACGOngoing=true;}
          }
        if (event.target=="outgoing"){
             if (w2ui['ACGSearchDefinition'].get(event.target).checked){
                w2ui['ACGSearchDefinition'].check('ongoing');
                ACGOutgoing=false;ACGOngoing=true;}   
             else{ACGOutgoing=true;} 
            }

        if (event.target=="onvisible"){
            if (w2ui['ACGSearchDefinition'].get(event.target).checked){
                w2ui['ACGSearchDefinition'].check('onfull');
                ACGSearchFull=true;
            }
            else{
              w2ui['ACGSearchDefinition'].uncheck('onfull');
              ACGSearchFull=false;
            }
          }
        if (event.target=="onfull"){
            if (w2ui['ACGSearchDefinition'].get(event.target).checked){
                w2ui['ACGSearchDefinition'].check('onvisible');
                ACGSearchFull=false;
            }
            else{
              w2ui['ACGSearchDefinition'].uncheck('onvisible');
              ACGSearchFull=true;
            }           
          }

          if (event.target=="directed"){
            if (w2ui['ACGSearchDefinition'].get(event.target).checked){ACGSearchDirected=false;}
            else{ ACGSearchDirected=true;}         
          }

      if (event.target=="hideSelected"){hideSelected();};
          if (event.target=="hideUnselected"){hideUnselected()};
          if (event.target=="showAll"){showAll()};
          if (event.target=="deleteSelected"){deleteSelected()};
          if (event.target=="deleteUnselected"){deleteUnselected()};
          if (event.target=="deleteAll"){deleteAll()};
          if (event.target=="restore"){restore()};
      if (event.target=="about"){alert(`
ArchiMate Compound Graph Selector version 0.1 2022-06-26
Author: Dr Nicolas Figay

This tool allows filtering the graph based on one node centric graph, with incoming and outcoming edges,
the depth of the graph and the filtering by nodes or edges types (using the palette - Shift+DblClick)

It is also possible to request the shortest path between two nodes, which is then selected on the graph.
Then, by hiding or removing what is unselected, the graph providing the resulting path is available. 

`)};
      if (event.target=="select-source"){
        var selected=cy.elements(':selected');
        if (selected.length == 1){
          document.getElementById('pathsource').value=selected[0].id();
        }
        else{ alert ("A single node must be selected")}
      }
      if (event.target=="select-target"){
        var selected=cy.elements(':selected');
        if (selected.length == 1){
          document.getElementById('pathtarget').value=selected[0].id();
        }
        else{ alert ("A single node must be selected")}
      }
      if (event.target=="shortpath"){
        var myFilter="";
        if (!ACGSearchFull){myFilter=':visible'}
        console.log (myFilter)
        var dijkstra = cy.elements(myFilter).dijkstra('#'+document.getElementById('pathsource').value,
        function(){return 1
          //this.data('weight')
          ;},ACGSearchDirected);
        var pathTo = dijkstra.pathTo( cy.$('#'+document.getElementById('pathtarget').value) );
        var distToJ = dijkstra.distanceTo( cy.$('#'+document.getElementById('pathtarget').value) );
        var thePath=[];
        pathTo.forEach(function(bfsElement){
          console.log(bfsElement.id());
          thePath.push(bfsElement.id());
        })
        pathTo.style('visibility', 'visible');
        pathTo.style('display', 'element');
        pathTo.select();
        alert(`
The found distance for the shortest path between the two nodes is ${distToJ}
Path: ${thePath}
`)
        
      }      
  }
}
config.toolbarACGSearchDefinition=toolbarACGSearchDefinition;