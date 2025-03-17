function transformBlipsToNodes(blips) {
    return blips.map(blip => ({
        group: "nodes",
        data: { ...blip }  // Copie à plat de toutes les propriétés
    }));
}

function createRadarChart({
    workingGroup,
    containerId,
    blips,
    width = 800,
    height = 800,
    ringSizes = [
      { ringSize: 350, ringColor: "#e6e6e4" },
      { ringSize: 250, ringColor: "#dddcda" },
      { ringSize: 150, ringColor: "#c7c7c7" }
    ]
  }) {
    const radarTitle = `${workingGroup} Standards Radar Chart ` + new Date().toLocaleDateString();
    const margin = { top: 0, bottom: 0, left: 0, right: 0 };
    const graphWidth = width - margin.left - margin.right;
    const graphHeight = height - margin.top - margin.bottom;
    
    const radarInputs = blips.filter(blip => blip.working_group === workingGroup);
    console.log("Radar inputs", radarInputs);
  
    const svg = d3.select(containerId)
      .append("svg")
      .attr("viewBox", [-width / 2, -height / 2, width, height]);
    
    svg.append("circle").attr("id", "allRings");
    svg.selectAll("allRings")
      .data(ringSizes)
      .enter()
      .append("circle")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("fill", d => d.ringColor)
      .attr("r", d => d.ringSize);
    
    svg.append("text")
      .style("font-size", "25px")
      .text(radarTitle)
      .attr("x", -300)
      .attr("y", -370)
      .attr("fill", "black");
  }
  
  function createTooltip() {
    return d3.select("body").append("div").attr("class", "toolTip");
  }
  
  function nodeMouseOver(event, d, toolTip) {
    toolTip.style("left", event.pageX + 18 + "px")
      .style("top", event.pageY + 18 + "px")
      .style("display", "block")
      .html(`<strong>${d.name}</strong>`);
    d3.select(event.target).style("cursor", "pointer");
  }
  
  function nodeMouseOut(event, toolTip) {
    toolTip.style("display", "none");
    d3.select(event.target).style("cursor", "default");
  }
  // Sélection de l'élément canvas dans le DOM
let canvasId = "monRadarChart";

// Définition des axes du radar
let labels = ["Performance", "Sécurité", "Scalabilité", "Interopérabilité", "Usabilité"];

// Valeurs correspondant à ces axes
let dataValues = [80, 90, 70, 85, 75];

// Appel de la fonction pour créer le radar chart
createRadarChart(canvasId, labels, dataValues);
