var RadarStyle = [
    {
      selector: 'node',
      style: {
        'background-color': 'red',
        'width': "10px",
        'height': "10px",
        'label': 'data(label)',
        'text-valign': 'top',
        'color': 'black',
        'font-size': '10px'
      }
    },
    {
      selector: 'node[ring="Track"]',
      style: { 'background-color': 'lightgray' }
    },
    {
      selector: 'node[ring="Candidate"]',
      style: { 'background-color': 'gray' }
    },
    {
      selector: 'node[ring="Adopted"]',
      style: { 'background-color': 'black' }
    }
  ]