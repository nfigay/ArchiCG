acg_ArchiMateExtensions=["view", "viewpoint", "model", "folder","package", "group", "note", "drawing", "extensions", "relations", "metamodel","layer","not-defined"];

archimateNonViewpointRelatedFieldset=["relationships","visual"];
archicgRelatedFieldsets=["meta"];
archimateVisualConstructs=["note", "group"];
acgTypes=acgTypes.concat(acg_ArchiMateExtensions);
//acg_Edges=acg_Edges.concat(ArchiMateRelationNames)
acg_Nodes=acg_Nodes.concat(acg_ArchiMateExtensions)
//acg_Edge_Specializations=acg_Edges_Specializations.concat()
//acg_Node_Specializations=acg_Node_Specializations.concat()


multiLanguagespaletteStructure.push(
    {id:"archicgRelatedFieldsets", name:"ArchiCG Palette Meta",visible:true, activated:true, data:{fieldSets:archicgRelatedFieldsets}}); 

multiLanguagespaletteStructure.push(
      {id:"archimateVisualConstructs", name:"ArchiMate Palette Visual Constructs",visible:true, activated:true, data:{fieldSets:archimateVisualConstructs}}); 

multiLanguagespaletteStructure.push(
        {id:"archimateNonViewpointRelatedFieldset", name:"ArchiCG Palette",visible:true, activated:true, data:{fieldSets:archimateNonViewpointRelatedFieldset}});
      
const not_defined_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Undefined</h2></div>
<div class="description"><strong>Description: </strong></div>
A special symbol for indicating a type was assigned to a <br/>
node which doesn't exist in the ArchiCG metamodel.
<div class ="categories"><strong>Categories: </strong>meta</div>
`
const view_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Architecture View</h2></div>
<div class="description"><strong>Description: </strong>
</div>
ISO 42010 Definition<br/>
An Architecture View in an AD expresses the Architecture of the System of Interest<br/>
from the perspective of one or more Stakeholders to address specific Concerns,<br/>
using the conventions established by its viewpoint.<br/>
An Architecture View consists of one or more Architecture Models.
<div class ="categories"><strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong></div></div>
`

const viewpoint_html = `<div xmlns="http://www.w3.org/1999/xhtml"   align="justify"><div class="name" ><h2>Architecture viewpoint</h2></div>
<div class="description"><strong>Description: </strong>
</div>ISO 42010 Definition <br/>
An Architecture Viewpoint is a set of conventions for constructing, <br/>
interpreting,using and analyzing one type of Architecture View.<br/>
A viewpoint includes Model Kinds, viewpoint languages and notations,<br/>
modeling methods and analytic techniques to frame a specific set of Concerns.<br/>
<div class ="categories"><strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong></div>operational, systems, technical, logical, deployment, process, information.</div>
`
const drawing_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Drawing</h2></div>
<div class="description"><strong>Description: </strong></div>
A drawing is a visual representation realized with visual element constructs.<br/>
Several ArchiMate modeling tools, such as Archi, allow producing such drawing <br/>
in addition to models.<br/>
ArchiCG planned feature: integration of drawing as SVG background images, eventually jpg, png... 
<div class ="categories"><strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong></div></div>
`
const group_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Group</div></h2>
<div class="description"><strong>Description: </strong>The Group box denotes a collection of objects that belong together<br/>
but are not aggregated or composed as with the Grouping element.<br/>
The Group provides a convenient visual collection of elements, without any semantic relationships.
</div>
<div class ="categories"> <strong>Categories: </strong>diagram_object</div>
<div class="examples"><strong>Examples: </strong>Group Roles and Actors, Business Layers, Application Layers.</div></div>
`

const note_html = `<div xmlns="http://www.w3.org/1999/xhtml"   align="justify"><div class="name" ><div><h2>Note</h2></div><div class="description"><strong>Description: </strong>A note which can be added on a diagram. This is note an object, just a visual element.
</div>
<div class ="categories"><strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong></div></div>
`
const metamodel_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Metamodel</h2></div>
<div class="description"><strong>Description: </strong> This is the modeling element used for <br/>
representing ArchiCG metamodel elements
</div>
<div class ="categories"><strong>Categories: </strong>meta</div>`

const model_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Model</h2></div>
<div class="descrition"><strong>Description</strong> A model is a simplified representation of use of the reality.<br/>
For computer aided activity, it is also a strutured set of data, with semantic tagging.<br/> 
<div class ="categories"> <strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong>An ArchiMate Model</div></div>
`
const extensions_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Extensions</h2></div>
<div class="description"><strong>Description: </strong></div>
This is the group of the concepts extending the ArchiMate Language constructs for ArchiCG.
<div class ="categories"><strong>Categories: </strong>meta</div>
`
const relations_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Relations</h2></div>
<div class="description"><strong>Description: </strong></div>
This is the group of the ArchiMate Concepts definining a relationship.
<div class ="categories"><strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples:composition, aggregation, association, etc. </div>
</strong></div></div>`

