
/*tslint:disabled*/
// archicg Viewer and Analyzer - Web Browser only configuration
// Author: Nicolas Figay
// 2024-11-03
// Version 1.0.19
// All rights reserved



fieldSetsList=[]
//// cyGraph:the graph displayed when lauching the application
//   The initial graph can be feeded through initialgraph.js - which can differ according to the distribution 
const specializationDenotation="<|-- "
var expressionApplyTo="nodes";
var myEntityNodes;
var multiLanguagespaletteStructure=[];
var ArchiMateAllowedRelationshipEnforce = true;
var globalElementVisualMode="nodes";//nodes or boxes
var globalRelationVisualMode="edge";//edge or node
var cyGraph =[];
var showEdgeComposite=false;
var globalProperty="";
var globalPropertyValue="";
var globalLabel="";
var globalNodeType="";
var globalEdgeType="";
var globalTargetId="";
var globalSourceId="";
var globalParenId="";
var globalOverlayOpacity=0;
var POverlayOpacity=0;
var api;
var removed;
var cdnd;
var eh;
var globalColoredProperty;
var globalArrowWidth;
var propertyColorDefined;
var valueTypeColorDefined;
var globalPalette=``;
var acgTypes=[];

var acg_Edges=[];
var acg_Nodes=[]
var acg_Edge_Specializations=[]
var acg_Node_Specializations=[]

var specializations=[];
var specializationBusinessActor=[];
var specializationWorkPackage=[];
var specializationBusinessProcess=[];
var specializationRequirement=[];
var specializationStakeholder=[];
var specializationProduct=[];
var specializationApplicationComponent=[];
var specializationFacility=[];
var palettesMenu= [
  { id: 'archimate', text: 'ArchiMate' , checked:true},
  { id: 'meta', text: 'Meta', checked:true },
  { id: 'visual', text: 'Visual', checked:true }
]
var allPropertyNames=["label","description", "timestamp"]
var toolName
var archicgIconURLArray={};
var archicgBoxWithIconURLArray={};
let mapToolbarDefinitions=new Map()




// Get a reference to the div element where you want to log messages
var logDiv = document.getElementById("logDiv");

// Create a new InPageAppender and set its layout
var inPageAppender = new log4javascript.InPageAppender(logDiv);
inPageAppender.addCssProperty( "width", "98%")
inPageAppender.addCssProperty( "padding", "20px")
inPageAppender.addCssProperty( "zindex", "999")
inPageAppender.setLayout(new log4javascript.PatternLayout("%d{HH:mm:ss} %-5p - %m%n"));
// Add the appender to the root logger
var logger = log4javascript.getLogger();
logger.addAppender(inPageAppender);


//default property of graph elements giving the resource to be navigated
var URLProperty="URL";
//by default, there is no URL navigation when dblcliking on a graph element
var URLNavigationActivated=false;
var defaultCyLayout={
  name: "fcose",
  randomize: true,
  // boundingBox:{x1:0,y1:0,x2:2000,y2:2000}, //does not apply to fcose
  //       fisheye: true,
  animate: 'end',
  fit: true,
  nodeDimensionsIncludeLabels: "true",
  condense:true,
  gravity: 1000,
  gravityRangeCompound: 1,
  gravityCompound: 0.5,
  gravityRange: 3.8,
  packComponents: true,
//       initialEnergyOnIncremental: 0.3,
//       nodeRepulsion: node => 10000,
//       idealEdgeLength: edge => 10,
//       edgeElasticity: edge => 0.45,
//       nestingFactor: 0.1,
  numIter: 5000,
  quality: "default"
};
var cyLayout=defaultCyLayout;
var acgLayout="fcose";
var cy;
var ur;
var undoRedo=true;
var tagStack=[];
var error;
// var tooltips
var paletteTooltipsOn=false;
var UITooltipsOn=true;
var graphTooltipsOn=false;
var groupEdges=true;
var allowNestedEdgeCollapse=true;
var selectedTool="archicgEditor";
var tools=["archicgEditor"];
var toolsMenuItems=[];
//var toolbararchicgEditor;
var modelURI;
var toolbararchicgEditor;
var toolbars={};
var globalColor="";
//Opacity for overlay colors - paramater used for coloring and coloredMap
var overlayOpacity=0;
var paletteButtonsCheck={};

function myPalette2(){
  var myPalette=globalPalette ;
  return myPalette;
  }

  function archicgIconURL(type) { 
    modifiedType= type.replaceAll("-", "_").replace("location", "locationSVG");
    var theInstructions = 
    "archicgIconURLArray['"+type+"']=URL.createObjectURL(new Blob(["+modifiedType+".outerHTML], {'type':'image/svg+xml'})).toString();";
     var F=new Function (theInstructions);
    //eval(theInstructions);
    try{
     F();}catch(error){console.log(error)}
    // console.log(archicgIconURLArray[type])
    return;
  }
  function archicgBoxWithIconURL(type) { 
    modifiedType= type.replaceAll("-", "_").replace("location", "locationSVG");
    var svgIcon=ArchiMate(type);
    //console.log(svgIcon)
    var theBoxWithIconSVG=`
    <svg xmlns="http://www.w3.org/2000/svg" id="${modifiedType}_box" class="archimate-icon-with-box"  width="300" height="200" viewBox="0 0 300 200"  >
       <rect x=5 y=5 width=290 height=190 fill="none" stroke="black" stroke-width="5"/>
         <g transform="translate(240,10)">
         <image href="${svgIcon}"/> </g>
         </svg>
    `
    var newSvg = document.getElementById('ArchiMateSVGIconWithBox');
    newSvg.outerHTML +=theBoxWithIconSVG ;
    //console.log (theBoxWithIconSVG)
    var theInstructions ="archicgBoxWithIconURLArray['"+type+"']=URL.createObjectURL(new Blob(["+modifiedType+"_box.outerHTML], {'type':'image/svg+xml'})).toString();";
    console.log(theInstructions) 
    var F=new Function (theInstructions);
    //eval(theInstructions);
    try{
     F();}catch(error){console.log(error)}
    // console.log(archicgBoxWithIconURLArray[type])
    return;
  }

// function to inspect object
function inspectObject(obj, indent = 0) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        console.log(' '.repeat(indent) + key + ':');
        inspectObject(obj[key], indent + 2);  // Recursive call to explore nested object
      } else {
        console.log(' '.repeat(indent) + key + ':', obj[key]);
      }
    }
  }
}
  // Function to get all property names of nodes and edges
function getAllPropertyNames() {
  let propertyNames = new Set();

  // Iterate through all nodes
  cy.nodes().forEach(function (node) {
    let data = node.data();
    for (let property in data) {
      if (data.hasOwnProperty(property)) {
        propertyNames.add(property);
      }
    }
  });

  // Iterate through all edges
  cy.edges().forEach(function (edge) {
    let data = edge.data();
    for (let property in data) {
      if (data.hasOwnProperty(property)) {
        propertyNames.add(property);
      }
    }
  });

  return Array.from(propertyNames);
}

// function to explore collapsed edge within a tree like grid
function exploreCollapsedEdge(edge) {
  //testing if some collapsed edges exist
  if (edge.hasClass('cy-expand-collapse-collapsed-edge')){
    console.log(edge.data("collapsedEdges"))
    for ( subEdge of edge.data("collapsedEdges")) {
      console.log(subEdge)
      exploreCollapsedEdge(subEdge);
  }
  }
// we have the iteration structure, then tree grid data are to be created and they must feed a dedicated  
  
  return edge;
}

// Function to update property names
function updatePropertyNames() {
  allPropertyNames = getAllPropertyNames();
  let datalist = document.getElementById('propertyList');
  if (datalist == undefined){}else{

  // Clear the current options
  datalist.innerHTML = '';

  // Add new options
  allPropertyNames.forEach(function(propertyName) {
    let option = document.createElement('option');
    option.value = propertyName;
    datalist.appendChild(option);
  });
  logger.debug('All Property Names:', allPropertyNames);
}
}

function savePaletteButtonsCheck(){
  var buttons=document.getElementsByClassName("el-button");  
  [].forEach.call(buttons, function (button) {
    var buttonId=button.id;
    var buttonCheck=button.checked;
    //console.log(buttonCheck)
    paletteButtonsCheck[buttonId]=buttonCheck;
  });
  //console.log (paletteButtonsCheck);
}

function restorePaletteButtonsCheck(){
  var buttons=document.getElementsByClassName("el-button");
  [].forEach.call(buttons, function (button) {
    var buttonId=button.id;
    button.checked=paletteButtonsCheck[buttonId];
    var buttonSVGId=button.getElementsByTagName("svg")[0].id;
    var myColor="white";
    if (button.checked){myColor="lightgray"}
    document.getElementById(buttonSVGId).style.backgroundColor = myColor;
  }); 
}



let gridLayoutOptions={ 
name:'grid',
quality:"default",
randomize:false,
animate:true,
animationDuration:5000,
fit:true,
padding:30,
avoidOvelap:true,
nodeDimensionsIncludeLabels:true,
condense:true,
sort:function (a,b){return a.data('label').localeCompare(b.data("label"))}		
};



let playerLayoutOptions={
  name: 'fcose',
  quality: "default",
  randomize: false,
  animate: true,
  animationDuration: 1000,
  animationEasing: 'ease-out',
  fit: true,
//  padding: 30,
 // nestingFactor: 0.1,
//  gravityRangeCompound: 1.5,
//  gravityCompound: 1.0,
  step:"all"
};

let download = function(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
  }
  else {
      pom.click();
  }
};


//// Set of functions which will be used archicg 
$(function () {
  // initialization in memory
  $().w2layout(config.layoutNodeCreation);
  $().w2form(config.formNodeCreation);
 
});


// dispatch to the appropriate function depending on shiftKey pressed or not
// shift + dblclick => filtering on the graph
// dblckick without shift => set the global creation type value

const paletteDblclick =function (e){
  
  if (e.shiftKey) {paletteHideByType(e);}
   else {setCreationType(e);}
}

var setCreationType=function(e){ 
  var typesToConsider=e.currentTarget.getElementsByTagName('svg')[0].id.replaceAll("_","-").replace("locationSVG","location");
  var fieldNode = globalNodeType;
  var fieldEdge=globalEdgeType;
  if (acg_ArchiMateRelations.includes(typesToConsider)){
    if (document.getElementById("globalNodeType")!== null){
    document.getElementById("globalEdgeType").value=typesToConsider;}
    globalEdgeType=typesToConsider;
    
    
  }
  else{
    if (document.getElementById("globalNodeType")!== null)
    {
      document.getElementById("globalNodeType").value=typesToConsider;}
      globalNodeType=typesToConsider;
  }
}

/// Function launched when selecting an element of the palette
var paletteHideByType = function (e){
  var filter=""
  var buttonSVGId=e.currentTarget.getElementsByTagName("svg")[0].id;

  if (e.currentTarget.checked == undefined){
     e.currentTarget.true
     document.getElementById(buttonSVGId).style.backgroundColor = "white";}
  e.currentTarget.checked = (e.currentTarget.checked) ? false : true ;
  var myType=e.currentTarget.getAttribute("id").replace("-button", "");
  alert(acg_Node_Specializations)
  alert(myType)
  if (acg_Nodes.includes(myType)){filter="node[type ='"+myType +"']";}
  if (acg_Node_Specializations.includes(myType)){filter="node[specialization ='"+myType +"']";}
  myRelationshipType=myType+"-relationship"
  if (acg_Edges.includes(myRelationshipType)){filter="edge[edgeType='"+myType +"']";}
  if (acg_Edge_Specializations.includes(myRelationshipType)){filter="edge[specialization ='"+myType +"']";} 

  document.getElementById(buttonSVGId).style.backgroundColor = "white";
  var eles = cy.elements(filter);

  if (e.currentTarget.checked){
    document.getElementById(buttonSVGId).style.backgroundColor = "lightgray";
    eles = eles.filter(":visible");
    eles = eles.union(eles.connectedEdges());
    eles.css('visibility', 'hidden');
    eles.css('display', 'none'); 
  } else {
    document.getElementById(buttonSVGId).style.backgroundColor = "white";
    eles = eles.filter(":hidden");
    eles = eles.union(eles.connectedEdges());
    eles.style('visibility', 'visible');
    eles.style('display', 'element');     
  }
}

// Function for reading files - will be updated with a more sophisticated one
function readTxtFile(file, cb) {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    try {
      cb(fileReader.result);
    } catch (error) {
      logger.error('Given file is not suitable.', error);
    }
  };
  fileReader.onerror = (error) => {
    logger.error('File could not be read!', error);
    fileReader.abort();
  };
  fileReader.readAsText(file);
}

function importEdge(data){
  try {cy.add([data])}catch(e){
  error+="\n"+e;
  console.log(e);
  var eMessage=""+e;
  var matchNonExistingSource=eMessage.match(/^Error: Can not create edge `(.*)` with nonexistant source `(.*)`/);
  var matchNonExistingTarget=eMessage.match(/^Error: Can not create edge `(.*)` with nonexistant target `(.*)`/);       
  console.log(matchNonExistingSource)
  console.log(matchNonExistingTarget)
  if (matchNonExistingSource !== null){
    // blank node creation with missing source
    blankNode={"group":"nodes","data":{"id":matchNonExistingSource[2],"label":"blank-node","type":"blank-node"}};
    cy.add([blankNode]);
    importEdge(data);
  }else{
    if (matchNonExistingTarget !== null){
      // blank node creation with missing source
      blankNode={"group":"nodes","data":{"id":matchNonExistingTarget[2],"label":"blank-node","type":"blank-node"}};
      cy.add([blankNode]);
      importEdge(data);
  }
 }}}


function saveTxtFile(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  
}

function openNodeCreationPopup() {
  w2popup.open({
      title: 'Node Creation',
      width: 800,
      height: 300,
      showMax: true,
      body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>',
      onToggle(event) {
          event.done(() => { w2ui.layout.resize() })
      }
  })
      $('#w2ui-popup #main').w2render('layoutNodeCreation');
      w2ui.layoutNodeCreation.html('main',w2ui.formNodeCreation );
      w2ui.formNodeCreation.refresh();
}



var ldProperties=["label", "description"];
var ITProperties=["id", "timestamp", "source", "target", "parent", "parentRelationId"];
var collapseProperties=["collapse", "position-before-collapse", "size-before-collapse","collapsedChildren",
      "expandcollapseRenderedStartX", "expandcollapseRenderedStartY","expandcollapseRenderedCueSize", 
      "x-before-fisheye","y-before-fisheye","width-before-fisheye","height-before-fisheye", "infoLabel", "originalEnds"];

function toto(){console.log("toto")}

function getProperties(element){
  var output=[];
  for (const [key, value] of Object.entries(element.data())) {
    if (collapseProperties.includes(key)){}
        else{
              logger.debug("key:"+ key + " value:"+ value);
              output.push({id:element.id() , name:key, value:value});
            }
  }
  return output;
}

function getEdges(edge){
  return {
		"id": edge.id(),
    "edgeType":edge.data("edgeType"),
    "specialization":edge.data("specialization"),
    "label":edge.data("label"),
    "source":edge.data("source"),
    "target":edge.data("target")
	}
}
function getNodes(node){
  return {
		"id": node.id(),
    "type":node.data("type"),
    "specialization":node.data("specialization"),
    "label":node.data("label"),
    "parent":node.data("parent"),
    "parentRelationId":node.data("parentRelationId"),
    "parentContainmentId":node.data("parentContainmentId"),  
	}
}

function getNodes4OWL(node){
   var theID=modelURI+"#"+node.id();
   var types=["http://www.w3.org/2002/07/owl#NamedIndividual"];
   var theArchiMateType="http://www.plm-interop.net/archimate/basic/"+node.data("type");
   types.push(theArchiMateType);
   if (node.data("specialization") !== undefined){
    var theSpecializationType=modelURI+"#"+node.data("specialization");
    types.push(theSpecializationType);
   }
   var theNode={
		"@id": theID,
    "@type":types,
    "http://www.w3.org/2000/01/rdf-schema#label" : [ {"@value" : node.data("label")} ]
	};
   for (const [key, value] of Object.entries( node.data())) {
  //   console.log ("value:");   console.log(value)} ; console.log ("key:");   console.log(key)}  
    if (typeof value === 'undefined' || typeof value === 'object')
    {}
    else{
    var propertyName= "http://www.plm-interop.net/archimate/properties/"+key;
    theNode[ propertyName ]= {"@value" : value} ;
    }
  }
   return theNode
}

function getEdges4OWL(edge){
  var theID=modelURI+"#"+edge.id();
  var types=["http://www.w3.org/2002/07/owl#NamedIndividual"];
  var theArchiMateType="http://www.plm-interop.net/archimate/basic/"+edge.data("edgeType");
  types.push(theArchiMateType);
  if (edge.data("specialization") !== undefined){
     var theSpecializationType=modelURI+"#"+edge.data("specialization");
     types.push(theSpecializationType);
  }
  var theSources=[], theTargets=[];
  var from= "http://www.plm-interop.net/archimate/relations/"+edge.data("edgeType")+"_from";
  var to= "http://www.plm-interop.net/archimate/relations/"+edge.data("edgeType")+"_to";
  var theSource= modelURI+"#"+edge.source().id();
  var theTarget= modelURI+"#"+edge.target().id();
  theSources.push({"@id":theSource});
  theTargets.push({"@id":theTarget});
  var theEdge={};
  theEdge[ "@id"]=theID;
  theEdge[ "@type"]=types;
  if (edge.data("label") !== undefined && edge.data("label")!==""){
     theEdge[ "http://www.w3.org/2000/01/rdf-schema#label" ]= {"@value" : edge.data("label")} ;
  }
  theEdge[from]=theSources;
  theEdge[to]=theTargets;
  for (const [key, value] of Object.entries(edge.data())) {
  //   console.log ("value:");   console.log(value)} ; console.log ("key:");   console.log(key)}  
    if (typeof value === 'undefined' || typeof value === 'object'){}
    else {
       var propertyName= "http://www.plm-interop.net/archimate/properties/"+key;
       theEdge[propertyName ]= {"@value" : value} ;
   }
  }
  return theEdge;	
}

function hideSelected()
{
  //visibility is set to hidden and display to none 
  //for the union of selected and visible nodes
  var eles = cy.$(":selected");
  eles = eles.filter(":visible");
  eles = eles.union(eles.connectedEdges());
  eles.unselect();
  eles.css('visibility', 'hidden');
  eles.css('display', 'none'); 
}

function relationsEdgesToNodes()
{
  //visibility is set to hidden and display to none 
  //for all the ArchiMate relationships edges
  var eles = cy.edges().filter((function(edge, i){
    return acg_ArchiMateRelations.includes(edge.data('edgeType'));
  }));
  eles.css('visibility', 'hidden');
  eles.css('display', 'none');
  eles.forEach(function(edge){
    var relationNode = { group:"nodes",data: { id: edge.id()+"_E" , type:edge.data("edgeType"), label:edge.data("label")} };
    var sourceEdge={ group:"edges",data: { id: edge.id()+"_S" ,edgeType:"source", label:"from", source:edge.id()+"_E", target:edge.data("target")} };
    var targetEdge={ group:"edges",data: { id: edge.id()+"_T" ,edgeType:"target", label:"to", target:edge.id()+"_E", source:edge.data("source")} };
    var sourceId=edge.data("source");
    var sourceParent=cy.$id(`${sourceId}`).parent().id();
    try {
       var newNode=cy.add(relationNode);
       cy.add(sourceEdge)
       cy.add(targetEdge)
       if (sourceParent===undefined){}else{ newNode.move({parent:sourceParent});}
      } catch (error) {
        logger.error('relationEdgesToNodes error: ', error);
    }
   })
}

function relationsNodesToEdges()
{
  //visibility is set to hidden and display to none 
  //for all the ArchiMate relationships nodes and source/target edges
  //visibility is set to visible and display to true 
  //for all the ArchiMate relationships edges

  var eles = cy.nodes().filter((function(node, i){
    return acg_ArchiMateRelations.includes(node.data('type'));
  }));
  eles.forEach(function(node){
    var relationEdgeId=node.id().replace("_E","");
    cy.remove(node);
    cy.$id(`${relationEdgeId}`).css('visibility',"visible");
    cy.$id(`${relationEdgeId}`).css('display',"element");
   })
}

function hideUnselected(){
  var unselected=cy.nodes(":unselected");
  var selected=cy.nodes(":selected");          
  unselected.forEach(function(node){
     if (node.descendants(node.id()).intersection(selected).length == 0){
        node.css('visibility', 'hidden');
        node.css('display', 'none');}
    })
}

function showAll(){
  var eles = cy.filter(":hidden");
  var connectedEdges = eles.connectedEdges(function (edge) {
    if ((edge.source().visible() || eles.contains(edge.source())) && (edge.target().visible() || eles.contains(edge.target()))) {
       return true;
      }
    return false;
 });
  eles = eles.union(connectedEdges);
  eles.unselect();
  eles.style('visibility', 'visible');
  eles.style('display', 'element');  
  var buttons=document.getElementsByClassName("el-button");
  [].forEach.call(buttons, function (button) {
    var buttonId=button.id;
    //console.log(document.getElementById(buttonId))
    //console.log(button)
    button.checked=false;
    //console.log(button.id)
    //console.log(button.checked)
    var buttonSVGId=button.getElementsByTagName("svg")[0].id;
    document.getElementById(buttonSVGId).style.backgroundColor = "white";
  });
}

