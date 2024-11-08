/*
This is the tool related to display of maps related to a product decomposition, here a car
*/
// Complexity tool added to the list of tools - also requires the following javascript libraries being referenced in the HTML

var jsonGraphCar

tools=tools.concat(["Car"]);
console.log("Car tool added");
var carGraph;


var toolbarCarDefinition={
  name:"toolbarCarDefinition",
  style   :"background-color:white",
  items:[
        { type:"button",  id:"loadDataDemo",  text:"Load Data Demo" },
      //  { type:"button",  id:"demo",  text:"Run Demo" },
      //  { type:"new-line" },
      //  { type:"button",  id:"saveCurrentPositionsAsConstraints",  text:"saveCurrentPositionsAsConstraints" }
        
  ]  ,
  onClick:function(event) {
    //alert(event."target")
  //  if (event."target"=="demo"){demo();};
  //  if (event."target"=="saveCurrentPositionsAsConstraints"){saveCurrentPositionsAsConstraints();}
  //  if (event."target"=="applyConstraints"){applyConstraints();}
    if (event.target=="loadDataDemo"){loaddata()}
  }
}

config.toolbarCarDefinition=toolbarCarDefinition;



function loaddata()
{
//var savedGraph=cy.$()
//api.saveJson(cy.$(), "complexityDataSaved.archicg")
cy.$().remove(); 
cy.add(carGraph)
api.collapseAll();
api.collapseAllEdges(getEdgeOptions());
}

