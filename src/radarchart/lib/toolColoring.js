tools=tools.concat(["Coloring"]);
console.log("Coloring tool added");

var toolbarColoringDefinition={
    name: 'toolbarColoringDefinition',
    style   : 'background-color: white',
    items: [
        
        { type: 'color',  id: 'globalColor',  text: 'Color for selected' },  
        { type: 'spacer' },
        { type: 'button',  id: 'tagSelectionWithColor',  text: 'Tag', style:" text-align: center;" },
    ]  ,
    onClick: function(event) {
      if (event.target=="tagSelectionWithColor"){tagSelectionWithColor();};
      if (event.target=="globalColor"){globalColor=(w2ui['toolbarColoringDefinition'].get(event.target).color)};

  }
}
config.toolbarColoringDefinition=toolbarColoringDefinition;

//w2ui['tools:Coloring'].on({ type : 'click' }, function (target, eventData) {activateToolBar("Coloring");});
 

function tagSelectionWithColor(e){
	const elements =cy.nodes(":selected");
	elements.forEach(function(el){cy.$(el).style("background-color",globalColor);});
  }