const layer_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Layer</h2></div>
<div class="description"><strong>Description: </strong>A layer is a category for model element for<br/>
structuring a model using the layer pattern
</div>
<div class ="categories"> <strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong>Business, Application, ICT.</div></div>
`
const folder_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" >
<h2>Folder</h2></div>
<div class="description"><strong>Description: </strong>A folder is a containment used in <br/>
some application for data or data objects.</div>
<div class ="categories"> <strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong>Archi Folder</div></div>
`
const package_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Package</h2></div>
<div class="description"><strong>Description: </strong>A package is a containment used in<br/>
some application for data or data objects.</div>
<div class ="categories"> <strong>Categories: </strong>meta</div>
<div class="examples"><strong>Examples: </strong>UML Package, Java Package</div></div>
`

function view_svg() {  return "data:image/svg+xml;base64," + btoa(view.outerHTML);}
function viewpoint_svg() {  return "data:image/svg+xml;base64," + btoa(viewpoint.outerHTML);}
function extensions_svg() {  return "data:image/svg+xml;base64," + btoa(extensions.outerHTML);}
function relations_svg() {  return "data:image/svg+xml;base64," + btoa(relations.outerHTML);}
function drawing_svg()   {  return "data:image/svg+xml;base64," + btoa(drawing.outerHTML);}
function note_svg()      {  return "data:image/svg+xml;base64," + btoa(note.outerHTML);}
function metamodel_svg() {  return "data:image/svg+xml;base64," + btoa(metamodel.outerHTML);}
function package_svg() {  return "data:image/svg+xml;base64," + btoa(package.outerHTML);}
function folder_svg() {  return "data:image/svg+xml;base64," + btoa(folder.outerHTML);}
function layer_svg() {  return "data:image/svg+xml;base64," + btoa(layer.outerHTML);}
function not_defined_svg() {  return "data:image/svg+xml;base64," + btoa(not_defined.outerHTML); }
function model_svg() {  return "data:image/svg+xml;base64," + btoa(model.outerHTML);}
function group_svg() {  return "data:image/svg+xml;base64," + btoa(group.outerHTML);}


function myArchiMateExtension(type) {
    const rectangle = "rectangle";
    switch (type) {
        case "folder"                    :return folder_svg();                           break;
        case "group"                     :return group_svg();                            break;
        case "layer"                     :return layer_svg();                            break;
        case "model"                     :return model_svg();                            break;
        case "view"                      :return view_svg();                             break;
        case "viewpoint"                 :return viewpoint_svg();                        break;   
        case "extensions"                :return extensions_svg();                       break; 
        case "relations"                 :return relations_svg();                        break; 
        case "drawing"                   :return drawing_svg();                          break; 
        case "note"                      :return note_svg();                             break; 
        case "metamodel"                 :return metamodel_svg();                        break;
        case "package"                   :return package_svg();                          break;
    
    }
  }

  visualFieldset=`
  <div id="visualPalette" style="display:block;">
  <fieldset id='visual-fieldset'>
 <legend>Visual</legend>   
 
 <button ${w2utils.tooltip(paletteIconDescription("note"), { position: 'left', className: 'w2ui-light' })}
 id='note-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="note" width="45" height="45" viewBox="0 0 1000 1000">
   <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M1346.6,3593L100,2293.1v-3309.2v-3309.2l47.4-98.8c53.3-116.6,90.9-152.1,209.4-205.5c88.9-39.5,112.6-41.5,3449.4-41.5h3358.5l100.8,49.4c106.7,53.3,191.6,154.1,223.2,268.7c11.9,39.5,19.8,574.9,19.8,1351.3v1284.2l292.4,215.3c450.4,333.9,1029.3,790.2,1025.4,808c-5.9,21.7-713.2,920.6-725,920.6c-5.9,2-136.3-100.8-292.4-225.2c-156.1-124.5-286.5-227.2-292.4-227.2c-4,0-9.9,1082.6-11.9,2406.3l-5.9,2408.3l-59.3,94.8c-43.5,71.1-88.9,112.6-166,152.1l-104.7,55.3H4881H2593.2L1346.6,3593z M7170.7,4543.3l41.5-53.3l-2-2491.3V-492.6l-260.8-217.3c-1143.9-960.1-1969.7-1861-1969.7-2149.5c0-88.9,63.2-167.9,150.1-183.7c223.3-41.5,1019.4,367.5,1868.9,962.1c106.7,75.1,199.5,136.3,203.5,136.3c5.9,0,9.9-523.5,9.9-1163.6c0-1145.9,0-1163.6-41.5-1215l-39.5-51.4H3802.3c-3301.3,0-3326.9,0-3366.5,39.5c-39.5,39.5-39.5,65.2-39.5,3269.7v3230.1h1062.9c989.8,0,1066.8,2,1128.1,35.6c37.5,19.8,85,67.2,104.7,104.7c33.6,61.3,35.6,140.3,35.6,1177.5v1112.3h2200.8h2202.8L7170.7,4543.3z"/><path d="M1328.8,1232.1l5.9-144.2l2465.6-5.9l2463.6-4v148.2v148.2H3794.4H1322.9L1328.8,1232.1z"/><path d="M1328.8-12.5l5.9-144.2l2465.6-5.9l2463.6-3.9v148.2v148.2H3794.4H1322.9L1328.8-12.5z"/><path d="M1328.8-1257.1l5.9-144.2l2080.3-5.9l2078.3-4v148.2v148.2H3409.2H1322.9L1328.8-1257.1z"/><path d="M1328.8-2501.8l5.9-144.2h1610.1H4555l5.9,144.2l5.9,142.3h-1622h-1622L1328.8-2501.8z"/><path d="M9168.1,943.7c-71.1-31.6-213.4-108.7-316.1-173.9c-183.7-114.6-632.2-438.6-632.2-454.4c0-13.8,713.2-906.8,729-912.7c49.4-17.8,725,612.4,837.6,780.4c158.1,231.1,150.2,501.8-17.8,671.7C9618.5,1005,9389.4,1038.5,9168.1,943.7z"/><path d="M8802.6-820.5c-412.9-326-774.4-616.4-804.1-646c-37.5-35.6-55.3-71.1-55.3-114.6c0-140.3,122.5-166,264.7-57.3c217.3,166,1430.3,1126.1,1479.7,1171.5c67.2,63.2,77.1,187.7,15.8,221.3C9600.8-192.3,9577-206.1,8802.6-820.5z"/></g></g>
   </svg>
 </button>      
   
 <button ${w2utils.tooltip(paletteIconDescription("group"), { position: 'left', className: 'w2ui-light' })}
 id='group-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="group" width="50" height="50" viewBox="0 0 50 50">
     <rect style="opacity:0.89;fill:none;fill-opacity:1;stroke:#120000;stroke-width:1.05391;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none" id="rect269-0" width="13.408221" height="6.9181228" x="4.6525154" y="8.7193708" />
     <rect style="opacity:0.89;fill:none;fill-opacity:0.924623;stroke:#120000;stroke-width:0.900887;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none" id="rect1371" width="40.728073" height="23.437618" x="4.4709072" y="15.800754" />
     <g aria-label="V" id="text1910" style="stroke-width:0.4905573055474025">
       <path d="M 31.331 20.857 L 25.917 34.5409 L 23.2798 34.5409 L 17.8658 20.857 L 19.9834 20.857 L 24.6482 32.8961 L 29.3134 20.857 Z" />
     </g>     
   </svg>
 </button>   

 <button ${w2utils.tooltip(paletteIconDescription("view"), { position: 'left', className: 'w2ui-light' })}
 id='view-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="view" width="50" height="50" viewBox="0 0 50 50">
   <g>
     <path d="M 4.5993 32.41 C 4.61657 38.3625 8.96434 43.161 14.3397 43.1609 C 19.7191 43.1608 24.0799 38.3316 24.0799 32.3746 L 24.0799 26.1708 C 24.4445 26.1628 24.8206 26.166 25.2055 26.166 C 25.5904 26.166 25.9665 26.1628 26.3311 26.1708 L 26.3311 32.3746 C 26.3311 38.3316 30.6919 43.1608 36.0713 43.1609 C 41.4467 43.1609 45.7945 38.3625 45.8117 32.41 C 45.8166 30.6962 45.4602 29.0753 44.8226 27.6346 L 38.715 13.2187 C 38.4352 12.5582 38.1754 11.8878 37.9084 11.2208 C 36.9747 8.88764 34.8738 7.25508 32.4252 7.23459 C 29.0735 7.20661 26.3311 10.3106 26.3311 14.0224 L 26.3311 16.7018 C 25.9665 16.6247 25.5904 16.5839 25.2055 16.5839 C 24.8207 16.5839 24.4445 16.6247 24.0799 16.7018 L 24.0799 14.0224 C 24.0799 10.3106 21.3375 7.20661 17.9857 7.23459 C 15.5372 7.25508 13.4363 8.88764 12.5025 11.2208 C 12.2356 11.8878 11.9757 12.5582 11.6959 13.2187 L 5.58835 27.6347 C 4.95085 29.0753 4.59435 30.6962 4.5993 32.41 Z M 36.1661 24.0703 C 40.3083 24.0703 43.6662 27.7888 43.6662 32.3758 C 43.6662 36.9629 40.3083 40.6814 36.1661 40.6814 C 32.0238 40.6814 28.6659 36.9629 28.6659 32.3758 C 28.6659 27.7888 32.0239 24.0703 36.1661 24.0703 Z M 14.3106 24.0703 C 18.4528 24.0703 21.8107 27.7888 21.8107 32.3758 C 21.8107 36.9629 18.4528 40.6814 14.3106 40.6814 C 10.1684 40.6814 6.81046 36.9629 6.81046 32.3758 C 6.81046 27.7888 10.1684 24.0703 14.3106 24.0703 Z" />
     <path d="M 11.3541 29.5565 C 11.8224 30.5662 12.0612 31.6706 12.3523 32.7518 C 12.6153 33.7287 12.9776 34.703 13.5203 35.4889 C 14.4237 36.7968 15.6916 37.7026 17.1136 38.0962 C 18.9441 36.9939 20.1867 34.8456 20.1867 32.3759 C 20.1867 28.7821 17.5558 25.8688 14.3106 25.8688 C 12.6687 25.8688 11.1844 26.6148 10.1183 27.817 C 10.6323 28.2833 11.0417 28.8829 11.3541 29.5565 Z" />
     <path d="M 33.3042 29.5075 C 33.7725 30.5172 34.0113 31.6216 34.3024 32.7028 C 34.5654 33.6797 34.9277 34.654 35.4704 35.4398 C 36.3738 36.7478 37.6417 37.6536 39.0637 38.0472 C 40.8942 36.9449 42.1368 34.7966 42.1368 32.3269 C 42.1368 28.7331 39.5059 25.8198 36.2607 25.8198 C 34.6188 25.8198 33.1345 26.5658 32.0683 27.768 C 32.5824 28.2343 32.9919 28.8339 33.3042 29.5075 Z" />
   </g>
   </svg>  
 </button>

 <button ${w2utils.tooltip(paletteIconDescription("drawing"), { position: 'left', className: 'w2ui-light' })}
 id='drawing-button' class="el-button" data-toggle="tooltip">
     <svg xmlns="http://www.w3.org/2000/svg" id="drawing" width="45" height="45" viewBox="0 0 1000 1000">
        <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M8327.9,4986.5c-55.4-13.8-148.3-49.4-207.6-77.1c-63.3-31.6-871.8-686-2050.1-1656.7L4124.8,1649.4l-219.4-5.9c-363.8-11.9-680.1-118.6-962.8-328.2C2559.1,1032.6,1710.9,22.4,1198.9-760.5c-553.5-844.1-771-1435.3-666.2-1816.8c33.6-128.5,191.8-276.8,340-324.2c154.2-47.4,440.9-45.4,717.6,7.9c599,114.7,1656.7,557.5,2540.4,1063.6c761.1,433,988.5,610.9,1194.1,929.2c130.5,201.7,249.1,527.8,249.1,686c0,55.3,140.4,175.9,1975,1686.3C9626.7,3183.5,9616.8,3173.6,9697.9,3397c83,227.4,71.2,482.4-29.6,697.9c-59.3,128.5-318.3,464.6-496.2,644.5C8950.6,4964.8,8626.4,5057.7,8327.9,4986.5z M8814.2,4626.7c83-43.5,154.2-114.7,316.3-310.4c114.7-140.4,231.3-294.6,257-346c100.8-197.7,69.2-456.7-77.1-620.8c-63.3-73.1-2773.7-2322.9-2860.7-2374.3c-15.8-9.9-203.6,207.6-549.6,642.5c-498.2,620.8-525.9,658.3-490.3,688c19.8,15.8,636.6,523.9,1370,1126.9C8292.3,4678.1,8231,4628.7,8333.8,4668.2C8460.3,4715.7,8685.7,4697.9,8814.2,4626.7z M5643.1,1443.8c272.8-342,506.1-638.6,518-656.3c23.7-31.6-5.9-61.3-266.9-274.8c-160.1-132.5-298.5-241.2-308.4-243.2c-11.9,0-33.6,59.3-51.4,134.4c-110.7,466.6-474.5,901.5-917.3,1093.3c-59.3,25.7-108.7,53.4-104.8,61.3c5.9,19.8,606.9,510,622.7,508.1C5143,2066.5,5372.3,1785.8,5643.1,1443.8z M4219.7,1307.4c225.4-47.4,480.4-185.8,648.4-351.9c257-253.1,387.5-543.7,405.3-895.6c15.8-346-90.9-670.2-308.4-929.2c-191.8-231.3-737.4-583.2-1516.3-976.6c-921.3-466.6-1688.3-743.4-2172.7-782.9c-316.3-25.7-316.3-25.7,85,304.5C3571.3-511.4,4170.3-11.3,4192,38.2c49.4,114.7-77.1,247.1-189.8,195.7C3941,206.2,837.1-2350,823.3-2383.6c-25.7-61.3-9.9,158.2,17.8,264.9c156.2,605,1079.4,1973,1919.6,2844.8c237.2,245.1,407.2,385.5,561.5,462.6c92.9,47.4,304.4,120.6,393.4,134.4C3830.2,1343,4091.2,1335.1,4219.7,1307.4z"/><path d="M5583.8-2792.9c-446.8-81-838.2-213.5-1500.5-506.1c-907.4-399.4-1468.9-571.4-2058-626.7c-778.9-73.1-1316.7,207.6-1463,765.1c-35.6,138.4-75.1,187.8-152.2,187.8c-79.1,0-132.5-31.6-156.2-90.9c-25.7-69.2,23.7-270.8,108.7-436.9c421.1-836.3,1536.1-972.7,3125.6-381.6c152.2,57.3,468.5,187.8,701.8,290.6c881.7,391.4,1356.2,523.9,1858.4,525.8c510,4,830.3-166,1016.2-535.7c114.7-227.4,156.2-433,158.2-800.7c2-304.5,3.9-314.4,49.4-351.9c61.3-51.4,126.5-47.5,193.7,9.9c55.4,47.4,55.4,51.4,63.3,308.4c7.9,310.4-19.8,521.9-98.9,761.1c-148.3,442.8-464.6,751.2-897.5,871.8C6348.9-2751.3,5836.9-2745.4,5583.8-2792.9z"/></g></g>
     </svg>
 </button>