carGraph = [
  // Top-Level Nodes
  { data: { id: 'Car',type:"product", label: 'Car' } },
  
  // Systems
  { data: { id: 'Chassis',type:"product", label: 'Chassis' } },
  { data: { id: 'EngineSystem',type:"product", label: 'Engine System' } },
  { data: { id: 'TransmissionSystem',type:"product", label: 'Transmission System' } },
  { data: { id: 'ElectricalSystem',type:"product", label: 'Electrical System' } },
  { data: { id: 'BodyInterior',type:"product", label: 'Body & Interior' } },
  { data: { id: 'SuspensionSteering',type:"product", label: 'Suspension & Steering' } },
  { data: { id: 'BrakingSystem',type:"product", label: 'Braking System' } },
  { data: { id: 'FuelSystem',type:"product", label: 'Fuel System' } },

  // Chassis Subcomponents
  { data: { id: 'ChassisFrame',type:"product", label: 'Chassis Frame' } },
  { data: { id: 'CrossMember',type:"product", label: 'Cross Member' } },
  { data: { id: 'FloorPan',type:"product", label: 'Floor Pan' } },
  { data: { id: 'Bumper',type:"product", label: 'Bumper' } },
  
  // Engine System Subcomponents
  { data: { id: 'EngineBlock',type:"product", label: 'Engine Block' } },
  { data: { id: 'Cylinder',type:"product", label: 'Cylinder' } },
  { data: { id: 'Piston',type:"product", label: 'Piston' } },
  { data: { id: 'Crankshaft',type:"product", label: 'Crankshaft' } },
  { data: { id: 'OilPump',type:"product", label: 'Oil Pump' } },
  { data: { id: 'SparkPlug',type:"product", label: 'Spark Plug' } },
  { data: { id: 'CoolingSystem',type:"product", label: 'Cooling System' } },
  { data: { id: 'Radiator',type:"product", label: 'Radiator' } },
  { data: { id: 'CoolantHoses',type:"product", label: 'Coolant Hoses' } },
  
  // Transmission System Subcomponents
  { data: { id: 'Transmission',type:"product", label: 'Transmission' } },
  { data: { id: 'Clutch',type:"product", label: 'Clutch' } },
  { data: { id: 'Gearbox',type:"product", label: 'Gearbox' } },
  { data: { id: 'Differential',type:"product", label: 'Differential' } },
  { data: { id: 'Axle',type:"product", label: 'Axle' } },

  // Electrical System Subcomponents
  { data: { id: 'Battery',type:"product", label: 'Battery' } },
  { data: { id: 'Alternator',type:"product", label: 'Alternator' } },
  { data: { id: 'StarterMotor',type:"product", label: 'Starter Motor' } },
  { data: { id: 'FuseBox',type:"product", label: 'Fuse Box' } },
  { data: { id: 'WiringHarness',type:"product", label: 'Wiring Harness' } },

  // Body & Interior Subcomponents
  { data: { id: 'Doors',type:"product", label: 'Doors' } },
  { data: { id: 'Dashboard',type:"product", label: 'Dashboard' } },
  { data: { id: 'Seats',type:"product", label: 'Seats' } },
  { data: { id: 'Windows',type:"product", label: 'Windows' } },
  { data: { id: 'Mirrors',type:"product", label: 'Mirrors' } },
  { data: { id: 'Roof',type:"product", label: 'Roof' } },

  // Suspension & Steering Subcomponents
  { data: { id: 'SteeringWheel',type:"product", label: 'Steering Wheel' } },
  { data: { id: 'SteeringColumn',type:"product", label: 'Steering Column' } },
  { data: { id: 'SuspensionArms',type:"product", label: 'Suspension Arms' } },
  { data: { id: 'ShockAbsorbers',type:"product", label: 'Shock Absorbers' } },
  { data: { id: 'Springs',type:"product", label: 'Springs' } },

  // Braking System Subcomponents
  { data: { id: 'BrakePedal',type:"product", label: 'Brake Pedal' } },
  { data: { id: 'MasterCylinder',type:"product", label: 'Master Cylinder' } },
  { data: { id: 'BrakeLine',type:"product", label: 'Brake Line' } },
  { data: { id: 'DiscBrake',type:"product", label: 'Disc Brake' } },
  { data: { id: 'BrakePads',type:"product", label: 'Brake Pads' } },
  { data: { id: 'Calipers',type:"product", label: 'Calipers' } },

  // Fuel System Subcomponents
  { data: { id: 'FuelTank',type:"product", label: 'Fuel Tank' } },
  { data: { id: 'FuelPump',type:"product", label: 'Fuel Pump' } },
  { data: { id: 'FuelInjectors',type:"product", label: 'Fuel Injectors' } },
  { data: { id: 'FuelFilter',type:"product", label: 'Fuel Filter' } },

  // Edges - "is part of" relationships
  // Chassis
  { data: { id: 'edge1',edgeType:"composition", source: 'Car', target: 'Chassis' } },
  { data: { id: 'edge2',edgeType:"composition", source: 'Chassis', target: 'ChassisFrame' } },
  { data: { id: 'edge3',edgeType:"composition", source: 'ChassisFrame', target: 'CrossMember' } },
  { data: { id: 'edge4',edgeType:"composition", source: 'ChassisFrame', target: 'FloorPan' } },
  { data: { id: 'edge5',edgeType:"composition", source: 'Chassis', target: 'Bumper' } },

  // Engine System
  { data: { id: 'edge6',edgeType:"composition", source: 'Car', target: 'EngineSystem' } },
  { data: { id: 'edge7',edgeType:"composition", source: 'EngineSystem', target: 'EngineBlock' } },
  { data: { id: 'edge8',edgeType:"composition", source: 'EngineBlock', target: 'Cylinder' } },
  { data: { id: 'edge9',edgeType:"composition", source: 'Cylinder', target: 'Piston' } },
  { data: { id: 'edge10',edgeType:"composition", source: 'EngineBlock', target: 'Crankshaft' } },
  { data: { id: 'edge11',edgeType:"composition", source: 'EngineSystem', target: 'OilPump' } },
  { data: { id: 'edge12',edgeType:"composition", source: 'EngineSystem', target: 'SparkPlug' } },
  { data: { id: 'edge13',edgeType:"composition", source: 'EngineSystem', target: 'CoolingSystem' } },
  { data: { id: 'edge14',edgeType:"composition", source: 'CoolingSystem', target: 'Radiator' } },
  { data: { id: 'edge15',edgeType:"composition", source: 'Radiator', target: 'CoolantHoses' } },

  // Transmission System
  { data: { id: 'edge16',edgeType:"composition", source: 'Car', target: 'TransmissionSystem' } },
  { data: { id: 'edge17',edgeType:"composition", source: 'TransmissionSystem', target: 'Transmission' } },
  { data: { id: 'edge18',edgeType:"composition", source: 'Transmission', target: 'Clutch' } },
  { data: { id: 'edge19',edgeType:"composition", source: 'Transmission', target: 'Gearbox' } },
  { data: { id: 'edge20',edgeType:"composition", source: 'TransmissionSystem', target: 'Differential' } },
  { data: { id: 'edge21',edgeType:"composition", source: 'Differential', target: 'Axle' } },

  // Electrical System
  { data: { id: 'edge22',edgeType:"composition", source: 'Car', target: 'ElectricalSystem' } },
  { data: { id: 'edge23',edgeType:"composition", source: 'ElectricalSystem', target: 'Battery' } },
  { data: { id: 'edge24',edgeType:"composition", source: 'Battery', target: 'WiringHarness' } },
  { data: { id: 'edge25',edgeType:"composition", source: 'WiringHarness', target: 'FuseBox' } },
  { data: { id: 'edge26',edgeType:"composition", source: 'ElectricalSystem', target: 'Alternator' } },
  { data: { id: 'edge27',edgeType:"composition", source: 'ElectricalSystem', target: 'StarterMotor' } },

  // Body & Interior
  { data: { id: 'edge28',edgeType:"composition", source: 'Car', target: 'BodyInterior' } },
  { data: { id: 'edge29',edgeType:"composition", source: 'BodyInterior', target: 'Doors' } },
  { data: { id: 'edge30',edgeType:"composition", source: 'BodyInterior', target: 'Dashboard' } },
  { data: { id: 'edge31',edgeType:"composition", source: 'BodyInterior', target: 'Seats' } },
  { data: { id: 'edge32',edgeType:"composition", source: 'Doors', target: 'Windows' } },
  { data: { id: 'edge33',edgeType:"composition", source: 'Doors', target: 'Mirrors' } },
  { data: { id: 'edge34',edgeType:"composition", source: 'BodyInterior', target: 'Roof' } },

  // Suspension & Steering
  { data: { id: 'edge35',edgeType:"composition", source: 'Car', target: 'SuspensionSteering' } },
  { data: { id: 'edge36',edgeType:"composition", source: 'SuspensionSteering', target: 'SteeringWheel' } },
  { data: { id: 'edge37',edgeType:"composition", source: 'SuspensionSteering', target: 'SteeringColumn' } },
  { data: { id: 'edge38',edgeType:"composition", source: 'SuspensionSteering', target: 'SuspensionArms' } },
  { data: { id: 'edge39',edgeType:"composition", source: 'SuspensionArms', target: 'ShockAbsorbers' } },
  { data: { id: 'edge40',edgeType:"composition", source: 'SuspensionArms', target: 'Springs' } },

  // Braking System
  { data: { id: 'edge41',edgeType:"composition", source: 'Car', target: 'BrakingSystem' } },
  { data: { id: 'edge42',edgeType:"composition", source: 'BrakingSystem', target: 'BrakePedal' } },
  { data: { id: 'edge43',edgeType:"composition", source: 'BrakingSystem', target: 'MasterCylinder' } },
  { data: { id: 'edge44',edgeType:"composition", source: 'MasterCylinder', target: 'BrakeLine' } },
  { data: { id: 'edge45',edgeType:"composition", source: 'BrakingSystem', target: 'DiscBrake' } },
  { data: { id: 'edge46',edgeType:"composition", source: 'DiscBrake', target: 'BrakePads' } },
  { data: { id: 'edge47',edgeType:"composition", source: 'DiscBrake', target: 'Calipers' } },

  // Fuel System
  { data: { id: 'edge48',edgeType:"composition", source: 'Car', target: 'FuelSystem' } },
  { data: { id: 'edge49',edgeType:"composition", source: 'FuelSystem', target: 'FuelTank' } },
  { data: { id: 'edge50',edgeType:"composition", source: 'FuelTank', target: 'FuelPump' } },
  { data: { id: 'edge51',edgeType:"composition", source: 'FuelPump', target: 'FuelInjectors' } },
  { data: { id: 'edge52',edgeType:"composition", source: 'FuelSystem', target: 'FuelFilter' } },
];

