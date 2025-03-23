

const validRings = ["Adopted", "Candidate", "Track"];
const validQuadrants = ["", "Available", "Monitored", "Participated", "Developed"];

function drawSelectedWorkgroup(workgroup) {

  // Filter based on selected working group

  let RadarInputs = ASD_SSG_Blips.filter(blip => blip.working_group === workgroup);
  let filteredBlips = RadarInputs.filter(d => validRings.includes(d.ring) && validQuadrants.includes(d.quadrant));

  // Call the visualization function
  plotData(filteredBlips);
}

function generateFormFromCytoscapeElement(ele) {
  if (!ele || !ele.isNode()) return;

  let data = ele.data();
  let position = ele.position(); // Get position separately
  let formFields = {};

  // === BLIP TAB ===
  formFields["Blip"] = {
    type: 'tab',
    fields: {
      "Radar Info": {
        type: 'group',
        fields: {
          "id": { type: 'text', label: 'ID', disabled: true, value: data.id || '' },
          "label": { type: 'text', label: 'Label', value: data.label || '' },
          "ring": {
            type: 'list', label: 'Ring',
            options: { items: validRings },
            value: data.ring || '',
            disabled:true
          },
          "quadrant": {
            type: 'list', label: 'Quadrant',
            options: { items: validQuadrants },
            value: data.quadrant || '',
            disabled:true
          }
        }
      }
    }
  };


  // === CONTEXT TAB ===
  formFields["Context"] = {
    type: 'tab',
    fields: {
      "Details": {
        type: 'group',
        fields: {
          "name": { type: 'text', label: 'Name', value: data.name || '' },
          "hasBlip": { type: 'checkbox', label: 'Has Blip', value: data.hasBlip === "TRUE" },
          "description": { type: 'textarea', label: 'Description', value: data.description || '' },
          "Priority": {
            type: 'list', label: 'Priority',
            options: { items: ['P1', 'P2', 'P3'] },
            value: data.Priority || 'P1'
          },
          "Status Version": { type: 'text', label: 'Status Version', value: data["Status Version"] || '' },
          "Responsible": { type: 'text', label: 'Responsible', value: data.Responsible || '' },
          "specialisation": { type: 'text', label: 'Specialisation', value: data.specialisation || '' },
          "type": { type: 'text', label: 'Type', value: data.type || '' }
        }
      }
    }
  };

  // === EXTRA TAB FOR UNKNOWN FIELDS ===
  let extraFields = {};
  const predefinedKeys = new Set([
    "id", "label", "ring", "quadrant", "name", "hasBlip", "description",
    "Priority", "Status Version", "Responsible", "specialisation", "type"
  ]);

  Object.keys(data).forEach(key => {
    if (!predefinedKeys.has(key) && key !== "pos") {
      extraFields[key] = {
        type: 'text',
        label: key.replace(/_/g, " "),
        value: data[key] || ''
      };
    }
  });

  if (Object.keys(extraFields).length > 0) {
    formFields["Extra"] = {
      type: 'tab',
      fields: {
        "Additional Properties": {
          type: 'group',
          fields: extraFields
        }
      }
    };
  }

  // === FORM CONFIG ===
  let formConfig = {
    name: 'blipForm',
    fields: formFields,
    record: data,  // Ensures form fields get values from node data
    actions: {
      Save() {
          let updatedData = this.record; // Use this.record instead of this.getValues()
  
          Object.keys(updatedData).forEach(key => {
              if (!key.startsWith("position.")) {
                  let value = updatedData[key]; // Extract value
  
                  // Extract selected value for list fields
                  if (key === 'ring' || key === 'quadrant') {
                      value = value?.id || value; // Get `id` if it's an object, otherwise keep value
                  }
  
                  ele.data(key, value); // Update node data with extracted value  
              }
          });
  
          ele.cy().style().update(); // Force Cytoscape.js to refresh styles
          w2ui['blipForm'].refresh(); // Ensure the form updates
      },
      Cancel() { w2ui['blipForm'].clear(); }
  }
  };

  return new w2form(formConfig);
}


// Function to initialize the toolbar in the left panel
function initializeToolbar2() {
  alert("initializetoolbar2")
}

// Function to get the working groups from your filtered blips
function getWorkingGroups() {
  const workingGroups = [...new Set(ASD_SSG_Blips.map(d => d.working_group))];
  return workingGroups.map(group => ({ id: group, text: group }));
}

function getWorkingGroupsWithCount() {
  // Count occurrences of each working group
  const counts = ASD_SSG_Blips.reduce((acc, d) => {
    acc[d.working_group] = (acc[d.working_group] || 0) + 1;
    return acc;
  }, {});

  // Convert to menu format
  return Object.entries(counts).map(([group, count]) => ({
    text: group,
    count: count
  }));
}

// Function to filter and display blips based on the selected working group
function filterBlipsByWorkingGroup(selectedGroup) {
  const filtered = ASD_SSG_Blips.filter(d => d.working_group === selectedGroup);
  console.log("Filtered Blips for Working Group:", selectedGroup, filtered);

  // Call your plotting function to update the graph
  plotData(filtered); // You already have plotData function defined
}


let originalZones = new Map(); // Store original zone and quadrant information
// Zone and Quarter Definitions
const zoneRingMapping = {
  2: "Track",         // Zone 0 (outer zone)
  1: "Candidate",     // Zone 1 (middle zone)
  0: "Adopted"        // Zone 2 (inner zone)
};

const quadrantMapping = {
  1: "Monitored",     // Quadrant 0 (0-90 degrees)
  0: "Available",     // Quadrant 1 (90-180 degrees)
  2: "Participated",  // Quadrant 2 (180-270 degrees)
  3: "Developed"      // Quadrant 3 (270-360 degrees)
};

