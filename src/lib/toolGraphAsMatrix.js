tools=tools.concat(["GraphAsMatrix"]);
console.log("Tool Graph as Matrix loaded");
var toolbarGraphAsMatrix;
var globalLinesOrder="Name";
var globalColumnsOrder="Name";
var globalMatrixKind="BOR";
var globalValuesForCellColor="Number of relations"
var orders;
var myGraphForMatrix;
var maxWidth;
var sizeSource;
var sizeTarget;
var matrix = [];
var nodes;
var n;
var sourceNodes;
var ns;
var targetNodes ;
var nt ;
var xMatrix, cMatrix, zMatrix, yMatrix;
var margin;
var svg;
var width;
var height;
var Tooltip2;
var includeNotRelatedLines=false;
var includeNotRelatedColumns=false;

var listMatrixKinds=["BOR"];
var matrixKinds="";
listMatrixKinds.forEach((kind) => {matrixKinds += '<option value="'+kind+'" />';})

var listLinesOrders=["Name", "Count"];
var linesOrders="";
listLinesOrders.forEach((order) => {linesOrders += '<option value="'+order+'" />';})

var listColumnsOrders=["Name","Count"];
var columnsOrders="Name";
listColumnsOrders.forEach((order) => {columnsOrders += '<option value="'+order+'" />';})

var listValuesForCellsColor=["Relations Number"];
var valuesForCellsColor="";
listValuesForCellsColor.forEach((value) => {valuesForCellsColor += '<option value="'+value+'" />';})


