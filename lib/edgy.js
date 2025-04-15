edgyFieldsets=["edgy"];
var acg_Edgy=["edgyarchitecture", "edgybrand", "edgyexperience", "edgyidentity", "edgyorganisation", "edgypeople", "edgyproduct", "edgyactivity"];
acgTypes=acgTypes.concat(acg_Edgy);

multiLanguagespaletteStructure.push(
    {id:"edgyPalette", name:"Edgy Palette",visible:true, activated:true, data:{fieldSets:acg_Edgy}});

fieldSetsList=fieldSetsList.concat(acg_Edgy)
console.log(fieldSetsList)

const edgyarchitecture_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy Architecture</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy architecture is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`

const edgybrand_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy Brand</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy brand is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`
const edgyexperience_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy Experience</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy experience is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`
const edgyidentity_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy Identity</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy identity is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`

const edgyorganisation_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy Organisation</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy organisation  is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`

const edgypeople_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy People</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy people  is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`

const edgyproduct_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy Product</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy Product  is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`

const edgyactivity_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Edgy Activity</h2></div>
<div class="description"><strong>Description: </strong></div>
Edgy Activity is ...
<div class ="categories"><strong>Categories: </strong>TBD</div>
<div class="examples"><strong>Examples: </div>
</strong></div>TBD</div>
`
function edgyarchitecture_svg() {  return "data:image/svg+xml;base64," + btoa(edgyarchitecture.outerHTML); }
function edgybrand_svg() {  return "data:image/svg+xml;base64," + btoa(edgybrand.outerHTML); }
function edgyexperience_svg() {  return "data:image/svg+xml;base64," + btoa(edgyexperience.outerHTML); }
function edgyidentity_svg() {  return "data:image/svg+xml;base64," + btoa(edgyidentity.outerHTML); }
function edgyorganisation_svg() {  return "data:image/svg+xml;base64," + btoa(edgyorganisation.outerHTML); }
function edgypeople_svg() {  return "data:image/svg+xml;base64," + btoa(edgypeople.outerHTML); }
function edgyproduct_svg() {  return "data:image/svg+xml;base64," + btoa(edgyproduct.outerHTML); }
function edgyactivity_svg() {  return "data:image/svg+xml;base64," + btoa(edgyactivity.outerHTML); }

function Edgy(type) {
    const rectangle = "rectangle";
    switch (type) {
      case "edgyarchitecture"          :return edgyarchitecture_svg();
      case "edgybrand"                 :return edgybrand_svg();
      case "edgyexperience"            :return edgyexperience_svg();
      case "edgyidentity"              :return edgyidentity_svg(); 
      case "edgyorganisation"          :return edgyorganisation_svg();
      case "edgypeople"                :return edgypeople_svg();
      case "edgyproduct"               :return edgyproduct_svg();
      case "edgyactivity"              :return edgyactivity_svg();                     
      default                          :return not_defined_svg();
    }
  }

