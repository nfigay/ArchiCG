// Replace $$ToolName$$ in the code and save as tool$$ToolName$$.js in the cytoscape javascript library
toolName="$$ToolName$$"
tools=tools.concat([toolName]);
console.log(`${toolName} Loaded`);

var toolbarURL$$ToolName$$Definition={
    name: toolName,
    style   : 'background-color: white',
    items: [
      { type: 'button', id: `${toolName}`, text: `Welcome ${toolName}`  },
      { type: 'new-line' },
      { type: 'html',  id: `HMTL_${toolName}`, 
         html(item) {
           let html =
            '<div style=" height: 20px;display: flex;align-items: center;">'+
            ' Tool Name : '+
            `<input id="${toolName}_name" style="color:blue;" value='${ToolName}' size="20" ></input>`+
            '</div>'
        return html
         }
      }
         
    ]  ,
    onClick: function(event) {

      if (event.target==`${toolName}`){ 
           alert (`Welcome`)
        };
    }
}

config.toolbar$$ToolName$$Definition=toolbar$ToolName$$Definition;

