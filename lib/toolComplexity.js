/*
This is the tool related to display of maps related to complexity
*/
// Complexity tool added to the list of tools - also requires the following javascript libraries being referenced in the HTML
// for launching the tool this way:
// <script src="..."></script>


tools=tools.concat(["Complexity"]);
console.log("Complexity tool added");


var toolbarComplexityDefinition={
    name: 'toolbarComplexityDefinition',
    style   : 'background-color: white',
    items: [
      { type: 'html', html:'Planned Date Properties' },
      { type: 'new-line' },
      {  type: 'html',  id: 'planStartDateProperty',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">start: 
        <input id="globalPlanStartDataProperty" list="listPlanStartDateProperties" value="plan_start_date" style="color:blue;"size="20" >
        <datalist id="listPlanStartDateProperties">${startPlanDateProperties}</datalist>
        </div>` },
      { type: 'new-line' },
      {  type: 'html',  id: 'planEndDateProperty',  html: `<div style=" height: 20px;display: flex;
      align-items: center;">end: 
      <input id="globalPlanEndDataProperty" list="listPlanEndDateProperties" value="plan_end_date" style="color:blue;"size="20" >
      <datalist id="listPlanEndDateProperties">${endPlanDateProperties}</datalist>
      </div>` },
      { type: 'new-line' },
      { type: 'html', html:'Actual Date Properties' },
      { type: 'new-line' },
      {  type: 'html',  id: 'actualStartDateProperty',  html: `<div style=" height: 20px;display: flex;
        align-items: center;">start: 
        <input id="globalActualStartDataProperty" list="listActualStartDateProperties" value="actual_start_date" style="color:blue;"size="20" >
        <datalist id="listActualStartDateProperties">${startActualDateProperties}</datalist>
        </div>` },
      { type: 'new-line' },
      {  type: 'html',  id: 'actualEndDateProperty',  html: `<div style=" height: 20px;display: flex;
      align-items: center;">end: 
      <input id="globalActualEndDataProperty" list="listActualEndDateProperties" value="actual_end_date" style="color:blue;"size="20" >
      <datalist id="listActualEndDateProperties">${endActualDateProperties}</datalist>
      </div>` },
      { type: 'new-line' },
      { type: 'button',  id: 'timeline',  text: 'Apply' },
      { type: 'button',  id: 'switch',  text: 'Show' },
    ]  ,
    onClick: function(event) {
      if (event.target=="tagSelectionWithColor"){tagSelectionWithColor();};

  }
}
config.toolbarComplexityDefinition=toolbarComplexityDefinition;

//w2ui['tools:Timeline'].on({ type : 'click' }, function (target, eventData) {activateToolBar("Timeline");});
 