(function ui_iffe(global) {
    // Initialize the W2UI interface
    const ui_config = {
        layoutNodeCreation: {
            name: 'layoutNodeCreation',
            padding: 0,
            panels: [{ type: 'main', minSize: 350, overflow: 'hidden' }]
        },

        formNodeCreation: {
            name: 'formNodeCreation',
            style: 'opacity:1;background-color:white;color:black',
            fields: [
                //{ field: 'id', type: 'text', disabled:true,  html: { label: 'id:', attr: 'size="128" ',attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"'  } },
                { field: 'type', type: 'text', disabled: false, html: { label: 'type:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'parent', type: 'text', disabled: false, html: { label: 'parent:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'specialization', type: 'text', disabled: false, html: { label: 'specialization:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'label', type: 'text', disabled: false, html: { label: 'Label:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'description', disabled: false, type: 'textarea', html: { label: 'Description', attr: 'size="128"', attr: 'style="width: 100%; height: 90px; resize: vertical;background-color: white;opacity:1;color:black"' } },
            ],
            actions: {
                create: function () {
                    var myId = w2ui.formNodeCreation.getValue("id"); //log(myId);  
                    var myUUID = new UUID(4);
                    var eles = cy.add([
                        {
                            group: 'nodes',
                            data: {
                                id: `${myUUID}`,//new Date().getTime() ,
                                timestamp: new Date(),
                                parent: w2ui.formNodeCreation.getValue("parent"),
                                //type:document.getElementById('nodeType').value,
                                "type": w2ui.formNodeCreation.getValue("type"),
                                //type:document.getElementById('nodeType').value,
                                //"label": document.getElementById('label').value,
                                "label": w2ui.formNodeCreation.getValue("label"),
                                "description": w2ui.formNodeCreation.getValue("description"),
                                specialization: w2ui.formNodeCreation.getValue("specialization"),
                                position: { x: 100, y: 100 }
                            }
                        }
                    ]);
                    api.collapseAll();
                }
            }
        },

        layoutProperties: {
            name: 'layoutProperties',
            padding: 0,
            panels: [
                { type: 'left', size: 200, resizable: true, minSize: 35 },
                { type: 'main', minSize: 550, overflow: 'hidden' }
            ]
        },
        layoutToolbars: {
            name: 'layoutToolbars',
            padding: 0,
            panels: [
                {
                    title: "Tool: " + selectedTool, type: 'main',
                    size: 200,
                    resizable: true,
                    minSize: 35
                }

            ]
        },

        gridProperties: {
            header: "No graph element selected: double clik on a node or a edge",
            name: 'gridProperties',
            show: {
                header: true,
                toolbar: true,
                footer: true,
                toolbarSave: true
            },
            style: 'border: 1px solid #efefef; padding: 0px;',
            columns: [
                { field: 'recid', text: 'ID', size: '50px', sortable: true, resizable: true },
                { field: 'fname', text: 'Name', size: '30%', sortable: true, searchable: true, editable: { type: 'text' } },
                { field: 'lvalue', text: 'Value', size: '70%', sortable: true, searchable: true, editable: { type: 'text' } },
                // { field: 'ltype', text: 'Property type', size: '20%', sortable: true, searchable: true },
                // { field: 'lunmutable', text: 'Unmutable', size: '20%', sortable: true, searchable: true }
            ],
            toolbar: {
                items: [
                    { id: 'add', type: 'button', text: 'Add Record', icon: 'w2ui-icon-plus' },
                    { id: 'update', type: 'button', text: 'Update Graph', icon: 'w2ui-icon-plus' },
                ],
                onClick: function (event) {
                    if (event.target == 'add') {
                        w2ui.gridProperties.add({ recid: w2ui.gridProperties.records.length + 1 });
                    }
                    if (event.target == 'update') {
                        //get the id  "id" of the active graph element selected by mean of dblclick
                        var myGraphObject = cy.$id(w2ui.form2.getValue("identifier"));

                        //iterate on the records of the grid, each giving name and value
                        // and for each of them, set the cy$(id).data(name) to value
                        // If new value, it will update the node property
                        // If new property, it will add the node property
                        // It should also be possible to deal with deleting properties with several options:
                        //    if the field is blank, then ... (to test)
                        //    if we want to fully remove the property from the name, let's set null in the field
                        //    if we want the property to be undefined, let's set undefined in the field
                        // It should also be checked that the name of the properties are not reserved

                        //cy.$id(w2ui.form.getValue("identifier")).data("label")
                        w2ui.gridProperties.records.map(record => {
                            //log(`${record.recid}-> ${record.fname}:${record.lvalue}`);
                            myGraphObject.data(record.fname, record.lvalue);
                            return 0;
                        })
                        alert("updated");
                    }
                }
            },
        },

        gridAttributes: {
            header: "No graph element selected: double clik on a node or a edge",
            name: 'gridAttributes',
            show: {
                header: true,
                toolbar: true,
                footer: true,
                toolbarSave: true
            },
            style: 'border: 1px solid #efefef',
            columns: [
                { field: 'recid', text: 'ID', size: '50px', sortable: true, resizable: true },
                { field: 'key', text: 'Key', size: '50px', sortable: true, resizable: true, editable: { type: 'text' } },
                { field: 'order', text: 'Order', size: '50px', sortable: true, resizable: true, editable: { type: 'text' } },
                { field: 'AttributeId', text: 'Id', size: '50px', sortable: true, resizable: true, editable: { type: 'text' } },
                { field: 'label', text: 'Label', size: '30%', sortable: true, searchable: true, editable: { type: 'text' } },
                { field: 'type', text: 'Type', size: '30%', sortable: true, searchable: true, editable: { type: 'text' } },
                { field: 'source', text: 'Source', size: '30%', sortable: true, searchable: true, editable: { type: 'text' } },
                { field: 'description', text: 'Description', size: '70%', sortable: true, searchable: true, editable: { type: 'text' } }
            ],
            toolbar: {
                items: [
                    { id: 'add', type: 'button', text: 'Add Record', icon: 'w2ui-icon-plus' },
                    { id: 'update', type: 'button', text: 'Update Graph', icon: 'w2ui-icon-plus' },
                ],
                onClick: function (event) {
                    if (event.target == 'add') {
                        w2ui.gridAttributes.add({ recid: w2ui.gridAttributes.records.length + 1 });
                    }
                    if (event.target == 'update') {
                        //get the id  "id" of the active graph element selected by mean of dblclick
                        var myGraphObject = cy.$id(w2ui.form2.getValue("identifier"));
                        logger.debug("identifier: " + w2ui.form2.getValue("identifier"))
                        //iterate on the records of the grid, each giving name and value
                        // and for each of them, set the cy$(id).data(name) to value
                        // If new value, it will update the node property
                        // If new property, it will add the node property
                        // It should also be possible to deal with deleting properties with several options:
                        //    if the field is blank, then ... (to test)
                        //    if we want to fully remove the property from the name, let's set null in the field
                        //    if we want the property to be undefined, let's set undefined in the field
                        // It should also be checked that the name of the properties are not reserved

                        //cy.$id(w2ui.form.getValue("identifier")).data("label")
                        logger.debug("Data: " + myGraphObject.data("label"));
                        logger.debug("Data: " + myGraphObject.data("attributes"));
                        // logger.debug(myGraphObject.data["attributes"]["record.attributeId"]);
                        w2ui.gridAttributes.records.map(record => {
                            //log(`${record.recid}-> ${record.fname}:${record.lvalue}`);              
                            //var myAttribute={"order":record.attributeorder,"AttributeId":record.attributeId, "label":record.attributelabel, "type":record.attributetype, "source":record.attributesource,"referenceType": record.attributereferencetype,"description": record.attributedescription};
                            //logger.debug ("myAttribute")
                            //logger.debug (myAttribute)
                            //var existingProperties=[];
                            //existingProperties.push({"properties":['property4', 'property5']});
                            //myGraphObject.data('properties', existingProperties);
                            return 0;
                        })
                        alert("updated");
                    }
                }
            },
        },


        gridEdges: {
            header: "No collopased edges selected: double clik on collapsed edges",
            name: 'gridEdges',
            show: {
                header: true,
                toolbar: true,
                footer: true,
                toolbarSave: true
            },
            style: 'border: 1px solid #efefef',
            columns: [
                { field: 'edgeid', text: 'Id', size: '50px', sortable: true, resizable: true },
                { field: 'label', text: 'Label', size: '30%', sortable: true, resizable: true },
                { field: 'source', text: 'Source', size: '30%', sortable: true, resizable: true },
                { field: 'target', text: 'Target', size: '30%', sortable: true, resizable: true },
                { field: 'edgetype', text: 'Type', size: '50px', sortable: true, resizable: true },
                { field: 'specialisation', text: 'Order', size: '50px', sortable: true, resizable: true },
                { field: 'description', text: 'Description', size: '70%', sortable: true, searchable: true }
            ],
            toolbar: {
                items: [
                    { id: 'add', type: 'button', text: 'Add Record', icon: 'w2ui-icon-plus' },
                    { id: 'update', type: 'button', text: 'Update Graph', icon: 'w2ui-icon-plus' },
                ],
                onClick: function (event) {
                    if (event.target == 'add') {
                        logger.info("add")
                    }
                    if (event.target == 'update') {
                        logger.info("updated");
                    }
                }
            },
        },
        form: {
            header: "No graph element selected: double clik on a node or a edge",
            name: 'form',
            show: {
                toolbar: false,
                footer: false,
                toolbarSave: false
            },
            style: 'opacity:1;background-color:white;color:black',
            fields: [
                { field: 'label', type: 'text', disabled: true, html: { label: 'Label:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'description', disabled: true, type: 'textarea', html: { label: 'Description', attr: 'size="128"', attr: 'style="width: 100%; height: 90px; resize: vertical;background-color: white;opacity:1;color:black"' } },
            ],
            actions: {
                reset: function () {
                    w2ui.form.setValue("label", cy.$id(w2ui.form.getValue("identifier")).data("label"));
                    w2ui.form.setValue("description", cy.$id(w2ui.form.getValue("identifier")).data("description"));
                    w2ui.form.refresh();
                },
                save: function () {
                    var myId = w2ui.form2.getValue("identifier");//alert(myId);
                    var myLabel = w2ui.form.getValue("label");//alert(myLabel);
                    var myDescription = w2ui.form.getValue("description");//alert(myDescription);
                    // var myGraphObject=cy.$id(myId); alert(myGraphObject.id());
                    // var myGraphObjectLabel=myGraphObject.data("label"); alert(myGraphObjectLabel);
                    // myGraphObject.data("label",w2ui.form.getValue("label"));
                    // myGraphObject.data("description",w2ui.form.getValue("description"));  

                    cy.$id(myId).data("label", myLabel);
                    cy.$id(myId).data("description", myDescription);
                    w2ui.form.refresh();
                    w2ui.layoutProperties.html('main', w2ui.form);

                }
            }
        },


        form2: {
            header: "No graph element selected: double clik on a node or a edge",
            name: 'form2',
            show: {
                toolbar: false,
                footer: false,
                toolbarSave: false
            },
            style: 'opacity:1;background-color:white;color:black',
            fields: [
                { field: 'identifier', type: 'text', disabled: true, html: { label: 'id:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'parent', type: 'text', disabled: true, html: { label: 'parent:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'parentRelationId', type: 'text', disabled: true, html: { label: 'parentRelationId:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'parentRelationType', type: 'text', disabled: true, html: { label: 'parentRelationType:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'parentContainmentId', type: 'text', disabled: true, html: { label: 'parentContainmentId:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'source', type: 'text', disabled: true, html: { label: 'source:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'target', type: 'text', disabled: true, html: { label: 'target:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
                { field: 'timestamp', type: 'text', disabled: true, html: { label: 'timestamp:', attr: 'size="128" ', attr: 'style="width: 100%; height: 20px; resize: vertical;background-color: white;opacity:1; color:black"' } },
            ]
        },
        mainmenu: {
            name: 'mainmenu',
             style: 'height: 50px;',
            tooltip: "bottom",
            items: [
                {
                    type: 'menu', id: 'submenu2',
                    text(item) { return "File" },
                    items: [
                        { id: 'id1', text: 'Load', tooltip: "Loading previously saved archicg graph." },
                        { id: 'id2', text: 'Save' },
                        { text: '--' },
                        {
                            id: 'id3', text: 'Import',
                            items: [
                                { id: 'id4', text: 'jArchiECG' },
                                //                       { id: 'id5', text: 'Cytogen' } ,
                                { id: 'oef', text: 'Open Format' }
                            ]
                        },
                        { text: '--' },
                        {
                            id: 'id7', text: 'Export',
                            items: [
                                { id: 'id8', text: 'CSV' },
                                { id: 'owlexport', text: 'OWL' },
                            ]
                        },
                        { text: '--' },
                        {
                            id: 'id9', text: 'Save as image',
                            items: [
                                { id: 'id10', text: 'PNG View' },
                                { id: 'id11', text: 'PNG Full' },
                                { id: 'id12', text: 'JPG View' },
                                { id: 'id13', text: 'JPG Full' },
                                { id: 'id14', text: 'SVG View' },
                                { id: 'id15', text: 'SVG Full' },
                            ]
                        }

                    ]
                },
                { type: 'break' },

                {
                    type: 'menu', id: 'submenu3',
                    text(item) { return "Compound Graph" },
                    items: [
                        {
                            id: 'id1', text: 'Nodes',
                            items: [
                                { id: 'id2', text: 'Collapse all nodes' },
                                { id: 'id3', text: 'Collapse selected recursively' },
                                { id: 'id4', text: 'Expand all nodes' },
                                { id: 'id5', text: 'Expand selected recursively' },
                                { id: 'id6', text: 'Add Compound for selected' },
                                { id: 'id7', text: 'Remove selected compound' },
                                { id: 'id8', text: 'Add Nested for selected' },
                                { id: 'id16', text: 'Create Nodes' }
                            ]
                        },
                        {
                            id: 'id9', text: 'Edges',
                            items: [
                                { id: 'id10', text: 'Collapse all edges' },
                                { id: 'id11', text: 'Expand all edges' },
                                { id: 'id12', text: 'Collapse selected edges' },
                                { id: 'id13', text: 'Expand selected edges' },
                                { id: 'id14', text: 'Collapse between selected' },
                                { id: 'id15', text: 'Expand between selected' }
                            ]
                        },
                    ]
                },
                { type: 'break' },
                {
                    type: 'menu', id: 'submenu4',
                    text(item) { return "Composite Graph" },
                    items: [
                        { id: 'id1', text: 'Selected compound to graph' },
                        { id: 'id2', text: 'Selected graph to compound' },
                        { id: 'id3', text: 'Create Component' },
                        { id: 'id4', text: 'Show Edge' },
                        { id: 'id5', text: 'Hide Edge' },
                    ]
                },
                { type: 'break' },
                {
                    type: 'menu', id: 'submenu5',
                    text(item) { return "Graph manipulation" },
                    items: [
                        {
                            id: 'id1', text: 'Show/Hide',
                            items: [
                                { id: 'id2', text: 'Hide selected' },
                                { id: 'id3', text: 'Hide non selected' },
                                { id: 'id4', text: 'Unhide all' },
                            ]
                        },
                        {
                            id: 'id5', text: 'Grabify/Ungrabify',
                            items: [
                                { id: 'id6', text: 'Ungrabify selected' },
                                { id: 'id7', text: 'Ungrabify non selected' },
                                { id: 'id8', text: 'Grabify selected ' },
                                { id: 'id9', text: 'Grabify non select' }
                            ]
                        },
                        {
                            id: 'id10', text: 'Lock/Unlock',
                            items: [
                                { id: 'id11', text: 'Lock selected' },
                                { id: 'id12', text: 'Lock non selected' },
                                { id: 'id13', text: 'Unlock selected ' },
                                { id: 'id14', text: 'Unlock non select' }
                            ]
                        },
                        {
                            id: 'id15', text: 'Remove/Restore',
                            items: [
                                { id: 'id16', text: 'Remove selected' },
                                { id: 'id17', text: 'Remove unselected' },
                                { id: 'id18', text: 'Remove all' },
                                { id: 'id19', text: 'Restore' },

                            ]
                        }
                    ]
                },
                { type: 'break' },


                { type: 'spacer' },
                //       { type: 'menu', id: 'tests',
                //             text(item) {return "Tests"},
                //             items:[
                //                 { id: 'id4', text: 'fitSelection' },
                //                 { id: 'id5', text: 'animSelectionPositions' },
                //			          { id: 'id6', text: 'Grid Layout on selection' },
                //        ]} ,

                {
                    type: 'menu', id: 'parameters',
                    text(item) { return "Parameters" },
                    items: [
                        {
                            id: 'id0',
                            text: 'tooltips',
                            items: [
                                { id: 'id1', text: 'Palette tooltips on' },
                                { id: 'id2', text: 'Palette tooltips off' }
                                //     { id: 'id3', text: 'User interface tooltips on' },
                                //     { id: 'id4', text: 'User interface tooltips off' },
                                //     { id: 'id5', text: 'Graph tooltips on' },  
                                //     { id: 'id6', text: 'Graph tooltips off' }           
                            ]
                        },
                        {
                            id: 'id7',
                            text: 'Log',
                            items: [
                                { id: 'id8', text: 'Show/Hide log' }
                            ]
                        },
                        {
                            id: 'id10',
                            text: 'Visual Element Display Mode',
                            items: [
                                { id: 'id11', text: 'Nodes' },
                                { id: 'id12', text: 'Boxes' }
                            ]
                        }
                        ,
                        {
                            id: 'id17',
                            text: 'Visual Relation Display Mode',
                            items: [
                                { id: 'id18', text: 'Edges' },
                                { id: 'id19', text: 'Nodes' }
                            ]
                        },
                        {
                            id: 'id13',
                            text: 'Undo/Redo',
                            items: [
                                { id: 'id14', text: 'On' },
                                { id: 'id15', text: 'Off' },
                                { id: 'id16', text: 'Clear' }
                            ]
                        }
                        ,
                        {
                            id: 'id20',
                            text: 'ArchiMate Relationships Rules',
                            items: [
                                { id: 'id21', text: 'Enforce' },
                                { id: 'id22', text: 'Relax' }
                            ]
                        }
                        ,
                        {
                            id: 'id30',
                            text: 'URL Navigation',
                            items: [
                                { id: 'id31', text: 'Change mode' }
                            ]
                        }
                    ]
                },
                {
                    type: 'menu', id: 'checker',
                    text(item) { return "Checker" },
                    items: [
                        { id: 'allowedRelationship', text: 'ArchiMate AllowedRelationship', tooltip: "set this property to true or false" }
                    ]
                },

                { type: 'menu-check', id: 'menuPalettes', text: "Palettes", selected: ['archimate', 'meta'], items: palettesMenu },

                {
                    type: 'menu', id: 'submenu1',
                    text(item) { return "archicg" },
                    items: [
                        { id: 'id1', text: 'About archicg', tooltip: "Information about the application" }
                    ]
                }

            ],
            onClick: function (event) {

                //alert('item '+ event.target.split(':').shift() + ' is clicked.' + this.get([event.target]).checked);
                if (event.target.split(':').shift() == "menuPalettes") {
                    var myPalette = event.target
                    var myPaletteName = JSON.stringify(myPalette)
                    myPaletteName = myPalette.replace("menuPalettes:", "") + "Palette"// all palettes div should have as id the menu name postfixed with palette
                    var checked = this.get(event.target).checked
                    var x = document.getElementById(myPaletteName);
                    if (x == undefined) { } else {
                        if (checked) { x.style.display = "none"; } else {
                            x.style.display = "block";
                            var paletteElement = document.getElementsByClassName("el-button");
                            for (var i = 0; i < paletteElement.length; i++) {
                                const buttonId = paletteElement[i].id.replace('-button', '');
                                const description = paletteIconDescription(buttonId);
                                const match = w2utils.tooltip(description, { position: 'left', className: 'custom-tooltip' }).match(/onmouseenter="([^"]*)"/);
                                let onmouseenterInstruction = match ? match[1] : '';
                                paletteElement[i].setAttribute('onmouseenter', onmouseenterInstruction)
                                paletteElement[i].addEventListener('dblclick', paletteDblclick, false);
                            }
                        }
                    }
                }
                if (event.target == "checker:allowedRelationship") {
                    cy.edges().forEach(function (edge) {
                        if (allowedArchiMateRelation(edge) === undefined) { console.log("undefined") } else { edge.data("ArchiMateAllowedRelationship", allowedArchiMateRelation(edge)) }
                    })
                };

                if (event.target == "parameters:id31") {
                    if (URLNavigationActivated) {
                        URLNavigationActivated = false
                    }
                    else { URLNavigationActivated = true }
                    alert("URL navigation set to " + URLNavigationActivated)
                };

                if (event.target == "parameters:id21") {
                    ArchiMateAllowedRelationshipEnforce = true;
                };

                if (event.target == "parameters:id22") {
                    ArchiMateAllowedRelationshipEnforce = false;
                };

                if (event.target == "submenu10:id21") {
                    openSelectViewpointPopup();
                    //console.log(w2ui['mainLayout'].set('right',panels)); 
                    //w2ui.layoutNodeCreation.html('main',w2ui.formNodeCreation );

                };

                if (event.target == "tools:id1") {
                    demo();
                };
                if (event.target == "tools:id2") {


                };

                if (event.target == "tools:id3") {
                    let finalOptions = Object.assign({}, playerLayoutOptions);
                    finalOptions.fixedNodeConstraint = constraints.fixedNodeConstraint ? constraints.fixedNodeConstraint : undefined;
                    console.log(finalOptions.fixedNodeConstraint);
                    let layoutPlayer = cy.layout(finalOptions);
                    layoutPlayer.run();
                };
                if (event.target == "tools:archicgEditor") { activateToolBar("archicgEditor") };

                if (event.target == "tests:id4") {

                    let fitString = "";
                    cy.nodes(":selected").forEach(function (node, i) {
                        if (i > 0) { fitString += "," }
                        fitString += '#' + node.id();
                    });
                    console.log(fitString);
                    cy.animate({
                        fit: {
                            eles: cy.nodes(fitString),
                            padding: 0
                        }
                    }, {
                        duration: 1000
                    });
                    //download('fitSelection.json', fitString);
                };

                if (event.target == "tests:id5") {
                    cy.nodes().animate({
                        position: { x: 100, y: 100 },
                        style: { backgroundColor: 'red' }
                    }, {
                        duration: 1000
                    });

                };

                if (event.target == "tests:id6") {
                    var layout = cy.nodes(":selected").layout(gridLayoutOptions);
                    layout.run();
                };

                if (event.target == "submenu3:id16") {
                    openNodeCreationPopup();
                };
                if (event.target == "parameters:id1") {
                    paletteTooltipsOn = true;
                    logger.info("tooltipOn" + myPalette2())
                    savePaletteButtonsCheck();
                    w2ui['mainLayout'].html('right', myPalette2());

                    restorePaletteButtonsCheck();
                    logger.info("tooltipOn" + myPalette2())
                    var paletteElement = document.getElementsByClassName("el-button");
                    for (var i = 0; i < paletteElement.length; i++) {
                        var buttonId = paletteElement[i].id.replace('-button', '');
                        logger.info(buttonId)
                        var description = paletteIconDescription(buttonId);
                        logger.info(description)
                        var match = w2utils.tooltip(description, { position: 'left', className: 'custom-tooltip' }).match(/onmouseenter="([^"]*)"/);
                        let onmouseenterInstruction = match ? match[1] : '';
                        paletteElement[i].setAttribute('onmouseenter', onmouseenterInstruction)
                        paletteElement[i].addEventListener('dblclick', paletteDblclick, false);
                    }
                };

                if (event.target == "parameters:id2") {
                    paletteTooltipsOn = false;
                    savePaletteButtonsCheck();
                    logger.info("tooltipOff" + myPalette2())
                    w2ui['mainLayout'].html('right', myPalette2());
                    restorePaletteButtonsCheck();
                    var paletteElement = document.getElementsByClassName("el-button");
                    for (var i = 0; i < paletteElement.length; i++) {
                        const buttonId = paletteElement[i].id.replace('-button', '');
                        const description = paletteIconDescription(buttonId);
                        const match = w2utils.tooltip(description, { position: 'left', className: 'custom-tooltip' }).match(/onmouseenter="([^"]*)"/);
                        let onmouseenterInstruction = match ? match[1] : '';
                        paletteElement[i].setAttribute('onmouseenter', onmouseenterInstruction)
                        paletteElement[i].addEventListener('dblclick', paletteDblclick, false);
                    }
                };

                if (event.target == "parameters:id11") {
                    globalElementVisualMode = "nodes";
                    if (undoRedo) { ur.do("collapseAll"); } else { api.collapseAll(); }
                };
                if (event.target == "parameters:id12") {
                    globalElementVisualMode = "boxes";
                    if (undoRedo) { ur.do("collapseAll"); } else { api.collapseAll(); }
                };
                if (event.target == "parameters:id14") { undoRedo = true; };
                if (event.target == "parameters:id15") { undoRedo = false; };
                if (event.target == "parameters:id16") { ur.reset() };
                if (event.target == "parameters:id18") {
                    globalRelationVisualMode = "edge";
                    relationsNodesToEdges();
                    //if(undoRedo){ur.do("collapseAll");}else{api.collapseAll();}
                };
                if (event.target == "parameters:id19") {
                    globalRelationVisualMode = "node";
                    relationsEdgesToNodes();
                    //if(undoRedo){ur.do("collapseAll");}else{api.collapseAll();}
                };

                if (event.target == "submenu1:id1") { $('#popup').w2popup(); };
                if (event.target == "submenu2:id1") {
                    // TODO - assess more complete file reader and writter for enforcing selection of a default directory and file extension 
                    // firt candidate library: https://github.com/GoogleChromeLabs/browser-fs-access
                    // second candidate library: https://github.com/jimmywarting/native-file-system-adapter/
                    // TODO investigate valuable usage of stream savers
                    // https://github.com/jimmywarting/StreamSaver.js
                    //https://github.com/eligrey/FileSaver.js
                    const el = document.getElementById('load-from-inp');
                    el.value = '';
                    el.click();
                };
                if (event.target == "submenu2:id2") {
                    var fileNameToSave = "myGraph.archicg";
                    w2prompt({
                        label: 'Enter value',
                        value: "myGraph.archicg",
                        attrs: 'size=6'
                    })
                        .change((event) => {
                            fileNameToSave = event.detail.originalEvent.target.value
                        })
                        .ok(() => {
                            api.saveJson(cy.$(), fileNameToSave);
                        });
                }
                if (event.target == "submenu2:id4") {
                    const el = document.getElementById('load-from-jarchi');
                    el.value = '';
                    el.click();
                }
                if (event.target == "submenu2:id5") {
                    const el = document.getElementById('load-from-cytogen');
                    el.value = ''; el.click();
                }

                if (event.target == "submenu2:oef") {
                    const el = document.getElementById('load-from-open-format');
                    el.value = ''; el.click();
                }

                if (event.target == "submenu2:id8") {
                    myNodes = cy.nodes(":selected").map(getNodes);
                    myEdges = cy.edges(":selected").map(getEdges);
                    myProperties = cy.$(":selected").reduce(function (propertiesArray, element) {
                        return propertiesArray.concat(getProperties(element));
                    }, []);
                    var zip = new JSZip();
                    zip.file("nodes.csv", Papa.unparse(myNodes, configCSV));
                    zip.file("edges.csv", Papa.unparse(myEdges, configCSV));
                    zip.file("properties.csv", Papa.unparse(myProperties, configCSV));
                    //console.log (JSON.stringify(myArray));
                    //new Blob(nodes_CSV, {type : 'text/csv'});
                    var fileNameToSave = "ArchiCG.zip";
                    w2prompt({ label: 'Enter value', value: fileNameToSave, attrs: 'size=6' })
                        .change((event) => { fileNameToSave = event.detail.originalEvent.target.value })
                        .ok(() => {
                            try { zip.generateAsync({ type: "blob" }).then(function (blob) { saveAs(blob, fileNameToSave) }); } catch (error) { console.log(error) }
                        });

                }
                if (event.target == "submenu2:owlexport") {

                    //myEdges= cy.edges(":selected").map(getEdges);
                    //myProperties= cy.$(":selected").reduce(function(propertiesArray, element){
                    //  return propertiesArray.concat(getProperties(element));
                    //},[]);


                    w2prompt({
                        label: 'Enter value',
                        value: 'archicg.owl',
                        attrs: 'size=6'
                    })
                        .change((event) => {
                            //log('Input value changed.');
                        })
                        .ok(function () {
                            var fileName = event.detail.originalEvent.target.value
                            var modelName = fileName.replace(/\.[^/.]+$/, "");
                            //console.log(modelName);
                            modelURI = "http://www.archicg.net/" + modelName;
                            //console.log(modelURI)
                            var owlImport = [
                                {
                                    "@id": "_:genid1",
                                    "@type": ["http://www.w3.org/2002/07/owl#Ontology"],
                                    "http://www.w3.org/2002/07/owl#imports": [{
                                        "@id": "http://www.plm-interop.net/archimate/basic/3.1"
                                    }]
                                }];
                            myNodes = cy.nodes(":selected").map(getNodes4OWL);
                            myEdges = cy.edges(":selected").map(getEdges4OWL);
                            saveTxtFile(JSON.stringify(owlImport.concat(myNodes).concat(myEdges)), fileName, 'text/plain');
                        });
                }

                if (event.target == "submenu2:id10") {

                    var fileNameToSave = "ArchiCGView.png";
                    w2prompt({ label: 'Enter value', value: fileNameToSave, attrs: 'size=6' })
                        .change((event) => { fileNameToSave = event.detail.originalEvent.target.value })
                        .ok(() => {
                            try { saveAs(cy.png({ bg: "white" }), fileNameToSave); } catch (error) { console.log(error) }
                        });
                }

                if (event.target == "submenu2:id11") {
                    var fileNameToSave = "ArchiCGFull.png";
                    w2prompt({ label: 'Enter value', value: fileNameToSave, attrs: 'size=6' })
                        .change((event) => { fileNameToSave = event.detail.originalEvent.target.value })
                        .ok(() => {
                            try { saveAs(cy.png({ bg: "white", full: "true" }), fileNameToSave); } catch (error) { console.log(error) }
                        });

                }
                if (event.target == "submenu2:id12") {
                    var fileNameToSave = "ArchiCGView.jpg";
                    w2prompt({
                        label: 'Enter value',
                        value: fileNameToSave,
                        attrs: 'size=6'
                    })
                        .change((event) => { fileNameToSave = event.detail.originalEvent.target.value })
                        .ok(() => {
                            try { saveAs(cy.jpg({}), fileNameToSave); } catch (error) { console.log(error) }
                        });
                    if (event.target == "submenu2:id13") {
                        var fileNameToSave = "ArchiCGFull.jpg";
                        w2prompt({ label: 'Enter value', value: fileNameToSave, attrs: 'size=6' })
                            .change((event) => { fileNameToSave = event.detail.originalEvent.target.value })
                            .ok(() => {
                                try { saveAs(cy.jpg({ full: true }), fileNameToSave); } catch (error) { console.log(error) }
                            });
                    }
                }
                if (event.target == "submenu2:id14") {
                    var svgContent = cy.svg({ scale: 1, full: false, bg: 'white' });
                    var blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
                    var fileNameToSave = "ArchiCGView.svg";
                    w2prompt({
                        label: 'Enter value',
                        value: fileNameToSave,
                        attrs: 'size=6'
                    })
                        .change((event) => { fileNameToSave = event.detail.originalEvent.target.value })
                        .ok(() => {
                            try { saveAs(blob, fileNameToSave); } catch (error) { console.log(error) }
                        });
                }
                if (event.target == "submenu2:id15") {
                    var svgContent = cy.svg({ scale: 1, full: true, bg: 'white' });
                    var blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
                    var fileNameToSave = "ArchiCGFull.svg";
                    w2prompt({
                        label: 'Enter value',
                        value: fileNameToSave,
                        attrs: 'size=6'
                    })
                        .change((event) => { fileNameToSave = event.detail.originalEvent.target.value })
                        .ok(() => {
                            try { saveAs(blob, fileNameToSave); } catch (error) { console.log(error) }
                        });
                }

                if (event.target == "submenu3:id2") {
                    if (undoRedo) { ur.do("collapseAll") } else { api.collapseAll(); }
                }

                if (event.target == "submenu3:id3") {
                    if (undoRedo) { ur.do("collapseRecursively", { nodes: cy.$(":selected") }); }
                    else { api.collapseRecursively(cy.$(":selected")); }
                }
                if (event.target == "submenu3:id4") {
                    if (undoRedo) { ur.do("expandAll") } else { api.expandAll(); }
                }

                if (event.target == "submenu3:id5") {
                    if (undoRedo) { ur.do("expandRecursively", { nodes: cy.$(":selected") }) }
                    else { api.expandRecursively(cy.$(":selected")); }
                }

                if (event.target == "submenu3:id6") {
                    console.trace();
                    var selection = cy.nodes(':selected'); if (selection.length < 1) { return; }
                    var parent = selection[0].parent().id();
                    //const parentType=elems[0].parent().data(type);
                    var type = globalNodeType;
                    var label = globalLabel;
                    //log(label);
                    for (let i = 1; i < selection.length; i++) {
                        if (parent !== selection[i].parent().id()) {
                            alert("Operation not possible: the selected nodes have different parents!");
                            return;
                        }
                    }
                    var myUUID = new UUID(4);//new Date().getTime();
                    var timestamp = new Date();
                    //console.log("un")
                    addParentNode(`${myUUID}`, type, parent, label, timestamp);
                    //console.log("deux")
                    for (let i = 0; i < selection.length; i++) {
                        //console.log(selection[i].data("label")+ " id:"+ selection[i].id() + " moved to "+cy.$id(myUUID).data("label")+ " id:"+ myUUID );
                        selection[i].move({ parent: `${myUUID}` });
                    }
                }
                if (event.target == "submenu3:id7") {
                    const elems = cy.nodes(':selected').filter(':compound');
                    if (elems.length < 1) { return; }
                    for (let i = 0; i < elems.length; i++) {
                        // expand if collapsed
                        if (elems[i].hasClass('cy-expand-collapse-collapsed-node')) { api.expand(elems[i], { layoutBy: null, fisheye: false, animate: false }); }
                        const grandParent = elems[i].parent().id() ?? null;
                        const children = elems[i].children();
                        children.move({ parent: grandParent });
                        removed = removed.union(cy.remove(elems[i]));
                    }
                }
                if (event.target == "submenu3:id8") {
                    var selection = cy.nodes(":selected");
                    var label = globalLabel;
                    var type = globalNodeType;
                    if (selection.length == 1) {
                        var myUUID = new UUID(4);
                        const newNode = { data: { id: `${myUUID}`, label: label, type: type } };
                        cy.add(newNode);
                        cy.$id(`${myUUID}`).move({ parent: selection[0].id() });
                        api.expandRecursively(cy.$id(selection[0].id()));
                    }
                }
                if (event.target == "submenu3:id10") {
                    if (undoRedo) { ur.do("collapseAllEdges", { options: getEdgeOptions() }) } else { api.collapseAllEdges(getEdgeOptions()); }
                }

                if (event.target == "submenu3:id11") {
                    if (cy.edges(".cy-expand-collapse-collapsed-edge").length > 0) {
                        if (undoRedo) { ur.do("expandAllEdges") } else { api.expandAllEdges(); }
                    }
                }

                if (event.target == "submenu3:id12") {
                    const edges = cy.edges(":selected");
                    if (edges.length >= 2) {
                        if (undoRedo) { ur.do("collapseEdges", { edges: edges, options: getEdgeOptions() }) } else { api.collapseEdges(edges, getEdgeOptions()); }
                    }
                }

                if (event.target == "submenu3:id13") {
                    const edges = cy.edges(":selected");
                    if (edges.length > 0) {
                        if (undoRedo) { ur.do("expandEdges", { edges: edges, options: getEdgeOptions() }) } else { api.expandEdges(edges, getEdgeOptions()); }
                    }
                }

                if (event.target == "submenu3:id14") {
                    if (undoRedo) { ur.do("collapseEdgesBetweenNodes", { nodes: cy.nodes(":selected"), options: getEdgeOptions() }) } else {
                        api.collapseEdgesBetweenNodes(cy.nodes(":selected"), getEdgeOptions());
                    }
                }

                if (event.target == "submenu3:id15") {
                    console.log(cy.nodes(":selected"));
                    if (undoRedo) { ur.do("expandEdgesBetweenNodes", { nodes: cy.nodes(":selected"), options: getEdgeOptions() }) } else {
                        api.expandEdgesBetweenNodes(cy.nodes(":selected"), getEdgeOptions());
                    }
                }

                if (event.target == "submenu4:id1") {
                    //selected compound to graph
                    var selectedNodes = cy.nodes(":selected");
                    var roots = [];
                    var components = [];
                    var leaves = [];
                    //identification of the population of root nodes - they have outgoer composition relationships and no incoming composition

                    selectedNodes.forEach(function (node) {
                        var isRootNode = false;
                        var isComponent = false;
                        var isComposite = false;
                        var isLeaf = false;
                        node.outgoers().forEach(function (rel) {
                            if (rel.data("type" == "composition")) {
                                isComposite = true;
                                rel.css('visibility', 'visible');
                                rel.css('display', 'element');
                            }
                        });
                        node.incomers().forEach(function (rel) {
                            if (rel.data("edgeType" == "composition")) {
                                isComponent = true;
                                rel.css('visibility', 'visible');
                                rel.css('display', 'element');
                            }
                        });

                        if (isComposite || isComponent) {
                            if (isComposite && isComponent) { components.push(node); }
                            else {
                                if (isComponent) { isLeaf = true; leaves.push(node); }
                                else { isRoot = true; roots.push(node); }
                            }
                        }
                        roots.concat(components).concat(leaves).forEach(function (node) {
                            node.data("parentContainmentId", node.parent().id());
                            node.move({ parent: null });
                        });
                    });

                    api.expandAll();
                }
                if (event.target == "submenu4:id2") {
                    //selected graph to compound            
                    var selectedNodes = cy.nodes(":selected");
                    relationIDs = [];
                    cy.batch(function () {
                        selectedNodes.forEach(function (node) {
                            node.outgoers().forEach(function (rel) {
                                if (rel.data("edgeType") == "composition" && rel.isEdge()) {
                                    rel.target().move({ parent: rel.source().id() });
                                    rel.target().data("parentRelationId", rel.id());
                                    relationIDs.push(rel.id());
                                }
                            });
                        });
                    });
                    relationIDs.forEach(function (relationID) {
                        cy.$id(relationID).css('visibility', 'hidden');
                        cy.$id(relationID).css('display', 'none');
                    });

                    api.expandAll();
                }


                if (event.target == "submenu4:id3") {
                    var relationType = "composition";
                    var parentRelationType = document.getElementById('parentRelationType').value;
                    var idEdge = new UUID(4);//new Date().getTime();
                    var myUUID = new UUID(4);
                    var timestampEdge = new Date();
                    document.getElementById('globalParentId').value = document.getElementById('globalNodeId').value;
                    document.getElementById('globalNodeId').value = `${myUUID}`;//new Date().getTime();
                    var node = [
                        {
                            group: 'nodes', data: {
                                id: document.getElementById('globalNodeId').value,
                                edgeType: globalNodeType,
                                parent: document.getElementById('globalParentId').value,
                                label: globalLabel,
                                parentRelationId: `${idEdge}`
                            }
                        }
                    ];
                    var edge = [{
                        group: 'edges', data: {
                            id: `${idEdge}`,
                            timestamp: `"${timestampEdge}"`,
                            edgeType: relationType,
                            source: globalParenId,
                            target: globalNodeId
                        }
                    }];
                    var eles = cy.add(node);
                    logger.info(JSON.stringify(edge));
                    console.log(cy.add(edge));
                    api.expandAll();
                }

                if (event.target == "submenu4:id4") {
                    showEdgeComposite = true;
                    alert("showEdgeComposite is true")
                    api.collapseAll(":selected");
                    api.expandAll(":selected");
                }
                if (event.target == "submenu4:id5") {
                    showEdgeComposite = false;
                    alert("showEdgeComposite is false")
                    api.collapseAll(":selected");
                    api.expandAll(":selected");
                }

                if (event.target == "submenu5:id2") {
                    var eles = cy.$(":selected");
                    eles = eles.filter(":visible");
                    eles = eles.union(eles.connectedEdges());
                    eles.unselect();
                    eles.css('visibility', 'hidden');
                    eles.css('display', 'none');
                }

                if (event.target == "submenu5:id3") {
                    var unselected = cy.nodes(":unselected");
                    var selected = cy.nodes(":selected");
                    unselected.forEach(function (node) {
                        if (node.descendants(node.id()).intersection(selected).length == 0) {
                            node.css('visibility', 'hidden');
                            node.css('display', 'none');
                        }
                    })
                }

                if (event.target == "submenu5:id4") {
                    var eles = cy.filter(":hidden");
                    var connectedEdges = eles.connectedEdges(function (edge) {
                        if ((edge.source().visible() || eles.contains(edge.source())) && (edge.target().visible() || eles.contains(edge.target()))) {
                            return true;
                        }
                        return false;
                    });
                    eles = eles.union(connectedEdges);
                    eles.unselect();
                    eles.style('visibility', 'visible');
                    eles.style('display', 'element');
                }

                if (event.target == "submenu5:id6") {
                    var nodes = cy.nodes(":selected").ungrabify();
                    ungrabifiedNodes = ungrabifiedNodes.concat(nodes);
                    nodes.unselect();
                }

                if (event.target == "submenu5:id7") {
                    var nodes = cy.nodes(":unselected").ungrabify();
                    ungrabifiedNodes = ungrabifiedNodes.concat(nodes);
                    nodes.unselect();
                }

                if (event.target == "submenu5:id8") {
                    var nodes = cy.nodes(":selected").grabify();
                    ungrabifiedNodes = ungrabifiedNodes.filter(function (el) {
                        return !nodes.includes(el);
                    });
                    nodes.unselect();
                }

                if (event.target == "submenu5:id9") {
                    var nodes = cy.nodes(":unselected").grabify();
                    ungrabifiedNodes = ungrabifiedNodes.filter(function (el) {
                        return !nodes.includes(el);
                    });
                    nodes.unselect();
                }


                if (event.target == "submenu5:id11") {
                    var nodes = cy.nodes(":selected").lock();
                    lockedNodes = lockedNodes.concat(nodes);
                    nodes.unselect();
                }

                if (event.target == "submenu5:id12") {
                    var nodes = cy.nodes(":unselected").lock();
                    lockedNodes = lockedNodes.concat(nodes);
                    nodes.unselect();
                }

                if (event.target == "submenu5:id13") {
                    var nodes = cy.nodes(":selected").unlock();
                    lockedNodes = lockedNodes.filter(function (el) {
                        return !nodes.includes(el);
                    });
                    nodes.unselect();
                }

                if (event.target == "submenu5:id14") {
                    var nodes = cy.nodes(":unselected").unlock();
                    lockedNodes = lockedNodes.filter(function (el) {
                        return !nodes.includes(el);
                    });
                    nodes.unselect();
                }


                if (event.target == "submenu5:id16") {
                    const elements = cy.$(":selected");
                    if (undoRedo) { ur.do("remove", elements) } else { removed = removed.union(cy.remove(elements)); }
                }

                if (event.target == "submenu5:id17") {
                    const elements = cy.$(":unselected");
                    if (undoRedo) { ur.do("remove", elements) } else { removed = removed.union(cy.remove(elements)); }
                }

                if (event.target == "submenu5:id18") {
                    const elements = cy.$();
                    if (undoRedo) { ur.do("remove", elements) } else { removed = removed.union(cy.remove(elements)); }
                }

                if (event.target == "submenu5:id19") { removed.restore(); }

                if (event.target == "parameters:id8") {


                    if (document.getElementById("logDiv").style.display == "none") {
                        document.getElementById("topLogDiv").style.display = "block"
                        document.getElementById("logDiv").style.display = "block"
                        inPageAppender.show()
                    }
                    else {
                        document.getElementById("topLogDiv").style.display = "none";
                        document.getElementById("logDiv").style.display = "none";
                        inPageAppender.hide()
                    }
                }



            }
        }

        ,
        toolbararchicgEditorDefinition: {
            name: 'toolbararchicgEditorDefinition',
            tooltip: 'top',
            style: 'background-color: white',
            items: [
                { type: 'button', id: 'createNode', text: 'Create Node', tooltip: 'Create node with Label and Node Type standalone (no selection) or as child of a single selected node' },
                { type: 'spacer' },
                { type: 'check', id: 'dad', text: 'DaD', checked: false, tooltip: 'Drag and Drop Mode for grouping an ungrouning nested node (only first nesting level)' },
                { type: 'check', id: 'edge-draw', text: 'Edge Draw', checked: false, tooltip: 'Draw Edges Mode' },
                { type: 'new-line' },
                { type: 'check', id: 'randomize', text: 'Randomize', checked: true, tooltip: 'Randomize mode on or off for Fcose Layout' },
                //          { type: 'html',  id: 'input10',  html: `<div style=" height: 20px;display: flex;
                //          align-items: center;">Layout: 
                //          <input id="acgLayout" style="color:blue;" onchange="acgLayout=this.value;cyLayout.name=acgLayout"; value="fcose" size="25" ></div>` },
                { type: 'new-line' },
                {
                    type: 'html', id: 'item02', html: `<div style=" height: 22px;display: flex;
                    align-items: center;">Hide:</div> ` },
                { type: 'button', id: 'hideSelected', text: 'Selected', color: 'gray', tooltip: 'Hide selected' },
                { type: 'button', id: 'hideUnselected', text: 'Unselected', tooltip: 'Hide unselected' },
                { type: 'button', id: 'showAll', text: 'Show all', tooltip: 'Show all what was hidden' },
                { type: 'new-line' },
                {
                    type: 'html', id: 'item03', html(item) {
                        let html = `<div style=" height: 22px;display: flex;
                    align-items: center;">Delete: </div>`;
                        return html;
                    }
                },
                { type: 'button', id: 'deleteSelected', text: 'Selected', tooltip: 'Delete selected' },
                { type: 'button', id: 'deleteUnselected', text: 'Unselected', tooltip: 'Delete unselected' },
                { type: 'button', id: 'deleteAll', text: 'All', tooltip: 'Delete all' },
                { type: 'button', id: 'restore', text: 'Restore', tooltip: 'restore from previous delete action' },
                { type: 'new-line' },
                {
                    type: 'html', id: 'input01', html: `<div style=" height: 20px;display: flex;
                    align-items: center;">Label: 
                    <input id="globalLabel" style="color:blue;" value="ArchiCG Description" size="25" ></div>` },
                { type: 'spacer' },
                { type: 'button', id: 'updateLabel', text: 'Tag', style: " align-items: center;text-align:center;", tooltip: 'Apply the label to the current selection' },
                { type: 'new-line' },
                { type: 'html', id: 'input02', html: `<div style=" height: 20px;display: flex;align-items: center;">Node type:<input id="globalNodeType" style="color:blue;" value="grouping" size="20" ></div>` },
                { type: 'spacer' },
                { type: 'button', id: 'tagNodeWithType', text: 'Tag', style: " align-items: center;text-align:center;", tooltip: 'Apply the type to the currently selected nodes' },
                { type: 'new-line' },
                {
                    type: 'html', id: 'input03', html: `<div style=" height: 20px;display: flex;
                    align-items: center;text-item: center;">Edge type: 
                    <input id="globalEdgeType" style="color:blue;" value="association" size="20" ></div>` },
                { type: 'spacer' },
                { type: 'button', id: 'tagEdgeWithType', text: 'Tag', style: " align-items: center;text-align:center;", tooltip: 'Apply the type to the currently selected edges' },
                { type: 'new-line' },
                {
                    type: 'html', id: 'input04', html: `<div style=" height: 20px;display: flex;
                    align-items: center">Property type: 
                    <input id="globalProperty" list="propertyList" style="color:blue;" size="20" onchange="globalProperty=this.value"></div>
                     <datalist id="propertyList"></datalist>` },
                { type: 'new-line' },
                {
                    type: 'html', id: 'item04', html: `<div style=" height: 22px;display: flex;
                    align-items: center;">Remove from: </div>` },
                { type: 'button', id: 'removeSelected', text: 'Selected', tooltip: 'Remove properties with Property Type from selection ' },
                { type: 'button', id: 'removeUnselected', text: 'Unselected', tooltip: 'Remove properties with Property Type from unselected ' },
                { type: 'button', id: 'removeAll', text: 'All', tooltip: 'Remove properties with Property Type from the graph ' },
                { type: 'new-line' },
                {
                    type: 'html', id: 'input05', html: `<div style=" height: 20px;display: flex;
                    align-items: center">Property Value:
                    <input id="globalPropertyValue" style="color:blue;" size="20" onchange="globalProperty=this.value"></div>` },
                { type: 'new-line' },
                {
                    type: 'html', id: 'item05', html: `<div style=" height: 20px;display: flex;
                    align-items: center">Apply to: </div>`},
                { type: 'button', id: 'applySelected', text: 'Selected', tooltip: 'create property with Property Type and value on selection ' },
                { type: 'new-line' },
                { type: 'check', id: 'none', text: 'none', checked: true, tooltip: 'Consider any for expression filtering' },
                { type: 'check', id: 'nodes', text: 'nodes', checked: false, tooltip: 'Consider nodes for expression filtering' },
                { type: 'check', id: 'edges', text: 'edges', checked: false, tooltip: 'Consider edges for expression filtering' },
                { type: 'check', id: 'eles', text: 'eles', checked: false, tooltip: 'Consider nodes and edges for expression filtering' },
                { type: 'new-line' },
                {
                    type: 'html', id: 'input06', html: `<div style=" height: 20px;display: flex;
                    align-items: center"><a href="https://js.cytoscape.org/#selectors/data" target="help">Expression</a>: 
                    <input id="filter-field" style="color:blue;" size="20" ></div>` },
                //{ type: 'new-line' }, 
                { type: 'button', id: 'Filter', text: 'Filter', tooltip: 'select graph elements corresponding to the filter (additive)' },

                { type: 'new-line' },

                {
                    type: 'html', id: 'input00A', html: `<div style=" height: 20px;display: flex;
                    align-items: center;">Create nodes (iterator applied to Type Name)</div>`},
                { type: 'new-line' },
                {
                    type: 'html', id: 'input00B', html: `<div style=" height: 20px;display: flex;
                    align-items: center;">start =<input id="iterationStart" style="color:blue;" value="1" size="2">step =<input id="iterationStep" style="color:blue;" value="1" size="2">length=<input id="iteratorLength" style="color:blue;" value="3" size="3"></div>` },
                { type: 'new-line' },
                {
                    type: 'html', id: 'input00C', html: `<div style=" height: 20px;display: flex;
                    align-items: center;">Number of iterations =<input id="numberOfIterations" style="color:blue;" value="1" size="2" ></div>` },
                { type: 'spacer' },
                { type: 'button', id: 'createNodes', text: 'Do', tooltip: 'create n(number of iterations) nodes with the current Type and label as type name with an iterator (based on start, step and length)' }
            ],
            onClick: function (event) {
                if (event.target == "createNodes") {
                    var start = parseInt(`${document.getElementById('iterationStart').value}`);
                    var step = parseInt(`${document.getElementById('iterationStep').value}`);
                    var numberOfIteration = parseInt(`${document.getElementById('numberOfIterations').value}`);
                    var length = parseInt(`${document.getElementById('iteratorLength').value}`);
                    var type = document.getElementById('globalNodeType').value
                    var end = start + numberOfIteration * step;
                    //console.log("end: "+end)
                    //console.log("start: "+start)
                    //console.log("step: "+step)
                    //
                    console.log("numberOfIteration:" + numberOfIteration)

                    for (let i = start; i < end; i += step) {
                        num = i.toString();
                        while (num.length < length) num = "0" + num;
                        var nodeName = type + "-" + num;
                        if (i == end - 1) { createNode(nodeName); } else { createNode(nodeName, false, false); }
                        //  console.log (nodeName)
                    };
                }

                if (event.target == "randomize") {
                    if ((w2ui['toolbararchicgEditorDefinition'].get(event.target).checked)) { cyLayout.randomize = false }
                    else { cyLayout.randomize = true }
                }

                if (event.target == "none") {
                    if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked) {
                    }
                    else {
                        w2ui['toolbararchicgEditorDefinition'].uncheck('edges');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('eles');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('nodes');
                        expressionApplyTo = "none"
                    }
                }
                if (event.target == "nodes") {
                    if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked) {
                    }
                    else {
                        w2ui['toolbararchicgEditorDefinition'].uncheck('edges');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('eles');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('none');
                        expressionApplyTo = "nodes"
                    }
                }
                if (event.target == "edges") {
                    if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked) {
                    }
                    else {
                        w2ui['toolbararchicgEditorDefinition'].uncheck('nodes');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('eles');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('none');
                        expressionApplyTo = "edges"
                    }
                }
                if (event.target == "eles") {
                    if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked) {
                    }
                    else {
                        w2ui['toolbararchicgEditorDefinition'].uncheck('nodes');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('edges');
                        w2ui['toolbararchicgEditorDefinition'].uncheck('none');
                        expressionApplyTo = "eles"
                    }
                }

                if (event.target == "dad") {
                    if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked) {
                        cdnd.disable();
                    }
                    else {
                        w2ui['toolbararchicgEditorDefinition'].uncheck('edge-draw');
                        cdnd.enable();
                        eh.disableDrawMode();
                    }
                }

                if (event.target == "edge-draw") {
                    if (w2ui['toolbararchicgEditorDefinition'].get(event.target).checked) {
                        eh.disableDrawMode();
                    }
                    else {
                        w2ui['toolbararchicgEditorDefinition'].uncheck('dad');
                        cdnd.disable();
                        eh.enableDrawMode();
                    }
                }

                if (event.target == "createNode") { createNode(); };
                if (event.target == "hideSelected") { hideSelected(); };
                if (event.target == "hideUnselected") { hideUnselected() };
                if (event.target == "showAll") { showAll() };
                if (event.target == "deleteSelected") { deleteSelected() };
                if (event.target == "deleteUnselected") { deleteUnselected() };
                if (event.target == "deleteAll") { deleteAll() };
                if (event.target == "restore") { restore() };
                if (event.target == "updateLabel") { updateLabel() };
                if (event.target == "tagNodeWithType") { tagNodeWithType() };
                if (event.target == "tagEdgeWithType") { tagEdgeWithType() };
                if (event.target == "removeSelected") { removeSelected(); };
                if (event.target == "removeUnselected") { removeUnselected() };
                if (event.target == "removeAll") { removeAll() };
                if (event.target == "applySelected") { applySelected() };
                if (event.target == "Filter") {
                    var filter = `${document.getElementById('filter-field').value}`;
                    var filterResult;
                    switch (expressionApplyTo) {
                        case 'nodes':
                            cy.nodes(filter).select();
                            break
                        case 'edges':
                            cy.edges(filter).select();
                            break
                        case 'eles':
                            cy.elements(filter).select();
                            break
                        default:
                            cy.filter(filter).select();
                    };
                }

            }
        },

        sidebar: {
            name: 'sidebar',
            flatButton: true,
            nodes: [
                {
                    id: 'all-properties', text: 'Properties', group: true, expanded: true, groupShowHide: true,
                    nodes: [
                        { id: 'mainproperties', text: 'Label and Description', selected: true },
                        { id: 'archimateproperties', text: 'EA Properties' },
                        { id: 'cytoscapeproperties', text: 'CG Properties' },
                        { id: 'collapsededges', text: 'Collapsed edges' },
                        { id: 'visualproperties', text: 'Visual Properties' },
                        { id: 'entityattributes', text: 'Entity Attributes' }

                    ],
                    onCollapse(event) {
                        event.preventDefault()
                    }
                }
            ],
            onFlat: function (event) {
                w2ui.layoutProperties.sizeTo('left', (event.goFlat ? 35 : 200), true);
            },
            onHide: function (event) {
                alert("destroyed");
            }
            ,
            onClick: function (event) {
                //log(event.target);
                switch (event.target) {
                    case 'mainproperties':
                        //   w2ui.layoutProperties.html('main', $().w2form(config.form));
                        w2ui.layoutProperties.html('main', w2ui.form);
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-grid')
                            .css({ 'border-left': '1px solid silver' });
                        break;
                    case 'archimateproperties':
                        w2ui.layoutProperties.html('main', w2ui.gridProperties);
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-form')
                            .css({ 'border-left': '1px solid silver' });
                        break;
                    case 'cytoscapeproperties':
                        //w2ui.layoutProperties.html('main', '<div style="padding: 10px">cytoscape properties to come next in a future version</div>');
                        w2ui.layoutProperties.html('main', w2ui.form2);
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-grid')
                            .css({
                                'border-left': '1px solid silver'
                            });
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-form')
                            .css({
                                'border-left': '1px solid silver'
                            });
                        break;
                    case 'visualproperties':
                        w2ui.layoutProperties.html('main', '<div style="padding: 10px">visual properties to come next in a future version</div>');
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-grid')
                            .css({
                                'border-left': '1px solid silver'
                            });
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-form')
                            .css({
                                'border-left': '1px solid silver'
                            });
                        break;

                    case 'collapsededge':
                        w2ui.layoutProperties.html('main', w2ui.gridEdges);
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-form')
                            .css({ 'border-left': '1px solid silver' });
                        break;

                    case 'entityattributes':
                        w2ui.layoutProperties.html('main', w2ui.gridAttributes);
                        $(w2ui.layoutProperties.el('main'))
                            .removeClass('w2ui-form')
                            .css({ 'border-left': '1px solid silver' });
                        break;
                }
            }
        }
    }

    const ui = {
        init: function () {
            console.log('UI init started');
            this.menu = [];
            this.panels = {
                mainMenu: null,
                leftPanelTools: null,
                leftPanelPalette: null,
                centerPanelGraph: null,
                bottomPanelAttributes: null,
            };
        },
        test: function () {
            console.log('test');
        }, 
              
        initW2UILayout: function () {
            // Initialisation de la mise en page avec W2UI
            // Call the function to update styles dynamically
            var pstyle = 'border: 1px solid #efefef; padding: 0px;background-color:white';
            $('#archicg-layout').w2layout({
                name: 'mainLayout',
                panels: [
                    { type: 'right', size: "20%", resizable: true, style: pstyle, html: '<div id="palette" class="palette-container"></div>', title: 'Palettes' },
                    { type: 'left', size: "22%", resizable: true, style: pstyle, html: 'left' },
                    {
                        type: 'main', title: "ArchiCG Landscape", header: "ArchiCG Landscape", style: pstyle, resizable: true, html: `
                     <div class="fright" id="cy" style="background-color: white;"></div>
                     <div  id="timeline" style="background-color: white;display:none"></div>
                     <div  id="matrix" style="background-color: white;display:none"></div>
                     <div  id="pivottable" style="background-color: white;display:none">The pivot table</div>`},
                    { type: 'bottom', size: "25 %", resizable: true, style: pstyle, html: "bottom" },
                ]
            });
           
            w2ui.mainLayout.html('bottom', $().w2layout(ui_config.layoutProperties));
            w2ui.layoutProperties.html('left', $().w2sidebar(ui_config.sidebar));
            w2ui.layoutProperties.html('main', $().w2grid(ui_config.gridEdges));
            w2ui.layoutProperties.html('main', $().w2grid(ui_config.gridAttributes));
            w2ui.layoutProperties.html('main', $().w2grid(ui_config.gridProperties));
            w2ui.layoutProperties.html('main', $().w2form(ui_config.form2));
            w2ui.layoutProperties.html('main', $().w2form(ui_config.form));
            $('#mainmenu').w2toolbar(ui_config.mainmenu)
            //ui.test()
            global.w2ui=w2ui

        },


        // Function to load UI components (e.g., main menu, panels)
        loadUIComponents: function () {
            console.log('Loading UI components...');
            // Example: setting up a simple W2UI component
            w2ui['mainMenu'] = new w2ui['mainMenu']();
            console.log('Main Menu loaded.');
        },

        // Function to load tool modules like importTool, exportTool
        loadToolModules: function () {
            console.log('Loading tool modules...');
            // Example: Dynamically loading tools (without import/export)
            if (typeof importTool === 'function') {
                importTool.init();
                console.log('Import Tool loaded.');
            }

            if (typeof exportTool === 'function') {
                exportTool.init();
                console.log('Export Tool loaded.');
            }
        },
        // Function to setup the graph
        setupGraph: function () {
            console.log('Setting up graph...');
            if (global.state.currentGraph) {
                // Assuming Cytoscape.js is available
                cytoscape({ container: document.getElementById('cy') });
                console.log('Graph setup with existing data.');
            } else {
                console.log('No graph data found.');
            }
        },

        // Function to set up event listeners for UI interactions
        setupEventListeners: function () {
            console.log('Setting up event listeners...');
            document.getElementById('importButton').addEventListener('click', () => {
                console.log('Import button clicked!');
                // Handle import functionality here
            });
        }
    }
    global.ui = ui;
})(window); // Pass window object to the IIFE