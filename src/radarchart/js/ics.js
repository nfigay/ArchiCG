let graphData = { nodes: [], edges: [] };

function transformJsonlEntry(entry) {
  if (entry.type === 'node') return { group: 'nodes', data: entry.data };
  if (entry.type === 'edge') return { group: 'edges', data: entry.data };
  return null;
}

function readJSONLFile(file, callback, onError) {
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const lines = event.target.result.split(/\r?\n/).filter(line => line.trim() !== '');
      const jsonArray = [];
  
      for (let i = 0; i < lines.length; i++) {
        try {
          jsonArray.push(JSON.parse(lines[i]));
        } catch (e) {
          if (onError) return onError(e, lines[i], i);
          else console.warn("Skipping invalid JSON on line " + (i + 1), lines[i]);
        }
      }
  
      callback(jsonArray);
    };
  
    reader.onerror = function(e) {
      if (onError) onError(e);
      else console.error("File read error", e);
    };
  
    reader.readAsText(file);
  }