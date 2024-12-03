tools=tools.concat(["PropertyColoredMap"]);
console.log("Colored Map tool added");

var defaultGlobalColorProperty="securityLevel";
var defaultPOverlayOpacity=0.5;
var defaultGlobalArrowWidth=20;
POverlayOpacity=defaultPOverlayOpacity;

globalColoredProperty=defaultGlobalColorProperty; 

propertyColorDefined=false;
valueTypeColorDefined=false;
globalArrowWidth=1;


var toolbarPropertyColoredMapDefinition={
    name: 'toolbarPropertyColoredMapDefinition',
    style   : 'background-color: white',
    items: [
        { type: 'html',  id: 'propertyType',  html: `<div style=" height: 20px;display: flex;
          align-items: center">Property for coloring: 
          <input id="globalColoredProperty" list="propertyColoringList" style="color:blue;" value="${defaultGlobalColorProperty}" size="20" onchange="globalColoredProperty=this.value"></div>
          <datalist id="propertyColoringList"></datalist>` },
        { type: 'new-line' },
        { type: 'html',  id: 'overlayOpacity',  html: `<div style=" height: 20px;display: flex;
        align-items: center">Opacity (value between 0 to 1): 
        <input id="overlayOpacity" style="color:blue;" value="${defaultPOverlayOpacity}" size="5" onchange="POverlayOpacity=this.value"></div>` },
        { type: 'new-line' },
        { type: 'html',  id: 'arrowWidth',  html: `<div style=" height: 20px;display: flex; align-items: center">Arrow Width: 
        <input id="globalArrowWidth" style="color:blue;" value="${defaultGlobalArrowWidth}" size="2" onchange="globalArrowWidth=this.value"></div>` },
        { type: 'new-line' },		  
        { type: 'button',  id: 'typeColorize',  text: 'Paint Value types'  }, 
        { type: 'new-line' },	  
        { type: 'button',  id: 'valueColorize',  text: 'Paint Property values'  }, 
        {type: 'spacer' },
        { type: 'button',  id: 'resetColor',  text: 'Reset'  }, 
        { type: 'new-line' },  
        { type: 'html',  id: 'legend',  html: '<div id="legend"> </div>' }
    ]  ,
    onClick: function(event) {
       logger.debug(event.target)
       POverlayOpacity=document.getElementById("overlayOpacity").value;
       if (event.target=="typeColorize"){
        propertyColorDefined=false;
        valueTypeColorDefined=true;
        globalArrowWidth=document.getElementById("globalArrowWidth").value
        colorizeProperty("type")};
       if (event.target=="valueColorize"){
        propertyColorDefined=true;
        valueTypeColorDefined=false;
        colorizeProperty("value");}
        globalArrowWidth=document.getElementById("globalArrowWidth").value
       if (event.target=="resetColor"){resetColorizePropertyValues();}
     }
}
config.toolbarPropertyColoredMapDefinition=toolbarPropertyColoredMapDefinition;




//w2ui['tool:PropertyColoredMap'].on({ type : 'click' }, function (target, eventData) {activateToolBar("PropertyColoredMap")});
 

function colorizeProperty(kind){
    
    globalColoredProperty=document.getElementById("globalColoredProperty").value;
    var myArray=cy.elements()
    .union(api.getAllCollapsedChildrenRecursively())
    .map(function( ele ){
        if(kind=="value"){return ele.data(globalColoredProperty)}
        if(kind=="type"){return typeof ele.data(globalColoredProperty)}
    }); 
    //console.log(myArray)
    let dup = [...new Set(myArray)].filter(function(item){
      if (kind=="value"){return typeof item !== 'undefined'};
      if (kind=="type"){return  item != 'undefined'};
    });
    //console.log (dup)
    var propertyValueColors = d3.scaleOrdinal(dup,d3.schemeTableau10);
    
   // w2ui.toolbarPropertyColoredMapDefinition.set(`colorize${kind}`, 
   //    { text: `Colors for ${globalColoredProperty} ${kind}` }); 
   // ["value", "type"].forEach(function(myKind){
   //     if (myKind != kind){
   // w2ui.toolbarPropertyColoredMapDefinition.set(`colorize${kind}`, 
   //    { text: `Paint ${globalColoredProperty} ${myKind} ` });}
   // });

    // Draw the legend on the toolbar - columns is needed for having one legend element per line
    w2ui.toolbarPropertyColoredMapDefinition.set('legend', { html: Swatches(propertyValueColors, {columns: "250px" } )});
    //colorized the graph
    propertyColor = d3.scaleOrdinal(propertyValueColors.domain(),propertyValueColors.range());
    cy.style().update()

    
  };

  function resetColorizePropertyValues(){
    w2ui.toolbarPropertyColoredMapDefinition.set('legend', { html: ""});
    propertyColorDefined=false;
    valueTypeColorDefined=false;
    globalArrowWidth=1;
    overlayOpacity=0;
    cy.style().update();
    document.getElementById("globalArrowWidth").value= defaultGlobalArrowWidth;
    document.getElementById("overlayOpacity").value= defaultPOverlayOpacity;
    w2ui.toolbarPropertyColoredMapDefinition.refresh();
  }; 

