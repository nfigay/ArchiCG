function getLabelFromIRI(iri) {
    try {
        const hashIndex = iri.lastIndexOf('#');
        if (hashIndex !== -1 && hashIndex < iri.length - 1) {
            // Si un # est trouvé et qu'il n'est pas à la fin, renvoyer ce qui est après
            return iri.substring(hashIndex + 1);
        }

        const slashIndex = iri.lastIndexOf('/');
        if (slashIndex !== -1 && slashIndex < iri.length - 1) {
            // Si aucun # ou si le # est à la fin, renvoyer ce qui est après le dernier /
            return iri.substring(slashIndex + 1);
        }
        // Si aucun / ou # significatif n'est trouvé, retourner l'IRI complet
        return iri;
    } catch (error) { console.log(error) }
}

function setLineStyleForCompoundEdge(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const edgeType = collapsedEdges[0].data('edgeType');

    // Inherit line style from the first collapsed edge's edge type
    const lineStyle = collapsedEdges[0].style('line-style');
    if (lineStyle) {
        return lineStyle;
    }
    return 'solid'; // Default line style if none is defined
}

function setColor4CompoundEdge(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const edgeType = collapsedEdges[0].data('edgeType');

    // Check if the edge type has a defined line color, return it if it exists
    const color = collapsedEdges[0].style('line-color');
    if (color) {
        return color;
    }
    return '#b3b3b3'; // Default color if none is defined
}



function setTargetArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};

    // Iterate through the collapsed edges to collect unique target arrow shapes
    for (let i = 0; i < collapsedEdges.length; i++) {
        const edge = collapsedEdges[i];
        const shape = edge.style('target-arrow-shape');

        if (shape && shape !== 'none') {
            shapes[shape] = true;
        }
    }

    // Determine a consistent shape for the collapsed edge based on directionality
    if (Object.keys(shapes).length === 0) {
        return 'none'; // Default to no arrow if no distinct shapes found
    }
    return Object.keys(shapes)[0]; // Use the first shape found in collapsed edges
}

function setSourceArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};

    // Iterate through the collapsed edges to collect unique source arrow shapes
    for (let i = 0; i < collapsedEdges.length; i++) {
        const edge = collapsedEdges[i];
        const shape = edge.style('source-arrow-shape');

        if (shape && shape !== 'none') {
            shapes[shape] = true;
        }
    }

    // Determine a consistent shape for the collapsed edge based on directionality
    if (Object.keys(shapes).length === 0) {
        return 'none'; // Default to no arrow if no distinct shapes found
    }
    return Object.keys(shapes)[0]; // Use the first shape found in collapsed edges
}
var OntologyViewerStyle = [
    {
        selector: ':parent',
        style: {
            'background-opacity': 0.333
        }
    },
    // Collapsed node styling
    {
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
            "background-color": "darkblue",
            "shape": "rectangle"
        }
    },

    // Selected node styling
    {
        selector: ':selected',
        style: {
            'overlay-color': "#6c757d",
            'overlay-opacity': 0.3,
            'background-color': "#999999"
        }
    },

    {
        selector: 'node',
        style: {
            'label': ele => ele.data("label"),
            'text-halign': 'center',
            'text-valign': 'top',
            'color': 'black',
        }
    },
    {
        selector: 'node.individual',
        style: {
            'background-color': '#874B82', // Purple for individual nodes
            'shape': 'diamond',
            'font-size': function (ele) {
                const label = ele.data('label');
                const labelLength = label ? label.length : 1;
                return Math.max(10, 12 / (labelLength / 2));  // Dynamic font size, divided by 2

            }
        }
    },
    {
        selector: 'node.irinode',
        style: {
            'background-color': 'blue',
            'shape': 'ellipse',

        }
    },
    {
        selector: 'node.class',
        style: {
            'background-color': '#D1A500', // Protégé Color for class nodes
            'shape': 'ellipse',
        }
    },
    {
        selector: 'node.property',
        style: {
            'background-color': '#0079BA', // Protégé Color for property nodes
            'shape': 'square',
        }
    },
    {
        selector: 'node.literalnode',
        style: {
            'background-color': 'orange',
            'shape': 'rectangle',
            'color': 'black'
        }
    },
    {
        selector: 'node.annotationproperty',
        style: {
            'background-color': '#D17A09', // Protégé color for annotation property
            'shape': 'rectangle',

        }
    },
    {
        selector: 'node.oprd',
        style: {
            'background-color': 'white', // White for domain nodes
            'shape': 'ellipse',
        }
    },
    {
        selector: 'node.datatypeproperty',
        style: {
            'background-color': '#38A14A', // Protégé color for datatypeproperty nodes
            'shape': 'rectangle',
        }
    },
    {
        selector: 'node.datatype',
        style: {
            'background-color': '#AD3B45', // Protégé color for  datatype nodes
            'shape': 'ellipse',
        }
    },

    {
        selector: 'node.propertychain',
        style: {
            'background-color': 'white', // white for PropertyChainNode
            'shape': 'rectangle',
            'background-opacity': 1
        }
    },

    {
        selector: 'node.chainmember',
        style: {
            'background-color': 'yellow', // Yellow for PropertyChainMemberNode
            'shape': 'rectangle',
        }
    },
    // Node style: equivalence
    {
        selector: 'node.equivalence',
        style: {
            'background-color': '#FFA500', // color for class nodes
            'shape': 'square',
            'label': '≡',              // Equivalence symbol as label
            'text-background-color': 'white', // Background for the label
            'text-background-opacity': 1,    // Make the background fully visible
            'text-background-padding': 2,    // Add padding around the label
            'text-background-shape': 'roundrectangle', // Shape of the background
            'background-opacity': 0.5
        }
    },
    {
        selector: 'node.literalnode',
        style: {

            'shape': 'square',
            'text-background-shape': 'roundrectangle', // Shape of the background
            'background-opacity': 0.5
        }
    },
    {
        selector: 'node.objectnode',
        style: {

            'shape': 'square',
            'background-opacity': 0.5
        }
    },

    // Edge styles (with arrows)
    {
        selector: 'edge',
        style: {
            'width': 1,
            'curve-style': 'bezier',
            'target-arrow-color': 'black',
            'line-color': '#999',
            'label': function (ele) {
                // Get the label from data and apply the transformation
                const label = ele.data('label');
                return i18next.t(getLabelFromIRI(label));  // Apply getLabelFromIRI to the label
            },

        }
    },
    // Edge style: isa
    {
        selector: 'edge.isa',
        style: {
            'line-color': '#ae56d6',  // Blue, matching Protégé's ontology color
            'width': 1.5,
            'mid-target-arrow-shape': 'triangle',
            'mid-target-arrow-fill': 'hollow',
            'mid-target-arrow-color': '#ae56d6',
            'target-arrow-shape': 'none', // No target arrow to avoid duplication
            'label': ''
        }
    },
    // Edge style: relation
    {
        selector: 'edge.relation',
        style: {
            'line-style': 'dashed',
            'line-color': '#874B82',  // Darker gray for the edge
            'source-arrow-shape': 'none',  // No arrow at the source
            'target-arrow-shape': 'none',  // Arrow at the target
            'arrow-scale': 1,  // Scale the arrow for visibility
            'mid-target-arrow-shape': 'triangle',
            'mid-target-arrow-fill': 'hollow',
            'mid-target-arrow-color': '#874B82',
            'width': 1,  // Edge width
            'text-rotation': 'autorotate',  // Ensure label rotates to follow the edge
            'text-margin-y': -10,  // Position the label slightly above or below the edge
            'label': function (ele) {
                const label = ele.data('label');
                return i18next.t(getLabelFromIRI(label));  // Get the label from data and apply translation
            },
            'target-arrow-color': '#874B82',  // Same color for the target arrow as the edge
            'font-size': function (ele) {
                const label = ele.data('label');
                const labelLength = label ? label.length : 1;
                return Math.max(10, 12 / (labelLength / 2));  // Dynamic font size, divided by 2

            }
        }
    },
    // Edge style: relation
    {
        selector: 'edge.predicate',
        style: {
            'line-color': 'black',
            'source-arrow-shape': 'none',
            'target-arrow-shape': 'vee',
            'target-arrow-color': 'black',
            'arrow-scale': 1.5,
            'label': function (ele) {
                // Get the label from data and apply the transformation
                const label = ele.data('label');
                return i18next.t(getLabelFromIRI(label));  // Apply getLabelFromIRI to the label
            },
            'text-margin-y': 10,
            // Optional: if you want the label to follow the edge orientation:
            'edge-text-rotation': 'autorotate'
        }
    },
    // Edge style: annotation
    {
        selector: 'edge.annotation',
        style: {
            'line-color': 'yellow',
            'source-arrow-shape': 'none',
            'target-arrow-shape': 'vee',
            'target-arrow-color': 'yellow',
            'arrow-scale': 1,
            'width': 1,
            'source-text-offset': 30,
            'source-label': function (ele) {
                // Get the label from data and apply the transformation
                const label = ele.data('label');
                return i18next.t(getLabelFromIRI(label));  // Apply getLabelFromIRI to the label
            },
        }
    },
    // Edge style: domainE
    {
        selector: 'edge.domain',
        style: {
            'label': 'D',
            'line-color': 'blue',
            'source-arrow-shape': 'none',
            'target-arrow-shape': 'vee',
            'target-arrow-color': 'blue',
            'arrow-scale': 1,
            'width': 1
        }
    },
    // Edge style: rangeE
    {
        selector: 'edge.range',
        style: {
            'label': 'R',
            'line-color': 'blue',
            'source-arrow-shape': 'none',
            'target-arrow-shape': 'vee',
            'target-arrow-color': 'blue',
            'arrow-scale': 1,
            'width': 1
        }
    },
    // Edge style: subProperty
    {
        selector: 'edge.subProperty',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'target-arrow-shape': 'triangle', // Use a square shape for the arrow
            'target-arrow-color': '#000000',  // Matching color for the arrow
            'source-arrow-shape': 'none', // No source arrow
            'label': '',              // No label on the specialization edge
            'arrow-scale': 1.5,       // Scale the arrow size for better visibility
            'target-arrow-fill': 'hollow'  // Hollow rectangle (border only)

        }
    },
    // Edge style: equivalentProperty
    {
        selector: 'edge.equivalentProperty',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'label': '≡',              // Equivalence symbol as label
            'text-background-color': 'white', // Background for the label
            'text-background-opacity': 1,    // Make the background fully visible
            'text-background-padding': 2,    // Add padding around the label
            'text-background-shape': 'roundrectangle', // Shape of the background

        }
    },
    // Edge style: inverseProperty
    {
        selector: 'edge.inverseProperty',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'label': '⟲',              // Inverse symbol as label
            'text-background-color': '#fff', // Background for the label
            'text-background-opacity': 1,    // Make the background fully visible
            'text-background-padding': 2,    // Add padding around the label
            'text-background-shape': 'roundrectangle', // Shape of the background

        }
    },
    // Edge chain property next chain member
    {
        selector: 'edge.nextchainmember',
        style: {
            'line-color': '#000000',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'label': '',              // Inverse symbol as label
            'target-arrow-shape': 'vee', // Use a square shape for the arrow
            'target-arrow-color': '#000000',  // Matching color for the arrow
            'source-arrow-shape': 'none', // No source arrow                      
        }
    },
    // Edge chain property next chain member type
    {
        selector: 'edge.nextchaintype',
        style: {
            'line-color': 'green',  // Black line color for the edge
            'line-style': 'solid',    // Solid line style
            'width': 1,               // Edge width for visibility
            'target-arrow-shape': 'vee', // Use a square shape for the arrow
            'target-arrow-color': 'green', // Use a square shape for the arrow
            'source-arrow-shape': 'none', // No source arrow                      
        }
    },
    // Edge style: subClass
    {
        selector: 'edge.subClass',
        style: {
            'line-color': '#1f77b4',  // Blue, matching Protégé's ontology color
            'width': 1.5,
            'mid-target-arrow-shape': 'triangle',
            'mid-target-arrow-fill': 'hollow',
            'mid-target-arrow-color': '#1f77b4',
            'target-arrow-shape': 'none', // No target arrow to avoid duplication
            'label': ''

        }
    },
    {
        selector: 'edge.cy-expand-collapse-collapsed-edge',
        style: {
            "text-outline-color": "#ffffff",
            "text-outline-width": "2px",
            'label': (e) => {
                return e.data('edgeType') + '(' + e.data('collapsedEdges').length + ')';
            },
            'width': function (edge) {
                const n = edge.data('collapsedEdges').length;
                return (3 + Math.log2(n)) + 'px'; // Thicker edge for multiple elements
            },
            'line-style': setLineStyleForCompoundEdge.bind(this),
            'line-color': setColor4CompoundEdge.bind(this),
            'target-arrow-color': setColor4CompoundEdge.bind(this),
            'target-arrow-shape': setTargetArrowShape.bind(this),
            'source-arrow-shape': setSourceArrowShape.bind(this),
            'source-arrow-color': setColor4CompoundEdge.bind(this),
            'shape': (e) => {
                const collapsedEdges = e.data('collapsedEdges');
                return collapsedEdges[0].style('shape');
            }
        }
    }
]