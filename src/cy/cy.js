(function cy_iffe(global) {
    var cyGraph = [];

    var defaultCyLayout = {
        name: "fcose",
        randomize: true,
        // boundingBox:{x1:0,y1:0,x2:2000,y2:2000}, //does not apply to fcose
        //       fisheye: true,
        animate: 'end',
        fit: true,
        nodeDimensionsIncludeLabels: "true",
        condense: true,
        gravity: 1000,
        gravityRangeCompound: 1,
        gravityCompound: 0.5,
        gravityRange: 3.8,
        packComponents: true,
        //       initialEnergyOnIncremental: 0.3,
        //       nodeRepulsion: node => 10000,
        //       idealEdgeLength: edge => 10,
        //       edgeElasticity: edge => 0.45,
        //       nestingFactor: 0.1,
        numIter: 5000,
        quality: "default"
    };

    /// complementary layout with parameters to define when randomize is not used for layouting
    //packing
    var layout2 = {
        idealEdgeLength: 1,
        offset: 20,
        desiredAspectRatio: 10,
        polyominoGridSizeFactor: 0.1,
        utilityFunction: 1,
        componentSpacing: 1
    }
    var cyLayout = defaultCyLayout;
    var acgLayout = "fcose";
    var cy;

    //// Rendering functions for an edge, in order to reflect visual definition of ArchiMate relationships
    /// Extended to some specialization and complementary types of objects not part of ArchiMate
    function renderEdge(ele) {
        var sourceArrowShape = "none";
        var sourceArrowColor = "black";
        var sourceArrowFill = "filled";
        var targetArrowShape = "none";
        var targetArrowColor = "black";
        var targetArrowFill = "filled";
        var sourceArrowShape = "none";
        var lineStyle = "solid";
        var midTargetArrowShape = "none";
        var midTargetArrowColor = "black";
        var lineDashPattern = [5, 5];
        var lineColor = "black";
        var label = undefined;
        var width = 1;


        label = ele.data("label");

        switch (ele.data("edgeType")) {
            case "realization": targetArrowShape = "triangle"; targetArrowFill = "hollow"; lineStyle = "dashed"; break;
            case "specialization": targetArrowShape = "triangle"; targetArrowFill = "hollow"; break;
            case "triggering": targetArrowShape = "triangle"; break;
            case "flow": targetArrowShape = "triangle"; lineStyle = "dashed"; lineDashPattern = [10, 10]; break;
            case "serving": targetArrowShape = "chevron"; break;
            case "influence": targetArrowShape = "chevron"; lineStyle = "dashed"; lineDashPattern = [10, 10]; break;
            case "assignment": targetArrowShape = "chevron"; sourceArrowShape = "circle"; break;
            case "access": lineStyle = "dashed"; targetArrowShape = "chevron";
                break;
            case "aggregation":
                sourceArrowShape = "diamond"; sourceArrowFill = "hollow"; break;
            case "composition":
                sourceArrowShape = "diamond"; sourceArrowFill = "filled";
                ele.css('visibility', 'visible');
                ele.css('display', 'element')
                if (ele.target().data("parentRelationId") !== null)// a (composition) relation exists from which the nesting is derived
                {
                    if (ele.target().data("parentRelationId") == ele.id())// this composition is the relation
                    {
                        if (ele.target().data("parent") !== null)//the target node (component) is nested in the source node(composite)
                        {
                            if (showEdgeComposite == false)//show Edge Composite is set to false
                            {
                                ele.css('visibility', 'hidden');
                                ele.css('display', 'none')
                            }
                        }
                    }
                }

                break;
            case "association": midTargetArrowShape = "triangle"; break;
            default: break;
        }

        if (ele.data("ArchiMateAllowedRelationship") === undefined) { } else {
            if (ele.data("ArchiMateAllowedRelationship")) {
                targetArrowColor = "green"; sourceArrowColor = "green"; lineColor = "green"; midTargetArrowColor = "green";
            }
            else {
                targetArrowColor = "red"; sourceArrowColor = "red"; lineColor = "red"; midTargetArrowColor = "red";
            }
        }
        if (typeof ele.data(globalColoredProperty) !== 'undefined') {
            width = globalArrowWidth;
            try {
                if (propertyColorDefined) { var lineColor = pColor(ele.data(globalColoredProperty)); }
            } catch (error) { logger.debug("erreur 4") }
            try {
                if (valueTypeColorDefined) { var lineColor = pColor(typeof ele.data(globalColorProperty)); }
            } catch (error) { logger.debug("erreur 4") }
        }

        return {
            sourceArrowShape: sourceArrowShape,
            sourceArrowColor: sourceArrowColor,
            sourceArrowFill: sourceArrowFill,
            targetArrowShape: targetArrowShape,
            targetArrowColor: targetArrowColor,
            targetArrowFill: targetArrowFill,
            sourceArrowShape: sourceArrowShape,
            lineStyle: lineStyle,
            midTargetArrowShape: midTargetArrowShape,
            midTargetArrowColor: midTargetArrowColor,
            lineDashPattern: lineDashPattern,
            "label": label,
            lineColor: lineColor,
            width: width
        };
    }
    //// Rendering function of nodes in order to associate ArchiMate symbol (SVG Icon) corresponding to ArchiMate language for model elements
    /// Extended to some specialization and complementary types of objects not part of ArchiMate
    function renderNode(ele) {
        const iconResize = 1; // adjust this for more "padding" (bigger number = more smaller icon)
        var width = 50;
        var height = 50;
        const type = ele.data("type");
        const specialization = ele.data("specialization");
        var textValign = "bottom";
        var dcolor = "white";
        // var icon= ArchiMate(type);
        var iconsArray = [];
        if (globalElementVisualMode == "nodes") { iconsArray = archicgIconURLArray; }
        if (globalElementVisualMode == "boxes") {
            iconsArray = archicgBoxWithIconURLArray;
            textValign = "center";
            width = 300;
            height = 200;
        }
        //var icon=archicgIconURLArray[type];  
        var icon = iconsArray[type];
        if (type == "andjunction") { icon = archicgIconURLArray[type] }
        if (type == "orjunction") { icon = archicgIconURLArray[type] }
        //var icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJib3gyIiBjbGFzcz0iZWxlbWVudC1jb250cmFjdCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj4KIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSI1ODAiIGhlaWdodD0iMzgwIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjUiPjwvcmVjdD4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTAsMCkiPgoKICAgIDxpbWFnZSBocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJR2xrUFNKMGFYUnBJaUJqYkdGemN6MGlaV3hsYldWdWRDMWpiMjUwY21GamRDSWdkMmxrZEdnOUlqRXdNQ0lnYUdWcFoyaDBQU0l4TURBaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01UQXdJajRLSUNBOGNHRjBhQ0JrUFNKdElERXdJREV3SUVnZ09UQWdWaUE1TUNCV0lEa3dJRllnT1RBZ1NDQXhNQ0JhSUUwZ01UQWdNalVnU0NBNU1DQk5JREV3SURjMElFZ2dPVEFpSUhOMGNtOXJaVDBpWW14aFkyc2lJSE4wY205clpTMTNhV1IwYUQwaU1TSWdabWxzYkQwaUkyWm1abVppTVNJK1BDOXdZWFJvUGdvOEwzTjJaejQ9Ij48L2ltYWdlPiA8L2c+Cgo8L3N2Zz4=";
        var iconOpacity = 1;

        if (type !== undefined && acgTypes.includes(type)) {
            if (document.getElementById(type + "-button").style.display == "none") { iconOpacity = 0.3 }
        }
        if (icon == undefined) { icon = archicgIconURLArray["not-defined"] };
        var overlayOpacity = globalOverlayOpacity;
        if (typeof ele.data(globalColoredProperty) !== 'undefined') {
            if (propertyColorDefined) {
                dcolor = pColor(ele.data(globalColoredProperty));
                overlayOpacity = POverlayOpacity
            }
            if (valueTypeColorDefined) {
                dcolor = pColor(typeof ele.data(globalColoredProperty));
                overlayOpacity = POverlayOpacity
            }
        }
        if (specializationRequirement.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        if (specializationStakeholder.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        if (specializationProduct.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        if (specializationApplicationComponent.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        if (specializationFacility.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        if (specializationBusinessActor.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        if (specializationWorkPackage.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        if (specializationBusinessProcess.includes(specialization)) {
            icon = iconsArray[specialization];
        }
        var response = { img: icon, height, width, dcolor, iconOpacity, overlayOpacity: overlayOpacity, textValign };
        return response;
    }

    function renderParentNode(ele) {
        const iconResize = 1; // adjust this for more "padding" (bigger number = more smaller icon)
        const width = 300;
        const height = 200;
        const type = ele.data("type");
        const specialization = ele.data("specialization");
        var icon = archicgIconURLArray[type];
        var iconOpacity = 1;
        var dcolor = "white";

        if (type !== undefined && acgTypes.includes(type)) {
            if (document.getElementById(type + "-button").style.display == "none") { iconOpacity = 0.3 }
        }
        if (icon == undefined) { icon = archicgIconURLArray["not-defined"] };

        var overlayOpacity = globalOverlayOpacity;
        if (typeof ele.data(globalColoredProperty) !== 'undefined') {
            try {
                if (propertyColorDefined) {
                    dcolor = pColor(ele.data(globalColoredProperty));
                    overlayOpacity = POverlayOpacity;
                }
            } catch (error) { logger.debug("erreur 1") }
            try {
                if (valueTypeColorDefined) {
                    dcolor = pColor(typeof ele.data(globalColoredProperty));
                    overlayOpacity = POverlayOpacity;
                }
            } catch (error) { logger.debug("erreur 2") }
        }

        if (specializationRequirement.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        if (specializationStakeholder.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        if (specializationProduct.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        if (specializationApplicationComponent.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        if (specializationFacility.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        if (specializationBusinessActor.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        if (specializationWorkPackage.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        if (specializationBusinessProcess.includes(specialization)) { icon = archicgIconURLArray[specialization]; }
        var response = { img: icon, height, width, dcolor, iconOpacity, overlayOpacity: overlayOpacity };
        return response;
    }


    function createNode(name, doCollapse = true, doExpand = true) {
        var selection = cy.nodes(":selected");
        var myUUID = new UUID(4);
        var myLabel = "";
        globalLabel = document.getElementById('globalLabel').value;
        if (name === undefined) { myLabel = globalLabel; } else { myLabel = name }
        var myNode = {
            group: 'nodes',
            data: {
                id: `${myUUID}`,
                timestamp: new Date(),
                type: globalNodeType,
                "label": myLabel,
                position: { x: 100, y: 100 },
                parent: null
            }
        };

        if (specializationBusinessActor.includes(globalNodeType)) {
            myNode.data.type = "business-actor";
            myNode.data.specialization = globalNodeType;
        }
        if (specializationWorkPackage.includes(globalNodeType)) {
            myNode.data.type = "work-package";
            myNode.data.specialization = globalNodeType;
        }
        if (specializationBusinessProcess.includes(globalNodeType)) {
            myNode.data.type = "business-process";
            myNode.data.specialization = globalNodeType;
        }
        if (specializationRequirement.includes(globalNodeType)) {
            myNode.data.type = "requirement";
            myNode.data.specialization = globalNodeType;
        }
        if (specializationStakeholder.includes(globalNodeType)) {
            myNode.data.type = "stakeholder";
            myNode.data.specialization = globalNodeType;
        }
        if (specializationProduct.includes(globalNodeType)) {
            myNode.data.type = "product";
            myNode.data.specialization = globalNodeType;
        }
        if (specializationApplicationComponent.includes(globalNodeType)) {
            myNode.data.type = "application-component";
            myNode.data.specialization = globalNodeType;
        }
        if (specializationFacility.includes(globalNodeType)) {
            myNode.data.type = "facility";
            myNode.data.specialization = globalNodeType;
        }
        var selection = cy.nodes(":selected");
        if (undoRedo) { ur.do("add", [myNode]); } else { var eles = cy.add([myNode]); }

        if (selection.length == 1) {
            if (undoRedo) {
                var args = {
                    parentData: selection[0].id(),
                    nodes: cy.$id(`${myUUID}`),
                    posDiffX: 0,
                    posDiffY: 0
                }
                ur.do("changeParent", args);
                if (doExpand) { ur.do("expandRecursively", { nodes: cy.$id(selection[0].id()) }); }
            } else {
                cy.$id(`${myUUID}`).move({ parent: selection[0].id() });
                if (doExpand) { api.expandRecursively(cy.$id(selection[0].id())); }
            }
        }
        else {
            if (undoRedo && doCollapse) { ur.do("collapseAll"); } else { api.collapseAll(); }
        }
    }

    function setColor4CompoundEdge(e) {
        const collapsedEdges = e.data('collapsedEdges');
        if (doElemsMultiTypes(collapsedEdges)) {
            return '#b3b3b3';
        }
        return collapsedEdges[0].style('line-color')
    }

    function setTargetArrowShape(e) {
        const collapsedEdges = e.data('collapsedEdges');
        const shapes = {};
        for (let i = 0; i < collapsedEdges.length; i++) {
            shapes[collapsedEdges[0].style('target-arrow-shape')] = true;
        }
        delete shapes['none'];
        if (Object.keys(shapes).length < 1) {
            if (collapsedEdges.sources().length > 1) {
                return collapsedEdges[0].style('source-arrow-shape');
            }
            return 'none';
        }
        return Object.keys(shapes)[0];
    }

    function setSourceArrowShape(e) {
        const collapsedEdges = e.data('collapsedEdges');
        const shapes = {};
        for (let i = 0; i < collapsedEdges.length; i++) {
            shapes[collapsedEdges[0].style('source-arrow-shape')] = true;
        }
        delete shapes['none'];
        if (Object.keys(shapes).length < 1) {
            if (collapsedEdges.sources().length > 1) {
                return collapsedEdges[0].style('target-arrow-shape');
            }
            return 'none';
        }
        return Object.keys(shapes)[0];
    }

    function doElemsMultiTypes(elems) {
        const classDict = {};
        for (let i = 0; i < elems.length; i++) {
            classDict[elems[i].data('edgeType')] = true;
        }
        return Object.keys(classDict).length > 1;
    }
    /// Initialisation of the archicg compound interactive graph interactive viewer
    cyGraph = cyGraph.concat(initialgraph);
    console.log(cyGraph)

    cy = window.cy = cytoscape({
        container: document.getElementById('cy'),
        ready: function () {
            this.layout(cyLayout).run();
            var api = this.expandCollapse({ layoutBy: cyLayout, animate: 'end', undoable: false });
            fisheye: true,
                api.collapseAll();
        },
        style: [
            {
                selector: "node.cy-expand-collapse-collapsed-node",
                style: {
                    "background-color": "white",
                    shape: "rectangle",
                    "line-color": "red"
                }
            },
            /// nodes are defined calling a renderer associating appropriate icons and visual styles 
            //  for each type associated to the node
            {
                selector: 'node',
                style: {
                    "font-size": "20px",//String((Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])))+"px",
                    'background-color': 'white',
                    "label": (ele) => calculateLabel(ele),//"data(label)",
                    "text-halign": "center",
                    "text-justification": "center",
                    "text-valign": (ele) => renderNode(ele).textValign,//"center",
                    "text-border-color": "black",
                    "text-border-width": 0,
                    "text-border-style": "solid",
                    "text-border-opacity": 1,
                    "text-wrap": "wrap",
                    "text-overflow-wrap": "whitespace",
                    "text-max-width": "200",
                    "background-image": (ele) => renderNode(ele).img,
                    width: (ele) => renderNode(ele).width,
                    height: (ele) => renderNode(ele).height,
                    "background-opacity": 0,
                    "background-image-opacity": (ele) => renderNode(ele).iconOpacity,
                    "background-fit": "none",
                    "overlay-opacity": (ele) => renderNode(ele).overlayOpacity,
                    "overlay-color": (ele) => renderNode(ele).dcolor,
                    // "ghost":"yes","ghost-opacity":"0.2","ghost-offset-x": 3,"ghost-offset-y": 3,
                    shape: "rectangle"
                }
            },

            {
                selector: ':parent',
                style: {
                    'background-color': 'white',
                    "label": "data(label)",
                    "text-halign": "center",
                    "text-justification": "center",
                    "text-valign": "top",
                    "text-border-color": "black",
                    "text-border-width": 0,
                    "text-border-style": "solid",
                    "text-border-opacity": 1,
                    "text-wrap": "none",
                    // "text-overflow-wrap":"whitespace",
                    // "text-max-width":"1000",
                    "background-image": (ele) => renderParentNode(ele).img,
                    "background-image-opacity": (ele) => renderParentNode(ele).iconOpacity,
                    "overlay-opacity": (ele) => renderParentNode(ele).overlayOpacity,
                    "overlay-color": (ele) => renderParentNode(ele).dcolor,
                    "border-width": 5,
                    "border-opacity": 1,
                    "background-color": "white",
                    "z-compound-depth": "auto",
                    "border-color": `black`,
                    "background-position-x": "100%",
                    "background-position-y": "0%",
                    "background-opacity": "1",
                    "padding": "50px",
                    "background-clip": "none",
                    "bounds-expansion": ["50px", "50px", "0px", "0px"],
                    "font-size": "20px",//String((Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])*2))+"px",
                    "border-color": "black",
                    "border-width": 3,
                    "background-opacity": "1"
                }
            },
            /// Style associated to collapsed nodes
            {
                selector: "node.cy-expand-collapse-collapsed-node",
                style: {
                    "background-color": "white",
                    "shape": "rectangle",
                    "border-color": "black",
                    "border-width": 3,
                    "background-opacity": "1",
                    "font-size": "20px"//String((Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])*2))+"px"     
                }
            },
            /// edges are defined calling a renderer associating appropriate icons and visual styles 
            //  for each relation type associated to the edges
            //  Edges styles are aligned with visual symbols defined by ArchiMate language for relationships 
            {
                selector: 'edge',
                style: {
                    'line-color': 'black',
                    'curve-style': 'bezier',
                    "width": (ele) => renderEdge(ele).width,
                    // 'arrow-scale':1,
                    //   visibility: "hidden",

                    "target-arrow-shape": (ele) => renderEdge(ele).targetArrowShape,
                    "target-arrow-color": (ele) => renderEdge(ele).targetArrowColor,
                    "target-arrow-fill": (ele) => renderEdge(ele).targetArrowFill,
                    "source-arrow-shape": (ele) => renderEdge(ele).sourceArrowShape,
                    "source-arrow-color": (ele) => renderEdge(ele).sourceArrowColor,
                    "source-arrow-fill": (ele) => renderEdge(ele).sourceArrowFill,
                    "line-style": (ele) => renderEdge(ele).lineStyle,
                    "mid-target-arrow-shape": (ele) => renderEdge(ele).midTargetArrowShape,
                    "mid-target-arrow-color": (ele) => renderEdge(ele).midTargetArrowColor,
                    "line-dash-pattern": (ele) => renderEdge(ele).lineDashPattern,
                    "target-endpoint": "inside-to-node",
                    "target-distance-from-node": 0,
                    "label": (ele) => renderEdge(ele).label,
                    "source-endpoint": "outside-to-node-or-label",
                    "target-endpoint": "outside-to-node-or-label",
                    "source-distance-from-node": "10px",
                    "target-distance-from-node": "10px",
                    "line-color": (ele) => renderEdge(ele).lineColor,
                }
            },
            {
                selector: ':selected',
                style: {
                    'overlay-color': "#6c757d",
                    'overlay-opacity': 0.2,
                    'background-color': "#F4F6F7"
                }
            },
            {
                selector: '.cdnd-grabbed-node',
                style: {
                    'background-color': 'red'
                }
            },

            {
                selector: '.cdnd-drop-sibling',
                style: {
                    'background-color': 'red'
                }
            },

            {
                selector: '.cdnd-drop-target',
                style: {
                    'border-color': 'red',
                    'border-style': 'dashed'
                }
            },
            {
                selector: 'edge.cy-expand-collapse-collapsed-edge',
                style:
                {
                    "text-outline-color": "#ffffff",
                    "text-outline-width": "2px",
                    'label': (e) => {
                        return '(' + e.data('collapsedEdges').length + ')';
                    },
                    'width': function (edge) {
                        const n = edge.data('collapsedEdges').length;
                        return (3 + Math.log2(n)) + 'px';
                    },
                    'line-style': 'dashed',
                    'line-color': setColor4CompoundEdge.bind(this),
                    'target-arrow-color': setColor4CompoundEdge.bind(this),
                    'target-arrow-shape': setTargetArrowShape.bind(this),
                    'source-arrow-shape': setSourceArrowShape.bind(this),
                    'source-arrow-color': setColor4CompoundEdge.bind(this),
                }
            },
        ],
        elements: cyGraph
    });
    cy.fit();

    ur = cy.undoRedo({
        isDebug: true
    });
    ur.action("changeLabels", changeLabels, restoreLabels);
    ur.action("changeNodesTypes", changeNodesTypes, restoreNodesTypes);
    ur.action("changeEdgesTypes", changeEdgesTypes, restoreEdgesTypes);


    // this layout is called for applying parameters for fcose layout without randomize
    cy.layoutUtilities(layout2);

    // Compound Drag and Drop
    cdnd = cy.compoundDragAndDrop();
    cdnd.disable();
    var removeEmptyParents = false;

    var isParentOfOneChild = function (node) {
        return node.isParent() && node.children().length === 1;
    };

    var removeParent = function (parent) {
        parent.children().move({ parent: null });
        parent.remove();
    };

    var removeParentsOfOneChild = function () {
        cy.nodes().filter(isParentOfOneChild).forEach(removeParent);
    };

    // custom handler to remove parents with only 1 child on drop
    cy.on('cdndout', function (event, dropTarget) {
        if (removeEmptyParents && isParentOfOneChild(dropTarget)) {
            removeParent(dropTarget);
        }
    });

    // Listen for changes to update property names
    cy.on('add remove data layoutstop', function () {
        updatePropertyNames();
    });
    // Variables to store the current element being edited and the text buffer
    var currentElement = null;
    var textBuffer = '';

    // Event listener for selecting nodes or edges
    cy.on('select', 'node, edge', function (event) {
        if (cy.$(':selected').length === 1) {
            currentElement = event.target; // Store the single selected element
            textBuffer = currentElement.data('label') || ''; // Initialize the text buffer with the current label
        } else {
            deactivateEditing(); // Deactivate editing if more than one element is selected
        }
    });

    // Event listener for deselecting nodes or edges
    cy.on('unselect', 'node, edge', function (event) {
        if (cy.$(':selected').length === 0) {
            deactivateEditing(); // Deactivate editing if no elements are selected
        } else if (cy.$(':selected').length === 1) {
            currentElement = cy.$(':selected')[0]; // Continue editing the remaining selected element
            textBuffer = currentElement.data('label') || '';
        } else {
            deactivateEditing(); // Deactivate editing if more than one element is selected
        }
    });

    // Function to deactivate text editing
    function deactivateEditing() {
        currentElement = null; // Clear the current element
        textBuffer = ''; // Clear the text buffer
        // Note: Do not unselect elements here, just deactivate text editing
    }

    // Event listener for clicking outside the Cytoscape container
    document.addEventListener('mousedown', function (event) {
        var cyContainer = document.getElementById('cy');

        // If the click is outside the Cytoscape container, deactivate editing
        if (!cyContainer.contains(event.target)) {
            deactivateEditing();
        }
    });

    // Event listener for focusout (losing focus from Cytoscape container)
    cy.container().addEventListener('focusout', function (event) {
        // Deactivate editing if focus is lost
        deactivateEditing();
    });

    // Event listener for keyboard input
    document.addEventListener('keydown', function (event) {
        if (!currentElement) return; // If no element is selected, do nothing

        // Handle text input
        if (event.key === 'Backspace') {
            // Handle backspace
            textBuffer = textBuffer.slice(0, -1);
        } else if (event.key.length === 1) {
            // Handle normal text input
            textBuffer += event.key;
        } else if (event.key === 'Tab') {
            // Deactivate editing if Tab key is pressed (focus shifting)
            deactivateEditing();
            return; // Let the Tab key do its default action (focus shift)
        } else {
            // Ignore other control keys (Enter, Shift, etc.)
            return;
        }

        // Update the label of the selected element
        currentElement.data('label', textBuffer);

        // Prevent default action for backspace
        event.preventDefault();
    });


    // custom handler to remove parents with only 1 child (on remove of drop target or drop sibling)
    cy.on('remove', function (event) {
        if (removeEmptyParents) {
            removeParentsOfOneChild();
        }
    });

    cy.on('drag', function (event) {
        logger.debug(`Event: ${event.type}`);
        logger.debug(`Target: ${event.target ? event.target.id() : 'No target'}`);
        logger.debug(event);
    });


    // end Compound Drag and Drop


    function headerFromSelected() {
        var selected = cy.elements(':selected');
        //log("selected:"+selected.length);
        var myId = undefined;
        var myGraphType = "";
        var myarchicgType = undefined;
        var myTimestamp = undefined;
        if (selected.length == 1) {
            selected.forEach(function (el) {
                myId = cy.$(el).id();
                if (el.isNode()) {
                    if (el.data("type") !== null && el.data("type") !== undefined) {
                        myarchicgType = el.data("type");
                        myarchicgType = myarchicgType.charAt(0).toUpperCase() + myarchicgType.slice(1)
                    }
                }
                if (el.isEdge()) {
                    if (el.data("type") !== null && el.data("type") !== undefined) {
                        myarchicgType = el.data("edgeType");
                        myarchicgType = myarchicgType.charAt(0).toUpperCase() + myarchicgType.slice(1)
                    }
                }

                if (el.isNode()) { myGraphType = "Node"; } else { myGraphType = "Edge"; }
                if (el.data("timestamp") !== null) { myTimestamp = el.data("timestamp"); }
            })
            var mySpecialization = "";
            var elementSpecialization = selected.data("specialization");
            if (elementSpecialization !== undefined && elementSpecialization !== "") { mySpecialization = specializationDenotation + elementSpecialization }

            var elementDescription = `${myarchicgType}${mySpecialization} ${myGraphType} with id:${myId}`;
            //if (myTimestamp !==undefined){elementDescription+= ` timestamp:${myTimestamp}`}

            return elementDescription;
        }

        else { return "No graph Element selected: double clik on a node or a edge"; }
    }


    // global variable collecting the removed element ??
    removed = cy.collection();

    //// Management of events when dblcliking visual elements, being on the graph widget or on the archicg icon palette

    cy.on('dblclick', function (e) {

        /// DblClicking on the compound graph
        deactivateEditing();

        var eTarget = e.target;
        if (eTarget.isNode()) {
            var myDegree = eTarget.degree();
            var myIndegree = eTarget.indegree();
            var myOutdegree = eTarget.outdegree();
            var hasClass = eTarget.hasClass();
            // var numericStyle=eTarget.numericStyle();
            // var numericStyleUnits=eTarget.numericStyleUnits();
            var isVisible = eTarget.visible();
            var effectiveOpacity = eTarget.effectiveOpacity();
            var transparent = eTarget.transparent();
            if (URLNavigationActivated) {
                alert(`You want navigate an URL associated to ${eTarget.id()}`);
                if (typeof eTarget.data(URLProperty) === 'undefined') {
                    alert(
                        `The property  "${URLProperty}" which is currently the one associated to URL navigation is undefined for this node.

So let's add an URL value for this property on the node, by accessing EA properties and adding a record you will save.

In case the property containing the URL to be navigated is not the good one, let's change the URL property using URLNavigation tool.

Access it using the  Tools menu.`)
                }
                else {
                    try {
                        var myURL = eTarget.data(URLProperty);
                        //alert (myURL);
                        var myTarget = eTarget.id();
                        //alert (myTarget)
                        open(myURL, myTarget)
                        //open(eTarget.data(URLProperty),eTarget.data(type)+": "+  eTarget.id());
                    } catch (error) {
                        console.error(error);
                    }
                }
            }

            // NumericStyle:${numericStyle}
            //numericStyleUnits: ${numericStyleUnits}

            var message = `
      Degree is ${myDegree}
      Indegree is ${myIndegree}
      Outdegree is ${myOutdegree}
      Hasclass: ${hasClass}
      Visible: ${isVisible}
      Effective Opacity: ${effectiveOpacity}
      Transparent: ${transparent} 
      Position x: ${eTarget.position().x}
      Position y: ${eTarget.position().y}
      Rendered Position x: ${eTarget.renderedPosition().x}
      Rendered Position y: ${eTarget.renderedPosition().y}
      Relative Position x: ${eTarget.relativePosition().x}
      Relative Position y: ${eTarget.relativePosition().y}
      Width: ${eTarget.width()} 
      Outer width: ${eTarget.outerWidth()}  
      Rendered width: ${eTarget.renderedWidth()}  
      Rendered outer width: ${eTarget.renderedOuterWidth()}
      Height: ${eTarget.height()} 
      Outer height: ${eTarget.outerHeight()}  
      Rendered height: ${eTarget.renderedHeight()}  
      Rendered outer height: ${eTarget.renderedOuterHeight()}            
      `;
            //alert (message)
        }

        if (eTarget === cy) {
            //log('dblclick on background');
            w2ui['gridProperties'].clear();
            w2ui['gridAttributes'].clear();
            w2ui['gridEdges'].clear();
            w2ui.form.setValue("label", "");
            w2ui.form.setValue("description", "");
            w2ui.form.header = headerFromSelected();
            w2ui.form2.header = headerFromSelected();
            w2ui.gridProperties.header = headerFromSelected();
            w2ui.gridEdges.header = headerFromSelected();
            w2ui.gridAttributes.header = headerFromSelected();
            w2ui.form.disable('label', 'description');
            w2ui.form2.disable('id', 'parent', 'source', 'target', 'parentRelationId', 'parentRelationType', 'parentContainmentId', 'timestamp');
            //w2ui.form.refresh();
            return;
        } else {
            if (eTarget.classes().includes('cy-expand-collapse-collapsed-edge')) {
                w2ui['gridProperties'].clear();
                w2ui['gridAttributes'].clear();
                w2ui['gridEdges'].clear();
                w2ui.form.setValue("label", "");
                w2ui.form.setValue("description", "");
                //alert(Flatted.stringify(eTarget))
                //log.dir(eTarget.collapsedChildren())
                exploreCollapsedEdge(eTarget)
                w2ui.form.header = headerFromSelected();
                w2ui.form2.header = headerFromSelected();
                w2ui.gridProperties.header = headerFromSelected();
                w2ui.gridAttributes.header = headerFromSelected();
                w2ui.gridEdges.header = headerFromSelected();
                w2ui.form.disable('label', 'description');
                w2ui.form2.disable('id', 'parent', 'source', 'target', 'parentRelationId', 'parentRelationType', 'parentContainmentId', 'timestamp');
            }
            else {
                if (eTarget.isNode() || eTarget.isEdge) {
                    //log('dblclick on '+eTarget.id()+ " node: "+ eTarget.isNode() + " edge: "+ eTarget.isEdge());
                    //put the selected element in a global variable
                    //log(eTarget[0].data());
                    myProperties = eTarget[0].data();
                    myGrid = [];
                    w2ui.form.setValue("label", "");
                    w2ui.form.setValue("description", "");
                    w2ui.form2.setValue("id", "");
                    w2ui.form2.setValue("parent", "");
                    w2ui.form2.setValue("source", "");
                    w2ui.form2.setValue("target", "");
                    w2ui.form2.setValue("parentRelationId", "");
                    w2ui.form2.setValue("parentRelationType", "");
                    w2ui.form2.setValue("parentContainmentId", "");
                    w2ui.form2.setValue("timestamp", "");
                    var iterator = 1;
                    var record = {};
                    /// The properties related to the compound graph structuration are mixed with data properties
                    //  so they have to be filtered, in order not to be displayed on the appropriate display panel

                    /// Label and description panels are displayed in the dedicated form

                    w2ui.form2.setValue("identifier", eTarget.id());
                    w2ui.form2.setValue("timestamp", eTarget.data("timestamp"));
                    w2ui.form2.setValue("parent", eTarget.data("parent"));
                    w2ui.form2.setValue("parentRelationId", eTarget.data("parentRelationId"));
                    w2ui.form2.setValue("parentRelationType", eTarget.data("parentRelationType"));
                    w2ui.form2.setValue("parentContainmentId", eTarget.data("parentContainmentId"));
                    if (eTarget.isEdge()) {
                        w2ui.form2.setValue("source", eTarget.source().id());
                        w2ui.form2.setValue("target", eTarget.target().id());
                    }

                    for (var key in myProperties) {
                        ///managing the Collapsing properties
                        if (collapseProperties.includes(key) || ITProperties.includes(key)) { }
                        else {
                            /// managing the label and description display on a dedicated form
                            if (ldProperties.includes(key)) {
                                if (myProperties[key] == null) { w2ui.form.setValue(key, ""); }
                                else { w2ui.form.setValue(key, myProperties[key]); };
                            }
                            //else{ 
                            /// managing the properties associated to model elements for display in a dedicated grid widget
                            //  Some care is taken concerning null or undefined properties, or properties not defined as simple string (objects, arrays ...)
                            //     They are currently not managed, potential future extension
                            //log("property " + key + " has value " + myProperties[key]);
                            var myValue = myProperties[key];
                            record.fname = key;
                            if (myValue == null) { }
                            else {
                                if (myValue.constructor.name === "Object") { }
                                else {
                                    if (myValue.constructor.name === "Array") {
                                        myValue.forEach(function (value) {
                                            if (value.constructor.name === "Object") { record.lvalue = JSON.parse(JSON.stringify(value)); }
                                            else { record.lvalue = value; }
                                            record.recid = iterator;
                                            myGrid.push(JSON.parse(JSON.stringify(record)));
                                            iterator += 1;
                                        }
                                        )
                                    }
                                    else {
                                        if (key == "attributes") { gridEntityAttribute(myValue) }
                                        record.lvalue = myProperties[key];
                                        record.recid = iterator;
                                        myGrid.push(JSON.parse(JSON.stringify(record)));
                                        iterator += 1;
                                    }
                                }
                            }
                            //log(JSON.stringify(myGrid));
                            w2ui['gridProperties'].clear();
                            w2ui['gridProperties'].add(myGrid);
                            w2ui.form.header = headerFromSelected();
                            w2ui.form2.header = headerFromSelected();
                            w2ui.gridProperties.header = headerFromSelected();
                            w2ui.gridEdges.header = headerFromSelected();
                            w2ui.gridAttributes.header = headerFromSelected();
                            w2ui.form.enable('label', 'description');
                            w2ui.form2.refresh();
                            w2ui.gridProperties.refresh();
                            w2ui.gridAttributes.refresh();
                            w2ui.gridEdges.refresh();
                            w2ui.sidebar.select('mainproperties');
                            //w2ui.layoutProperties.html('main',w2ui.form);
                            w2ui.form.refresh();
                            //  }
                        }
                    }
                }
            }
        }
        /// Interactions with the Accordion Pane interface
        var elements = cy.elements(':selected');
        var myLabel = undefined;
        var myId = undefined;
        var myType = undefined;
        var myParentId = undefined;
        var myParentRelation = undefined;
        var myParentRelationId = undefined;
        var myParentContainmentId = undefined;
        var myParentRelationType = undefined;
        var mySourceId = undefined;
        var myTargetId = undefined;
        elements.forEach(function (el) {
            myLabel = cy.$(el).data("label");
            //log("myLabel: "+myLabel);
            myId = cy.$(el).id();

            if (eTarget.isNode()) {
                myType = cy.$(el).data("type");
                myParentId = cy.$(el).data("parent");
                myParentRelationId = cy.$(el).data("parentRelationId");
                myParentRelationType = cy.$(el).data("parentRelationType");
                myParentContainmentId = cy.$(el).data("parentContainementId");
            }
            if (eTarget.isEdge()) {
                myType = cy.$(el).data("edgeType");
                mySourceId = cy.$(el).data("source");
                myParentId = cy.$(el).data("parent");
            }
        });
        if (document.getElementById('globalLabel')) { document.getElementById('globalLabel').value = myLabel; }
        // document.getElementById('globalNodeId').value = undefined;
        if (document.getElementById('globalNodeType')) { document.getElementById('globalNodeType').value = undefined; }
        // document.getElementById('globalParentId').value= undefined;
        // document.getElementById('edgeId').value = undefined;
        if (document.getElementById('globalEdgeType')) { document.getElementById('globalEdgeType').value = undefined; }
        // document.getElementById('parentRelationType').value= undefined;
        // document.getElementById('parentRelationId').value= undefined;
        // document.getElementById('globalSourceId').value= undefined;
        // document.getElementById('globalTargetId').value= undefined;

        if (eTarget.isNode()) {
            //  document.getElementById('globalNodeId').value = myId;
            if (document.getElementById('globalNodeType')) { document.getElementById('globalNodeType').value = myType; }
            //  document.getElementById('globalParentId').value=myParentId;
            //  document.getElementById('parentRelationType').value= myParentRelationType;
            //  document.getElementById('parentRelationId').value= myParentRelationId; 

        }
        if (eTarget.isEdge()) {
            //  document.getElementById('edgeId').value = myId;
            if (document.getElementById('globalEdgeType')) { document.getElementById('globalEdgeType').value = myType; }
            //  document.getElementById('globalSourceId').value = mySourceId;
            //  document.getElementById('globalTargetId').value = myTargetId;
        }
        w2ui.sidebar.select('mainproperties');
    }

    );



    //elesWithAsProperty("securityLevel");
    function elesWithAsProperty(property) {
        // propertyValueColors = d3.scaleOrdinal([...new Set(cy.data(`${property}`))],d3.schemeTableau10);
        //document.getElementById("legend").innerHTML += Swatches(propertyValueColors, {columns: "50px" });
        //return propertyValueColors;
        return true;
    }


    //// Code related to Edgehandles and expand collapse
    // Edgehandles definition of defaults before to initiate it
    let ehDefaults = {
        canConnect: function (sourceNode, targetNode) {
            // whether an edge can be created between source and target
            // here can be enforced allowed and not allowed ArchiMate relationship with archicg
            //  return !sourceNode.same(targetNode); // e.g. disallow loops
            // For ArchiMate allowed relations enforcement
            // Global variable ArchiMateAllowedRelationshipEnforce, true or false
            var myElem = document.getElementById('globalEdgeType');
            if (myElem !== null && myElem !== 'undefined') {
                var myEdgeType = document.getElementById('globalEdgeType').value;
            }
            else {
                var myEdgeType = globalEdgeType;
            }
            var canConnect = true;
            globalEdgeType = myEdgeType;
            if (ArchiMateAllowedRelationshipEnforce) {
                var mySourceType = sourceNode.data("type");
                var myTargetType = targetNode.data("type");
                if (acg_ArchiMateRelations.includes(myEdgeType) &&
                    ja_ArchiMateObjects.includes(mySourceType) &&
                    ja_ArchiMateObjects.includes(myTargetType)) {
                    var letter = ArchiMateRelationIDs[acg_ArchiMateRelations.indexOf(myEdgeType)];
                    var sourceIndex = ja_ArchiMateObjects.indexOf(mySourceType);
                    var targetIndex = ja_ArchiMateObjects.indexOf(myTargetType);
                    canConnect = ArchiMateRelations[sourceIndex][targetIndex + 1].includes(letter);
                } else {
                    //        if (acg_ArchiMateExtensions.includes (mySourceType) && (acg_ArchiMateExtensions.includes(myTargetType)))
                    if (acgTypes.includes(mySourceType) && (acgTypes.includes(myTargetType))) { canConnect = false } else { canConnect = false }
                }
            }
            return canConnect;
        },
        edgeParams: function (sourceNode, targetNode) {

            var myElem = document.getElementById('globalEdgeType');
            if (myElem !== null && myElem !== 'undefined') {
                var myType = document.getElementById('globalEdgeType').value;
            }
            else {
                var myType = globalEdgeType;
            }
            // for edges between the specified source and target, return element object to be passed to cy.add() for edge
            var data = { data: { "edgeType": myType } };
            return data;
        },
        hoverDelay: 150, // time spent hovering over a target node before it is considered selected
        snap: false
    };

    eh = cy.edgehandles(ehDefaults);
    api = cy.expandCollapse('get');

    //var ur = cy.undoRedo({ isDebug: false});

    cy.on("afterUndo", function (e, name) {
        //document.getElementById("undos").innerHTML += "<span style='color: darkred; font-weight: bold'>Undo: </span> " + name  +"</br>";
    });

    cy.on("afterRedo", function (e, name) {
        //document.getElementById("undos").innerHTML += "<span style='color: darkblue; font-weight: bold'>Redo: </span>" + name  +"</br>";
    });

    cy.on('ehcomplete', (event, sourceNode, targetNode, addedEdge) => {
        var removedEdge = cy.remove(addedEdge);
        const actions = [];
        // 'batch' array (doing all undo-redo action as batches)
        actions.push({
            name: 'add',
            param: removedEdge
            //     {
            //         group: 'edges',
            //         data: { id: addedEdge.id(), source: sourceNode.id(), target: targetNode.id() },
            //     }

        });
        ur.do('batch', actions);
    });
    global.cy = cy;
})(window); // Pass window object to the IIFE