var toolbarGraphAsMatrixDefinition={
    name: 'GraphAsMatrixDefinition',
    style   : 'background-color: white',
    items: [
        { type: 'html',  id: 'matrixKind',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">Matrix Kind: 
        <input id="globalMatrixKind" list="matrixKinds" value="BOR" style="color:blue;"size="20" >
        <datalist id="matrixKinds">${matrixKinds}</datalist>
        </div>` },
        { type: 'new-line' },
          {type: 'html',  id: 'lines-order',  html: `<div style=" height: 20px;display: flex;
          align-items: center;">Lines order: 
          <input id="globalLinesOrder" list="linesOrders" onchange='globalLinesOrder=this.value;console.log(globalLinesOrder);'  style="color:blue;"size="20" >
          <datalist id="linesOrders">${linesOrders}</datalist>
          </div>` },
        { type: 'new-line' },  
          { type: 'check',  id: 'includeNotRelatedLines', text: 'Include leaves', checked: false}, 
        { type: 'new-line' },
          {type: 'html',  id: 'columns-order',  html: `<div style=" height: 20px;display: flex;
          align-items: center;">Columns order: 
          <input id="globalColumnsOrder" list="columnsOrders" onchange='globalColumnsOrder=this.value;console.log(globalColumnsOrder)' style="color:blue;"size="20" >
          <datalist id="columnsOrders">${columnsOrders}</datalist>
          </div>` },
          { type: 'new-line' },
          { type: 'check',  id: 'includeNotRelatedColumns', text: 'Include roots', checked: false},
          { type: 'new-line' },
          {type: 'html',  id: 'values-for-cells-color',  html: `<div style=" height: 20px;display: flex;
          align-items: center;">Cells color values: 
          <input id="globalValuesForCellColor" list="listValuesForCellsColor" value="Relations Number" style="color:blue;"size="20" >
          <datalist id="listValuesForCellsColor">${valuesForCellsColor}</datalist>
          </div>` }, 
          { type: 'new-line' },
          { type: 'button',  id: 'update',  text: 'Apply' },
          { type: 'button',  id: 'switch',  text: 'Switch' },
         // { type: 'new-line' },
         // { type: 'button',  id: 'saveSVG',  text: 'Save as SVG' },
    ]  ,
    onClick: function(event) {
      if (event.target=="saveSVG"){
        save_matrix_as_svg()
      }

      if (event.target=="includeNotRelatedLines"){
        if ((w2ui['GraphAsMatrixDefinition'].get(event.target).checked)){includeNotRelatedLines=false}
            else{includeNotRelatedLines=true}
      }
      if (event.target=="includeNotRelatedColumns"){
        if ((w2ui['GraphAsMatrixDefinition'].get(event.target).checked)){includeNotRelatedColumns=false}
            else{includeNotRelatedColumns=true}
      }
      if (event.target=="switch"){
        if (document.getElementById("matrix").style.display == "block"){
          document.getElementById("matrix").style.display = "none";
          document.getElementById("cy").style.display = "block";
        }else{
          document.getElementById("matrix").style.display = "block";
          document.getElementById("cy").style.display = "none";
        };
      }
      
      if (event.target=="update"){
          myGraphForMatrix={nodes:[], links:[]};
          var testwidth = 960
          var testheight = 960
          maxWidth=0
          sizeSource=0
          sizeTarget=0
          var nodes=cy.nodes(':visible');
          var edges=cy.edges(':visible');
          var sources= edges.sources();   var targets= edges.targets()

   //       var rows2= nodes.diff(nodes.leaves()) ; var columns2= nodes.diff(nodes.roots())
          var leaves=nodes.leaves()
          var roots=nodes.roots()
          console.log ("leaves");console.log(leaves)
          console.log ("roots");console.log(roots)
          var diff1=nodes.diff(nodes.leaves())
          var diff2=nodes.diff(nodes.roots())
          var rows=sources;
          var columns=targets;
          console.log (rows)
          console.log(columns)
          if (includeNotRelatedColumns){columns=sources.flat().concat(leaves.flat())}
          if (includeNotRelatedLines){rows=targets.flat().concat(roots.flat())}
          console.log(rows)
          console.log(columns)
          
          console.log(`
On the visible graph, numbers of:
    ArchiMate elements: ${nodes.length}
    ArchiMate relations: ${edges.length}
    ArchiMate elements being source of a relation: ${rows.length}
    ArchiMate elements being target of a relation: ${columns.length}
    Root ArchiMate elements(no incomers): ${roots.length}
    Leave ArchiMate elements (no outcomers): ${leaves.length}
    ArchiMate elements not being a leaf (by diff): ${diff1.left.length}
    ArchiMate elements not being a root (by diff): ${diff2.left.length}
So the diplayed matrix is a ${rows.length} * ${columns.length} matrix
    `)
         
          
          var numLines=rows.length;
          var numColumns=columns.length;
          sizeSource=calculateMaxLenghtFromLabel (rows);
          sizeTarget=calculateMaxLenghtFromLabel (columns);
          maxWidth = calculateMaxLenghtFromLabel(cy.nodes());
          myGraphForMatrix={nodes:[], links:[], sourceNodes:[], targetNodes:[]};
          nodes.forEach(function(node, i) {
            var matrixNode={};
            matrixNode["id"]=node.id();
            matrixNode["name"]=node.data("label");
            matrixNode["group"]=node.data("type");
            matrixNode["count"]=0;
            matrixNode["index"]=i;  
            myGraphForMatrix.nodes.push(matrixNode);
          })

          rows.forEach(function(node, i) {
            var matrixNode={};
            matrixNode["id"]=node.id();
            matrixNode["name"]=node.data("label");
            matrixNode["group"]=node.data("type");
            matrixNode["count"]=0;
            matrixNode["index"]=i;  
            myGraphForMatrix.sourceNodes.push(matrixNode);
          })

          columns.forEach(function(node, i) {
            var matrixNode={};
            matrixNode["id"]=node.id();
            matrixNode["name"]=node.data("label");
            matrixNode["count"]=0;
            matrixNode["group"]=node.data("type");
            matrixNode["index"]=i;  
            myGraphForMatrix.targetNodes.push(matrixNode);
          })

          edges.forEach(function(edge, i) {
            var matrixLink={};
            var sourceNode = myGraphForMatrix.sourceNodes.filter(obj => {
              return obj.id === edge.source().id()
            })
            var targetNode = myGraphForMatrix.targetNodes.filter(obj => {
              return obj.id === edge.target().id()
            })

            matrixLink["source"]=sourceNode[0].index;
            matrixLink["target"]=targetNode[0].index;
            matrixLink["value"]=1;
            matrixLink["edgeId"]=edge.id();
            matrixLink["sourceId"]=edge.source().id();
            matrixLink["targetId"]=edge.target().id();
            myGraphForMatrix.links.push(matrixLink);
           });

          document.getElementById("cy").style.display = "none";
          document.getElementById("matrix").style.display = "block";
          console.log(myGraphForMatrix)
          myMatrix(myGraphForMatrix);
        }
  }
}
config.toolbarGraphAsMatrixDefinition=toolbarGraphAsMatrixDefinition;

function updateOrder()
{
  alert ("order changed");
}


function myMatrix(graph) {
  matrix = [];
  nodes = graph.nodes;
  n = nodes.length;
  sourceNodes = graph.sourceNodes;
  ns = sourceNodes.length;
  targetNodes = graph.targetNodes;
  nt = targetNodes.length;
  var nombreSource=ns;
  var nombreTarget=nt;
  if(includeNotRelatedLines){nombreSource=n};
  if (includeNotRelatedColumns){nombreTarget=n};
  console.log(`${nombreSource} et ${nombreTarget}`)

  margin = {top: sizeTarget+100, right: 0, bottom: 0, left: sizeSource+100},
    width = nombreTarget*20,
    height = nombreSource*20,
    svg;

  xMatrix = d3.scaleBand().range([0, height]),
    yMatrix=d3.scaleBand().range([0, width]),
    zMatrix = d3.scaleLinear().domain([0, 8]).clamp(true),
    cMatrix = d3.scaleOrdinal(d3.schemeCategory10); 


  d3.select("#matrix").selectAll('*').remove();
    
  svg = d3.select("#matrix").append("svg")
    .attr("width", width + 2*margin.left + margin.right+100)
    .attr("height", height + margin.top + margin.bottom+10)
    .attr("id","mySVGMatrix");
   // .style("margin-left", margin.left + "px")
  svg_group=svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
  // Compute index per node.
  sourceNodes.forEach(function(node, i) {
    node.index = i;
    //console.log (node)
    //node.count = 0;
    matrix[i] = d3.range(nombreTarget).map(function(j) { return {x: j, y: i, z: 0,links:[]}; });
  });
 

  // Convert links to matrix; count character occurrences.
  graph.links.forEach(function(link) {
    if (link.source==link.target){// loop with node source and target of the relation
      matrix[link.source][link.source].z += link.value;
      nodes[link.source].count += link.value;
    }else{
      matrix[link.source][link.target].z += link.value;
      matrix[link.source][link.target].links.push(link["edgeId"]) ;
      nodes[link.target].count += link.value;
      nodes[link.source].count += link.value;
    }

  });
  console.log(`${n} ${nt} ${ns}` )
  // Precompute the orders.


  var predefinedOrders = {
    name: d3.range(n).sort(function(a, b) {return d3.ascending(nodes[a].name, nodes[b].name); }),
    count: d3.range(n).sort(function(a, b) { return d3.ascending(nodes[b].count , nodes[a].count); }),
 //   Group: d3.range(n).sort(function(a, b) { return nodes[b].group - nodes[a].group; }),
    sourceName: d3.range(nombreSource).sort(function(a, b) { return d3.ascending(sourceNodes[a].name, sourceNodes[b].name); }),
    sourceCount: d3.range(nombreSource).sort(function(a, b) { return d3.ascending(sourceNodes[b].count , sourceNodes[a].count); }),
 //   sourceGroup: d3.range(ns).sort(function(a, b) { return sourceNodes[b].group - sourceNodes[a].group; }),
    targetName: d3.range(nombreTarget).sort(function(a, b) { return d3.ascending(targetNodes[a].name, targetNodes[b].name); }),   
    targetCount: d3.range(nombreTarget).sort(function(a, b) { return d3.ascending(targetNodes[b].count , targetNodes[a].count); }),
 //   targetGroup: d3.range(ns).sort(function(a, b) { return targetNodes[b].group - targetNodes[a].group; })
  };

  // The default sort order.
  var myLinesOrder;
  var myColumnsOrder;
  //if(includeNotRelatedLines){myLinesOrder=globalLinesOrder.toLowerCase();}else{
    myLinesOrder="source"+globalLinesOrder;
  //}
  //if(includeNotRelatedColumns) {myColumnsOrder=globalColumnsOrder.toLowerCase();} else {
    myColumnsOrder="target"+globalColumnsOrder;
  //}
  console.log(`Lines order is ${myLinesOrder} and Columns order is ${myColumnsOrder}`)
  console.log(`globalLinesOrder is ${globalLinesOrder} and globalColumnsOrder is ${globalColumnsOrder}`)
  xMatrix.domain(predefinedOrders[myLinesOrder]);
  yMatrix.domain(predefinedOrders[myColumnsOrder]);

  svg_group.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);
//console.log (matrix)

  var row = svg_group.selectAll(".row")
    .data(matrix)
    .enter().append("g")
    .attr("class", "row")
    .attr("transform", function(d, i) { 
   //   console.log(d)
      //console.log (`i:${i} and xMatrix(${i})=${xMatrix(i)}`)
      return "translate(0," + xMatrix(i)+ ")"; })
    .each(row);

  row.append("line").attr("x2", width);

  row.append("text")
      .attr("x", -6)
      .attr("y", xMatrix.bandwidth() / 2)
      .attr("dy", ".32em")
      .attr("text-anchor", "end")
      .attr("id", function(d, i) { return cy.$id(sourceNodes[i].id).id(); })
     // .attr("label", function(d, i) { return cy.$id(sourceNodes[i].id).data("label"); })
      .text(function(d, i) { return cy.$id(sourceNodes[i].id).data("label"); })
      .on("mouseover", function(e,h) {mouseoverSource(e,h)})
      .on("mouseout", mouseoutSource)
      .on("mousemove", function(e,h) {mousemoveSource(e,h)})
      .on("click", function(e,h) {clickSource(e,h)});


  var column = svg_group.selectAll(".column")
    .data(matrix[0])
    .enter().append("g")
    .attr("class", "column")
    .attr("transform", function(d, i) { return "translate(" + yMatrix(i) + ")rotate(-90)"; });

  column.append("line").attr("x1", -width);

  column.append("text")
      .attr("x", 6)
      .attr("y", yMatrix.bandwidth() / 2)
      .attr("dy", ".32em")
      .attr("text-anchor", "start")
      .attr("id", function(d, i) { return cy.$id(targetNodes[i].id).id(); })
      .text(function(d, i) { return  cy.$id(targetNodes[i].id).data("label"); })
      .on("mouseover", function(e,h) {mouseoverTarget(e,h)})
      .on("mouseout", mouseoutTarget)
      .on("mousemove", function(e,h) {mousemoveTarget(e,h)})
      .on("click", function(e,h) {clickTarget(e,h)});


      // create a tooltip
 Tooltip2= svg_group.append("text")
  .attr("class", "tooltip")
  .attr("x", 0)
  .attr("y", 0)
  .attr("dy", ".32em")
  .attr("text-anchor", "start")
  .style("visibility", "hidden")
  .text("");

  function row(row) {
    var cell = d3.select(this).selectAll(".cell")
      .data(row.filter(function(d) {
        //console.log(d)
        return d.z; }))
      .enter().append("rect")
      .attr("class", "cell")
    //  .attr("x", function(d) { return yMatrix(d.x); })
      .attr("width", yMatrix.bandwidth())
      .attr("height", xMatrix.bandwidth())
    //  .attr("number", "10")
      .style("fill-opacity", function(d) { return zMatrix(d.z); })
      .style("fill", function(d) { 
      return  cMatrix(zMatrix(d.z)) ;
})
      .on("mouseover", function(e,h) {mouseoverCell(e,h)})
      .on("mouseout", mouseoutCell)
      .on("mousemove", function(e,h) {mousemoveCell(e,h)})
      .on("click", function(e,h) {clickCell(e,h)})
  }

  var display=svg.append("g")
  .attr("class", "cell-content-diplay")
  .attr("x",10)
  .attr("y",10);

  display.append("foreignObject")
  .attr("x",10)
  .attr("y",10)
  .attr("width", sizeSource+100)
  .attr("height", sizeTarget+100)
  .attr("stroke", 2)
  .attr("fill", "blue")
.append("xhtml:div")
  .style("font", "14px 'Helvetica Neue'")
  .html(`<h1><b>Binary Oriented Relations matrix</b></h1>
  <b>Lines</b>: Model elements being relationship sources <br>
  <b>Column</b>:Model elements being relationship targets <br>
  <b>Considered relationships</b>: all types (let's filter though the palette)<br>
  <b>Values for cell colors</b>: ${globalValuesForCellColor} <br><br>
  No roots and no leaves displayed
   `);

  function clickSource(e,h) { alert(`The source node you clicked has identifier ${e.target.id}`)}
  function mouseoverSource(e,h) {
     d3.selectAll("text")
     .filter(function() {return d3.select(this).attr("id") == e.target.id; })
     .classed("active", true);}
  function mousemoveSource(e,h) {}
  function mouseoutSource() {d3.selectAll("text").classed("active", false);}

  function clickTarget(e,h) { alert(`The target node you clicked has identifier ${e.target.id}`)}
  function mouseoverTarget(e,h) {
     d3.selectAll("text")
     .filter(function() {return d3.select(this).attr("id") == e.target.id; })
     .classed("active", true);}
  function mousemoveTarget(e,h) {}
  function mouseoutTarget() {d3.selectAll("text").classed("active", false);}

  function clickCell(e,h) {
  //not that usefull, to find valuable usage
  console.log("click cell:") 
  console.log(h)
  alert(`The cell you clicked on contains ${h.z} relations: (${h.links.toString()})`)
  
  }

  function mouseoverCell(e,h) {
    d3.selectAll(".row text").classed("active", function(d, i) {return i == h.y; });
    d3.selectAll(".column text").classed("active", function(d, i) { return i == h.x; });
    Tooltip2.style("visibility", "visible");
  }

  function mousemoveCell(e,h) {


    var mySvg = document.querySelector("svg");
    var pt = mySvg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    pt = pt.matrixTransform(mySvg.getScreenCTM().inverse());
    pt.x = pt.x-sizeSource-100;
    pt.y = pt.y-sizeTarget-100;

//Some difficulties at the beginning to make working properlty - if moving the whole application up, the calculated position doesn't correspond anymore to the coordinates in the web browser
// Was it due not mastering how how to translate coordinates from DOM to SVG and the reverse?
//cf. https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/
// Or shoud it be considered another way: just by calculating the tooltip position from the mouse position
// cf. https://stackoverflow.com/questions/15702867/html-tooltip-position-relative-to-mouse-pointer
// In fact, it appeared that the used mouseover function is a jquery one, 
//   with as first parameter the event and second parameter an handler. So what was to be used was
//   e.ClientX and e.ClientY - and not PageX and PageY - initially used
// With this change, the matrixTranfrom usage is still needed


    var myTextX=pt.x;
    var myTextY=pt.y;
    Tooltip2.text(`${globalValuesForCellColor}:${h.z}`).attr("x", myTextX).attr("y", myTextY)
  }  

  function mouseoutCell() {
    d3.selectAll("text").classed("active", false);
    Tooltip2.style("visibility", "hidden")
  }

  d3.select("#order").on("change", function() {
    clearTimeout(timeout);
    order(this.value);
  });

  function order(value) {
    var myLinesOrder;
    var myColumnsOrder;
      myLinesOrder="source"+globalLinesOrder;
    
  
      myColumnsOrder="target"+globalColumnsOrder;
    
    console.log(`Within the function: globalLinesOder is ${globalLinesOrder} and globalColumnsOrder is ${globalColumnsOrder} `)
    console.log(`Within the function: Lines order is ${myLinesOrder} and Columns order is ${myColumnsOrder}`)
    xMatrix.domain(predefinedOrders[myLinesOrder]);
    yMatrix.domain(predefinedOrders[myColumnsOrder]);

    //xMatrix.domain(predefinedOrders[`source${columnsOrders}`]);// + globalLinesOrder]);//globalLinesOrder
    //yMatrix.domain(predefinedOrders[`target${linesOrders}`]);//+globalColumnsOrder]);//globalColumnsOrder

    var t = svg.transition().duration(2500);

    t.selectAll(".row")
        .delay(function(d, i) { return yMatrix(i) * 4; })
        .attr("transform", function(d, i) {return "translate(0," + xMatrix(i)+ ")"; })
      .selectAll(".cell")
        .delay(function(d) { return yMatrix(d.x) * 4; })
        .attr("x", function(d) { return yMatrix(d.x); });

    t.selectAll(".column")
        .delay(function(d, i) { return xMatrix(i) * 4; })
        .attr("transform", function(d, i) { return "translate(" + yMatrix(i) + ")rotate(-90)";  });
  }

  var timeout = setTimeout(function() {
    order("name");
    //d3.select("#order").property("selectedIndex", 2).node().focus();
  }, 500);
};

function calculateMaxLenghtFromLabel (nodes){
  var testwidth = 960
  var testheight = 960
  var maxLength=0

  var testsvg = d3.select('body').append('svg')
  .attr('width', testwidth)
  .attr('height', testheight)
  
  nodes.forEach(function(node, i) {  
     var testtext = testsvg.append('text')
     .text(node.data('label')+" "+i)
     .attr('x', 0)
     .attr('y', (i+1)*35)
     .attr('dy','0.32em') 
     bbox = testtext["_groups"][0][0].getBBox() 
     var thisLabelLength=bbox.width
     maxLength= (thisLabelLength>maxLength) ? thisLabelLength : maxLength
     testtext.remove();
    });

  return maxLength
  }

  function save_matrix_as_svg(){


    var svg_data = document.getElementById("mySVGMatrix").innerHTML //put id of your svg element here

    var head = '<svg title="ArchiMateCG Matrix" version="1.1" xmlns="http://www.w3.org/2000/svg">'

    //if you have some additional styling like graph edges put them inside <style> tag
    //var style = '<style>circle {cursor: pointer;stroke-width: 1.5px;}text {font: 10px arial;}path {stroke: DimGrey;stroke-width: 1.5px;}</style>'

    var full_svg = head  + svg_data + "</svg>"
    var blob = new Blob([full_svg], {type: "image/svg+xml"});  
    saveAs(blob, "myMatrix.svg");


};





