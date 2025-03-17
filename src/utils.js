function saveConfigAsFile(filename, config) {
    // Convert the config object to a JSON string
    const jsonString = JSON.stringify(config, null, 2); // Pretty-print with 2 spaces

    // Create a Blob object
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;

    // Programmatically click the link to trigger the download
    a.click();

    // Clean up the URL object
    URL.revokeObjectURL(a.href);
  }