function deleteSelected(){ 
  var elements = cy.$(":selected");
  if (undoRedo){ur.do("remove", elements)}else 
  {removed=removed.union(cy.remove(elements));}}

function deleteUnselected(){  
  var elements = cy.$(":unselected");
  if (undoRedo){ur.do("remove", elements)}else 
  {removed=removed.union(cy.remove(elements));}
}

function deleteAll(){
  var elements = cy.$();
  if (undoRedo){ur.do("remove", elements)}else 
  {removed=removed.union(cy.remove(elements));}}

function restore(){ removed.restore()}

function applySelected(){
  var elements = cy.$(":selected"); 
  var property=document.getElementById('globalProperty').value;
  var value=document.getElementById('globalPropertyValue').value;
  if (collapseProperties.includes(property)|| ITProperties.includes(property) ||  ldProperties.includes(property)){alert("This name is an archicg reserved property name which can't be applied this way")}
  else {
    w2confirm('Do you want to overwrite existing values of this property for selected graph elements?')
    .yes(() => {elements.forEach(function(el){el.data(property, value)})})
    .no(() => {elements.forEach(function(el){if (el.data(property) !== null){} else {el.data(property, value)}})})
  }
}

function updateLabel(){
  //registered as do action with ur.action("changeLabels", changeLabels, restoreLabels); 
  var elements = cy.$(":selected");
  globalLabel=document.getElementById('globalLabel').value;
  if (undoRedo){
  var ElesAndLabel={eles:elements, label:globalLabel}
  ur.do("changeLabels", ElesAndLabel); }
  else{elements.forEach(function(el){cy.$(el).data("label",globalLabel);});}
  // for testing for do (changeLabels) and undo (restoreLabels) functions: //ur.undo(); //ur.redo();
}


function changeLabels(ElesAndLabel){
  //registered as undo action with ur.action("changeLabels", changeLabels, restoreLabels); 
  var previousLabels=[];
  ElesAndLabel.eles.forEach(function(ele){
    var myLabel;
    if (cy.$(ele).data("label")== undefined){myLabel=""} else{myLabel=cy.$(ele).data("label");}
    previousLabels.push (myLabel);
    cy.$(ele).data("label",ElesAndLabel.label);});
    var ElesAndPreviousLabels={eles:ElesAndLabel.eles, previousLabels:previousLabels}
  return ElesAndPreviousLabels;
}

function restoreLabels( ElesAndPreviousLabels){
  var i=0;
  var myLabel;
  ElesAndPreviousLabels.eles.forEach(function(ele){
    myLabel=cy.$(ele).data("label");
    cy.$(ele).data("label",ElesAndPreviousLabels.previousLabels[i]);
    i++;
  })
  var ElesAndLabel={eles:ElesAndPreviousLabels.eles, label:myLabel};
  return  ElesAndLabel;
}

function updateAcgLayout(){
  acgLayout=document.getElementById('acgLayout').value;
}

function tagNodeWithType(e){
  globalNodeType=document.getElementById('globalNodeType').value
  var nodeType= globalNodeType;
  const elements = cy.nodes(":selected");
  //logger.info(globalNodeType)
  if (undoRedo){ 
    // there is a need for a specilization field in addition to the type one.
    // specialization could then be applied
    // as several sets of specialization can exist, a globalSpecializationSet variable should be created taking the value of the last specialization construct selected.
    // This is to be extensible when having to deal withe different sets of specialization for ArchiMate, but also if willing to deal with several languages for typing the nodes and the edges
    // Should be done on a vector of langguages for typing, each position corresponding to one of the branch of the hypermodel supported by the viewer.
    // it should be possible to change the visualization according to the branch of the hypermodel selected.
    // when a language is links based, the edges should represent the link and the relattionships shoud be turned a nodes with source and target links
    // Here not possible anymore to use shortest path algorithms or any views related to graphs
    // alternative views can be considered
    var ElesAndType={eles:elements, type:globalNodeType}
    ur.do("changeNodesTypes", ElesAndType); 
  }
  else
  {
     elements.forEach(function(el){
       cy.$(el).data("type",nodeType);
       if(specializationBusinessActor.includes(nodeType)){
         cy.$(el).data("type","business-actor");
         cy.$(el).data("specialization",nodeType);
       }
       if(specializationWorkPackage.includes(nodeType)){
         cy.$(el).data("type","work-package");
         cy.$(el).data("specialization",nodeType);
       }
       if(specializationBusinessProcess.includes(nodeType)){
         cy.$(el).data("type","business-process");
         cy.$(el).data("specialization",nodeType);
       }
       if(specializationRequirement.includes(nodeType)){
         cy.$(el).data("type","requirement");
         cy.$(el).data("specialization",nodeType);
       }      
       if(specializationStakeholder.includes(nodeType)){
        cy.$(el).data("type","stakeholder");
        cy.$(el).data("specialization",nodeType);
      }  
      if(specializationProduct.includes(nodeType)){
        cy.$(el).data("type","product");
        cy.$(el).data("specialization",nodeType);
      }
      if(specializationApplicationComponent.includes(nodeType)){
        cy.$(el).data("type","application-component");
        cy.$(el).data("specialization",nodeType);
      }             
      if(specializationFacility.includes(nodeType)){
        cy.$(el).data("type","facility");
        cy.$(el).data("specialization",nodeType);
      }         
       });
    }
  }
  function changeNodesTypes(ElesAndType){
    //registered as undo action with ur.action("changeNodesTypes", changeNodesTypes, restoreNodesTypes); 
    
    var previousTypes=[];

    //alert(ElesAndType.type)
    ElesAndType.eles.forEach(function(ele){
      var myType=cy.$(ele).data("type");
      var mySpecialization= cy.$(ele).data("specialization");
      if (mySpecialization!= undefined){myType=mySpecialization;}
      
      cy.$(ele).data("type",ElesAndType.type);
      if(specializationBusinessActor.includes(ElesAndType.type)){
        cy.$(ele).data("type","business-actor");
        cy.$(ele).data("specialization",ElesAndType.type);
      }
      if(specializationWorkPackage.includes(ElesAndType.type)){
        cy.$(ele).data("type","work-package");
        cy.$(ele).data("specialization",ElesAndType.type);
      }
      if(specializationBusinessProcess.includes(ElesAndType.type)){
        cy.$(ele).data("type","business-process");
        cy.$(ele).data("specialization",ElesAndType.type);
      }
      if(specializationRequirement.includes(ElesAndType.type)){
        cy.$(ele).data("type","requirement");
        cy.$(ele).data("specialization",ElesAndType.type);
      }  
      if(specializationStakeholder.includes(ElesAndType.type)){
        cy.$(ele).data("type","stakeholder");
        cy.$(ele).data("specialization",ElesAndType.type);
      }
      if(specializationProduct.includes(ElesAndType.type)){
        cy.$(ele).data("type","product");
        cy.$(ele).data("specialization",ElesAndType.type);
      }  

      if(specializationApplicationComponent.includes(ElesAndType.type)){
        cy.$(ele).data("type","application-component");
        cy.$(ele).data("specialization",ElesAndType.type);
      }        
      
      if(specializationFacility.includes(ElesAndType.type)){
        cy.$(ele).data("type","facility");
        cy.$(ele).data("specialization",ElesAndType.type);
      }    
      previousTypes.push(myType);
      });
  
      var ElesAndPreviousTypes={eles:ElesAndType.eles, previousTypes:previousTypes}
      
    return ElesAndPreviousTypes;
  }
  
  function restoreNodesTypes( ElesAndPreviousTypes){
    var i=0;
    var myType;
    ElesAndPreviousTypes.eles.forEach(function(ele){
      myType=cy.$(ele).data("type");
      myPreviousType=ElesAndPreviousTypes.previousTypes[i]
      cy.$(ele).data("type",myPreviousType);

      if(specializationStakeholder.includes(myPreviousType)){
        cy.$(ele).data("type","stakeholder");
        cy.$(ele).data("specialization",myPreviousType);
      }
      if(specializationProduct.includes(myPreviousType)){
        cy.$(ele).data("type","product");
        cy.$(ele).data("specialization",myPreviousType);
      } 

      if(specializationApplicationComponent.includes(myPreviousType)){
        cy.$(ele).data("type","application-component");
        cy.$(ele).data("specialization",myPreviousType);
      }       
      if(specializationFacility.includes(myPreviousType)){
        cy.$(ele).data("type","facility");
        cy.$(ele).data("specialization",myPreviousType);
      }                  
      if(specializationBusinessActor.includes(myPreviousType)){
        cy.$(ele).data("type","business-actor");
        cy.$(ele).data("specialization",myPreviousType);
      }
      if(specializationWorkPackage.includes(myPreviousType)){
        cy.$(ele).data("type","work-package");
        cy.$(ele).data("specialization",myPreviousType);
      }
      if(specializationBusinessProcess.includes(myPreviousType)){
        cy.$(ele).data("type","business-process");
        cy.$(ele).data("specialization",myPreviousType);
      }
      if(specializationRequirement.includes(myPreviousType)){
        cy.$(ele).data("type","requirement");
        cy.$(ele).data("specialization",myPreviousType);
      }  
  
      i++;
    })
    var ElesAndType={eles:ElesAndPreviousTypes.eles, type:myType};
    return  ElesAndType;
  } 

  function tagEdgeWithType(e){
    globalEdgeType=document.getElementById('globalEdgeType').value
    const elements = cy.edges(":selected");
    if (undoRedo){
      var ElesAndType={eles:elements, edgeType:globalEdgeType}
      ur.do("changeEdgesTypes", ElesAndType); 
    }
    else {elements.forEach(function(el){cy.$(el).data("edgeType",globalEdgeType);});}
  }
 
 
function changeEdgesTypes(ElesAndType){
  //registered as undo action with ur.action("changeEdgesTypes", changeEdgesTypes, restoreEdgesTypes); 
  var previousTypes=[];
  ElesAndType.eles.forEach(function(ele){
    var myType=cy.$(ele).data("edgeType");
    previousTypes.push (myType);
    cy.$(ele).data("edgeType",ElesAndType.edgeType);});
    var ElesAndPreviousTypes={eles:ElesAndType.eles, previousTypes:previousTypes}
  return ElesAndPreviousTypes;
}

function restoreEdgesTypes( ElesAndPreviousTypes){
  var i=0;
  var myType;
  ElesAndPreviousTypes.eles.forEach(function(ele){
    myType=cy.$(ele).data("edgeType");
    cy.$(ele).data("edgeType",ElesAndPreviousTypes.previousTypes[i]);
    i++;
  })
  var ElesAndType={eles:ElesAndPreviousTypes.eles, edgeType:myType};
  return  ElesAndType;
} 


  function removeSelected(){
    var elements = cy.$(":selected");
    var property=document.getElementById('globalProperty').value;
    if (collapseProperties.includes(property)|| ITProperties.includes(property) ||  ldProperties.includes(property)){alert("This property can be removed from the graph.")}
    else { elements.removeData(property);} 
  }

  function removeUnselected(){
    var elements = cy.$(":unselected"); 
    var property=document.getElementById('globalProperty').value;
    if (collapseProperties.includes(property)|| ITProperties.includes(property) ||  ldProperties.includes(property)){alert("This property can be removed from the graph.")}
    else {elements.removeData(property); } 
  }

  function removeAll(){
    var elements = cy.$();
    var property=document.getElementById('globalProperty').value;
    if (collapseProperties.includes(property)|| ITProperties.includes(property) ||  ldProperties.includes(property)){alert("This property can be removed from the graph.")}
    else {elements.removeData(property); } 
    cy.layout();
  }

  function filterSelect()
  {
    var filterField=document.getElementById('filter-field').value;
    alert("j'y passe");
    var filter=`${filterField}`;
    cy.filter(filter).select();
  }  

  function addParentNode(id,type, parent = undefined, label=undefined) {
    //const id = 'c' + idSuffix;
    //console.log("in un")
    const parentNode = { data: { id: id , type:type, label:label} };
    //console.log("in deux")
    cy.add(parentNode);
    //console.log("in trois")
    var theId=''+`${id}`;
    cy.$id(theId).move({ parent: parent });
    //console.log("in quatre")
    return id;
  }

  function getEdgeOptions() {
    var groupEdgesOfSameTypeOnCollapse = groupEdges;//document.getElementById('groupEdges').checked;
    var allowNestedEdgeCollapse = allowNestedEdgeCollapse;//document.getElementById('allowNestedEdgeCollapse').checked;
    return { groupEdgesOfSameTypeOnCollapse: groupEdgesOfSameTypeOnCollapse, allowNestedEdgeCollapse: allowNestedEdgeCollapse };
  } 

function activateToolBar(tool){ 
    w2ui.layoutToolbars.set("main",{title:"Tool: "+tool});
    w2ui.layoutToolbars.refresh();
    w2ui['layoutToolbars'].html('main', toolbars[tool]);
}
  
////******************************************************************* */
//// User Interface Definition
//   widget definition
//   ******************************************************************* */


