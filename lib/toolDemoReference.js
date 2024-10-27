tools=tools.concat(["AnimatedDemonstrations"]);
console.log("Animated Demonstrations Loaded");


             //       { id: 'id1', text: 'Demo' },
             //       { id: 'id2', text: 'saveCurrentPositionsAsConstraints' },
             //       { id: 'id3', text: 'applyConstraints' },

var toolbarAnimatedDemonstrationsDefinition={
    name: 'AnimatedDemonstrations',
    style   : 'background-color: white',
    items: [
          { type: 'button',  id: 'loadDataDemo',  text: 'Load Data Demo' },
          { type: 'button',  id: 'demo',  text: 'Run Demo' },
          { type: 'new-line' },
          { type: 'button',  id: 'saveCurrentPositionsAsConstraints',  text: 'saveCurrentPositionsAsConstraints' }
          
    ]  ,
    onClick: function(event) {
      //alert(event.target)
      if (event.target=="demo"){demo();};
      if (event.target=="saveCurrentPositionsAsConstraints"){saveCurrentPositionsAsConstraints();}
      if (event.target=="applyConstraints"){applyConstraints();}
      if (event.target=="loadDataDemo"){loaddata()}
    }
}

config.toolbarAnimatedDemonstrationsDefinition=toolbarAnimatedDemonstrationsDefinition;

function saveCurrentPositionsAsConstraints(){
   var fixedNodeConstraint=[];
   cy.nodes( ":visible").positions(function( node, i ){
     var constraint={};
     var position={};
     if(node.isChildless() || api.isExpandable(node)){
       position["x"]= Math.round(node.position("x"));
       position["y"]= Math.round(node.position("y"));
       constraint["nodeId"]=node.id();
       constraint["position"]=position;
       fixedNodeConstraint.push(constraint);
       console.log ('{"nodeId":"'+node.id()+'","position": {"x":'+Math.round(node.position("x"))+'",y:"'+Math.round(node.position("y"))+"}}'");
    }});
  constraints["fixedNodeConstraint"]=fixedNodeConstraint;
  let constraintString = JSON.stringify(fixedNodeConstraint, null, 2);
  download('constraint.json', constraintString);
}

function applyConstraints(){
   let finalOptions = Object.assign({}, playerLayoutOptions);
   finalOptions.fixedNodeConstraint = constraints.fixedNodeConstraint ? constraints.fixedNodeConstraint : undefined;
 //  console.log (finalOptions.fixedNodeConstraint);
   let layoutPlayer = cy.layout(finalOptions);
   layoutPlayer.run();
}


function applyConstraint(constraint, duration){
  return new Promise((resolve, reject)=>{
 //   console.log("Applying the following constraints on the graph:");
 //   console.log(constraint);
 //   console.log ("duration:"+ duration);
    let finalOptions = Object.assign({}, playerLayoutOptions);
    finalOptions.fixedNodeConstraint = JSON.parse(constraint) ? JSON.parse(constraint): undefined;
    let layoutPlayer = cy.layout(finalOptions);
    layoutPlayer.run();
    setTimeout(()=>{resolve();},duration)
  })
}


function expandSelectedRecursivelyWithPositions(selection, duration, constraints){
  return new Promise((resolve, reject)=>{
  //  console.log("Expanding recursively the following selection and constrainging positions:");
  //  console.log(selection);
  //  console.log ("duration:"+ duration);
    cy.nodes().on("expandcollapse.afterexpand", function(event) { 
      console.log ("expanded node:"+this.id());
      var myConstraints=JSON.parse(constraints);
      console.log("constrained nodes:")
      myConstraints.forEach(function(constraint,i){
        console.log (constraint["nodeId"])
      });
      var children=this.children();
  //    console.log(this)
  //    console.log("children:")
  //    console.log(children)
  //    console.log("children of the expanded node:")
      children.forEach(function(node,i){
   //     console.log (node.id());
      })
      const theConstraint=myConstraints.find( constraint => constraint["nodeId"] === this.id());
  //    console.log(theConstraint)
    
      if (theConstraint === undefined) {} else {
      cy.nodes(this.id()).animate({position: { x: theConstraint.position.x, y: theConstraint.position.y }}, {duration: 1000});
    }
    });
    if (api.isExpandable(cy.$id(selection))){api.expandRecursively(cy.$id(selection),{layoutBy:playerLayoutOptions});}
    setTimeout(()=>{resolve();},duration);
  })
 
}

