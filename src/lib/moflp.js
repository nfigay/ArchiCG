//RMOFLT
rmoflpFieldsets=["rmoflp"];
var acg_rmoflpRelations =[ ];
var acg_ArchiMateRmoflpSpecializations=[];

var rmoflp_Objects=[
"Foundation-SoI", 
"Foundation-TransversalPackage",
"Foundation-SoIViewpoint",
"Foundation-ViewpointSearcher",
"Foundation-Interfaces-Flow",
"Foundation-Interfaces-FlowConnection",
"Foundation-Interfaces-FlowDelegation",
"Foundation-Interfaces-FlowType",
"Foundation-Interfaces-Interface",
"Foundation-Interfaces-InterfaceType",
"Foundation-Structure-Category",
"Foundation-Structure-Classification",
"Missions-Capability",
"Missions-CapabilityCategory",
"Missions-CapabilityClassification",
"Missions-CapabilityContribution",
"Missions-CapabilityUsage",
"Missions-LifeCycle",
"Missions-LifeCycleSignal",
"Missions-LifeCycleStage",
"Missions-Mission",
"Missions-MissionCategory",
"Missions-MissionClassification",
"Missions-MissionConcept",
"Missions-MissionEntity",
"Missions-MissionEntityCategory",
"Missions-MissionEntityClassification",
"Missions-EntityUsage",
"Missions-MissionPhase",
"Missions-MissionPhaseBehavior",
"Missions-MissionPlanSignal",
"Missions-MissionRestrictedPackage",
"Missions-Task",
"Missions-MissionTaskInvocation",
"Missions-MissionViewpointPackage",
"Missions-Objective",
"Missions-Stakeholder",
"Operations-OperationalViewpointPackage",
"Operations-OperationalContext",
"Operations-OperationalSystem",
"Operations-OperationalSystemUsage",
"Operations-OperationalConcept",
"Operations-OperationalFlow",
"Operations-OperationalFlowProperty",
"Operations-OperationalFlowTypeCategory",
"Operations-OperationalFlowTypeClassification",
"Operations-OperationalFlowConnection",
"Operations-OperationalFlowDelegation",
"Operations-OperationalFlowInterfaceType",
"Operations-OperationalFlowType",
"Operations-OperationalPhase",
"Operations-OperationalPhaseBehavior",
"Operations-OperationalPlanSignal",
"Operations-OperationalRestrictedPackage",
"Operations-OperationalTask",
"Operations-OperationalTaskInvocation",
"Functions-EnergyFlow",
"Functions-Function",
"Functions-FunctionalContext",
"Functions-FunctionalFlow",
"Functions-FunctionalFlowConnection",
"Functions-FunctionalFlowDelegation",
"Functions-FunctionalFlowInterfaceType",
"Functions-FunctionalFlowProperty",
"Functions-FunctionalMode",
"Functions-FunctionalPart",
"Functions-FunctionalRestrictedPackage",
"Functions-FunctionalViewpointPackage",
"Functions-FunctionBehavior",
"Functions-FunctionBehaviorInvocation",
"Functions-FunctionCategory",
"Functions-FunctionClassification",
"Functions-FunctionInvocation",
"Functions-FlowType",
"Functions-ModalFunctionBehaviorInvocation",
"Functions-OperationalTaskRealization",
"Functions-SignalItemType",
"LogicalArchitecture-LogicalCategory",
"LogicalArchitecture-LogicalClassification",
"LogicalArchitecture-LogicalComponent",
"LogicalArchitecture-LogicalContext",
"LogicalArchitecture-LogicalInterface",
"LogicalArchitecture-LogicalInterfaceConnection",
"LogicalArchitecture-LogicalStateMachine",
"LogicalArchitecture-LogicalState",
"LogicalArchitecture-LogicalInterfaceType",
//"LogicalArchitecture-LogicalInterfaceType",
"LogicalArchitecture-LogicalRestrictedPackage",
"LogicalArchitecture-LogicalViewpointPackage",
"TechnicalArchitecture-Functional-To-Technical-Path",
"TechnicalArchitecture-GroundReference",
"TechnicalArchitecture-Logical-To-Technical-Path",
"TechnicalArchitecture-Media",
"TechnicalArchitecture-NetworkMedia",
"TechnicalArchitecture-TechnicalCategory",
"TechnicalArchitecture-TechnicalClassification",
"TechnicalArchitecture-TechnicalComponent",
"TechnicalArchitecture-TechnicalContext",
"TechnicalArchitecture-TechnicalFlow",
"TechnicalArchitecture-TechnicalItemType",
"TechnicalArchitecture-TechnicalFlowConnection",
"TechnicalArchitecture-TechnicalFlowDelegation",
"TechnicalArchitecture-TechnicalFlowInterfacetype",
"TechnicalArchitecture-TechnicalFlowProperty",
"TechnicalArchitecture-TechnicalInterface",
"TechnicalArchitecture-TechnicalInterfaceConnection",
"TechnicalArchitecture-TechnicalStateMachine",
"TechnicalArchitecture-TechnicalState",
"TechnicalArchitecture-TechnicalInterfaceType",
"TechnicalArchitecture-TechnicalNetworkConnection",
"TechnicalArchitecture-TechnicalPart",
"TechnicalArchitecture-TechnicalPath",
"TechnicalArchitecture-TechnicalRestrictedPackage",
"TechnicalArchitecture-TechnicalViewpointPackage",
"Requirements-Chapter",
"Requirements-RestrictedRequirementsPackage",
"Parametrics-ConstantParameter",
"Parametrics-ConstantBlockEquation",
"Parametrics-DesignObjectiveConstraint",
"Parametrics-DesignObjectiveParameter",
"Parametrics-DesignVariable",
"Parametrics-MoEConstraint",
"Parametrics-MoEParameter",
"Parametrics-MoPConstraint",
"Parametrics-ParametricAnalysisContext",
"Parametrics-ParametricRestrictedPackage",
"Parametrics-ParametricViewpointPackage",
"Parametrics-RequirementVerification"
];
var rmoflp_RelationNames =[];
var rmoflp_RelationIDs= [ "a","c","f","g","i","n","o","r","s","t","v"];
var rmoflp_Layers=["Foundation", "Logical", "Physical"];
acgTypes=acgTypes.concat(rmoflp_Objects);

var rmoflp_Viewpoints=[];


var viewpointsArchiMateRmoflp=[
  { name:"application_cooperation",description:`
  The Application Cooperation viewpoint describes the relationships between applications components in terms
  of the information flows between them, or in terms of the services they offer and use.
  This viewpoint is typically used to create an overview of the application landscape of an organization.
  This viewpoint is also used to express the (internal) cooperation or orchestration of services that together 
  support the execution of a business process.`,
  stakeholders:["Enterprise Architect", "Domain Architect", "Process Architect", "Application Architect"],
  constructs:["location","grouping","andjunction","orjunction","application-component", "application-collaboration",
  "application-interface", "application-function","application-interaction", "application-process", "application-event",
  "application-service", "data-object"],
  layers:["application","others"],
  concerns:["Relationships and dependencies between applications", "orchestration/choreography of services", 
  "consistency and completeness", "reduction of complexity"],
  purposes:["Designing"],
  scope:"Multiple layer/Multiple aspect" },

];