</fieldset>
</div>
`
metaFieldset=`
<div id="metaPalette" style="display:block;">
<fieldset id='meta-fieldset'>
<legend>Meta</legend>

<button ${w2utils.tooltip(paletteIconDescription("viewpoint"), { position: 'left', className: 'w2ui-light' })}
id='viewpoint-button' class="el-button" data-toggle="tooltip" >
 <svg xmlns="http://www.w3.org/2000/svg" id="viewpoint" width="50" height="50" viewBox="0 0 50 50">
   <g>
     <ellipse fill="#d77165" cx="25.241198" cy="24.139919" id="circle285" rx="16.291594" ry="16.601191" style="stroke-width:0.938145" />
     <path fill="#525354" d="m 25.241198,17.791098 c -6.363951,0 -11.455055,5.445915 -12.340917,6.435075 -0.07862,0.08873 -0.07862,0.217719 0,0.306549 0.885862,0.989064 5.976966,6.43498 12.340917,6.43498 6.363857,0 11.455054,-5.445916 12.340916,-6.43498 0.07862,-0.08883 0.07862,-0.217814 0,-0.306549 -0.885862,-0.98916 -5.977059,-6.435075 -12.340916,-6.435075 z" id="path287" style="stroke-width:0.938145" />
     <path fill="#fff" d="m 25.241198,17.551692 c -6.363951,0 -11.455055,5.445916 -12.340917,6.43498 -0.07862,0.08873 -0.07862,0.217719 0,0.306549 0.885862,0.989065 5.976966,6.43498 12.340917,6.43498 6.363857,0 11.455054,-5.445915 12.340916,-6.43498 0.07862,-0.08883 0.07862,-0.217814 0,-0.306549 -0.885862,-0.989064 -5.977059,-6.43498 -12.340916,-6.43498 z" id="path289" style="stroke-width:0.938145" />
     <ellipse fill="#a4d5dc" cx="25.241198" cy="24.139919" id="circle291" rx="6.745738" ry="6.8739309" style="stroke-width:0.938145" />
     <ellipse fill="#525354" cx="25.241198" cy="24.139919" id="circle293" rx="3.3092299" ry="3.3721168" style="stroke-width:0.938145" />
     <ellipse fill="#d7dadb" cx="26.768534" cy="23.181973" id="circle295" rx="0.5091123" ry="0.51878721" style="stroke-width:0.938145" />
   </g>
 </svg>
 </button>

 <button ${w2utils.tooltip(paletteIconDescription("not-defined"), { position: 'left', className: 'w2ui-light' })}
 id='not-defined-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="not_defined" width="25" height="25" viewBox="0 0 25 25">
     <rect x="0" y="0" width="25" height="25" fill="red"></rect>
   </svg>
  </button>
   
 <button ${w2utils.tooltip(paletteIconDescription("extensions"), { position: 'left', className: 'w2ui-light' })}
 id='extensions-button'  class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="extensions" width="45" height="45" viewBox="0 0 1000 1000">
      <g><path d="M63.7,990c-6.1,0-12.3-1.2-18.3-3.5c-23.4-9.4-37.9-35.3-35.1-62.7C44,592.5,265.6,324.3,556.4,255.1V69.6c0-24.1,13.1-45.8,33.1-55c20-9.2,43.1-4.2,58.5,12.8l326.1,359.8c10.2,11.2,15.8,26.5,15.8,42.4c0,15.9-5.8,31.1-16,42.3L647.8,828.1c-15.5,16.9-38.5,21.8-58.4,12.5c-20-9.3-33-30.9-33-55V618.3c-182.8,46.5-343.7,169.6-447.8,344.9C98.4,980.3,81.4,990,63.7,990z M663.9,212.9v92c0,29.6-19.6,54.7-46,59c-184,29.7-339.5,152.4-427.3,323.4C307.8,581.5,450,511.7,602.6,487.8c15.3-2.4,31,2.7,42.7,14s18.5,27.7,18.5,45v96.5l196-214.1L663.9,212.9z"/></g>
   </svg>
 </button>
   
 <button ${w2utils.tooltip(paletteIconDescription("relations"), { position: 'left', className: 'w2ui-light' })}
 id='relations-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="relations" width="45" height="45" viewBox="0 0 1000 1000">
     <g><path d="M368.9,787.4l-49.6,49.3c-42.9,42.6-112.9,42.6-155.9,0c-20.6-20.5-31.9-47.7-31.9-76.7c0-29,11.4-56.1,31.9-76.7l182.5-181c37.8-37.5,109-92.8,160.8-41.3c23.8,23.6,62.2,23.5,85.9-0.3c23.6-23.8,23.5-62.3-0.4-85.9c-88.1-87.5-218.4-71.3-331.9,41.3L77.9,597.3C34.1,640.7,10,698.6,10,760.1c0,61.6,24.1,119.4,67.9,162.8c45.1,44.7,104.2,67.1,163.5,67.1s118.5-22.4,163.5-67.1l49.7-49.3c23.8-23.6,23.9-62,0.3-85.8C431.1,764,392.7,763.9,368.9,787.4z M922.1,84C827.3-9.9,694.9-15,607.3,72l-61.8,61.4c-23.8,23.6-24,62-0.4,85.8c23.6,23.8,62,23.9,85.9,0.3l61.9-61.3c45.3-45.1,104.8-26.4,143.7,12.1c20.6,20.5,32,47.7,32,76.7c0,29-11.4,56.2-32,76.6L641.8,516.7C552.7,605,511,563.6,493.1,545.9c-23.8-23.6-62.2-23.5-85.8,0.3c-23.6,23.8-23.5,62.3,0.3,85.8c40.9,40.5,87.6,60.6,136.5,60.6c59.8,0,123.1-30.1,183.3-89.9l194.8-193.1c43.6-43.5,67.8-101.3,67.8-162.8C990,185.3,965.8,127.5,922.1,84z"/></g>
   </svg>
 </button>
   
   
 <button ${w2utils.tooltip(paletteIconDescription("metamodel"), { position: 'left', className: 'w2ui-light' })}
 id='metamodel-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="metamodel" width="45" height="45" viewBox="0 0 1000 1000">
     <g><path d="M498.7,351.9L44.9,198.3c-48.9-14-41.9-69.8,0-83.8L498.7,9.9l453.8,104.7c48.9,14,48.9,69.8,7,83.8L498.7,351.9z M121.7,163.4l377,118.7l370-111.7l-370-83.8L121.7,163.4z"/><path d="M366,980.2L51.9,826.6C24,819.6,10,798.7,10,770.8V351.9c0-48.9,48.9-83.8,97.7-62.8l363,125.7v509.6C463.8,973.2,407.9,1008.1,366,980.2z M79.8,770.8l321.1,146.6V463.6L79.8,351.9V770.8z"/><path d="M533.6,917.4V414.8l356-125.7c48.9-14,97.7,14,97.7,69.8v411.9c0,27.9-14,48.9-41.9,62.8L638.3,980.2C589.4,1008.1,533.6,973.2,533.6,917.4z M603.4,463.6v460.7l314.1-146.6V358.9L603.4,463.6z"/></g>
   </svg>
 </button>
 
 <button ${w2utils.tooltip(paletteIconDescription("layer"), { position: 'left', className: 'w2ui-light' })}
 id='layer-button' class="el-button" data-toggle="tooltip">
   <svg xmlns="http://www.w3.org/2000/svg" id="layer" width="50" height="50" viewBox="0 0 50 50">
       <path d="M 42.1934 30.242 L 36.6212 27.5362 L 42.1933 24.8308 C 42.4002 24.7304 42.5257 24.5549 42.5257 24.3661 C 42.5257 24.1773 42.4002 24.0017 42.1933 23.9013 L 36.6211 21.1954 L 42.193 18.4899 C 42.3999 18.3894 42.5254 18.2139 42.5254 18.0251 C 42.5254 17.8363 42.3999 17.6608 42.193 17.5604 L 24.6142 9.02459 C 24.3835 8.91248 24.0898 8.91248 23.8589 9.02459 L 6.28012 17.5604 C 6.07329 17.6609 5.94777 17.8363 5.94777 18.0251 C 5.94777 18.2139 6.07329 18.3895 6.28012 18.4899 L 11.8519 21.1954 L 6.28031 23.9013 C 6.07348 24.0017 5.94806 24.1772 5.94806 24.366 C 5.94806 24.5548 6.07358 24.7304 6.28041 24.8308 L 11.852 27.5361 L 6.28041 30.2421 C 6.07358 30.3425 5.94815 30.518 5.94815 30.7068 C 5.94815 30.8956 6.07367 31.0712 6.2805 31.1716 L 23.8589 39.7069 C 23.9744 39.7629 24.1054 39.7909 24.2365 39.7909 C 24.3676 39.7909 24.4987 39.7629 24.6141 39.7069 L 42.1934 31.1715 C 42.4003 31.0711 42.5258 30.8956 42.5258 30.7068 C 42.5258 30.518 42.4003 30.3424 42.1934 30.242 Z M 7.99244 18.0251 L 24.2366 10.1375 L 40.4807 18.0251 L 24.2366 25.9128 Z M 7.99263 24.3659 L 13.1865 21.8435 L 23.8589 27.0257 C 23.9743 27.0817 24.1054 27.1098 24.2365 27.1098 C 24.3676 27.1098 24.4987 27.0817 24.6141 27.0257 L 35.2863 21.8436 L 40.4808 24.3659 L 24.2364 32.2532 Z M 24.2364 38.5939 L 7.99263 30.7067 L 13.1866 28.1841 L 23.8588 33.3661 C 23.9743 33.4221 24.1053 33.4501 24.2364 33.4501 C 24.3675 33.4501 24.4987 33.4221 24.614 33.3661 L 35.2864 28.1843 L 40.481 30.7067 Z"/>
   </svg>
   </button>
   
 <button ${w2utils.tooltip(paletteIconDescription("model"), { position: 'left', className: 'w2ui-light' })}
 id='model-button' class="el-button" data-toggle="tooltip">
   <svg xmlns="http://www.w3.org/2000/svg" id="model" width="50" height="50" viewBox="0 0 50 50">
       <path d="M 8.3086096,40.340086 V 8.520784 H 19.355281 l 4.971001,4.454702 h 17.674673 v 27.3646 z" stroke="#4f4f4f" fill="none" style="stroke-width:0.592872" />
       <path d="M 29.5142 29.7183 L 27.9738 29.7183 L 27.9738 22.4981 L 24.753 27.411 L 23.835 27.411 L 20.6375 22.4981 L 20.6375 29.7183 L 19.1983 29.7183 L 19.1983 21.3388 L 21.2988 21.3388 L 24.3873 26.0041 L 27.3747 21.3388 L 29.5142 21.3388 Z"/>
   </svg>
 </button>
 
 <button ${w2utils.tooltip(paletteIconDescription("folder"), { position: 'left', className: 'w2ui-light' })}
 id='folder-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="folder" width="50" height="50" viewBox="0 0 50 50">
       <g style="stroke-width:0.338775"> <g aria-label="F"  style="font-size:24.0056px;stroke-width:0.203312">
          <path d="M 31.0309 19.8665 L 22.7574 19.8665 L 22.7574 25.1185 L 29.8663 25.1185 L 29.8663 27.3193 L 22.7574 27.3193 L 22.7574 36.2851 L 20.5819 36.2851 L 20.5819 17.6657 L 31.0309 17.6657 Z"/>
          <path d="M 8.3086096,40.340086 V 8.520784 H 19.355281 l 4.971001,4.454702 h 17.674673 v 27.3646 z" stroke="#4f4f4f" fill="none"  style="stroke-width:0.592872" />
     </g></g>
   </svg>
 </button>
   
 <button ${w2utils.tooltip(paletteIconDescription("package"), { position: 'left', className: 'w2ui-light' })}
 id='package-button' class="el-button" data-toggle="tooltip" >
   <svg xmlns="http://www.w3.org/2000/svg" id="package" width="50" height="50" viewBox="0 0 50 50">
     <g> 
       <g style="stroke-width:0.2438405344766065">
          <path d="M 27.3323 24.7231 C 27.3323 24.9909 27.2671 25.2398 27.1367 25.4697 C 27.01 25.697 26.8311 25.8944 26.6001 26.0622 C 26.3131 26.2705 25.974 26.4274 25.5828 26.5329 C 25.1915 26.6357 24.6977 26.6871 24.1015 26.6871 L 22.9948 26.6871 L 22.9948 28.9391 L 21.888 28.9391 L 21.888 22.8971 L 24.1462 22.8971 C 24.6456 22.8971 25.0685 22.9282 25.4151 22.9904 C 25.7616 23.0499 26.0691 23.1446 26.3374 23.2745 C 26.6541 23.4287 26.8982 23.6207 27.0696 23.8507 C 27.2447 24.0806 27.3323 24.3714 27.3323 24.7231 Z M 26.1809 24.7434 C 26.1809 24.5351 26.1305 24.3538 26.0299 24.1996 C 25.9293 24.0455 25.7765 23.9197 25.5716 23.8223 C 25.3927 23.7384 25.1878 23.6789 24.9567 23.6437 C 24.7294 23.6059 24.4406 23.5869 24.0903 23.5869 L 22.9948 23.5869 L 22.9948 26.0013 L 23.9282 26.0013 C 24.3754 26.0013 24.7387 25.9729 25.0182 25.9161 C 25.2977 25.8566 25.525 25.7632 25.7001 25.6361 C 25.8753 25.5062 25.9983 25.3696 26.0691 25.2263 C 26.1436 25.0829 26.1809 24.9219 26.1809 24.7434 Z" style="stroke-width:0.2438405344766065" /></g>
       <path d="M 8.3086096,40.340086 V 8.520784 H 19.355281 l 4.971001,4.454702 h 17.674673 v 27.3646 z" stroke="#4f4f4f" fill="none" style="stroke-width:0.592872" />
     </g>
   </svg>
 </button>  
</fieldset>
</div>
`

globalPalette =globalPalette +metaFieldset+visualFieldset;