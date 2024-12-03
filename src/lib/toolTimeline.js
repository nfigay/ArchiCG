/*
This is the tool related to combined usage of ArchiMate compound graph with timeline
Implementation relies on combined usage of vis.js  timeline and cytoscape.js
*/
// Timeline tool added to the list of tools - also requires the following javascript libraries being referenced in the HTML
// for launching the tool this way:
// <script src="lib/vis-timeline-graph2d.min.js"></script>
// <script src="lib/toolTimeline.js"></script>

tools=tools.concat(["Timeline"]);
console.log("Timeline tool added");

// Here are the variable we want to use for parametering the visualization, giving access to a predefined list of names
// should be possible to change throuhg the toolbar dedicated to the tool e.g. toolbarTimelineDefinition, defined relying on library w2ui.js
var timeline;

var listPlanStartDateProperties=["plan_start_date"];
var startPlanDateProperties="";
listPlanStartDateProperties.forEach((kind) => {startPlanDateProperties += '<option value="'+kind+'" />';})

var listPlanEndDateProperties=["plan_end_date"];
var endPlanDateProperties="";
listPlanEndDateProperties.forEach((kind) => {endPlanDateProperties += '<option value="'+kind+'" />';})

var listActualStartDateProperties=["actual_start_date"];
var startActualDateProperties="";
listActualStartDateProperties.forEach((kind) => {startActualDateProperties += '<option value="'+kind+'" />';})

var listActualEndDateProperties=["actual_end_date"];
var endActualDateProperties="";
listActualEndDateProperties.forEach((kind) => {endActualDateProperties += '<option value="'+kind+'" />';})

var timeAxisScale='month'
var min = new Date(2013, 3, 1); // 1 april
var max = new Date(2013, 3, 30, 23, 59, 59); // 30 april