// Définition du centre et des rayons des cercles
const chartCenter = { x: 400, y: 400 }; // Centre du radar chart (dans un espace 800x800)
const radii = [150, 250, 350]; // Rayons des cercles concentriques (modifiable)

// Fonction pour déterminer la zone d'un nœud
function getZone(x, y, radii) {
  let relX = x - chartCenter.x;
  let relY = y - chartCenter.y;
  let r = Math.sqrt(relX ** 2 + relY ** 2);
  let theta = Math.atan2(relY, relX); // Angle en radians (-π à π)
  let angleDeg = (theta * 180) / Math.PI; // Conversion en degrés

  let circleIndex = radii.findIndex(radius => r < radius);
  if (circleIndex === -1) circleIndex = radii.length - 1; // Évite un index hors limites

  let sectorIndex = Math.floor(((theta + Math.PI) / (2 * Math.PI)) * 4) % 4;

  return { zone: circleIndex, quadrant: sectorIndex }; // 🔥 Correction : Associer aux bonnes variables
}

function enableNodeGrabbing() {
  cy.nodes().grabify();
}

function disableNodeGrabbing() {
  cy.nodes().ungrabify();
}

function openCSV(file) {
  if (file) {
    Papa.parse(file, {
      header: true, // Treat first row as header
      skipEmptyLines: true,
      complete: function (results) {
        myBlips = processCSVData(results.data);
        displayBlips(myBlips);  // Optionally display all data
      }
    });
    // createRadarWithCytoscape({ workingGroup: "PLM", containerId: "container" });
  }
}
// Function to process CSV data and convert it to JSON format
function processCSVData(csvData) {
  return csvData.map(row => ({
    id: row.id,
    working_group: row.working_group,
    in_pda_radar: row.in_pda_radar,
    in_se_radar: row.in_se_radar,
    in_ils_radar: row.in_ils_radar,
    in_manuf_radar: row.in_manuf_radar,
    in_tli_radar: row.in_tli_radar,
    in_supply_chain_radar: row.in_supply_chain_radar,
    label: row.label,
    ring: row.ring,  // ring corresponds to zone
    quadrant: row.quadrant,  // quadrant corresponds to quarter
    name: row.name,
    hasBlip: row.hasBlip,
    description: row.description,
    standard_type1: row.standard_type1,
    // Additional fields can go here
  }));
}

// Function to display all blips (optional)
function displayBlips(blips) {
  document.getElementById('output').textContent = JSON.stringify(blips, null, 2);
}


// Function to filter blips based on selected radar type
function filterBlipsByRadarType(radarType) {
  return myBlips.filter(blip => {
    return blip[`in_${radarType}_radar`] === 'Y';  // Filter based on 'Y' value
  });
}

//createRadarSVG("PLM",800,800)
function drawSVG() {
  ringSizes = [
    { ringSize: 350, ringColor: "#e6e6e4" },
    { ringSize: 250, ringColor: "#dddcda" },
    { ringSize: 150, ringColor: "#c7c7c7" }
  ]
  let container = d3.select("#svg-container");

  if (container.empty()) {
    console.error("❌ #svg-container does not exist!");
    return;
  }

  let containerNode = container.node();
  if (!containerNode) {
    console.error("❌ container.node() is null!");
    return;
  }

  let width = containerNode.clientWidth;
  let height = containerNode.clientHeight;

  console.log(`✅ SVG Container Size: ${width} x ${height}`);

  // Remove old SVG if it exists
  container.select("svg").remove();


  margin = ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  })
  graphWidth = width - margin.left - margin.right
  graphHeight = height - margin.top - margin.bottom

  const xMax = width - margin * 2;
  const yMax = height - margin * 2;

  const radarTitle = `Standards Radar Chart ` + new Date().toLocaleDateString();

  // Append SVG Object to the Page
  // Select the existing <svg> element inside #svg-overlay
  let svg = container.append("svg")
    .attr("width", width)
    .attr("height", height)
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
}

function plotData(RadarInputs) {
  cy.elements().remove();

  const validRings = ["Adopted", "Candidate", "Track"];
  const validQuadrants = ["Available", "Monitored", "Participated", "Developed"];

  var filteredBlips = RadarInputs.filter(d =>
    validRings.includes(d.ring) && validQuadrants.includes(d.quadrant)
  );

  filteredBlips.forEach(d => {
    // Assign radius based on ring category
    if (d.ring === "Adopted") d.radius = d3.randomUniform(30, 130)();
    if (d.ring === "Candidate") d.radius = d3.randomUniform(180, 230)();
    if (d.ring === "Track") d.radius = d3.randomUniform(280, 320)();

    let newPoints;
    if (d.quadrant === "Available") {
      newPoints = d3.pointRadial(Math.random() * (6.2 - 4.8) + 4.8, d.radius);
    } else if (d.quadrant === "Monitored") {
      newPoints = d3.pointRadial(Math.random() * (7.7 - 6.4) + 6.4, d.radius);
    } else if (d.quadrant === "Participated") {
      newPoints = d3.pointRadial(Math.random() * (9.3 - 8) + 8, d.radius);
    } else if (d.quadrant === "Developed") {
      newPoints = d3.pointRadial(Math.random() * (10.9 - 9.6) + 9.6, d.radius);
    }

    // Convert polar to Cartesian and translate to center (400, 400)
    d.x = newPoints[0] + 400;
    d.y = newPoints[1] + 400;
  });

  // Convert the computed blips into Cytoscape elements
  const elements = filteredBlips.map(blip => ({
    data: { id: blip.label, ...blip },
    position: { x: blip.x, y: blip.y }
  }));

  // Add elements to Cytoscape
  cy.add(elements);
  cy.fit();
}