var propertyColor = () => void 0;

function pColor(attribut){
  if (propertyColorDefined || valueTypeColorDefined){return propertyColor(attribut);}
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
  
    if (columns !== null) return `
<div style=";flex: block;align-items: center; margin-left: ${+marginLeft}px; min-height: 33px; font: 10px sans-serif;width:1500px;heigth:400px">
    <style>
  
  .${id}-item {
    break-inside: avoid;
    display: flex;
    align-items: center;
    padding-bottom: 1px;
    overflow: auto;
    width:300px;

  }
  
  .${id}-label {
    white-space: nowrap;
    text-overflow: ellipsis;
    width:250px;
    
  }
  
  .${id}-swatch {
    width: ${+swatchWidth}px;
    height: ${+swatchHeight}px;
    margin: 0 0.5em 0 0;
    overflow: auto;
  }
  
    </style>
    <div style=${{width: "100%", columns}}>
    ${domain.map((value, index) => {
      const label = `${format(value)}`;
      var idInput=`${index}-input`;
      var onChange=`changeLabel('${index}');`;
      var disabled="";
     // console.log(`value = ${value}`)
      var testValue=value + "";
      if(testValue == "undefined"){disabled="disabled"};
      
      return `<div class=${id}-item>
        <div class=${id}-swatch style="background:${color(value)}"></div>
        <div class=${id}-label title=${label}><input id=${idInput} type="text" value='${label}' onchange="${onChange}" ${disabled}></div>
      </div>`;
    }).join('')}
    </div>
  </div>`;
  //<div class=${id}-label title=${label} >${label}</div>
    return `<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+marginLeft}px; font: 10px sans-serif;">
    <style>
  
  .${id} {
    display: inline-flex;
    align-items: center;
    margin-right: 1em;
    overflow: auto;
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

 function changeLabel(id){
  var myId=`${id}-input`;
  var newValue=document.getElementById(myId).value;
  var oldValue=document.getElementById(myId).defaultValue;

  w2confirm(`Changing "${oldValue}" to "${newValue}"?
  (This will change the values in the whole graph including what is hidden, nodes or arcs)`)
  .yes(() => {

    var myColoredProperty=document.getElementById("globalColoredProperty").value;
    var myFilter=`[${myColoredProperty} = "${oldValue}"]`;

    var myList=cy.$(myFilter);
    cy.elements(myFilter).union(api.getAllCollapsedChildrenRecursively().filter(myFilter)).map(function( elem ){ 
     // console.log (`${elem.id()} property ${myColoredProperty} value ${oldValue} changed to ${newValue}`)
      return elem.data(myColoredProperty,newValue)});

      colorizeProperty("value")
    
})
.no(() => {
    console.log('cancelled')
});
 
}


function updatePropertyColoringList() {
  allPropertyNames = getAllPropertyNames();
  let datalist = document.getElementById('propertyColoringList');
 // if (datalist == undefined){logger.debug("j'y passe pas")}else{ logger.debug("j'y passe")

  // Clear the current options
  datalist.innerHTML = '';

  // Add new options
  allPropertyNames.forEach(function(propertyName) {
    let option = document.createElement('option');
    option.value = propertyName;
    datalist.appendChild(option);
  });
}


document.addEventListener('focus', function(event) {
  if (event.target && event.target.id === 'globalColoredProperty') {
    updatePropertyColoringList();
  }
}, true);

logger.info("tool Property Colored Map loaded")




// Todo
// test the types of the old and the new value in order to ensure no mismatch
// to deal differently for undefined, as in fact no property exist.  
//In fact, it should be possible to replace the values only for exceptional cases
// to think on how to apply it on a selection
// also to think about the add property for a selection of nodes which create a new property with the same name and value even if it already exist
// it should not be possible
// also, multiple values for the same property should be handled (how to color it and put a legend in this case)
// For XML data types converted to JSON and the reverse, let's have a look at
//https://www.openlife.cc/blogs/2013/november/translating-reliably-between-xml-and-json-xml2json
// rewritte colorizeGraph and resetColorizedGraph in order to avoid extend and collapse of the whole graph