function expandSelected(selection, duration){
  return new Promise((resolve, reject)=>{
  //  console.log("Expanding the following selection:");
  //  console.log(selection);
  //  console.log ("duration:"+ duration);

  //  let finalOptions = Object.assign({}, playerLayoutOptions);
  //  var fixedNodeConstraint = JSON.parse(constraint) ? JSON.parse(constraint): undefined;
  //  let layoutPlayer = cy.layout(finalOptions);
  //  layoutPlayer.pon('layoutstart').then(function( event ){
  //    constraints.fixedNodeConstraint = JSON.parse(constraint);
  //    layoutPlayer.run();
  //  });

    if (api.isExpandable(cy.$id(selection))){api.expand(cy.$id(selection),{layoutBy:playerLayoutOptions});}
   setTimeout(()=>{resolve();},duration);
  })
}


function expandSelectedRecursively(selection, duration){
  return new Promise((resolve, reject)=>{
    console.log("Expanding recursively the following selection:");
    console.log(selection);
    console.log ("duration:"+ duration);
    //cy.nodes().on("expandcollapse.afterexpand", function(event) { console.log ("expanded node:"+this.id() )});
    selection.forEach(function (id){
      console.log(id)
      cy.$id(id).select();
   }) 
//    var myNodes=[];
 //   selection.forEach(function (id){myNodes.concat(cy.$id(selection));})
//    if (api.isExpandable(cy.$id(selection))){api.expandRecursively(cy.$id(selection),{layoutBy:playerLayoutOptions});}
    api.expandRecursively(cy.nodes(":selected"),{layoutBy:playerLayoutOptions});

    cy.nodes(":selected").unselect()
    //api.expandRecursively(myNodes,{layoutBy:playerLayoutOptions});
    setTimeout(()=>{resolve();},duration);
  })
}

function collapseSelectedRecursively(selection, duration){
  return new Promise((resolve, reject)=>{
  //  console.log("Collapsing recursively the following selection:");
  //  console.log(selection);
  //  console.log ("duration:"+ duration);
  selection.forEach(function (id){
    cy.$id(id).select();
 })
 try {api.collapseRecursively(cy.nodes(":selected"),{layoutBy:playerLayoutOptions});}catch(e){console.log(e)}
 cy.nodes(":selected").unselect()
 //   if (api.isCollapsible(cy.$id(selection))){api.collapseRecursively(cy.$id(selection,{layoutBy:playerLayoutOptions}))}; 
   setTimeout(()=>{resolve();},duration);
  })
}

function expandSelectedEdge(selection, duration){
  return new Promise((resolve, reject)=>{
  //  console.log("Expanding the following edge selection:");
  //  console.log(selection);
  //  console.log ("duration:"+ duration);
    if (api.isCollapsible(cy.$id(selection))){api.expandEdges(cy.$id(selection))}; 
    setTimeout(()=>{resolve();},duration);
  })
}

function expandEdgesBetweenNodes(selection, duration){
  return new Promise((resolve, reject)=>{
    console.log("Expanding edges between selected nodes:");
    console.log(selection);
    console.log ("duration:"+ duration);
    selection.forEach(function (id){
       cy.$id(id).select();
    })
    try{api.expandEdgesBetweenNodes(cy.nodes(":selected"));}catch(e){console.log(e)}
    cy.nodes(":selected").unselect()
    setTimeout(()=>{resolve();},duration);
  })
}

function collapseEdgesBetweenNodes(selection, duration){
  return new Promise((resolve, reject)=>{
    console.log("Expanding edges between selected nodes:");
    console.log(selection);
    console.log ("duration:"+ duration);
    selection.forEach(function (id){
       cy.$id(id).select();
    })
    try{api.collapseEdgesBetweenNodes(cy.nodes(":selected"));} catch(e){console.log(e)}
    cy.nodes(":selected").unselect()
    setTimeout(()=>{resolve();},duration);
  })
}

function fit(selection, duration, padding){
  return new Promise((resolve, reject)=>{
   // console.log("fit on the following selection:");
   // console.log(selection);
   // console.log ("duration:"+ duration);
    cy.animate({
      fit: {
        eles: cy.nodes(selection),
        padding: padding
      }
    }, {
      duration: duration
    });
    setTimeout(()=>{
      resolve();
    },duration)
  })
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loaddata()
{
  cy.$().remove(); 
  api.loadJson(dataDemo);
  api.collapseAll();
  api.collapseAllEdges(getEdgeOptions());
}



let constraints = {
  fixedNodeConstraint: undefined,
  alignmentConstraint: undefined,
  relativePlacementConstraint: undefined
};


let playerStep={
  operation:undefined,//expand, expandRecursively, expandAll, collapse, collapseRecursively, collapseAll, applyConstraint, Sleep
  selection:undefined,// the node id the operation will be applied to
  constraintToApply:undefined,// the position constraints to be applied on nodes after the operation
  duration:undefined,
  fit:undefined, // fit to a selection
}