var config = {

  layoutNodeCreation: {
    name: 'layoutNodeCreation',
    padding: 0,
    panels: [{ type: 'main', minSize: 350, overflow: 'hidden'}]
   },

  formNodeCreation: {
   name: 'formNodeCreation',
   style:'opacity:1;background-color:white;color:black',
   fields: [
   //{ field: 'id', type: 'text', disabled:true,  html: { label: 'id:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
   { field: 'type', type: 'text', disabled:false,  html: { label: 'type:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
   { field: 'parent', type: 'text', disabled:false,  html: { label: 'parent:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
   { field: 'specialization', type: 'text', disabled:false,  html: { label: 'specialization:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
   { field: 'label', type: 'text', disabled:false,  html: { label: 'Label:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
   { field: 'description',disabled:false, type: 'textarea', html: { label: 'Description', attr: 'size="128"',attr: 'style="width: 100%; height: 90px; resize: vertical;background-color: white;opacity:1;color:black"' } },
   ],
   actions: {
      create: function () {
           var myId=w2ui.formNodeCreation.getValue("id"); //log(myId);  
           var myUUID=new UUID(4);
           var eles=cy.add([
             { group: 'nodes', 
               data: { id:`${myUUID}` ,//new Date().getTime() ,
               timestamp:new Date(), 
               parent:w2ui.formNodeCreation.getValue("parent"),
               //type:document.getElementById('nodeType').value,
               "type":w2ui.formNodeCreation.getValue("type"),
               //type:document.getElementById('nodeType').value,
               //"label": document.getElementById('label').value,
               "label":w2ui.formNodeCreation.getValue("label"),
               "description":w2ui.formNodeCreation.getValue("description"),
               specialization:w2ui.formNodeCreation.getValue("specialization"),
               position: { x: 100, y: 100 } 
              }
             }
            ]);
        api.collapseAll();      
        }  
    }
  },

  layoutProperties: {
    name: 'layoutProperties',
    padding: 0,
    panels: [
      { type: 'left', size: 200, resizable: true, minSize: 35 },
      { type: 'main', minSize: 550, overflow: 'hidden' }
  ]
},
layoutToolbars: {
  name: 'layoutToolbars',
  padding: 0,
  panels: [
    { title:"Tool: "+selectedTool,type: 'main', 
      size: 200, 
      resizable: true, 
      minSize: 35     }
    
]
},

gridProperties: {
  header: "No graph element selected: double clik on a node or a edge",
    name: 'gridProperties',
    show: {
      header: true,
      toolbar: true,
      footer: true,
      toolbarSave: true
  },
    style: 'border: 1px solid #efefef; padding: 0px;', 
    columns: [
        { field: 'recid', text: 'ID', size: '50px', sortable: true, resizable: true },
        { field: 'fname', text: 'Name', size: '30%', sortable: true, searchable: true ,editable: { type: 'text' }},
        { field: 'lvalue', text: 'Value', size: '70%', sortable: true, searchable: true ,editable: { type: 'text' }},
       // { field: 'ltype', text: 'Property type', size: '20%', sortable: true, searchable: true },
       // { field: 'lunmutable', text: 'Unmutable', size: '20%', sortable: true, searchable: true }
    ],
    toolbar: {
      items: [
          { id: 'add', type: 'button', text: 'Add Record', icon: 'w2ui-icon-plus' },
          { id: 'update', type: 'button', text: 'Update Graph', icon: 'w2ui-icon-plus' },
      ],
      onClick: function (event) {
          if (event.target == 'add') {
              w2ui.gridProperties.add({ recid: w2ui.gridProperties.records.length + 1 });
          }
          if (event.target == 'update') {
            //get the id  "id" of the active graph element selected by mean of dblclick
            var myGraphObject=cy.$id(w2ui.form2.getValue("identifier"));
           
            //iterate on the records of the grid, each giving name and value
            // and for each of them, set the cy$(id).data(name) to value
            // If new value, it will update the node property
            // If new property, it will add the node property
            // It should also be possible to deal with deleting properties with several options:
            //    if the field is blank, then ... (to test)
            //    if we want to fully remove the property from the name, let's set null in the field
            //    if we want the property to be undefined, let's set undefined in the field
            // It should also be checked that the name of the properties are not reserved

            //cy.$id(w2ui.form.getValue("identifier")).data("label")
            w2ui.gridProperties.records.map(record => {
              //log(`${record.recid}-> ${record.fname}:${record.lvalue}`);
              myGraphObject.data(record.fname,record.lvalue);
              return 0;
            } )
            alert("updated");
        }
      }
  },
},

gridAttributes: {
  header: "No graph element selected: double clik on a node or a edge",
    name: 'gridAttributes',
    show: {
      header: true,
      toolbar: true,
      footer: true,
      toolbarSave: true
  },
    style: 'border: 1px solid #efefef',
    columns: [
        {field: 'recid', text: 'ID', size: '50px', sortable: true, resizable: true },
        {field: 'key', text: 'Key', size: '50px', sortable: true, resizable: true, editable: { type: 'text' } },
        { field: 'order', text: 'Order', size: '50px', sortable: true, resizable: true, editable: { type: 'text' } },
        { field: 'AttributeId', text: 'Id', size: '50px', sortable: true, resizable: true , editable: { type: 'text' }},
        { field: 'label', text: 'Label', size: '30%', sortable: true, searchable: true ,editable: { type: 'text' }},
        { field: 'type', text: 'Type', size: '30%', sortable: true, searchable: true ,editable: { type: 'text' }},
        { field: 'source', text: 'Source', size: '30%', sortable: true, searchable: true ,editable: { type: 'text' }},
        { field: 'description', text: 'Description', size: '70%', sortable: true, searchable: true ,editable: { type: 'text' }}
    ],
    toolbar: {
      items: [
          { id: 'add', type: 'button', text: 'Add Record', icon: 'w2ui-icon-plus' },
          { id: 'update', type: 'button', text: 'Update Graph', icon: 'w2ui-icon-plus' },
      ],
      onClick: function (event) {
          if (event.target == 'add') {
              w2ui.gridAttributes.add({ recid: w2ui.gridAttributes.records.length + 1 });
          }
          if (event.target == 'update') {
            //get the id  "id" of the active graph element selected by mean of dblclick
            var myGraphObject=cy.$id(w2ui.form2.getValue("identifier"));
            logger.debug("identifier: "+ w2ui.form2.getValue("identifier"))
            //iterate on the records of the grid, each giving name and value
            // and for each of them, set the cy$(id).data(name) to value
            // If new value, it will update the node property
            // If new property, it will add the node property
            // It should also be possible to deal with deleting properties with several options:
            //    if the field is blank, then ... (to test)
            //    if we want to fully remove the property from the name, let's set null in the field
            //    if we want the property to be undefined, let's set undefined in the field
            // It should also be checked that the name of the properties are not reserved

            //cy.$id(w2ui.form.getValue("identifier")).data("label")
            logger.debug("Data: "+myGraphObject.data("label"));
            logger.debug("Data: "+myGraphObject.data("attributes"));
             // logger.debug(myGraphObject.data["attributes"]["record.attributeId"]);
            w2ui.gridAttributes.records.map(record => {
              //log(`${record.recid}-> ${record.fname}:${record.lvalue}`);              
              //var myAttribute={"order":record.attributeorder,"AttributeId":record.attributeId, "label":record.attributelabel, "type":record.attributetype, "source":record.attributesource,"referenceType": record.attributereferencetype,"description": record.attributedescription};
              //logger.debug ("myAttribute")
              //logger.debug (myAttribute)
              //var existingProperties=[];
              //existingProperties.push({"properties":['property4', 'property5']});
              //myGraphObject.data('properties', existingProperties);
              return 0;
            } )
            alert("updated");
        }
      }
  },
},


gridEdges: {
  header: "No collopased edges selected: double clik on collapsed edges",
    name: 'gridEdges',
    show: {
      header: true,
      toolbar: true,
      footer: true,
      toolbarSave: true
  },
    style: 'border: 1px solid #efefef',
    columns: [
        {field: 'edgeid', text: 'Id', size: '50px', sortable: true, resizable: true },
        { field: 'label', text: 'Label', size: '30%', sortable: true, resizable: true },
        { field: 'source', text: 'Source', size: '30%', sortable: true, resizable: true },
        { field: 'target', text: 'Target', size: '30%', sortable: true, resizable: true },
        {field: 'edgetype', text: 'Type', size: '50px', sortable: true, resizable: true },
        { field: 'specialisation', text: 'Order', size: '50px', sortable: true, resizable: true },
        { field: 'description', text: 'Description', size: '70%', sortable: true, searchable: true}
    ],
    toolbar: {
      items: [
          { id: 'add', type: 'button', text: 'Add Record', icon: 'w2ui-icon-plus' },
          { id: 'update', type: 'button', text: 'Update Graph', icon: 'w2ui-icon-plus' },
      ],
      onClick: function (event) {
          if (event.target == 'add') {
              logger.info("add")
          }
          if (event.target == 'update') {
            logger.info("updated");
        }
      }
  },
},


form: {
  header: "No graph element selected: double clik on a node or a edge",
  name: 'form',
   show: {
      toolbar: false,
      footer: false,
      toolbarSave: false
  },
  style:'opacity:1;background-color:white;color:black',
  fields: [
      { field: 'label', type: 'text', disabled:true,  html: { label: 'Label:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
      { field: 'description',disabled:true, type: 'textarea', html: { label: 'Description', attr: 'size="128"',attr: 'style="width: 100%; height: 90px; resize: vertical;background-color: white;opacity:1;color:black"' } },
  ],
  actions: {
             reset: function () {               
               w2ui.form.setValue("label",cy.$id(w2ui.form.getValue("identifier")).data("label")); 
               w2ui.form.setValue("description",cy.$id(w2ui.form.getValue("identifier")).data("description"));        
               w2ui.form.refresh();
              },
              save: function () {
               var myId=w2ui.form2.getValue("identifier");//alert(myId);
               var myLabel=w2ui.form.getValue("label");//alert(myLabel);
               var myDescription=w2ui.form.getValue("description");//alert(myDescription);
               // var myGraphObject=cy.$id(myId); alert(myGraphObject.id());
               // var myGraphObjectLabel=myGraphObject.data("label"); alert(myGraphObjectLabel);
               // myGraphObject.data("label",w2ui.form.getValue("label"));
               // myGraphObject.data("description",w2ui.form.getValue("description"));  

               cy.$id(myId).data("label",  myLabel);
               cy.$id(myId).data("description", myDescription);
               w2ui.form.refresh(); 
               w2ui.layoutProperties.html('main',w2ui.form);
               
  }}
  },


  form2: {
    header: "No graph element selected: double clik on a node or a edge",
    name: 'form2',
     show: {
        toolbar: false,
        footer: false,
        toolbarSave: false
    },
    style:'opacity:1;background-color:white;color:black',
    fields: [
      { field: 'identifier', type: 'text', disabled:true,  html: { label: 'id:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
      { field: 'parent', type: 'text', disabled:true,  html: { label: 'parent:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
      { field: 'parentRelationId', type: 'text', disabled:true,  html: { label: 'parentRelationId:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
      { field: 'parentRelationType', type: 'text', disabled:true,  html: { label: 'parentRelationType:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } }, 
      { field: 'parentContainmentId', type: 'text', disabled:true,  html: { label: 'parentContainmentId:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } }, 
      { field: 'source', type: 'text', disabled:true,  html: { label: 'source:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
      { field: 'target', type: 'text', disabled:true,  html: { label: 'target:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
      { field: 'timestamp', type: 'text', disabled:true,  html: { label: 'timestamp:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
    ]
    },
    mainmenu:{
      name: 'mainmenu',
      tooltip:"bottom",
      items: [
          { type: 'menu', id: 'submenu2',
              text(item) {return "File"},
              items: [
                  { id: 'id1', text: 'Load', tooltip:"Loading previously saved archicg graph."},
                  { id: 'id2', text: 'Save'},
                  { text: '--' },
                  { id: 'id3', text: 'Import',
                      items: [
                          { id: 'id4', text: 'jArchiECG' },
   //                       { id: 'id5', text: 'Cytogen' } ,
                          { id: 'oef', text: 'Open Format' }             
                       ]},
                  { text: '--' },
                  { id: 'id7', text: 'Export',
                      items: [
                          { id: 'id8', text: 'CSV' },
                          { id: 'owlexport', text: 'OWL' },
                        ]},
                        { text: '--' },
                        { id: 'id9', text: 'Save as image',
                        items: [
                            { id: 'id10', text: 'PNG View' } ,
                            { id: 'id11', text: 'PNG Full' } ,
                            { id: 'id12', text: 'JPG View' },
                            { id: 'id13', text: 'JPG Full' },
                            { id: 'id14', text: 'SVG View' },
                            { id: 'id15', text: 'SVG Full' },
                          ]}

                      ]
          },
          { type: 'break' }, 
          
          { type: 'menu', id: 'submenu3',
              text(item) {return "Compound Graph"},
              items: [
                { id: 'id1', text: 'Nodes',
                  items: [
                          { id: 'id2', text: 'Collapse all nodes' },
                          { id: 'id3', text: 'Collapse selected recursively' },
                          { id: 'id4', text: 'Expand all nodes' }, 
                          { id: 'id5', text: 'Expand selected recursively' },
                          { id: 'id6', text: 'Add Compound for selected' }, 
                          { id: 'id7', text: 'Remove selected compound' },  
                          { id: 'id8', text: 'Add Nested for selected' }, 
                          { id: 'id16', text: 'Create Nodes'}                
                    ]},
                { id: 'id9', text: 'Edges',
                    items: [
                           { id: 'id10', text: 'Collapse all edges' },
                           { id: 'id11', text: 'Expand all edges' },
                           { id: 'id12', text: 'Collapse selected edges' },
                           { id: 'id13', text: 'Expand selected edges' },
                           { id: 'id14', text: 'Collapse between selected' },
                           { id: 'id15', text: 'Expand between selected' }            
                    ]},
                ]
          },
          { type: 'break' },  
          { type: 'menu', id: 'submenu4',
              text(item) {return "Composite Graph"},
              items: [
                { id: 'id1', text: 'Selected compound to graph'},
                { id: 'id2', text: 'Selected graph to compound'},
                { id: 'id3', text: 'Create Component'},
                { id: 'id4', text: 'Show Edge'},   
                { id: 'id5', text: 'Hide Edge'},                 
                ]
          },
          { type: 'break' },  
          { type: 'menu', id: 'submenu5', 
              text(item) {return "Graph manipulation"},
              items: [
                { id: 'id1', text: 'Show/Hide',
                  items: [
                          { id: 'id2', text: 'Hide selected' },
                          { id: 'id3', text: 'Hide non selected' },                          
                          { id: 'id4', text: 'Unhide all' }, 
                    ]},
                { id: 'id5', text: 'Grabify/Ungrabify',
                    items: [
                           { id: 'id6', text: 'Ungrabify selected' },
                           { id: 'id7', text: 'Ungrabify non selected' },
                           { id: 'id8', text: 'Grabify selected ' },
                           { id: 'id9', text: 'Grabify non select' }          
                    ]},
                   { id: 'id10', text: 'Lock/Unlock',
                    items: [
                      { id: 'id11', text: 'Lock selected' },
                      { id: 'id12', text: 'Lock non selected' },
                      { id: 'id13', text: 'Unlock selected ' },
                      { id: 'id14', text: 'Unlock non select' }           
                    ]},
                  { id: 'id15', text: 'Remove/Restore',
                        items: [
                               { id: 'id16', text: 'Remove selected' },
                               { id: 'id17', text: 'Remove unselected' },
                               { id: 'id18', text: 'Remove all' },
                               { id: 'id19', text: 'Restore' },
                                       
                        ]}
                ]
          },
          { type: 'break' },  
      
 
          { type: 'spacer' }, 
   //       { type: 'menu', id: 'tests',
   //             text(item) {return "Tests"},
   //             items:[
   //                 { id: 'id4', text: 'fitSelection' },
   //                 { id: 'id5', text: 'animSelectionPositions' },
	 //			          { id: 'id6', text: 'Grid Layout on selection' },
   //        ]} ,
            
          { type: 'menu', id: 'parameters',
                  text(item) {return "Parameters"},
                  items:[
                    { id: 'id0', 
                      text: 'tooltips',
                      items: [
                         { id: 'id1', text: 'Palette tooltips on' },
                         { id: 'id2', text: 'Palette tooltips off' }
                 //     { id: 'id3', text: 'User interface tooltips on' },
                 //     { id: 'id4', text: 'User interface tooltips off' },
                 //     { id: 'id5', text: 'Graph tooltips on' },  
                 //     { id: 'id6', text: 'Graph tooltips off' }           
                      ]},                   
                    { id: 'id7', 
                      text: 'Log',
                      items: [
                          { id: 'id8', text: 'Show/Hide log' }            
                    ]},
                    { id: 'id10', 
                      text: 'Visual Element Display Mode',
                      items: [
                          { id: 'id11', text: 'Nodes' },
                          { id: 'id12', text: 'Boxes' }                 
                    ]}
                    ,
                    { id: 'id17', 
                      text: 'Visual Relation Display Mode',
                      items: [
                          { id: 'id18', text: 'Edges' },
                          { id: 'id19', text: 'Nodes' }                 
                    ]} ,
                    { id: 'id13', 
                      text: 'Undo/Redo',
                      items: [
                          { id: 'id14', text: 'On' },
                          { id: 'id15', text: 'Off' },
                          { id: 'id16', text: 'Clear'}               
                    ]} 
                    ,
                    { id: 'id20', 
                      text: 'ArchiMate Relationships Rules',
                      items: [
                          { id: 'id21', text: 'Enforce' },
                          { id: 'id22', text: 'Relax' }                 
                    ]}
                    ,
                    { id: 'id30', 
                      text: 'URL Navigation',
                      items: [
                          { id: 'id31', text: 'Change mode' }               
                    ]}                    
                  ]},
                  { type: 'menu', id: 'checker',
                  text(item) {return "Checker"},
                  items: [
                      { id: 'allowedRelationship', text: 'ArchiMate AllowedRelationship', tooltip:"set this property to true or false"}
                  ]
              } ,

            { type: 'menu-check', id: 'menuPalettes',text:"Palettes",selected: ['archimate', 'meta'], items: palettesMenu},

            { type: 'menu', id: 'submenu1',
                  text(item) {return "archicg"},
                  items: [
                      { id: 'id1', text: 'About archicg', tooltip:"Information about the application"}
                  ]
              }            

      ],
      onClick: function(event) {

        //alert('item '+ event.target.split(':').shift() + ' is clicked.' + this.get([event.target]).checked);
        if (event.target.split(':').shift() =="menuPalettes")
          {
            var myPalette=event.target
            var myPaletteName=JSON.stringify(myPalette)
            myPaletteName = myPalette.replace("menuPalettes:", "")+"Palette"// all palettes div should have as id the menu name postfixed with palette
            var checked=this.get(event.target).checked
            var x = document.getElementById(myPaletteName);      
            if (x == undefined){}else {
            if (checked){x.style.display="none";}else{x.style.display = "block";}}
          }
        if (event.target=="checker:allowedRelationship"){
          cy.edges().forEach(function(edge){
            if (allowedArchiMateRelation(edge) === undefined){console.log("undefined")} else{edge.data("ArchiMateAllowedRelationship",allowedArchiMateRelation(edge))} 
          })};  

          if (event.target=="parameters:id31"){
            if (URLNavigationActivated){
              URLNavigationActivated=false}
              else{URLNavigationActivated=true}
               alert ("URL navigation set to " + URLNavigationActivated)
            };

        if (event.target=="parameters:id21"){
          ArchiMateAllowedRelationshipEnforce = true;
          };  
        
          if (event.target=="parameters:id22"){
            ArchiMateAllowedRelationshipEnforce = false;
          };                    
                  
        if (event.target=="submenu10:id21"){
          openSelectViewpointPopup();
          //console.log(w2ui['mainLayout'].set('right',panels)); 
          //w2ui.layoutNodeCreation.html('main',w2ui.formNodeCreation );
        
        };

        if (event.target=="tools:id1"){
          demo(); 
        };
        if (event.target=="tools:id2"){
          
          
        };

        if (event.target=="tools:id3"){
          let finalOptions = Object.assign({}, playerLayoutOptions);
          finalOptions.fixedNodeConstraint = constraints.fixedNodeConstraint ? constraints.fixedNodeConstraint : undefined;
          console.log (finalOptions.fixedNodeConstraint);
          let layoutPlayer = cy.layout(finalOptions);
          layoutPlayer.run();
        };
        if (event.target=="tools:archicgEditor"){activateToolBar("archicgEditor")}; 
      
        if (event.target=="tests:id4"){

          let fitString="";
          cy.nodes(":selected").forEach(function(node,i){
            if (i>0){fitString+=","}
            fitString+='#'+node.id();
          });
          console.log (fitString);
          cy.animate({
            fit: {
              eles: cy.nodes(fitString),
              padding: 0
            }
          }, {
            duration: 1000
          });
          //download('fitSelection.json', fitString);
        };  
        
        if (event.target=="tests:id5"){
          cy.nodes().animate({
            position: { x: 100, y: 100 },
            style: { backgroundColor: 'red' }
          }, {
            duration: 1000
          });
          
        };

        if (event.target=="tests:id6"){
           var layout=cy.nodes(":selected").layout(gridLayoutOptions);
		       layout.run();
        };

        if (event.target=="submenu3:id16"){
          openNodeCreationPopup(); 
        };
        if (event.target=="parameters:id1"){
          paletteTooltipsOn=true;
          savePaletteButtonsCheck();
          w2ui['mainLayout'].html('right', myPalette2());
          restorePaletteButtonsCheck();
          var paletteElement = document.getElementsByClassName("el-button");
          for (var i = 0; i < paletteElement.length; i++) {
            const buttonId = paletteElement[i].id.replace('-button', '');
            const description = paletteIconDescription(buttonId);
            const match=w2utils.tooltip(description, { position: 'left', className: 'custom-tooltip'}).match(/onmouseenter="([^"]*)"/);
            let onmouseenterInstruction = match ? match[1] : '';
           
            paletteElement[i].setAttribute('onmouseenter', onmouseenterInstruction)
            paletteElement[i].addEventListener('dblclick', paletteDblclick, false);}
          };

        if (event.target=="parameters:id2"){
          paletteTooltipsOn=false;
          savePaletteButtonsCheck();
         
          w2ui['mainLayout'].html('right', myPalette2());
          restorePaletteButtonsCheck();
          var paletteElement = document.getElementsByClassName("el-button");
          for (var i = 0; i < paletteElement.length; i++) {
            const buttonId = paletteElement[i].id.replace('-button', '');
            const description = paletteIconDescription(buttonId);
            const match=w2utils.tooltip(description, { position: 'left', className: 'custom-tooltip'}).match(/onmouseenter="([^"]*)"/);
            let onmouseenterInstruction = match ? match[1] : '';
       
            paletteElement[i].setAttribute('onmouseenter', onmouseenterInstruction)
           
            paletteElement[i].addEventListener('dblclick', paletteDblclick, false);}
          };

        if (event.target=="parameters:id11"){globalElementVisualMode="nodes";
           if(undoRedo){ur.do("collapseAll");}else{api.collapseAll();}};
        if (event.target=="parameters:id12"){globalElementVisualMode="boxes";
           if(undoRedo){ur.do("collapseAll");}else{api.collapseAll();}};
        if (event.target=="parameters:id14"){undoRedo=true;};
        if (event.target=="parameters:id15"){undoRedo=false;};
        if (event.target=="parameters:id16"){ur.reset()};
        if (event.target=="parameters:id18"){globalRelationVisualMode="edge";
        relationsNodesToEdges();
           //if(undoRedo){ur.do("collapseAll");}else{api.collapseAll();}
          };
        if (event.target=="parameters:id19"){globalRelationVisualMode="node";
           relationsEdgesToNodes();
           //if(undoRedo){ur.do("collapseAll");}else{api.collapseAll();}
          };   

        if (event.target=="submenu1:id1"){$('#popup').w2popup();};
        if (event.target=="submenu2:id1"){
    // TODO - assess more complete file reader and writter for enforcing selection of a default directory and file extension 
    // firt candidate library: https://github.com/GoogleChromeLabs/browser-fs-access
    // second candidate library: https://github.com/jimmywarting/native-file-system-adapter/
    // TODO investigate valuable usage of stream savers
    // https://github.com/jimmywarting/StreamSaver.js
    //https://github.com/eligrey/FileSaver.js
          const el = document.getElementById('load-from-inp');
           el.value = '';
           el.click();
          };
         
          if (event.target=="submenu2:id2"){
            var fileNameToSave="myGraph.archicg";
            w2prompt({
              label: 'Enter value',
              value: "myGraph.archicg",
              attrs: 'size=6'})
           .change( (event)=> {
           fileNameToSave=event.detail.originalEvent.target.value
 
        })
           .ok(()=> {  
             api.saveJson(cy.$(), fileNameToSave);
           });
          
          }
          if (event.target=="submenu2:id4"){
            const el = document.getElementById('load-from-jarchi');
            el.value = '';
            el.click();
          }
          if (event.target=="submenu2:id5"){const el = document.getElementById('load-from-cytogen');
            el.value = '';el.click();}
          
          if (event.target=="submenu2:oef"){const el = document.getElementById('load-from-open-format');
            el.value = '';el.click();}  
          
          if (event.target=="submenu2:id8"){
             myNodes= cy.nodes(":selected").map(getNodes);
             myEdges= cy.edges(":selected").map(getEdges);
             myProperties= cy.$(":selected").reduce(function(propertiesArray, element){
               return propertiesArray.concat(getProperties(element));
             },[]);
             var zip = new JSZip();
             zip.file("nodes.csv", Papa.unparse(myNodes,configCSV));
             zip.file("edges.csv", Papa.unparse(myEdges,configCSV));
             zip.file("properties.csv", Papa.unparse(myProperties,configCSV));
           //console.log (JSON.stringify(myArray));
           //new Blob(nodes_CSV, {type : 'text/csv'});
           var fileNameToSave="ArchiCG.zip";
           w2prompt({label: 'Enter value',value: fileNameToSave,attrs: 'size=6'})
          .change( (event)=> {fileNameToSave=event.detail.originalEvent.target.value})
          .ok(()=> { try{zip.generateAsync({type:"blob"}).then(function (blob) {saveAs(blob,fileNameToSave )});}catch(error){console.log(error)}
          });  
              
           }
           if (event.target=="submenu2:owlexport"){

              //myEdges= cy.edges(":selected").map(getEdges);
            //myProperties= cy.$(":selected").reduce(function(propertiesArray, element){
            //  return propertiesArray.concat(getProperties(element));
            //},[]);
            

             w2prompt({
                label: 'Enter value',
                value: 'archicg.owl',
                attrs: 'size=6'})
             .change((event)=> {
               //log('Input value changed.');
             })
             .ok(function () {
               var fileName=event.detail.originalEvent.target.value
               var modelName=fileName.replace(/\.[^/.]+$/, "");
               //console.log(modelName);
               modelURI="http://www.archicg.net/"+modelName;
               //console.log(modelURI)
               var owlImport=[
               {
                "@id" : "_:genid1",
                "@type" : [ "http://www.w3.org/2002/07/owl#Ontology" ],
                "http://www.w3.org/2002/07/owl#imports" : [ {
                  "@id" : "http://www.plm-interop.net/archimate/basic/3.1"
                } ]
              }];
               myNodes= cy.nodes(":selected").map(getNodes4OWL); 
               myEdges= cy.edges(":selected").map(getEdges4OWL);        
               saveTxtFile(JSON.stringify(owlImport.concat(myNodes).concat(myEdges)), fileName, 'text/plain');
             });
          }
        
          if (event.target=="submenu2:id10"){
          
            var fileNameToSave="ArchiCGView.png";
            w2prompt({label: 'Enter value',value: fileNameToSave,attrs: 'size=6'})
           .change( (event)=> {fileNameToSave=event.detail.originalEvent.target.value})
           .ok(()=> { try{saveAs(cy.png({bg:"white"}),fileNameToSave );}catch(error){console.log(error)}
           });
          }

          if (event.target=="submenu2:id11"){
              var fileNameToSave="ArchiCGFull.png";
              w2prompt({label: 'Enter value',value: fileNameToSave,attrs: 'size=6'})
             .change( (event)=> {fileNameToSave=event.detail.originalEvent.target.value})
             .ok(()=> { try{saveAs(cy.png({bg:"white", full:"true"}),fileNameToSave );}catch(error){console.log(error)}
             });
            
            }
          if (event.target=="submenu2:id12"){
            var fileNameToSave="ArchiCGView.jpg";
            w2prompt({
              label: 'Enter value',
              value: fileNameToSave,
              attrs: 'size=6'})
           .change( (event)=> {fileNameToSave=event.detail.originalEvent.target.value})
           .ok(()=> { try{saveAs(cy.jpg({}),fileNameToSave );}catch(error){console.log(error)}
           });
          if (event.target=="submenu2:id13"){
          var fileNameToSave="ArchiCGFull.jpg";
            w2prompt({label: 'Enter value',value: fileNameToSave,attrs: 'size=6'})
           .change( (event)=> {fileNameToSave=event.detail.originalEvent.target.value})
           .ok(()=> { try{saveAs(cy.jpg({full:true}),fileNameToSave );}catch(error){console.log(error)}
           });         
          }
        }
          if (event.target=="submenu2:id14"){
            var svgContent = cy.svg({scale: 1, full: false, bg: 'white'});
            var blob = new Blob([svgContent], {type:"image/svg+xml;charset=utf-8"});
            var fileNameToSave="ArchiCGView.svg";
            w2prompt({
              label: 'Enter value',
              value: fileNameToSave,
              attrs: 'size=6'})
           .change( (event)=> {fileNameToSave=event.detail.originalEvent.target.value})
           .ok(()=> {  
            try{saveAs(blob,fileNameToSave );}catch(error){console.log(error)}
           });
          }
          if (event.target=="submenu2:id15"){
            var svgContent = cy.svg({scale: 1, full: true, bg: 'white'});
            var blob = new Blob([svgContent], {type:"image/svg+xml;charset=utf-8"});
            var fileNameToSave="ArchiCGFull.svg";
            w2prompt({
              label: 'Enter value',
              value: fileNameToSave,
              attrs: 'size=6'})
           .change( (event)=> {fileNameToSave=event.detail.originalEvent.target.value})
           .ok(()=> {  
            try{saveAs(blob,fileNameToSave );}catch(error){console.log(error)}
           });
          }
          
          if (event.target=="submenu3:id2"){
            if(undoRedo){ur.do("collapseAll")}else {api.collapseAll();}}

          if (event.target=="submenu3:id3"){
            if (undoRedo){ur.do("collapseRecursively", {nodes: cy.$(":selected")});}
            else{api.collapseRecursively(cy.$(":selected"));}
          }
          if (event.target=="submenu3:id4"){
            if(undoRedo){ur.do("expandAll")}else {api.expandAll();}}

          if (event.target=="submenu3:id5"){
            if(undoRedo){ur.do("expandRecursively", { nodes: cy.$(":selected")})}
            else {api.expandRecursively(cy.$(":selected"));}}

          if (event.target=="submenu3:id6"){
            console.trace();
            var selection = cy.nodes(':selected');if (selection.length < 1) {return;}
            var parent = selection[0].parent().id();
            //const parentType=elems[0].parent().data(type);
            var type=globalNodeType;
            var label=globalLabel;
            //log(label);
            for (let i = 1; i < selection.length; i++) {
              if (parent !== selection[i].parent().id()) {
                alert("Operation not possible: the selected nodes have different parents!");
                return;}}
            var myUUID = new UUID(4) ;//new Date().getTime();
            var timestamp=new Date();
            //console.log("un")
            addParentNode(`${myUUID}`, type, parent,label, timestamp);
            //console.log("deux")
            for (let i = 0; i < selection.length; i++) {
              //console.log(selection[i].data("label")+ " id:"+ selection[i].id() + " moved to "+cy.$id(myUUID).data("label")+ " id:"+ myUUID );
              selection[i].move({ parent: `${myUUID}` });} 
          }
          if (event.target=="submenu3:id7"){
            const elems = cy.nodes(':selected').filter(':compound');
            if (elems.length < 1) {return;}
              for (let i = 0; i < elems.length; i++) {
                // expand if collapsed
                if (elems[i].hasClass('cy-expand-collapse-collapsed-node')) {api.expand(elems[i], { layoutBy: null, fisheye: false, animate: false });}
                const grandParent = elems[i].parent().id() ?? null;
                const children = elems[i].children();
                children.move({ parent: grandParent });
                removed=removed.union(cy.remove(elems[i]));
             }  
          }
          if (event.target=="submenu3:id8"){
            var selection = cy.nodes(":selected");
            var label=globalLabel;
            var type=globalNodeType;
            if (selection.length == 1) {
               var myUUID = new UUID(4);
               const newNode = {data: { id: `${myUUID}`, label: label, type:type}};
              cy.add(newNode);
              cy.$id(`${myUUID}`).move({ parent: selection[0].id() });
              api.expandRecursively(cy.$id(selection[0].id()));
            } 
          }
          if (event.target=="submenu3:id10"){
            if(undoRedo){ur.do("collapseAllEdges", {options: getEdgeOptions()})} else { api.collapseAllEdges(getEdgeOptions());} }

          if (event.target=="submenu3:id11"){if (cy.edges(".cy-expand-collapse-collapsed-edge").length > 0) {
            if(undoRedo){ur.do("expandAllEdges")} else {api.expandAllEdges();}
          }}
          
          if (event.target=="submenu3:id12"){
            const edges = cy.edges(":selected");
            if (edges.length >= 2) {
            if(undoRedo){ur.do("collapseEdges", { edges: edges, options: getEdgeOptions()})}else  {api.collapseEdges(edges, getEdgeOptions());}
            }} 
          
          if (event.target=="submenu3:id13"){   
              const edges = cy.edges(":selected");
             if (edges.length > 0) {
              if(undoRedo){ur.do("expandEdges", { edges: edges,options: getEdgeOptions()})} else {api.expandEdges(edges, getEdgeOptions()); }
            }}   
                          
          if (event.target=="submenu3:id14"){
            if(undoRedo){ur.do("collapseEdgesBetweenNodes", { nodes: cy.nodes(":selected"), options: getEdgeOptions()})} else {
              api.collapseEdgesBetweenNodes(cy.nodes(":selected"), getEdgeOptions());}
          }      
          
          if (event.target=="submenu3:id15"){console.log(cy.nodes(":selected"));
            if(undoRedo){ur.do("expandEdgesBetweenNodes", { nodes: cy.nodes(":selected"), options:getEdgeOptions()})}else {
              api.expandEdgesBetweenNodes(cy.nodes(":selected"), getEdgeOptions());}
          }  

          if (event.target=="submenu4:id1"){
//selected compound to graph
            var selectedNodes=cy.nodes(":selected");
            var roots=[];
            var components=[];
            var leaves=[];
            //identification of the population of root nodes - they have outgoer composition relationships and no incoming composition
        
            selectedNodes.forEach(function(node){
               var isRootNode =false;
               var isComponent= false;
               var isComposite=false;
               var isLeaf=false;
               node.outgoers().forEach(function(rel){ if (rel.data("type"=="composition")){
                 isComposite=true;
                 rel.css('visibility', 'visible');
                 rel.css('display', 'element');
                }});
               node.incomers().forEach(function(rel){ if (rel.data("edgeType"=="composition")){
                 isComponent=true;
                 rel.css('visibility', 'visible');
                 rel.css('display', 'element');
                }});
        
               if(isComposite || isComponent){
                  if(isComposite && isComponent){components.push(node);}
                  else{
                    if(isComponent){isLeaf=true;leaves.push(node);}
                    else{isRoot=true;roots.push(node);}
                  }
               }    
              roots.concat(components).concat(leaves).forEach(function(node){
                node.data("parentContainmentId",node.parent().id());
                node.move({ parent: null});       
               });
            });
            
            api.expandAll(); 
          } 
          if (event.target=="submenu4:id2"){
//selected graph to compound            
            var selectedNodes=cy.nodes(":selected");
            relationIDs=[];
            cy.batch(function(){
            selectedNodes.forEach(function(node){
              node.outgoers().forEach(function(rel){
                 if(rel.data("edgeType")=="composition" && rel.isEdge()){
                     rel.target().move({ parent: rel.source().id()});
                     rel.target().data("parentRelationId",rel.id()) ;
                   relationIDs.push(rel.id());   
                  }  
              });
            });
          });
          relationIDs.forEach(function(relationID){
            cy.$id(relationID).css('visibility', 'hidden');
            cy.$id(relationID).css('display', 'none');
          });
         
          api.expandAll();
          }  


          if (event.target=="submenu4:id3"){
            var relationType="composition";
            var parentRelationType=document.getElementById('parentRelationType').value;
            var idEdge=new UUID(4) ;//new Date().getTime();
            var myUUID=new UUID(4);
            var timestampEdge=new Date();
            document.getElementById('globalParentId').value= document.getElementById('globalNodeId').value ;
            document.getElementById('globalNodeId').value = `${myUUID}`;//new Date().getTime();
            var node=[
              { group: 'nodes', data: { 
                id:document.getElementById('globalNodeId').value,
                edgeType:globalNodeType,
                parent: document.getElementById('globalParentId').value,
                label: globalLabel,
                parentRelationId:`${idEdge}`
              }}
            ];
            var edge=[{ group: 'edges', data: { 
               id:`${idEdge}`,
               timestamp:`"${timestampEdge}"`,
               edgeType:relationType,
               source: globalParenId,
               target: globalNodeId
               }}];
            var eles = cy.add(node);
             log (JSON.stringify(edge));
             log (cy.add(edge));
             api.expandAll();
          } 

          if (event.target=="submenu4:id4"){
            showEdgeComposite=true;
            alert ("showEdgeComposite is true")
            api.collapseAll(":selected");
            api.expandAll(":selected");
          }  
          if (event.target=="submenu4:id5"){
            showEdgeComposite=false;
            alert ("showEdgeComposite is false")
            api.collapseAll(":selected");
            api.expandAll(":selected");
          } 
          
          if (event.target=="submenu5:id2"){
             var eles = cy.$(":selected");
             eles = eles.filter(":visible");
             eles = eles.union(eles.connectedEdges());
             eles.unselect();
             eles.css('visibility', 'hidden');
             eles.css('display', 'none'); 
          }
          
          if (event.target=="submenu5:id3"){
            var unselected=cy.nodes(":unselected");
            var selected=cy.nodes(":selected");          
            unselected.forEach(function(node){
               if (node.descendants(node.id()).intersection(selected).length == 0){
                  node.css('visibility', 'hidden');
                  node.css('display', 'none');}
              })}
          
          if (event.target=="submenu5:id4"){
            var eles = cy.filter(":hidden");
              var connectedEdges = eles.connectedEdges(function (edge) {
                if ((edge.source().visible() || eles.contains(edge.source())) && (edge.target().visible() || eles.contains(edge.target()))) {
                   return true;
                  }
                return false;
             });
              eles = eles.union(connectedEdges);
              eles.unselect();
              eles.style('visibility', 'visible');
              eles.style('display', 'element');     
          }

          if (event.target=="submenu5:id6"){ 
            var nodes=cy.nodes(":selected").ungrabify();
            ungrabifiedNodes=ungrabifiedNodes.concat(nodes);
            nodes.unselect();  
          }
          
          if (event.target=="submenu5:id7"){ 
            var nodes=cy.nodes(":unselected").ungrabify();
            ungrabifiedNodes=ungrabifiedNodes.concat(nodes);
            nodes.unselect(); 
          }

          if (event.target=="submenu5:id8"){ 
            var nodes=cy.nodes(":selected").grabify();
            ungrabifiedNodes=ungrabifiedNodes.filter(function(el){
              return !nodes.includes( el );});
            nodes.unselect(); 
          }

          if (event.target=="submenu5:id9"){ 
            var nodes=cy.nodes(":unselected").grabify();
            ungrabifiedNodes=ungrabifiedNodes.filter(function(el){
              return !nodes.includes( el );});
            nodes.unselect(); 
          }


          if (event.target=="submenu5:id11"){ 
            var nodes=cy.nodes(":selected").lock();
            lockedNodes=lockedNodes.concat(nodes);
            nodes.unselect();  
          }
          
          if (event.target=="submenu5:id12"){ 
            var nodes=cy.nodes(":unselected").lock();
            lockedNodes=lockedNodes.concat(nodes);
            nodes.unselect(); 
          }

          if (event.target=="submenu5:id13"){ 
            var nodes=cy.nodes(":selected").unlock();
            lockedNodes=lockedNodes.filter(function(el){
              return !nodes.includes( el );});
            nodes.unselect(); 
          }

          if (event.target=="submenu5:id14"){ 
            var nodes=cy.nodes(":unselected").unlock();
            lockedNodes=lockedNodes.filter(function(el){
              return !nodes.includes( el );});
            nodes.unselect(); 
          }


          if (event.target=="submenu5:id16"){
            const elements = cy.$(":selected");
            if (undoRedo){ur.do("remove", elements)}else {removed=removed.union(cy.remove(elements));} 
          }

          if (event.target=="submenu5:id17"){
            const elements = cy.$(":unselected");
            if (undoRedo){ur.do("remove", elements)}else {removed=removed.union(cy.remove(elements));}}

          if (event.target=="submenu5:id18"){
              const elements = cy.$();
              if (undoRedo){ur.do("remove", elements)}else {removed=removed.union(cy.remove(elements));}}  

          if (event.target=="submenu5:id19"){ removed.restore();}    

          if (event.target=="parameters:id8"){ 
          
         
            if (document.getElementById("logDiv").style.display == "none")
               {
                 document.getElementById("topLogDiv").style.display = "block"
                 document.getElementById("logDiv").style.display = "block"
                 inPageAppender.show()
                } 
            else {
              document.getElementById("topLogDiv").style.display = "none";
              document.getElementById("logDiv").style.display = "none";
              inPageAppender.hide()
            }}
          
   

    }
  }

,
  toolbararchicgEditorDefinition:{
      name: 'toolbararchicgEditorDefinition',
      tooltip:'top',
      style   : 'background-color: white',
      items: [
        { type: 'button',  id: 'createNode',  text: 'Create Node' , tooltip: 'Create node with Label and Node Type standalone (no selection) or as child of a single selected node'},
        { type: 'spacer' },
        { type: 'check',  id: 'dad', text: 'DaD', checked: false, tooltip: 'Drag and Drop Mode for grouping an ungrouning nested node (only first nesting level)' },
        { type: 'check',  id: 'edge-draw', text: 'Edge Draw', checked: false, tooltip: 'Draw Edges Mode' },
        { type: 'new-line' },	
          { type: 'check',  id: 'randomize', text: 'Randomize', checked: true,  tooltip: 'Randomize mode on or off for Fcose Layout'},
//          { type: 'html',  id: 'input10',  html: `<div style=" height: 20px;display: flex;
//          align-items: center;">Layout: 
//          <input id="acgLayout" style="color:blue;" onchange="acgLayout=this.value;cyLayout.name=acgLayout"; value="fcose" size="25" ></div>` },
          { type: 'new-line' },		  
          { type: 'html',  id: 'item02',  html: `<div style=" height: 22px;display: flex;
          align-items: center;">Hide:</div> ` },
          { type: 'button',  id: 'hideSelected',  text: 'Selected', color   : 'gray', tooltip: 'Hide selected'},
          { type: 'button',  id: 'hideUnselected',  text: 'Unselected', tooltip: 'Hide unselected' },
          { type: 'button',  id: 'showAll',  text: 'Show all' , tooltip: 'Show all what was hidden'},
          { type: 'new-line' },
          { type: 'html',  id: 'item03',  html(item) {
            let html = `<div style=" height: 22px;display: flex;
          align-items: center;">Delete: </div>`;
            return html;}},
          { type: 'button',  id: 'deleteSelected',  text: 'Selected' , tooltip: 'Delete selected'},
          { type: 'button',  id: 'deleteUnselected',  text: 'Unselected' , tooltip: 'Delete unselected'},
          { type: 'button',  id: 'deleteAll',  text: 'All' , tooltip: 'Delete all'},
          { type: 'button',  id: 'restore',  text: 'Restore', tooltip: 'restore from previous delete action' },
          { type: 'new-line' },
          { type: 'html',  id: 'input01',  html: `<div style=" height: 20px;display: flex;
          align-items: center;">Label: 
          <input id="globalLabel" style="color:blue;" value="ArchiCG Description" size="25" ></div>` },
          { type: 'spacer' },
          { type: 'button',  id: 'updateLabel',  text: 'Tag' , style:" align-items: center;text-align:center;",tooltip: 'Apply the label to the current selection' },
          { type: 'new-line' },
          { type: 'html',  id: 'input02',  html: `<div style=" height: 20px;display: flex;align-items: center;">Node type:<input id="globalNodeType" style="color:blue;" value="grouping" size="20" ></div>` },
          { type: 'spacer' },
          { type: 'button',  id: 'tagNodeWithType',  text: 'Tag', style:" align-items: center;text-align:center;", tooltip: 'Apply the type to the currently selected nodes'},
          { type: 'new-line' },
          { type: 'html',  id: 'input03',  html: `<div style=" height: 20px;display: flex;
          align-items: center;text-item: center;">Edge type: 
          <input id="globalEdgeType" style="color:blue;" value="association" size="20" ></div>` },
          { type: 'spacer' },
          { type: 'button',  id: 'tagEdgeWithType',  text: 'Tag', style:" align-items: center;text-align:center;" ,tooltip: 'Apply the type to the currently selected edges' },
          { type: 'new-line' },
          { type: 'html',  id: 'input04',  html: `<div style=" height: 20px;display: flex;
          align-items: center">Property type: 
          <input id="globalProperty" list="propertyList" style="color:blue;" size="20" onchange="globalProperty=this.value"></div>
           <datalist id="propertyList"></datalist>` },
          { type: 'new-line' },
          { type: 'html',  id: 'item04',  html: `<div style=" height: 22px;display: flex;
          align-items: center;">Remove from: </div>` },
          { type: 'button',  id: 'removeSelected',  text: 'Selected', tooltip: 'Remove properties with Property Type from selection ' },
          { type: 'button',  id: 'removeUnselected',  text: 'Unselected' , tooltip: 'Remove properties with Property Type from unselected '},
          { type: 'button',  id: 'removeAll',  text: 'All' , tooltip: 'Remove properties with Property Type from the graph '},
          { type: 'new-line' },
          { type: 'html',  id: 'input05',  html:`<div style=" height: 20px;display: flex;
          align-items: center">Property Value:
          <input id="globalPropertyValue" style="color:blue;" size="20" onchange="globalProperty=this.value"></div>` },
          { type: 'new-line' },
          { type: 'html',  id: 'item05',  html:`<div style=" height: 20px;display: flex;
          align-items: center">Apply to: </div>`},
          { type: 'button',  id: 'applySelected',  text: 'Selected' , tooltip: 'create property with Property Type and value on selection '},
          { type: 'new-line' },
          { type: 'check',  id: 'none', text: 'none', checked: true, tooltip: 'Consider any for expression filtering' },
          { type: 'check',  id: 'nodes', text: 'nodes', checked: false, tooltip: 'Consider nodes for expression filtering' },
          { type: 'check',  id: 'edges', text: 'edges', checked: false, tooltip: 'Consider edges for expression filtering' },
          { type: 'check',  id: 'eles', text: 'eles', checked: false, tooltip: 'Consider nodes and edges for expression filtering' },
          { type: 'new-line' },
          { type: 'html',  id: 'input06',  html:`<div style=" height: 20px;display: flex;
          align-items: center"><a href="https://js.cytoscape.org/#selectors/data" target="help">Expression</a>: 
          <input id="filter-field" style="color:blue;" size="20" ></div>` },
          //{ type: 'new-line' }, 
          { type: 'button',  id: 'Filter',  text: 'Filter', tooltip: 'select graph elements corresponding to the filter (additive)' }       , 
           
          { type: 'new-line' },

          { type: 'html',  id: 'input00A',  html: `<div style=" height: 20px;display: flex;
          align-items: center;">Create nodes (iterator applied to Type Name)</div>`},
          { type: 'new-line' },          
          { type: 'html',  id: 'input00B',  html: `<div style=" height: 20px;display: flex;
          align-items: center;">start =<input id="iterationStart" style="color:blue;" value="1" size="2">step =<input id="iterationStep" style="color:blue;" value="1" size="2">length=<input id="iteratorLength" style="color:blue;" value="3" size="3"></div>` },
          { type: 'new-line' },          
          { type: 'html',  id: 'input00C',  html: `<div style=" height: 20px;display: flex;
          align-items: center;">Number of iterations =<input id="numberOfIterations" style="color:blue;" value="1" size="2" ></div>` },
          { type: 'spacer' },       
          { type: 'button',  id: 'createNodes',  text: 'Do' , tooltip: 'create n(number of iterations) nodes with the current Type and label as type name with an iterator (based on start, step and length)'}
        ],
        onClick: function(event) {
          if (event.target=="createNodes"){
            var start=parseInt(`${document.getElementById('iterationStart').value}`);
            var step=parseInt(`${document.getElementById('iterationStep').value}`);
            var numberOfIteration=parseInt(`${document.getElementById('numberOfIterations').value}`);
            var length=parseInt(`${document.getElementById('iteratorLength').value}`);
            var type=document.getElementById('globalNodeType').value
            var end=start+numberOfIteration*step;
            //console.log("end: "+end)
            //console.log("start: "+start)
            //console.log("step: "+step)
            //
            console.log("numberOfIteration:"+ numberOfIteration)

           for (let i = start; i < end; i+=step) {
            num = i.toString();
            while (num.length < length) num = "0" + num;
            var nodeName= type+"-"+num;
            if(i==end-1){createNode(nodeName);}else{createNode(nodeName, false,false);}           
          //  console.log (nodeName)
          };
          }

          if (event.target=="randomize"){
            if ((w2ui['toolbararchicgEditorDefinition'].get(event.target).checked)){cyLayout.randomize=false}
            else{cyLayout.randomize=true}}

            if (event.target=="none"){
              if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked){ 
              }
              else{
                w2ui['toolbararchicgEditorDefinition'].uncheck('edges');
                w2ui['toolbararchicgEditorDefinition'].uncheck('eles');
                w2ui['toolbararchicgEditorDefinition'].uncheck('nodes');
                expressionApplyTo="none"
              }
            }
            if (event.target=="nodes"){
              if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked){ 
              }
              else{
                w2ui['toolbararchicgEditorDefinition'].uncheck('edges');
                w2ui['toolbararchicgEditorDefinition'].uncheck('eles');
                w2ui['toolbararchicgEditorDefinition'].uncheck('none');
                expressionApplyTo="nodes"
              }
            }
            if (event.target=="edges"){
              if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked){
              }
              else{
                w2ui['toolbararchicgEditorDefinition'].uncheck('nodes');
                w2ui['toolbararchicgEditorDefinition'].uncheck('eles');
                w2ui['toolbararchicgEditorDefinition'].uncheck('none');
                expressionApplyTo="edges"
              }
            }
            if (event.target=="eles"){
              if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked){
              }
              else{
                w2ui['toolbararchicgEditorDefinition'].uncheck('nodes');
                w2ui['toolbararchicgEditorDefinition'].uncheck('edges');
                w2ui['toolbararchicgEditorDefinition'].uncheck('none');
                expressionApplyTo="eles"
              }
            }

          if (event.target=="dad"){
            if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked){
              cdnd.disable();
            }
            else{
              w2ui['toolbararchicgEditorDefinition'].uncheck('edge-draw');
              cdnd.enable();
              eh.disableDrawMode();
            }
          }

          if (event.target=="edge-draw"){
            if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked){
              eh.disableDrawMode();
            }
            else{
              w2ui['toolbararchicgEditorDefinition'].uncheck('dad');
              cdnd.disable();
              eh.enableDrawMode();
            }
          }

          if (event.target=="createNode"){createNode();};
          if (event.target=="hideSelected"){hideSelected();};
          if (event.target=="hideUnselected"){hideUnselected()};
          if (event.target=="showAll"){showAll()};
          if (event.target=="deleteSelected"){deleteSelected()};
          if (event.target=="deleteUnselected"){deleteUnselected()};
          if (event.target=="deleteAll"){deleteAll()};
          if (event.target=="restore"){restore()};
          if (event.target=="updateLabel"){updateLabel()};
          if (event.target=="tagNodeWithType"){tagNodeWithType()};
          if (event.target=="tagEdgeWithType"){tagEdgeWithType()};
		      if (event.target=="removeSelected"){removeSelected();};
          if (event.target=="removeUnselected"){removeUnselected()};
          if (event.target=="removeAll"){removeAll()};
          if (event.target=="applySelected"){applySelected()};
          if (event.target=="Filter"){
            var filter=`${document.getElementById('filter-field').value}`;
            var filterResult;
            switch(expressionApplyTo){
              case 'nodes':
                cy.nodes(filter).select();
                break
              case 'edges':
                cy.edges(filter).select();
                break
              case 'eles':  
                 cy.elements(filter).select();	 
                 break
              default: 
               cy.filter(filter).select();  
            };
            }
          
        }
    },
  
  sidebar: {
  name: 'sidebar',
  flatButton: true,
  nodes: [
      { id: 'all-properties', text: 'Properties', group: true, expanded: true, groupShowHide: true,
          nodes: [
              { id: 'mainproperties', text: 'Label and Description', selected: true },
              { id: 'archimateproperties', text: 'EA Properties'},
              { id: 'cytoscapeproperties', text: 'CG Properties'},
              { id: 'collapsededges', text: 'Collapsed edges' },
              { id: 'visualproperties', text: 'Visual Properties' },
              { id: 'entityattributes', text: 'Entity Attributes' }
             
          ],
          onCollapse(event) {
              event.preventDefault()
          }
      }
  ],
  onFlat: function (event) {
      w2ui.layoutProperties.sizeTo('left', (event.goFlat ? 35 : 200), true);
  },
  onHide: function(event) {
    alert ("destroyed");
  }
  ,
  onClick: function (event) {
    //log(event.target);
      switch (event.target) {
          case 'mainproperties':
           //   w2ui.layoutProperties.html('main', $().w2form(config.form));
            w2ui.layoutProperties.html('main',w2ui.form);
            $(w2ui.layoutProperties.el('main'))
            .removeClass('w2ui-grid')
            .css({'border-left': '1px solid silver'});
              break;
          case 'archimateproperties':
            w2ui.layoutProperties.html('main',w2ui.gridProperties);
            $(w2ui.layoutProperties.el('main'))
            .removeClass('w2ui-form')
            .css({'border-left': '1px solid silver'});
            break;
          case 'cytoscapeproperties':
              //w2ui.layoutProperties.html('main', '<div style="padding: 10px">cytoscape properties to come next in a future version</div>');
              w2ui.layoutProperties.html('main',w2ui.form2);
              $(w2ui.layoutProperties.el('main'))
                  .removeClass('w2ui-grid')
                  .css({
                      'border-left': '1px solid silver'
                  });
              $(w2ui.layoutProperties.el('main'))
                  .removeClass('w2ui-form')
                  .css({
                      'border-left': '1px solid silver'
              });
              break;
            case 'visualproperties':
              w2ui.layoutProperties.html('main', '<div style="padding: 10px">visual properties to come next in a future version</div>');
              $(w2ui.layoutProperties.el('main'))
                  .removeClass('w2ui-grid')
                  .css({
                      'border-left': '1px solid silver'
                  });
              $(w2ui.layoutProperties.el('main'))
                  .removeClass('w2ui-form')
                  .css({
                      'border-left': '1px solid silver'
              });
              break;

              case 'collapsededge':
                w2ui.layoutProperties.html('main',w2ui.gridEdges);
                $(w2ui.layoutProperties.el('main'))
                 .removeClass('w2ui-form')
                 .css({'border-left': '1px solid silver'});
                break;  

              case 'entityattributes':
                w2ui.layoutProperties.html('main',w2ui.gridAttributes);
                $(w2ui.layoutProperties.el('main'))
                 .removeClass('w2ui-form')
                 .css({'border-left': '1px solid silver'});
                break;            
      }
  }
  } 
}
var configCSV=
{
	quotes: true, //or array of booleans
	quoteChar: '"',
	escapeChar: '"',
	delimiter: ";",
	header: true,
	newline: "\r\n",
	skipEmptyLines: "greedy", //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.
	columns: null //or array of strings
};

//// The main function for launching the Graph Viewer and Analyzer

var selectedElement=[];
var lockedNodes=[];
var ungrabifiedNodes=[];

function main() {

logger.info("Welcome to archicg");
/// Global variables
cytoscape.warnings(false)


//------------------------------//
/// Creation of the main layout //
//------------------------------// 
//var test=
//async function main(){
//  let pyodide = await loadPyodide();
//  console.log(pyodide.runPython(
//      import sys
//      sys.version
//  `));
//  pyodide.runPython("print(1 + 2)");
//}
//main();
//https://towardsdatascience.com/creating-beautiful-stand-alone-interactive-d3-charts-with-python-804117cb95a7
//https://github.com/pyodide/pyodide/issues/586
//https://observablehq.com/@thadk/pyodide-18

var pstyle = 'border: 1px solid #efefef; padding: 0px;background-color:white';
$('#archicg-layout').w2layout({
    name: 'mainLayout',
    panels: [
        { type: 'right', size:"20%", resizable: true, style: pstyle, html: 'Palette' ,title: 'Palettes'},
        { type: 'left', size: "22%" ,resizable: true,style: pstyle, html: 'left' },
        { type: 'main',title:"ArchiCG Landscape",header:"ArchiCG Landscape",style: pstyle, resizable: true, html: `
        <div class="fright" id="cy" style="background-color: white;"></div>
        <div  id="timeline" style="background-color: white;display:none"></div>
        <div  id="matrix" style="background-color: white;display:none"></div>
        <div  id="pivottable" style="background-color: white;display:none">The pivot table</div>
        ` },
        { type: 'bottom', size: "25 %", resizable: true, style: pstyle, html:"bottom"},
      ]
});


// in memory initialization of the w2ui widgets

w2ui.mainLayout.html('bottom', $().w2layout(config.layoutProperties));
w2ui.layoutProperties.html('left', $().w2sidebar(config.sidebar));
w2ui.layoutProperties.html('main',$().w2grid(config.gridEdges));
w2ui.layoutProperties.html('main',$().w2grid(config.gridAttributes));
w2ui.layoutProperties.html('main',$().w2grid(config.gridProperties));
w2ui.layoutProperties.html('main', $().w2form(config.form2));
w2ui.layoutProperties.html('main', $().w2form(config.form));



/// Creation of the main menu
//$(function () {
  //console.log(
    $('#mainmenu').w2toolbar(config.mainmenu)
    //);
//});

// Creation of the toolbars for the different tools      
tools.forEach(function(tool){
  toolbars[tool]=$().w2toolbar(config['toolbar'+tool+'Definition']);
  toolsMenuItems.push({type:'button', id:tool, text:tool});
})
// Inclusion of the toolbar for archicgEditor - the default toolbar - in the associated layout
w2ui['mainLayout'].html('left', $().w2layout(config.layoutToolbars));
w2ui['layoutToolbars'].html('main',toolbars['archicgEditor'] );
w2ui['mainLayout'].html('right', myPalette2());
//console.log(w2ui['mainmenu'])
//w2ui['mainmenu'].insert('Tools',[ {type: 'button',id:"toto", text:"toto"}]);

w2ui['mainmenu'].insert('parameters', { type: 'menu',  id: 'mainmenu',  text: 'Tools',
items: toolsMenuItems
});
w2ui['mainmenu'].on({ type : 'click' }, function (target, eventData) {
  if (tools.includes( target.split(':')[1])){activateToolBar(target.split(':')[1]);}
  
  //alert(target);
  //console.log(eventData)
  //activateToolBar("ColoredMap")
  //alert("tutu")
});
//tools.forEach(function(tool){  w2ui['mainmenu'].add([ {id:tool, text:tool}]);})

///Creation of an array of URL on palette icons for usage by the Node renderer of cy
//alert (JSON.stringify(ja_ArchiMateObjects));
//ja_ArchiMateObjects.concat(acg_ArchiMateSpecializations).concat(acg_ArchiMateExtensions).concat(acg_ArchiMateRelations).forEach(

acgTypes.forEach(
function(entity){
 // if (entity!="junction"){
  //logger.debug(entity)
	  archicgIconURL(entity)
    //console.log ("entity:"+ entity)
	  //};
  //log(entity)
});
//ja_ArchiMateObjects.concat(acg_ArchiMateSpecializations).concat(acg_ArchiMateExtensions).concat(acg_ArchiMateRelations).forEach(
  acgTypes.forEach(  
function(entity){
      archicgBoxWithIconURL(entity)
  });

  

/// Definition of the layout for the compound graph interactive viewer



/// complementary layout with parameters to define when randomize is not used for layouting
//packing
var layout2=  {
    idealEdgeLength: 1,
    offset: 20,
    desiredAspectRatio: 10,
    polyominoGridSizeFactor: 0.1,
    utilityFunction: 1,
    componentSpacing: 1}
 
// Add event for click on the elements of the palette = call of selectUnserlectPaletteElement



var paletteElement = document.getElementsByClassName("el-button");

for (var i = 0; i < paletteElement.length; i++) {
    paletteElement[i].addEventListener('dblclick', paletteDblclick, false);
}



  function setColor4CompoundEdge(e) {
    const collapsedEdges = e.data('collapsedEdges');
    if (doElemsMultiTypes(collapsedEdges)) {
      return '#b3b3b3';
    }
    return collapsedEdges[0].style('line-color')
  }



  function setTargetArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};
    for (let i = 0; i < collapsedEdges.length; i++) {
      shapes[collapsedEdges[0].style('target-arrow-shape')] = true;
    }
    delete shapes['none'];
    if (Object.keys(shapes).length < 1) {
      if (collapsedEdges.sources().length > 1) {
        return collapsedEdges[0].style('source-arrow-shape');
      }
      return 'none';
    }
    return Object.keys(shapes)[0];
  }

  function setSourceArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};
    for (let i = 0; i < collapsedEdges.length; i++) {
      shapes[collapsedEdges[0].style('source-arrow-shape')] = true;
    }
    delete shapes['none'];
    if (Object.keys(shapes).length < 1) {
      if (collapsedEdges.sources().length > 1) {
        return collapsedEdges[0].style('target-arrow-shape');
      }
      return 'none';
    }
    return Object.keys(shapes)[0];
  }

  function doElemsMultiTypes(elems) {
    const classDict = {};
    for (let i = 0; i < elems.length; i++) {
      classDict[elems[i].data('edgeType')] = true;
    }
    return Object.keys(classDict).length > 1;
  }
/// Initialisation of the archicg compound interactive graph interactive viewer
  cyGraph=cyGraph.concat(initialgraph); 

  cy = window.cy = cytoscape({
    container: document.getElementById('cy'),   
    ready: function () {
      this.layout(cyLayout).run(); 
      var api = this.expandCollapse({layoutBy: cyLayout,animate: 'end',undoable: false});
        fisheye: true,
      api.collapseAll();
    },
    style: [
	{
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
          "background-color": "white",
          shape: "rectangle",
          "line-color": "red"
        }
      },
/// nodes are defined calling a renderer associating appropriate icons and visual styles 
//  for each type associated to the node
      {
        selector: 'node',
        style: {
          "font-size":String((Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])))+"px",
          'background-color': 'white',
          "label":(ele)=>calculateLabel(ele),//"data(label)",
          "text-halign":"center",
          "text-justification":"center",
          "text-valign":(ele) => renderNode(ele).textValign,//"center",
          "text-border-color":"black",
          "text-border-width":0,
          "text-border-style":"solid",
          "text-border-opacity":1,
          "text-wrap":"wrap",
          "text-overflow-wrap":"whitespace",
          "text-max-width":"200",
          "background-image":(ele) => renderNode(ele).img,
          width: (ele) => renderNode(ele).width,
          height: (ele) => renderNode(ele).height,
          "background-opacity":0,
          "background-image-opacity":(ele)=>renderNode(ele).iconOpacity,
          "background-fit":"none",
          "overlay-opacity": (ele) => renderNode(ele).overlayOpacity ,
          "overlay-color": (ele) => renderNode(ele).dcolor ,
         // "ghost":"yes","ghost-opacity":"0.2","ghost-offset-x": 3,"ghost-offset-y": 3,
          shape:"rectangle"
        }
      },
   
      {
        selector: ':parent',
        style: {
          'background-color': 'white',
          "label":"data(label)",
          "text-halign":"center",
          "text-justification":"center",
          "text-valign":"top",
          "text-border-color":"black",
          "text-border-width":0,
          "text-border-style":"solid",
          "text-border-opacity":1,
          "text-wrap":"none",
         // "text-overflow-wrap":"whitespace",
         // "text-max-width":"1000",
          "background-image":(ele) => renderParentNode(ele).img,
          "background-image-opacity":(ele)=>renderParentNode(ele).iconOpacity,
          "overlay-opacity": (ele) => renderParentNode(ele).overlayOpacity ,
          "overlay-color": (ele) => renderParentNode(ele).dcolor ,
		      "border-width":5,
          "border-opacity":1,
          "background-color": "white",
          "z-compound-depth": "auto",
          "border-color": `black`,
          "background-position-x": "100%",
          "background-position-y": "0%",
          "background-opacity": "1",
          "padding":"50px",
          "background-clip":"none",
          "bounds-expansion":["50px","50px", "0px", "0px"],
          "font-size":String((Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])*2))+"px",
          "border-color":"black",
          "border-width":3,
          "background-opacity": "1" 
        }
      },
/// Style associated to collapsed nodes
      {
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
          "background-color": "white",
          "shape": "rectangle",
          "border-color":"black",
          "border-width":3,
          "background-opacity": "1",
          "font-size":String((Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])*2))+"px"     
        }
      },
/// edges are defined calling a renderer associating appropriate icons and visual styles 
//  for each relation type associated to the edges
//  Edges styles are aligned with visual symbols defined by ArchiMate language for relationships 
      {
        selector: 'edge',
        style: {
          'line-color': 'black',
          'curve-style': 'bezier',
		      "width": (ele) => renderEdge(ele).width,
          // 'arrow-scale':1,
          //   visibility: "hidden",

          "target-arrow-shape": (ele) => renderEdge(ele).targetArrowShape,
          "target-arrow-color": (ele) => renderEdge(ele).targetArrowColor,
          "target-arrow-fill": (ele) => renderEdge(ele).targetArrowFill,
          "source-arrow-shape": (ele) => renderEdge(ele).sourceArrowShape,
          "source-arrow-color": (ele) => renderEdge(ele).sourceArrowColor,
          "source-arrow-fill": (ele) => renderEdge(ele).sourceArrowFill,
          "line-style": (ele) => renderEdge(ele).lineStyle,
          "mid-target-arrow-shape": (ele) => renderEdge(ele).midTargetArrowShape,
          "mid-target-arrow-color": (ele) =>renderEdge(ele).midTargetArrowColor,
          "line-dash-pattern": (ele) => renderEdge(ele).lineDashPattern,
          "target-endpoint": "inside-to-node",
          "target-distance-from-node": 0,
          "label": (ele) => renderEdge(ele).label,
          "source-endpoint": "outside-to-node-or-label",
          "target-endpoint": "outside-to-node-or-label",
          "source-distance-from-node": "10px",
          "target-distance-from-node": "10px",
          "line-color":(ele) => renderEdge(ele).lineColor,
        }
      },
      {
        selector: ':selected',
        style: {
          'overlay-color': "#6c757d",
          'overlay-opacity': 0.2,
          'background-color': "#F4F6F7"
        }
      },
      {
        selector: '.cdnd-grabbed-node',
        style: {
          'background-color': 'red'
        }
      },

      {
        selector: '.cdnd-drop-sibling',
        style: {
          'background-color': 'red'
        }
      },

      {
        selector: '.cdnd-drop-target',
        style: {
          'border-color': 'red',
          'border-style': 'dashed'
        }
      },
      {
        selector: 'edge.cy-expand-collapse-collapsed-edge',
        style:
        {
          "text-outline-color": "#ffffff",
          "text-outline-width": "2px",
          'label': (e) => {
            return '(' + e.data('collapsedEdges').length + ')';
          },
          'width': function (edge) {
            const n = edge.data('collapsedEdges').length;
            return (3 + Math.log2(n)) + 'px';
          },
          'line-style': 'dashed',
          'line-color': setColor4CompoundEdge.bind(this),
          'target-arrow-color': setColor4CompoundEdge.bind(this),
          'target-arrow-shape': setTargetArrowShape.bind(this),
          'source-arrow-shape': setSourceArrowShape.bind(this),
          'source-arrow-color': setColor4CompoundEdge.bind(this),
        }
      },
    ],
    elements: cyGraph
  });  
cy.fit();

ur = cy.undoRedo({
  isDebug: true
});
ur.action("changeLabels", changeLabels, restoreLabels);
ur.action("changeNodesTypes", changeNodesTypes, restoreNodesTypes);  
ur.action("changeEdgesTypes", changeEdgesTypes, restoreEdgesTypes); 


// this layout is called for applying parameters for fcose layout without randomize
cy.layoutUtilities(layout2);

// Compound Drag and Drop
cdnd = cy.compoundDragAndDrop();
cdnd.disable();
var removeEmptyParents = false;

var isParentOfOneChild = function(node){
  return node.isParent() && node.children().length === 1;
};

var removeParent = function(parent){
  parent.children().move({ parent: null });
  parent.remove();
};

var removeParentsOfOneChild = function(){
  cy.nodes().filter(isParentOfOneChild).forEach(removeParent);
};

// custom handler to remove parents with only 1 child on drop
cy.on('cdndout', function(event, dropTarget){
  if( removeEmptyParents && isParentOfOneChild(dropTarget) ){
    removeParent(dropTarget);
  }
});

// Listen for changes to update property names
cy.on('add remove data layoutstop', function() {
  updatePropertyNames();
});
// Variables to store the current element being edited and the text buffer
var currentElement = null;
var textBuffer = '';

// Event listener for selecting nodes or edges
cy.on('select', 'node, edge', function (event) {
    if (cy.$(':selected').length === 1) {
        currentElement = event.target; // Store the single selected element
        textBuffer = currentElement.data('label') || ''; // Initialize the text buffer with the current label
    } else {
        deactivateEditing(); // Deactivate editing if more than one element is selected
    }
});

// Event listener for deselecting nodes or edges
cy.on('unselect', 'node, edge', function (event) {
    if (cy.$(':selected').length === 0) {
        deactivateEditing(); // Deactivate editing if no elements are selected
    } else if (cy.$(':selected').length === 1) {
        currentElement = cy.$(':selected')[0]; // Continue editing the remaining selected element
        textBuffer = currentElement.data('label') || '';
    } else {
        deactivateEditing(); // Deactivate editing if more than one element is selected
    }
});

// Function to deactivate text editing
function deactivateEditing() {
    currentElement = null; // Clear the current element
    textBuffer = ''; // Clear the text buffer
    // Note: Do not unselect elements here, just deactivate text editing
}

// Event listener for clicking outside the Cytoscape container
document.addEventListener('mousedown', function (event) {
    var cyContainer = document.getElementById('cy');

    // If the click is outside the Cytoscape container, deactivate editing
    if (!cyContainer.contains(event.target)) {
        deactivateEditing();
    }
});

// Event listener for focusout (losing focus from Cytoscape container)
cy.container().addEventListener('focusout', function (event) {
    // Deactivate editing if focus is lost
    deactivateEditing();
});

// Event listener for keyboard input
document.addEventListener('keydown', function (event) {
    if (!currentElement) return; // If no element is selected, do nothing

    // Handle text input
    if (event.key === 'Backspace') {
        // Handle backspace
        textBuffer = textBuffer.slice(0, -1);
    } else if (event.key.length === 1) {
        // Handle normal text input
        textBuffer += event.key;
    } else if (event.key === 'Tab') {
        // Deactivate editing if Tab key is pressed (focus shifting)
        deactivateEditing();
        return; // Let the Tab key do its default action (focus shift)
    } else {
        // Ignore other control keys (Enter, Shift, etc.)
        return;
    }

    // Update the label of the selected element
    currentElement.data('label', textBuffer);

    // Prevent default action for backspace
    event.preventDefault();
});


// custom handler to remove parents with only 1 child (on remove of drop target or drop sibling)
cy.on('remove', function(event){
  if( removeEmptyParents ){
    removeParentsOfOneChild();
  }
});

cy.on('drag', function(event) {
  logger.debug(`Event: ${event.type}`);
  logger.debug(`Target: ${event.target ? event.target.id() : 'No target'}`);
  logger.debug(event);
});


// end Compound Drag and Drop


  function headerFromSelected(){
    var selected=cy.elements(':selected');
    //log("selected:"+selected.length);
    var myId=undefined;
    var myGraphType="";
    var myarchicgType=undefined;
    var myTimestamp=undefined;
    if (selected.length == 1){
      selected.forEach(function(el){
        myId=cy.$(el).id();
        if (el.isNode()){
        if(el.data("type") !== null && el.data("type")!== undefined){
          myarchicgType=el.data("type");
          myarchicgType=myarchicgType.charAt(0).toUpperCase()+ myarchicgType.slice(1)
        }}
        if (el.isEdge()){
          if(el.data("type") !== null && el.data("type")!== undefined){
            myarchicgType=el.data("edgeType");
            myarchicgType=myarchicgType.charAt(0).toUpperCase()+ myarchicgType.slice(1)
          }}
        
        if (el.isNode()){myGraphType="Node";}else{myGraphType= "Edge";}
        if (el.data("timestamp")!==null){myTimestamp=el.data("timestamp");}
      })
      var mySpecialization="";
      var elementSpecialization=selected.data("specialization");
      if (elementSpecialization !== undefined && elementSpecialization !== ""){mySpecialization=specializationDenotation+elementSpecialization}

      var elementDescription=`${myarchicgType}${mySpecialization} ${myGraphType} with id:${myId}`;
      //if (myTimestamp !==undefined){elementDescription+= ` timestamp:${myTimestamp}`}
      
      return elementDescription;}

    else{return "No graph Element selected: double clik on a node or a edge";}
  }


// global variable collecting the removed element ??
removed = cy.collection();

//// Management of events when dblcliking visual elements, being on the graph widget or on the archicg icon palette

cy.on('dblclick',function(e){

/// DblClicking on the compound graph
deactivateEditing();

    var eTarget = e.target; 
    if (eTarget.isNode()){
      var myDegree=eTarget.degree();
      var myIndegree=eTarget.indegree();
      var myOutdegree=eTarget.outdegree();
      var hasClass=eTarget.hasClass();
     // var numericStyle=eTarget.numericStyle();
     // var numericStyleUnits=eTarget.numericStyleUnits();
      var isVisible=eTarget.visible();
      var effectiveOpacity=eTarget.effectiveOpacity();
      var transparent=eTarget.transparent();
      if (URLNavigationActivated){
        alert (`You want navigate an URL associated to ${eTarget.id()}`);
        if (typeof eTarget.data(URLProperty) === 'undefined'){
          alert (
`The property  "${URLProperty}" which is currently the one associated to URL navigation is undefined for this node.

So let's add an URL value for this property on the node, by accessing EA properties and adding a record you will save.

In case the property containing the URL to be navigated is not the good one, let's change the URL property using URLNavigation tool.

Access it using the  Tools menu.`)
        } 
        else{
          try {
            var myURL=eTarget.data(URLProperty);
            //alert (myURL);
            var myTarget= eTarget.id();
            //alert (myTarget)
            open (myURL, myTarget)
            //open(eTarget.data(URLProperty),eTarget.data(type)+": "+  eTarget.id());
          } catch (error) {
            console.error(error);
          }
        }
      }
       
     // NumericStyle:${numericStyle}
     //numericStyleUnits: ${numericStyleUnits}

      var message=`
      Degree is ${myDegree}
      Indegree is ${myIndegree}
      Outdegree is ${myOutdegree}
      Hasclass: ${hasClass}
      Visible: ${isVisible}
      Effective Opacity: ${effectiveOpacity}
      Transparent: ${transparent} 
      Position x: ${eTarget.position().x}
      Position y: ${eTarget.position().y}
      Rendered Position x: ${eTarget.renderedPosition().x}
      Rendered Position y: ${eTarget.renderedPosition().y}
      Relative Position x: ${eTarget.relativePosition().x}
      Relative Position y: ${eTarget.relativePosition().y}
      Width: ${eTarget.width()} 
      Outer width: ${eTarget.outerWidth()}  
      Rendered width: ${eTarget.renderedWidth()}  
      Rendered outer width: ${eTarget.renderedOuterWidth()}
      Height: ${eTarget.height()} 
      Outer height: ${eTarget.outerHeight()}  
      Rendered height: ${eTarget.renderedHeight()}  
      Rendered outer height: ${eTarget.renderedOuterHeight()}            
      `;
      //alert (message)
    }
    
    if( eTarget === cy ){
      //log('dblclick on background');
      w2ui['gridProperties'].clear();
      w2ui['gridAttributes'].clear();
      w2ui['gridEdges'].clear();
      w2ui.form.setValue("label","");
      w2ui.form.setValue("description","");
      w2ui.form.header=headerFromSelected();
      w2ui.form2.header=headerFromSelected();
      w2ui.gridProperties.header=headerFromSelected();
      w2ui.gridEdges.header=headerFromSelected();
      w2ui.gridAttributes.header=headerFromSelected();
      w2ui.form.disable('label', 'description');
      w2ui.form2.disable('id', 'parent', 'source', 'target', 'parentRelationId', 'parentRelationType', 'parentContainmentId','timestamp');
      //w2ui.form.refresh();
      return;
    } else {
      if (eTarget.classes().includes('cy-expand-collapse-collapsed-edge')){
        w2ui['gridProperties'].clear();
        w2ui['gridAttributes'].clear();
        w2ui['gridEdges'].clear();
        w2ui.form.setValue("label","");
        w2ui.form.setValue("description","");
        //alert(Flatted.stringify(eTarget))
        //log.dir(eTarget.collapsedChildren())
        exploreCollapsedEdge(eTarget)
        w2ui.form.header=headerFromSelected();
        w2ui.form2.header=headerFromSelected();
        w2ui.gridProperties.header=headerFromSelected();
        w2ui.gridAttributes.header=headerFromSelected();
        w2ui.gridEdges.header=headerFromSelected();
        w2ui.form.disable('label', 'description');
        w2ui.form2.disable('id', 'parent', 'source', 'target', 'parentRelationId', 'parentRelationType','parentContainmentId', 'timestamp');
      }
      else{
      if (eTarget.isNode() || eTarget.isEdge){
      //log('dblclick on '+eTarget.id()+ " node: "+ eTarget.isNode() + " edge: "+ eTarget.isEdge());
      //put the selected element in a global variable
      //log(eTarget[0].data());
      myProperties=eTarget[0].data();
      myGrid=[];
      w2ui.form.setValue("label","");
      w2ui.form.setValue("description","");
      w2ui.form2.setValue("id", "");
      w2ui.form2.setValue("parent", "");
      w2ui.form2.setValue("source", "");
      w2ui.form2.setValue("target", "");
      w2ui.form2.setValue("parentRelationId", "");
      w2ui.form2.setValue("parentRelationType", "");
      w2ui.form2.setValue("parentContainmentId", "");
      w2ui.form2.setValue("timestamp", "");
      var iterator=1;
      var record={};
      /// The properties related to the compound graph structuration are mixed with data properties
      //  so they have to be filtered, in order not to be displayed on the appropriate display panel
      
      /// Label and description panels are displayed in the dedicated form
      
      w2ui.form2.setValue("identifier",eTarget.id());
      w2ui.form2.setValue("timestamp", eTarget.data("timestamp"));
      w2ui.form2.setValue("parent", eTarget.data("parent"));
      w2ui.form2.setValue("parentRelationId", eTarget.data("parentRelationId"));
      w2ui.form2.setValue("parentRelationType", eTarget.data("parentRelationType"));
      w2ui.form2.setValue("parentContainmentId", eTarget.data("parentContainmentId"));
      if (eTarget.isEdge()){
        w2ui.form2.setValue("source", eTarget.source().id());
        w2ui.form2.setValue("target", eTarget.target().id());
      }
  
      for (var key in myProperties) {
        ///managing the Collapsing properties
        if (collapseProperties.includes(key)|| ITProperties.includes(key)){}
        else{
          /// managing the label and description display on a dedicated form
           if( ldProperties.includes(key)){
              if(myProperties[key] == null){w2ui.form.setValue(key,"");}
              else{w2ui.form.setValue(key,myProperties[key]);};
           }
           //else{ 
             /// managing the properties associated to model elements for display in a dedicated grid widget
             //  Some care is taken concerning null or undefined properties, or properties not defined as simple string (objects, arrays ...)
             //     They are currently not managed, potential future extension
           //log("property " + key + " has value " + myProperties[key]);
           var myValue=myProperties[key];
           record.fname=key;
           if (myValue == null){} 
           else{
             if (myValue.constructor.name ==="Object"){}
             else{
                if (myValue.constructor.name === "Array"){
                  myValue.forEach(function(value){
                    if(value.constructor.name === "Object")
                    {record.lvalue=JSON.parse(JSON.stringify(value));}
                    else{record.lvalue=value;} 
                    record.recid=iterator;
                    myGrid.push(JSON.parse(JSON.stringify(record)));
                    iterator+=1;
                    }
                  )
                 }
                else
                  {
                   if (key=="attributes"){gridEntityAttribute(myValue)}
                   record.lvalue=myProperties[key];
                   record.recid=iterator;
                   myGrid.push(JSON.parse(JSON.stringify(record)));
                   iterator+=1;
                  }
               }
             }
           //log(JSON.stringify(myGrid));
           w2ui['gridProperties'].clear();
           w2ui['gridProperties'].add(myGrid);
           w2ui.form.header=headerFromSelected();
           w2ui.form2.header=headerFromSelected();
           w2ui.gridProperties.header=headerFromSelected();
           w2ui.gridEdges.header=headerFromSelected();
           w2ui.gridAttributes.header=headerFromSelected();
           w2ui.form.enable('label', 'description'); 
           w2ui.form2.refresh();
           w2ui.gridProperties.refresh();
           w2ui.gridAttributes.refresh();
           w2ui.gridEdges.refresh();
           w2ui.sidebar.select('mainproperties');
           //w2ui.layoutProperties.html('main',w2ui.form);
           w2ui.form.refresh();
        //  }
        }
        }
      }}
    }
    /// Interactions with the Accordion Pane interface
    var elements = cy.elements(':selected');
    var myLabel=undefined;
    var myId=undefined;
    var myType=undefined;
    var myParentId=undefined;
    var myParentRelation=undefined;
    var myParentRelationId=undefined;
    var myParentContainmentId=undefined;
    var myParentRelationType=undefined;
    var mySourceId=undefined;
    var myTargetId=undefined;      
    elements.forEach(function(el){
        myLabel=cy.$(el).data("label");
        //log("myLabel: "+myLabel);
        myId=cy.$(el).id();
        
        if (eTarget.isNode()){
          myType=cy.$(el).data("type");
          myParentId=cy.$(el).data("parent");
          myParentRelationId=cy.$(el).data("parentRelationId");
          myParentRelationType=cy.$(el).data("parentRelationType");
          myParentContainmentId=cy.$(el).data("parentContainementId");
        }
        if (eTarget.isEdge()){
          myType=cy.$(el).data("edgeType");
          mySourceId=cy.$(el).data("source");
          myParentId=cy.$(el).data("parent");
        }
    });
    if(document.getElementById('globalLabel')){document.getElementById('globalLabel').value= myLabel;}
   // document.getElementById('globalNodeId').value = undefined;
    if(document.getElementById('globalNodeType')){document.getElementById('globalNodeType').value = undefined;}
   // document.getElementById('globalParentId').value= undefined;
   // document.getElementById('edgeId').value = undefined;
    if(document.getElementById('globalEdgeType')){document.getElementById('globalEdgeType').value = undefined;}
   // document.getElementById('parentRelationType').value= undefined;
   // document.getElementById('parentRelationId').value= undefined;
   // document.getElementById('globalSourceId').value= undefined;
   // document.getElementById('globalTargetId').value= undefined;

    if (eTarget.isNode()){
    //  document.getElementById('globalNodeId').value = myId;
      if(document.getElementById('globalNodeType')){document.getElementById('globalNodeType').value= myType;  } 
    //  document.getElementById('globalParentId').value=myParentId;
    //  document.getElementById('parentRelationType').value= myParentRelationType;
    //  document.getElementById('parentRelationId').value= myParentRelationId; 

    } 
    if (eTarget.isEdge()){
    //  document.getElementById('edgeId').value = myId;
      if(document.getElementById('globalEdgeType')){document.getElementById('globalEdgeType').value = myType;}
    //  document.getElementById('globalSourceId').value = mySourceId;
    //  document.getElementById('globalTargetId').value = myTargetId;
    }     
    w2ui.sidebar.select('mainproperties');
  }
 
  );



//elesWithAsProperty("securityLevel");
function elesWithAsProperty(property)
{
// propertyValueColors = d3.scaleOrdinal([...new Set(cy.data(`${property}`))],d3.schemeTableau10);
 //document.getElementById("legend").innerHTML += Swatches(propertyValueColors, {columns: "50px" });
 //return propertyValueColors;
 return true;
}


//// Code related to Edgehandles and expand collapse
// Edgehandles definition of defaults before to initiate it
let ehDefaults = {
  canConnect: function( sourceNode, targetNode ){
    // whether an edge can be created between source and target
    // here can be enforced allowed and not allowed ArchiMate relationship with archicg
    //  return !sourceNode.same(targetNode); // e.g. disallow loops
    // For ArchiMate allowed relations enforcement
    // Global variable ArchiMateAllowedRelationshipEnforce, true or false
    var myElem=document.getElementById('globalEdgeType');
    if (myElem !== null && myElem !== 'undefined'){
       var myEdgeType = document.getElementById('globalEdgeType').value;
      }
    else{
       var myEdgeType=globalEdgeType;
    }
    var canConnect=true ;
    globalEdgeType=myEdgeType;
    if (ArchiMateAllowedRelationshipEnforce){
      var mySourceType = sourceNode.data("type");
      var myTargetType = targetNode.data("type"); 
      if(acg_ArchiMateRelations.includes(myEdgeType) &&
         ja_ArchiMateObjects.includes(mySourceType) &&
         ja_ArchiMateObjects.includes(myTargetType)){
          var letter= ArchiMateRelationIDs[acg_ArchiMateRelations.indexOf(myEdgeType)];
          var sourceIndex=ja_ArchiMateObjects.indexOf(mySourceType);
          var targetIndex=ja_ArchiMateObjects.indexOf(myTargetType);
          canConnect= ArchiMateRelations[sourceIndex][targetIndex+1].includes(letter);
        } else{
  //        if (acg_ArchiMateExtensions.includes (mySourceType) && (acg_ArchiMateExtensions.includes(myTargetType)))
  if (acgTypes.includes (mySourceType) && (acgTypes.includes(myTargetType)))
          {canConnect=false} else          {canConnect=false}
        }
      }
      return canConnect;
  },
  edgeParams: function( sourceNode, targetNode ){

    var myElem=document.getElementById('globalEdgeType');
    if (myElem !== null && myElem !== 'undefined'){
       var myType = document.getElementById('globalEdgeType').value;
      }
    else{
       var myType=globalEdgeType;
    }
    // for edges between the specified source and target, return element object to be passed to cy.add() for edge
   var data={ data:{"edgeType":myType}};
    return data;
  },
  hoverDelay: 150, // time spent hovering over a target node before it is considered selected
  snap: false};

eh = cy.edgehandles(ehDefaults);
api = cy.expandCollapse('get');

//var ur = cy.undoRedo({ isDebug: false});

cy.on("afterUndo", function (e, name) {
  //document.getElementById("undos").innerHTML += "<span style='color: darkred; font-weight: bold'>Undo: </span> " + name  +"</br>";
});

cy.on("afterRedo", function (e, name) {
  //document.getElementById("undos").innerHTML += "<span style='color: darkblue; font-weight: bold'>Redo: </span>" + name  +"</br>";
});

cy.on('ehcomplete', (event, sourceNode, targetNode, addedEdge) => {
	var removedEdge=cy.remove(addedEdge); 
  const actions = []; 
  // 'batch' array (doing all undo-redo action as batches)
  actions.push({
      name: 'add',
      param: removedEdge
 //     {
 //         group: 'edges',
 //         data: { id: addedEdge.id(), source: sourceNode.id(), target: targetNode.id() },
 //     }
      
  });
  ur.do('batch', actions);
});



var elements = null;

  //setTimeout(() => {    document.getElementsByClassName('accordion')[0].click();  }, 500);

//// Loading files
document.getElementById('load-from-inp').addEventListener('change', function (){
  readTxtFile(this.files[0], function (txt) {
    w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
    .yes(() => {cy.$().remove();
      api.loadJson(txt);
      api.collapseAll();
      api.collapseAllEdges(getEdgeOptions());
    })
    .no(() => { 
      api.loadJson(txt);
      api.collapseAll();
      api.collapseAllEdges(getEdgeOptions());
    });
  })


});

document.getElementById('load-from-open-format').addEventListener('change', function (){
  readTxtFile(this.files[0], function (txt) {
    w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
    .yes(() => {
     // cy.$().remove();
     // api.loadJson(txt);
     // api.collapseAll();
     // api.collapseAllEdges(getEdgeOptions());
      alert ("remove and load")
    })
    .no(() => { 
      //api.loadJson(txt);
      //api.collapseAll();
      //api.collapseAllEdges(getEdgeOptions());
      alert ("load")
    });
  })
});

document.getElementById('load-entity-definitions-from-alfabet').addEventListener('change', function () {
  alert(this.id)
  var error="";
  readTxtFile(this.files[0], function (txt) {
    logger.info(txt)
    w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
    .yes(() => {cy.$().remove();importAlfabetEntities(txt)})
    .no(() => {  importAlfabetEntities(txt) });      
    })
});

document.getElementById('load-attribute-definitions-from-alfabet').addEventListener('change', function () {
  var error="";
  readTxtFile(this.files[0], function (txt) {
    w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
    .yes(() => {cy.$().remove();importAlfabetAttributes(txt)})
    .no(() => {  importAlfabetAttributes(txt) });      
    })
});

document.getElementById('load-relation-definitions-from-alfabet').addEventListener('change', function () {
  var error="";
  readTxtFile(this.files[0], function (txt) {
    w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
    .yes(() => {cy.$().remove();importAlfabetRelations(txt)})
    .no(() => {  importAlfabetRelations(txt) });      
    })
});

document.getElementById('load-entities-from-OC').addEventListener('change', function (event) {
  var error="";
  var myFile= event.target.value.split('\\').pop().split('/').pop();  
  logger.info(myFile)
  var fileIndex=oneCompasslistExportedEntityTypesCSVNameForeARD.indexOf(event.target.value.split('\\').pop().split('/').pop())
  logger.info(fileIndex)
  try{
  if (fileIndex > -1){
  readTxtFile(this.files[0], function (txt) {
       var myEntityName=oneCompasslistExportedEntityTypesForeARD[fileIndex]
       logger.info(`Entity Name: ${myEntityName}`)
       var myParseResult=Papa.parse(txt, {header: true,step: function(row) {
      logger.info(row.data)
      //parseRow(row.data, myEntityName);
  },complete:function(results){logger.info(myFile.name+" parsed")}});
});
}} catch(e){logger.error(e)}
});


document.getElementById('load-from-jarchi').addEventListener('change', function () {
  var error="";
  readTxtFile(this.files[0], function (txt) {
    w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
    .yes(() => {
      cy.$().remove();
    try {var myData=JSON.parse(txt);var addedNode=cy.add(myData);}catch(e){error+="\n"+e;};
    console.log(error)
      
        })
    .no(() => {  
     try {var myData=JSON.parse(txt);}
        catch(e){error+="\n"+e;};

        api.expandAllEdges(getEdgeOptions());
        api.expandAll();
        myData.forEach(function(data){
          if (data["group"]=="nodes"){
                     //testing if the node already exist, as a blank node or not
          var existingNode=cy.$id(data.data["id"]);
          
          if(existingNode.length>0){
            existingNodeId=existingNode[0].id();
            console.log("existing node id "+ existingNode[0].id())
            console.log("existing node type "+ existingNode[0].data("type"))
            console.log("added node id "+ data.data["id"])
            console.log("added node type "+ data.data["type"])
            if (existingNode[0].data("type")=="blank-node"){
              console.log("j'y passe")
              //update the data of the node
              Object.keys(data.data).forEach(function(key) {
                console.log("key:"+key)
              if (key!=="id" && key!=="parent"){existingNode[0].data(key,data.data[key]);}
              if (key=="parent"){
                cy.$id(existingNodeId).move({ parent:data.data[key]});
              }
            });
              
            }
          } else{
            try {cy.add([data])}catch(e){error+="\n"+e;}
          }
     
          }})
        myData.forEach(function(data){
          if (data["group"]=="edges"){
            cy.add
            importEdge(data);
          }})
          if(error==""){alert("Ok")}else{alert(error)} 
          api.collapseAll();
          api.collapseAllEdges(getEdgeOptions());
        }); 
          
      })

    });
document.getElementById('load-from-open-format').addEventListener('change', function () {
  readTxtFile(this.files[0], function (xmlString) {
    // test if the file is an XML file
 
    const model = new window.DOMParser().parseFromString(xmlString, "text/xml");
 
    if (model.querySelectorAll("parsererror").length > 0) {
        const msg = `Error parsing the model file \r\n\r\n${ model.querySelector("parsererror > div").textContent }`;
        logger.error(msg);
        //alert(msg);
    }else{
    if (model.documentElement.nodeName !== "model"){alert("invalide root node for this file!");return;}
    var modelAttributes=model.documentElement.attributes;
    var modelNode={"group":"nodes", "data":{type:"model"}};
    var text="";
    var modelId="";
    for (let i = 0; i < modelAttributes.length; i++) {
     text += modelAttributes[i].name + " = " + modelAttributes[i].value + "\n";
     if (modelAttributes[i].name == "identifier"){
       modelNode.data["id" ] = modelAttributes[i].value ;
       modelId=modelAttributes[i].value ;
     }
     modelNode.data["oef.schema."+modelAttributes[i].name ] = modelAttributes[i].value ;
   }
   modelNode.data.name =model.querySelector("model > name") ? model.querySelector("model > name").textContent : "";
   modelNode.data.label =model.querySelector("model > name") ? model.querySelector("model > name").textContent : "";
   modelNode.data.description=model.querySelector("model > documentation") ? model.querySelector("model > documentation").textContent : "";
 
 
    var propertyDefinitionsMap = [].map.call(model.querySelectorAll("propertyDefinition"), (e) => {
     return {
         propertyDefinitionRef: e.getAttribute("identifier"),
         name: e.querySelector("name").textContent
       };
     })
     .reduce((map, obj) => {
        map[obj.propertyDefinitionRef] = obj.name;
        return map;
       }, {});
       //alert (JSON.stringify(propertyDefinitionsMap))
   
 
 
       const modelViews = [].map.call(model.querySelectorAll("view"), (v) => {
         //strings used for naming types are not the same in OEF and archiCG(based on jArchi type name)
         // arrays of name are defined in archimate.js
         var myType = v.getAttribute("xsi:type");
         var theType= "view";
     
         var nodeAttributs={
         id: v.getAttribute("identifier"),
         parent:modelId,
         type: theType,
         name: (v.querySelector("name") ? v.querySelector("name").textContent : ""), 
         label: (v.querySelector("name") ? v.querySelector("name").textContent : "no name!"),
         description: (v.querySelector("documentation") ? v.querySelector("documentation").textContent : "")};
         
         var nodeProperties=([].map.call(v.querySelectorAll("property"), (p) => {                   
           return { 
               name: propertyDefinitionsMap[p.getAttribute("propertyDefinitionRef")],
               value: p.querySelector("value").textContent
           };
       })).reduce((map, obj) => {
           map[obj.name.toLowerCase()] = obj.value;
           return map;
       }, {});
         return {"group":"nodes", data:{...nodeAttributs,...nodeProperties}};
     });    
     
   const modelElements = [].map.call(model.querySelectorAll("element"), (e) => {
     //strings used for naming types are not the same in OEF and archiCG(based on jArchi type name)
     // arrays of name are defined in archimate.js
     var myType = e.getAttribute("xsi:type");
     var myTypeIndex=oef_ArchiMateObjects.indexOf(myType);
     var theType= ja_ArchiMateObjects[myTypeIndex];
 
     var nodeAttributs={
     id: e.getAttribute("identifier"),
     parent:modelId,
     type: theType,//e.getAttribute("xsi:type"),
     name: (e.querySelector("name") ? e.querySelector("name").textContent : ""), 
     label: (e.querySelector("name") ? e.querySelector("name").textContent : "no name!"),
     description: (e.querySelector("documentation") ? e.querySelector("documentation").textContent : "")};
     
     var nodeProperties=([].map.call(e.querySelectorAll("property"), (p) => {                   
       return { 
           name: propertyDefinitionsMap[p.getAttribute("propertyDefinitionRef")],
           value: p.querySelector("value").textContent
       };
   })).reduce((map, obj) => {
       map[obj.name.toLowerCase()] = obj.value;
       return map;
   }, {});
     return {"group":"nodes", data:{...nodeAttributs,...nodeProperties}};
 });


 
 const modelRelationships = [].map.call(model.querySelectorAll("relationship"), (r) => {
 
   var edgeAttributs={
     id: r.getAttribute("identifier"),            
       edgeType: r.getAttribute("xsi:type").toLowerCase().replace("-relationship", ""),            
       name: (r.querySelector("name") ? r.querySelector("name").textContent : ""), 
       label: (r.querySelector("name") ? r.querySelector("name").textContent : ""), 
       description: (r.querySelector("documentation") ? r.querySelector("documentation").textContent : ""),
       source: r.getAttribute("source"),
       target: r.getAttribute("target"),
       accessType: r.getAttribute("accessType")
   }
   
       
       var edgeProperties=([].map.call(r.querySelectorAll("property"), (p) => {                
           return { 
               name: propertyDefinitionsMap[p.getAttribute("propertyDefinitionRef")],
               value: p.querySelector("value").textContent
           };
       })).reduce((map, obj) => {
           map[obj.name.toLowerCase()] = obj.value;
           return map;
       }, {})
       return {"group":"edges", data:{...edgeAttributs,...edgeProperties}};
 });
 
   var results=JSON.stringify(modelElements);
   //alert (results);
     
   w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
     .yes(() => {cy.$().remove(); 
       cy.add(modelNode);
       cy.add(modelElements);
       cy.add(modelRelationships);
       cy.add(modelViews);
       includeFolders(model, modelId);
       api.collapseAll();
       api.collapseAllEdges(getEdgeOptions());})
     .no(() => {  
       cy.add(modelNode);
       cy.add(modelElements);
       cy.add(modelViews);
       cy.add(modelRelationships);
       api.collapseAll();
       api.collapseAllEdges(getEdgeOptions());
       });  
     }  
   })  

});


document.getElementById('load-from-rdf').addEventListener('change', function () {
  readTxtFile(this.files[0], function (rdfString) {

    w2confirm('Do you want to replace? If yes, current graph will be removed, if no, it will be fusionned with the import)')
     .yes(() => {
      cy.$().remove(); 
      ontologyImport(rdfString);
      // cy.add(modelNode);
      // cy.add(modelElements);
      // cy.add(modelRelationships);
      // cy.add(modelViews);
      // includeFolders(model, modelId);
       api.collapseAll();
       api.collapseAllEdges(getEdgeOptions());

       })
     .no(() => {  
      api.expandAll();
      api.expandAllEdges(getEdgeOptions());
      ontologyImport(rdfString);
      // cy.add(modelNode);
      // cy.add(modelElements);
      // cy.add(modelViews);
      // cy.add(modelRelationships);
       api.collapseAll();
       api.collapseAllEdges(getEdgeOptions());
  
    });  
     }  
   )    
});

function itemToGraph(parent,item){
  var identifierRef=item.getAttribute("identifierRef");
  if (identifierRef !== null && identifierRef!== "" && parent !== null && parent!== ""){
    log ("referenced item:"+item.getAttribute("identifierRef"));
    log ("source:"+parent);
    // create an aggregation relationship with as source the parent and as target the item
    var idAggregation=new UUID(4);
    cy.add([{"group":"edges", "data":{"id":`${idAggregation}`, "source":parent, "target":identifierRef, "edgeType":"aggregation"}}]);
  }
   else {
     var label="";
    var labelElement=item.querySelector("label");
     if(labelElement !== null && labelElement!== "")
    {var label=labelElement.textContent;}
    logger.info(label) ;

    // create the folder with a given id
    var idFolder=new UUID(4);
    var myNode=[{group: 'nodes', data:{id:`${idFolder}`, "label":label, "type":"folder",parent:parent }}];
    logger.debug(myNode[0].group);
    logger.debug (JSON.stringify(myNode[0].data))
    var eles=cy.add(myNode);


    log ("node added")
    //moving the folder in the parent folder
    cy.$id(idFolder).move({ parent: parent });
    var myChildItems=item.children;
    for (let i = 0; i < myChildItems.length; i++) {
      logger.debug(myChildItems[i].tagName);
      if (myChildItems[i].tagName == "item")
      {
        itemToGraph(`${idFolder}`,myChildItems[i]);
      }
    }
    //log ("myChildItems:"+ JSON.stringify(myChildItems));
    //var myContainedItems=item.querySelectorAll("item");
    //log ("myContainedItems:"+JSON.stringify(myContainedItems));
    //var myContainedItemsKeys=Object.keys(myContainedItems);
    //log (JSON.stringify(myContainedItemsKeys))
    //var myContainedItemsObjects=myContainedItemsKeys.map((key)=>myContainedItems[key]);
    //log (JSON.stringify(myContainedItemsObjects));
    //myContainedItemsObjects.map(function(i) {
    //  log("contained item :"+JSON.stringify(i));
    //  itemToGraph(`${idFolder}`,i);
    //  return i;
    //});
}
}

function includeFolders(model, modelId){

var organizations=model.querySelectorAll("organizations");
log(JSON.stringify(organizations));
      if (organizations.length > 1){
        log ("Invalid OEF structure:"+organizations.length())+ "organizations elements <br/>";} 
      else
        {
          logger.debug("Valid OEF structure");
          items=organizations[0].children;
          log (JSON.stringify(items));
          const arrayItems = [].map.call(items, (i) => {
            var label="";
            var labelElement=i.querySelector("label");
            if(labelElement !== null && labelElement!== "")
            { 
              var label=labelElement.textContent;
              log ("label:"+label)
              if (label!=="Relations"){itemToGraph(modelId,i);}
            }
          
            
          return "ok";
        })
      }
    }
}

document.addEventListener('DOMContentLoaded', main);

document.addEventListener("keydown", function (e) {
   if (e.ctrlKey && e.target.nodeName === 'BODY')
                if (e.which === 90)
                    ur.undo();
                else if (e.which === 89)
                    ur.redo();

});



//// Association of ArchiMate symbols (SVG Icons) according to the type property of a node
function business_actor_svg() { return  "data:image/svg+xml;base64," + btoa(business_actor.outerHTML);}
function access_svg() { return "data:image/svg+xml;base64," + btoa(access.outerHTML);}
function application_collaboration_svg() { return "data:image/svg+xml;base64," + btoa(application_collaboration.outerHTML);}
function application_component_svg() { return "data:image/svg+xml;base64," + btoa(application_component.outerHTML);}
function application_event_svg() { return "data:image/svg+xml;base64," + btoa(application_event.outerHTML);}
function application_function_svg() { return "data:image/svg+xml;base64," + btoa(application_function.outerHTML);}
function application_interaction_svg() { return "data:image/svg+xml;base64," + btoa(application_interaction.outerHTML);}
function application_interface_svg() { return "data:image/svg+xml;base64," + btoa(application_interface.outerHTML);}
function application_process_svg() { return "data:image/svg+xml;base64," + btoa(application_process.outerHTML);}
function application_service_svg() { return "data:image/svg+xml;base64," + btoa(application_service.outerHTML);}
function artifact_svg() { return "data:image/svg+xml;base64," + btoa(artifact.outerHTML);}
function assessment_svg() { return "data:image/svg+xml;base64," + btoa(assessment.outerHTML);}
function business_collaboration_svg() {  return "data:image/svg+xml;base64," + btoa(business_collaboration.outerHTML);}
function business_event_svg() {  return "data:image/svg+xml;base64," + btoa(business_event.outerHTML);}
function business_function_svg() {return "data:image/svg+xml;base64," + btoa(business_function.outerHTML);}
function business_interaction_svg() {  return "data:image/svg+xml;base64," + btoa(business_interaction.outerHTML);}
function business_interface_svg() {  return "data:image/svg+xml;base64," + btoa(business_interface.outerHTML);}
function business_object_svg() {  return "data:image/svg+xml;base64," + btoa(business_object.outerHTML);}
function business_process_svg() {  return "data:image/svg+xml;base64," + btoa(business_process.outerHTML);}
function business_role_svg() {  return "data:image/svg+xml;base64," + btoa(business_role.outerHTML);}
function business_service_svg() {  return "data:image/svg+xml;base64," + btoa(business_service.outerHTML);}
function capability_svg() {  return "data:image/svg+xml;base64," + btoa(capability.outerHTML);}
function communication_network_svg() {  return "data:image/svg+xml;base64," + btoa(communication_network.outerHTML);}
function composition_svg() {  return "data:image/svg+xml;base64," + btoa(composition.outerHTML);}
function constraint_svg() {  return "data:image/svg+xml;base64," + btoa(constraint.outerHTML);}
function course_of_action_svg() {  return "data:image/svg+xml;base64," + btoa(course_of_action.outerHTML);}
function contract_svg() {  return "data:image/svg+xml;base64," + btoa(contract.outerHTML);}
function data_object_svg() {  return "data:image/svg+xml;base64," + btoa(data_object.outerHTML);}
function deliverable_svg() {  return "data:image/svg+xml;base64," + btoa(deliverable.outerHTML);}
function device_svg() {  return "data:image/svg+xml;base64," + btoa(device.outerHTML);}
function distribution_network_svg() {  return "data:image/svg+xml;base64," + btoa(distribution_network.outerHTML);}
function driver_svg() {  return "data:image/svg+xml;base64," + btoa(driver.outerHTML);}
function equipment_svg() {  return "data:image/svg+xml;base64," + btoa(equipment.outerHTML);}
function facility_svg() {  return "data:image/svg+xml;base64," + btoa(facility.outerHTML);}
function gap_svg() {  return "data:image/svg+xml;base64," + btoa(gap.outerHTML);}
function goal_svg() {  return "data:image/svg+xml;base64," + btoa(goal.outerHTML);}
function grouping_svg() {  return "data:image/svg+xml;base64," + btoa(grouping.outerHTML);}
function implementation_event_svg() {  return "data:image/svg+xml;base64," + btoa(implementation_event.outerHTML);}
function andjunction_svg() {  return "data:image/svg+xml;base64," + btoa(andjunction.outerHTML);}
function orjunction_svg() {  return "data:image/svg+xml;base64," + btoa(orjunction.outerHTML);}
function location_svg() {  return "data:image/svg+xml;base64," + btoa(locationSVG.outerHTML);}
function group_svg() {  return "data:image/svg+xml;base64," + btoa(group.outerHTML);}
function material_svg() {  return "data:image/svg+xml;base64," + btoa(material.outerHTML);}
function meaning_svg() {  return "data:image/svg+xml;base64," + btoa(meaning.outerHTML);}
function node_svg() {  return "data:image/svg+xml;base64," + btoa(node.outerHTML);}
function outcome_svg() {  return "data:image/svg+xml;base64," + btoa(outcome.outerHTML);}
function path_svg() {  return "data:image/svg+xml;base64," + btoa(path.outerHTML);}
function plateau_svg() {  return "data:image/svg+xml;base64," + btoa(plateau.outerHTML);}
function principle_svg() {  return "data:image/svg+xml;base64," + btoa(principle.outerHTML);}
function product_svg() {  return "data:image/svg+xml;base64," + btoa(product.outerHTML);}
function representation_svg() {  return "data:image/svg+xml;base64," + btoa(representation.outerHTML);}
function requirement_svg() {  return "data:image/svg+xml;base64," + btoa(requirement.outerHTML);}
function resource_svg() {  return "data:image/svg+xml;base64," + btoa(resource.outerHTML);}
function stakeholder_svg() {  return "data:image/svg+xml;base64," + btoa(stakeholder.outerHTML);}
function system_software_svg() {  return "data:image/svg+xml;base64," + btoa(system_software.outerHTML);}
function technology_collaboration_svg() {  return "data:image/svg+xml;base64," + btoa(technology_collaboration.outerHTML);}
function technology_function_svg() {  return "data:image/svg+xml;base64," + btoa(technology_function.outerHTML);}
function technology_event_svg() {  return "data:image/svg+xml;base64," + btoa(technology_event.outerHTML);}
function technology_interaction_svg() {  return "data:image/svg+xml;base64," + btoa(technology_interaction.outerHTML);}
function technology_interface_svg() {  return "data:image/svg+xml;base64," + btoa(technology_interface.outerHTML);}
function technology_process_svg() {  return "data:image/svg+xml;base64," + btoa(technology_process.outerHTML);}
function technology_service_svg() {  return "data:image/svg+xml;base64," + btoa(technology_service.outerHTML);}
function value_svg() {  return "data:image/svg+xml;base64," + btoa(value.outerHTML);}
function value_stream_svg() {  return "data:image/svg+xml;base64," + btoa(value_stream.outerHTML);}
function work_package_svg() {  return "data:image/svg+xml;base64," + btoa(work_package.outerHTML);}


function aggregation_svg() {  return "data:image/svg+xml;base64," + btoa(aggregation.outerHTML); }
function assignment_svg() {  return "data:image/svg+xml;base64," + btoa(assignment.outerHTML); }
function association_svg() {  return "data:image/svg+xml;base64," + btoa(association.outerHTML); }
function composition_svg() {  return "data:image/svg+xml;base64," + btoa(composition.outerHTML); }
function flow_svg() {  return "data:image/svg+xml;base64," + btoa(flow.outerHTML); }
function influence_svg() {  return "data:image/svg+xml;base64," + btoa(influence.outerHTML); }
function realization_svg() {  return "data:image/svg+xml;base64," + btoa(realization.outerHTML); }
function serving_svg() {  return "data:image/svg+xml;base64," + btoa(serving.outerHTML); }
function specialization_svg() {  return "data:image/svg+xml;base64," + btoa(specialization.outerHTML); }
function triggering_svg() {  return "data:image/svg+xml;base64," + btoa(triggering.outerHTML); }
function hny2022_svg() {  return "data:image/svg+xml;base64," + btoa(hny.outerHTML); }





function ArchiMate(type) {
  const rectangle = "rectangle";
  switch (type) {
    case "hny"                       :return hny2022_svg();                          break;     
	  case "access"                    :return access_svg();                           break; 
    case "aggregation"               :return aggregation_svg();                      break;
    case "assignment"                :return assignment_svg();                       break;
	  case "association"               :return association_svg();                      break;
	  case "composition"               :return composition_svg();                      break;
    case "flow"                      :return flow_svg();                             break;
    case "influence"                 :return influence_svg();                        break;
    case "realization"               :return realization_svg();                      break;
    case "serving"                   :return serving_svg();                          break;
    case "specialization"            :return specialization_svg();                   break;
    case "triggering"                :return triggering_svg();                       break;
    case "work-package"              :return work_package_svg();                     break;
    case "artifact"                  :return artifact_svg();                         break;
    case "application-collaboration" :return application_collaboration_svg();        break;
    case "application-component"     :return application_component_svg();            break;
    case "application-event"         :return application_event_svg();                break;
    case "application-function"      :return application_function_svg();             break;
    case "application-interface"     :return application_interface_svg();            break;
    case "application-interaction"   :return application_interaction_svg();          break;
    case "application-process"       :return application_process_svg();              break;
    case "application-service"       :return application_service_svg();              break;
    case "assessment"                :return assessment_svg();                       break;
    case "business-actor"            :return business_actor_svg();                   break;
    case "business-collaboration"    :return business_collaboration_svg();           break;
    case "business-function"         :return business_function_svg();                break;
    case "business-event"            :return business_event_svg();                   break;
    case "business-interaction"      :return business_interaction_svg();             break;
    case "business-interface"        :return business_interface_svg();               break;
    case "business-object"           :return business_object_svg();                  break;
    case "business-process"          :return business_process_svg();                 break;
    case "business-role"             :return business_role_svg();                    break;
    case "business-service"          :return business_service_svg();                 break;
    case "capability"                :return capability_svg();                       break;
    case "communication-network"     :return communication_network_svg();            break;
    case "composition"               :return composition_svg();                      break;
    case "constraint"                :return constraint_svg();                       break;
    case "contract"                  :return contract_svg();                         break;
    case "course-of-action"          :return course_of_action_svg();                 break;
    case "data-object"               :return data_object_svg();                      break;
    case "deliverable"               :return deliverable_svg();                      break;
    case "device"                    :return device_svg();                           break;
    case "distribution-network"      :return distribution_network_svg();             break;
    case "driver"                    :return driver_svg();                           break;
    case "equipment"                 :return equipment_svg();                        break;
    case "facility"                  :return facility_svg();                         break;
    case "gap"                       :return gap_svg();                              break;
    case "goal"                      :return goal_svg();                             break;
    case "grouping"                  :return grouping_svg();                         break;
    case "implementation-event"      :return implementation_event_svg();             break;
    case "instruction"               :return instruction_9001_svg();                 break;
    case "location"                  :return location_svg();                         break;
    case "material"                  :return material_svg();                         break;
    case "meaning"                   :return meaning_svg();                          break;
    case "node"                      :return node_svg();                             break;
    case "outcome"                   :return outcome_svg();                          break;
    case "path"                      :return path_svg();                             break;
    case "plateau"                   :return plateau_svg();                          break;
    case "principle"                 :return principle_svg();                        break;
    case "process"                   :return process_9001_svg();                     break;
    case "procedure"                 :return procedure_9001_svg();                   break;
    case "product"                   :return product_svg();                          break;
    case "representation"            :return representation_svg();                   break;
    case "requirement"               :return requirement_svg();                      break;
    case "resource"                  :return resource_svg();                         break;
    case "stakeholder"               :return stakeholder_svg();                      break;
    case "system-software"           :return system_software_svg();                  break;
    case "technology-collaboration"  :return technology_collaboration_svg();         break;
    case "technology-event"          :return technology_event_svg();                 break;
    case "technology-function"       :return technology_function_svg();              break;
    case "technology-interaction"    :return technology_interaction_svg();           break;
    case "technology-interface"      :return technology_interface_svg();             break;
    case "technology-process"        :return technology_process_svg();               break;
    case "technology-service"        :return technology_service_svg();               break;
    case "value"                     :return value_svg();                            break;
    case "value-stream"              :return value_stream_svg();                     break;
   	case "andjunction"               :return andjunction_svg();                      break;
    case "orjunction"                :return orjunction_svg();                       break;
    default                          :return not_defined_svg();                      break;
  }
}
//// Rendering functions for an edge, in order to reflect visual definition of ArchiMate relationships
/// Extended to some specialization and complementary types of objects not part of ArchiMate
function renderEdge(ele) {
  var sourceArrowShape = "none";
  var sourceArrowColor = "black";
  var sourceArrowFill = "filled";
  var targetArrowShape = "none";
  var targetArrowColor = "black";
  var targetArrowFill = "filled";
  var sourceArrowShape = "none";
  var lineStyle = "solid";
  var midTargetArrowShape = "none";
  var midTargetArrowColor = "black";
  var lineDashPattern = [5, 5];
  var lineColor="black";
  var label = undefined;
  var width=1;
 

  label = ele.data("label");

  switch (ele.data("edgeType")) {
    case "realization": targetArrowShape = "triangle"; targetArrowFill = "hollow"; lineStyle = "dashed"; break;
    case "specialization":targetArrowShape = "triangle";targetArrowFill = "hollow";break;
    case "triggering":targetArrowShape = "triangle";break;
    case "flow":targetArrowShape = "triangle";lineStyle = "dashed";lineDashPattern = [10, 10];break;
    case "serving":targetArrowShape = "chevron";break;
    case "influence":targetArrowShape = "chevron";lineStyle = "dashed";lineDashPattern = [10, 10];break;
    case "assignment":targetArrowShape = "chevron";sourceArrowShape = "circle";break;
    case "access":lineStyle = "dashed";targetArrowShape = "chevron";
    break;
    case "aggregation":
      sourceArrowShape = "diamond";sourceArrowFill = "hollow";break;
    case "composition": 
       sourceArrowShape = "diamond";sourceArrowFill = "filled";
       ele.css('visibility', 'visible');
       ele.css('display', 'element')
       if (ele.target().data("parentRelationId") !== null )// a (composition) relation exists from which the nesting is derived
        {     
          if (ele.target().data("parentRelationId")==ele.id())// this composition is the relation
          {  
            if(ele.target().data("parent")!== null)//the target node (component) is nested in the source node(composite)
            {     
               if (showEdgeComposite == false)//show Edge Composite is set to false
               {        
                 ele.css('visibility', 'hidden');
                 ele.css('display', 'none')
               }
            }
          }
        }
       
       break;
    case "association":midTargetArrowShape = "triangle";break;
    default:break;
  }
  
  if (ele.data("ArchiMateAllowedRelationship") === undefined){} else{
  if(ele.data("ArchiMateAllowedRelationship")){
    targetArrowColor="green";sourceArrowColor="green";lineColor="green";midTargetArrowColor="green";
  }
  else{
    targetArrowColor="red";sourceArrowColor="red";lineColor="red";midTargetArrowColor="red";
  }
}
if (typeof ele.data(globalColoredProperty) !== 'undefined'){
   width= globalArrowWidth;
   try{
   if (propertyColorDefined) {var lineColor = pColor(ele.data(globalColoredProperty));}
  } catch(error){logger.debug("erreur 4")}
   try{
   if (valueTypeColorDefined){var lineColor = pColor(typeof ele.data(globalColorProperty));}
  } catch(error){logger.debug("erreur 4")}
  }

  return {
    sourceArrowShape: sourceArrowShape,
    sourceArrowColor: sourceArrowColor,
    sourceArrowFill: sourceArrowFill,
    targetArrowShape: targetArrowShape,
    targetArrowColor: targetArrowColor,
    targetArrowFill: targetArrowFill,
    sourceArrowShape: sourceArrowShape,
    lineStyle: lineStyle,
    midTargetArrowShape: midTargetArrowShape,
    midTargetArrowColor: midTargetArrowColor,
    lineDashPattern: lineDashPattern,
    "label": label,
    lineColor:lineColor,
    width:width
  };
}
//// Rendering function of nodes in order to associate ArchiMate symbol (SVG Icon) corresponding to ArchiMate language for model elements
/// Extended to some specialization and complementary types of objects not part of ArchiMate
function renderNode(ele) {
  const iconResize = 1; // adjust this for more "padding" (bigger number = more smaller icon)
  var width = 50;
  var height = 50;
  const type = ele.data("type");
  const specialization = ele.data("specialization");
  var textValign="bottom";
  var dcolor="white";
// var icon= ArchiMate(type);
var iconsArray=[];
if (globalElementVisualMode=="nodes"){iconsArray=archicgIconURLArray;}
if (globalElementVisualMode=="boxes"){
  iconsArray=archicgBoxWithIconURLArray;
  textValign="center";
  width = 300;
  height = 200;
}
//var icon=archicgIconURLArray[type];  
var icon=iconsArray[type];
if (type == "andjunction"){icon=archicgIconURLArray[type]}
if (type == "orjunction"){icon=archicgIconURLArray[type]}
//var icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJib3gyIiBjbGFzcz0iZWxlbWVudC1jb250cmFjdCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4KIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSI1ODAiIGhlaWdodD0iMzgwIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjUiPjwvcmVjdD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTAsMCkiPgoKICAgIDxpbWFnZSBocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJR2xrUFNKMGFYUnBJaUJqYkdGemN6MGlaV3hsYldWdWRDMWpiMjUwY21GamRDSWdkMmxrZEdnOUlqRXdNQ0lnYUdWcFoyaDBQU0l4TURBaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01UQXdJajRLSUNBOGNHRjBhQ0JrUFNKdElERXdJREV3SUVnZ09UQWdWaUE1TUNCV0lEa3dJRllnT1RBZ1NDQXhNQ0JhSUUwZ01UQWdNalVnU0NBNU1DQk5JREV3SURjMElFZ2dPVEFpSUhOMGNtOXJaVDBpWW14aFkyc2lJSE4wY205clpTMTNhV1IwYUQwaU1TSWdabWxzYkQwaUkyWm1abVppTVNJK1BDOXdZWFJvUGdvOEwzTjJaejQ9Ij48L2ltYWdlPiA8L2c+Cgo8L3N2Zz4=";
   var iconOpacity=1;
   
  if (type!==undefined && acgTypes.includes(type)){
    if (document.getElementById(type+"-button").style.display == "none"){iconOpacity=0.3}}
  if (icon==undefined){icon=archicgIconURLArray["not-defined"]};
  var overlayOpacity=globalOverlayOpacity;
  if (typeof ele.data(globalColoredProperty) !== 'undefined'){
    if (propertyColorDefined) {  dcolor = pColor(ele.data(globalColoredProperty));
                                 overlayOpacity=POverlayOpacity}
    if (valueTypeColorDefined){  dcolor = pColor(typeof ele.data(globalColoredProperty));
                                 overlayOpacity=POverlayOpacity} 
  }
  if (specializationRequirement.includes(specialization)){
    icon=iconsArray[specialization];}
  if (specializationStakeholder.includes(specialization)){
      icon=iconsArray[specialization];}  
  if (specializationProduct.includes(specialization)){
        icon=iconsArray[specialization];} 
  if (specializationApplicationComponent.includes(specialization)){
          icon=iconsArray[specialization];}         
  if (specializationFacility.includes(specialization)){
          icon=iconsArray[specialization];}              
  if (specializationBusinessActor.includes(specialization)){
    icon=iconsArray[specialization];}
  if (specializationWorkPackage.includes(specialization)){
    icon=iconsArray[specialization];}
  if (specializationBusinessProcess.includes(specialization)){
      icon=iconsArray[specialization];}  
  var response={img: icon,height,width,dcolor,iconOpacity,overlayOpacity:overlayOpacity, textValign};
  return response;
}

function renderParentNode(ele) {
  const iconResize = 1; // adjust this for more "padding" (bigger number = more smaller icon)
  const width = 300;
  const height = 200;
  const type = ele.data("type");
  const specialization = ele.data("specialization");
  var icon=archicgIconURLArray[type];
  var iconOpacity=1;
  var dcolor="white";

  if (type!==undefined && acgTypes.includes(type)){
    if (document.getElementById(type+"-button").style.display == "none"){iconOpacity=0.3}}
  if (icon==undefined){icon=archicgIconURLArray["not-defined"]};

  var overlayOpacity=globalOverlayOpacity;
  if (typeof ele.data(globalColoredProperty) !== 'undefined'){
    try{
    if (propertyColorDefined) {  dcolor = pColor(ele.data(globalColoredProperty)); 
                                 overlayOpacity=POverlayOpacity;}
    } catch(error){logger.debug("erreur 1")}
    try{
    if (valueTypeColorDefined){  dcolor = pColor(typeof ele.data(globalColoredProperty));
                                 overlayOpacity=POverlayOpacity;}
    } catch(error){logger.debug("erreur 2")}
 }

  if (specializationRequirement.includes(specialization)){    icon=archicgIconURLArray[specialization];}
  if (specializationStakeholder.includes(specialization)){    icon=archicgIconURLArray[specialization];}
  if (specializationProduct.includes(specialization)){    icon=archicgIconURLArray[specialization];} 
  if (specializationApplicationComponent.includes(specialization)){    icon=archicgIconURLArray[specialization];}  
  if (specializationFacility.includes(specialization)){    icon=archicgIconURLArray[specialization];}   
  if (specializationBusinessActor.includes(specialization)){    icon=archicgIconURLArray[specialization];}
  if (specializationWorkPackage.includes(specialization)){    icon=archicgIconURLArray[specialization];}
  if (specializationBusinessProcess.includes(specialization)){      icon=archicgIconURLArray[specialization];}  
  var response={img: icon,height,width,dcolor,iconOpacity,overlayOpacity:overlayOpacity};
  return response;
}


function createNode(name, doCollapse=true, doExpand=true){
  var selection = cy.nodes(":selected");
  var myUUID=new UUID(4);
  var myLabel="";
  globalLabel=document.getElementById('globalLabel').value;
  if (name===undefined){myLabel=globalLabel;}else{myLabel=name}
  var myNode= { 
               group: 'nodes', 
               data: { 
                 id: `${myUUID}` ,
                 timestamp: new Date(),  
                 type:globalNodeType,
                 "label": myLabel,
                 position: { x: 100, y: 100 } ,
                 parent: null
                }
              };
              
  if(specializationBusinessActor.includes(globalNodeType))
    {
      myNode.data.type="business-actor";
      myNode.data.specialization=globalNodeType;
    }
  if(specializationWorkPackage.includes(globalNodeType))
    {
      myNode.data.type="work-package";
      myNode.data.specialization=globalNodeType;     
    }
  if(specializationBusinessProcess.includes(globalNodeType))
    {
      myNode.data.type="business-process";
      myNode.data.specialization=globalNodeType;     
    }   
  if(specializationRequirement.includes(globalNodeType))
    {
      myNode.data.type="requirement";
      myNode.data.specialization=globalNodeType;     
    } 
  if(specializationStakeholder.includes(globalNodeType))
      {
        myNode.data.type="stakeholder";
        myNode.data.specialization=globalNodeType;     
      }
  if(specializationProduct.includes(globalNodeType))
        {
          myNode.data.type="product";
          myNode.data.specialization=globalNodeType;     
        }
  if(specializationApplicationComponent.includes(globalNodeType))
          {
            myNode.data.type="application-component";
            myNode.data.specialization=globalNodeType;     
          }      
  if(specializationFacility.includes(globalNodeType))
          {
            myNode.data.type="facility";
            myNode.data.specialization=globalNodeType;     
          }                   
  var selection = cy.nodes(":selected");
  if (undoRedo){ur.do("add", [myNode]);} else{var eles=cy.add([myNode]);}
 
  if (selection.length == 1) {
    if(undoRedo){
      var args = {
        parentData: selection[0].id(), 
        nodes: cy.$id(`${myUUID}`), 
        posDiffX: 0,
        posDiffY: 0
        }
      ur.do("changeParent", args);
      if (doExpand){ur.do("expandRecursively", { nodes: cy.$id(selection[0].id())});}
    }else{
      cy.$id(`${myUUID}`).move({ parent: selection[0].id() });
      if (doExpand){api.expandRecursively(cy.$id(selection[0].id()));}
    }
    }
  else{
    if(undoRedo && doCollapse){ur.do("collapseAll");}else{api.collapseAll();}
  }
}

  
function importAlfabetEntities(txt){
  try {
    var myParseResult=Papa.parse(txt, {header: true});
    //logger.debug(myParseResult.data)
    console.log(myParseResult.data)
   }
  catch(e){error+="\n"+e;};
  let myEntity = "";

  var alfabetSchemaNode=[{
    group: "nodes",
    data: {
      id: "alfabet-information-model",
      label: "alfabet Information-model",
      type: "data-object",
      specialization: "information-model"
    }}];
    cy.add(alfabetSchemaNode)

   myEntityNodes= myParseResult.data.map((entity, index) => ({
    group: "nodes",
    data: {
      id: (myEntity = "alfabet-entity-type-"+String(entity.Entity).trim().replace(/ +/g, "_")),
      label: entity.Entity,
      type: "data-object",
      parent: "alfabet-information-model",
      specialization: "entity-type",
      description:entity.Description
    }
  }));
  //console.log(myEntityNodes)
  try {cy.add(myEntityNodes)}catch(e){logger.error("[importAlfabetEntities]"+e);}
}


function importAlfabetAttributes(txt){
  try {
    var myParseResult=Papa.parse(txt, {header: true});
    console.log(myParseResult.data)
   }
  catch(e){error+="\n"+e;};
  

  var myAttributes = myParseResult.data.reduce(function(filtered, attribute) {
   // if (attribute.Entity == "Activity") {
      return filtered.concat({
        idAttribute: String(attribute.Attribute).trim().replace(/ +/g, "_"),
  //      idEntity: "alfabet-"+String(attribute.Entity).trim().replace(/ +/g, "_"),
        idEntity:attributesParent(attribute),
        description: attribute.Description,
        label: attribute.Attribute,
        type: attribute.Type,
        source: attribute.Source,
        referenceType: attribute["Reference Type"],
        number: attribute["Nr."]
      });
   // }
   // return filtered;
  }, []);
 // var myAttributes=myParseResult.data.map((attribute, index) => ({  }));
//console.log(myAttributes)

myAggregation=myAttributes.reduce(function (accumulator, currentObject) {
  let key = currentObject["idEntity"];
  if (!accumulator[key]) {
    accumulator[key] = {};
    accumulator[key]["Attributes"] = {};
  }
  accumulator[key]["Attributes"][currentObject.idAttribute] = {
    label: currentObject.label,
    AttributeId: currentObject.idAttribute,
    order: currentObject.number,
    description: currentObject.description,
    type: currentObject.type,
    source: currentObject.source,
    referenceType: currentObject.referencedType
  };

  return accumulator;
}, {});
//console.log (myAggregation)
//console.log(JSON.stringify(myAggregation))

 var keys = Object.keys(myAggregation);
 keys.forEach((entity,index)=>{
  try {cy.$id(entity).data("attributes",JSON.stringify(myAggregation[entity]["Attributes"]))}catch(e){logger.error(`[importAlfabetAttributes]${entity}[data[attributes]]`+e)}
  //console.log (myAggregation[entity]["Attributes"])
  //console.log (JSON.stringify(myAggregation[entity]["Attributes"]))
  //console.log(entity)
  })
}


function importAlfabetRelations(txt){
  try {
    var myParseResult=Papa.parse(txt, {header: true});
    //logger.debug(myParseResult.data)
    console.log(myParseResult.data)
   }
  catch(e){error+="\n"+e;};

    let myRelation = "";
    let mySource = "";
    let myTarget = "";
    
    var myRelationEdges= myParseResult.data.map((relation) => ({
      group: "edges",
      data: {
        id: (myRelation="alfabet-relation-type-"+ String(relation["Reference in the source"]).trim().replace(/ +/g, "_")),
        name:relation.Name,
        description: relation.Comment,
        label: relation.Name,
        edgeType:"composition-relationship",
        source:(mySource="alfabet-entity-type-"+ String(relation["Source Entity"]).trim().replace(/ +/g, "_")),
        target:(myTarget="alfabet-entity-type-"+ String(relation["Target Entity"]).trim().replace(/ +/g, "_")),
        cardinality:relation.Cardinality
      }}
    ));
    //console.log(myRelationEdges)
    myRelationEdges.forEach((relation,index)=>{
  try {cy.add(relation)}catch(e){logger.error("[importAlfabetRelations]"+index+"=>"+e)}})
}




function attributesParent(attribute){
  var myEntity = "alfabet-entity-type-"+String(attribute.Entity).trim().replace(/ +/g, "_");
  //console.log("attributeParent()=>"+myEntity)
  //logger.debug("[attributesParent]"+myEntity)

  if(cy.$id(myEntity)) 
     {}
     else{
      logger.debug("[attributesParent][!entity]"+myEntity)
       myEntity = "alfabet-relation-type-"+String(attribute["RELATIONS.PROPERTY"]).trim().replace(/ +/g, "_");
      if(cy.$id(myEntity))
       {}
      else 
      {logger.debug("[attributesParent][!relation]"+myEntity);
        myEntity="alfabet-information-model";logger.debug("alfabet-information-model");}
    }
    return myEntity;

  }

  function gridEntityAttribute(theJSONAttributes){
    logger.debug(theJSONAttributes)
    w2ui['gridAttributes'].clear();
    try {
      const attributes=JSON.parse(theJSONAttributes);
      var keys = Object.keys(attributes);
      var myAttributeGrid=[]
      var record={}
      keys.forEach((attribute,index)=>{
       try {
        record.recid=index;
        record.key=attribute;
        record.order=attributes[attribute].order;
        record.AttributeId=attributes[attribute].AttributeId;
        record.label=attributes[attribute].label;
        record.type=attributes[attribute].type;
        record.source=attributes[attribute].source;
        record.description=attributes[attribute].description;
       
        myAttributeGrid.push(JSON.parse(JSON.stringify(record)));
        //console.log(myAttributeGrid)       
        }
        catch(e){logger.error(`[gridEntityAttribute]`+e) }

       })

      w2ui['gridAttributes'].add(myAttributeGrid);
    } catch (error) {logger.error("[gridEntityAttribute]"+ error)
      
    }
  }

  function calculateLabel(ele){
    //console.log(ele)
    var myCalculatedLabel=ele.data("label");
    var myType= ele.data("type")
    var connectedEdges=ele.connectedEdges();
    var connectedEdgesSpecializations= new Set();
    connectedEdges.forEach(function (connection){
      if(connection.data("specialization") !== undefined){connectedEdgesSpecializations.add(connection.data("specialization"));}
    })
    var mySpecialization=ele.data("specialization")
    if (mySpecialization == "named-individual"){
      myCalculatedLabel=myCalculatedLabel + "("+mySpecialization+")" +JSON.stringify(Array.from(connectedEdgesSpecializations))
    }
    return myCalculatedLabel
  }
  window.addEventListener('beforeunload', function (event) {
    // Cancel the event to trigger the confirmation dialog
    event.preventDefault();

    // Setting event.returnValue triggers the browser's confirmation dialog
    event.returnValue = 'Are you sure you want to leave? You may have unsaved changes.';

    // Note: The text inside event.returnValue will not be shown in modern browsers;
    // the browser will display a standard message instead.
});
 