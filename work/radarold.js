function validateOWL(store) {
    //initialisation du graphe
    cy.elements().remove();
    cy.add(nodes);
    edges.forEach(edge => {
        try {
            // Add the edge directly using its existing data
            cy.add({
                group: 'edges',
                data: edge.data,
                classes: edge.classes
            });
        } catch (error) {
            // console.warn(`Error adding edge ${edge.data.id}: ${error.message}`);
            // Check and create missing source node
            console.log(edge.data)
            if (cy.getElementById(edge.data.source).length === 0) {
                // var parent = getPathFromIRI(edge.data.source)
                cy.add({
                    group: 'nodes',
                    data: {
                        id: edge.data.source,
                        label: "FunctionToBeDefined",//getLabelFromIRI(edge.data.source),
                        //  parent: parent,
                    },
                    //   classes: getOWLTypeFromPredicate(edge.classes, "subject")
                });

            }

            // Check and create missing target node
            if (cy.getElementById(edge.data.target).length === 0) {
                var parent = getPathFromIRI(edge.data.target);
                cy.add({
                    group: 'nodes',
                    data: {
                        id: edge.data.target,
                        label: "FunctionToBeDefined",//getLabelFromIRI(edge.data.target),
                        //   parent: parent// "http://data.europa.eu/m8g"
                    },
                    //  classes: getOWLTypeFromPredicate(edge.classes, "object")
                });
            }

            // Retry adding the edge now that nodes exist
            try {
                cy.add({
                    group: 'edges',
                    data: edge.data,
                    //  classes: edge.classes
                });
            } catch (retryError) {
                console.log(`Failed again to add edge ${edge.data.id}:`, retryError);
            }

        }
    });
    // Déplier tout au chargement
    api.expandAll();
    api.collapseAllEdges(getEdgeOptions())
    //  cy.layout({ name: 'fcose', animate: true }).run();
    console.log("Graph successfully imported into Cytoscape!");
}



function createRadarSVG({
  workingGroup = "PLM",
  width = 800,
  height = 800,
  ringSizes = [
    { ringSize: 350, ringColor: "#e6e6e4" },
    { ringSize: 250, ringColor: "#dddcda" },
    { ringSize: 150, ringColor: "#c7c7c7" }
  ]
}) {

  // Set Dimensions
  const xSize = width;
  var _width = xSize;
  const ySize = height;
  var _height = ySize
  margin = ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  })
  graphWidth = xSize - margin.left - margin.right
  graphHeight = ySize - margin.top - margin.bottom

  const xMax = xSize - margin * 2;
  const yMax = ySize - margin * 2;


  const radarTitle = `${workingGroup} Standards Radar Chart ` + new Date().toLocaleDateString();

  var ASD_SSG_Blips = myBlips;
  //console.log(ASD_SSG_Blips)


  var RadarInputs = ASD_SSG_Blips.filter(function (blip) {
    return blip.working_group == workingGroup;
  })
  // console.log("radar inputs")
  // console.log(RadarInputs)



  // Append SVG Object to the Page
  // Select the existing <svg> element inside #svg-overlay
  var svg = d3.select("#svg-overlay")
    .attr("viewBox", [-_width / 2, -_height / 2, _width, _height]);
  var arc = d3.arc();

  // ---------------------------//
  //          RINGS             //
  // ---------------------------//

  svg.append("circle").attr("id", "allRings");

  svg
    .selectAll("allRings")
    .data(ringSizes)
    .enter()
    .append("circle")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("fill", (d) => "white")
    .attr("r", (d) => d.ringSize);

  // ---------------------------//
  //          TITLE              //
  // ---------------------------//
  svg
    .append("rect")
    .attr("x", -400)
    .attr("y", -400)
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("fill", "none")
    .attr("width", "800")
    .attr("height", "800");

  var title = svg
    .append("text")
    .style("font-size", "25px")
    .text(radarTitle)
    .attr("x", -200)
    .attr("y", -370)
    .attr("fill", "black");

  var myblock1 = svg
    .append("foreignObject")
    .attr("x", -330)
    .attr("y", -310)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var myblock2 = svg
    .append("foreignObject")
    .attr("x", 180)
    .attr("y", -310)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var myblock3 = svg
    .append("foreignObject")
    .attr("x", -320)
    .attr("y", 250)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var myblock4 = svg
    .append("foreignObject")
    .attr("x", 250)
    .attr("y", 230)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var div1 = myblock1
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .append("p")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html("Available External<br> Standards");

  var div2 = myblock2
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .append("p")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html(" Monitored External Development");

  var div3 = myblock3
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .append("p")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html(" ASD<br>Development");

  var div4 = myblock4
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .append("p")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html(" Participate<br>in External<br>Development");

  // ---------------------------//
  //          BARS              //
  // ---------------------------//

  // horizontal text-bg
  svg
    .append("rect")
    .attr("x", -349.4)
    .attr("y", -10)
    .style("fill", "#f0f0ee")
    .attr("width", "699.8")
    .attr("height", "20");

  // vertical text-bg
  svg
    .append("rect")
    .attr("x", -10)
    .attr("y", -349.4)
    .style("fill", "#f0f0ee")
    .attr("width", "20")
    .attr("height", "699.8");

  // ---------------------------//
  //       LABELS ON-AXES       //
  // ---------------------------//

  // label on right x-axes
  svg.append("text").attr("id", "labelRightAxes");
  svg
    .selectAll("labelRightAxes")
    .data(["    TRACK    ", "CANDIDATE", " ADOPTED"])
    .join("text")
    .attr("x", (d, i) => i * -100)
    .attr("y", 0)
    .attr("dy", "3.5")
    .attr("dx", "270")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("fill", "black")
    .style("font-size", "8px")
    .text((d) => d);

  // label on left x-axes
  svg.append("text").attr("id", "labelLeftAxes");
  svg
    .selectAll("labelLeftAxes")
    .data(["    TRACK    ", "CANDIDATE", "ADOPTED "])
    .join("text")
    .attr("x", (d, i) => i * 100)
    .attr("y", 0)
    .attr("dy", "3.5")
    .attr("dx", "-310")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("fill", "black")
    .style("font-size", "8px")
    .text((d) => d);

  //plotData(RadarInputs, ASD_SSG_Blips)
}

