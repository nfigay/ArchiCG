tools=tools.concat(["ColoredMap"]);
console.log("Colored Map tool added");
//var coloredProperty="securityLevel"; 
var propertyColorDefined=false;
var globalArrowWidth=1;

var toolbarColoredMapDefinition={
    name: 'toolbarColoredMapDefinition',
    style   : 'background-color: white',
    items: [
        { type: 'html',  id: 'propertyType',  html: `<div style=" height: 20px;display: flex;
          align-items: center">Property for coloringxxx: 
          <input id="globalProperty2" list="propertyList2" style="color:blue;" size="20" onchange="globalProperty2=this.value"></div>
           <datalist id="propertyList2">${linesOrders}</datalist>` },
        { type: 'new-line' },
        { type: 'html',  id: 'overlayOpacity',  html: `<div style=" height: 20px;display: flex;
        align-items: center">Opacity (value between 0 to 1): 
        <input id="overlayOpacity" style="color:blue;" size="10" onchange="overlayOpacity=this.value"></div>` },
        { type: 'new-line' },
        { type: 'html',  id: 'arrowWidth',  html: `<div style=" height: 20px;display: flex;
        align-items: center">Arrow Width: 
        <input id="globalArrowWidth" style="color:blue;" size="20" onchange="globalArrowWidth=this.value"></div>` },
      { type: 'new-line' },		  
        { type: 'button',  id: 'colorizeGraph',  text: 'Colors for property values'  }, 
        {type: 'spacer' },
        { type: 'button',  id: 'resetColor',  text: 'Reset'  }, 
        { type: 'new-line' },  
        { type: 'html',  id: 'legend',  html: '<div id="legend"/>' }
    ]  ,
    onClick: function(event) {
     
       if (event.target=="colorizeGraph"){colorizeGraph();};
       if (event.target=="resetColor"){resetColorizeGraph();};
     }
}
config.toolbarColoredMapDefinition=toolbarColoredMapDefinition;




//w2ui['tool:ColoredMap'].on({ type : 'click' }, function (target, eventData) {activateToolBar("ColoredMap")});
 

function colorizeGraph(){
    api.expandAll();
    var coloredProperty=document.getElementById("globalProperty").value;
    var myArray= cy.elements().map(function( ele ){ return ele.data(coloredProperty)});
    api.collapseAll();
    let dup = [...new Set(myArray)];
    propertyValueColors = d3.scaleOrdinal(dup,d3.schemeTableau10);
    w2ui.toolbarColoredMapDefinition.set('colorizeGraph', { text: 'Colors for '+coloredProperty+' values' });
    w2ui.toolbarColoredMapDefinition.set('legend', { html: Swatches(propertyValueColors, {columns: "50px" } )});
    propertyColor = d3.scaleOrdinal(propertyValueColors.domain(),propertyValueColors.range());
    propertyColorDefined=true;
  };

  function resetColorizeGraph(){
    api.expandAll();
    w2ui.toolbarColoredMapDefinition.set('legend', { html: ""});
    propertyColorDefined=false;
    globalArrowWidth=1;
    overlayOpacity=0;
    w2ui.toolbarColoredMapDefinition.refresh();
    api.collapseAll();
  }; 

var propertyColor = () => void 0;

function pColor(attribut){
  if (propertyColorDefined){return propertyColor(attribut);}
  else{return "white";}
}

function swatches({color, ...options}) {
    return Swatches(color, options);
  }
  
  function Swatches( color, {
    columns = null,
    format,
    unknown: formatUnknown,
    swatchSize = 15,
    swatchWidth = swatchSize,
    swatchHeight = swatchSize,
    marginLeft = 0
     } = {}) {
    const id = `-swatches-${Math.random().toString(16).slice(2)}`;
    const unknown = formatUnknown == null ? undefined : color.unknown();
    const unknowns = unknown == null || unknown === d3.scaleImplicit ? [] : [unknown];
    const domain = color.domain().concat(unknowns);
    if (format === undefined) format = x => x === unknown ? formatUnknown : x;
  
    function entity(character) {
      return `&#${character.charCodeAt(0).toString()};`;
    }
  
    if (columns !== null) return `<div style="display: flex; align-items: center; margin-left: ${+marginLeft}px; min-height: 33px; font: 10px sans-serif;">
    <style>
  
  .${id}-item {
    break-inside: avoid;
    display: flex;
    align-items: center;
    padding-bottom: 1px;
  }
  
  .${id}-label {
    white-space: nowrap;
    overflow: visible;
    text-overflow: ellipsis;
    max-width: calc(100% - ${+swatchWidth}px - 0.5em);
  }
  
  .${id}-swatch {
    width: ${+swatchWidth}px;
    height: ${+swatchHeight}px;
    margin: 0 0.5em 0 0;
  }
  
    </style>
    <div style=${{width: "100%", columns}}>
    ${domain.map(value => {
      const label = `${format(value)}`;
      return `<div class=${id}-item>
        <div class=${id}-swatch style="background:${color(value)}"></div>
        <div class=${id}-label title=${label}>${label}</div>
      </div>`;
    }).join('')}
    </div>
  </div>`;
  
    return `<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+marginLeft}px; font: 10px sans-serif;">
    <style>
  
  .${id} {
    display: inline-flex;
    align-items: center;
    margin-right: 1em;
  }
  
  .${id}::before {
    content: "";
    width: ${+swatchWidth}px;
    height: ${+swatchHeight}px;
    margin-right: 0.5em;
    background: var(--color);
  }
  
    </style>
    <div>${domain.map(value => `<span class="${id}" style="--color: ${color(value)}">${format(value)}</span>`)}</div>`;
  }


  
 