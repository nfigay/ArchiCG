tools=tools.concat(["URLNavigation"]);
console.log("URL Navigation Loaded");
var toolbarURLNavigationDefinition={
    name: 'URLNavigation',
    style   : 'background-color: white',
    items: [
      { type: 'button', id: 'URLNavigationActive', text: 'Activate Navigation' },
      { type: 'new-line' },
      { type: 'html',  id: 'URLProperty', 
      html(item) {
        let html =
            '<div style=" height: 20px;display: flex;align-items: center;">'+
            ' URL property : '+
            `<input id="url_property" style="color:blue;" value='${URLProperty}' size="20" ></input>`+
            '</div>'
        return html
    }
  },
  { type: 'button', id: 'URLPropertyApply', text: '>>' },
         
    ]  ,
    onClick: function(event) {

      if (event.target=="URLNavigationActive"){ 
        if (URLNavigationActivated){URLNavigationActivated=false}
          else{URLNavigationActivated=true}
           alert ("URL navigation set to " + URLNavigationActivated)
        };
      if (event.target=="URLPropertyApply"){
        URLProperty=document.getElementById('url_property').value;
        alert ("Property containing URL set to " + URLProperty)
    }
    }
}

config.toolbarURLNavigationDefinition=toolbarURLNavigationDefinition;