edgyFieldSet=`
<div id="edgyPalette">
<fieldset id='meta-fieldset'>
  <legend onclick="alert('Edgy Palette')">Edgy</legend>
  
  <button ${w2utils.tooltip(paletteEdgyIconDescription("edgyarchitecture"), { position: 'left', className: 'w2ui-light' })}
  id='edgyarchitecture-button' class="el-button" data-toggle="tooltip" >
  <svg id="edgyarchitecture" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
  <g ><g><rect fill="none" opacity=".1" width="32" height="32"/>
  <path fill="#fff" d="m16,1.172l-1.414,1.414L4.586,12.586l-.586.586v16.328h24V13.172l-.586-.586L17.414,2.586l-1.414-1.414h0Z"/>
  <polygon fill="#034cee" points="26 14 16 4 6 14 6 27.5 26 27.5 26 14"/></g></g></svg>
  </button>  
  
  <button ${w2utils.tooltip(paletteEdgyIconDescription("edgybrand"), { position: 'left', className: 'w2ui-light' })}
  id='edgybrand-button' class="el-button" data-toggle="tooltip" >
  <svg id="edgybrand" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
  <g><g><rect fill="none" opacity=".1" width="32" height="32"/>
  <path fill="#fff" d="m21.988,1.544l-1.948.885-4.04,1.836-4.04-1.836-1.948-.885-.752,2.004-1.559,4.154-4.154,1.559-2.004.752.885,1.948,1.836,4.04-1.836,4.04-.885,1.948,2.004.752,4.154,1.559,1.559,4.154.752,2.004,1.948-.885,4.04-1.836,4.04,1.836,1.948.885.752-2.004,1.559-4.154,4.154-1.559,2.004-.752-.885-1.948-1.836-4.04,1.836-4.04.885-1.948-2.004-.752-4.154-1.559-1.559-4.154-.752-2.004h0Z"/>
  <polygon fill="orange" points="16 6.461 20.867 4.25 22.745 9.255 27.75 11.133 25.539 16 27.75 20.867 22.745 22.745 20.867 27.75 16 25.539 11.133 27.75 9.255 22.745 4.25 20.867 6.461 16 4.25 11.133 9.255 9.255 11.133 4.25 16 6.461"/>
  <path fill="#fff" d="m16,10c3.314,0,6,2.686,6,6s-2.686,6-6,6-6-2.686-6-6,2.686-6,6-6m0-2c-4.411,0-8,3.589-8,8s3.589,8,8,8,8-3.589,8-8-3.589-8-8-8h0Z"/></g></g></svg>
  </button>  
  
  <button ${w2utils.tooltip(paletteEdgyIconDescription("edgyexperience"), { position: 'left', className: 'w2ui-light' })}
  id='edgyexperience-button' class="el-button" data-toggle="tooltip" >
  <svg id="edgyexperience" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
  <g ><g><rect fill="none" opacity=".1" width="32" height="32"/><g>
  <path fill="#fff" d="m21.167,3.282c-2.38,0-3.944.802-5.167,1.871-1.223-1.07-2.787-1.871-5.167-1.871-.385,0-.793.021-1.214.062-1.666.163-3.266.981-4.506,2.303-1.363,1.453-2.177,3.399-2.356,5.628l-.006.08v.88l.006.078c.166,2.129,1.221,4.282,3.419,6.983,1.875,2.304,4.502,4.929,7.826,8.252l.584.584,1.414,1.414,1.414-1.414.587-.587c3.324-3.322,5.949-5.947,7.824-8.25,2.198-2.7,3.253-4.854,3.419-6.982l.006-.078v-.88l-.006-.08c-.179-2.228-.994-4.174-2.357-5.628-1.24-1.323-2.841-2.141-4.507-2.303-.42-.041-.829-.062-1.213-.062h0Z"/>
  <path fill="#ff0056" d="m21.167,5.282c.318,0,.657.017,1.019.052,2.204.215,4.753,2.233,5.064,6.101v.722c-.289,3.701-4.329,7.639-11.25,14.56-6.921-6.921-10.961-10.859-11.25-14.56v-.722c.31-3.867,2.859-5.886,5.063-6.101.362-.035.701-.052,1.019-.052,2.547,0,3.769,1.101,5.167,2.767,1.399-1.667,2.62-2.767,5.167-2.767Z"/></g></g></g></svg>
  </button>  

  <button ${w2utils.tooltip(paletteEdgyIconDescription("edgyidentity"), { position: 'left', className: 'w2ui-light' })}
  id='edgyidentity-button' class="el-button" data-toggle="tooltip" >
  <svg id="edgyidentity" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
  <g><g><rect fill="none" opacity=".1" width="32" height="32"/>
  <path fill="#fff" d="m17,2c-6.617,0-12,5.383-12,12,0,2.613.84,5.034,2.264,7.006-2.372.123-4.264,2.092-4.264,4.494,0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5c0-.208-.015-.412-.043-.613,1.534.713,3.243,1.113,5.043,1.113,6.617,0,12-5.383,12-12S23.617,2,17,2Z"/>
  <circle fill="#00ea4e" cx="17" cy="14" r="10"/>
  <circle fill="#00ea4e" cx="7.5" cy="25.5" r="2.5"/></g></g></svg>
  </button> 

  <button ${w2utils.tooltip(paletteEdgyIconDescription("edgyorganisation"), { position: 'left', className: 'w2ui-light' })}
  id='edgyorganisation-button' class="el-button" data-toggle="tooltip" >
  <svg id="edgyorganisation" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
  <g><g><rect fill="none" opacity=".1"  width="32" height="32"/>
  <path fill="#fff" d="m24.711,17.044l-3.293-5.968c.373-.781.582-1.654.582-2.575,0-3.308-2.692-6-6-6s-6,2.692-6,6c0,.921.209,1.794.582,2.575l-3.293,5.968c-2.974.353-5.289,2.889-5.289,5.956,0,3.308,2.692,6,6,6,2.003,0,3.778-.987,4.869-2.5h6.262c1.09,1.513,2.866,2.5,4.869,2.5,3.308,0,6-2.692,6-6,0-3.068-2.315-5.603-5.289-5.956Zm-8.711-1.298l2.072,3.755h-4.143l2.072-3.755Z"/>
  <path fill="#00caf4" d="m24,19c-.162,0-.321.011-.478.029l-4.418-8.008c.56-.688.896-1.566.896-2.522,0-2.209-1.791-4-4-4s-4,1.791-4,4c0,.956.336,1.834.896,2.522l-4.418,8.008c-.157-.019-.316-.029-.478-.029-2.209,0-4,1.791-4,4s1.791,4,4,4c1.679,0,3.115-1.034,3.708-2.5h8.584c.594,1.466,2.03,2.5,3.708,2.5,2.209,0,4-1.791,4-4s-1.791-4-4-4Zm-12.896,1.478l4.418-8.008c.157.019.316.029.478.029s.321-.011.478-.029l4.418,8.008c-.249.306-.453.65-.604,1.022h-8.584c-.15-.372-.355-.715-.604-1.022Z"/></g></g></svg>
  </button>

  <button ${w2utils.tooltip(paletteEdgyIconDescription("edgypeople"), { position: 'left', className: 'w2ui-light' })}
  id='edgypeople-button' class="el-button" data-toggle="tooltip" >
  <svg id="edgypeople" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
  <g><g><rect opacity="0" width="32" height="32"/><g>
  <rect fill="#fff" x="11" y="4" width="10" height="14" rx="5" ry="5"/>
  <path fill="#262626" d="m16,19c-3.308,0-6-2.692-6-6v-4c0-3.308,2.692-6,6-6s6,2.692,6,6v4c0,3.308-2.692,6-6,6Zm0-14c-2.206,0-4,1.794-4,4v4c0,2.206,1.794,4,4,4s4-1.794,4-4v-4c0-2.206-1.794-4-4-4Z"/></g><g>
  <path fill="#fff" d="m4,29v-2.5c0-2.75,2.25-5,5-5h14c2.75,0,5,2.25,5,5v2.5H4Z"/>
  <path fill="#262626" d="m29,30H3v-3.5c0-3.308,2.692-6,6-6h14c3.308,0,6,2.692,6,6v3.5Zm-24-2h22v-1.5c0-2.206-1.794-4-4-4h-14c-2.206,0-4,1.794-4,4v1.5Z"/></g></g></g></svg>
  </button>

  <button ${w2utils.tooltip(paletteEdgyIconDescription("edgyproduct"), { position: 'left', className: 'w2ui-light' })}
  id='edgyproduct-button' class="el-button" data-toggle="tooltip" >
  <svg id="edgyproduct" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
  <g><g><rect fill="none" opacity=".1"  width="32" height="32"/>
  <polygon fill="#cf00ff" points="26 21.774 26 10.227 16 4.453 6 10.226 6 21.773 16 27.547 26 21.774"/>
  <path fill="#fff" d="m27,8.494l-10-5.773-1-.577-1,.577-10,5.773-1,.577v13.856l1,.577,10,5.773,1,.577,1-.577,10-5.773,1-.577v-13.856l-1-.577Zm-20.959,1.709l-.041.07v-.047l.041-.023Z"/>
  <polygon fill="#cf00ff" points="16 4.453 25.041 9.673 16 14.892 6.959 9.673 16 4.453"/>
  <polygon fill="#cf00ff" points="6 21.773 6 11.428 15 16.624 15 26.97 6 21.773"/>
  <polygon fill="#cf00ff" points="17 26.97 17 16.624 26 11.428 26 21.773 17 26.97"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteEdgyIconDescription("edgyactivity"), { position: 'left', className: 'w2ui-light' })}
id='edgyactivity-button' class="el-button" data-toggle="tooltip" >
<svg id="edgyactivity" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 125.166 82">
<g><polygon fill="#fff" stroke="#262626" stroke-miterlimit="10" stroke-width="2px" points="100 81 1 81 1 1 100 1 124 41 100 81"/></g></svg>
</button>
</div>

</fieldset>`

//document.getElementById('palette').appendChild(edgyFieldSet);
globalPalette =globalPalette +edgyFieldSet;

function paletteEdgyIconDescription(object){
    switch (object) {
    case "edgyarchitecture":if (paletteTooltipsOn){return edgyarchitecture_html } else {return "Edgy Architecture"};break;
    case "edgybrand":if (paletteTooltipsOn){return edgybrand_html } else {return "Edgy Brand"};break;
    case "edgyexperience":if (paletteTooltipsOn){return edgyexperience_html } else {return "Edgy Experience"};break;
    case "edgyidentity":if (paletteTooltipsOn){return edgyidentity_html } else {return "Edgy Identity"};break;
    case "edgyorganisation":if (paletteTooltipsOn){return edgyorganisation_html } else {return "Edgy Organisation"};break;
    case "edgypeople":if (paletteTooltipsOn){return edgypeople_html } else {return "Edgy People"};break;
    case "edgyproduct":if (paletteTooltipsOn){return edgyproduct_html } else {return "Edgy Product"};break;
    case "edgyactivity":if (paletteTooltipsOn){return edgyactivity_html } else {return "Edgy Activity"};break;
}
}
console.log("Edgy added to ACG")