var rmoflp_Stakeholders=["CxO","Shareholder", "Manager", "Employee", "Enterprise Architect","Process Architect", "Domain Architect", "Application Architect", "Operational Manager", "Product Mangager", "Infrastructure Architect","ICT architect", "Information Architect", "Requirements Manager", "Business Analyst"];   
var  rmoflp_Relations=
        [
         [ "Resource",
          "cfgostv", "fiotv", "fiotv","forv",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cfginorstv","finortv" ],
         [ "Capability",
          "fotv", "cfgostv","fotv","fortv",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cfgnorstv","fnortv" ],
          [ "Value_Stream",
          "fotv", "fotv", "cfgostv","fortv",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cfgnorstv","fnortv" ],
         [ "Course_Of_Action",
          "fotv", "fotv", "fotv","cfgostv",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cfgnorstv","fnortv" ],
         [ "Business_Actor",
          "or", "or", "or","or",
          "cfgostv","fiotv","fotv","cfgiotv","fiotv","fiotv","fiotv","fiotv","fiortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "ino","no","no","nor","nor","nor","nor","nor","no","no",
          "io","o","io","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Business_Role",
          "or", "or", "or","or",
          "fotv","cfgostv","fotv","cfgotv","fiotv","fiotv","fiotv","fiotv","fiortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "ino","no","no","nor","nor","nor","nor","nor","no","no",
          "io","o","io","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Business_Collaboration",
          "or", "or", "or","or",
          "fgotv","fgiotv","cfgostv","cfgiotv","fiotv","fiotv","fiotv","fiotv","fiortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "ino","no","no","nor","nor","nor","nor","nor","no","no",
          "io","o","io","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Business_Interface",
          "or", "or", "or","or",
          "fotv","fotv","fotv","cfgostv","fotv","fotv","fotv","fotv","fiotv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fot","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Business_Process",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","cfgostv","cfgotv","cfgotv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Business_Function",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","cfgotv","cfgostv","cfgotv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Business_Interaction",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","cfgotv","cfgotv","cfgostv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],       
         [ "Business_Event",
          "o", "o", "o","o",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","fotv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
          [ "Business_Service",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],  
         [ "Business_Object",
          "or", "or", "or","or",
          "o","o","o","o","o","o","o","o","o","cgos","cgos","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor"],
         [ "Contract",
          "or", "or", "or","or",
          "o","o","o","o","o","o","o","o","o","cgos","cgos","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Representation",
          "or", "or", "or","or",
          "o","o","o","o","o","o","o","o","o","or","or","cgos","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Product",
          "or", "or", "or","or",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","cfgortv","acgo","acgo","acgo","cfgostv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","cfgortv","acgo",
          "fortv","fortv","fortv","fotv","fortv","fotv","fotv","fortv","fortv","fortv","fortv","cfgortv","acgo","fortv","fortv","fotv","acgo",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Application_Component",
          "or", "or", "or","or",
          "fotv","fotv","fotv","fortv","fortv","fortv","fortv","fortv","fortv","ao","ao","ao","fotv",
          "cfgorstv","fotv","cfgortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Application_Collaboration",
          "or", "or", "or","or",
          "fotv","fotv","fotv","fortv","fortv","fortv","fortv","fortv","fortv","ao","ao","ao","fotv",
          "fgortv","cfgorstv","cfgortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Application_Interface",
          "or", "or", "or","or",
          "fotv","fotv","fotv","fortv","fotv","fotv","fotv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","cfgostv","fotv","fotv","fotv","fotv","fiotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Application_Function",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","cfgostv","cfgotv","cfgotv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Application_Interaction",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","cfgotv","cfgostv","cfgotv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Application_Process",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","cfgotv","cfgotv","cfgostv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Application_Event",
          "o", "o", "o","o",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","ao","o","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Application_Service",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Data_Object",
          "or", "or", "or","or",
          "o","o","o","o","o","o","o","o","o","or","or","o","o",
          "o","o","o","o","o","o","o","o","cgos",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Node",
          "or", "or", "or","or",
          "fiortv","fiortv","fiotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","fotv","cfgiortv","fotv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fotv","aio",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Device",
          "or", "or", "or","or",
          "fiortv","fiortv","fiotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","fotv","cfgiortv","fot","fot","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fotv","aio",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "System_Software",
          "or", "or", "or","or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","fotv","cfgiortv","fotv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fotv","aio",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Technology_Collaboration",
          "or", "or", "or","or",
          "fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "fgiortv","fgiortv","fgiortv","cfgostv","cfgiortv","fotv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","fgiortv","fgiortv","fotv","aio",
           "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
["Technology_Interface",
          "or", "or", "or","or",
          "fotv","fotv","fotv","fortv","fotv","fotv","fotv","fotv","fotv","ao","ao","ao","fotv",
          "fotv","fotv","fortv","fotv","fotv","fotv","fotv","fotv","ao",
          "fotv","fotv","fotv","fotv","cfgostv","fotv","fotv","fotv","fotv","fotv","fotv","fiotv","ao","fotv","fotv","fotv","ao",
           "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
["Path",
          "or", "or", "or","or",
          "fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "fgiortv","fgiortv","fgiortv","fgotv","fgiortv","cfgostv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","fgiortv","fgiortv","fotv","aio",
           "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
["Communication_Network",
          "or", "or", "or","or",
          "fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "fgiortv","fgiortv","fgiortv","fortv","fgiortv","fortv","cfgostv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","fgiortv","fgiortv","fotv","aio",
           "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
["Technology_Function",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","cfgotv","cfgotv","fotv","fortv","ao","fotv","fotv","fotv","ao",
           "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],          
        [ "Technology_Process",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgotv","cfgostv","cfgotv","fotv","fortv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Technology_Interaction",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgotv","cfgotv","cfgostv","fotv","fortv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorstv","afnortv" ],
         [ "Technology_Event",
          "o", "o", "o","o",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fortv","fotv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fortv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgost","fotv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgnorst","afnort" ],
         [ "Technology_Service",
          "o", "or", "or","or",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fortv","ao","ao","ao","fotv",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","ao","fotv","fotv","fotv","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfgorstv","afnortv" ],
         [ "Artifact",
          "or", "or", "or","or",
          "or","or","or","or","or","or","or","or","or","or","or","o","o",
          "or","or","or","or","or","or","or","or","or",
          "or","or","or","o","or","o","o","or","or","or","or","or","cgos","or","or","or","o",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnosr","nor" ],
         ["Equipment",
          "or", "or", "or","or",
          "fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","fotv","cfgiortv","fotv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fotv","aio",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginostv","afinortv" ],
         [ "Facility",
          "or", "or", "or","or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","fotv","cfgiortv","fotv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fotv","aio",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginostv","afinortv" ],
         [ "Distribution_Network",
          "or", "or", "or","or",
          "fiortv","fiortv","fiotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fotv",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "fgiortv","fgiortv","fgiortv","fortv","fgiortv","fotv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","aio","fgiortv","fgiortv","cfgost","aio",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fotv",
          "acfginorstv","afinortv" ],
         [ "Material",
          "or", "or", "or","or",
          "o","o","o","o","o","o","o","o","o","or","or","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","cgos",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Stakeholder",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "cgnos","no","no","no","no","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Driver",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","cgnos","no","no","no","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Assessment",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","cgnos","no","no","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Goal",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","cgnos","no","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Outcome",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","cgnos","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Principle",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","cgnos","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Requirement",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","cgnos","cgnos","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Constraint",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","nor","nor","nor","cgnos","cgnos","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Meaning",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","no","no","no","no","no","cgnos","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Value",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","no","no","no","no","no","no","cgnos",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "WorkPackage",
          "or", "or", "or","or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "cfgost","aor","fot","fort","o","or",
          "acfgnorst","afnort" ],
         [ "Deliverable",
          "or", "or", "or","or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","cgos","o","or","o","or",
          "cgnors","nor" ],
         [ "Implementation_Event",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "no","no","no","no","no","no","no","no","no","no",
          "fot","ao","cfgost","fot","o","o",
          "acfgnost","afnot" ],
         [ "Plateau",
          "cgor", "cgor", "cgor","cgor",
          "cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor",
          "cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor",
          "cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor",
          "no","no","no","cgnor","nor","nor","cgnor","cgnor","no","no",
          "fot","ao","fot","cfgost","o","cgor",
          "acfgnorst","acfgnort" ],
         [ "Gap",
          "o", "o", "o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","cgos","o",
          "cgos","o" ],
         [ "Location",
          "cgor", "cgor", "cgor","cgor",
          "cfgiortv","cfgiortv","cfgiotv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","acgo","acgo","acgo","cfgotv",
          "cfgotv","cfgortv","cfgortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","acgo",
          "cfgiortv","cfgiortv","cfgiortv","cfgortv","cfgiortv","cfgortv","cfgotv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","acgio","cfgiortv","cfgiortv","cfgotv","acgio",
          "cgnor","cgno","cgno","cgnor","cgnor","cgnor","cgnor","cgnor","cgno","cgno",
          "cgo","cgo","cgo","cgo","cgo","cfgostv",
          "acfginorstv","acfginortv" ] ,
         [ "Grouping",
          "cfgorstv", "cfgiorstv", "cfgiorstv","cfgorstv",

          "cfgiorstv","cfgiortsv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","acgors","acgors","acgors","cfgorstv",

          "cfgorstv","cfgorstv","cfgorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","acgors",

          "cfgiorstv","cfgiorstv","cfgiorstv","cfgorstv","cfgiorstv","cfgorstv","cfgorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","acgiors","cfgiorstv","cfgiorstv","cfgorstv","acgiors",
          "cginors","cgnos","cgnos","cgnors","cgnors","cgnors","cgnors","cgnors","cgnos","cgnos",

          "cfgiost","acgors","cfgiost","cfgorst","cgos","cfgorstv",
          "acfginorstv","acfginortv" ],
         [ "Junction",
          "fortv", "fiortv","fiortv","fortv",
          "fiortv","fiortv","fortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","aor","aor","aor","fortv",

          "fortv","fortv","fortv","fiortv","fiortv","fiortv","fiortv","fiortv","aor",

          "fiortv","fiortv","fiortv","fortv","fiortv","fortv","fortf","fiortv","fiortv","fiortv","fiortv","fiortv","aior","fiortv","fiortv","fortv","aior",

          "inor","no","no","nor","nor","nor","nor","nor","no","no",
          "fiot","aor","fiot","fort","o","fortv",
          "afinortv","afinortv" ]
         ];

/*
 * Created from the jArchi documentation
 * It should be considered that it is Archi similar except for this point:
 * - No caps and minus are used for jArchi while Caps and underscores are used 
 *   for the ArchiMate relationships matrix 
 */


//andjunction and orjunction are not jarchi types, but two specialized types to be built

/*
 * Created from archimate3_Model.xsd
 * It should be considered that it is Archi similar except for these points:
 * - Caps used but neither underscores nor minus
 * - AndJunction and OrJunction are distinguished, Junction is generic
 */

/*
 * Created from https://github.com/ebbypeter/Archimate-PlantUML/blob/master/Archimate.puml
 * It should be considered that ArchiMate-PlantUML considers:
 * - Business_Location elements which are not part of the ArchiMate specification
 * - Junction_Or and Junction_And for Junction with is generic
 * - Group which is considered like the other model elements, 
 *   but is a visual element in ArchiMate
 * This array is created from the ArchiMateObjects.
 * It constitutes a mapping to Archimate-PlantUML (except for Junction) and 
 */

/*
 * A particular attention is to be paid when dealing with:
 * - junctions, due to the fact and_junction and or_junction are not distinquished
 *   in the ArchiMate Relationships matrix
 * - ArchiMate elements naming conventions are not the same for the relationship matrix, 
 *   Archi, jArchi, Open Exchange Format or ArchiMate-PlantUML
 * - ArchiMate-PlantUML distinguishes Business_Location and Other_Location, the first one 
 *   doesn't exist in the specification.
 */




const Foundation_soi_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>System of Interest</h2></div>
<div class="description"><strong>Description:</strong>
The System of Interest is the root model fo the model fo the System of Interest containing all viewoint R-MOFLT Paramatric.<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>It extends UML model, 
generalizes Identifiable Package and inherit extension of UML package</div></div>`


const Foundation_TransversalPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Transversal Package</h2></div>
<div class="description"><strong>Description:</strong>
Transveral Package is the package to store transversal elements not covered by other custom packages<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>it extends Transversal Package, generalizes Transversal Package  and inherits 
extension UML identifable Package and Model Organization Package</div></div>`

const Foundation_SoIViewpoint_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>System of Interest Viewpoint</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest Viewpoint<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Foundation_ViewpointSearcher_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Viewpoint Searcher</h2></div>
<div class="description"><strong>Description:</strong>
Viewpoint Searcher<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Foundation_Interfaces_Flow_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Foundation Interface</h2></div>
<div class="description"><strong>Description:</strong>
Foundation Interface<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Foundation_Interfaces_FlowConnection_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Interface flow connection</h2></div>
<div class="description"><strong>Description:</strong>
Interface flow connnection is a connection between two flow (Connector between flow properties)<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Connector, generalizes Operational Flow Connection, <br/>
InterfaceConnection and Functional Flow Connection. Inherits Connector, multiplicy element, named element, multiplicity <br/>
element and named element</div></div>`

const Foundation_Interfaces_FlowDelegation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Interface Flow Delegation</h2></div>
<div class="description"><strong>Description:</strong>
Flow Delegation specifies a delegation connection (mapping) between representations of the same flow. Those flow representations <br/>
shall have the same direction and compatible types<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Connector, generalizes OperationalFlowDelegation, Functional Flow<br/> 
Delegatoin and Binding Connector. It inherits extension connector through Binding Connector</div></div>`

// missing LogicalComponentClassification
// missing LogicalComponentCategory
// missing LogicalConnection
// missing LogicalComponentCategory
// missing FlowType. Does it corresponds to the following?
const Foundation_Interfaces_FlowType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Foundation Interface flow type</h2></div>
<div class="description"><strong>Description:</strong>
The most general type fo "things" that can be exchange/stored<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends DataType, generalized AbstractFunctionalItemType, inherits Instance <br/>
Specification, DataType, Signal, NamedElement</div></div>`

const Foundation_Interfaces_Interface_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Foundation Interface</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Foundation_Interfaces_InterfaceType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Foundation Interface Type</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Foundation_Structure_Category_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Foundation Structure Category</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Foundation_Structure_Classification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Foundation Structure Classification</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Missions_Capability_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Capability</h2></div>
<div class="description"><strong>Description:</strong>
Set of effects that can be achieved at a given performance/quality<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends UML class, generalized Block and inherits Class from Block</div></div>`

const Missions_CapabilityContribution_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission capability contribution</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Missions_CapabilityUsage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission capability usage</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Missions_CapabilityCategorization_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission capability Categorization</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Missions_EntityUsage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Entity Usage</h2></div>
<div class="description"><strong>Description:</strong>
Definition fo a type of entity that can be involved in the realization of a mission in order to provide some capabilities of <br/>
because it is impacted by the objectives of the mission<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>It extends Class, generalizes Entity  and inherits Class, Classifier <br/>
and NamedElement</div></div>`

const Missions_LifeCycle_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Lifecycle</h2></div>
<div class="description"><strong>Description:</strong>
Set of stages (called "phases" by which a system goes along its life, together with the spcifications of the transitions <br/>
from one stage/phase to another<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends StateMachine.</div></div>`

const Missions_LifeCycleSignal_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Lifecycle Signal</h2></div>
<div class="description"><strong>Description:</strong>
Signal used to trigger transitions in the lifecycle<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Signal</div></div>`

const Missions_LifeCycleStage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Lifecycle stage</h2></div>
<div class="description"><strong>Description:</strong>
One specific stage in the lifecycle<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends State</div></div>`

const Missions_Mission_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission</h2></div>
<div class="description"><strong>Description:</strong>
Set of objectives that have to be reached<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Class, generalizes Block and inherits extension Classifier and Class</div></div>`

const Missions_MissionCategory_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Category</h2></div>
<div class="description"><strong>Description:</strong>
Alias Capability Category. Taxon like concept intended to organize capabilities<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Package, generalize category and inherits Package from Category.</div></div>`

const Missions_MissionClassification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Classification</h2></div>
<div class="description"><strong>Description:</strong>
Alias of CapabilityClassification. A capability classification (taxonomy) intends to organize Capability elements.<br/>
A taxonomy is a gree of Categories (taxon). In a Classficiation and element shall not appear in more than one Category<br/>
contained by the classification. <br/>
An element can appear in several categories defined in the classification.<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Package, generalizes Classficiation and<br/>
 inherits Package from Classification.</div></div>`

 const Missions_MissionConcept_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Concept</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong></div></div>`

const Missions_MissionEntity_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Entity</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong></div></div>`

const Missions_MissionEntityCategory_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Entity Category</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong></div></div>`

const Missions_MissionEntityClassification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Entity Classification</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong></div></div>`

const Missions_MissionPhase_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Phase</h2></div>
<div class="description"><strong>Description:</strong>
A possible organization for realizing a mission based on capabilities provided by a set of entities<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Missions_MissionPhaseBehavior_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Phase Behavior</h2></div>
<div class="description"><strong>Description:</strong>
Description of the possible interactions between entities involved in a specific mission phase, according to a gien mission concept.<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Activity, generalizes OperationalPhaseBehavior</div></div>`

const Missions_MissionPlanSignal_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Plan Signal</h2></div>
<div class="description"><strong>Description:</strong>
Signal used to trigger transitions in the Mission Plan<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Signal</div></div>`

const Missions_MissionRestrictedPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>System of Interest</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Missions_Task_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Task</h2></div>
<div class="description"><strong>Description:</strong>
Specific kind of behaviro step used for describing the behavior of a mission phase. 
As an option it is possible to link a task to the usage of a specific capability<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Opaque Behavior, generalizes OperationalTask</div></div>`

const Missions_MissionTaskInvocation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Task Invocation</h2></div>
<div class="description"><strong>Description:</strong>
Invocation of a specific operation task assigned to an entity in the context of a specific MissionPhaseBehavior<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends CallBehaviorAtion, Generalizes OperationTaskInvocation</div></div>`

const Missions_MissionViewpointPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Viewpoint Package</h2></div>
<div class="description"><strong>Description:</strong>
Package to store Elements of the Mission Viewpoint<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Package, generalizes ViewpointPackage, inherits Package</div></div>`

const Missions_Objective_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Objective</h2></div>
<div class="description"><strong>Description:</strong>
A specific effect that is expected from the realization of a mission.<br/>
It is characteriezed by the level at which this objective is reach(%).<br/>
 and the level of its contribution to the result of the overall mission.<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Comment, generalizes effect and inherits Comment</div></div>`

const Missions_Stakeholder_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Mission Stakeholder</h2></div>
<div class="description"><strong>Description:</strong>
To be revised: specific kind of entity that will be considered a blackbox<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends class, inherits block</div></div>`

const Operations_OperationalViewpointPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Viewpoint Package</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Extends Package, generalizes ViewpointPackage, inherits Package</div></div>`

const Operations_OperationalContext_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational context</h2></div>
<div class="description"><strong>Description:</strong>
Based on the selection of mutiple Operational Concept, teh Operational Context gives an overview of ALL exchanges between <br/>
Entities in the selected Operational Concepts<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Class, generalizes GnnericContext</div></div>`

const Operations_OperationalSystem_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operations Operational System</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Extends Class, generalies entity, inherits class, classifier and named element</div></div>`

const Operations_OperationalSystemUsage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operations Operational System Usage</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Extends Property, generalizes EntityUsage, inherits Property, Element, 
MultiplicityElement, NamedElement</div></div>`

const Operations_OperationalFlow_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow</h2></div>
<div class="description"><strong>Description:</strong>
FLow carrying an Item to be exchanged between Entities/Operational Systems<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Property, Generalizes GenericFlow</div></div>`

const Operations_OperationalFlowConnection_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow Connection</h2></div>
<div class="description"><strong>Description:</strong>
Ergo for Operational of Generic Flow Connection<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Connector, generalizes FlowConnection, inherits multiplictElment,<br/>
 NamedElement</div></div>`

const Operations_OperationalFlowDelegation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow Delegation</h2></div>
<div class="description"><strong>Description:</strong>
Ergo for Operational of Generic Flow Delegation<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Coneector, Genealizes FlowDelegation</div></div>`

// OperationalFlowTypeCategory
const Operations_OperationalFlowTypeCategory_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow Type Category</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Extends Property, Generalizes GenericFlow</div></div>`

const Operations_OperationalFlowTypeClassification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow Type Classification</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Extends Property, Generalizes GenericFlow</div></div>`

const Operations_OperationalConcept_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Concept</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>Extends Property, Generalizes GenericFlow</div></div>`

// missing OperationalConnection
//missing FlowtypeCategory
//missing OperationalInterfaceTypeCategory
//missing OperationalInterfaceType
//missing OperationaInterfaceTypeClassification

//missing ITemTypeCategory
//missing FlowTypeClassification
// missing OperationalFlowType
const Operations_OperationalFlowType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow Type</h2></div>
<div class="description"><strong>Description:</strong>
</div>
<div class ="categories"> <strong>Category: </strong>extends datatype, generalises abstractoperationlitemtype, inherites
 instancespecification and namedelement</div></div>`

// Is ti the following one?
const Operations_OperationalFlowInterfaceType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow Interface Type</h2></div>
<div class="description"><strong>Description:</strong>
Item that cn be exchanged by entities in operational viewpoint<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extends datatype, generalises abstractoperationlitemtype, inherites
 instancespecification and namedelement</div></div>`

const Operations_OperationalFlowProperty_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Flow Property</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`


const Operations_OperationalPhase_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Phase</h2></div>
<div class="description"><strong>Description:</strong>
One specific phase of the Operational Context. an be broken down into sub-phases. An Operational Phase refers to a mission phase<br/>
 that is described from the point of view of a system of interest.<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends State, generalizes MissionPhase</div></div>`

const Operations_OperationalPhaseBehavior_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Phase Behavior</h2></div>
<div class="description"><strong>Description:</strong>
Description of the possible interactions between entities involved in a specific operation phase, according to a given operation concept<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extends Activity, generalises MissionPhaseBehavior</div></div>`

const Operations_OperationalPlanSignal_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Plan Signal</h2></div>
<div class="description"><strong>Description:</strong>
Signal used to trigger transition in the Operation Plan<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Signal</div></div>`

const Operations_OperationalRestrictedPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Restricted Package</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`
// missing the different kinds of restricted packages for operations
const  Operations_OperationalTask_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Task</h2></div>
<div class="description"><strong>Description:</strong>
Task assigned to an entity in an operation context. Can be linked to one of the capability provided by that entity<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extends OpaqueBehavior, generalizes MissionTask</div></div>`

const Operations_OperationalTaskInvocation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operational Task Invocation</h2></div>
<div class="description"><strong>Description:</strong>
Invocation of a specific operation task assigned to an entity in the context of a specific operational scenario<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends CallBehaviorAction, Generalizes MissionTaskInvocation</div></div>`

//missing the different stereotypes for package restriction

const Functions_EnergyFlow_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Energy Flow</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Functions_Function_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Function</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Functions_FunctionalContext_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Context</h2></div>
<div class="description"><strong>Description:</strong>
Cotainr block to represent the functional architecture in its context (external Actors, etc.)<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extends class, generalizes genericcontext, inherits class</div></div>`

const Functions_FunctionalFlow_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Flow</h2></div>
<div class="description"><strong>Description:</strong>
Specification of an exchange ability (if optional) or requirements (in not optional), characterized by the type fo thing being exchanged,<br/>
 the direction of that exchange (i.e. input, output or both) and optional minimal required/commited level of quality for that exchange.<br/>
 A Flow is a kind of parameter<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Property and Classfifier, generalies TechnicalFlow and genericFlow, <br/>
inherits Property</div></div>`

//missing FunctionalFlowConnection the following one? No, exists

const Functions_FunctionalFlowConnection_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Flow Connection</h2></div>
<div class="description"><strong>Description:</strong>
A functional Flow Connection is a fFLaw connection betwe two Functional Flow<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extends Connector, generalizes TechnicalFlowConnection and FlowConnection,<br/>
 Inherits multiplityElement, NamedElement, Connector </div></div>`

const Functions_FunctionalFlowDelegation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Flow Delegation</h2></div>
<div class="description"><strong>Description:</strong>
A functional FLow Delegation specifies a delgation conction (mapping) between representations fo the same functional flow.<br/>
 Those flow representations shall have the same direction and compatible types<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extends Connector, generalies TechnicalFlowDelegation and FlowDelgation,<br/>
 inherits Connector</div></div>`

//missing FunctionalInterface
//missing FunctionaInterfaceType
//missing FunctionalInterfaceCategory
//missing FunctionalInterfaceClassification

const Functions_FunctionalFlowInterfaceType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Flow Interface Type</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Functions_FunctionalFlowProperty_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Flow Property</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Functions_FunctionalMode_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>System of Interest</h2></div>
<div class="description"><strong>Description:</strong>
Specific Kind of mode used for descibing a model behavior of a system function. <br/>
A mode is an ast'act label applied to a user (UMLTM Actor) selectable option that enables a set of use case based <br/>
system capabilities to be employed in cnojunction with organizationnal process and precedures to command and control (C2) a system,<br/>
 product or service to achieve a specified set of mission objectives, outcomes and levels of performance.<br/>
 Triggering events serve as entry and exist criteria into and out of a modes can  have sub-modes<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extendes State, generalies AbstractMode, inherits Element</div></div>`

const Functions_FunctionalPart_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Part</h2></div>
<div class="description"><strong>Description:</strong>
Usage of a function<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extendes Property, generalizes FunctionUsage, inherits Property, Element,<br/>
 MulitplicityElement and Nmaed Element</div></div>`

const Functions_FunctionalRestrictedPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Restricted Package</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Functions_FunctionalViewpointPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Viewpoint Package</h2></div>
<div class="description"><strong>Description:</strong>
Package to store elements of the functional viewpoint<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extendes Package, generalies ViewpointPackage, inherits Package</div></div>`

const Functions_FunctionBehavior_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Behavior</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Functions_FunctionBehaviorInvocation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Behavior Invocation</h2></div>
<div class="description"><strong>Description:</strong>
A functionBehaviorInvocationn is a specific usage of a function behavior which denotes the invocations(ie.. a "call" or an "exction") <br/>
of a Function Behavior <br/> 
</div>
<div class ="categories"> <strong>Category: </strong>extends Activity, Generalizes activity, AbstractFunctionBeavior, <br/>
inherits behavior, Class, Classififier, NamedElement</div></div>`
// missing FunctionalBehaviorCategory


const Functions_FunctionCategory_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Category</h2></div>
<div class="description"><strong>Description:</strong>
Taxon like concept intended to organize functions<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>depends on Function, extendes Package, externalize category and inherits package</div></div>`

//missing FonctionaBehaviorClassification ?
//could be the next one?
// il semble qu'il soit défini 2 fois
const Functions_FunctionClassification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Classification</h2></div>
<div class="description"><strong>Description:</strong>
Definition of an ability to produce values specified by its outputs flows based on values specified by tis inputs flows<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Depends on FunctionCategory, extends Class, Inherits Class,
 Classifier and NamedElement</div></div>`

const Functions_FunctionInvocation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional Invocation</h2></div>
<div class="description"><strong>Description:</strong>
A function Invocation is a specific usage of a Function which denotes a "call" of the FUnction (i.e. an execution of the function)<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extendes Property, Generalizes FunctionUsage,
 FunctionnBehaviorInvocation, Generic Invocation, plus inherited ConnectableElement, Property, Element, MultiplicityElement, NamedElement</div></div>`

const Functions_FlowType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Function Item Type</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

// missing Functions_ModalFUnctionBehavior

const Functions_ModalFunctionBehaviorInvocation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Modal Function Behavior Invocation</h2></div>
<div class="description"><strong>Description:</strong>
Invocation of a modal function behavior<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends CallBehaviorAction</div></div>`

const Functions_OperationalTaskRealization_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Operation Task Realization</h2></div>
<div class="description"><strong>Description:</strong>
Statement that expresses an outcomes-based capability the user requires from the SoI to enable their achievement of a specific<br/>
 mission or task objective. It identifies the interaction with the User (Actor. External systems. Enablign systems) and the SOI<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extendes Activity</div></div>`

// missing signalFlowType. The same than the following?
// I think no, so I created one.

const Functions_SignalFlowType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Signal Flow Type</h2></div>
<div class="description"><strong>Description:</strong>
Kind of Flow Type allowing to represent an information functional command. A command is a signal allowing<br/>
to modify the behavior of a Function (i.e. trigger a mode change, command the activation of behavior<br/>
execution). A command can be sent and recived in a acivity diagram by using SendSignalAction and ReceiveSignalAction. <br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Signal, Generalizes abstractFunctionaItemType, <br/>
Inherits Datatype, Named Element, Signal</div></div>`

const Functions_SignalItemType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Signal Item Type</h2></div>
<div class="description"><strong>Description:</strong>
Kind of Signal Type allowing to ... <br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const LogicalArchitecture_LogicalCategory_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Category</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const LogicalArchitecture_LogicalClassification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Classification</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const LogicalArchitecture_LogicalComponent_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Component</h2></div>
<div class="description"><strong>Description:</strong>
Specific Kind of logical element able to realize functions and to provide interfaces. A logical component is either an atomic<br/>
 component or a commposite component.<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Depends on Logical Componnent Category, Extends class, <br/>
generalizes TechnicalComponent, inherits Class, Classfier and NamedElement</div></div>`

const LogicalArchitecture_LogicalContext_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Context</h2></div>
<div class="description"><strong>Description:</strong>
Container Block to represent the functional architecture<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Class, Genealizes GenericContext, Inherits Class</div></div>`

const LogicalArchitecture_LogicalInterface_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Interface</h2></div>
<div class="description"><strong>Description:</strong>
Specifies an Interaction point fo a LogicalComponent denoting its ability to be involved in exchanges with is environment.<br/>
Shall be managed in version. The following attributes ae elemtns impacting version/baseline:<br/>
- flows: if flow is added or remove the configuration of the interface is impacted<br/>
- direction: if the direction change the definition is impacted but it shall be linked with<br/>
-type
<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Port, genealizes TechnicalInteface and Generic Interface</div></div>`

const LogicalArchitecture_LogicalInterfaceConnection_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Interface Connection</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const LogicalArchitecture_LogicalState_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical State </h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const LogicalArchitecture_LogicalStateMachine_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical State Machine</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalState_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical State</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalStateMachine_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical State Machine</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const LogicalArchitecture_LogicalInterfaceType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Interface Type</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`
//missing LogicalInterfaceTypeCategory [package]
//missing LogicalInterfaceTypeClassification [package]



const LogicalArchitecture_LogicalRestrictedPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>System of Interest</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const LogicalArchitecture_LogicalViewpointPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical Viewpoint Package</h2></div>
<div class="description"><strong>Description:</strong>
Package to store Elements of the Logical Viewpoint<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

// missing PackagesRstrictionStereotypes for many kind of package
// missing TechnicalComponentTypeList: HardwareComponent, SoftwareComponent, System, Sub-System, Equipment, Product
// missing TechnicalInterfaceTypeList: AFSX, A429, A453, A629, AIR, Analogue, CAN, Coaxial, Discrete, ELEC, Ethernet, FBG, FUEL, GDN, Hydraulic, Mechanic, MIL1553, PSY, RS232, RS422, RS485
// missing softwareComponent
// missing softwarePart
// missing FunctionalToTechnicalRealizationLink (stereotype extending Realization)
// missing HardwareComponent, HardwarePart

const TechnicalArchitecture_Functional_To_Technical_Path_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Functional to Technical Path</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_GroundReference_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Ground Reference</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_Logical_To_Technical_Path_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Logical to Technical Path</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_Media_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Medio</h2></div>
<div class="description"><strong>Description:</strong>
Defines the characteristics of a technical connection in terms of ability to sent (i.e. "Tx")<br/>
and receive (i.e. "Rx") flows.<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends AssociationClass, generalizes NetworMedia, inherits Class,<br/>
 Classifier and NamedElement</div></div>`

const TechnicalArchitecture_NetworkMedia_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Network Media</h2></div>
<div class="description"><strong>Description:</strong>
Specific media that describes a connection realized by a network<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

//missing Network
//missing NetworkPart

const TechnicalArchitecture_TechnicalCategory_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Category</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalClassification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Classification</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalComponent_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Techical Component</h2></div>
<div class="description"><strong>Description:</strong>
Specialization of a logical component that provides information about the technologies that the implementation will use.<br/>
Technical Component allows to define a technical architecture<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Class, generalizes HardwareComponent, LogicalComponent,<br/>
 NetworkMedia, SoftwareComponent, Network Depnds LogicalComponentCategory inherits class, classiffier, NamedElement</div></div>`

//missing TechnicalComponentCategory
//missing TechnicalComponentClassification
//missing TechnicalConnection


const TechnicalArchitecture_TechnicalContext_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Context</h2></div>
<div class="description"><strong>Description:</strong>
Connection between two Technical InterfaceType<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Connector, 
Generalizes NetworkConnection LogicalConnection inherits Connector, MultiplicityElement, NamedElement</div></div>`

const TechnicalArchitecture_TechnicalFlow_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Flow</h2></div>
<div class="description"><strong>Description:</strong>
Specification an<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalItemType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Flow Type</h2></div>
<div class="description"><strong>Description:</strong>

</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalFlowConnection_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Flow Connection</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalFlowDelegation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Flow Delegation</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalFlowInterfacetype_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Flow Interface Type</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalFlowProperty_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Flow Property</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalInterface_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Interace</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalInterfaceConnection_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Interface Connection</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalInterfaceType_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Interface Type</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

//TechnicalNetworkConnection or NetworkConnection?
const TechnicalArchitecture_TechnicalNetworkConnection_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Work Connection</h2></div>
<div class="description"><strong>Description:</strong>
Network Connection requested the system designer (to the network engineers)<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Extends Connector, generalizes TechnicalConnection, inherits Connector,<br/>
 MultiplicityElement, NamedElement</div></div>`

const TechnicalArchitecture_TechnicalPart_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Part</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalPath_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Path</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalRestrictedPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Restricted Package</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const TechnicalArchitecture_TechnicalViewpointPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Technical Viewpoint Package</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Requirements_Chapter_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Chapter</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Requirements_RestrictedRequirementsPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Restricted Requiremets Package</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_ConstantParameter_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Constant Parameter</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_ConstantBlockEquation_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>System of Interest</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_DesignObjectiveConstraint_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Design Objective Constraint</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_DesignObjectiveParameter_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Design Objective Parameter</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_DesignVariable_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Design Variable</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_MoEConstraint_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>MoE Constraint</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_MoEParameter_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>MoE Parameter</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_MoPConstraint_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>MoP Constraint</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_ParametricAnalysisContext_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Parametric Analysis Context</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_ParametricRestrictedPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Parametric Restricted Package</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_ParametricViewpointPackage_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Parametric Viewpoint Package</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const Parametrics_RequirementVerification_html = 
`<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Requirement Verification</h2></div>
<div class="description"><strong>Description:</strong>
System of Interest<br/> 
</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`


rmoflpFieldSet=`
<div id="rmofltPalette" style="display:none;">
<fieldset id="moflt_foundation_fieldset">
<legend>R-MOFLT Foundation</legend> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_SoI"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-SoI-button' class="el-button" data-toggle="tooltip">
<svg width="50" height="50" id="Foundation_SoI" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<g><path  style="fill:none;stroke:#000000;stroke-width:10" d="M -0.01445981,0.26089874 H 100.46251 V 100.21318 H -0.01445981 Z" />
  <path style="fill:none;stroke:#000000;stroke-width:5"   d="m 1.0349081,86.199581 c 32.7930099,0 65.5857559,0 98.3782379,0"/>
  <path style="fill:none;stroke:#000000;stroke-width:5" d="m 0.76889322,71.454522 c 32.79300978,0 65.58575578,0 98.37823578,0" />
<g><path d="M 40.6476 45.9518 C 40.6476 47.5804 40.3427 49.1903 39.7328 50.7815 C 39.1378 52.3727 38.2973 53.7205 37.2114 54.8249 C 36.0213 56.023 34.6304 56.959 33.0387 57.6329 C 31.4619 58.3068 29.5578 58.6438 27.3265 58.6438 C 24.9315 58.6438 22.7745 58.363 20.8556 57.8014 C 18.9515 57.2398 17.0102 56.4068 15.0317 55.3023 L 15.0317 48.3385 L 15.3441 48.3385 C 17.0251 50.0982 18.9664 51.4554 21.1679 52.4101 C 23.3695 53.3648 25.4373 53.8422 27.3711 53.8422 C 30.1082 53.8422 32.2354 53.1963 33.7528 51.9047 C 35.285 50.613 36.0511 48.8908 36.0511 46.738 C 36.0511 44.8847 35.6866 43.5182 34.9577 42.6384 C 34.2437 41.7585 33.1503 41.0753 31.6776 40.5885 C 30.5619 40.2141 29.3496 39.9053 28.0405 39.6619 C 26.7463 39.4186 25.3703 39.1097 23.9125 38.7353 C 20.9671 37.949 18.7804 36.6106 17.3523 34.7199 C 15.9392 32.8105 15.2326 30.3301 15.2326 27.2788 C 15.2326 23.7782 16.4077 20.914 18.7581 18.6864 C 21.1084 16.44 24.091 15.3168 27.7058 15.3168 C 30.0413 15.3168 32.1834 15.5976 34.1321 16.1592 C 36.0808 16.7208 37.8064 17.4134 39.3088 18.2371 L 39.3088 24.8077 L 38.9964 24.8077 C 37.732 23.4599 36.0659 22.3461 33.9982 21.4663 C 31.9454 20.5677 29.8405 20.1184 27.6835 20.1184 C 25.3183 20.1184 23.4142 20.7362 21.9712 21.9717 C 20.5432 23.2072 19.8291 24.7984 19.8291 26.7452 C 19.8291 28.4862 20.1862 29.8527 20.9002 30.8449 C 21.6142 31.837 22.8712 32.5952 24.6712 33.1193 C 25.6232 33.3814 26.9769 33.6997 28.7322 34.0741 C 30.4876 34.4484 31.9751 34.8322 33.1949 35.2253 C 35.6643 36.049 37.5237 37.2939 38.7733 38.9599 C 40.0229 40.626 40.6476 42.9566 40.6476 45.9518 Z"/>
    <path d="M 68.6511 42.2172 C 68.6511 47.3277 67.6098 51.3618 65.5272 54.3195 C 63.4446 57.2772 60.6554 58.7561 57.1596 58.7561 C 53.6341 58.7561 50.83 57.2772 48.7474 54.3195 C 46.6797 51.3618 45.6459 47.3277 45.6459 42.2172 C 45.6459 37.1067 46.6797 33.0725 48.7474 30.1148 C 50.83 27.1384 53.6341 25.6501 57.1596 25.6501 C 60.6554 25.6501 63.4446 27.1384 65.5272 30.1148 C 67.6098 33.0725 68.6511 37.1067 68.6511 42.2172 Z M 64.3222 42.2172 C 64.3222 38.155 63.69 35.1411 62.4256 33.1755 C 61.1612 31.1912 59.4058 30.1991 57.1596 30.1991 C 54.8836 30.1991 53.1134 31.1912 51.849 33.1755 C 50.5994 35.1411 49.9747 38.155 49.9747 42.2172 C 49.9747 46.1483 50.6069 49.1341 51.8713 51.1746 C 53.1357 53.1963 54.8985 54.2072 57.1596 54.2072 C 59.391 54.2072 61.1389 53.2057 62.4033 51.2027 C 63.6826 49.1809 64.3222 46.1858 64.3222 42.2172 Z" />
    <path d="M 87.2159 57.8856 L 74.0956 57.8856 L 74.0956 53.6175 L 78.4467 53.6175 L 78.4467 20.3431 L 74.0956 20.3431 L 74.0956 16.075 L 87.2159 16.075 L 87.2159 20.3431 L 82.8648 20.3431 L 82.8648 53.6175 L 87.2159 53.6175 Z"/>
  </g></g>
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_TransversalPackage"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-TransversalPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id=Foundation_TransversalPackage width="50" height="50" overflow="visible" viewBox="0 0 229.534 181.346">
<g fill="white" transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path stroke="#595959"  stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(4.96 -5.734)"><path d="M0 100.387h81.669v80.959H0z"/></g></g></svg>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_SoIViewpoint"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-SoIViewpoint-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Foundation_SoIViewpoint" width="50" height="50" viewBox="0 0 150 160">
  <g transform="translate(15,-10)">
    <g transform="translate(0,-51)">
      <path d="M0 158.06 L63.78 73.02 L127.56 158.06 L0 158.06 Z" fill="#ffce3c"stroke="#000000" stroke-width="11"/>
    </g>
    <g transform="translate(0,-25)"> 
      <path d="M0 158.06 L127.56 158.06" stroke="#000000" stroke-width="11"/>
    </g>
    <path d="M0 158.06 L127.56 158.06" stroke="#000000" stroke-width="11"/>
  </g>
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_ViewpointSearcher"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-ViewpointSearcher-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Foundation_ViewpointSearcher" xml:space="preserve" width="50" height="50" fill="none" fill-rule="evenodd" stroke-linecap="square" stroke-miterlimit="3" color-interpolation-filters="sRGB" font-size="12" overflow="visible" viewBox="0 0 229.534 181.346">
  <g fill="#fff">
    <g transform="translate(12 -13.44)">
      <path stroke="#cdcdcd" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/>
      <path stroke="#595959" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/>
    </g>
  </g>
  <g fill="#000" transform="matrix(-.21875 0 0 .22033 157.736 41.588)">
    <path d="M556.368 473.006 387.693 305.52c-25.125 38.8-58.35 71.79-97.425 96.739l168.6 167.413c26.925 26.735 70.575 26.735 97.425 0 27-26.586 27-69.93.075-96.665z"/>
      <path fill-rule="nonzero" d="M392.793 132.277c0-150.427-122.848-272.324-274.28-272.324-151.508 0-274.281 121.897-274.281 272.324 0 150.353 122.773 272.325 274.28 272.325 151.433 0 274.28-121.972 274.28-272.325zm-274.28 204.226c-113.445 0-205.692-91.59-205.692-204.226 0-112.635 92.247-204.225 205.691-204.225s205.692 91.59 205.692 204.225c0 112.636-92.248 204.226-205.692 204.226z"/>
      <ellipse cx="-118.512" cy="132.277" fill="#baebff" fill-rule="nonzero" opacity=".999" rx="205.764" ry="204.297" transform="scale(-1 1)"/>
        <path d="M-43.633 133.637H2.342c0-62.854 51.525-114.016 114.825-114.016v-45.652c-88.65 0-160.8 71.642-160.8 159.668z"/>
  </g>
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Interfaces_Flow"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Interfaces-Flow-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Foundation_Interfaces_Flow" xml:space="preserve" width="50" height="50" fill="none"  viewBox="0 0 91.825 98.65">
    <g transform="translate(.125 -.125)"><path d="M1.44 1.69h90.709v98.4H1.44z"/><path d="M0 .25h90.709v98.4H0z"/><g transform="translate(24.378 -21.089)"><path fill="white" stroke="#404040"  stroke-width="4.25" d="M0 42.946h65.197V98.65H0z"/></g><g transform="translate(5.52 -8.056)"><path stroke="#3f3f3f"  stroke-width="4.5" d="M0 16.88h18.24l.2 81.77H0"/></g><g transform="translate(39.685 -25.833)"><path fill="#fff" stroke="#3f3f3f"  stroke-width="5.25" d="M0 52.16v46.49l41.1-23.24L0 52.16Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Interfaces_FlowConnection"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Interfaces-FlowConnection-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Foundation_Interfaces_FlowConnection"   width="50" height="50" fill="none" viewBox="0 0 77.575 69.496">
<defs id="Patterns_And_Gradients"><linearGradient id="Foundation_Interfaces_FlowConnection_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>
<g><g><g transform="rotate(90 17.008 52.488)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g><g transform="matrix(0 1 1 0 2.079 6)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g></g></g><g  transform="translate(48.33 -35.433)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#Foundation_Interfaces_FlowConnection_LG01);stroke:#595959;stroke-width:4.5"/></g><g transform="translate(4.075 -4.252)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#Foundation_Interfaces_FlowConnection_LG01);stroke:#595959;stroke-width:4.5"/></g></g><g  transform="translate(24.98 -16.3)"><path stroke="#595959" stroke-width="3" d="M0 69.5h10.24V38.31h13.11"/></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Interfaces_FlowDelegation"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Interfaces-FlowDelegation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"  id="Foundation_Interfaces_FlowDelegation" width="50" height="50" fill="none" viewBox="0 0 77.575 80.538">
  <g id="group2702-1" transform="translate(3 -3)"><g ><g><g ><g transform="rotate(90 17.008 63.53)"><path d="M0 80.54h34.02" style="stroke:#fff;stroke-width:3}"/></g><g  transform="matrix(0 1 1 0 -8.964 17.042)"><path d="M0 80.54h34.02" style="stroke:#fff;stroke-width:3}"/></g></g><g transform="translate(.354 -34.016)"><path  stroke-width=".75" d="M0 51.093h31.181v29.445H0z"/><text x="4" y="80.22" fill="#595959" font-family="Calibri" font-size="2em" font-weight="700">=</text></g></g><g transform="translate(48.33 -35.433)"><path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="stroke:#595959;stroke-width:4.5"/></g><g transform="translate(4.075 -4.252)"><path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="stroke:#595959;stroke-width:4.5"/></g></g><g  transform="translate(24.98 -16.3)"><path stroke="#595959"  stroke-width="3" d="M0 80.54h10.24V49.36h13.11"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Interfaces_FlowType"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Interfaces-FlowType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"  id="Foundation_Interfaces_FlowType" xml:space="preserve" width="50" height="50" fill="none"   viewBox="0 0 113.386 88.535">
    <g ><g transform="translate(6.296)"><path fill="white" stroke="#000"  stroke-width="4.5" d="M0 4.5h99.444v84.035H0z"/><g transform="translate(1.77 -23.316)">
    <path stroke="#000"  stroke-width="6" d="M0 88.54h95.83"/></g></g><g transform="translate(58.11 -30.46)"><path fill="#fff" stroke="#3f3f3f"  stroke-width="5.25" d="M0 42.05v46.49l41.1-23.25L0 42.05Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Interfaces_Interface"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Interfaces-Interface-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Foundation_Interfaces_Interface" width="50" height="50" fill="none"  viewBox="0 0 91.825 98.65">
  <g transform="translate(24.378 -21.089)">
      <path fill="white" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.25" d="M0 42.946h65.197V98.65H0z"/></g>
      <g transform="translate(5.52 -8.056)"><path stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M0 16.88h18.24l.2 81.77H0"/></g>
      <g transform="translate(39.685 -25.833)"></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Interfaces_InterfaceType"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Interfaces-InterfaceType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"  id="Foundation_Interfaces_InterfaceType" xml:space="preserve" width="50" height="50" fill="none" viewBox="0 0 113.386 88.535">
   <g><g transform="translate(6.296)"><path fill="white" stroke="#000"  stroke-width="4.5" d="M0 4.5h99.444v84.035H0z"/>
    <g transform="translate(1.77 -23.316)"><path stroke="#000" stroke-width="6" d="M0 88.54h95.83"/></g></g><g transform="translate(54.79 -34.648)"><circle cx="20.693" cy="67.842" r="20.693" fill="#fff" stroke="#000"  stroke-width="6"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Structure_Category"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Structure-Category-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"  id="Foundation_Structure_Category"  width="50" height="50" fill="none"  viewBox="0 0 56.538 49.96">
  <g transform="translate(6.289 -4.44)"><g ><g style="visibility:visible"><path d="M34.97 8.88H10.43L-1.85 30.14 10.43 51.4h24.54l12.28-21.26L34.97 8.88Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5"/></g><path d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7 33.53 7.44Z" style="fill:white;stroke:#404040;stroke-width:3"/></g><g transform="translate(21.26 -21.26)"><g style="visibility:visible"><path d="M13.71 30.14 1.44 51.4h24.55L13.71 30.14Z" style="fill:white;fill-opacity:.5;stroke:#262626;stroke-opacity:.5"/></g><path d="M12.27 28.7 0 49.96h24.55L12.27 28.7Z" style="fill:white;stroke:#404040;stroke-width:3"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Foundation_Structure_Classification"), { position: 'left', className: 'w2ui-light' })}
id='Foundation-Structure-Classification-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Foundation_Structure_Classification"   width="50" height="50" fill="none"  font-size="12" viewBox="0 0 229.534 189.969">
    <g transform="translate(12 -22.063)">
      <g>
        <g>
          <path i fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06H0Z" style="visibility:visible" transform="translate(1.44 1.44)"/>
          <path fill="white" stroke="#595959" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06H0Z"/>
        </g>
      </g>
      <g transform="translate(130.394 -92.126)">
        <g>
          <g style="visibility:visible">
            <path d="M55.39 123H15.9l-19.75 34.2 19.75 34.21h39.49l19.75-34.21L55.39 123Z" style="ill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
          </g>
            <path fill="url(#Foundation_Structure_Classification_LG02)" stroke="#404040"  stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21-19.75-34.2Z"/>
          </g>
          <g transform="translate(34.205 -34.205)"><g  style="visibility:visible">
            <path d="M21.19 157.2 1.44 191.41h39.5L21.19 157.2Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
          </g>
          <path fill="#fff" stroke="#404040" stroke-width="3" d="M19.75 155.76 0 189.97h39.5l-19.75-34.21Z"/>
        </g>
      </g>
      <g transform="translate(8.504 -14.173)">
        <path  stroke-width="12" d="M0 130.441h192.756v59.528H0z"/><text x="2" y="193.2" fill="#000" font-family="Calibri" font-size="7em" font-weight="700">CLA</text>
      </g>
    </g>
</svg>
</button>

</fieldset>

<fieldset id="moflt_mission_fieldset">
<legend>R-MOFLT Mission</legend> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionViewpointPackage"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionViewpointPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionViewpointPackage" width="50" height="50" fill="none" viewBox="0 0 229.534 181.346" >
  <defs><linearGradient id="Missions_MissionViewpointPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".8"/><stop offset="1" stop-color="red" stop-opacity="1"/></linearGradient></defs>
  <g fill="url(#Missions_MissionViewpointPackage_LG01)" transform="translate(12 -13.44)"><path  stroke="#595959"  stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_Mission"), { position: 'left', className: 'w2ui-light' })}
id='Missions-Mission-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_Mission"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 90.979 85.44">
  <defs id="Missions_Mission_LG"><linearGradient id="Missions_Mission_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#a60000" stop-opacity="1"/><stop offset="1" stop-color="red" stop-opacity=".5"/></linearGradient></defs>
  <g transform="translate(2.25 -4.322)"><g><ellipse cx="42.52" cy="46.322" fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="2.25" style="visibility:visible" rx="42.52" ry="39.118" transform="translate(1.44 1.44)"/><ellipse cx="42.52" cy="46.322" fill="url(#Missions_Mission_LG01)" stroke="#404040" stroke-width="2.25" rx="42.52" ry="39.118"/></g><g><text x="17" y="67" fill="#fff" font-family="Calibri" font-size="5em" font-weight="700">M</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionCategory"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionCategory-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionCategory"  width="50" height="50" fill="none" fill-rule="evenodd" viewBox="0 0 56.538 49.96">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_MissionCategory_LG01" x1="0" x2="0" y1="1" y2="0"><stop id="stop937" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop939" offset="1" stop-color="red" stop-opacity=".8"/></linearGradient>
  </defs>
  <g>
    <g style="visibility:visible" transform="translate(7.729 -3)">
      <path d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
    </g>
      <path fill="url(#Missions_MissionCategory_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M39.819 3h-24.54L2.999 24.26l12.28 21.26h24.54l12.28-21.26z"/>
      <g transform="translate(27.549 -25.7)"><g  style="visibility:visible" transform="translate(1.44 1.44)">
        <path d="M12.27 28.7 0 49.96h24.55z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
      </g>
      <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M12.27 28.7 0 49.96h24.55z"/>
    </g>
  </g>
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionClassification"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionClassification-button' class="el-button" data-toggle="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionClassification" width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 189.969">
    <defs id="Missions_MissionClassification_LG">
      <linearGradient id="Missions_MissionClassification_LG01" x1="-5.289" x2="-5.289" y1="31.832" y2="222.315" gradientTransform="matrix(1.13443 0 0 .8815 12 -22.063)" gradientUnits="userSpaceOnUse">
        <stop id="stop4" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop6" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
      <linearGradient id="Missions_MissionClassification_LG02" x1="-6.337" x2="-6.337" y1="205.164" y2="128.647" gradientTransform="scale(1.07152 .93325)" gradientUnits="userSpaceOnUse">
        <stop id="stop9" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop11" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
    </defs>
      <g style="visibility:visible" transform="translate(13.44 -20.623)">
        <path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06Z"/>
      </g>
      <path fill="url(#Missions_MissionClassification_LG01)" stroke="#595959"  stroke-width="12" d="M12 11.997v155.91h204.09V48.847H114.05l-34.02-36.85z"/>
      <g transform="translate(142.394 -114.19)">
        <g>
          <g style="visibility:visible" transform="translate(1.44 1.44)">
            <path d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
          </g>
          <path fill="url(#Missions_MissionClassification_LG02)" stroke="#404040"  stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z"/>
        </g>
        <g transform="translate(34.205 -34.205)"><g style="visibility:visible" transform="translate(1.44 1.44)">
          <path  d="M19.75 155.76 0 189.97h39.5z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
        </g>
        <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M19.75 155.76 0 189.97h39.5z"/>
      </g>
    </g>
    <path fill="none" stroke="none" stroke-width="12" d="M20.504 94.205H213.26v59.528H20.504z"/>
    <text  x="22.504" y="156.964" fill="#000" font-family="Calibri" font-size="7em" font-weight="700">CLA</text>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionConcept"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionConcept-button' class="el-button" data-toggle="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionConcept" width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 144.496 126.749">
   <defs id="Patterns_And_Gradients"><linearGradient id="Missions_MissionConcept_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="red"/></linearGradient></defs>
    <g >
   <circle cx="73" cy="68" r="50" stroke="black" stroke-width="8" fill="url(#Missions_MissionConcept_LG01)"
    </g>
  </svg>
</button>
<button class="white-box"></button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionEntity"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionEntity-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionEntity" width="50" height="50" fill="none"  font-size="12" overflow="visible" viewBox="0 0 100 100">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_MissionEntity_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="red"/></linearGradient></defs>
    <rect x="25" y="25" width="50" height="50" fill="white" stroke="black" stroke-width="8" transform="rotate(45, 50, 50)" />
</svg>
  </button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionEntityCategory"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionEntityCategory-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionEntityCategory" width="50" height="50" fill="none"  font-size="12" overflow="visible" viewBox="0 0 56.538 49.96">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_MissionEntityCategory_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="red"/></linearGradient></defs>
  <g  transform="translate(4.078 -4.44)"><g transform="translate(2.211)"><path  fill="#3f3f3f" fill-opacity=".5" stroke="#3f3f3f"  stroke-opacity=".5" stroke-width="3" d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7 33.53 7.44Z" style="visibility:visible" transform="translate(1.44 1.44)"/><path fill="url(#Missions_MissionEntityCategory_LG01)" stroke="#404040" stroke-width="3" d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7 33.53 7.44Z"/></g><g><text x="13.38" y="39.5" fill="#000" font-family="Calibri" font-size="2.5em" font-weight="700">C</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionEntityClassification"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionEntityClassification-button' class="el-button" data-toggle="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionEntityClassification" width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 189.969">
    <defs id="Missions_MissionEntityClassification_LG">
      <linearGradient id="Missions_MissionEntityClassification_LG01" x1="-5.289" x2="-5.289" y1="31.832" y2="222.315" gradientTransform="matrix(1.13443 0 0 .8815 12 -22.063)" gradientUnits="userSpaceOnUse">
        <stop id="stop4" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop6" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
      <linearGradient id="Missions_MissionEntityClassification_LG02" x1="-6.337" x2="-6.337" y1="205.164" y2="128.647" gradientTransform="scale(1.07152 .93325)" gradientUnits="userSpaceOnUse">
        <stop id="stop9" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop11" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
    </defs>
      <g style="visibility:visible" transform="translate(13.44 -20.623)">
        <path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06Z"/>
      </g>
      <path fill="url(#Missions_MissionEntityClassification_LG01)" stroke="#595959"  stroke-width="12" d="M12 11.997v155.91h204.09V48.847H114.05l-34.02-36.85z"/>
      <g transform="translate(142.394 -114.19)">
        <g>
          <g style="visibility:visible" transform="translate(1.44 1.44)">
            <path d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
          </g>
          <path fill="url(#Missions_MissionEntityClassification_LG02)" stroke="#404040"  stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z"/>
        </g>
        <g transform="translate(34.205 -34.205)"><g style="visibility:visible" transform="translate(1.44 1.44)">
          <path  d="M19.75 155.76 0 189.97h39.5z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
        </g>
        <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M19.75 155.76 0 189.97h39.5z"/>
      </g>
    </g>
    <path fill="none" stroke="none" stroke-width="12" d="M20.504 94.205H213.26v59.528H20.504z"/>
    <text  x="22.504" y="156.964" fill="#000" font-family="Calibri" font-size="7em" font-weight="700">CLA</text>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_EntityUsage"), { position: 'left', className: 'w2ui-light' })}
id='Missions-EntityUsage-button' class="el-button" data-toggle="tooltip"> 
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_EntityUsage" width="50" height="50" fill="none" font-size="12"  viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="Missions_EntityUsage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="red" stop-opacity=".75"/></linearGradient></defs>
  <g transform="translate(3 -9.08)"><path fill="url(#Missions_EntityUsage_LG01)" stroke="#000"  stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(1.417 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="29.03" y="66" fill="#000" font-family="Calibri" font-size="3em" font-weight="700">U</text></g></g></svg>
</button>

<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_Task"), { position: 'left', className: 'w2ui-light' })}
id='Missions-Task-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_Task"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 90.979 85.44">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_Task_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#a60000" stop-opacity="1"/><stop offset="1" stop-color="red" stop-opacity="0.5"/></linearGradient></defs>
  <g transform="translate(2.25 -4.322)"><g><ellipse cx="42.52" cy="46.322" fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="2.25" style="visibility:visible" rx="42.52" ry="39.118" transform="translate(1.44 1.44)"/><ellipse cx="42.52" cy="46.322" fill="url(#Missions_Task_LG01)" stroke="#404040" stroke-width="2.25" rx="42.52" ry="39.118"/></g><g><text x="25.19" y="67.32" fill="#fff" font-family="Calibri" font-size="5em" font-weight="700">T</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionTaskInvocation"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionTaskInvocation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionTaskInvocation"  width="50" height="50" fill="none" viewBox="0 0 72.637 48.421">

  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_MissionTaskInvocation_LG01" x1="0" x2="0" y1="0" y2="1"><stop id="stop4" offset="0" stop-color="#fff" stop-opacity="1"/><stop id="stop6" offset="1" stop-color="red" stop-opacity="1"/></linearGradient></defs>
  <g transform="translate(3 -4.44)"><path fill="url(#Missions_MissionTaskInvocation_LG01)" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0 34.25a14.174 14.174-180 0 0 14.17 14.17h36.85A14.174 14.174-180 0 0 65.2 34.25V21.61A14.174 14.174-180 0 0 51.02 7.44H14.17A14.174 14.174-180 0 0 0 21.61v12.64Z"/></g>
 <g transform="translate(33,40)scale(0.0025,-0.0025) " 
 fill="gray" >
 <path  d="M5860 12792 c0 -4 -29 -174 -65 -377 -36 -204 -95 -541 -131 -750 -37 -209 -68 -381 -69 -383 -1 -1 -61 -14 -133 -27 -233 -45 -467 -108 -691 -187 -110 -38 -114 -39 -131 -21 -9 10 -225 268 -480 573 -255 305 -470 563 -480 573 -16 17 -38 5 -476 -248 -252 -146 -460 -269 -462 -274 -2 -5 115 -332 259 -727 l262 -717 -40 -36 c-289 -261 -333 -304 -614 -615 l-36 -39 -704 257 c-387 142 -714 258 -726 259 -19 2 -58 -61 -288 -457 -253 -438 -265 -460 -248 -476 10 -10 270 -228 578 -485 308 -257 566 -473 573 -479 10 -10 5 -35 -27 -127 -85 -249 -141 -456 -185 -688 -14 -74 -27 -135 -28 -136 -2 -1 -174 -32 -383 -69 -209 -36 -546 -95 -750 -131 -203 -36 -373 -65 -377 -65 -4 0 -8 -243 -8 -540 0 -297 4 -540 8 -540 4 0 174 -29 377 -65 204 -36 541 -95 750 -131 209 -37 381 -68 383 -69 1 -1 14 -62 28 -136 44 -232 100 -439 185 -688 32 -92 37 -117 27 -127 -7 -6 -265 -222 -573 -479 -308 -257 -568 -475 -578 -485 -17 -16 -5 -38 248 -476 230 -396 269 -459 288 -457 12 1 339 117 726 259 l704 257 36 -39 c281 -311 325 -354 614 -615 l40 -36 -262 -717 c-144 -395 -261 -722 -259 -727 2 -5 210 -128 462 -274 438 -253 460 -265 476 -248 10 10 225 268 480 573 255 305 471 563 480 573 17 18 21 17 131 -21 224 -79 458 -142 691 -187 72 -13 132 -26 133 -27 1 -2 32 -174 69 -383 36 -209 95 -546 131 -750 36 -203 65 -373 65 -377 0 -4 242 -8 538 -8 l538 0 52 292 c28 161 88 502 133 758 44 256 82 466 84 468 1 1 69 16 151 32 254 50 420 94 673 181 92 32 117 37 127 27 6 -7 222 -265 479 -573 257 -308 475 -568 485 -578 16 -17 38 -5 476 248 252 146 460 269 462 274 2 7 -163 465 -465 1290 l-57 154 65 56 c217 190 384 356 570 570 l55 64 185 -67 c708 -260 1250 -456 1257 -456 5 0 94 147 198 327 103 181 223 388 266 462 63 108 76 137 66 146 -7 7 -267 225 -578 485 -311 260 -571 478 -578 484 -10 10 -5 35 27 127 84 246 150 491 191 712 12 64 26 117 30 117 4 0 227 38 496 85 269 47 604 106 744 130 140 25 258 45 262 45 5 0 8 243 8 540 0 297 -4 540 -8 540 -4 0 -172 29 -372 64 -201 35 -539 95 -752 132 l-387 68 -21 115 c-41 219 -107 465 -191 710 -32 92 -37 117 -27 127 7 6 267 224 578 484 311 260 571 478 578 485 10 9 -3 38 -66 146 -43 74 -163 281 -266 462 -104 180 -193 327 -198 327 -7 0 -549 -196 -1257 -456 l-185 -67 -55 64 c-186 214 -353 380 -570 570 l-65 56 57 154 c302 825 467 1283 465 1290 -2 5 -210 128 -462 274 -438 253 -460 265 -476 248 -10 -10 -228 -270 -485 -578 -257 -308 -473 -566 -479 -573 -10 -10 -35 -5 -127 27 -253 87 -419 131 -673 181 -82 16 -150 31 -151 32 -2 2 -40 212 -84 468 -45 256 -105 597 -133 758 l-52 292 -538 0 c-296 0 -538 -4 -538 -8z m745 -2616 c678 -24 1405 -277 1985 -690 767 -545 1301 -1351 1505 -2266 64 -289 86 -503 86 -820 0 -317 -22 -531 -86 -820 -301 -1354 -1321 -2437 -2655 -2819 -391 -112 -780 -156 -1211 -139 -1615 64 -3017 1172 -3467 2738 -112 388 -157 780 -140 1211 48 1205 686 2326 1703 2993 494 324 1039 522 1643 596 96 12 405 28 457 23 17 -1 98 -5 180 -7z"/>
 </g>  
 </svg>
 </button>

 <button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionPhase"), { position: 'left', className: 'w2ui-light' })}
 id='Missions-MissionPhase-button' class="el-button" data-toggle="tooltip">
 <svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionPhase"  width="50" height="50"  viewBox="0 0 67.197 42.981">
   <defs id="Patterns_And_Gradients"><radialGradient id="Missions_MissionPhase_LG01" cx="52.318" cy="1.884" r="52.716" fx="52.318" fy="1.884" gradientTransform="scale(1.25572 .79636)" gradientUnits="userSpaceOnUse"><stop id="stop4" offset="0" stop-color="#fff" stop-opacity=".75"/><stop id="stop6" offset="1" stop-color="#c00000" stop-opacity=".75"/></radialGradient></defs>
   <g ><g  transform="translate(1 -1)"><rect  width="65.197" height="40.981" x="0" y="2" fill="url(#Missions_MissionPhase_LG01)" stroke="#404040" stroke-stroke-width="1" rx="14.173" ry="14.173"/></g></g>
   <text  x="23.618" y="32.496" style="font-size:30px" font-family="Calibri" >P</text></svg>
 </button> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionPhaseBehavior"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionPhaseBehavior-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionPhaseBehavior"  width="50" height="50" fill="none"  viewBox="0 0 149.172 111.799">
   <defs id="Patterns_And_Gradients">
     <linearGradient id="Missions_MissionPhaseBehavior_LG01" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#a60000" stop-opacity=".65"/>
        <stop offset="1" stop-color="#c00000" stop-opacity=".65"/>
      </linearGradient>
    </defs>
    <g  transform="translate(-16 -42)   scale(1.4 1.5)">
    <rect x="13" y="40" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Missions_MissionPhaseBehavior_LG01)" stroke="#000000" stroke-width="2"  style="stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none" />
    <rect x="67" y="75" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Missions_MissionPhaseBehavior_LG01)" stroke="#000000" stroke-width="2" style="stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none" />
    <line x1="63" y1="53" x2="90.5" y2="53" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
    <line x1="90" y1="75" x2="90"  y2="53"  stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
    <line x1="35" y1="88.5" x2="35" y2="68" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
    <line x1="35" y1="88" x2="65" y2="88" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
    <path d="m 63,84 1.23,2.25 1.2,2.2 -0.73,1 -0.69,0.96 -1.28,1.8" fill="#000000" stroke="#000000" stroke-width="1" id="path22" />
    <path d="m 62.689517,49.277424 -1.230001,2.249998 -1.2,2.2 0.73,1 0.69,0.96 1.28,1.8" fill="#000000" stroke="#000000" stroke-width="1" id="path22-9" />
    </g>
    </svg>
</button>

 <button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionPlanSignal"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionPlanSignal-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionPlanSignal"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 67.197 57.6">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_MissionPlanSignal_LG01" x1="-.398" x2="-.398" y1="20.241" y2="72.958" gradientTransform="scale(1.25572 .79636)" gradientUnits="userSpaceOnUse"><stop id="stop4" offset="0" stop-color="#fff" stop-opacity=".75"/><stop id="stop6" offset="1" stop-color="red" stop-opacity=".8"/></linearGradient></defs> 
    <g><g transform="translate(1 -9.08)"><g><g><path  fill="url(#Missions_MissionPlanSignal_LG01)" stroke="#404040"  stroke-width="1" d="M0 16.619h65.197V57.6H0z"/></g></g><g transform="translate(0 -13.721)"><path  fill="none" stroke="none"  stroke-width=".25" d="M0 45.6h62.362v12H0z"/><text  x="37.67" y="66" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">S</text></g></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_Capability"), { position: 'left', className: 'w2ui-light' })}
id='Missions-Capability-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_Capability" width="50" height="50" fill="none"  font-size="12" overflow="visible" viewBox="0 0 56.538 49.96">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_Capability_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="gray"/></linearGradient></defs>
  <g  transform="translate(4.078 -4.44)"><g transform="translate(2.211)"><path  fill="gray" fill-opacity=".5" stroke="#3f3f3f"  stroke-opacity=".5" stroke-width="3" d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7 33.53 7.44Z" style="visibility:visible" transform="translate(1.44 1.44)"/><path fill="url(#Missions_Capability_LG01)" stroke="#404040" stroke-width="3" d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7 33.53 7.44Z"/></g><g><text x="13.38" y="39.5" fill="#000" font-family="Calibri" font-size="2.5em" font-weight="700">C</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_CapabilityCategory"), { position: 'left', className: 'w2ui-light' })}
id='Missions-CapabilityCategory-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_CapabilityCategory"  width="50" height="50" fill="none" fill-rule="evenodd" viewBox="0 0 56.538 49.96">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_CapabilityCategory_LG01" x1="0" x2="0" y1="1" y2="0"><stop id="stop937" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop939" offset="1" stop-color="red" stop-opacity=".8"/></linearGradient>
  </defs>
  <g>
    <g style="visibility:visible" transform="translate(7.729 -3)">
      <path d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
    </g>
      <path fill="url(#Missions_CapabilityCategory_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M39.819 3h-24.54L2.999 24.26l12.28 21.26h24.54l12.28-21.26z"/>
      <g transform="translate(27.549 -25.7)"><g  style="visibility:visible" transform="translate(1.44 1.44)">
        <path d="M12.27 28.7 0 49.96h24.55z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
      </g>
      <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M12.27 28.7 0 49.96h24.55z"/>
    </g>
  </g>
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_CapabilityClassification"), { position: 'left', className: 'w2ui-light' })}
id='Missions-CapabilityClassification-button' class="el-button" data-toggle="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" id="Missions_CapabilityClassification" width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 189.969">
    <defs id="Missions_CapabilityClassification_LG">
      <linearGradient id="Missions_CapabilityClassification_LG01" x1="-5.289" x2="-5.289" y1="31.832" y2="222.315" gradientTransform="matrix(1.13443 0 0 .8815 12 -22.063)" gradientUnits="userSpaceOnUse">
        <stop id="stop4" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop6" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
      <linearGradient id="Missions_CapabilityClassification_LG02" x1="-6.337" x2="-6.337" y1="205.164" y2="128.647" gradientTransform="scale(1.07152 .93325)" gradientUnits="userSpaceOnUse">
        <stop id="stop9" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop11" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
    </defs>
      <g style="visibility:visible" transform="translate(13.44 -20.623)">
        <path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06Z"/>
      </g>
      <path fill="url(#Missions_CapabilityClassification_LG01)" stroke="#595959"  stroke-width="12" d="M12 11.997v155.91h204.09V48.847H114.05l-34.02-36.85z"/>
      <g transform="translate(142.394 -114.19)">
        <g>
          <g style="visibility:visible" transform="translate(1.44 1.44)">
            <path d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
          </g>
          <path fill="url(#Missions_CapabilityClassification_LG02)" stroke="#404040"  stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z"/>
        </g>
        <g transform="translate(34.205 -34.205)"><g style="visibility:visible" transform="translate(1.44 1.44)">
          <path  d="M19.75 155.76 0 189.97h39.5z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
        </g>
        <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M19.75 155.76 0 189.97h39.5z"/>
      </g>
    </g>
    <path fill="none" stroke="none" stroke-width="12" d="M20.504 94.205H213.26v59.528H20.504z"/>
    <text  x="22.504" y="156.964" fill="#000" font-family="Calibri" font-size="7em" font-weight="700">CLA</text>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_CapabilityContribution"), { position: 'left', className: 'w2ui-light' })}
id='Missions-CapabilityContribution-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_CapabilityContribution"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="Missions_CapabilityContribution_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="gray" stop-opacity=".75"/></linearGradient></defs><g transform="translate(3 -9.08)"><path fill="url(#Missions_CapabilityContribution_LG01)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(0 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="30" y="66" fill="#000" font-family="Calibri" font-size="2em" font-weight="700">C</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_CapabilityUsage"), { position: 'left', className: 'w2ui-light' })}
id='Missions-CapabilityUsage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_CapabilityUsage"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="Missions_CapabilityUsage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="gray" stop-opacity=".75"/></linearGradient></defs><g transform="translate(3 -9.08)"><path fill="url(#Missions_Capability_LG01)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(0 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="30" y="66" fill="#000" font-family="Calibri" font-size="2em" font-weight="700">C</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_Objective"), { position: 'left', className: 'w2ui-light' })}
  id='Missions-Objective-button' class="el-button" data-toggle="tooltip">
  <svg fill="url(#Missions_Objective_LG01)"  id="Missions_Objective" xmlns="http://www.w3.org/2000/svg" 
    width="50" height="50" viewBox="0 0 415.881 415.881"
    xml:space="preserve">
  <defs id="Missions_Objective_LG"><linearGradient id="Missions_Objective_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="lightgreen" stop-opacity="1"/><stop offset="1" stop-color="lightgreen" stop-opacity=".5"/></linearGradient></defs>
  <g>
    <g>
      <path d="M179.641,189.565c2.455,0,4.869,0.193,7.223,0.561l36.999-36.998c-13.193-7.048-28.249-11.051-44.221-11.051
        c-51.92,0-94.162,42.241-94.162,94.162c0,51.921,42.242,94.162,94.162,94.162s94.161-42.241,94.161-94.162
        c0-15.973-4.002-31.027-11.051-44.22l-36.997,36.999c0.367,2.354,0.56,4.766,0.56,7.222c0,25.736-20.937,46.674-46.672,46.674
        c-25.736,0-46.674-20.938-46.674-46.674S153.905,189.565,179.641,189.565z"/>
      <path d="M290.454,164.316c13.488,20.712,21.338,45.417,21.338,71.922c0,72.87-59.281,132.153-132.15,132.153
        c-72.869,0-132.153-59.283-132.153-132.152s59.283-132.153,132.152-132.153c26.508,0,51.211,7.851,71.924,21.34l34.104-34.104
        c-29.738-21.817-66.402-34.724-106.027-34.724c-99.055,0-179.641,80.587-179.641,179.641c0,99.054,80.586,179.642,179.641,179.642
        c99.054,0,179.638-80.588,179.638-179.642c0-39.626-12.904-76.29-34.721-106.026L290.454,164.316z"/>
      <path d="M415.415,56.64c-1.119-3.539-4.119-6.157-7.775-6.793l-35.449-6.157l-6.156-35.45c-0.637-3.656-3.256-6.655-6.793-7.774
        c-3.537-1.122-7.402-0.178-10.027,2.447l-27.412,27.411c-1.863,1.864-2.91,4.393-2.912,7.029l0.002,40.896l-148.1,148.096
        c-5.176,5.177-5.176,13.566,0,18.743c5.178,5.175,13.568,5.177,18.744,0L337.632,96.991h40.896c2.635,0,5.164-1.047,7.027-2.911
        l27.412-27.413C415.593,64.044,416.536,60.177,415.415,56.64z"/>
    </g>
  </g>
  </svg></button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_Stakeholder"), { position: 'left', className: 'w2ui-light' })}
  id='Missions-Stakeholder-button' class="el-button" data-toggle="tooltip">
  <svg id="Missions_Stakeholder" fill="url(#Missions_Stakeholder_LG01)" width="50" height="50" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" >
     <defs id="Missions_Stakeholder_LG"><linearGradient id="Missions_Stakeholder_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="orange" stop-opacity="1"/><stop offset="1" stop-color="orange" stop-opacity=".5"/></linearGradient></defs>
      <path d="M 28.0000 27.1257 C 31.1936 27.1257 33.9415 24.2737 33.9415 20.5602 C 33.9415 16.8912 31.1787 14.1729 28.0000 14.1729 C 24.8213 14.1729 22.0584 16.9506 22.0584 20.5898 C 22.0584 24.2737 24.8064 27.1257 28.0000 27.1257 Z M 10.9029 27.4673 C 13.6658 27.4673 16.0722 24.9718 16.0722 21.7485 C 16.0722 18.5548 13.6509 16.1930 10.9029 16.1930 C 8.1401 16.1930 5.7040 18.6143 5.7188 21.7782 C 5.7188 24.9718 8.1252 27.4673 10.9029 27.4673 Z M 45.0970 27.4673 C 47.8748 27.4673 50.2811 24.9718 50.2811 21.7782 C 50.2811 18.6143 47.8599 16.1930 45.0970 16.1930 C 42.3491 16.1930 39.9278 18.5548 39.9278 21.7485 C 39.9278 24.9718 42.3342 27.4673 45.0970 27.4673 Z M 2.6143 40.8806 L 13.9035 40.8806 C 12.3586 38.6376 14.2451 34.1220 17.4387 31.6562 C 15.7899 30.5570 13.6658 29.7400 10.8881 29.7400 C 4.1889 29.7400 0 34.6864 0 38.8010 C 0 40.1379 .7427 40.8806 2.6143 40.8806 Z M 53.3856 40.8806 C 55.2723 40.8806 56 40.1379 56 38.8010 C 56 34.6864 51.8113 29.7400 45.1119 29.7400 C 42.3342 29.7400 40.2102 30.5570 38.5613 31.6562 C 41.7549 34.1220 43.6414 38.6376 42.0966 40.8806 Z M 18.6568 40.8806 L 37.3283 40.8806 C 39.6604 40.8806 40.4925 40.2122 40.4925 38.9050 C 40.4925 35.0726 35.6944 29.7845 27.9851 29.7845 C 20.2907 29.7845 15.4928 35.0726 15.4928 38.9050 C 15.4928 40.2122 16.3247 40.8806 18.6568 40.8806 Z"/>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_LifeCycle"), { position: 'left', className: 'w2ui-light' })}
id='Missions-LifeCycle-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_LifeCycle" 
  width="50" height="50" fill="none"  viewBox="0 0 131.065 115.965">
<defs id="Missions_LifeCycle_LG"><radialGradient id="Missions_LifeCycle_LG01" cx="1" cy="0" r="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="red"/></radialGradient></defs> 
<g id="group542-1" transform="translate(27.352 -26.425)"><g id="shape543-2" transform="translate(0 -22.677)"><rect width="99.213" height="62.362" y="53.602" fill="url(#Missions_LifeCycle_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" rx="28.346" ry="28.346"/></g><g id="shape544-6" transform="translate(46.417 -37.255)"><ellipse cx="21.614" cy="101.791" style="fill:#fff;stroke:#404040;stroke-width:8" rx="21.614" ry="14.173"/></g>

  <g  transform="translate(2.835 -51.598)"><path stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" fill="#404040" fill-opacity="1" stroke="#404040" stroke-opacity="1" stroke-width=".333" orient="auto" overflow="visible" refX="5.92" d="M26.64 115.96h16.02"/></g>
  <g  transform="translate(17.008 18.425)"><circle cx="9.213" cy="106.752" r="9.213" style="fill:#fff;stroke:#404040;stroke-width:8"/></g>
  <g  transform="translate(35.433 8.504)"><path stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5"  d="M0 115.96h32.6V98.82"/></g></g>
  <path
   style="fill:black;stroke:#000000;stroke-width:0.750002px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
   d="M 30.390525,37.788595 56.782559,24.592578 v 26.791913 z"/>
   <path
   style="fill:black;stroke:#000000;stroke-width:0.750002px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
   d="m 102.56874,81.175504 -7.397769,-14.19572 v 0 l -6.797946,13.795833 z" /> 

</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_LifeCycleSignal"), { position: 'left', className: 'w2ui-light' })}
id='Missions-LifeCycleSignal-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_LifeCycleSignal"  width="50" height="50" fill="none" font-size="12" viewBox="0 0 67.197 57.6">
  <defs id="Patterns_And_Gradients"><linearGradient id="Missions_LifeCycleSignal_LG01" x1="-.398" x2="-.398" y1="20.241" y2="72.958" gradientTransform="scale(1.25572 .79636)" gradientUnits="userSpaceOnUse"><stop id="stop4" offset="0" stop-color="#fff" stop-opacity=".75"/><stop  offset="1" stop-color="red" stop-opacity=".749"/></linearGradient></defs> 
    <g ><g transform="translate(1 -9.08)"><g ><g ><path fill="url(#Missions_LifeCycleSignal_LG01)" stroke="#404040"  stroke-width="1" d="M0 16.619h65.197V57.6H0z"/></g></g><g  transform="translate(0 -13.721)"><path  fill="none"  stroke-width=".25" d="M0 45.6h62.362v12H0z"/><text  x="37.67" y="66" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">S</text></g></g></g>
    </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_LifeCycleStage"), { position: 'left', className: 'w2ui-light' })}
id='Missions-LifeCycleStage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"id="Missions_LifeCycleStage"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 67.197 57.6"><defs><radialGradient id="a" cx="1" cy="0" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="red" stop-opacity=".75"/></radialGradient></defs>
  <g transform="translate(1 -8.31)"><rect width="65.197" height="40.981" y="16.619" fill="url(#a)" stroke="#404040"  rx="14.173" ry="14.173"/><text x="11.11" y="51.51" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">LS</text></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Missions_MissionRestrictedPackage"), { position: 'left', className: 'w2ui-light' })}
id='Missions-MissionRestrictedPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Missions_MissionRestrictedPackage"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 181.346">
  <defs><linearGradient id="Missions_MissionRestrictedPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".8"/><stop offset="1" stop-color="red" stop-opacity=".8"/></linearGradient></defs>
  
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#Missions_MissionRestrictedPackage_LG01)" stroke="#595959"  stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(4.96 -5.734)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#595959" font-family="Calibri" font-size="7.5em" font-weight="700">R</text></g></g></svg>
</button>

</fieldset>

<fieldset id="moflt_operations_fieldset">
<legend>R-MOFLT Operations</legend> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalViewpointPackage"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalViewpointPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalViewpointPackage" width="50" height="50" fill="none" viewBox="0 0 229.534 181.346" >
  <defs><linearGradient id="Operations_OperationalViewpointPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".8"/><stop offset="1" stop-color="#f97406" stop-opacity="1"/></linearGradient></defs>
  <g fill="url(#Operations_OperationalViewpointPackage_LG01)" transform="translate(12 -13.44)"><path  stroke="#595959"  stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalContext"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalContext-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalContext" width="50" height="50" fill="none"  viewBox="0 0 135.496 121.382">
  <defs id="Patterns_And_Gradients"><linearGradient id="Operations_OperationalContext_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#f97406" stop-opacity=".6"/></linearGradient></defs>
  <g transform="translate(0 -4.5)"><g transform="translate(11.339 -5.167)">
    </g><g><g ><g><g ><g ><g  transform="translate(7.524)"><g><path fill="url(#Operations_OperationalContext_LG01)" stroke="#000"  stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52" style="stroke:#000;stroke-width:6"/></g><g transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" style="stroke:#000;stroke-width:6"/></g></g></g></g></g></g></g></g>
  <g stroke="#404040"  stroke-width="4.25" transform="translate(30 10)scale(0.1 0.1)">
      <path id="phi" fill="grey" d="M318 566.734V493.89c0-101.719 2-173.797 6.031-216.234 4.016-42.422 10.672-79.25 19.984-110.5 16.891-54.438 40.75-95.906 71.594-124.406S483.203 0 525.875 0c51.953 0 95.469 23.641 130.531 70.891C691.469 118.156 709 179.125 709 253.812c0 102.969-26.828 186.719-80.453 251.281S504.406 603.625 417 607v260h-99V607c-100.938-7.188-179.171-38.922-234.703-95.266C27.766 455.406 0 379.562 0 284.188c0-88.594 18.047-158.109 54.172-208.547C90.281 25.219 139.375 0 201.468 0c29.984 0 56.797 7.703 80.453 23.094s44.344 38.891 62.094 70.516l-31.094 19c-12.266-21.953-26.328-38.203-42.172-48.766S236.828 48 216.546 48c-35.938 0-61.5 17.422-76.718 52.25C124.609 135.094 117 194.938 117 279.812c0 83.609 17.109 149.906 51.359 198.891 34.234 48.985 84.109 78.328 149.641 88.031zM417 568c72.094 0 131.109-29.016 177.062-87.078S663 347.812 663 255.75c0-63.75-12.125-114.734-36.359-152.953-24.25-38.219-55.766-57.328-94.547-57.328-42.594 0-72.422 19.219-89.484 57.641C425.531 141.531 417 211.406 417 312.75V568z"/>
    </g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalSystem"), { position: 'left', className: 'w2ui-light' })}
id='Missions-OperationalSystem-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalSystem"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 144.496 126.749">
  <<defs id="Patterns_And_Gradients"><linearGradient id="Operations_OperationalSystem_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#f97406"/></linearGradient></defs>
    <g transform="translate(4.5 -4.5)">
      <g transform="translate(7.524)">
        <g>
          <path fill="url(#Operations_OperationalSystem_LG01)" stroke="#000" stroke-width="4.5" d="M0 14.367h118.836v112.382H0z"/>
        </g>
        <g transform="translate(2.114 -16.948)">
          <path d="M0 126.75h114.52" style="stroke:#000;stroke-width:6"/>
        </g>
        <g transform="translate(1.547 -34.016)">
          <path d="M0 126.75h115.09" style="stroke:#000;stroke-width:6"/>
        </g>
      </g>
      <g transform="translate(0 -44.634)">
        <path stroke-width="4.5" d="M0 73.518h135.496v53.231H0z"/>
        <text x="39.01" y="125.63" fill="#000" font-family="Calibri" font-size="7.083em" font-weight="700">O</text>
      </g>
    </g>
  </svg>
</button>
<button class="white-box"></button>
<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalConcept"), { position: 'left', className: 'w2ui-light' })}
id='Missions-OperationalConcept-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalConcept"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 144.496 126.749">
  <<defs id="Patterns_And_Gradients"><linearGradient id="Operations_OperationalConcept_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#f97406"/></linearGradient></defs>
    <g >
   <circle cx="73" cy="68" r="50" stroke="black" stroke-width="8" fill="url(#Operations_OperationalConcept_LG01)"
    </g>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalSystemUsage"), { position: 'left', className: 'w2ui-light' })}
id='Missions-OperationalSystemUsage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalSystemUsage"  width="50" height="50" fill="none"  font-size="12" viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="Operations_OperationalSystemUsage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f97406" stop-opacity=".5"/><stop offset="1" stop-color="#f97406" stop-opacity="0.8"/></linearGradient></defs>
  <g transform="translate(3 -9.08)"><path fill="url(#Operations_OperationalSystemUsage_LG01)" stroke="#000"  stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(0 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="29.03" y="66" fill="#000" font-family="Calibri" font-size="4em" font-weight="700">U</text></g></g></svg>
</button>

<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlow"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlow-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlow" width="50" height="50" fill="none" viewBox="0 0 91.825 98.65"><defs><linearGradient id="Operations_OperationalFlow_LG01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(270 .5 .5)"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#f97406"/></linearGradient></defs>
  <g transform="translate(.125 -.125)"><path d="M1.44 1.69h90.709v98.4H1.44z"/><path d="M0 .25h90.709v98.4H0z"/><g transform="translate(24.378 -21.089)"><path fill="url(#Operations_OperationalFlow_LG01)" stroke="#404040"  stroke-width="4.25" d="M0 42.946h65.197V98.65H0z"/></g><g transform="translate(5.52 -8.056)"><path stroke="#3f3f3f" stroke-width="4.5" d="M0 16.88h18.24l.2 81.77H0"/></g><g transform="translate(39.685 -25.833)"><path fill="#fff" stroke="#3f3f3f"  stroke-width="5.25" d="M0 52.16v46.49l41.1-23.24L0 52.16Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlowType"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlowType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlowType"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 67.197 57.6">
  <defs><linearGradient id="Operations_OperationalFlowType_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fb6a0b" stop-opacity=".75"/></linearGradient></defs><g transform="translate(1 -9.08)"><path fill="url(#Operations_OperationalFlowType_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(0 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="36.6" y="66" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">T</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlowInterfaceType"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlowInterfacetype-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlowInterfaceType" width="50" height="50" fill="none" viewBox="0 0 113.386 88.535"><defs><linearGradient id="Operations_OperationalFlowInterfaceType_LG01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(180 .5 .5)"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#f97406"/></linearGradient></defs>
  <g><g transform="translate(6.296)"><path fill="url(#Operations_OperationalFlowInterfaceType_LG01)" stroke="#000" stroke-width="4.5" d="M0 4.5h99.444v84.035H0z"/><g transform="translate(1.77 -23.316)"><path stroke="#000"  stroke-width="6" d="M0 88.54h95.83"/></g></g><g transform="translate(58.11 -30.46)"><path fill="#fff" stroke="#3f3f3f"  stroke-width="5.25" d="M0 42.05v46.49l41.1-23.25L0 42.05Z"/></g></g></svg>
</button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlowConnection"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlowConnection-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlowConnection"  width="50" height="50" fill="none"  overflow="visible" viewBox="0 0 77.575 69.496">
  <defs id="Patterns_And_Gradients"><linearGradient id="Operations_OperationalFlowConnection_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fea207"/></linearGradient></defs>
  <g transform="translate(3 -3)"><g ><g ><g ><g  transform="rotate(90 17.008 52.488)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g><g id="Operations_OperationalFlowConnection_LG01" transform="matrix(0 1 1 0 2.079 6)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g></g></g><g  transform="translate(48.33 -35.433)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#Operations_OperationalFlowConnection_LG01);stroke:#fb6a0b;stroke-width:4.5"/></g><g  transform="translate(4.075 -4.252)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#Operations_OperationalFlowConnection_LG01);stroke:#fb6a0b;stroke-width:4.5"/></g></g><g transform="translate(24.98 -16.3)"><path stroke="#fb6a0b"  stroke-width="3" d="M0 69.5h10.24V38.31h13.11"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlowDelegation"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlowDelegation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlowDelegation" width="50" height="50" fill="none"  overflow="visible" viewBox="0 0 77.575 80.538">
  <defs id="Operations_OperationalFlowDelegation_LG"><linearGradient id="Operations_OperationalFlowDelegation_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fea207"/></linearGradient></defs>
  <g  transform="translate(3 -3)"><g ><g ><g ><g transform="rotate(90 17.008 63.53)"><path d="M0 80.54h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g><g  transform="matrix(0 1 1 0 -8.964 17.042)"><path d="M0 80.54h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g></g><g transform="translate(.354 -34.016)"><path  stroke-width=".75" d="M0 51.093h31.181v29.445H0z"/><text x="4" y="80.22" fill="#fb6a0b" font-family="Calibri" font-size="2em" font-weight="700">=</text></g></g><g  transform="translate(48.33 -35.433)"><path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="fill:url(#Operations_OperationalFlowDelegation_LG01);stroke:#fb6a0b;stroke-width:4.5"/></g><g id="shape2230-21" transform="translate(4.075 -4.252)"><path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="fill:url(#Operations_OperationalFlowDelegation_LG01);stroke:#fb6a0b;stroke-width:4.5"/></g></g><g  transform="translate(24.98 -16.3)"><path stroke="#fb6a0b"  stroke-width="3" d="M0 80.54h10.24V49.36h13.11"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlowProperty"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlowProperty-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlowProperty" width="50" height="50" fill="none"  viewBox="0 0 59.528 43.016">
<defs><linearGradient id="Operations_OperationalFlowProperty_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fea207"/></linearGradient></defs>
<g transform="translate(0 -4.5)"><g transform="translate(17.008)"><path fill="url(#Operations_OperationalFlowProperty_LG01)" stroke="#fb6a0b"  stroke-width="4.5" d="M0 9v34.02l25.51-17.01L0 9Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlowTypeCategory"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlowTypeCategory-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlowTypeCategory"  width="50" height="50" fill="none" fill-rule="evenodd" viewBox="0 0 56.538 49.96">
  <defs id="Patterns_And_Gradients"><linearGradient id="Operations_OperationalFlowTypeCategory_LG01" x1="0" x2="0" y1="1" y2="0"><stop id="stop937" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop939" offset="1" stop-color="red" stop-opacity=".8"/></linearGradient>
  </defs>
  <g>
    <g style="visibility:visible" transform="translate(7.729 -3)">
      <path d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
    </g>
      <path fill="url(#Operations_OperationalFlowTypeCategory_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M39.819 3h-24.54L2.999 24.26l12.28 21.26h24.54l12.28-21.26z"/>
      <g transform="translate(27.549 -25.7)"><g  style="visibility:visible" transform="translate(1.44 1.44)">
        <path d="M12.27 28.7 0 49.96h24.55z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
      </g>
      <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M12.27 28.7 0 49.96h24.55z"/>
    </g>
  </g>
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalFlowTypeClassification"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalFlowTypeClassification-button' class="el-button" data-toggle="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalFlowTypeClassification" width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 189.969">
    <defs id="Operations_OperationalFlowTypeClassification_LG">
      <linearGradient id="Operations_OperationalFlowTypeClassification_LG01" x1="-5.289" x2="-5.289" y1="31.832" y2="222.315" gradientTransform="matrix(1.13443 0 0 .8815 12 -22.063)" gradientUnits="userSpaceOnUse">
        <stop id="stop4" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop6" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
      <linearGradient id="Operations_OperationalFlowTypeClassification_LG02" x1="-6.337" x2="-6.337" y1="205.164" y2="128.647" gradientTransform="scale(1.07152 .93325)" gradientUnits="userSpaceOnUse">
        <stop id="stop9" offset="0" stop-color="#f0f0f0" stop-opacity="1"/>
        <stop id="stop11" offset="1" stop-color="red" stop-opacity=".8"/>
      </linearGradient>
    </defs>
      <g style="visibility:visible" transform="translate(13.44 -20.623)">
        <path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06Z"/>
      </g>
      <path fill="url(#Operations_OperationalFlowTypeClassification_LG01)" stroke="#595959"  stroke-width="12" d="M12 11.997v155.91h204.09V48.847H114.05l-34.02-36.85z"/>
      <g transform="translate(142.394 -114.19)">
        <g>
          <g style="visibility:visible" transform="translate(1.44 1.44)">
            <path d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
          </g>
          <path fill="url(#Operations_OperationalFlowTypeClassification_LG02)" stroke="#404040"  stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z"/>
        </g>
        <g transform="translate(34.205 -34.205)"><g style="visibility:visible" transform="translate(1.44 1.44)">
          <path  d="M19.75 155.76 0 189.97h39.5z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
        </g>
        <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M19.75 155.76 0 189.97h39.5z"/>
      </g>
    </g>
    <path fill="none" stroke="none" stroke-width="12" d="M20.504 94.205H213.26v59.528H20.504z"/>
    <text  x="22.504" y="156.964" fill="#000" font-family="Calibri" font-size="7em" font-weight="700">CLA</text>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalTask"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalTask-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalTask"  width="50" height="50" fill="none"  font-size="12" viewBox="0 0 90.979 85.44"><g  transform="translate(2.25 -4.322)"><g ><ellipse  cx="42.52" cy="46.322" fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-opacity=".5" stroke-width="2.25" style="visibility:visible" rx="42.52" ry="39.118" transform="translate(1.44 1.44)"/><ellipse cx="42.52" cy="46.322" fill="#fb6a0b" fill-opacity=".8" stroke="#404040"  stroke-width="2.25" rx="42.52" ry="39.118"/></g><g><text x="25.19" y="67.32" fill="#fff" font-family="Calibri" font-size="5em" font-weight="700">T</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalTaskInvocation"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalTaskInvocation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalTaskInvocation" width="50" height="50" fill="none" viewBox="0 0 72.637 48.421">
 <defs id="Patterns_And_Gradients"><linearGradient id="Operations_OperationalTaskInvocation_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fb6a0b"/></linearGradient></defs>
 <g transform="translate(3 -4.44)"><path fill="url(#Operations_OperationalTaskInvocation_LG01)" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0 34.25a14.174 14.174-180 0 0 14.17 14.17h36.85A14.174 14.174-180 0 0 65.2 34.25V21.61A14.174 14.174-180 0 0 51.02 7.44H14.17A14.174 14.174-180 0 0 0 21.61v12.64Z"/></g>
 <g transform="translate(33,40)scale(0.0025,-0.0025) " 
 fill="gray" >
 <path  d="M5860 12792 c0 -4 -29 -174 -65 -377 -36 -204 -95 -541 -131 -750 -37 -209 -68 -381 -69 -383 -1 -1 -61 -14 -133 -27 -233 -45 -467 -108 -691 -187 -110 -38 -114 -39 -131 -21 -9 10 -225 268 -480 573 -255 305 -470 563 -480 573 -16 17 -38 5 -476 -248 -252 -146 -460 -269 -462 -274 -2 -5 115 -332 259 -727 l262 -717 -40 -36 c-289 -261 -333 -304 -614 -615 l-36 -39 -704 257 c-387 142 -714 258 -726 259 -19 2 -58 -61 -288 -457 -253 -438 -265 -460 -248 -476 10 -10 270 -228 578 -485 308 -257 566 -473 573 -479 10 -10 5 -35 -27 -127 -85 -249 -141 -456 -185 -688 -14 -74 -27 -135 -28 -136 -2 -1 -174 -32 -383 -69 -209 -36 -546 -95 -750 -131 -203 -36 -373 -65 -377 -65 -4 0 -8 -243 -8 -540 0 -297 4 -540 8 -540 4 0 174 -29 377 -65 204 -36 541 -95 750 -131 209 -37 381 -68 383 -69 1 -1 14 -62 28 -136 44 -232 100 -439 185 -688 32 -92 37 -117 27 -127 -7 -6 -265 -222 -573 -479 -308 -257 -568 -475 -578 -485 -17 -16 -5 -38 248 -476 230 -396 269 -459 288 -457 12 1 339 117 726 259 l704 257 36 -39 c281 -311 325 -354 614 -615 l40 -36 -262 -717 c-144 -395 -261 -722 -259 -727 2 -5 210 -128 462 -274 438 -253 460 -265 476 -248 10 10 225 268 480 573 255 305 471 563 480 573 17 18 21 17 131 -21 224 -79 458 -142 691 -187 72 -13 132 -26 133 -27 1 -2 32 -174 69 -383 36 -209 95 -546 131 -750 36 -203 65 -373 65 -377 0 -4 242 -8 538 -8 l538 0 52 292 c28 161 88 502 133 758 44 256 82 466 84 468 1 1 69 16 151 32 254 50 420 94 673 181 92 32 117 37 127 27 6 -7 222 -265 479 -573 257 -308 475 -568 485 -578 16 -17 38 -5 476 248 252 146 460 269 462 274 2 7 -163 465 -465 1290 l-57 154 65 56 c217 190 384 356 570 570 l55 64 185 -67 c708 -260 1250 -456 1257 -456 5 0 94 147 198 327 103 181 223 388 266 462 63 108 76 137 66 146 -7 7 -267 225 -578 485 -311 260 -571 478 -578 484 -10 10 -5 35 27 127 84 246 150 491 191 712 12 64 26 117 30 117 4 0 227 38 496 85 269 47 604 106 744 130 140 25 258 45 262 45 5 0 8 243 8 540 0 297 -4 540 -8 540 -4 0 -172 29 -372 64 -201 35 -539 95 -752 132 l-387 68 -21 115 c-41 219 -107 465 -191 710 -32 92 -37 117 -27 127 7 6 267 224 578 484 311 260 571 478 578 485 10 9 -3 38 -66 146 -43 74 -163 281 -266 462 -104 180 -193 327 -198 327 -7 0 -549 -196 -1257 -456 l-185 -67 -55 64 c-186 214 -353 380 -570 570 l-65 56 57 154 c302 825 467 1283 465 1290 -2 5 -210 128 -462 274 -438 253 -460 265 -476 248 -10 -10 -228 -270 -485 -578 -257 -308 -473 -566 -479 -573 -10 -10 -35 -5 -127 27 -253 87 -419 131 -673 181 -82 16 -150 31 -151 32 -2 2 -40 212 -84 468 -45 256 -105 597 -133 758 l-52 292 -538 0 c-296 0 -538 -4 -538 -8z m745 -2616 c678 -24 1405 -277 1985 -690 767 -545 1301 -1351 1505 -2266 64 -289 86 -503 86 -820 0 -317 -22 -531 -86 -820 -301 -1354 -1321 -2437 -2655 -2819 -391 -112 -780 -156 -1211 -139 -1615 64 -3017 1172 -3467 2738 -112 388 -157 780 -140 1211 48 1205 686 2326 1703 2993 494 324 1039 522 1643 596 96 12 405 28 457 23 17 -1 98 -5 180 -7z"/>
 </g>
 </svg>
 </button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalPhase"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalPhase-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalPhase"  width="50" height="50" fill="none" font-size="12" viewBox="0 0 67.197 42.981"><defs><radialGradient id="Operations_OperationalPhase_LG01" cx="1" cy="0" r="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f46f0b"/></radialGradient></defs><g transform="translate(1 -1)"><rect width="65.197" height="40.981" y="2" fill="url(#Operations_OperationalPhase_LG01)" stroke="#404040"  rx="14.173" ry="14.173"/><text x="23.28" y="32.99" fill="#000" font-family="Calibri" font-size="2.917em" font-weight="700">P</text></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalPhaseBehavior"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalPhaseBehavior-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalPhaseBehavior"  width="50" height="50" fill="none"  viewBox="0 0 149.172 111.799">
  <defs id="Patterns_And_Gradients">
     <linearGradient id="Operations_OperationalPhaseBehavior_LG01" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fb6a0b"/>
      </linearGradient></defs>
      <g  transform="translate(-16 -42)   scale(1.4 1.5)">
      <rect x="13" y="40" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Operations_OperationalPhaseBehavior_LG01)" stroke="#000000" stroke-width="2"  style="stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none" />
      <rect x="67" y="75" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Operations_OperationalPhaseBehavior_LG01)" stroke="#000000" stroke-width="2" style="stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none" />
      <line x1="63" y1="53" x2="90.5" y2="53" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
      <line x1="90" y1="75" x2="90"  y2="53"  stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
      <line x1="35" y1="88.5" x2="35" y2="68" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
      <line x1="35" y1="88" x2="65" y2="88" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
      <path d="m 63,84 1.23,2.25 1.2,2.2 -0.73,1 -0.69,0.96 -1.28,1.8" fill="#000000" stroke="#000000" stroke-width="1" id="path22" />
      <path d="m 62.689517,49.277424 -1.230001,2.249998 -1.2,2.2 0.73,1 0.69,0.96 1.28,1.8" fill="#000000" stroke="#000000" stroke-width="1" id="path22-9" />
      </g>
      </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalPlanSignal"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalPlanSignal-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalPlanSignal"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 67.197 57.6"><defs id="Patterns_And_Gradients"><linearGradient id="Operations_OperationalPlanSignal_LG01" x1="-.398" x2="-.398" y1="20.241" y2="72.958" gradientTransform="scale(1.25572 .79636)" gradientUnits="userSpaceOnUse"><stop id="stop4" offset="0" stop-color="#fff" stop-opacity=".75"/><stop id="stop6" offset="1" stop-color="#fb6a0b" stop-opacity=".749"/></linearGradient></defs>
  <g ><g  transform="translate(1 -9.08)"><g ><g ><path  fill="url(#Operations_OperationalPlanSignal_LG01)" stroke="#404040"  stroke-width="1" d="M0 16.619h65.197V57.6H0z"/></g></g><g  transform="translate(0 -13.721)"><path  fill="none" stroke="none" stroke-width=".25" d="M0 45.6h62.362v12H0z"/><text  x="37.67" y="66" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">S</text></g></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Operations_OperationalRestrictedPackage"), { position: 'left', className: 'w2ui-light' })}
id='Operations-OperationalRestrictedPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Operations_OperationalRestrictedPackage"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 181.346"><defs><linearGradient id="Operations_OperationalRestrictedPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#fb6a0b"/></linearGradient></defs><g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#Operations_OperationalRestrictedPackage_LG01)" stroke="#595959"  stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(5.087 -6.065)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#7f7f7f" font-family="Calibri" font-size="7.5em" font-weight="700">R</text></g></g></svg>
</button>

</fieldset>

<fieldset id="moflt_function_fieldset">
<legend>R-MOFLT Functions</legend> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalViewpointPackage"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalViewpointPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalViewpointPackage" xml:space="preserve" width="50" height="50" fill="none"  viewBox="0 0 229.534 181.346">
<defs><linearGradient id="Functions_FunctionalViewpointPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".8"/><stop offset="1" stop-color="#92d050" stop-opacity=".8"/></linearGradient></defs>
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/>
    <path fill="url(#Functions_FunctionalViewpointPackage_LG01)" stroke="#595959"  stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalContext"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalContext-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalContext"  width="50" height="50"  viewBox="0 0 135.496 121.382">
  <defs id="Functions_FunctionalContext_LG"><linearGradient id="Functions_FunctionalContext_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#92d050" stop-opacity=".6"/></linearGradient></defs>
  <g transform="translate(0 -4.5)">
  <g transform="translate(11.339 -5.167)">
</g><g><g ><g><g ><g ><g  transform="translate(7.524)"><g><path fill="url(#Functions_FunctionalContext_LG01)" stroke="#000"  stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52" style="stroke:#000;stroke-width:6"/></g><g transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" style="stroke:#000;stroke-width:6"/></g></g></g></g></g></g></g></g>
<g stroke="#404040"  stroke-width="4.25" transform="translate(30 10)scale(0.1 0.1)">
  <path id="phi" fill="grey" d="M318 566.734V493.89c0-101.719 2-173.797 6.031-216.234 4.016-42.422 10.672-79.25 19.984-110.5 16.891-54.438 40.75-95.906 71.594-124.406S483.203 0 525.875 0c51.953 0 95.469 23.641 130.531 70.891C691.469 118.156 709 179.125 709 253.812c0 102.969-26.828 186.719-80.453 251.281S504.406 603.625 417 607v260h-99V607c-100.938-7.188-179.171-38.922-234.703-95.266C27.766 455.406 0 379.562 0 284.188c0-88.594 18.047-158.109 54.172-208.547C90.281 25.219 139.375 0 201.468 0c29.984 0 56.797 7.703 80.453 23.094s44.344 38.891 62.094 70.516l-31.094 19c-12.266-21.953-26.328-38.203-42.172-48.766S236.828 48 216.546 48c-35.938 0-61.5 17.422-76.718 52.25C124.609 135.094 117 194.938 117 279.812c0 83.609 17.109 149.906 51.359 198.891 34.234 48.985 84.109 78.328 149.641 88.031zM417 568c72.094 0 131.109-29.016 177.062-87.078S663 347.812 663 255.75c0-63.75-12.125-114.734-36.359-152.953-24.25-38.219-55.766-57.328-94.547-57.328-42.594 0-72.422 19.219-89.484 57.641C425.531 141.531 417 211.406 417 312.75V568z"/>
</g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_Function"), { position: 'left', className: 'w2ui-light' })}
id='Functions-Function-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_Function"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 144.496 126.749"><defs id="Patterns_And_Gradients"><linearGradient id="Functions_Function_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs><g transform="translate(4.5 -4.5)"><g  transform="translate(7.524)"><g ><path fill="url(#Functions_Function_LG01)" stroke="#000"  stroke-width="4.5" d="M0 14.367h118.836v112.382H0z"/></g><g  transform="translate(2.114 -16.948)"><path d="M0 126.75h114.52" style="stroke:#000;stroke-width:6"/></g><g transform="translate(1.547 -34.016)"><path d="M0 126.75h115.09" style="stroke:#000;stroke-width:6"/></g></g><g transform="translate(0 -44.634)"><path  stroke-width="4.5" d="M0 73.518h135.496v53.231H0z"/><text x="48.24" y="125.63" fill="#000" font-family="Calibri" font-size="7.083em" font-weight="700">F</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalPart"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalPart-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalPart"  width="50" height="59" fill="none" font-size="12"  viewBox="0 0 71.197 57.6"><defs><linearGradient id="Functions_FunctionalPart_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#7dc034"/></linearGradient></defs>
  <g transform="translate(3 -9.08)"><path fill="url(#Functions_FunctionalPart_LG01)" stroke="#000" stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(1.417 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="34.82" y="66" fill="#000" font-family="Calibri" font-size="3em" font-weight="700">P</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionCategory"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionCategory-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"  id="Functions_FunctionCategory" width="50" height="50" viewBox="0 0 56.538 49.96">  
 <defs id="Patterns_And_Gradients"><linearGradient id="Functions_FunctionCategory_LG01" x1="0" x2="0" y1="1" y2="0"><stop id="stop937" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop939" offset="1" stop-color="#92d050" stop-opacity=".8"/></linearGradient>
  </defs>
  <g>
    <g style="visibility:visible" transform="translate(7.729 -3)">
      <path d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
    </g>
      <path fill="url(#Functions_FunctionCategory_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M39.819 3h-24.54L2.999 24.26l12.28 21.26h24.54l12.28-21.26z"/>
      <g transform="translate(27.549 -25.7)"><g  style="visibility:visible" transform="translate(1.44 1.44)">
        <path d="M12.27 28.7 0 49.96h24.55z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
  </g>
      <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M12.27 28.7 0 49.96h24.55z"/>
    </g>
  </g>
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionClassification"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionClassification-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionClassification" id="svg61" width="50" height="50" font-size="12"  viewBox="0 0 229.534 189.969">
<defs id="Patterns_And_Gradients"><linearGradient id="Functions_FunctionClassification_LG01" x1="-5.289" x2="-5.289" y1="31.832" y2="222.315" gradientTransform="matrix(1.13443 0 0 .8815 12 -22.063)" gradientUnits="userSpaceOnUse"><stop id="stop4" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop6" offset="1" stop-color="#92d050" stop-opacity="1"/></linearGradient>
  <linearGradient id="Functions_FunctionClassification_LG02" x1="-6.337" x2="-6.337" y1="205.164" y2="128.647" gradientTransform="scale(1.07152 .93325)" gradientUnits="userSpaceOnUse"><stop id="stop9" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop11" offset="1" stop-color="#92d050" stop-opacity="1"/></linearGradient></defs>
    <g  style="visibility:visible" transform="translate(13.44 -20.623)"><path  fill="#cdcdcd" fill-opacity=".5" stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06Z"/></g><path fill="url(#Functions_FunctionClassification_LG01)" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M12 11.997v155.91h204.09V48.847H114.05l-34.02-36.85z"/><g transform="translate(142.394 -114.19)"><g><g style="visibility:visible" transform="translate(1.44 1.44)"><path  d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/></g><path fill="url(#Functions_FunctionClassification_LG02)" stroke="#404040" stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z"/></g><g transform="translate(34.205 -34.205)"><g  style="visibility:visible" transform="translate(1.44 1.44)"><path  d="M19.75 155.76 0 189.97h39.5z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/></g><path fill="#fff" stroke="#404040"  stroke-width="3" d="M19.75 155.76 0 189.97h39.5z"/></g></g><path  fill="none" stroke="none"  stroke-width="12" d="M20.504 94.205H213.26v59.528H20.504z"/><text  x="22.504" y="156.964" fill="#000" font-family="Calibri" font-size="7em" font-weight="700">CLA</text>
    </svg>
</button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button class="white-box"></button>
<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalFlow"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalFlow-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalFlow" xml:space="preserve" width="50" height="50" fill="none"  viewBox="0 0 91.825 98.65">
  <defs><linearGradient id="Functions_FunctionalFlow_lg01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(270 .5 .5)"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs>
  <g transform="translate(.125 -.125)"><path d="M1.44 1.69h90.709v98.4H1.44z"/><path d="M0 .25h90.709v98.4H0z"/><g transform="translate(24.378 -21.089)"><path fill="url(#Functions_FunctionalFlow_lg01)" stroke="#404040"  stroke-width="4.25" d="M0 42.946h65.197V98.65H0z"/></g><g transform="translate(5.52 -8.056)"><path stroke="#3f3f3f"  stroke-width="4.5" d="M0 16.88h18.24l.2 81.77H0"/></g><g transform="translate(39.685 -25.833)"><path fill="#fff" stroke="#3f3f3f"  stroke-width="5.25" d="M0 52.16v46.49l41.1-23.24L0 52.16Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FlowType"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FlowType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FlowType"  width="50" height="50" fill="none"  font-size="12" viewBox="0 0 67.197 57.6">
  <defs><linearGradient id="Functions_FlowType_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#92d050" stop-opacity=".75"/></linearGradient></defs>
  <g transform="translate(1 -9.08)"><path fill="url(#Functions_FlowType_LG01)" stroke="#404040"  d="M0 16.619h65.197V57.6H0z"/><g transform="translate(0 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="36.6" y="66" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">T</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalFlowInterfaceType"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalFlowInterfaceType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalFlowInterfaceType"  width="50" height="50" fill="none" viewBox="0 0 113.386 88.535"><defs><linearGradient id="Functions_FunctionalFlowInterfaceType_LG01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(180 .5 .5)"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs>
  <g><g transform="translate(6.296)"><path fill="url(#Functions_FunctionalFlowInterfaceType_LG01)" stroke="#000" stroke-width="4.5" d="M0 4.5h99.444v84.035H0z"/><g transform="translate(1.77 -23.316)"><path stroke="#000" stroke-width="6" d="M0 88.54h95.83"/></g></g><g transform="translate(58.11 -30.46)"><path fill="#fff" stroke="#3f3f3f" stroke-width="5.25" d="M0 42.05v46.49l41.1-23.25L0 42.05Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalFlowConnection"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalFlowConnection-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalFlowConnection" xml:space="preserve" width="50" height="50" fill="none" fill-rule="evenodd" stroke-linecap="square" stroke-miterlimit="3" color-interpolation-filters="sRGB" font-size="12" overflow="visible" viewBox="0 0 77.575 69.496">
  <defs id="Patterns_And_Gradients"><linearGradient id="Functions_FunctionalFlowConnection_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs>
  <g transform="translate(3 -3)"><g><g ><g><g transform="rotate(90 17.008 52.488)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g><g transform="matrix(0 1 1 0 2.079 6)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g></g></g><g transform="translate(48.33 -35.433)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#Functions_FunctionalFlowConnection_LG01);stroke:#00b050;stroke-width:4.5"/></g><g transform="translate(4.075 -4.252)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#Functions_FunctionalFlowConnection_LG01);stroke:#00b050;stroke-width:4.5"/></g></g><g transform="translate(24.98 -16.3)"><path stroke="#00b050" stroke-width="3" d="M0 69.5h10.81V38.31h12.54"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalFlowDelegation"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalFlowDelegation-button' class="el-button" data-toggle="tooltip"> 
<svg xmlns="http://www.w3.org/2000/svg"id="Functions_FunctionalFlowDelegation"   width="50" height="50" fill="none" viewBox="0 0 77.575 80.538">
  <defs id="Patterns_And_Gradients"><linearGradient id="Functions_FunctionalFlowDelegation_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs>
  <g transform="translate(3 -3)"><g><g><g><g transform="rotate(90 17.008 63.53)"><path d="M0 80.54h34.02" clstyleass="◊"/></g><g transform="matrix(0 1 1 0 -8.964 17.042)"><path d="M0 80.54h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g></g><g transform="translate(.354 -34.016)"><path  stroke-width=".75" d="M0 51.093h31.181v29.445H0z"/><text x="4" y="80.22" fill="#008e40" font-family="Calibri" font-size="2em" font-weight="700">=</text></g></g><g  transform="translate(48.33 -35.433)"><path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="fill:url(#Functions_FunctionalFlowDelegation_LG01);stroke:#00b050;stroke-width:4.5"/></g><g  transform="translate(4.075 -4.252)"><path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="fill:url(#Functions_FunctionalFlowDelegation_LG01);stroke:#00b050;stroke-width:4.5"/></g></g><g transform="translate(24.98 -16.3)"><path stroke="#00b050"  stroke-width="3" d="M0 80.54h10.81V49.36h12.54"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalFlowProperty"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalFlowProperty-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalFlowProperty" width="50" height="50" fill="none"  viewBox="0 0 59.528 43.016"><defs><linearGradient id="Functions_FunctionalFlowProperty_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs><g transform="translate(0 -4.5)"><g transform="translate(17.008)"><path fill="url(#Functions_FunctionalFlowProperty_LG01)" stroke="#60a030"  stroke-width="4.5" d="M0 9v34.02l25.51-17.01L0 9Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_EnergyFlow"), { position: 'left', className: 'w2ui-light' })}
id='Functions-EnergyFlow-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_EnergyFlow"  width="50" height="50" fill="none"  viewBox="0 0 91.825 98.65"><defs><linearGradient id="Functions_EnergyFlow_LG01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(270 .5 .5)"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs><g transform="translate(.125 -.125)"><path d="M1.44 1.69h90.709v98.4H1.44z"/><path d="M0 .25h90.709v98.4H0z"/><g transform="translate(24.378 -21.089)"><path fill="url(#Functions_EnergyFlow_LG01)" stroke="#404040"  stroke-width="4.25" d="M0 42.946h65.197V98.65H0z"/></g><g transform="translate(5.52 -8.056)"><path stroke="#3f3f3f"  stroke-width="4.5" d="M0 16.88h18.24l.2 81.77H0"/></g><g transform="translate(45.354 -28.717)"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.75" d="m0 98.65 27.71-20.1H0l27.71-20.1"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalMode"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalMode-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalMode" width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 67.197 57.6">
  <defs><radialGradient id="Functions_FunctionalMode_LG01" cx="1" cy="0" r="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#92d050" stop-opacity=".75"/></radialGradient></defs><g transform="translate(1 -8.31)"><rect width="65.197" height="40.981" y="16.619" fill="url(#Functions_FunctionalMode_LG01)" stroke="#404040"  rx="14.173" ry="14.173"/><text x="11.62" y="51.51" fill="#3f3f3f" font-family="Calibri" font-size="4em" font-weight="700">M</text></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionalRestrictedPackage"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionalRestrictedPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionalRestrictedPackage"  width="50" height="50" fill="none"  font-size="12" overflow="visible" viewBox="0 0 229.534 181.346"><defs><linearGradient id="Functions_FunctionalRestrictedPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".8"/><stop offset="1" stop-color="#92d050" stop-opacity=".8"/></linearGradient></defs><g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#Functions_FunctionalRestrictedPackage_LG01)" stroke="#595959" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(6.205 -6.32)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#7f7f7f" font-family="Calibri" font-size="7.5em" font-weight="700">R</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionBehavior"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionBehavior-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionBehavior" width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 149.172 111.799">
  <defs id="Patterns_And_Gradients"><linearGradient id="Functions_FunctionBehavior_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs>
  <g  transform="translate(-16 -42)   scale(1.4 1.5)">
  <rect x="13" y="40" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Functions_FunctionBehavior_LG01)" stroke="#000000" stroke-width="2"  style="stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none" />
  <rect x="67" y="75" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Functions_FunctionBehavior_LG01)" stroke="#000000" stroke-width="2" style="stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none" />
  <line x1="63" y1="53" x2="90.5" y2="53" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
  <line x1="90" y1="75" x2="90"  y2="53"  stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
  <line x1="35" y1="88.5" x2="35" y2="68" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
  <line x1="35" y1="88" x2="65" y2="88" stroke="black" stroke-width="3" style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
  <path d="m 63,84 1.23,2.25 1.2,2.2 -0.73,1 -0.69,0.96 -1.28,1.8" fill="#000000" stroke="#000000" stroke-width="1" id="path22" />
  <path d="m 62.689517,49.277424 -1.230001,2.249998 -1.2,2.2 0.73,1 0.69,0.96 1.28,1.8" fill="#000000" stroke="#000000" stroke-width="1" id="path22-9" />
  </g>
  </svg>
  </button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionBehaviorInvocation"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionBehaviorInvocation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionBehaviorInvocation" width="50" height="50" fill="none" viewBox="0 0 72.637 48.421" >
  <defs id="Patterns_And_Gradients"><linearGradient id="Functions_FunctionBehaviorInvocation_LG01" x1="0" x2="0" y1="0" y2="1">
    <stop offset="0" stop-color="#fff"/>
    <stop offset="1" stop-color="#7dc034"/>
  </linearGradient>
  </defs>
<g transform="translate(3 -4.44)"><path fill="url(#Functions_FunctionBehaviorInvocation_LG01)" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0 34.25a14.174 14.174-180 0 0 14.17 14.17h36.85A14.174 14.174-180 0 0 65.2 34.25V21.61A14.174 14.174-180 0 0 51.02 7.44H14.17A14.174 14.174-180 0 0 0 21.61v12.64Z"/></g>
<g transform="translate(33,40)scale(0.0025,-0.0025)" fill="gray" >
<path d="M5860 12792 c0 -4 -29 -174 -65 -377 -36 -204 -95 -541 -131 -750 -37 -209 -68 -381 -69 -383 -1 -1 -61 -14 -133 -27 -233 -45 -467 -108 -691 -187 -110 -38 -114 -39 -131 -21 -9 10 -225 268 -480 573 -255 305 -470 563 -480 573 -16 17 -38 5 -476 -248 -252 -146 -460 -269 -462 -274 -2 -5 115 -332 259 -727 l262 -717 -40 -36 c-289 -261 -333 -304 -614 -615 l-36 -39 -704 257 c-387 142 -714 258 -726 259 -19 2 -58 -61 -288 -457 -253 -438 -265 -460 -248 -476 10 -10 270 -228 578 -485 308 -257 566 -473 573 -479 10 -10 5 -35 -27 -127 -85 -249 -141 -456 -185 -688 -14 -74 -27 -135 -28 -136 -2 -1 -174 -32 -383 -69 -209 -36 -546 -95 -750 -131 -203 -36 -373 -65 -377 -65 -4 0 -8 -243 -8 -540 0 -297 4 -540 8 -540 4 0 174 -29 377 -65 204 -36 541 -95 750 -131 209 -37 381 -68 383 -69 1 -1 14 -62 28 -136 44 -232 100 -439 185 -688 32 -92 37 -117 27 -127 -7 -6 -265 -222 -573 -479 -308 -257 -568 -475 -578 -485 -17 -16 -5 -38 248 -476 230 -396 269 -459 288 -457 12 1 339 117 726 259 l704 257 36 -39 c281 -311 325 -354 614 -615 l40 -36 -262 -717 c-144 -395 -261 -722 -259 -727 2 -5 210 -128 462 -274 438 -253 460 -265 476 -248 10 10 225 268 480 573 255 305 471 563 480 573 17 18 21 17 131 -21 224 -79 458 -142 691 -187 72 -13 132 -26 133 -27 1 -2 32 -174 69 -383 36 -209 95 -546 131 -750 36 -203 65 -373 65 -377 0 -4 242 -8 538 -8 l538 0 52 292 c28 161 88 502 133 758 44 256 82 466 84 468 1 1 69 16 151 32 254 50 420 94 673 181 92 32 117 37 127 27 6 -7 222 -265 479 -573 257 -308 475 -568 485 -578 16 -17 38 -5 476 248 252 146 460 269 462 274 2 7 -163 465 -465 1290 l-57 154 65 56 c217 190 384 356 570 570 l55 64 185 -67 c708 -260 1250 -456 1257 -456 5 0 94 147 198 327 103 181 223 388 266 462 63 108 76 137 66 146 -7 7 -267 225 -578 485 -311 260 -571 478 -578 484 -10 10 -5 35 27 127 84 246 150 491 191 712 12 64 26 117 30 117 4 0 227 38 496 85 269 47 604 106 744 130 140 25 258 45 262 45 5 0 8 243 8 540 0 297 -4 540 -8 540 -4 0 -172 29 -372 64 -201 35 -539 95 -752 132 l-387 68 -21 115 c-41 219 -107 465 -191 710 -32 92 -37 117 -27 127 7 6 267 224 578 484 311 260 571 478 578 485 10 9 -3 38 -66 146 -43 74 -163 281 -266 462 -104 180 -193 327 -198 327 -7 0 -549 -196 -1257 -456 l-185 -67 -55 64 c-186 214 -353 380 -570 570 l-65 56 57 154 c302 825 467 1283 465 1290 -2 5 -210 128 -462 274 -438 253 -460 265 -476 248 -10 -10 -228 -270 -485 -578 -257 -308 -473 -566 -479 -573 -10 -10 -35 -5 -127 27 -253 87 -419 131 -673 181 -82 16 -150 31 -151 32 -2 2 -40 212 -84 468 -45 256 -105 597 -133 758 l-52 292 -538 0 c-296 0 -538 -4 -538 -8z m745 -2616 c678 -24 1405 -277 1985 -690 767 -545 1301 -1351 1505 -2266 64 -289 86 -503 86 -820 0 -317 -22 -531 -86 -820 -301 -1354 -1321 -2437 -2655 -2819 -391 -112 -780 -156 -1211 -139 -1615 64 -3017 1172 -3467 2738 -112 388 -157 780 -140 1211 48 1205 686 2326 1703 2993 494 324 1039 522 1643 596 96 12 405 28 457 23 17 -1 98 -5 180 -7z"/>
</g>
</svg>
</button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_FunctionInvocation"), { position: 'left', className: 'w2ui-light' })}
id='Functions-FunctionInvocation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_FunctionInvocation"   width="50" height="50" fill="none" viewBox="0 0 71.197 46.981">
  <defs id="Functions_FunctionInvocation_LG"><linearGradient id="Functions_FunctionInvocation_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#7dc034"/></linearGradient></defs>
  <g  transform="translate(3 -3)"><g ><g ><g ><g ><path fill="url(#Functions_FunctionInvocation_LG01)" stroke="#000"  stroke-width="3" d="M0 6h65.197v40.981H0z"/></g></g></g></g><g id="shape2176-9" transform="translate(25.512 -2.774)"></g></g>
<g transform="translate(33,40)scale(0.0025,-0.0025)" fill="gray" >

<path  d="M5860 12792 c0 -4 -29 -174 -65 -377 -36 -204 -95 -541 -131 -750 -37 -209 -68 -381 -69 -383 -1 -1 -61 -14 -133 -27 -233 -45 -467 -108 -691 -187 -110 -38 -114 -39 -131 -21 -9 10 -225 268 -480 573 -255 305 -470 563 -480 573 -16 17 -38 5 -476 -248 -252 -146 -460 -269 -462 -274 -2 -5 115 -332 259 -727 l262 -717 -40 -36 c-289 -261 -333 -304 -614 -615 l-36 -39 -704 257 c-387 142 -714 258 -726 259 -19 2 -58 -61 -288 -457 -253 -438 -265 -460 -248 -476 10 -10 270 -228 578 -485 308 -257 566 -473 573 -479 10 -10 5 -35 -27 -127 -85 -249 -141 -456 -185 -688 -14 -74 -27 -135 -28 -136 -2 -1 -174 -32 -383 -69 -209 -36 -546 -95 -750 -131 -203 -36 -373 -65 -377 -65 -4 0 -8 -243 -8 -540 0 -297 4 -540 8 -540 4 0 174 -29 377 -65 204 -36 541 -95 750 -131 209 -37 381 -68 383 -69 1 -1 14 -62 28 -136 44 -232 100 -439 185 -688 32 -92 37 -117 27 -127 -7 -6 -265 -222 -573 -479 -308 -257 -568 -475 -578 -485 -17 -16 -5 -38 248 -476 230 -396 269 -459 288 -457 12 1 339 117 726 259 l704 257 36 -39 c281 -311 325 -354 614 -615 l40 -36 -262 -717 c-144 -395 -261 -722 -259 -727 2 -5 210 -128 462 -274 438 -253 460 -265 476 -248 10 10 225 268 480 573 255 305 471 563 480 573 17 18 21 17 131 -21 224 -79 458 -142 691 -187 72 -13 132 -26 133 -27 1 -2 32 -174 69 -383 36 -209 95 -546 131 -750 36 -203 65 -373 65 -377 0 -4 242 -8 538 -8 l538 0 52 292 c28 161 88 502 133 758 44 256 82 466 84 468 1 1 69 16 151 32 254 50 420 94 673 181 92 32 117 37 127 27 6 -7 222 -265 479 -573 257 -308 475 -568 485 -578 16 -17 38 -5 476 248 252 146 460 269 462 274 2 7 -163 465 -465 1290 l-57 154 65 56 c217 190 384 356 570 570 l55 64 185 -67 c708 -260 1250 -456 1257 -456 5 0 94 147 198 327 103 181 223 388 266 462 63 108 76 137 66 146 -7 7 -267 225 -578 485 -311 260 -571 478 -578 484 -10 10 -5 35 27 127 84 246 150 491 191 712 12 64 26 117 30 117 4 0 227 38 496 85 269 47 604 106 744 130 140 25 258 45 262 45 5 0 8 243 8 540 0 297 -4 540 -8 540 -4 0 -172 29 -372 64 -201 35 -539 95 -752 132 l-387 68 -21 115 c-41 219 -107 465 -191 710 -32 92 -37 117 -27 127 7 6 267 224 578 484 311 260 571 478 578 485 10 9 -3 38 -66 146 -43 74 -163 281 -266 462 -104 180 -193 327 -198 327 -7 0 -549 -196 -1257 -456 l-185 -67 -55 64 c-186 214 -353 380 -570 570 l-65 56 57 154 c302 825 467 1283 465 1290 -2 5 -210 128 -462 274 -438 253 -460 265 -476 248 -10 -10 -228 -270 -485 -578 -257 -308 -473 -566 -479 -573 -10 -10 -35 -5 -127 27 -253 87 -419 131 -673 181 -82 16 -150 31 -151 32 -2 2 -40 212 -84 468 -45 256 -105 597 -133 758 l-52 292 -538 0 c-296 0 -538 -4 -538 -8z m745 -2616 c678 -24 1405 -277 1985 -690 767 -545 1301 -1351 1505 -2266 64 -289 86 -503 86 -820 0 -317 -22 -531 -86 -820 -301 -1354 -1321 -2437 -2655 -2819 -391 -112 -780 -156 -1211 -139 -1615 64 -3017 1172 -3467 2738 -112 388 -157 780 -140 1211 48 1205 686 2326 1703 2993 494 324 1039 522 1643 596 96 12 405 28 457 23 17 -1 98 -5 180 -7z" />
</g>
</svg></button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_ModalFunctionBehaviorInvocation"), { position: 'left', className: 'w2ui-light' })}
id='Functions-ModalFunctionBehaviorInvocation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_ModalFunctionBehaviorInvocation"  xml:space="preserve" width="50" height="50" fill="none"  viewBox="0 0 84.869 48.421">
  <defs><linearGradient id="Functions_ModalFunctionBehaviorInvocation_LG01" x1="0" x2="0" y1="0" y2="1">
  <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/>
  </linearGradient></defs>
   <g transform="translate(15.232 -4.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="3" d="M1.44 35.69a14.174 14.174 0 0 0 14.17 14.17h36.85a14.174 14.174 0 0 0 14.18-14.17V23.05A14.174 14.174 0 0 0 52.46 8.88H15.61A14.174 14.174 0 0 0 1.44 23.05v12.64Z"/>
   <path fill="url(#Functions_ModalFunctionBehaviorInvocation_LG01)" stroke="#595959"  stroke-width="3" d="M0 34.25a14.174 14.174-180 0 0 14.17 14.17h36.85A14.174 14.174-180 0 0 65.2 34.25V21.61A14.174 14.174-180 0 0 51.02 7.44H14.17A14.174 14.174-180 0 0 0 21.61v12.64Z"/>
   <g transform="translate(30.724 -12.32)"><ellipse cx="13.41" cy="39.699" fill="#fff" stroke="#7f7f7f"  stroke-width="4.5" rx="13.41" ry="8.722"/>
   </g><g transform="translate(3.685 -21.146)"><path stroke="#7f7f7f" stroke-width="4.5"  d="M16.56 48.42h9.91"/></g></g>
   <g transform="translate(10 4)">
   <g transform="scale(0.5 0.5)">
   <path 
   style="fill:#7f7f7f;stroke:#7f7f7f;stroke-width:0.750002px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
   d="M 30.390525,37.788595 56.782559,24.592578 v 26.791913 z"/></g></g>
   
   </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_OperationalTaskRealization"), { position: 'left', className: 'w2ui-light' })}
id='Functions-OperationalTaskRealization-button' class="el-button" data-toggle="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" id="Functions_OperationalTaskRealization" width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 149.172 111.799">
  <defs id="Functions_OperationalTaskRealization_LG"><linearGradient id="Functions_OperationalTaskRealization_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#92d050"/></linearGradient></defs>
  <g  transform="translate(-16 -42)   scale(1.4 1.5)">
  <rect x="13" y="40" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Functions_OperationalTaskRealization_LG01)" stroke="orange"  style="stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none" />
  <rect x="67" y="75" width="46" height="28" rx="7.6601157" ry="3.5252593" fill="url(#Functions_OperationalTaskRealization_LG01)" stroke="orange"  style="stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none" />
  <line x1="63" y1="53" x2="90.5" y2="53" stroke="orange" stroke-width="3" style="stroke-miterlimit:4;stroke-dasharray:none"/>
  <line x1="90" y1="75" x2="90"  y2="53"  stroke="orange" stroke-width="3" style="stroke-miterlimit:4;stroke-dasharray:none"/>
  <line x1="35" y1="88.5" x2="35" y2="68" stroke="orange" stroke-width="3" style="stroke-miterlimit:4;stroke-dasharray:none"/>
  <line x1="35" y1="88" x2="65" y2="88"   stroke="orange" stroke-width="3" style="stroke-miterlimit:4;stroke-dasharray:none"/>
  <path d="m 63,84 1.23,2.25 1.2,2.2 -0.73,1 -0.69,0.96 -1.28,1.8" fill="#000000" stroke="orange" stroke-width="3" />
  <path d="m 62.689517,49.277424 -1.230001,2.249998 -1.2,2.2 0.73,1 0.69,0.96 1.28,1.8" fill="#000000" stroke="orange" stroke-width="3"  />
  </g>
  </svg>
  </button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Functions_SignalItemType"), { position: 'left', className: 'w2ui-light' })}
id='Functions-SignalItemType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Functions_SignalItemType"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 67.197 57.6"><defs><linearGradient id="Functions_SignalItemType_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#92d050" stop-opacity=".75"/></linearGradient></defs>
  <g transform="translate(1 -9.08)"><path fill="url(#Functions_SignalItemType_LG01)" stroke="#404040"  d="M0 16.619h65.197V57.6H0z"/><g transform="translate(0 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="37.67" y="66" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">S</text></g><g transform="translate(14.173 -8.157)"><path stroke="#008e40"  stroke-width="4.5" d="m0 57.6 12.76-12.33H0l12.76-12.34"/></g></g></svg>
</button>

</fieldset>

<fieldset id="moflt_logical_fieldset">
<legend>R-MOFLT Logical</legend>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalViewpointPackage"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalViewpointPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalViewpointPackage"  width="50" height="50" fill="none" viewBox="0 0 229.534 181.346">
  <defs><linearGradient id="LogicalArchitecture_LogicalViewpointPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#6b9bc7" stop-opacity=".8"/></linearGradient></defs>
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" sstroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#LogicalArchitecture_LogicalViewpointPackage_LG01)" stroke="#595959" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalContext"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalContext-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalContext"  width="50" height="50" fill="none"  viewBox="0 0 135.496 121.382">
<defs id="LogicalArchitecture_LogicalContext_LG"><linearGradient id="LogicalArchitecture_LogicalContext_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#6b9bc7" stop-opacity=".6"/></linearGradient></defs>
<g transform="translate(0 -4.5)"><g transform="translate(11.339 -5.167)">
</g><g><g ><g><g ><g ><g  transform="translate(7.524)"><g><path fill="url(#LogicalArchitecture_LogicalContext_LG01)" stroke="#000"  stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52" style="stroke:#000;stroke-width:6"/></g><g transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" style="stroke:#000;stroke-width:6"/></g></g></g></g></g></g></g></g>
<g stroke="#404040"  stroke-width="4.25" transform="translate(30 10)scale(0.1 0.1)">
  <path id="phi" fill="grey" d="M318 566.734V493.89c0-101.719 2-173.797 6.031-216.234 4.016-42.422 10.672-79.25 19.984-110.5 16.891-54.438 40.75-95.906 71.594-124.406S483.203 0 525.875 0c51.953 0 95.469 23.641 130.531 70.891C691.469 118.156 709 179.125 709 253.812c0 102.969-26.828 186.719-80.453 251.281S504.406 603.625 417 607v260h-99V607c-100.938-7.188-179.171-38.922-234.703-95.266C27.766 455.406 0 379.562 0 284.188c0-88.594 18.047-158.109 54.172-208.547C90.281 25.219 139.375 0 201.468 0c29.984 0 56.797 7.703 80.453 23.094s44.344 38.891 62.094 70.516l-31.094 19c-12.266-21.953-26.328-38.203-42.172-48.766S236.828 48 216.546 48c-35.938 0-61.5 17.422-76.718 52.25C124.609 135.094 117 194.938 117 279.812c0 83.609 17.109 149.906 51.359 198.891 34.234 48.985 84.109 78.328 149.641 88.031zM417 568c72.094 0 131.109-29.016 177.062-87.078S663 347.812 663 255.75c0-63.75-12.125-114.734-36.359-152.953-24.25-38.219-55.766-57.328-94.547-57.328-42.594 0-72.422 19.219-89.484 57.641C425.531 141.531 417 211.406 417 312.75V568z"/>
</g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalComponent"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalComponent-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalComponent" width="50" height="50" fill="none"  font-size="12" overflow="visible" viewBox="0 0 144.496 126.749">
  <defs id="Patterns_And_Gradients"><linearGradient id="LogicalArchitecture_LogicalComponent_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#6b9bc7"/></linearGradient></defs>
  <g ><g  transform="translate(7.524)"><g><path fill="url(#LogicalArchitecture_LogicalComponent_LG01)" stroke="#000"  stroke-width="4.5" d="M0 14.367h118.836v112.382H0z"/></g><g  transform="translate(2.114 -16.948)"><path d="M0 126.75h114.52" style="stroke:#000;stroke-width:6"/></g><g transform="translate(1.547 -34.016)"><path d="M0 126.75h115.09" style="stroke:#000;stroke-width:6"/></g></g><g  transform="translate(0 -44.634)"><path stroke-width="4.5" d="M0 73.518h135.496v53.231H0z"/><text x="49.78" y="125.63" fill="#000" font-family="Calibri" font-size="6em" font-weight="700">L</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalInterfaceType"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalInterfaceType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalInterfaceType" width="50" height="50" fill="none"  font-size="12" viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="LogicalArchitecture_LogicalInterfaceType_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#6b9bc7"/></linearGradient></defs><g transform="translate(3 -9.08)"><path fill="url(#LogicalArchitecture_LogicalInterfaceType_LG01)" stroke="#000"  stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(1.417 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="34.82" y="66" fill="#000" font-family="Calibri" font-size="3em" font-weight="700">P</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalCategory"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalCategory-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalCategory"   width="50" height="50" fill="none" version="1.1" viewBox="0 0 56.538 49.96">
  <defs id="Patterns_And_Gradients"><linearGradient id="LogicalArchitecture_LogicalCategory_LG01" x1="0" x2="0" y1="1" y2="0"><stop id="stop937" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop939" offset="1" stop-color="#6b9bc7" stop-opacity="1"/></linearGradient>
    </defs>
       <g>
          <g transform="translate(7.729 -3)"><path  d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
         </g>
         <path fill="url(#LogicalArchitecture_LogicalCategory_LG01)" stroke="#404040"  stroke-width="3" d="M39.819 3h-24.54L2.999 24.26l12.28 21.26h24.54l12.28-21.26z"/>
      <g  transform="translate(27.549 -25.7)">
         <g  transform="translate(1.44 1.44)">
            <path  d="M12.27 28.7 0 49.96h24.55z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
         </g>
            <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M12.27 28.7 0 49.96h24.55z"/>
          </g>
      </g>
    </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalClassification"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalClassification-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"  id="LogicalArchitecture_LogicalClassification" width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 189.969">
  <defs id="Patterns_And_Gradients"><linearGradient id="LogicalArchitecture_LogicalClassification_LG01" x1="-5.289" x2="-5.289" y1="31.832" y2="222.315" gradientTransform="matrix(1.13443 0 0 .8815 12 -22.063)" gradientUnits="userSpaceOnUse"><stop id="stop4" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop6" offset="1" stop-color="#6b9bc7" stop-opacity="1"/></linearGradient><linearGradient id="LogicalArchitecture_LogicalClassification_LG02" x1="-6.337" x2="-6.337" y1="205.164" y2="128.647" gradientTransform="scale(1.07152 .93325)" gradientUnits="userSpaceOnUse"><stop id="stop9" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop11" offset="1" stop-color="#6b9bc7" stop-opacity="1"/></linearGradient></defs>
    <g  transform="translate(13.44 -20.623)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06Z"/></g><path fill="url(#LogicalArchitecture_LogicalClassification_LG01)" stroke="#595959"  stroke-width="12" d="M12 11.997v155.91h204.09V48.847H114.05l-34.02-36.85z"/><g transform="translate(142.394 -114.19)"><g><g transform="translate(1.44 1.44)"><path id="path34" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/></g><path fill="url(#LogicalArchitecture_LogicalClassification_LG02)" stroke="#404040" stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z"/></g><g  transform="translate(34.205 -34.205)"><g  transform="translate(1.44 1.44)"><path  d="M19.75 155.76 0 189.97h39.5z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/></g><path  fill="#fff" stroke="#404040"  stroke-width="3" d="M19.75 155.76 0 189.97h39.5z"/></g></g><path fill="none" stroke="none"  stroke-width="12" d="M20.504 94.205H213.26v59.528H20.504z"/><text id="text55" x="22.504" y="156.964" fill="#000" font-family="Calibri" font-size="7em" font-weight="700">CLA</text></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalInterface"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalInterface-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalInterface" width="50" height="50" fill="none" overflow="visible" viewBox="0 0 55.798 40.208">
  <defs id="LogicalArchitecture_LogicalInterface_LG"><linearGradient id="LogicalArchitecture_LogicalInterface_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#6b9bc7"/></linearGradient></defs>
  <g transform="translate(.25 -1.69)"><g ><path  d="M0 1.94h53.858v38.268H0z" style="fill:none;stroke:none;stroke-width:.25" transform="translate(1.44 1.44)" visibility="visible"/><path d="M0 1.94h53.858v38.268H0z" style="fill:none;stroke:none;stroke-width:.25"/></g><g  transform="translate(9.827 -1.417)"><g transform="rotate(90 21.685 27.877)"><path d="M0 40.21h34.02" style="stroke:#404040;stroke-linecap:butt;stroke-width:3"/></g><g  transform="translate(9.43 -7.937)"><path fill="url(#LogicalArchitecture_LogicalInterface_LG01)" stroke="#404040" stroke-width="3" d="M0 22.066h24.775v18.142H0z"/></g><g transform="rotate(180 5.386 23.909)"><path d="M0 40.21h10.77" style="stroke:#404040;stroke-linecap:butt;stroke-width:3"/></g><g  transform="rotate(180 5.394 39.499)"><path d="M0 40.21h10.77" style="stroke:#404040;stroke-linecap:butt;stroke-width:3"/></g></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalInterfaceType"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalInterfaceType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalInterfaceType"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 113.386 93.035">
  <defs><linearGradient id="LogicalArchitecture_LogicalInterfaceType_LG01" x1="1" x2="0" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#6b9bc7"/></linearGradient></defs>
  <g transform="translate(0 -4.5)"><g transform="translate(6.296)"><path fill="url(#LogicalArchitecture_LogicalInterfaceType_LG01)" stroke="#000" stroke-width="4.5" d="M0 9h99.444v84.035H0z"/><g transform="translate(1.77 -23.316)"><path stroke="#000"  stroke-width="6" d="M0 93.04h95.83"/></g></g><g transform="translate(65.197 -42.018)"><circle cx="17.008" cy="76.027" r="17.008" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></svg>
</button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalInterfaceConnection"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalInterfaceConnection-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalInterfaceConnection" width="50" height="50" fill="none"  viewBox="0 0 77.575 69.496">
  <defs id="LogicalArchitecture_LogicalInterfaceConnection_LG"><linearGradient id="LogicalArchitecture_LogicalInterfaceConnection_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#6b9bc7"/></linearGradient></defs><g id="group2207-1" transform="translate(3 -3)"><g id="shape2208-2" transform="translate(.076 -5.67)"><path d="M0 47.953h24.775v21.543H0z" style="fill:url(#LogicalArchitecture_LogicalInterfaceConnection_LG01);stroke:#4e66b2;"/></g><g id="shape2209-6" transform="translate(24.85 -14.173)"><path stroke="#5880b3" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m0 69.5 21.87-34.02"/></g><g id="shape2210-9" transform="rotate(90 17.008 52.488)"><path d="M0 69.5h34.02" style="stroke-width:3;stroke:#fff;stroke-linecap:butt"/></g><g id="shape2211-14" transform="matrix(-1 0 0 1 71.5 -37.417)"><path d="M0 47.953h24.775v21.543H0z" style="fill:url(#LogicalArchitecture_LogicalInterfaceConnection_LG01);stroke:#4e66b2;"/></g><g id="shape2212-17" transform="matrix(0 1 1 0 2.079 6)"><path d="M0 69.5h34.02" style="stroke-width:3;stroke:#fff;stroke-linecap:butt"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalStateMachine"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalStateMachine-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalStateMachine" 
  width="50" height="50" fill="none"  viewBox="0 0 131.065 115.965">
<defs id="LogicalArchitecture_LogicalStateMachine_LG"><radialGradient id="LogicalArchitecture_LogicalStateMachine_LG01" cx="1" cy="0" r="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#6b9bc7"/></radialGradient></defs> 
<g id="group542-1" transform="translate(27.352 -26.425)"><g id="shape543-2" transform="translate(0 -22.677)"><rect width="99.213" height="62.362" y="53.602" fill="url(#LogicalArchitecture_LogicalStateMachine_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" rx="28.346" ry="28.346"/></g><g id="shape544-6" transform="translate(46.417 -37.255)"><ellipse cx="21.614" cy="101.791" style="fill:#fff;stroke:#404040;stroke-width:8" rx="21.614" ry="14.173"/></g>

  <g  transform="translate(2.835 -51.598)"><path stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" fill="#404040" fill-opacity="1" stroke="#404040" stroke-opacity="1" stroke-width=".333" orient="auto" overflow="visible" refX="5.92" d="M26.64 115.96h16.02"/></g>
  <g  transform="translate(17.008 18.425)"><circle cx="9.213" cy="106.752" r="9.213" style="fill:#fff;stroke:#404040;stroke-width:8"/></g>
  <g  transform="translate(35.433 8.504)"><path stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5"  d="M0 115.96h32.6V98.82"/></g></g>
  <path
   style="fill:black;stroke:#000000;stroke-width:0.750002px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
   d="M 30.390525,37.788595 56.782559,24.592578 v 26.791913 z"/>
   <path
   style="fill:black;stroke:#000000;stroke-width:0.750002px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
   d="m 102.56874,81.175504 -7.397769,-14.19572 v 0 l -6.797946,13.795833 z" /> 
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalState"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalState-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalState"  width="50" height="50" fill="none" font-size="12" viewBox="0 0 67.197 42.981"><defs><radialGradient id="LogicalArchitecture_LogicalState_LG01" cx="1" cy="0" r="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#6b9bc7"/></radialGradient></defs><g transform="translate(1 -1)"><rect width="65.197" height="40.981" y="2" fill="url(#LogicalArchitecture_LogicalState_LG01)" stroke="#404040"  rx="14.173" ry="14.173"/><text x="23.28" y="32.99" fill="#000" font-family="Calibri" font-size="2.917em" font-weight="700">S</text></g></svg>
</button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("LogicalArchitecture_LogicalRestrictedPackage"), { position: 'left', className: 'w2ui-light' })}
id='LogicalArchitecture-LogicalRestrictedPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="LogicalArchitecture_LogicalRestrictedPackage"  width="50" height="50" fill="none" viewBox="0 0 229.534 181.346">
  <defs><linearGradient id="LogicalArchitecture_LogicalRestrictedPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#6b9bc7" stop-opacity=".8"/></linearGradient></defs>
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd"  stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#LogicalArchitecture_LogicalRestrictedPackage_LG01)" stroke="#595959"  stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(5.906 -6.056)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#7f7f7f" font-family="Calibri" font-size="6em" font-weight="700">R</text></g></g></svg>
</button>

</fieldset>

<fieldset id="moflt_technical_fieldset">
<legend>R-MOFLT Technical</legend> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalViewpointPackage"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalViewpointPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalViewpointPackage"  width="50" height="50" fill="none"  viewBox="0 0 229.534 181.346">
  <defs><linearGradient id="TechnicalArchitecture_TechnicalViewpointPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".85"/><stop offset="1" stop-color="#7030a0" stop-opacity=".85"/></linearGradient></defs><g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#TechnicalArchitecture_TechnicalViewpointPackage_LG01)" stroke="#595959" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalContext"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalContext-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalContext"  width="50" height="50" fill="none"  viewBox="0 0 135.496 121.382">
<defs id="TechnicalArchitecture_TechnicalContext_LG"><linearGradient id="TechnicalArchitecture_TechnicalContext_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#7030a0" stop-opacity=".6"/></linearGradient></defs>
<g transform="translate(0 -4.5)"><g transform="translate(11.339 -5.167)">
</g><g><g ><g><g ><g ><g  transform="translate(7.524)"><g><path fill="url(#TechnicalArchitecture_TechnicalContext_LG01)" stroke="#000"  stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52" style="stroke:#000;stroke-width:6"/></g><g transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" style="stroke:#000;stroke-width:6"/></g></g></g></g></g></g></g></g>
<g stroke="#404040"  stroke-width="4.25" transform="translate(30 10)scale(0.1 0.1)">
  <path id="phi" fill="grey" d="M318 566.734V493.89c0-101.719 2-173.797 6.031-216.234 4.016-42.422 10.672-79.25 19.984-110.5 16.891-54.438 40.75-95.906 71.594-124.406S483.203 0 525.875 0c51.953 0 95.469 23.641 130.531 70.891C691.469 118.156 709 179.125 709 253.812c0 102.969-26.828 186.719-80.453 251.281S504.406 603.625 417 607v260h-99V607c-100.938-7.188-179.171-38.922-234.703-95.266C27.766 455.406 0 379.562 0 284.188c0-88.594 18.047-158.109 54.172-208.547C90.281 25.219 139.375 0 201.468 0c29.984 0 56.797 7.703 80.453 23.094s44.344 38.891 62.094 70.516l-31.094 19c-12.266-21.953-26.328-38.203-42.172-48.766S236.828 48 216.546 48c-35.938 0-61.5 17.422-76.718 52.25C124.609 135.094 117 194.938 117 279.812c0 83.609 17.109 149.906 51.359 198.891 34.234 48.985 84.109 78.328 149.641 88.031zM417 568c72.094 0 131.109-29.016 177.062-87.078S663 347.812 663 255.75c0-63.75-12.125-114.734-36.359-152.953-24.25-38.219-55.766-57.328-94.547-57.328-42.594 0-72.422 19.219-89.484 57.641C425.531 141.531 417 211.406 417 312.75V568z"/>
</g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalComponent"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalComponent-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalComponent"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 144.496 126.749">
  <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_TechnicalComponent_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
  <g transform="translate(4.5 -4.5)"><g transform="translate(7.524)"><g><path fill="url(#TechnicalArchitecture_TechnicalComponent_LG01)" stroke="#000" stroke-width="4.5" d="M0 14.367h118.836v112.382H0z"/></g><g transform="translate(2.114 -16.948)"><path d="M0 126.75h114.52" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6"/></g><g transform="translate(1.547 -34.016)"><path d="M0 126.75h115.09" style="stroke:#000;stroke-width:6"/></g></g><g transform="translate(0 -44.634)"><path stroke-width="4.5" d="M0 73.518h135.496v53.231H0z"/><text x="46.71" y="125.63" fill="#000" font-family="Calibri" font-size="7.083em" font-weight="700">T</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalPart"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalPart-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalPart" width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="TechnicalArchitecture_TechnicalPart_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".75"/><stop offset="1" stop-color="#7030a0" stop-opacity=".75"/></linearGradient></defs>
  <g transform="translate(3 -9.08)"><path fill="url(#TechnicalArchitecture_TechnicalPart_LG01)" stroke="#000"  stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(1.417 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="34.82" y="66" fill="#000" font-family="Calibri" font-size="3em" font-weight="700">P</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalCategory"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalCategory-button' class="el-button" data-toggle="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalCategory"   width="50" height="50" fill="none" viewBox="0 0 56.538 49.96">
    <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_TechnicalCategory_LG01" x1="0" x2="0" y1="1" y2="0"><stop id="stop937" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop939" offset="1" stop-color="#7030a0" stop-opacity="1"/></linearGradient>
    </defs>
       <g>
          <g transform="translate(7.729 -3)"><path  d="M33.53 7.44H8.99L-3.29 28.7 8.99 49.96h24.54L45.81 28.7Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
         </g>
         <path fill="url(#TechnicalArchitecture_TechnicalCategory_LG01)" stroke="#404040"  stroke-width="3" d="M39.819 3h-24.54L2.999 24.26l12.28 21.26h24.54l12.28-21.26z"/>
      <g  transform="translate(27.549 -25.7)">
         <g  transform="translate(1.44 1.44)">
            <path  d="M12.27 28.7 0 49.96h24.55z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/>
         </g>
            <path  fill="#fff" stroke="#404040"  stroke-width="3" d="M12.27 28.7 0 49.96h24.55z"/>
          </g>
      </g>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalClassification"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalClassification-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalClassification"   width="50" height="50"  font-size="12" viewBox="0 0 229.534 189.969">
  <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_TechnicalClassification_LG01" x1="-5.289" x2="-5.289" y1="31.832" y2="222.315" gradientTransform="matrix(1.13443 0 0 .8815 12 -22.063)" gradientUnits="userSpaceOnUse"><stop id="stop4" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop6" offset="1" stop-color="#7030a0" stop-opacity="1"/></linearGradient><linearGradient id="TechnicalArchitecture_TechnicalClassification_LG02" x1="-6.337" x2="-6.337" y1="205.164" y2="128.647" gradientTransform="scale(1.07152 .93325)" gradientUnits="userSpaceOnUse"><stop id="stop9" offset="0" stop-color="#f0f0f0" stop-opacity="1"/><stop id="stop11" offset="1" stop-color="#7030a0" stop-opacity="1"/></linearGradient></defs>
    <g style="visibility:visible" transform="translate(13.44 -20.623)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-opacity=".5" stroke-width="12" d="M0 34.06v155.91h204.09V70.91H102.05L68.03 34.06Z"/></g><path fill="url(#TechnicalArchitecture_TechnicalClassification_LG01)" stroke="#595959"  stroke-width="12" d="M12 11.997v155.91h204.09V48.847H114.05l-34.02-36.85z"/><g transform="translate(142.394 -114.19)"><g><g style="visibility:visible" transform="translate(1.44 1.44)"><path id="path34" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/></g><path fill="url(#TechnicalArchitecture_TechnicalClassification_LG02)" stroke="#404040"  stroke-width="3" d="M53.95 121.56H14.46l-19.75 34.2 19.75 34.21h39.49l19.75-34.21Z"/></g><g  transform="translate(34.205 -34.205)"><g  style="visibility:visible" transform="translate(1.44 1.44)"><path  d="M19.75 155.76 0 189.97h39.5z" style="fill:#262626;fill-opacity:.5;stroke:#262626;stroke-opacity:.5;stroke-width:3"/></g><path  fill="#fff" stroke="#404040"  stroke-width="3" d="M19.75 155.76 0 189.97h39.5z"/></g></g><path  fill="none" stroke="none"  stroke-width="12" d="M20.504 94.205H213.26v59.528H20.504z"/><text  x="22.504" y="156.964" fill="#000" font-family="Calibri" font-size="6em" font-weight="700">CLA</text></svg>
</button> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalInterface"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalInterface-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalInterface"  width="50" height="50" fill="none" viewBox="0 0 55.798 40.208">
  <defs id="TechnicalArchitecture_TechnicalInterface_LG"><linearGradient id="TechnicalArchitecture_TechnicalInterface_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
    <g transform="translate(.25 -1.69)"><g><path  d="M0 1.94h53.858v38.268H0z" style="fill:none;stroke:none;stroke-width:.25" transform="translate(1.44 1.44)" visibility="visible"/><path d="M0 1.94h53.858v38.268H0z" style="fill:none;stroke:none;stroke-width:.25"/></g><g  transform="translate(9.827 -1.417)"><g  transform="rotate(90 21.685 27.877)"><path d="M0 40.21h34.02" style="stroke:#404040;stroke-linecap:butt;stroke-width:3"/></g><g  transform="translate(9.43 -7.937)"><path fill="url(#TechnicalArchitecture_TechnicalInterface_LG01)" stroke="#404040" stroke-width="3" d="M0 22.066h24.775v18.142H0z"/></g><g  transform="rotate(180 5.386 23.909)"><path d="M0 40.21h10.77" style="stroke:#404040;stroke-linecap:butt;stroke-width:3"/></g><g transform="rotate(180 5.394 39.499)"><path d="M0 40.21h10.77" style="stroke:#404040;stroke-linecap:butt;stroke-width:3"/></g></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalInterfaceType"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalInterfaceType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalInterfaceType"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 113.386 93.035">
  <defs><linearGradient id="TechnicalArchitecture_TechnicalInterfaceType_LG01" x1="1" x2="0" y1="0" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
  <g transform="translate(0 -4.5)"><g transform="translate(6.296)"><path fill="url(#TechnicalArchitecture_TechnicalInterfaceType_LG01)" stroke="#000" stroke-width="4.5" d="M0 9h99.444v84.035H0z"/><g transform="translate(1.77 -23.316)"><path stroke="#000"  stroke-width="6" d="M0 93.04h95.83"/></g></g><g transform="translate(65.197 -42.018)"><circle cx="17.008" cy="76.027" r="17.008" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalInterfaceConnection"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalInterfaceConnection-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalInterfaceConnection" width="50" height="50" fill="none"  viewBox="0 0 77.575 69.496">
  <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_TechnicalInterfaceConnection_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs><g id="group2235-1" transform="translate(3 -3)"><g id="shape2236-2" transform="translate(.076 -5.67)"><path d="M0 47.953h24.775v21.543H0z" style="fill:url(#TechnicalArchitecture_TechnicalInterfaceConnection_LG01);stroke:#7030a0;stroke-linecap:round;stroke-linejoin:round"/></g><g id="shape2237-6" transform="translate(24.85 -14.173)"><path stroke="#7030a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m0 69.5 21.87-34.02"/></g><g  transform="rotate(90 17.008 52.488)"><path d="M0 69.5h34.02" style="stroke-width:3;stroke:#fff;stroke-linecap:butt"/></g><g id="shape2239-14" transform="matrix(-1 0 0 1 71.5 -37.417)"><path d="M0 47.953h24.775v21.543H0z" style="fill:url(#TechnicalArchitecture_TechnicalInterfaceConnection_LG01);stroke:#7030a0;stroke-linecap:round;stroke-linejoin:round"/></g><g id="shape2240-17" transform="matrix(0 1 1 0 2.079 6)"><path d="M0 69.5h34.02" style="stroke-width:3;stroke:#fff;stroke-linecap:butt"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalStateMachine"), { position: 'left', className: 'w2ui-light' })}
id='TechicalArchitecture-TechicalStateMachine-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalStateMachine" 
  width="50" height="50" fill="none"  viewBox="0 0 131.065 115.965">
<defs id="TechnicalArchitecture_TechnicalStateMachine_LG"><radialGradient id="TechnicalArchitecture_TechnicalStateMachine_LG01" cx="1" cy="0" r="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></radialGradient></defs> 
<g id="group542-1" transform="translate(27.352 -26.425)"><g id="shape543-2" transform="translate(0 -22.677)"><rect width="99.213" height="62.362" y="53.602" fill="url(#TechnicalArchitecture_TechnicalStateMachine_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" rx="28.346" ry="28.346"/></g><g id="shape544-6" transform="translate(46.417 -37.255)"><ellipse cx="21.614" cy="101.791" style="fill:#fff;stroke:#404040;stroke-width:8" rx="21.614" ry="14.173"/></g>

  <g  transform="translate(2.835 -51.598)"><path stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" fill="#404040" fill-opacity="1" stroke="#404040" stroke-opacity="1" stroke-width=".333" orient="auto" overflow="visible" refX="5.92" d="M26.64 115.96h16.02"/></g>
  <g  transform="translate(17.008 18.425)"><circle cx="9.213" cy="106.752" r="9.213" style="fill:#fff;stroke:#404040;stroke-width:8"/></g>
  <g  transform="translate(35.433 8.504)"><path stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5"  d="M0 115.96h32.6V98.82"/></g></g>
  <path
   style="fill:black;stroke:#000000;stroke-width:0.750002px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
   d="M 30.390525,37.788595 56.782559,24.592578 v 26.791913 z"/>
   <path
   style="fill:black;stroke:#000000;stroke-width:0.750002px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
   d="m 102.56874,81.175504 -7.397769,-14.19572 v 0 l -6.797946,13.795833 z" /> 
</svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalState"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalState-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalState"  width="50" height="50" fill="none" font-size="12" viewBox="0 0 67.197 42.981"><defs><radialGradient id="TechnicalArchitecture_TechnicalState_LG01" cx="1" cy="0" r="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></radialGradient></defs><g transform="translate(1 -1)"><rect width="65.197" height="40.981" y="2" fill="url(#TechnicalArchitecture_TechnicalState_LG01)" stroke="#404040"  rx="14.173" ry="14.173"/><text x="23.28" y="32.99" fill="#000" font-family="Calibri" font-size="2.917em" font-weight="700">S</text></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalFlow"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalFlow-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalFlow"  xml:space="preserve" width="50" height="50" fill="none" viewBox="0 0 91.825 98.65">
  <defs><linearGradient id="TechnicalArchitecture_TechnicalFlow_LG01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(270 .5 .5)"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
  <g transform="translate(.125 -.125)"><path d="M1.44 1.69h90.709v98.4H1.44z"/><path d="M0 .25h90.709v98.4H0z"/><g transform="translate(24.378 -21.089)"><path fill="url(#TechnicalArchitecture_TechnicalFlow_LG01)" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.25" d="M0 42.946h65.197V98.65H0z"/></g><g transform="translate(5.52 -8.056)"><path stroke="#3f3f3f" stroke-width="4.5" d="M0 16.88h18.24l.2 81.77H0"/></g><g transform="translate(39.685 -25.833)"><path fill="#fff" stroke="#3f3f3f"  stroke-width="5.25" d="M0 52.16v46.49l41.1-23.24L0 52.16Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalItemType"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalItemType-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalItemType"  width="50" height="50" fill="none"  font-size="12" viewBox="0 0 67.197 57.6">
  <defs><linearGradient id="TechnicalArchitecture_TechnicalItemType_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".75"/><stop offset="1" stop-color="#7030a0" stop-opacity=".75"/></linearGradient></defs>
  <g transform="translate(1 -9.08)"><path fill="url(#TechnicalArchitecture_TechnicalItemType_LG01)" stroke="#404040"  d="M0 16.619h65.197V57.6H0z"/><g transform="translate(0 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="36.6" y="66" fill="#3f3f3f" font-family="Calibri" font-size="3em" font-weight="700">T</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalFlowInterfacetype"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalFlowInterfacetype-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalFlowInterfacetype" width="50" height="50" fill="none" viewBox="0 0 113.386 88.535"><defs><linearGradient id="TechnicalArchitecture_TechnicalFlowInterfacetype_LG01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(180 .5 .5)"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
  <g><g transform="translate(6.296)"><path fill="url(#TechnicalArchitecture_TechnicalFlowInterfacetype_LG01)" stroke="#000" stroke-width="4.5" d="M0 4.5h99.444v84.035H0z"/><g transform="translate(1.77 -23.316)"><path stroke="#000"  stroke-width="6" d="M0 88.54h95.83"/></g></g><g transform="translate(58.11 -30.46)"><path fill="#fff" stroke="#3f3f3f"  stroke-width="5.25" d="M0 42.05v46.49l41.1-23.25L0 42.05Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalFlowConnection"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalFlowConnection-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalFlowConnection"  width="50" height="50" fill="none" viewBox="0 0 77.575 69.496">
  <defs id="TechnicalArchitecture_TechnicalFlowConnection_LG"><linearGradient id="TechnicalArchitecture_TechnicalFlowConnection_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#8976ac"/></linearGradient></defs>
  <g transform="translate(3 -3)"><g><g ><g ><g transform="rotate(90 17.008 52.488)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g><g transform="matrix(0 1 1 0 2.079 6)"><path d="M0 69.5h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/></g></g></g><g  transform="translate(48.33 -35.433)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#TechnicalArchitecture_TechnicalFlowConnection_LG01);stroke:#7030a0;stroke-width:4.5"/></g><g transform="translate(4.075 -4.252)"><path d="M0 45.4v24.1l20.91-12.05L0 45.4Z" style="fill:url(#TechnicalArchitecture_TechnicalFlowConnection_LG01);stroke:#7030a0;stroke-width:4.5"/></g></g><g transform="translate(24.98 -16.3)"><path stroke="#7030a0"  stroke-width="3" d="M0 69.5h10.81V38.31h12.54"/></g></g></svg>
</button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalFlowDelegation"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalFlowDelegation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalFlowDelegation" width="50" height="50" fill="none" viewBox="0 0 77.575 80.538">
  <defs id="TechnicalArchitecture_TechnicalFlowDelegation_LG">
    <linearGradient id="TechnicalArchitecture_TechnicalFlowDelegation_LG01" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#8976ac"/>
    </linearGradient>
  </defs>
  <g transform="translate(3 -3)">
    <g>
       <g>
          <g>
             <g transform="rotate(90 17.008 63.53)">
                <path d="M0 80.54h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/>
              </g>
              <g transform="matrix(0 1 1 0 -8.964 17.042)">
                <path d="M0 80.54h34.02" style="stroke:#fff;stroke-linecap:butt;stroke-width:3"/>
              </g>
            </g>
            <g transform="translate(.354 -34.016)"><path stroke-width=".75" d="M0 51.093h31.181v29.445H0z"/>
              <text x="4" y="80.22" fill="#7030a0" font-family="Calibri" font-size="2em" font-weight="700">=</text>
            </g>
          </g>
          <g transform="translate(48.33 -35.433)">
            <path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="fill:url(#TechnicalArchitecture_TechnicalFlowDelegation_LG01);stroke:#7030a0;stroke-width:4.5"/>
          </g>
          <g transform="translate(4.075 -4.252)">
            <path d="M0 56.44v24.1l20.91-12.05L0 56.44Z" style="fill:url(#TechnicalArchitecture_TechnicalFlowDelegation_LG01);stroke:#7030a0;stroke-width:4.5"/>
          </g>
        </g>
        <g transform="translate(24.98 -16.3)"><path stroke="#7030a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0 80.54h10.81V49.36h12.54"/>
      </g>
    </g>
  </svg>
</button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalFlowProperty"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalFlowProperty-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalFlowProperty"  width="50" height="50" fill="none"  viewBox="0 0 59.528 43.016"><defs><linearGradient id="TechnicalArchitecture_TechnicalFlowProperty_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs><g transform="translate(0 -4.5)"><g transform="translate(17.008)"><path fill="url(#TechnicalArchitecture_TechnicalFlowProperty_LG01)" stroke="#7030a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M0 9v34.02l25.51-17.01L0 9Z"/></g></g></svg>
</button>



</fieldset>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_Functional_To_Technical_Path"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-Functional-To-Technical-Path-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_Functional_To_Technical_Path" xml:space="preserve" width="50" height="50" fill="none" viewBox="0 0 267.118 68.693">
  <defs><linearGradient id="TechnicalArchitecture_Functional_To_Technical_Path_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#e3e3e3"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient></defs><g transform="translate(6 -5.64)"><g transform="translate(0 -.36)"><circle cx="28.346" cy="40.346" r="28.346" fill="#7dc034" fill-opacity=".7" stroke="#60a030"  stroke-width="6"/><g transform="translate(198.425)"><circle cx="28.346" cy="40.346" r="28.346" fill="#7030a0" fill-opacity=".7" stroke="#7030a0"  stroke-width="6"/></g><g transform="translate(56.677 -27.402)"><path stroke="#60a030"  stroke-width="6" d="M0 68.69h50.23"/></g><g transform="rotate(-.096 -16081.795 -88052.818)"><path stroke="#7030a0"  stroke-width="6" d="M0 68.69h50.23"/></g></g><g transform="translate(106.907)"><path fill="url(#TechnicalArchitecture_Functional_To_Technical_Path_LG01)" stroke="#000"  stroke-width="4.5" d="M0 13.62v55.07l41.3-27.53L0 13.62Z"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_GroundReference"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-GroundReference-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_GroundReference" width="50" height="50" fill="none" viewBox="0 0 135.496 116.882">
  <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_GroundReference_LG01" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(90 .5 .5)"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
  <g transform="translate(0 -2.25)"><g ><g transform="translate(7.524)"><g id="shape3263-4"><path fill="url(#TechnicalArchitecture_GroundReference_LG01)" stroke="#000"  stroke-width="4.5" d="M0 4.5h118.836v112.382H0z"/></g></g></g><g transform="rotate(90 82.343 100.515)"><path d="M0 116.88h24.72" style="stroke:#000;stroke-width:13"/></g><g  transform="translate(21.685 -70.364)"><path d="M0 116.88h88.58" style="stroke:#000;stroke-width:13"/></g><g  transform="translate(42.661 -44.852)"><path d="M0 116.88h46.41" style="stroke:#000;stroke-width:13"/></g><g  transform="translate(61.37 -22.175)"><path d="M0 116.88h11.18" style="stroke:#000;stroke-width:13"/></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_Logical_To_Technical_Path"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-Logical-To-Technical-Path-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_Logical_To_Technical_Path"  width="50" height="50" fill="none"  viewBox="0 0 267.118 68.693">
  <defs><linearGradient id="TechnicalArchitecture_Logical_To_Technical_Path_LG01" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#e3e3e3"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient></defs>
  <g transform="translate(6 -5.64)"><g transform="translate(0 -.36)"><circle cx="28.346" cy="40.346" r="28.346" fill="#00b0f0" fill-opacity=".7" stroke="#4e66b2"  stroke-width="6"/><g transform="translate(198.425)"><circle cx="28.346" cy="40.346" r="28.346" fill="#7030a0" fill-opacity=".7" stroke="#7030a0"  stroke-width="6"/></g><g transform="translate(56.677 -27.402)"><path stroke="#4e66b2" stroke-linecap="butt" stroke-width="6" d="M0 68.69h50.23"/></g><g transform="rotate(-.096 -16081.795 -88052.818)"><path stroke="#7030a0" stroke-linecap="butt" stroke-width="6" d="M0 68.69h50.23"/></g></g><g transform="translate(106.907)"><path fill="url(#TechnicalArchitecture_Logical_To_Technical_Path_LG01)" stroke="#000"  stroke-width="4.5" d="M0 13.62v55.07l41.3-27.53L0 13.62Z"/></g></g>
  </svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_Media"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-Media-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_Media"  width="50" height="50" fill="none"  viewBox="0 0 91.099 128.055">
  <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_Media_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#7030a0" stop-opacity=".75"/></linearGradient><linearGradient id="TechnicalArchitecture_Media_LG02" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
    <g  transform="translate(5.055 -4.5)"><g ><g ><path fill="url(#TechnicalArchitecture_Media_LG01)" stroke="#7030a0"  stroke-width="4.5" d="M0 64.276h81.544v63.779H0z"/></g><g transform="translate(1.45 -12.918)"><path d="M0 128.06h78.58" /></g></g><g id="group2255-11" transform="translate(11.008 -85.04)"><g  transform="translate(17.008)"><path fill="url(#TechnicalArchitecture_Media_LG02)" stroke="#7030a0"  stroke-width="4.5" d="M0 94.04v34.02l25.51-17.01L0 94.04Z"/></g><g  transform="translate(-9.921 -17.008)"><path d="M0 128.06h26.93" style="stroke:#7030a0;stroke-width:6"/></g><g  transform="translate(42.225 -16.812)"><path d="M0 128.06h27.22" style="stroke:#7030a0;stroke-width:6"/></g></g><g  transform="rotate(-90 -11.504 75.78)"><path stroke="#7030a0" stroke-dasharray="3,6"  stroke-width="3" d="M0 128.06h28.82"/></g><g transform="translate(.945 -26.93)"><path d="M0 128.06h78.58" /></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_NetworkMedia"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-NetworkMedia-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_NetworkMedia"  width="50" height="50" fill="none" viewBox="0 0 90.544 130.89">
  <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_NetworkMedia_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#7030a0" stop-opacity=".75"/></linearGradient><linearGradient id="TechnicalArchitecture_NetworkMedia_LG02" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient><radialGradient id="TechnicalArchitecture_NetworkMedia_LG03" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></radialGradient>
  </defs>
  <g transform="translate(2.422 -4.5)"><g transform="translate(2.078)"><g ><g ><path fill="url(#TechnicalArchitecture_NetworkMedia_LG01)" stroke="#7030a0" stroke-width="4.5" d="M0 67.11h81.544v63.779H0z"/></g></g><g  transform="rotate(-90 -11.504 78.614)"><path stroke="#7030a0" stroke-dasharray="3,6" stroke-width="3" d="M0 130.89h28.82"/></g></g><g transform="translate(7.087 -3.687)"><g ><g  transform="translate(4.06)"><path  stroke-width="4.5" d="M0 70.232h64.141v60.658H0z"/></g></g></g><g  transform="translate(12.756 -8.22)"><g transform="rotate(-26.931 -50.69 78.588)"><path d="M0 130.89h25.03" style="stroke-width:.75"/></g><g id="shape2286-22" transform="rotate(32.416 43.715 152.117)"><path d="M0 130.89h26.44" style="stroke-width:.75"/></g><g  transform="translate(40.51 -30.364)"><path d="M0 114.482h18.191v16.408H0z" style="fill:url(#TechnicalArchitecture_NetworkMedia_LG03);stroke-width:.75"/></g><g  transform="translate(0 -15.024)"><path d="M0 114.482h18.191v16.408H0z" style="fill:url(#TechnicalArchitecture_NetworkMedia_LG03);stroke-width:.75"/></g><g transform="translate(40.51)"><path d="M0 114.482h18.191v16.408H0z" style="fill:url(#TechnicalArchitecture_NetworkMedia_LG03);stroke-width:.75"/></g></g><g  transform="translate(0 -87.874)"><g  transform="translate(12.756)"><g transform="translate(19.843)"><path fill="url(#TechnicalArchitecture_NetworkMedia_LG02)" stroke="#7030a0"  stroke-width="4.5" d="M0 96.87v34.02l25.51-17.01L0 96.87Z"/></g><g  transform="translate(-9.921 -17.008)"><path d="M0 130.89h26.93" /></g><g transform="translate(42.225 -16.812)"><path d="M0 130.89h27.22" style="stroke:#7030a0;stroke-width:4.5"/></g></g><g transform="translate(66.848 -8.504)"><path d="M0 114.482h18.191v16.408H0z" style="fill:url(#TechnicalArchitecture_NetworkMedia_LG03);stroke-width:.75"/></g><g  transform="translate(0 -8.804)"><path d="M0 114.482h18.191v16.408H0z" style="fill:url(#TechnicalArchitecture_NetworkMedia_LG03);stroke-width:.75"/></g></g></g></svg>
</button>


<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalNetworkConnection"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalNetworkConnection-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalNetworkConnection"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 77.575 69.496">
  <defs id="TechnicalArchitecture_TechnicalNetworkConnection_LG"><linearGradient id="TechnicalArchitecture_TechnicalNetworkConnection_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7030a0"/></linearGradient></defs>
    <g  transform="translate(3 -3)"><g id="group2721-2"><g ><g  transform="translate(.076 -5.67)"><path d="M0 47.953h24.775v21.543H0z" style="fill:url(#TechnicalArchitecture_TechnicalNetworkConnection_LG01);stroke:#7030a0"/></g><g transform="translate(24.85 -14.173)"><path stroke="#7030a0"  stroke-width="3" d="m0 69.5 21.87-34.02"/></g><g  transform="rotate(90 17.008 52.488)"><path d="M0 69.5h34.02" style="stroke-width:3;stroke:#fff;stroke-linecap:butt"/></g><g  transform="matrix(-1 0 0 1 71.5 -37.417)"><path d="M0 47.953h24.775v21.543H0z" style="fill:url(#TechnicalArchitecture_TechnicalNetworkConnection_LG01);stroke:#7030a0"/></g><g  transform="matrix(0 1 1 0 2.079 6)"><path d="M0 69.5h34.02" style="stroke-width:2;stroke:#fff;stroke-linecap:but"/></g></g></g><g  transform="translate(.354 -35.167)"> stroke-width=".75" d="M0 45.136h42.52v24.36H0z"/><text x="4" y="66.32" fill="#7030a0" font-family="Cooper Black" font-size="2.5em" font-weight="700">N</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalPath"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalPath-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="TechnicalArchitecture_TechnicalPath"  width="50" height="50" fill="none" viewBox="0 0 267.118 68.693">
  <style>.st1{fill:url(#TechnicalArchitecture_TechnicalPath_LG01);stroke-dasharray:6,12}.st1,.st2{stroke:#7030a0;stroke-linecap:round;stroke-linejoin:round;stroke-width:6}</style>
  <defs id="Patterns_And_Gradients"><linearGradient id="TechnicalArchitecture_TechnicalPath_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#7030a0" stop-opacity=".7"/></linearGradient><linearGradient id="grad30-15" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>
    <g id="group2184-1" transform="translate(6 -6)"><g id="shape2185-2"><circle cx="28.346" cy="40.346" r="28.346" class="st1"/></g><g id="shape2186-6" transform="translate(99.213)"><circle cx="28.346" cy="40.346" r="28.346" class="st1"/></g><g id="shape2187-9" transform="translate(198.425)"><circle cx="28.346" cy="40.346" r="28.346" class="st1"/></g><g id="shape2188-12" transform="rotate(.091 17336.293 35853.924)"><path d="M0 68.69h42.55" class="st2"/></g><g id="shape2189-17" transform="rotate(.091 17339.539 98521.102)"><path d="M0 68.69h42.55" class="st2"/></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("TechnicalArchitecture_TechnicalRestrictedPackage"), { position: 'left', className: 'w2ui-light' })}
id='TechnicalArchitecture-TechnicalRestrictedPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg"id="TechnicalArchitecture_TechnicalRestrictedPackage"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 181.346">
  <defs><linearGradient id="TechnicalArchitecture_TechnicalRestrictePackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".85"/><stop offset="1" stop-color="#7030a0" stop-opacity=".85"/></linearGradient></defs>
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#TechnicalArchitecture_TechnicalRestrictePackage_LG01)" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(6.772 -5.498)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#0c0c0c" font-family="Calibri" font-size="7.5em" font-weight="700">R</text></g></g></svg>
</button>

</fieldset>

<fieldset id="moflt_requirements_fieldset">
<legend>R-MOFLT Requirements</legend> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Requirements_Chapter"), { position: 'left', className: 'w2ui-light' })}
id='Requirements-Chapter-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Requirements_Chapter"  width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 229.534 181.346">
  <defs><linearGradient id="Requirements_Chapter_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#bfbfbf"/></linearGradient></defs>
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#Requirements_Chapter_LG01)" stroke="#595959" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(5.937 -5.82)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#595959" font-family="Calibri" font-size="7.5em" font-weight="700">C</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Requirements_RestrictedRequirementsPackage"), { position: 'left', className: 'w2ui-light' })}
id='Requirements-RestrictedRequirementsPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Requirements_RestrictedRequirementsPackage" width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 229.534 181.346">
  <defs><linearGradient id="Requirements_RestrictedRequirementsPackage_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#bfbfbf"/></linearGradient></defs>
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#Requirements_RestrictedRequirementsPackage_LG01)" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(5.937 -5.82)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#595959" font-family="Calibri" font-size="7.5em" font-weight="700">R</text></g></g></svg>
</button>

</fieldset>

<fieldset id="moflt_parametric_fieldset">
<legend>R-MOFLT Parametric</legend> 

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_ConstantParameter"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-ConstantParameter-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_ConstantParameter"  width="50" height="50" fill="none" font-size="12" overflow="visible" viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="Parametrics_ConstantParameter_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity=".75"/></linearGradient></defs>
  <g transform="translate(3 -9.08)"><path fill="url(#Parametrics_ConstantParameter_LG01)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(1.417 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="34.96" y="66" fill="#000" font-family="Calibri" font-size="3em" font-weight="700">C</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_ConstantBlockEquation"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-ConstantBlockEquation-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_ConstantBlockEquation"  xml:space="preserve" width="50" height="50" fill="none" fill-rule="evenodd" stroke-linecap="square" stroke-miterlimit="3" color-interpolation-filters="sRGB" font-size="12" overflow="visible" viewBox="0 0 135.496 121.382"><style>.st2,.st3{stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6}.st3{fill:none;stroke:none;stroke-width:.75}</style><defs id="Patterns_And_Gradients"><linearGradient id="grad28-11" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity=".6"/></linearGradient></defs><g id="group2490-1" transform="translate(0 -4.5)"><g id="group2481-2"><g id="group2482-3"><g id="group2484-5" transform="translate(7.524)"><g id="shape2485-6"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g></g><g id="shape2486-8" transform="translate(8.504 -15.307)"><path d="M0 121.38h114.52" class="st2"/></g><g id="shape2487-13" transform="translate(7.937 -32.374)"><path d="M0 121.38h115.09" class="st2"/></g></g></g><g id="shape2488-17" transform="translate(62.079 -33.514)"><path d="M0 44.846h62.362v76.535H0z" class="st3"/><text x="9.26" y="97.51" fill="#000" font-family="Calibri" font-size="4em" font-weight="700">{ }</text></g><g id="shape2489-20" transform="translate(13.48 -39.183)"><path d="M0 53.35h54.268v68.031H0z" class="st3"/><text x="5.75" y="105.52" fill="#000" font-family="Times New Roman" font-size="5em" font-weight="700">∑ </text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_DesignObjectiveConstraint"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-DesignObjectiveConstraint-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_DesignObjectiveConstraint" width="50" height="50" fill="none"  font-size="12" viewBox="0 0 135.496 121.382">
  <defs id="Patterns_And_Gradients"><linearGradient id="Parametrics_DesignObjectiveConstraint_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e46fe8"/></linearGradient></defs>
  <g><g id="group2444-2"><g ><g><g><g transform="translate(7.524)"><g><path fill="url(#Parametrics_DesignObjectiveConstraint_LG01)" stroke="#000"  stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6"/>/></g><g transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6"/></g></g></g></g></g></g><g transform="translate(54.425 -37.411)"><path  stroke-width=".75" d="M0 49.098h70.173v72.284H0z"/><text x="9.96" y="101.74" fill="#000" font-family="Calibri" font-size="4.583em" font-weight="700">{ }</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_DesignObjectiveParameter"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-DesignObjectiveParameter-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_DesignObjectiveParameter"  width="50" height="50" fill="none" fill-rule="evenodd" stroke-linecap="square" stroke-miterlimit="3" color-interpolation-filters="sRGB" font-size="12" overflow="visible" viewBox="0 0 141.272 124.575"><defs><linearGradient id="Parametrics_DesignObjectiveParameter_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e46fe8"/></linearGradient></defs>
  <g><path d="M0 1.5h136.063v123.075H0z"/><g transform="translate(0 -15.55)"><path d="M0 34.594h136.772v89.981H0z"/><g transform="translate(31.414 -8.065)"><circle cx="36.706" cy="87.869" r="36.706" fill="url(#Parametrics_DesignObjectiveParameter_LG01)" stroke="#000"  stroke-width="2.25"/></g><g transform="translate(51.378 -20.026)"><path stroke="#000"  stroke-width="6" d="m0 101.46 16.03 23.12 17.99-45.76"/></g></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_DesignVariable"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-DesignVariable-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_DesignVariable" xml:space="preserve" width="50" height="50" fill="none"  font-size="12" viewBox="0 0 71.197 57.6">
  <defs><linearGradient id="Parametrics_DesignVariable_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0f0f0" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity=".75"/></linearGradient></defs>
  <g transform="translate(3 -9.08)"><path fill="url(#Parametrics_DesignVariable_LG01)" stroke="#000"  stroke-width="3" d="M0 16.619h65.197V57.6H0z"/><g transform="translate(1.417 -13.721)"><path d="M0 45.6h62.362v12H0z"/><text x="31.98" y="66" fill="#000" font-family="Calibri" font-size="3em" font-weight="700">V</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_MoEConstraint"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-MoEConstraint-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_MoEConstraint" width="50" height="50" fill="none"  font-size="12"  viewBox="0 0 135.496 121.382">
  <defs id="Patterns_And_Gradients"><linearGradient id="Parametrics_MoEConstraint_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f7b03c"/></linearGradient></defs>
  <g ><g><g><g ><g ><g  transform="translate(7.524)"><g ><path fill="url(#Parametrics_MoEConstraint_LG01)" stroke="#000"  stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52"/></g><g  transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" style="stroke:#000;stroke-width:6"/></g></g></g></g></g></g><g  transform="translate(54.425 -37.411)"><path  stroke-width=".75" d="M0 49.098h70.173v72.284H0z"/><text x="9.96" y="101.74" fill="#000" font-family="Calibri" font-size="4.583em" font-weight="700">{ }</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_MoEParameter"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-MoEParameter-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_MoEParameter" width="50" height="50" fill="none" viewBox="0 0 140.563 124.575">
  <defs><linearGradient id="Parametrics_MoEParameter_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fea207"/>
  </linearGradient></defs>
  <g><path d="M0 1.5h136.063v123.075H0z"/><g transform="translate(0 -15.55)"><path d="M0 34.594h136.772v89.981H0z"/><g transform="translate(31.414 -8.065)"><circle cx="36.706" cy="87.869" r="36.706" fill="url(#Parametrics_MoEParameter_LG01)" stroke="#000"  stroke-width="2.25"/></g><g transform="translate(51.378 -20.026)"><path stroke="#000"  stroke-width="6" d="m0 101.46 16.03 23.12 17.99-45.76"/></g></g></g></svg>
  </button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_MoPConstraint"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-MoPConstraint-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_MoPConstraint"  width="50" height="50" fill="none"  stroke-miterlimit="3"  font-size="12"  viewBox="0 0 135.496 121.382"><style>.st2{stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6}</style><defs id="Patterns_And_Gradients"><linearGradient id="Parametrics_MoPConstraint_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#24fd45"/></linearGradient></defs><g id="group2421-1" transform="translate(0 -4.5)"><g id="group2422-2"><g id="group2423-3"><g id="group2424-4"><g id="group2425-5"><g id="group2426-6" transform="translate(7.524)"><g id="shape2427-7"><path fill="url(#Parametrics_MoPConstraint_LG01)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g id="shape2428-11" transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52" class="st2"/></g><g id="shape2429-15" transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" class="st2"/></g></g></g></g></g></g><g id="shape2430-19" transform="translate(54.425 -37.411)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width=".75" d="M0 49.098h70.173v72.284H0z"/><text x="9.96" y="101.74" fill="#000" font-family="Calibri" font-size="4.583em" font-weight="700">{ }</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_ParametricAnalysisContext"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-ParametricAnalysisContext-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_ParametricAnalysisContext" width="50" height="50" fill="none" font-size="12"  viewBox="0 0 135.496 121.382"><<defs id="Patterns_And_Gradients"><linearGradient id="Parametrics_ParametricAnalysisContext_LG01" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#24fd45"/></linearGradient></defs><g id="group2421-1" transform="translate(0 -4.5)"><g id="group2422-2"><g id="group2423-3"><g id="group2424-4"><g id="group2425-5"><g id="group2426-6" transform="translate(7.524)"><g id="shape2427-7"><path fill="url(#Parametrics_ParametricAnalysisContext_LG01)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g><g id="shape2428-11" transform="translate(2.114 -16.948)"><path d="M0 121.38h114.52" class="st2"/></g><g id="shape2429-15" transform="translate(1.547 -34.016)"><path d="M0 121.38h115.09" class="st2"/></g></g></g></g></g></g><g id="shape2430-19" transform="translate(54.425 -37.411)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width=".75" d="M0 49.098h70.173v72.284H0z"/><text x="9.96" y="101.74" fill="#000" font-family="Calibri" font-size="4.583em" font-weight="700">{ }</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_ParametricRestrictedPackage"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-ParametricRestrictedPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_ParametricRestrictedPackage"  width="50" height="50" fill="none" font-size="12"  viewBox="0 0 229.534 181.346">
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" s stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="#fff" stroke="#595959" s stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(5.087 -6.065)"><path d="M0 100.387h81.669v80.959H0z"/><text x="15.5" y="167.87" fill="#7f7f7f" font-family="Calibri" font-size="7.5em" font-weight="700">R</text></g></g></svg>
</button>



<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_ParametricViewpointPackage"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-ParametricViewpointPackage-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_ParametricViewpointPackage"  width="50" height="50" fill="none" font-size="12" viewBox="0 0 229.534 181.346"><defs><linearGradient id="Parametrics_ParametricViewpointPackage_LG01" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#f0f0f0"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>
  <g transform="translate(12 -13.44)"><path fill="#cdcdcd" fill-opacity=".5" stroke="#cdcdcd" stroke-opacity=".5" stroke-width="12" d="M1.44 26.88v155.91h204.09V63.73H103.49L69.47 26.88H1.44Z"/><path fill="url(#Parametrics_ParametricViewpointPackage_LG01)" stroke="#595959" stroke-width="12" d="M0 25.44v155.91h204.09V62.29H102.05L68.03 25.44H0Z"/><g transform="translate(8.504 -8.504)"><path fill="#fff" d="M0 79.298h192.756v102.047H0z"/><text x="11.32" y="160.32" fill="#7f7f7f" font-family="Calibri" font-size="6em" font-weight="700">PAR</text></g></g></svg>
</button>

<button ${w2utils.tooltip(paletteRmoflpIconDescription("Parametrics_RequirementVerification"), { position: 'left', className: 'w2ui-light' })}
id='Parametrics-RequirementVerification-button' class="el-button" data-toggle="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" id="Parametrics_RequirementVerification" xml:space="preserve" width="50" height="50" fill="none" fill-rule="evenodd" stroke-linecap="square" stroke-miterlimit="3" color-interpolation-filters="sRGB" font-size="12" overflow="visible" viewBox="0 0 135.496 121.382"><style>.st2{stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6}</style>
  <defs id="Patterns_And_Gradients"><linearGradient id="grad28-10" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity=".6"/></linearGradient></defs>
  <g id="group2480-1" transform="translate(0 -4.5)"><g id="group2475-2"><g id="group2477-4" transform="translate(7.524)"><g id="shape2478-5"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M0 9h118.836v112.382H0z"/></g></g><g id="shape2491-7" transform="translate(8.504 -15.307)"><path d="M0 121.38h114.52" class="st2"/></g><g id="shape2492-12" transform="translate(7.937 -32.374)"><path d="M0 121.38h115.09" class="st2"/></g></g><g id="shape2479-16" transform="translate(46.278 -45.931)"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" d="m0 94.47 18.66 26.91L39.61 68.1"/></g></g></svg>
</button>

</fieldset>

</div>`

globalPalette =globalPalette +rmoflpFieldSet;


function paletteRmoflpIconDescription(object){
  switch (object) {
 
case "Foundation_SoI":if (paletteTooltipsOn){return Foundation_soi_html } else {return "Foundation: SoI"};break; 
case "Foundation_TransversalPackage":if (paletteTooltipsOn){return Foundation_TransversalPackage_html } else {return "Transversal Package"};break; 
case "Foundation_SoIViewpoint":if (paletteTooltipsOn){return Foundation_SoIViewpoint_html } else {return "Foundation: SoI Viewpoint"};break; 
case "Foundation_ViewpointSearcher":if (paletteTooltipsOn){return Foundation_ViewpointSearcher_html } else {return "Foundation: Viewpoint Searcher"};break; 
case "Foundation_Interfaces_Flow":if (paletteTooltipsOn){return Foundation_Interfaces_Flow_html } else {return "Foundation: Interface Flow"};break; 
case "Foundation_Interfaces_FlowConnection":if (paletteTooltipsOn){return Foundation_Interfaces_FlowConnection_html } else {return "Foundation: Interfaces Flow Connection"};break; 
case "Foundation_Interfaces_FlowDelegation":if (paletteTooltipsOn){return Foundation_Interfaces_FlowDelegation_html } else {return "Foundation: Interfaces FlowDelegation"};break; 
case "Foundation_Interfaces_FlowType":if (paletteTooltipsOn){return Foundation_Interfaces_FlowType_html } else {return "Foundation: Interfaces Flow Type"};break; 
case "Foundation_Interfaces_Interface":if (paletteTooltipsOn){return Foundation_Interfaces_Interface_html } else {return "Foundation Interfaces Interface"};break; 
case "Foundation_Interfaces_InterfaceType":if (paletteTooltipsOn){return Foundation_Interfaces_InterfaceType_html } else {return "Foundation: Interfaces Interface Type"};break; 
case "Foundation_Structure_Category":if (paletteTooltipsOn){return Foundation_Structure_Category_html } else {return "Foundation: Structure Category"};break; 
case "Foundation_Structure_Classification":if (paletteTooltipsOn){return Foundation_Structure_Classification_html } else {return "Foundation Structure Classification"};break; 
case "Missions_Capability":if (paletteTooltipsOn){return Missions_Capability_html } else {return "Missions: Capability"};break; 
case "Missions_CapabilityContribution":if (paletteTooltipsOn){return Missions_CapabilityContribution_html } else {return "Missions: Capability Contribution"};break; 
case "Missions_CapabilityUsage":if (paletteTooltipsOn){return Missions_CapabilityUsage_html } else {return "Missions: Capability Usage"};break; 
case "Missions_CapabilityCategory":if (paletteTooltipsOn){return Missions_CapabilityCategory_html } else {return "Missions: Capability Category"};break; 
case "Missions_CapabilityClassification":if (paletteTooltipsOn){return Missions_CapabilityClassification_html } else {return "Missions: Capability Classification"};break; 
case "Missions_EntityUsage":if (paletteTooltipsOn){return Missions_EntityUsage_html } else {return "Missions Entity Usage"};break; 
case "Missions_LifeCycle":if (paletteTooltipsOn){return Missions_LifeCycle_html } else {return "Missions: LifeCycle"};break; 
case "Missions_LifeCycleSignal":if (paletteTooltipsOn){return Missions_LifeCycleSignal_html } else {return "Missions: LifeCycle Signal"};break; 
case "Missions_LifeCycleStage":if (paletteTooltipsOn){return Missions_LifeCycleStage_html } else {return "Missions: LifeCycle Stage"};break; 
case "Missions_Mission":if (paletteTooltipsOn){return Missions_Mission_html } else {return "Missions: Mission"};break; 
case "Missions_MissionCategory":if (paletteTooltipsOn){return Missions_MissionCategory_html } else {return "Missions: Mission Category"};break; 
case "Missions_MissionEntity":if (paletteTooltipsOn){return Missions_MissionEntity_html } else {return "Missions: Mission Entity"};break; 
case "Missions_MissionEntityCategory":if (paletteTooltipsOn){return Missions_MissionEntityCategory_html } else {return "Missions: Mission Entity Category"};break; 
case "Missions_MissionEntityClassification":if (paletteTooltipsOn){return Missions_MissionEntityClassification_html } else {return "Missions: Mission Entity Classification"};break; 
case "Missions_MissionClassification":if (paletteTooltipsOn){return Missions_MissionClassification_html } else {return "Missions: Mission Classification"};break; 
case "Missions_MissionConcept":if (paletteTooltipsOn){return Missions_MissionConcept_html } else {return "Missions: Mission Concept"};break; 
case "Missions_MissionPhase":if (paletteTooltipsOn){return Missions_MissionPhase_html } else {return "Missions: Mission Phase"};break; 
case "Missions_MissionPhaseBehavior":if (paletteTooltipsOn){return Missions_MissionPhaseBehavior_html } else {return "Missions: Mission Phase Behavior"};break; 
case "Missions_MissionPlanSignal":if (paletteTooltipsOn){return Missions_MissionPlanSignal_html } else {return "Missions: Mission Plan Signal"};break; 
case "Missions_MissionRestrictedPackage":if (paletteTooltipsOn){return Missions_MissionRestrictedPackage_html } else {return "Missions: Mission Restricted Package"};break; 
case "Missions_Task":if (paletteTooltipsOn){return Missions_Task_html } else {return "Missions: Task"};break; 
case "Missions_MissionTaskInvocation":if (paletteTooltipsOn){return Missions_MissionTaskInvocation_html } else {return "Missions: Mission Task Invocation"};break; 
case "Missions_MissionViewpointPackage":if (paletteTooltipsOn){return Missions_MissionViewpointPackage_html } else {return "Missions: Mission Viewpoint Package"};break; 
case "Missions_Objective":if (paletteTooltipsOn){return Missions_Objective_html } else {return "Missions: Objective"};break; 
case "Missions_Stakeholder":if (paletteTooltipsOn){return Missions_Stakeholder_html } else {return "Missions: Stakeholder"};break; 
case "Operations_OperationalViewpointPackage":if (paletteTooltipsOn){return Operations_OperationalViewpointPackage_html } else {return "Operations: Operational Viewpoint Package"};break; 
case "Operations_OperationalContext":if (paletteTooltipsOn){return Operations_OperationalContext_html } else {return "Operations: Operational Context"};break; 
case "Operations_OperationalSystem":if (paletteTooltipsOn){return Operations_OperationalSystem_html } else {return "Operations: Operational System"};break; 
case "Operations_OperationalSystemUsage":if (paletteTooltipsOn){return Operations_OperationalSystemUsage_html } else {return "Operations: Operational System Usage"};break; 
case "Operations_OperationalConcept":if (paletteTooltipsOn){return Operations_OperationalConcept_html } else {return "Operations: Operational Concept"};break; 
case "Operations_OperationalFlow":if (paletteTooltipsOn){return Operations_OperationalFlow_html } else {return "Operations: Operational Flow"};break; 
case "Operations_OperationalFlowConnection":if (paletteTooltipsOn){return Operations_OperationalFlowConnection_html } else {return "Operations: Operational Flow Connection"};break; 
case "Operations_OperationalFlowTypeCategory":if (paletteTooltipsOn){return Operations_OperationalFlowTypeCategory_html } else {return "Operations: Operational Flow Type Category"};break; 
case "Operations_OperationalFlowTypeClassification":if (paletteTooltipsOn){return Operations_OperationalFlowTypeClassification_html } else {return "Operations: Operational Flow Type Classification"};break; 
case "Operations_OperationalFlowProperty":if (paletteTooltipsOn){return Operations_OperationalFlowProperty_html } else {return "Operations: Operational Flow Property"};break; 
case "Operations_OperationalFlowDelegation":if (paletteTooltipsOn){return Operations_OperationalFlowDelegation_html } else {return "Operations: Operational Flow Delegation"};break; 
case "Operations_OperationalFlowInterfaceType":if (paletteTooltipsOn){return Operations_OperationalFlowInterfaceType_html } else {return "Operations: Operational Flow Interface Type"};break; 
case "Operations_OperationalFlowType":if (paletteTooltipsOn){return Operations_OperationalFlowType_html } else {return "Operations: Operational Flow Type"};break; 
case "Operations_OperationalPhase":if (paletteTooltipsOn){return Operations_OperationalPhase_html } else {return "Operations: Operational Phase"};break; 
case "Operations_OperationalPhaseBehavior":if (paletteTooltipsOn){return Operations_OperationalPhaseBehavior_html } else {return "Operations Operational Phase Behavior"};break; 
case "Operations_OperationalPlanSignal":if (paletteTooltipsOn){return Operations_OperationalPlanSignal_html } else {return "Operations: Operational Plan Signal"};break; 
case "Operations_OperationalRestrictedPackage":if (paletteTooltipsOn){return Operations_OperationalRestrictedPackage_html } else {return "Operations: Operational RestrictedPackage"};break; 
case "Operations_OperationalTask":if (paletteTooltipsOn){return Operations_OperationalTask_html} else {return "Operations: Operational Task"};break; 
case "Operations_OperationalTaskInvocation":if (paletteTooltipsOn){return Operations_OperationalTaskInvocation_html} else {return "Operations: Operational Task Invocation"};break; 
case "Functions_EnergyFlow":if (paletteTooltipsOn){return Functions_EnergyFlow_html} else {return "Functions: Energy Flow"};break; 
case "Functions_Function":if (paletteTooltipsOn){return Functions_Function_html} else {return "Functions: Function"};break; 
case "Functions_FunctionalContext":if (paletteTooltipsOn){return Functions_FunctionalContext_html} else {return "Functions: Functional Context"};break; 
case "Functions_FunctionalFlow":if (paletteTooltipsOn){return Functions_FunctionalFlow_html} else {return "Functions: Functional Flow"};break; 
case "Functions_FunctionalFlowConnection":if (paletteTooltipsOn){return Functions_FunctionalFlowConnection_html} else {return "Functions: Functional Flow Connection"};break; 
case "Functions_FunctionalFlowDelegation":if (paletteTooltipsOn){return Functions_FunctionalFlowDelegation_html} else {return "Functions: Functional Flow Delegation"};break; 
case "Functions_FunctionalFlowInterfaceType":if (paletteTooltipsOn){return Functions_FunctionalFlowInterfaceType_html} else {return "Functions: Functional Flow Interface Type"};break; 
case "Functions_FunctionalFlowProperty":if (paletteTooltipsOn){return Functions_FunctionalFlowProperty_html} else {return "Functions: Functional Flow Property"};break; 
case "Functions_FunctionalMode":if (paletteTooltipsOn){return Functions_FunctionalMode_html} else {return "Functions: Functional Mode"};break; 
case "Functions_FunctionalPart":if (paletteTooltipsOn){return Functions_FunctionalPart_html} else {return "Functions: Functional Part"};break; 
case "Functions_FunctionalRestrictedPackage":if (paletteTooltipsOn){return Functions_FunctionalRestrictedPackage_html} else {return "Functions: Functional Restricted Package"};break; 
case "Functions_FunctionalViewpointPackage":if (paletteTooltipsOn){return Functions_FunctionalViewpointPackage_html} else {return "Functions: Functional Viewpoint Package"};break; 
case "Functions_FunctionBehavior":if (paletteTooltipsOn){return Functions_FunctionBehavior_html} else {return "Functions: Function Behavior"};break; 
case "Functions_FunctionBehaviorInvocation":if (paletteTooltipsOn){return Functions_FunctionBehaviorInvocation_html} else {return "Functions: Function Behavior Invocation"};break; 
case "Functions_FunctionCategory":if (paletteTooltipsOn){return Functions_FunctionCategory_html} else {return "Functions: Function Category"};break; 
case "Functions_FunctionClassification":if (paletteTooltipsOn){return Functions_FunctionClassification_html} else {return "Functions: Function Classification"};break; 
case "Functions_FunctionInvocation":if (paletteTooltipsOn){return Functions_FunctionInvocation_html} else {return "Functions: Function Invocation Type"};break; 
case "Functions_FlowType":if (paletteTooltipsOn){return Functions_FlowType_html} else {return "Functions: Functional flow Type"};break; 
case "Functions_ModalFunctionBehaviorInvocation":if (paletteTooltipsOn){return Functions_ModalFunctionBehaviorInvocation_html} else {return "Functions: Modal Function Invocation"};break; 
case "Functions_OperationalTaskRealization":if (paletteTooltipsOn){return Functions_OperationalTaskRealization_html} else {return "Functions: Operational Task realization"};break; 
case "Functions_SignalItemType":if (paletteTooltipsOn){return Functions_SignalItemType_html} else {return "Functions: Signal Item Type"};break; 
case "LogicalArchitecture_LogicalCategory":if (paletteTooltipsOn){return LogicalArchitecture_LogicalCategory_html} else {return "LogicalArchitecture: Logical Category"};break; 
case "LogicalArchitecture_LogicalClassification":if (paletteTooltipsOn){return LogicalArchitecture_LogicalClassification_html} else {return "LogicalArchitecture: Logical Classification"};break; 
case "LogicalArchitecture_LogicalComponent":if (paletteTooltipsOn){return LogicalArchitecture_LogicalComponent_html} else {return "LogicalArchitecture: Logical Component"};break; 
case "LogicalArchitecture_LogicalContext":if (paletteTooltipsOn){return LogicalArchitecture_LogicalContext_html} else {return "LogicalArchitecture: Logical Context"};break; 
case "LogicalArchitecture_LogicalInterface":if (paletteTooltipsOn){return LogicalArchitecture_LogicalInterface_html} else {return "LogicalArchitecture: Logical Interface"};break; 
case "LogicalArchitecture_LogicalInterfaceConnection":if (paletteTooltipsOn){return LogicalArchitecture_LogicalInterfaceConnection_html} else {return "LogicalArchitecture: Logical Interface Connection"};break; 
case "LogicalArchitecture_LogicalStateMachine":if (paletteTooltipsOn){return LogicalArchitecture_LogicalStateMachine_html} else {return "LogicalArchitecture: Logical State Machine"};break; 
case "LogicalArchitecture_LogicalState":if (paletteTooltipsOn){return LogicalArchitecture_LogicalState_html} else {return "LogicalArchitecture: Logical State "};break; 
case "LogicalArchitecture_LogicalInterfaceType":if (paletteTooltipsOn){return LogicalArchitecture_LogicalInterfaceType_html} else {return "LogicalArchitecture: Logical Interface Type"};break; 
case "LogicalArchitecture_LogicalRestrictedPackage":if (paletteTooltipsOn){return LogicalArchitecture_LogicalRestrictedPackage_html} else {return "LogicalArchitecture: Logical Restricted Package"};break; 
case "LogicalArchitecture_LogicalViewpointPackage":if (paletteTooltipsOn){return LogicalArchitecture_LogicalViewpointPackage_html} else {return "LogicalArchitecture: Logical Viewpoint Package"};break; 
case "TechnicalArchitecture_Functional_To_Technical_Path":if (paletteTooltipsOn){return TechnicalArchitecture_Functional_To_Technical_Path_html} else {return "TechnicalArchitecture:Functional To Technical Path"};break; 
case "TechnicalArchitecture_GroundReference":if (paletteTooltipsOn){return TechnicalArchitecture_GroundReference_html} else {return "TechnicalArchitecture: Ground Reference"};break; 
case "TechnicalArchitecture_Logical_To_Technical_Path":if (paletteTooltipsOn){return TechnicalArchitecture_Logical_To_Technical_Path_html} else {return "TechnicalArchitecture: Logical To Technical Path"};break; 
case "TechnicalArchitecture_Media":if (paletteTooltipsOn){return TechnicalArchitecture_Media_html} else {return "TechnicalArchitecture: Media"};break; 
case "TechnicalArchitecture_NetworkMedia":if (paletteTooltipsOn){return TechnicalArchitecture_NetworkMedia_html} else {return "TechnicalArchitecture: Network Media"};break; 
case "TechnicalArchitecture_TechnicalCategory":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalCategory_html} else {return "TechnicalArchitecture: Technical Category"};break; 
case "TechnicalArchitecture_TechnicalClassification":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalClassification_html} else {return "TechnicalArchitecture: Technical Classification"};break; 
case "TechnicalArchitecture_TechnicalComponent":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalComponent_html} else {return "TechnicalArchitecture: Technical Component"};break; 
case "TechnicalArchitecture_TechnicalContext":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalContext_html} else {return "TechnicalArchitecture: Technical Context"};break; 
case "TechnicalArchitecture_TechnicalFlow":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalFlow_html} else {return "TechnicalArchitecture: Technical Flow"};break; 
case "TechnicalArchitecture_TechnicalItemType":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalItemType_html} else {return "Technical Architecture: Technical flow Type"};break; 
case "TechnicalArchitecture_TechnicalFlowConnection":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalFlowConnection_html} else {return "TechnicalArchitecture: Tecnical Flow Connection"};break; 
case "TechnicalArchitecture_TechnicalFlowDelegation":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalFlowDelegation_html} else {return "TechnicalArchitecture: Technical Flow Delegation"};break; 
case "TechnicalArchitecture_TechnicalFlowInterfacetype":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalFlowInterfacetype_html} else {return "TechnicalArchitecture: Technical Flow Interface type"};break; 
case "TechnicalArchitecture_TechnicalFlowProperty":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalFlowProperty_html} else {return "TechnicalArchitecture: Technical Flow Property"};break; 
case "TechnicalArchitecture_TechnicalInterface":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalInterface_html} else {return "TechnicalArchitecture: Technical Interface"};break; 
case "TechnicalArchitecture_TechnicalInterfaceConnection":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalInterfaceConnection_html} else {return "TechnicalArchitecture: Technical Interface Connection"};break;
case "TechnicalArchitecture_TechnicalStateMachine":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalStateMachine_html} else {return "TechnicalArchitecture: Technical State Machine"};break; 
case "TechnicalArchitecture_TechnicalState":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalState_html} else {return "TechnicalArchitecture: Technical State"};break; 
case "TechnicalArchitecture_TechnicalInterfaceType":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalInterfaceType_html} else {return "TechnicalArchitecture: Technical InterfaceType"};break; 
case "TechnicalArchitecture_TechnicalNetworkConnection":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalNetworkConnection_html} else {return "TechnicalArchitecture_TechnicalNetworkConnection"};break; 
case "TechnicalArchitecture_TechnicalPart":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalPart_html} else {return "TechnicalArchitectureTechnical Part"};break; 
case "TechnicalArchitecture_TechnicalPath":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalPath_html} else {return "TechnicalArchitecture: Technical Path"};break; 
case "TechnicalArchitecture_TechnicalRestrictedPackage":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalRestrictedPackage_html} else {return "TechnicalArchitecture: Technical Restricted Package"};break; 
case "TechnicalArchitecture_TechnicalViewpointPackage":if (paletteTooltipsOn){return TechnicalArchitecture_TechnicalViewpointPackage_html} else {return "TechnicalArchitecture: Technical Viewpoint Package"};break; 
case "Requirements_Chapter":if (paletteTooltipsOn){return Requirements_Chapter_html} else {return "Requirements: Chapter"};break; 
case "Requirements_RestrictedRequirementsPackage":if (paletteTooltipsOn){return Requirements_RestrictedRequirementsPackage_html} else {return "Requirements: Restricted Requirements Package"};break; 
case "Parametrics_ConstantParameter":if (paletteTooltipsOn){return Parametrics_ConstantParameter_html} else {return "Parametrics: Constant Parameter"};break; 
case "Parametrics_ConstantBlockEquation":if (paletteTooltipsOn){return Parametrics_ConstantBlockEquation_html} else {return "Parametrics: Constant Block Equation"};break; 
case "Parametrics_DesignObjectiveConstraint":if (paletteTooltipsOn){return Parametrics_DesignObjectiveConstraint_html} else {return "Parametrics: Design Objective Constraint"};break; 
case "Parametrics_DesignObjectiveParameter":if (paletteTooltipsOn){return Parametrics_DesignObjectiveParameter_html} else {return "Parametrics: Design Objective Parameter"};break; 
case "Parametrics_DesignVariable":if (paletteTooltipsOn){return Parametrics_DesignVariable_html} else {return "Parametrics: Design Variable"};break; 
case "Parametrics_MoEConstraint":if (paletteTooltipsOn){return Parametrics_MoEConstraint_html} else {return "Parametrics: MoE Constraint"};break; 
case "Parametrics_MoEParameter":if (paletteTooltipsOn){return Parametrics_MoEParameter_html} else {return "Parametrics: MoE Parameter"};break; 
case "Parametrics_MoPConstraint":if (paletteTooltipsOn){return Parametrics_MoPConstraint_html} else {return "Parametrics: MoP Constraint"};break; 
case "Parametrics_ParametricAnalysisContext":if (paletteTooltipsOn){return Parametrics_ParametricAnalysisContext_html} else {return "Parametrics: Parametric Analysis Context"};break; 
case "Parametrics_ParametricRestrictedPackage":if (paletteTooltipsOn){return Parametrics_ParametricRestrictedPackage_html} else {return "Parametrics: Parametric Restricted Package"};break; 
case "Parametrics_ParametricViewpointPackage":if (paletteTooltipsOn){return Parametrics_ParametricViewpointPackage_html} else {return "Parametrics: Parametric Viewpoint Package"};break; 
case "Parametrics_RequirementVerification":if (paletteTooltipsOn){return Parametrics_RequirementVerification_html} else {return "Parametrics: Requirement Verification"};break; 
}
}
palettesMenu.push({ id: 'rmoflt', text: 'R-MOFLT' ,checked:false})
console.log("RMOFLT added to ACG")