function createRadarWithCytoscape({
  workingGroup,
  containerId,
  width = 800,
  height = 800,
  ringSizes = [
    { ringSize: 350, ringColor: "#e6e6e4" },
    { ringSize: 250, ringColor: "#dddcda" },
    { ringSize: 150, ringColor: "#c7c7c7" }
  ]
}) {

  // Set Dimensions
  const xSize = 800;
  var width = xSize;
  const ySize = 800;
  var height = ySize
  margin = ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  })
  graphWidth = xSize - margin.left - margin.right
  graphHeight = ySize - margin.top - margin.bottom

  const xMax = xSize - margin * 2;
  const yMax = ySize - margin * 2;


  const radarTitle = `${workingGroup} Standards Radar Chart ` + new Date().toLocaleDateString();

  var ASD_SSG_Blips = myBlips;
  //console.log(ASD_SSG_Blips)


  var RadarInputs = ASD_SSG_Blips.filter(function (blip) {
    return blip.working_group == workingGroup;
  })
  // console.log("radar inputs")
  // console.log(RadarInputs)



  // Append SVG Object to the Page
  // Select the existing <svg> element inside #svg-overlay
  var svg = d3.select("#svg-overlay")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);
  var arc = d3.arc();

  // ---------------------------//
  //          RINGS             //
  // ---------------------------//

  svg.append("circle").attr("id", "allRings");

  svg
    .selectAll("allRings")
    .data(ringSizes)
    .enter()
    .append("circle")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("fill", (d) => "white")
    .attr("r", (d) => d.ringSize);

  // ---------------------------//
  //          TITLE              //
  // ---------------------------//
  svg
    .append("rect")
    .attr("x", -400)
    .attr("y", -400)
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("fill", "none")
    .attr("width", "800")
    .attr("height", "800");

  var title = svg
    .append("text")
    .style("font-size", "25px")
    .text(radarTitle)
    .attr("x", -200)
    .attr("y", -370)
    .attr("fill", "black");

  var myblock1 = svg
    .append("foreignObject")
    .attr("x", -330)
    .attr("y", -310)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var myblock2 = svg
    .append("foreignObject")
    .attr("x", 180)
    .attr("y", -310)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var myblock3 = svg
    .append("foreignObject")
    .attr("x", -320)
    .attr("y", 250)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var myblock4 = svg
    .append("foreignObject")
    .attr("x", 250)
    .attr("y", 230)
    .attr("width", 200)
    .attr("height", 150)
    .attr("class", "svg-quarter-title");

  var div1 = myblock1
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .append("p")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html("Available External<br> Standards");

  var div2 = myblock2
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .append("p")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html(" Monitored External Development");

  var div3 = myblock3
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .append("p")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html(" ASD<br>Development");

  var div4 = myblock4
    .append("xhtml:div")
    .append("div")
    .style("display", "table")
    .append("p")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("color", "#0000FF")
    .style("font-size", "15px")
    .style("display", "table-cell")
    .style("text-align", "center")
    .style("vertical-align", "middle")
    .html(" Participate<br>in External<br>Development");

  // ---------------------------//
  //          BARS              //
  // ---------------------------//

  // horizontal text-bg
  svg
    .append("rect")
    .attr("x", -349.4)
    .attr("y", -10)
    .style("fill", "#f0f0ee")
    .attr("width", "699.8")
    .attr("height", "20");

  // vertical text-bg
  svg
    .append("rect")
    .attr("x", -10)
    .attr("y", -349.4)
    .style("fill", "#f0f0ee")
    .attr("width", "20")
    .attr("height", "699.8");

  // ---------------------------//
  //       LABELS ON-AXES       //
  // ---------------------------//

  // label on right x-axes
  svg.append("text").attr("id", "labelRightAxes");
  svg
    .selectAll("labelRightAxes")
    .data(["    TRACK    ", "CANDIDATE", " ADOPTED"])
    .join("text")
    .attr("x", (d, i) => i * -100)
    .attr("y", 0)
    .attr("dy", "3.5")
    .attr("dx", "270")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("fill", "black")
    .style("font-size", "8px")
    .text((d) => d);

  // label on left x-axes
  svg.append("text").attr("id", "labelLeftAxes");
  svg
    .selectAll("labelLeftAxes")
    .data(["    TRACK    ", "CANDIDATE", "ADOPTED "])
    .join("text")
    .attr("x", (d, i) => i * 100)
    .attr("y", 0)
    .attr("dy", "3.5")
    .attr("dx", "-310")
    .attr("font-family", "futura")
    .attr("font-weight", "bold")
    .style("fill", "black")
    .style("font-size", "8px")
    .text((d) => d);

  // ---------------------------//
  //       PLOT DATA            //
  // ---------------------------//

  // setting up force simulation
  // learn more here: https://www.d3indepth.com/force-layout/

  const groups = svg.selectAll("g").data(RadarInputs).join("g");

  var simulation = d3
    .forceSimulation()
    .nodes(ASD_SSG_Blips)
    .velocityDecay(0.19)
    .force(
      "r",
      d3.forceRadial(function radiusRadialPoints(d) {
        if (d.ring === "Adopted") {
          d.radius = d3.randomUniform(30, 130)();
          return d.radius;
        } else if (d.ring === "Candidate") {
          d.radius = d3.randomUniform(180, 230)();
          return d.radius;
        } else if (d.ring === "Track") {
          d.radius = d3.randomUniform(280, 320)();
          return d.radius;
        }
        console.log("Rayon calculé pour", d.ring, ":", radius); // Log du rayon
      })
    )
    .force(
      "collision",
      d3.forceCollide().radius(12).strength(0.1).iterations(100)
    )
    .on("tick", ticked(groups, width));

  // Convert blip positions into Cytoscape.js format
  console.log("radar inputs after processing")
  console.log(RadarInputs)
  let elements = RadarInputs.map(blip => ({
    data: { ...blip },
    position: { x: blip.x + 400, y: blip.y + 400 }
  }));

  // Initialize Cytoscape.js
  cy = cytoscape({
    container: document.getElementById(containerId),
    elements: elements,
    style: [
      {
        selector: 'node',
        style: {
          'background-color': 'red',
          'width': "10px",
          'height': "10px",
          'label': 'data(label)',
          'text-valign': 'top',
          'color': 'black',
          'font-size': '10px'
        }
      },
      {
        selector: 'node[ring="Track"]',
        style: { 'background-color': 'lightgray' }
      },
      {
        selector: 'node[ring="Candidate"]',
        style: { 'background-color': 'gray' }
      },
      {
        selector: 'node[ring="Adopted"]',
        style: { 'background-color': 'black' }
      }
    ],
    zoomingEnabled: false,         // Disable zooming
    userZoomingEnabled: false,     // Disable user-initiated zooming
    userPanningEnabled: false,     // Disable user-initiated panning
    panningEnabled: false,         // Disable panning
    autolock: false,                // Lock nodes in place (prevents accidental grabbing)
    autoungrabify: false,           // Prevents nodes from being grabbed and moved
    layout: {
      name: 'preset',            // Use 'preset' layout to respect given node positions
      fit: false,                // Prevent auto-fit adjustment after layout
      padding: 30                // Optional padding for the layout
    }
  });
  console.log(cy.zoom())
  console.log(cy.pan())
  groups.selectAll("circle").remove();
}
function ticked() {
    const groups = d3.select("#svg-container").select("svg").selectAll(".radar-group");
  
   // console.log("Nombre d'éléments dans groups dans ticked():", groups.size());
  
   // groups.each(function (d, i) {console.log(`Point ${i} (${d.x}, ${d.y}) dans le quadrant ${d.quadrant}`);});
  
  
    dimColor = d3
      .scaleOrdinal()
      .domain(["STEP", "ASD S-Series", "3D Visualisation", "LOTAR"])
      //  .range(["white", "white", "white", "white"])
      .range(["#3db5be", "#84ad78", "#e88744", "#8d2045"])
  
    groups
      .append("circle")
      .attr("r", 800 / 150)
      .style("fill", function (d) {
        return dimColor(d.quadrant);
      })
      .each((d) => {
        // Calculate positions based on quadrant and store them in nodePositions
        //console.log(`Point coordinates for quadrant ${d.quadrant}: (${d.x}, ${d.y})`);
  
        let newPoints;
        if (d.quadrant === "Available") {
          newPoints = d3.pointRadial(Math.random() * (6.2 - 4.8) + 4.8, d.radius);
          d.x = newPoints[0];
          d.y = newPoints[1];
        } else if (d.quadrant === "Monitored") {
          newPoints = d3.pointRadial(Math.random() * (7.7 - 6.4) + 6.4, d.radius);
          d.x = newPoints[0];
          d.y = newPoints[1];
        } else if (d.quadrant === "Participated") {
          newPoints = d3.pointRadial(Math.random() * (9.3 - 8) + 8, d.radius);
          d.x = newPoints[0];
          d.y = newPoints[1];
        } else if (d.quadrant === "Developed") {
          newPoints = d3.pointRadial(Math.random() * (10.9 - 9.6) + 9.6, d.radius);
          d.x = newPoints[0];
          d.y = newPoints[1];
        }
    
        // Add highlight color information based on the blip property
        d.highlightColor = d.asBlip === "TRUE" ? dimColor(d.quadrant) : "black";
      })
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("transform", (d) => {
        if (d.quadrant === "Available") {
          return "translate(" + [-10, -10] + ")";
        } else if (d.quadrant === "Monitored") {
          return "translate(" + [10, -10] + ")";
        } else if (d.quadrant === "Participated") {
          return "translate(" + [10, 10] + ")";
        } else if (d.quadrant === "Developed") {
          return "translate(" + [-10, 10] + ")";
        }
      });
  
  
    // circle highlight
    groups
      .append("circle")
      .attr("r", 800 / 140)
      .style("fill", "green")
      .style("stroke-width", "2px")
      .style("opacity", "0.5")
      .style("stroke", function (d) {
        return d.highlightColor; // Use the highlightColor stored in the node data
      })
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("transform", (d) => {
        if (d.quadrant === "Available") {
          return "translate(" + [-10, -10] + ")";
        } else if (d.quadrant === "Monitored") {
          return "translate(" + [10, -10] + ")";
        } else if (d.quadrant === "Participated") {
          return "translate(" + [10, 10] + ")";
        } else if (d.quadrant === "Developed") {
          return "translate(" + [-10, 10] + ")";
        }
      });
  
   // groups.each(function (d, i) {
      // console.log(`Point coordinates for quadrant ${d.quadrant}: (${d.x}, ${d.y})`);
   //   console.log(`Élément #${i}:`, d);
   // })
  
  }

    // Function that returns the form dynamically
    function createForm() {
      return new w2form({
          name: 'blipForm',
          header: i18next.t("forms.blipForm"),
          fields: {
              "Blip": {
                  type: 'tab',
                  fields: {  
                      "Radar": {
                          type: 'group',
                          attr: 'style="width: 300px"',
                          fields: {
                              "id": {
                                  type: 'text',
                                  required: true,
                                  label: 'ID',
                                  attr: 'readonly'
                              },
                              "label": {
                                  type: 'text',
                                  required: true,
                                  label: 'Label'
                              },
                              "name": {
                                  type: 'text',
                                  required: true,
                                  label: 'Name'
                              },
                              "ring": {
                                  type: 'list',
                                  required: true,
                                  label: 'Ring',
                                  options: { items: ["Adopted", "Candidate", "Track"] }
                              },
                              "quadrant": {
                                  type: 'list',
                                  required: true,
                                  label: 'Quadrant',
                                  options: { items: ["Available", "Monitored", "Participated", "Developed"] }
                              }
                          }
                      },
                      "Position": {
                          type: 'group',
                          attr: 'style="width: 300px"',
                          fields: {
                              "pos.x": {
                                  type: 'float',
                                  required: true,
                                  label: 'Position X'
                              },
                              "pos.y": {
                                  type: 'float',
                                  required: true,
                                  label: 'Position Y'
                              }
                          }
                      }
                  }
              },
              "Management":{
                  type: 'tab',
                  fields: {
                      "texthtml":{
                          type: 'text',
                                  required: true,
                                  label: 'Nom'
                      }
                  },

              },
              "Context": {
                  type: 'tab',
                  fields: {
                      "Standardisation": {
                          type: 'group',
                          attr: 'style="width: 300px"',
                          fields: {
                              "name": {
                                  type: 'text',
                                  required: true,
                                  label: 'Nom'
                              },
                              "hasBlip": {
                                  type: 'text',
                                  required: true,
                                  label: 'Has Blip'
                              },
                              "description": {
                                  type: 'textarea',
                                  required: false,
                                  label: 'Description'
                              },
                              "standard_type1": {
                                  type: 'text',
                                  required: false,
                                  label: 'Standard Type'
                              },
                              "Reference": {
                                  type: 'text',
                                  required: false,
                                  label: 'Référence'
                              }
                          }
                      },
                      "Commentaires et Régulations": {
                          type: 'group',
                          attr: 'style="width: 300px"',
                          fields: {
                              "ASD_SSG_comment": {
                                  type: 'textarea',
                                  required: false,
                                  label: 'ASD SSG Comment'
                              },
                              "Defence_EDSTAR": {
                                  type: 'text',
                                  required: false,
                                  label: 'Defence EDSTAR'
                              },
                              "Space_ESA": {
                                  type: 'text',
                                  required: false,
                                  label: 'Space ESA'
                              },
                              "Aero_EASA": {
                                  type: 'text',
                                  required: false,
                                  label: 'Aero EASA'
                              }
                          }
                      },
                      "Validation et Responsabilité": {
                          type: 'group',
                          attr: 'style="width: 300px"',
                          fields: {
                              "Machine_readable": {
                                  type: 'text',
                                  required: false,
                                  label: 'Machine Readable'
                              },
                              "Blip_validated": {
                                  type: 'text',
                                  required: false,
                                  label: 'Blip Validated'
                              },
                              "Priority": {
                                  type: 'text',
                                  required: false,
                                  label: 'Priorité'
                              },
                              "Status_Version": {
                                  type: 'text',
                                  required: false,
                                  label: 'Version Status'
                              },
                              "Responsible": {
                                  type: 'text',
                                  required: false,
                                  label: 'Responsable'
                              },
                              "specialisation": {
                                  type: 'text',
                                  required: false,
                                  label: 'Spécialisation'
                              },
                              "type": {
                                  type: 'text',
                                  required: false,
                                  label: 'Type'
                              }
                          }
                      }
                  }
              }
          },
          actions: {
              Save: function () {
                  let updatedData = w2ui.blipForm.record;
                  updateGraphElementFromForm(updatedData);
                  w2popup.close();
              },
              Cancel: function () {
                  w2popup.close();
              }
          }
      });
  }
