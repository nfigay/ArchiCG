//ArchiMate Compound Graph Degrees version 0.1 2022-07-02
// Calculation, display and inclusion in data of the usual graphs and graph elements degrees
// as defined in graph theory - based currently on flat graphs, not compound graphs

tools=tools.concat(["ACGDegrees"]);
console.log("ArchiMateCG Degrees loaded");
var theDegree;
var theInDegree;
var theOutDegree;
var theDegreeIL;
var theInDegreeIL;
var theOutDegreeIL;

var theTotalDegree;
var theMinDegree;
var theMaxDegree;
var theMinInDegree;
var theMinOutDegree;
var theMaxIndegree;
var theMaxeOutDegree;
var theTotalDegreeIL;
var theMinDegreeIL;
var theMaxDegreeIL;
var theMinInDegreeIL;
var theMinOutDegreeIL;
var theMaxIndegreeIL;
var theMaxeOutDegreeIL;
var IncludeLoops=true;

//depths.forEach((depth) => {depthsList += '<option value="'+depth+'" />';})

var toolbarACGDegreesDefinition={
    name: 'ACGDegreesDefinition',
    style   : 'background-color: white',
    items: [   
        { type: 'button',  id: 'about',  text: 'About', style:" text-align: center;" },
        { type: 'new-line' },		  
        { type: 'html',  id: 'degree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Degree: 
        <input id="theDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },
        { type: 'html',  id: 'degreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'indegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">InDegree: 
        <input id="theInDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },
        { type: 'html',  id: 'indegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theInDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'outdegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">OutDegree: 
        <input id="theOutDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'outdegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theOutDegreeIL"   style="color:blue;"  size="5" >
        </div>` },        
        { type: 'new-line' },
        { type: 'spacer' },
        { type: 'button',  id: 'calculatefromnode',  text: '<< Calculate from selected node', style:" text-align: center;" },
        { type: 'new-line' },		  
        { type: 'html',  id: 'totaldegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Total Degree: 
        <input id="theTotalDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'totaldegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theTotalDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'mindegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Min Degree: 
        <input id="theMinDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'mindegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theMinDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'maxdegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Max Degree: 
        <input id="theMaxDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'maxdegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theMaxDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'minindegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Min InDegree: 
        <input id="theMinInDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'minindegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theMinInDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'maxindegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Max InDegree: 
        <input id="theMaxInDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'maxindegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theMaxInDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'minoutdegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Min OutDegree: 
        <input id="theMinOutDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'minoutdegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theMinOutDegreeIL"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'new-line' },		  
        { type: 'html',  id: 'maxoutdegree',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Max OutDegree: 
        <input id="theMaxOutDegree"   style="color:blue;"  size="5" >
        </div>` },
        { type: 'spacer' },		  
	    { type: 'html',  id: 'maxoutdegreeil',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">IL: 
        <input id="theMaxOutDegreeIL"   style="color:blue;"  size="5" >
        </div>` }, 
        { type: 'new-line' },
        { type: 'spacer' },
        { type: 'html',  id: 'calculateNodes',  html: `<div style=" height: 20px;display: flex;
        align-items: center;"><< Calculate from</div>` },

        { type: 'button',  id: 'calculatefromselection',  text: 'Selection', style:" text-align: center;align-items: center;vertical-align: middle;" },                
        { type: 'button',  id: 'calculatefromvisible',  text: 'Visible', style:" text-align: center;align-items: center;vertical-align: middle;" },                
        { type: 'button',  id: 'calculatefromfull',  text: 'Full', style:" text-align: center;align-items: center;vertical-align: middle;" },                
 
        { type: 'new-line' },		  
        { type: 'check',  id: 'includesLoop', text: 'Include Loops', checked: false },
 
    ]  ,
    onClick: function(event) {
        if (event.target=="calculatefromnode"){
         var selection = cy.nodes(':selected');
         if (selection.length !=1) {alert ("A single node must be selected!")}
         else{
            //alert ("a single node is selected having the id: "+ selection[0].id())
            var myNode=selection[0];
            document.getElementById('theDegree').value=myNode.degree(false);
            document.getElementById('theInDegree').value=myNode.indegree(false);
            document.getElementById('theOutDegree').value=myNode.outdegree(false);
            document.getElementById('theDegreeIL').value=myNode.degree(true);
            document.getElementById('theInDegreeIL').value=myNode.indegree(true);
            document.getElementById('theOutDegreeIL').value=myNode.outdegree(true);
         }
        }
        if (event.target=="calculatefromselection"){
            var selection = cy.nodes(':selected');
            calculateDegreesForGraph(selection)

            
        }
        if (event.target=="calculatefromvisible"){
            var selection = cy.nodes(':visible');
            calculateDegreesForGraph(selection)
            
        }
        if (event.target=="calculatefromfull"){
            var selection = cy.nodes();
            calculateDegreesForGraph(selection)
            
        }                
    }
}
function calculateDegreesForGraph(selection){

    document.getElementById('theTotalDegree').value=selection.totalDegree(false);
    document.getElementById('theMinDegree').value=selection.minDegree(false);
    document.getElementById('theMaxDegree').value=selection.maxDegree(false);
    document.getElementById('theMinInDegree').value=selection.minIndegree(false);
    document.getElementById('theMinOutDegree').value=selection.minOutdegree(false);
    document.getElementById('theMaxInDegree').value=selection.maxIndegree(false);
    document.getElementById('theMaxOutDegree').value=selection.maxIndegree(false);
    document.getElementById('theTotalDegreeIL').value=selection.totalDegree(true);
    document.getElementById('theMinDegreeIL').value=selection.minDegree(true);
    document.getElementById('theMaxDegreeIL').value=selection.maxDegree(true);
    document.getElementById('theMinInDegreeIL').value=selection.minIndegree(true);
    document.getElementById('theMinOutDegreeIL').value=selection.minOutdegree(true);
    document.getElementById('theMaxInDegreeIL').value=selection.maxIndegree(true);
    document.getElementById('theMaxOutDegreeIL').value=selection.maxIndegree(true);

}
config.toolbarACGDegreesDefinition=toolbarACGDegreesDefinition;