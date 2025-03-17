// archicg.js
// Initialize core state object
const state = {
    userSettings: null,
    currentGraph: null,
    currentPalette: null,
};

// Function to check if external libraries (like Cytoscape.js and W2UI) are available
function initializeLibraries() {
    if (typeof cytoscape === 'function') {
        console.log('Cytoscape.js is ready.');
    } else {
        console.error('Cytoscape.js not found.');
    }

    if (typeof w2ui === 'object') {
        console.log('W2UI is ready.');
    } else {
        console.error('W2UI not found.');
    }

    window.addEventListener('beforeunload', function (event) {
        // Cancel the event to trigger the confirmation dialog
        event.preventDefault();

        // Setting event.returnValue triggers the browser's confirmation dialog
        event.returnValue = 'Are you sure you want to leave? You may have unsaved changes.';

        // Note: The text inside event.returnValue will not be shown in modern browsers;
        // the browser will display a standard message instead.
    });
}