var toolbarTimelineDefinition={
    name: 'toolbarTimelineDefinition',
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
      { type: 'button',  id: 'timeline2',  text: 'Apply' },
      { type: 'button',  id: 'switch',  text: 'Show' },
    ]  ,
    onClick: function(event) {
      if (event.target=="tagSelectionWithColor"){tagSelectionWithColor();};
      if (event.target=="globalColor"){globalColor=(w2ui['toolbarTimelineDefinition'].get(event.target).color)};
      if (event.target=="timeline2"){
        var filterPlannedWork=`[${document.getElementById("globalPlanStartDataProperty").value}][${document.getElementById("globalPlanEndDataProperty").value}]`
        var plannedWork=cy.nodes().union(api.getAllCollapsedChildrenRecursively(node)).filter(filterPlannedWork);
        console.log(filterPlannedWork)
        var plannedWorkItems=plannedWork.map(function( ele ){
          var item={};
          item["id"]=ele.id();
          item["content"]=ele.data("label")//`<div style="display: flex; align-items: center;"><img src="${ArchiMate(ele.data("type"))}" width="20" height="20" ><span>${ele.data("label")}</span></div>`;
          item["start"]=ele.data(`${document.getElementById("globalPlanStartDataProperty").value}`);
          item["end"]=ele.data(`${document.getElementById("globalPlanEndDataProperty").value}`);
          item["group"]=10;
          return item;
        });
        console.log(plannedWorkItems)
        var filterActualFinishedWork=`[${document.getElementById("globalActualStartDataProperty")}][${document.getElementById("globalActualEndDataProperty")}]`
        var finishedWork=cy.nodes(`${filterActualFinishedWork}`)
 
      document.getElementById('timeline').innerHTML = "";
      var container = document.getElementById('timeline');
      var groups = [{id: 1,content: 'Roadmap R1',treeLevel: 1,nestedGroups: [10,11]},{id: 10,content: 'Project P1',treeLevel: 2},{id:11,content: 'Project P2',treeLevel: 2},
                    {id: 2,content: 'Roadmap R2',treeLevel: 1,nestedGroups: [20,21]},{id: 20,content: 'Project P2',treeLevel: 2},{id:21,content: 'Project P2',treeLevel: 2}]

      // Create a DataSet (allows two way data-binding)
      var items = new vis.DataSet(plannedWorkItems);
//        [{id: 1, content: 'item 1', start: '2013-04-20'},
//        {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'}]
    
      // Configuration for the Timeline - could be controlled through user interface is creating variable which can be change through the toolbal
      var options = {
        editable:  true,
        verticalScroll:true,
        onAdd: function (item, callback) {
          prettyPrompt('Add item', 'Enter text content for new item:', item.content, function (value) {
            item.start = item.start || new Date();
            item.end = item.end || new Date(item.start.getTime() + 10*24*3600000); 
            if (value) {
              item.content = value;
              callback(item); // send back adjusted new item
            }
            else {
              callback(null); // cancel item creation
            }
          });
        },
    
        onMove: function (item, callback) {
          event.stopPropagation(); // Stop the event from bubbling up
          event.preventDefault();  
          var title = 'Do you really want to move the item to\n' +
              'start: ' + item.start + '\n' +
              'end: ' + item.end + '?';
    
          prettyConfirm('Move item', title, function (ok) {
            logger.debug("Moving item:", item);
            if (ok && item.start && item.end && item.start < item.end) {
              callback(item); // send back item as confirmation (can be changed)
            }
            else {
              callback(null); // cancel editing item
            }
          });
        },
    
        onMoving: function (item, callback) {
          container.addEventListener('mousemove', function(event) {
            event.stopPropagation(); // Ensure other listeners don't interfere
            event.preventDefault();  // Prevent default behaviors that might cause issues
          });

    
          callback(item); // send back the (possibly) changed item
        },
    
        onUpdate: function (item, callback) {
          prettyPrompt('Update item', 'Edit items text:', item.content, function (value) {
            if (value) {
              item.content = value;
              callback(item); // send back adjusted item
            }
            else {
              callback(null); // cancel updating the item
            }
          });
        },
    
        onRemove: function (item, callback) {
          prettyConfirm('Remove item', 'Do you really want to remove item ' + item.content + '?', function (ok) {
            if (ok) {
              callback(item); // confirm deletion
            }
            else {
              callback(null); // cancel deletion
            }
          });
        },
        locale:'en', 
        timeAxis: { scale: 'week', step: 1 }                     
    };
    
      // Create a Timeline
      timeline = new vis.Timeline(container, items, groups,options);
      timeline.on("select", function (properties) {
      //  properties.items.forEach(function(item){searchNode(item)})
      });
      items.on('*', function (event, properties) {
        logger.info('event=' + JSON.stringify(event) + ', ' +'properties=' + JSON.stringify(properties))
      });
    }

      if (event.target=="switch"){
        if (document.getElementById("timeline").style.display == "block"){
          document.getElementById("timeline").style.display = "none";
          document.getElementById("cy").style.height = "100%";
     //     document.getElementById("cy").style.display = "block";
        }else{
          document.getElementById("timeline").style.display = "block";
          document.getElementById("cy").style.height = "75%";
          document.getElementById("timeline").style.height = "25%";
          try{
            timeline.refresh()
            timeline.setOptions(options)
          } catch(error){}
          

     //     document.getElementById("cy").style.display = "none";
        };
      }

  }
}
config.toolbarTimelineDefinition=toolbarTimelineDefinition;


//w2ui['tools:Timeline'].on({ type : 'click' }, function (target, eventData) {activateToolBar("Timeline");});
 

function tagSelectionWithColor(e){
	const elements =cy.nodes(":selected");
	elements.forEach(function(el){cy.$(el).style("background-color",globalColor);});
  }

  function searchNode(nodeId) {
   
    // Search for the node
    //const node = cy.getElementById(nodeId);
    var targetnode= cy.nodes().filter(node => node.data('id') === nodeId);

    if (targetnode.nonempty()) {
        // If the node exists, select it
        targetnode.select();

        // Unfold all the parent nodes to make it visible
        let parent = node.parent();
        while (parent.nonempty()) {
            parent.open();
            parent = parent.parent();
        }

        // Center and zoom to the node
        cy.animate({
            center: { eles: node },
            zoom: 2 // adjust zoom level as needed
        }, {
            duration: 500
        });
    } else {
        console.log('Node not found');
    }}
    
    function prettyConfirm(title, text, callback) {
      swal({
        title: title,
        text: text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#DD6B55"
      }, callback);
    }
  
    function prettyPrompt(title, text, inputValue, callback) {
      swal({
        title: title,
        text: text,
        type: 'input',
        showCancelButton: true,
        inputValue: inputValue
      }, callback);
    }
  
   