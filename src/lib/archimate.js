//Archi always uses one of the direction of each relation, with an associated label contained in the following array, and corresponding to the relations of the previous array with the same order
var ArchiMateObjects=["Resource","Capability", "Value_Stream","Course_Of_Action","Business_Actor","Business_Role", "Business_Collaboration", "Business_Interface", "Business_Process", "Business_Function", "Business_Interaction", "Business_Event", "Business_Service", "Business_Object", "Contract", "Representation", "Product", "Application_Component", "Application_Collaboration", "Application_Interface", "Application_Function", "Application_Interaction", "Application_Process", "Application_Event","Application_Service", "Data_Object", "Node", "Device", "System_Software","Technology_Collaboration", "Technology_Interface", "Path","Communication_Network", "Technology_Function", "Technology_Process", "Technology_Interaction", "Technology_Event", "Technology_Service", "Artifact", "Equipment", "Facility", "Distribution_Network", "Material", "Stakeholder", "Driver", "Assessment", "Goal", "Outcome", "Principle", "Requirement", "Constraint", "Meaning", "Value", "WorkPackage", "Deliverable", "Implementation_Event", "Plateau", "Gap", "Location", "Grouping", "Junction"];
var ArchiMateRelationNames =[ "Access", "Composition", "Flow", "Aggregation", "Assignment", "Influence", "Association", "Realization", "Specialization", "Triggering", "Serving"];
var ArchiMateRelationIDs= [ "a","c","f","g","i","n","o","r","s","t","v"];

var acg_ArchiMateRelations =[ "access", "composition", "flow", "aggregation", "assignment", "influence", "association", "realization", "specialization", "triggering", "serving"];

var ja_Layers=["motivation", "strategy", "business", "application", "technology","physical", "implementation-migration", "others"];
var ja_ArchiMateRelations =[ "access-relationship", "composition-relationship", "flow-relationship", "aggregation-relationship", "assignment-relationship", "influence-relationship", "association-relationship", "realization-relationship", "specialization-relationship", "triggering-relationship", "serving-relationship"];
var ja_ArchiMateViewpoints=["application_cooperation", "application_usage",
"business_process_cooperation","capability","goal_realization","implementation_deployment","implementation_migration",
"information_structure","layered","migration","motivation","organization","outcome_realization","physical","product",
"project","requirements_realization","resource","service_realization","stakeholder","strategy","technology","technology_usage"];
var orientedArchiRelationNames =[ "accesses", "is composed of", "flows to", "aggregates", "is assigned to", "influences", "is associated with", "realizes", "is a specialization of", "triggers", "serves"];


var viewpointsArchiMate=[
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

  { name:"application_structure",description:`
  The Application Structure viewpoint shows the structure of one or more applications or components.
  This viewpoint is useful in designing or understanding the main structure of applications or components
  and the associated data; e.g., to break down the structure of the system under construction, or to identify
  legacy application components that are suitable for migration/integration.`,
  stakeholders:["Solution Architect", "Application Architect"],
  constructs:["grouping","orjunction","andjunction","application-component","application-collaboration",
  "application-interface","data-object"],
  layers:["application","others"],
  concerns:["Application structure", "consistency and completeness", "reduction of complexity"],
  purposes:["Designing"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"application_usage",description:`
  The Application Usage viewpoint describes how applications are used to support one or more business processes,
  and how they are used by other applications. It can be used in designing an application by identifying the services
  needed by business processes and other applications, or in designing business processes by describing the services
  that are available. Furthermore, since it identifies the dependencies of business processes upon applications,it may
  be useful to operational managers responsible for these processes.`,
  stakeholders:["Solution Architect", "Enterprise Architect", "Application Architect", "Operational Manager"],
  constructs:["grouping","andjunction","orjunction","business-actor","business-role","business-collaboration",
  "business-process","business-function", "business-interaction","business-event", "business-object",
  "application-component", "application-collaboration", "application-interface", "application-function",
  "application-interaction", "application-process", "application-event","application-service", "data-object"],
  layers:["business","application","others"],
  concerns:["Consistency and completeness", "reduction of complexity"],
  purposes:["Designing", "Deciding"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"business_process_cooperation",description:`
  The Business Process Cooperation viewpoint is used to show the relationships of one or more business processes
  with each other and/or with their environment. It can both be used to create a high-level design of business
  processes within their context and to provide an operational manager responsible for one or more such processes
  with insight into their dependencies. Important aspects of business process cooperation are:
   * Causal relationships between the main business processes of the enterprise
   * Mapping of business processes onto business functions
   * Realization of services by business processes
   * Use of shared data
  Each of these can be regarded as a "sub-viewpoint" of the business process cooperation viewpoint.`,
  stakeholders:["Process Architect", "Domain Architect","Operational Manager"],
  constructs:["grouping", "andjunction", "orjunction","business-actor","business-role","business-collaboration", "business-interface", "business-process",
  "business-function", "business-interaction","business-event", "business-service", "business-object","representation",
  "application-component", "application-collaboration", "application-interface", "application-function",
  "application-interaction", "application-process", "application-event","application-service", "data-object"],
  layers:[ "business","application","others"],
  concerns:["Dependencies between business processes", "consistency and completeness", "responsibilities"],
  purposes:["Designing", "Deciding"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"capability",description:`
  The Capability map viewpoint allows the business architect to create a structured overview of the capabilities of
  the enterprise. A capability map typically shows two or three levels of capabilities across the entire enterprise.
  It can, for example, be used as a heat map to identify areas of investment. In some cases, a capability map may 
  also show specific outcomes delivered by these capabilities.`,
  stakeholders:["Enterprise Architect", "Business Architect","Business Manager"],
  constructs:["grouping","andjunction","orjunction", "resource","capability","outcome"],
  layers:["strategy","motivation","others"],
  concerns:["Architecture strategy and tactics", "motivation"],
  purposes:["Designing", "Deciding"],
  scope:"Strategy"},

  { name:"goal_realization",description:`
  The Goal Realization viewpoint allows a designer to model the refinement of (high-level) goals into more tangible
  goals, and the refinement of tangible goals into requirements or constraints that describe the properties that are
  needed to realize the goals. The refinement of goals into sub-goals is modeled using the aggregation relationship.
  The refinement of goals into requirements is modeled using the realization relationship.
  In addition, the principles may be modeled that guide the refinement of goals into requirements.`,
  stakeholders:["Stakeholder","Enterprise Architect", "ICT Architect","Business Manager", "Business Analyst", "Requirements Manager"],
  constructs:["grouping", "andjunction","orjunction","goal","outcome","principle","constraint","requirement"],
  layers:["motivation","others"],
  concerns:["Architecture mission", "strategy and tactics", "motivation"],
  purposes:["Designing", "Deciding"],
  scope:"Motivation"},

  { name:"implementation_deployment",description:`
  The Implementation and Deployment viewpoint shows how one or more applications are realized on the infrastructure.
  This comprises the mapping of applications and components onto artifacts, and the mapping of the information used
  by these applications and components onto the underlying storage infrastructure.`,
  stakeholders:["Application Architect", "Domain Architect"],
  constructs:["application-component", "application-collaboration", "application-interface", "application-function",
  "application-interaction", "application-process", "application-event","application-service", "data-object",
  "grouping", "andjunction","orjunction","system-software","technology-interface","path", "technology-function",
  "technology-process","technology-interaction", "technology-service","artifact"],
  layers:["application","technology","others"],
  concerns:["Structure of application platforms and how they relate to supporting technology"],
  purposes:["Designing", "Deciding"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"implementation_migration",description:`
  The Implementation and Migration viewpoint is used to relate programs and projects to the parts of the architecture
  that they implement. This view allows modeling of the scope of programs, projects, project activities in terms of
  the plateaus that are realized or the individual architecture elements that are affected. In addition, the way the
  elements are affected may be indicated by annotating the relationships.
  Furthermore, this viewpoint can be used in combination with the programs and projects viewpoint to support portfolio
  management:
  * The programs and projects viewpoint is suited to relate business goals to programs and projects. For example,
    this makes it possible to analyze at a high level whether all business goals are covered sufficiently by the
    current portfolio(s).
  * The implementation and migration viewpoint is suited to relate business goals (and requirements) via programs
    and projects to (parts of) the architecture. For example, this makes it possible to analyze potential overlap
    between project activities or to analyze the consistency between project dependencies and dependencies among
    plateaus or architecture elements.`,
  stakeholders:["Operational Manager", "Enterprise Architect", "ICT Architect", "Employee", "Shareholder"],
  constructs:["grouping","location","orjunction","andjunction","business-actor","business-role",
  "business-collaboration", "business-interface", "business-process", "business-function", "business-interaction",
  "business-event", "business-service", "business-object", "contract", "representation", "product",
  "application-component", "application-collaboration", "application-interface", "application-function",
  "application-interaction", "application-process", "application-event","application-service", "data-object",
  "node", "device", "system-software","technology-collaboration", "technology-interface", "path","orjunction",
  "communication-network", "technology-function", "technology-process", "technology-interaction", "technology-event",
  "technology-service", "artifact","goal","requirement","constraint","work-package","deliverable","implementation-event",
  "plateau","gap"],
  layers:[ "business","application","technology","motivation","implementation-migration","others"],
  concerns:["Architecture vision and policies", "motivation"],
  purposes:["Designing", "Informing"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"information_structure",description:`
  The Information Structure viewpoint is comparable to the traditional information models created in the development
  of almost any information system. It shows the structure of the information used in the enterprise or in a specific
  business process or application, in terms of data types or (object-oriented) class structures. Furthermore, it may
  show how the information at the business level is represented at the application level in the form of the data
  structures used there, and how these are then mapped onto the underlying technology infrastructure;
  e.g., by means of a database schema.`,
  stakeholders:["Domain Architect", "Information Architect"],
  constructs:["grouping","andjunction","orjunction","business-object","representation","data-object","artifact","meaning"],
  layers:[ "business","application","technology","motivation","others"],
  concerns:["Structure and dependencies of the used data and information", "consistency","completeness"],
  purposes:["Designing"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"layered",description:`
  The Layered viewpoint pictures several layers and aspects of an Enterprise Architecture in one diagram.
  There are two categories of layers, namely dedicated layers and service layers. The layers are the result of the Use
  of the "grouping" relationship for a natural partitioning of the entire set of objects and relationships that belong
  to a model. The technology, application, process, and actor/role layers belong to the first category. The structural
  principle behind a fully layered viewpoint is that each dedicated layer exposes, by means of the "realization"
  relationship, a layer of services, which are further on "serving" the next dedicated layer.
  Thus, we can easily separate the internal structure and organization of a dedicated layer from its externally
  observable behavior expressed as the service layer that the dedicated layer realizes.
  The main goal of the layered viewpoint is to provide an overview in one diagram. Furthermore, this viewpoint can be
  used as support for impact of change analysis and performance analysis or for extending the service portfolio`,
  stakeholders:["Enterprise Architect", "Process Architect", "Application Architect", "Infrastructure Architect", "Domain Architect"],
  constructs:["resource","capability","value-stream","course-of-action","business-actor","business-role",
   "business-collaboration", "business-interface", "business-process", "business-function", "business-interaction",
   "business-event", "business-service", "business-object", "contract", "representation", "product",
   "application-component", "application-collaboration", "application-interface", "application-function",
   "application-interaction", "application-process", "application-event","application-service", "data-object",
   "node", "device", "system-software","technology-collaboration", "technology-interface", "path","orjunction",
   "communication-network", "technology-function", "technology-process", "technology-interaction", "technology-event",
   "technology-service", "artifact", "equipment", "facility", "distribution-network", "material", "stakeholder",
   "driver", "assessment", "goal", "outcome", "principle", "requirement", "constraint", "meaning", "value",
   "work-package", "deliverable", "implementation-event", "plateau", "gap", "location", "grouping", "andjunction"],
  layers:["strategy", "business","application","technology","motivation","others"],
  concerns:["Consistency", "reduction of complexity", "impact of change", "flexibility"],
  purposes:["Designing", "Deciding", "Informing"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"migration",description:`
  The Migration viewpoint entails models and concepts that can be used for specifying the transition from an existing
  architecture to a desired architecture. Since the plateau and gap elements have been quite extensively presented in
  Section 13.2, here the migration viewpoint is only briefly described and positioned by means of the table below.`,
  stakeholders:["Enterprise Architect", "Process Architect", "Application Architect", "Infrastructure Architect", "Domain Architect", "Employee", "Shareholder"],
  constructs:["grouping","andjunction","orjunction","plateau","gap"],
  layers:["implementation-migration","others"],
  concerns:["History of models"],
  purposes:["Designing", "Deciding", "Informing"],
  scope:"Implementation and Migration"},

  { name:"motivation",description:`
  The Motivation viewpoint allows the designer or analyst to model the motivation aspect, without focusing on certain
  elements within this aspect. For example, this viewpoint can be used to present a complete or partial overview of
  the motivation aspect by relating stakeholders, their primary goals, the principles that are applied, and the main
  requirements on services, processes, applications, and objects.`,
  stakeholders:["Enterprise Architect", "ICT Architect", "Business Analyst", "Requirements Manager"],
  constructs:["location","grouping","orjunction","andjunction","stakeholder","driver","assessment","goal","outcome",
  "principle", "requirement","constraint","value","meaning"],
  layers:["motivation","others"],
  concerns:["Architecture strategy and tactics", "motivation"],
  purposes:["Designing", "Deciding", "Informing"],
  scope:"Motivation"},

  { name:"organization",description:`
  The Organization viewpoint focuses on the (internal) organization of a company, department, network of companies, or
  of another organizational entity. It is possible to present models in this viewpoint as nested block diagrams, but
  also in a more traditional way, such as organizational charts. The Organization viewpoint is very useful in
  identifying competencies, authority, and responsibilities in an organization.`,
  stakeholders:["Enterprise Architect", "Process Architect","Domain Architect", "Manager", "Employee", "Shareholder"],
  constructs:["location","grouping","orjunction","andjunction","business-actor","business-role","business-collaboration",
  "business-interface"],
  layers:["business","others"],
  concerns:["Identification of competencies", "authority", "responsibilities"],
  purposes:["Designing", "Deciding", "Informing"],
  scope:"Single layer/Single aspect"},

  { name:"outcome_realization",description:`
  The Outcome Realization viewpoint is used to show how the highest-level, business-oriented results are produced by
  the capabilities and underlying core elements.`,
  stakeholders:["Business Manager", "Enterprise Architect","Business Architect"],
  constructs:["location","grouping","andjunction","orjunction","resource","capability","value-stream","business-actor",
   "business-role", "business-collaboration", "business-interface", "business-process",
  "contract","product", "business-function", "business-interaction", "business-event", "business-service",
  "business-object","representation","application-component", "application-collaboration", "application-interface",
  "application-function", "application-interaction", "application-process", "application-event","application-service",
   "data-object","node", "device", "system-software","technology-collaboration", "technology-interface", "path",
   "communication-network", "technology-function", "technology-process", "technology-interaction", "technology-event",
   "technology-service", "artifact","outcome","value","meaning"],
  layers:["strategy", "business","application","technology","motivation","others"],
  concerns:["Business-oriented results"],
  purposes:["Designing", "Deciding"],
  scope:"Strategy"},

  { name:"physical",description:`
  The Physical viewpoint contains equipment (one or more physical machines, tools, or instruments) that can create,
  use, store, move, or transform materials, how the equipment is connected via the distribution network, and what other
  active elements are assigned to the equipment.`,
  stakeholders:["Infrastructure Architect", "Operational Manager"],
  constructs:["grouping","location","andjunction","orjunction","node", "device","path","communication-network",
  "equipment","facility", "distribution-network","material"],
  layers:["technology","physical","others"],
  concerns:["Relationships and dependencies of the physical environment and how this relates to IT infrastructure"],
  purposes:["Designing"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"product",description:`
  The Product viewpoint depicts the value that these products offer to the customers or other external parties involved
  and shows the composition of one or more products in terms of the constituting (business, application, or technology)
  services, and the associated contract(s) or other agreements. It may also be used to show the interfaces (channels)
  through which this product is offered, and the events associated with the product. A product viewpoint is typically
  used in product development to design a product by composing existing services or by identifying which new services
  have to be created for this product, given the value a customer expects from it. It may then serve as input for
  business process architects and others that need to design the processes and ICT realizing these products.`,
  stakeholders:["Product Developer", "Product Manager", "Process Architect", "Domain Architect"],
  constructs:["value","business-actor", "business-role", "business-collaboration", "business-interface", "business-process",
  "contract","product", "business-function", "business-interaction", "business-event", "business-service",
  "business-object","application-component", "application-collaboration", "application-interface",
  "application-function", "application-interaction", "application-process", "application-event","application-service",
   "data-object","technology-service","artifact","material","grouping","andjunction","orjunction"],
  layers:["motivation", "business","application","technology","physical","others"],
  concerns:["Product development", "value offered by the products of the enterprise"],
  purposes:["Designing", "Deciding"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"project",description:`
  A Project viewpoint is primarily used to model the management of architecture change. The “architecture” of the
  migration process from an old situation (current state Enterprise Architecture) to a new desired situation (target
  state Enterprise Architecture)has significant consequences on the medium and long-term growth strategy and the
  subsequent decision-making process. Some of the issues that should be taken into account by the models designed in
  this viewpoint are:
   * Developing a fully-fledged organization-wide Enterprise Architecture is a task that may require several years.
   * All systems and services must remain operational regardless of the presumed modifications and changes of the
     Enterprise Architecture during the change process.
   * The change process may have to deal with immature technology standards (e.g., messaging, security, data, etc.).
   * The change has serious consequences for the personnel, culture, way of working, and organization.
  Furthermore, there are several other governance aspects that might constrain the transformation process, such as
  internal and external cooperation, project portfolio management, project management (deliverables, goals, etc.),
  plateau planning, financial and legal aspects, etc.`,
  stakeholders:["Employee", "Operational Manager", "Enterprise Architect", "ICT Architect", "Shareholder"],
  constructs:["grouping","business-actor", "business-role","goal","outcome","work-package","deliverable",
  "implementation-event"],
  layers:["implementation-migration", "business","motivation","others"],
  concerns:["Architecture vision and policies", "motivation"],
  purposes:["Informing", "Deciding"],
  scope:"Implementation and Migration"},

  { name:"requirements_realization",description:`
  The Requirements Realization viewpoint allows the designer to model the realization of requirements by the core
  elements, such as business actors, business services, business processes, application services, application
  components, etc. Typically, the requirements result from the goal refinement viewpoint.
  In addition, this viewpoint can be used to refine requirements into more detailed requirements. The aggregation
  relationship is used for this purpose.`,
  stakeholders:["Business Analyst", "Enterprise Architect", "ICT Architect", "Requirements Manager"],
  constructs:["location", "grouping","resource","capability","value-stream","course-of-action","business-actor",
  "business-role", "business-collaboration", "business-interface", "business-process","contract","product",
  "business-function", "business-interaction", "business-event", "business-service", "business-object",
  "representation", "application-component", "application-collaboration", "application-interface",
  "application-function", "application-interaction", "application-process", "application-event","application-service",
   "data-object","node", "device", "system-software","technology-collaboration", "technology-interface", "path",
   "communication-network", "technology-function", "technology-process", "technology-interaction", "technology-event",
   "technology-service", "artifact","goal","outcome","principle","requirement", "constraint","meaning","value"],
  layers:["strategy", "business","application","technology","motivation","others"],
  concerns:["Architecture strategy and tactics", "motivation"],
  purposes:["Informing", "Deciding", "Designing"],
  scope:"Motivation"},

  { name:"resource", description:`
  The Resource map viewpoint allows the business architect to create a structured overview of the resources of the
  enterprise. A resource map typically shows two or three levels of resources across the entire enterprise. It can,
  for example, be used as a heat map to identify areas of investment. In some cases, a resource map may also show
  relationships between resources and the capabilities they are assigned to.`,
  stakeholders:["Business Manager", "Enterprise Architect", "Business Architect"],
  constructs:["grouping", "resource", "capability", "work-package"],
  layers:["strategy", "implementation-migration","others"],
  concerns:["Architecture strategy and tactics", "motivation"],
  purposes:[ "Deciding", "Designing"],
  scope:"Strategy"},

  { name:"service_realization",description:`
  The Service Realization viewpoint is used to show how one or more business services are realized by the underlying
  processes (and sometimes by application components). Thus, it forms the bridge between the business products viewpoint
  and the business process view. It provides a "view from the outside" on one or more business processes.`,
  stakeholders:["Process Architect", "Domain Architect", "Product Manager", "Operational Manager"],
  constructs:["business-actor","business-role", "business-collaboration", "business-interface", "business-process",
   "business-function", "business-interaction", "business-event", "business-service", "business-object",
   "representation", "application-component", "application-collaboration", "application-interface",
   "application-function", "application-interaction", "application-process", "application-event","application-service",
    "data-object","grouping"],
  layers:["business", "application","others"],
  concerns:["Added-value of business processes", "consistency and completeness", "responsibilities"],
  purposes:[ "Deciding", "Designing"],
  scope:"Multiple layer/Multiple aspect"},
  
  { name:"stakeholder",description:`
  The Stakeholder viewpoint allows the analyst to model the stakeholders, the internal and external drivers for change,
  and the assessments (in terms of strengths, weaknesses, opportunities, and threats) of these drivers. Also, the links
  to the initial (high-level) goals that address these concerns and assessments may be described. These goals form the
  basis for the requirements engineering process, including goal refinement, contribution and conflict analysis, and the
  derivation of requirements that realize the goals.`,
  stakeholders:["Stakeholder","Enterprise Architect", "ICT Architect", "Business Analyst", "Business Manager", "Requirements Manager"],
  constructs:["stakeholder","driver", "assessment","goal", "outcome","grouping"],
  layers:["motivation", "others"],
  concerns:["Architecture mission and strategy", "motivation"],
  purposes:[ "Deciding", "Designing", "Informing"],
  scope:"Motivation"},
  
  { name:"strategy", description:`
  The Strategy viewpoint allows the business architect to model a high-level, strategic overview of the strategies
  (courses of action) of the enterprise, the capabilities and resources supporting those, and the envisaged outcomes.`,
  stakeholders:["CxO", "Business Manager","Enterprise Architect", "Business Architect"],
  constructs:["resource","capability","value-stream","course-of-action","outcome", "grouping"],
  layers:["motivation","strategy", "others"],
  concerns:["Strategy development"],
  purposes:[ "Deciding", "Designing"],
  scope:"Strategy"},

  { name:"technology", description:`
  The Technology viewpoint contains the software and hardware technology elements supporting the Application Layer,
  such as physical devices, networks, or system software (e.g., operating systems, databases, and middleware).`,
  stakeholders:["Operational Manager","Infrastructure Architect"],
  constructs:["node", "device", "system-software","technology-collaboration", "technology-interface", "path",
  "communication-network", "technology-function", "technology-process", "technology-interaction", "technology-event",
  "technology-service", "artifact","location","grouping"],
  layers:["technology", "others"],
  concerns:["Stability", "security", "dependencies", "costs of the infrastructure"],
  purposes:[ "Designing"],
  scope:"Multiple layer/Multiple aspect"},

  { name:"technology_usage", description:`
  The Technology Usage viewpoint shows how applications are supported by the software and hardware technology: the
  technology services are delivered by the devices; system software and networks are provided to the applications.
  This viewpoint plays an important role in the analysis of performance and scalability, since it relates the physical
  infrastructure to the logical world of applications. It is very useful in determining the performance and quality
  requirements on the infrastructure based on the demands of the various applications that use it.`,
  stakeholders:["Operational Manager","Infrastructure Architect", "Application Architect"],
  constructs:["application-component","application-collaboration","application-function","application-interaction",
  "application-process","application-event","node","device","system-software","technology-collaboration",
  "technology-interface","path","communication-network","technology-function","technology-process","technology-interaction",
  "technology-event","technology-service","artifact","grouping"],
  layers:["application", "technology", "others"],
  concerns:["Dependencies", "performance, scalability"],
  purposes:[ "Designing"],
  scope:"Multiple layer/Multiple aspect"},
  
  { name:"value_stream", description:`
  The Value Stream viewpoint allows the Business Architect to create a structured overview of a value stream, the
  capabilities supporting the stages in that value stream, the value created, and the stakeholders involved.`,
  stakeholders:["Business Manager","Enterprise Architect", "Business Architect"],
  constructs:["capability","grouping","value-stream","stakeholder", "outcome"],
  layers:["motivation", "others", "strategy"],
  concerns:["Architecture strategy and tactics", "motivation"],
  purposes:[ "Designing","Designing"],
  scope:"Strategy"}
];

var ArchiMateStakeholders=["CxO","Shareholder", "Manager", "Employee", "Enterprise Architect","Process Architect", "Domain Architect", "Application Architect", "Operational Manager", "Product Mangager", "Infrastructure Architect","ICT architect", "Information Architect", "Requirements Manager", "Business Analyst"];   
var  ArchiMateRelations=
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

var ja_ArchiMateObjects=["resource","capability","value-stream","course-of-action","business-actor","business-role", "business-collaboration", "business-interface", "business-process", "business-function", "business-interaction", "business-event", "business-service", "business-object", "contract", "representation", "product", "application-component", "application-collaboration", "application-interface", "application-function", "application-interaction", "application-process", "application-event","application-service", "data-object", "node", "device", "system-software","technology-collaboration", "technology-interface", "path","communication-network", "technology-function", "technology-process", "technology-interaction", "technology-event", "technology-service", "artifact", "equipment", "facility", "distribution-network", "material", "stakeholder", "driver", "assessment", "goal", "outcome", "principle", "requirement", "constraint", "meaning", "value", "work-package", "deliverable", "implementation-event", "plateau", "gap", "location", "grouping", "andjunction", "orjunction"];
var acg_Edges=acg_Edges.concat(ja_ArchiMateRelations)
var acg_Nodes=acg_Nodes.concat(ja_ArchiMateObjects)
//andjunction and orjunction are not jarchi types, but two specialized types to be built

/*
 * Created from archimate3_Model.xsd
 * It should be considered that it is Archi similar except for these points:
 * - Caps used but neither underscores nor minus
 * - AndJunction and OrJunction are distinguished, Junction is generic
 */
var oef_ArchiMateObjects=["Resource","Capability","ValueStream", "CourseOfAction","BusinessActor","BusinessRole", "BusinessCollaboration", "BusinessInterface", "BusinessProcess", "BusinessFunction", "BusinessInteraction", "BusinessEvent", "BusinessService", "BusinessObject", "Contract", "Representation", "Product", "ApplicationComponent", "ApplicationCollaboration", "ApplicationInterface", "ApplicationFunction", "ApplicationInteraction", "ApplicationProcess", "ApplicationEvent","ApplicationService", "DataObject", "Node", "Device", "SystemSoftware","TechnologyCollaboration", "TechnologyInterface", "Path","CommunicationNetwork", "TechnologyFunction", "TechnologyProcess", "TechnologyInteraction", "TechnologyEvent", "TechnologyService", "Artifact", "Equipment", "Facility", "DistributionNetwork", "Material", "Stakeholder", "Driver", "Assessment", "Goal", "Outcome", "Principle", "Requirement", "Constraint", "Meaning", "Value", "WorkPackage", "Deliverable", "ImplementationEvent", "Plateau", "Gap", "Location", "Grouping", "AndJunction","OrJunction"];

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
var puml_ArchiMateObjects=["Strategy_Resource","Strategy_Capability", "Value_Stream","Strategy_CourseOfAction","Business_Actor","Business_Role", "Business_Collaboration", "Business_Interface", "Business_Process", "Business_Function", "Business_Interaction", "Business_Event", "Business_Service", "Business_Object", "Business_Contract", "Business_Representation", "Business_Product", "Application_Component", "Application_Collaboration", "Application_Interface", "Application_Function", "Application_Interaction", "Application_Process", "Application_Event","Application_Service", "Application_DataObject", "Technology_Node", "Technology_Device", "Technology_SystemSoftware","Technology_Collaboration", "Technology_Interface", "Technology_Path","Technology_CommunicationNetwork", "Technology_Function", "Technology_Process", "Technology_Interaction", "Technology_Event", "Technology_Service", "Technology_Artifact", "Physical_Equipment", "Physical_Facility", "Physical_DistributionNetwork", "Physical_Material", "Motivation_Stakeholder", "Motivation_Driver", "Motivation_Assessment", "Motivation_Goal", "Motivation_Outcome", "Motivation_Principle", "Motivation_Requirement", "Motivation_Constraint", "Motivation_Meaning", "Motivation_Value", "Implementation_WorkPackage", "Implementation_Deliverable", "Implementation_Event", "Implementation_Plateau", "Implementation_Gap", "Other_Location", "Grouping", "Junction_Or"];

/*
 * A particular attention is to be paid when dealing with:
 * - junctions, due to the fact and_junction and or_junction are not distinquished
 *   in the ArchiMate Relationships matrix
 * - ArchiMate elements naming conventions are not the same for the relationship matrix, 
 *   Archi, jArchi, Open Exchange Format or ArchiMate-PlantUML
 * - ArchiMate-PlantUML distinguishes Business_Location and Other_Location, the first one 
 *   doesn't exist in the specification.
 */

acgTypes=ja_ArchiMateObjects.concat(acg_ArchiMateRelations);

const access_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name"><h2>Access Relationship</h2></div>
<div class="description"><strong>Description:</strong>
The Access relationship represents the ability of behavior and<br/>
active structure elements to observe or act upon passive structure elements.<br/>
The Access relationship indicates that a process, function, interaction, <br/>
service, or event "does something" with a passive structure element;<br/>
e.g., create a new object, read data from the object, write or modify the<br/> 
object data, or delete the object.<br/> 
The relationship can also be used to indicate that the object is just <br/>
associated with the behaviour.<br/>
The arrow indicates the flow of information.</div>
<div class ="categories"> <strong>Category: </strong>Dependency</div></div>`

const aggregation_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Aggregation Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Access relationship<br/>
represents the ability of behavior and active structure elements to observe or<br/>
act upon passive structure elements.<br/>
The Access relationship indicates that a process, function, interaction, service,<br/>
or event "does something" with a passive structure element;<br/>
e.g., create a new object, read data from the object, write or modify the object<br/>
data, or delete the object. The relationship can also be used to indicate that the<br/>
object is just associated with the behaviour.<br/>
The arrow indicates the flow of information.</div>
<div  class ="categories"> <strong>Category: </strong>Structural</div>
<div  class="examples"><strong>Examples: </strong>A Car Insurance Business Product aggregates a<br/>
Business Contract and some Business Services.<br/>
"Customer File" aggregates an "Insurance Policy" and "Insurance Claim"</div></div>`

const assignment_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Assignment Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Assignment relationship links active <br/>
elements (e.g., Business Roles or Application Components) with units of behaviour<br/>
that are performed by them, or Business Actors with Business Roles that are<br/>
fulfilled by them.<br/>
The Assignment relationship represents the allocation of responsibility, performance<br/>
of behavior, storage, or execution.<br/>
As with all structural relationships, an Assignment relationship can also be<br/>
expressed by nesting the model elements. The direction of the relationship is<br/>
also the direction of nesting.</div>
<div class ="categories"> <strong>Categories: </strong>Structural</div>
<div class="examples"><strong>Examples: </strong>A Business Actor assigned to a Business Role.<br/>
A Business Role assigned to a Business Process or Function.<br/>
An Application Component assigned to an Application Function.</div></div>
`
const association_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Association Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Association relationship is always<br/>
allowed between two elements, or between a relationship and an element.<br/>
The Association relationship can be used when drawing a first high-level model<br/>
where relationships are initially denoted in a generic way, and later refined to<br/>
show more specific relationship types.<br/>
An Association relationship is undirected by default but may be directed.</div>
<div class ="categories"> <strong>Categories: </strong>Dependency</div>
<div class="examples"><strong>Examples: </strong>Some Business Objects and a Business Contract<br/>
are all associated with each other.</div></div>
`
const composition_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Composition Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Composition relationship indicates<br/>
that an object consists of a number of other objects.<br/>
The interpretation of a Composition relationship is that the whole or part of the<br/>
source element is composed of the whole of the target element.<br/>
A specific kind of server can be modeled as a node composed of a device and system<br/>
software implying an existence dependency between individual servers of that kind<br/>
and the individual devices and system software instances of which they consist.<br/>
A Composition relationship is always allowed between two instances of the same element type.</div>
<div class ="categories"> <strong>Categories: </strong>Structural</div>
<div class="examples"><strong>Examples: </strong>An Application Component may be composed of<br/>
two or more sub-components.</div></div>
`
const flow_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Flow Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Flow relationship is used to model the flow of,<br/>
for example, information, goods, or money between behaviour elements.<br/>
Used to model the flow of information between behavioural concepts in a process.<br/>
A Flow relationship does not imply a causal or temporal relationship.</div>
<div class ="categories"> <strong>Categories: </strong>Dynamic</div>
<div class="examples"><strong>Examples: </strong>A "Claim assessment" Business Function forwards decisions about<br/>
the claim to the "Claim settlement" Business Function.</div></div>
`

influence_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Influence Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Influence relationship represents<br/>
that an element affects the implementation or achievement of some motivation element.<br/>
The Influence relationship is used to describe that some architectural element<br/>
influences achievement or implementation of a motivation element, such as a goal<br/>
or a principle. In general, a motivation element is realized to a certain degree.<br/>
Attributes can be used to indicate the sign and/or strength of the influence.<br/>
The choice of possible attribute values is left to the modeler;<br/>
e.g., {++, +, 0, -, --} or [0..10]. By default, the Influence relationship models<br/>
a contribution with unspecified sign and strength.</div>
<div class ="categories"> <strong>Categories: </strong>Dependency</div>
<div class="examples"><strong>Examples: </strong>The degree in which the goal to increase customer<br/>
satisfaction is realized may be represented by the percentage of satisfied customers<br/>
that participate in a market interview.</div></div>
`
const realization_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Realization Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Realization relationship links a logical<br/>
entity with a more concrete entity that realizes it.<br/>
The Realization relationship indicates how logical entities ("what" or "logical"),<br/>
such as services, are realized by means of more concrete entities ("how" or "physical").<br/>
A Business Process or Function may realize a Service. A Data Object may realize a Business Object.<br/>
An Artifact may realize an Application Component. A core element may realize a Motivation element.
</div>
<div class ="categories"> <strong>Categories: </strong>Structural</div>
<div class="examples"><strong>Examples: </strong>An Application Component, "Financial Application", <br/>
realizes a "Billing" Service.<br/>
A "Billing" Data Object realizes the Business Object, "Invoice".</div></div>
`

const serving_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Serving Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Realization relationship links a<br/>
logical entity with a more concrete entity that realizes it.<br/>
The Realization relationship indicates how logical entities ("what" or "logical"),<br/>
such as services, are realized by means of more concrete entities ("how" or "physical").<br/>
A Business Process or Function may realize a Service. A Data Object may realize a<br/>
Business Object. An Artifact may realize an Application Component.<br/>
A core element may realize a Motivation element.
</div>
<div class ="categories"> <strong>Categories: </strong>Structural</div>
<div class="examples"><strong>Examples: </strong>An Application Component, "Financial Application",<br/>
realizes a "Billing" Service.<br/>
A "Billing" Data Object realizes the Business Object, "Invoice".</div></div>
`

const specialization_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Specialization Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Specialization relationship indicates<br/>
that an object is a specialization of another object.<br/>
A Specialization relationship is always allowed between two instances of the<br/>
same element type.<br/>
Alternatively, a Specialization relationship can be expressed by nesting the<br/>
specialized element inside the generic element.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>Other</div>
<div class="examples"><strong>Examples: </strong>A "Take out travel insurance" and a <br/>
"Take out luggage insurance" process are a specialization of a more generic<br/>
"Take out insurance" process.</div><div>
`

const triggering_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Triggering Relationship</h2></div>
<div class="description"><strong>Description: </strong>The Triggering relationship represents<br/>
the temporal or causal relations between elements.<br/>
Used to model the temporal or causal relationships between behavioural elements<br/>
in a process. Some part of the source element should be completed before the<br/>
target element can start.</div>
<div class ="categories"> <strong>Categories: </strong>Dynamic</div>
<div class="examples"><strong>Examples: </strong>A "Request Insurance" event triggers a series<br/>
of Business Processes, "Receive request", and "Process request".</div></div>
`

const application_collaboration_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify" class= ''w2ui-light''>
<div class="name" ><h2>Application Collaboration</h2></div>
<div class="description"><strong>Description: </strong>An Application Collaboration represents an<br/>
aggregate of two or more application internal active structure elements that<br/>
work together to perform collective application behavior.<br/>
An Application Collaboration specifies which Application Components or other<br/>
Application Collaborations cooperate to perform some task. The collaborative<br/>
behavior, including, for example, the communication pattern of these components,<br/>
is modeled by an Application Interaction. An Application Collaboration typically<br/>
models a logical or temporary collaboration of Application Components,<br/>
and does not exist as a separate entity in the enterprise.<br/>
Application Collaboration is a specialization of application internal active<br/>
structure element, and aggregates two or more (cooperating) Application Components<br/>
or other Application Collaborations.<br/>
The name of an Application Collaboration should preferably be a noun.</div>
<div class ="categories"> <strong>Categories: </strong>Application, Active_Structure</div>
<div class="examples"><strong>Examples: </strong>Two Application Components collaborate in transaction<br/>
administration: an Accounting component and a Billing component.
<br/>This collaboration performs the task "Administrate transactions".</div></div>
`
const application_component_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Application Component</h2></div>
<div class="description"><strong>Description: </strong>An Application Component represents an encapsulation<br/>
of application functionality aligned to implementation structure, which is modular and replaceable.<br/>
An Application Component is a self-contained unit.<br/>
As such, it is independently deployable, re-usable, and replaceable.<br/>
An Application Component performs one or more Application Functions.<br/>
It encapsulates its contents: its functionality is only accessible through a set<br/>
of Application Interfaces.<br/>
Cooperating Application Components are connected via Application Collaborations.<br/>
An Application Component may be assigned to one or more Application Functions.<br/>
An Application Component has one or more Application Interfaces, which expose its functionality.<br/>
The name of an Application Component should preferably be a noun.</div>
<div class ="categories"> <strong>Categories: </strong>Application, Active_Structure</div>
<div class="examples"><strong>Examples: </strong>CRM System, Web portal, Financial Application,<br/>
Customer Data Access.</div></div>
`

const application_event_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Application Event</h2></div>
<div class="description"><strong>Description: </strong>An Application Event represents an application state change.<br/>
Application Functions and other application behaviour may be triggered or<br/>
interrupted by an Application Event.<br/>
Also, application behaviour may raise events that trigger other application behaviour.<br/>
An event is instantaneous; it does not have duration.<br/>
Events may originate from the environment of the organization<br/>
(e.g., from an external application), but also internal events may occur generated by,<br/>
for example, other applications within the organization.<br/>
An Application Event may have a time attribute that denotes the moment or moments<br/>
at which the event happens. For example, this can be used to model time schedules;<br/>
e.g., an event that triggers a daily batch process.<br/>
An Application Event may trigger or be triggered (raised) by an Application Function,<br/>
Process, or Interaction.<br/>
An Application Event may access a Data Object and may be composed of other<br/>
Application Events. The name of an Application Event should preferably be a verb<br/>
in the perfect tense.</div>
<div class ="categories"> <strong>Categories: </strong>Application, Behavioural</div>
<div class="examples"><strong>Examples: </strong>Claim received, Request for quotation.</div></div>
`

const application_function_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Application Function</h2></div>
<div class="description"><strong>Description: </strong>An Application Function represents automated<br/>
behavior that can be performed by an Application Component.<br/>
An Application Function describes the internal behaviour of an Application Component.<br/>
If this behaviour is exposed externally, this is done through one or more services.<br/>
An Application Function may realize one or more Application Services.<br/>
Application Services of other Application Functions and Technology Services may<br/>
serve an Application Function. An Application Function may access Data Objects.<br/>
An Application Component may be assigned to an Application Function (which means<br/>
that the Application Component performs the Application Function).<br/>
The name of an Application Function should preferably be a verb ending with "ing";<br/>
e.g., "accounting".
</div>
<div class ="categories"> <strong>Categories: </strong>Application, Behavioural</div>
<div class="examples"><strong>Examples: </strong>Accounting, Billing, Policy Creation, Calculate Premium,<br/>
Financial Administration.</div></div>
`
const application_interaction_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Application Interaction</h2></div>
<div class="description"><strong>Description: </strong>An Application Interaction represents a unit<br/>
of collective application behavior performed by (a collaboration of) two or more Application Components.<br/>
An Application Interaction describes the collective behaviour that is performed by the components<br/>
that participate in an Application Collaboration. An Application Interaction can also specify the<br/>
externally visible behaviour needed to realize an Application Service.<br/>
An Application Collaboration may be assigned to an Application Interaction.<br/>
An Application Interaction may realize an Application Service.<br/>
Application Services and tTechnology Services may serve an Application Interaction.<br/>
An Application Interaction may access Data Objects.<br/>
The name of an Application Interaction should clearly identify a series of application behaviours.
</div>
<div class ="categories"> <strong>Categories: </strong>Application, Behavioural</div>
<div class="examples"><strong>Examples: </strong>Administrate transactions, Client profile creation, Update customer records</div></div>
`

const application_interface_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Application Interface</h2></div>
<div class="description"><strong>Description: </strong>An Application Interface represents a point of<br/>
access where application services are made available to a user, another application<br/>
component, or a Node.<br/>
An Application Interface specifies how the functionality of a Component can be<br/>
accessed by other elements.<br/>
An Application Interface exposes Application Services to the environment.<br/>
An Application Interface may be part of an Application Component.<br/>
An Application Interface can be assigned to Application Services, which means<br/>
that the interface exposes these services to the environment.<br/>
The name of an Application Interface should preferably be a noun.
</div>
<div class ="categories"> <strong>Categories: </strong>Application, active</div>
<div class="examples"><strong>Examples: </strong>Transaction data exchange, Web services</div></div>
`

const application_process_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Application Process</h2></div>
<div class="description"><strong>Description: </strong>An Application Process represents a sequence<br/>
of application behaviors that achieves a specific result.<br/>
An Application Process describes the internal behaviour performed by an Application<br/>
Component that is required to realize a set of services.<br/>
An Application Process may realize Application Services. Other Application Services<br/>
may serve (be used by) an Application Process.<br/>
An Application Process may access Data Objects.<br/>
An Application Component may be assigned to an Application Process (which means<br/>
that this component performs the process).<br/>
The name of an Application Process should clearly identify a series of application behaviours.
</div>
<div class ="categories"> <strong>Categories: </strong>Application, Behavioural</div>
<div class="examples"><strong>Examples: </strong>Claims adjudication process, General ledger update job.</div></div>
`

const application_service_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div xmlns="http://www.w3.org/1999/xhtml"><div class="name" ><h2>Application Service</h2></div>
<div class="description"><strong>Description: </strong>An Application Service represents an explicitly<br/>
defined exposed application behaviour.<br/>
An Application Service exposes the functionality of components to their environment.<br/>
This functionality is accessed through one or more Application Interfaces.<br/>
An Application Service is realized by one or more Application Functions that are<br/>
performed by the component. It may require, use, and produce Data Objects.<br/>
An Application Service should provide a unit of behaviour that is, in itself,<br/>
useful to its users. It has a purpose, which states this utility to the environment.<br/>
A Purpose may be associated with an Application Service. An Application Service<br/>
may serve Business Processes, Business Functions, Business Interactions,<br/>
or Application Functions.<br/>
An Application Function may realize an Application Service.<br/>
An Application Interface may be assigned to an Application Service.<br/>
An Application Service may access Data Objects.<br/>
The name of an Application Service should preferably be a verb ending with "ing".<br/>
Also, a name explicitly containing the word "service" may be used.
</div>
<div class ="categories"> <strong>Categories: </strong>Application, Behavioural</div>
<div class="examples"><strong>Examples: </strong>Transaction Processing, Payment Service, Customer Admin Service.</div></div></div>
`

const artifact_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" >
<h2>Artifact</h2></div>
<div class="description"><strong>Description: </strong>An Artifact represents a piece of data that is used or produced<br/>
in a software development process, or by deployment and operation of an IT system.<br/>
An Artifact represents a tangible element in the IT world. It is typically used<br/>
to model (software) products such as source files, executables, scripts, database tables,<br/>
messages, documents, specifications, and model files.<br/>
An Application Component or System Software may be realized by one or more Artifacts.<br/>
A Data Object may be realized by one or more Artifacts.<br/>
A Node may be assigned to an Artifact to model that the Artifact is deployed on the Node.<br/>
The name of an Artifact should preferably be the name of the file it represents.
</div>
<div class ="categories"> <strong>Categories: </strong>Technology,passive_structure</div>
<div class="examples"><strong>Examples: </strong>Risk Management EJB, Jar file, Widget, Plug-in.</div></div>
`
const assessment_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Assessment</h2></div>
<div class="description"><strong>Description: </strong>An Assessment represents the result of an<br/>
analysis of the state of affairs of the enterprise with respect to some driver.<br/>
An Assessment may reveal strengths, weaknesses, opportunities, or threats for<br/>
some area of interest.<br/>
These outcomes need to be addressed by adjusting existing goals or setting new ones,<br/>
which may trigger changes to the enterprise architecture.<br/>
The name of an Assessment should preferably be a noun or a very short sentence.
</div>
<div class ="categories"> <strong>Categories: </strong>Motivation</div>
<div class="examples"><strong>Examples: </strong>"Complaining customers", "Leaving customers",<br/>
"Long waiting queues", "High service times", "Changing legislation"</div></div>
`
const business_actor_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Actor</h2></div>
<div class="description"><strong>Description: </strong>A Business Actor represents a business entity<br/>
that is capable of performing behavior.<br/>
Typically, a Business Actor performs the behaviour assigned to one or more Business Roles.<br/>
It's important to separate the actor from the role because a Business Actor can<br/>
perform more than one Business Role, and a Business Role can be performed by more<br/>
than one Business Actor.<br/>
Business Actors are humans, departments, and business units.<br/>
They may be individuals or groups.<br/>
A Business Actor can be aggregated in a Location.<br/>
The name of a Business Actor should preferably be a noun.</div>
<div class ="categories"> <strong>Categories: </strong>Business,Active_Structure.</div>
<div class="examples"><strong>Examples: </strong>A Customer, Marketing & Communications department,<br/>
Director of Finance, Secretary, Admissions Department, Product Development.</div></div>
`
const business_collaboration_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Collaboration</h2></div>
<div class="description"><strong>Description: </strong>A Business Collaboration represents an aggregate<br/>
of two or more business internal active structure elements that work together<br/>
to perform collective behavior.<br/>
Unlike a single Business Role, a Business Collaboration does not necessarily<br/>
have a permanent status in an organisation. Thus it may be a temporary collaboration.<br/>
It may not require a special name and can be regarded as a "virtual" role.<br/>
A Business Collaboration can occur when two or more Business Roles need to fulfil<br/>
specific interaction requirements.<br/>
Business Collaborations represent the collective effort of combined Business Roles.<br/>
The name of a Business Collaboration should preferably be a noun.</div>
<div class ="categories"> <strong>Categories: </strong>Business,Active_Structure</div>
<div class="examples"><strong>Examples: </strong>The Business Roles of Sales Department and Advertising<br/>
may form a temporary Business Collaboration in order to push a product to market.<br/>
The Business Roles of Home Insurance Seller and Travel Insurance Seller may form a temporary<br/>
Business Collaboration in order to form combined Insurance Selling service.</div></div>
`
const business_event_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" >
<h2>Business Event</h2></div>
<div class="description"><strong>Description: </strong>A Business Event represents an organizational state change.<br/>
Business Processes and other business behaviour may be triggered or interrupted by a Business Event.<br/>
Also, Business Processes may raise events that trigger other Business Processes, Functions, or Interactions.<br/>
A Business Event is most commonly used to model something that triggers behaviour.<br/>
Unlike Business Processes, Functions, and Interactions, a Business Event is instantaneous:<br/>
it does not have duration. A Business Event may have a time attribute that denotes the moment<br/>
or moments at which the event happens.<br/>
Events may originate from the environment of the organization (e.g., from a customer),<br/>
but also internal events may occur generated by, for example, other processes within the organization.<br/>
A Business Event may trigger or be triggered (raised) by a Business Process, Business Function,<br/>
or Business Interaction.<br/>
A Business Event may access a Business Object and may be composed of other Business Events.<br/>
The name of a Business Event should preferably be a verb in the perfect tense;<br/>
e.g., "claim received".</div>
<div class ="categories"> <strong>Categories: </strong>business,behavioural</div>
<div class="examples"><strong>Examples: </strong>Request for Insurance, Claim Received, Application Form Received,<br/>
Send Product Portfolio.</div></div>
`
const business_function_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Function</h2></div>
<div class="description"><strong>Description: </strong>A Business Function represents a collection of<br/>
business behavior based on a chosen set of criteria (typically required business<br/>
resources and/or competencies), closely aligned to an organization, but not necessarily<br/>
explicitly governed by the organization.<br/>
Business Processes describe a flow of activities. Business Functions group activities<br/>
according to their required skills, knowledge, and resources.<br/>
A Business Process forms a string of Business Functions.<br/>
A Business Function may be triggered by, or trigger, any other business behaviour<br/>
element (Business Event, Business Process, Business Function, or Business Interaction).<br/>
A Business Function may be triggered by, or trigger, any other business behavior element<br/>
(Business Event, Business Process, Business Function, or Business Interaction).<br/>
A Business Function may access Business Objects.<br/>
A Business Function may realize one or more BusinessServices and may use (internal)<br/>
Business Services or Application Services.<br/>
A Business role or an Application Component may be assigned to a Business Function.<br/>
The name of a Business Function should clearly indicate a well-defined behaviour.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>business,behavioural</div>
<div class="examples"><strong>Examples: </strong>Customer Management, Member Services, Recycling,<br/>
Payment Processing, Financial Handling, Claims Processing, Asset Management,<br/>
Maintaining Customer Relations.</div></div>
`
const business_interaction_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Interaction</h2></div>
<div class="description"><strong>Description: </strong>A Business Interaction represents a unit of<br/>
collective business behavior performed by (a collaboration of) two or more Business<br/>
Actors, Business Roles, or Business Collaborations.<br/>
A Business Interaction is similar to a Business Process or Business Function,<br/>
but while a process/function may be performed by a single role, an interaction<br/>
is performed by multiple roles in collaboration.<br/>
A Business Interaction may be triggered by, or trigger, any other business behaviour<br/>
element (Business Event, Business Process, Business Function, or Business Interaction).<br/>
A Business Interaction may access Business Objects.<br/>
A Business Interaction may realize one or more Business Services and may use (internal)<br/>
Business Services or Application Services.<br/>
A Business Collaboration or an Application Collaboration may be assigned to a Business Interaction.<br/>
The name of a Business Interaction should preferably be a verb in the simple present tense.
</div>
<div class ="categories"> <strong>Categories: </strong>business,behavioural</div>
<div class="examples"><strong>Examples: </strong>Formalise Request, Check and Sign Contract,<br/>
Take out Combined Insurance.</div></div>
`
const business_interface_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Interface</h2></div>
<div class="description"><strong>Description: </strong>A Business Interface represents a point of access<br/>
where a business service is made available to the environment.<br/>
A Business Interface exposes the functionality of a business service to other business<br/>
roles or actors. It is often referred to as a channel (telephone, Internet, local office, etc.).<br/>
The same business service may be exposed through different interfaces.<br/>
A Business Interface may be part of a business role or actor through a Composition relationship,<br/>
and a Business Interface may serve a Business Role.<br/>
A Business Interface exposes a Business Service provided by a Business Role or Business<br/>
Collaboration to its environment. A Business Service may also be exposed through different interfaces.<br/>
The name of a Business Interface should preferably be a noun.
</div>
<div class ="categories"> <strong>Categories: </strong>business,active</div>
<div class="examples"><strong>Examples: </strong>Telephone, Email, Call centre, Web Chat, Help Desk.</div></div>
`

const business_object_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Object</h2></div>
<div class="description"><strong>Description: </strong>A Business Object represents a concept used <br/>
within a particular business domain.<br/>
A Business Object is used to model an object type of which several instances<br/>
may exist within the organization.<br/>
In this case, it may be realised as a Data Object or Representation.<br/>
It may also be specialised by another Business Object.<br/>
Business Objects are passive. They do not trigger or perform processes.<br/>
Business Objects may be accessed by a Business Process, Function, Interaction, Event, or Service.<br/>
A Business Object may have Association, Specialization, Aggregation, or Composition<br/>
relationships with other Business Objects.<br/>
A Business Object may be realized by a Representation or by a Data Object (or both).<br/>
The name of a Business Object should preferably be a noun.
</div>
<div class ="categories"> <strong>Categories: </strong>business,passive</div>
<div class="examples"><strong>Examples: </strong>Invoice, Customer file, Student record, Attendance record, Ledger.</div></div>
`
const business_process_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify" >
<div class="name" ><h2>Business Process</h2></div>
<div class="description"><strong>Description: </strong>A Business Process represents a sequence of business behaviors<br/>
 that achieves a specific result such as a defined set of products or business services.<br/>
A Business Process describes the internal behaviour performed by a Business Role<br/>
that is required to produce a set of products and services. For a consumer the required<br/>
behaviour is not of interest so a process is designated "Internal".<br/>
A complex Business Process may be an aggregation of other, finer-grained processes.<br/>
To each of these finer-grained roles may be assigned.<br/>
The name of a Business Process should preferably be or contain a verb in the simple present tense.
</div>
<div class ="categories"> <strong>Categories: </strong>business,behavioural</div>
<div class="examples"><strong>Examples: </strong>Receive request, Register, Pay, Create contract, Sign agreement.</div></div>
`

const business_role_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Role</h2></div>
<div class="description"><strong>Description: </strong>A Business Role represents the responsibility <br/>
for performing specific behavior, to which an actor can be assigned, or the part<br/>
an actor plays in a particular action or event.<br/>
A Business Role can be fulfilled by more than one Business Actor.<br/>
Conversely, a Business Actor may fulfil more than one Business Role.<br/>
For example, given a named teacher, their roles may include those in the domains.<br/>
A Business Role will usually exist in an organisation whether or not a given actor fulfils it or not.<br/>
A Business Actor that is assigned to a Business Roleis responsible for ensuring<br/>
that the corresponding behavior is carried out, either by performing it or by<br/>
delegating and managing its performance.<br/>
A Business Role may be assigned to one or more Business Processes or Business Functions.<br/>
A Business Interface or an Application Interface may be used by a Business Role,<br/>
while a Business Interface may be part of a Business Role (Composition relationship).<br/>
The name of a Business Role should preferably be a noun.
</div>
<div class ="categories"> <strong>Categories: </strong>business,active</div>
<div class="examples"><strong>Examples: </strong>Customer, Insurer, Supplier, Lecturer, Administrator, Buyer.</div></div>
`

const business_service_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Business Service</h2></div>
<div class="description"><strong>Description: </strong>A Business Service represents explicitly defined<br/>
behavior that a Business Role, Business Actor, or Business Collaboration exposes to its environment.<br/>
A Business Service is defined as the externally visible ("logical") functionality,<br/>
which is meaningful to the environment and is realized by business behaviour <br/>
(Business Process, Business Function, or Business Interaction).<br/>
A Business Service exposes the functionality of Business Roles or Collaborations<br/>
to their environment. This functionality is accessed through one or more business interfaces.<br/>
A Business Service is realized by one or more Business Processes, Business Functions,<br/>
or Business Interactions that are performed by the Business Roles or Business Collaborations, respectively.<br/>
The name of a Business Service should preferably be a verb ending with "-ing";<br/>
e.g., "transaction processing".<br/>
Also, a name containing the word "service" may be used.
</div>
<div class ="categories"> <strong>Categories: </strong>business,behavioural</div>
<div class="examples"><strong>Examples: </strong>Customer Information Service, Claims Payment Service,<br/>
Enrolment Service.</div></div>
`

const capability_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" >
<h2>Capability</h2></div>
<div class="description"><strong>Description: </strong>A Capability represents an ability that an active<br/>
structure element, such as an organization, person, or system, possesses.<br/>
A Capability focuses on business outcomes. It provides a high-level view of the<br/>
current and desired abilities of an organization, in relation to its strategy and its environment.<br/>
They are realized by various elements (people, processes, systems).<br/>
Capabilities may also have serving relationships;<br/>
for example, to denote that one capability contributes to another.<br/>
Capabilities are expressed in general and high-level terms and are typically<br/>
realized by a combination of organization, people, processes, information, and technology.<br/>
Capabilities are typically aimed at achieving some goal or delivering value by realizing an outcome.<br/>
Capabilities are themselves realized by core elements.<br/>
To denote that a set of core elements together realizes a capability, Grouping can be used.
</div>
<div class ="categories"> <strong>Categories: </strong>strategy,behavioural</div>
<div class="examples"><strong>Examples: </strong>Digital Customer Management, Data Analysis,<br/>
Product Management, Productise Open Source Software.</div></div>
`
const communication_network_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Communication Network</h2></div>
<div class="description"><strong>Description: </strong> Communication Network represents a set of<br/>
structures that connects nodes for transmission, routing, and reception of data.<br/>
A Communication Network represents the physical communication infrastructure.<br/>
A Communication Network connects two or more Devices.<br/>
The most basic Communication Network is a single link between two Devices.<br/>
A Communication Network realizes one or more Paths.<br/>
It embodies the physical realization of the logical path between Nodes.<br/>
A Communication Network can consist of sub-networks.<br/>
It can aggregate Devices and System Software, for example, to model the routers,<br/>
switches, and firewalls that are part of the network infrastructure.
</div>
<div class ="categories"> <strong>Categories: </strong>technology,active</div>
<div class="examples"><strong>Examples</strong>LAN. Wireless. Wide Area Network.</div></div>
`

const constraint_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Constraint</h2></div>
<div class="description"><strong>Description: </strong>A Constraint represents a factor that limits the realization of goals.<br/>
In contrast to a requirement, a constraint does not prescribe some intended functionality of the system<br/>
to be realized but imposes a restriction on the way it operates or may be realized.<br/>
This may be a restriction on the implementation of the system (e.g., specific technology that is to be used),<br/>
or a restriction on the implementation process (e.g., time or budget constraints).
</div>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>"Application should be realised in Java", "Cost should be below budget",<br/>
"iPad only version", "Must use MIT license"</div></div>
`

const contract_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Contract</h2></div>
<div class="description"><strong>Description: </strong>A Contract represents a formal or informal specification<br/>
of an agreement between a provider and a consumer that specifies the rights and obligations associated<br/>
with a product and establishes functional and non-functional parameters for interaction.<br/>
A Contract may also be or include a Service Level Agreement (SLA), describing an agreement about<br/>
the functionality and quality of the services that are part of a Product.<br/>
A Contract is a specialization of a Business Object.<br/>
The relationships that apply to a Business Object also apply to a Contract.<br/>
A Contract may have an Aggregation relationship with a Product.<br/>
The name of a Contract should preferably be a noun.
</div>
<div class ="categories"> <strong>Categories: </strong>business, passive</div>
<div class="examples"><strong>Examples: </strong>Travel Insurance Policy.</div></div>
`

const course_of_action_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Course of Action</h2></div>
<div class="description"><strong>Description: </strong>A Course of Action is an approach or plan for configuring<br/>
some capabilities and resources of the enterprise, undertaken to achieve a goal.<br/>
A Course of Action represents what an enterprise has decided to do. Courses of action can be categorized<br/>
as strategies (long-term) and tactics (short-term).
</div>
<div class ="categories"> <strong>Categories: </strong>strategy, behaviour</div>
<div class="examples"><strong>Examples: </strong>Acquire company, Merge organizations, Provide repository support.</div></div>
`

const data_object_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Data Object</h2></div>
<div class="description"><strong>Description: </strong>A Data Object represents data structured for automated processing.<br/>
A Data Object should be a self-contained piece of information with a clear meaning to the business,<br/>
not just to the application level.<br/>
A Data Object typically models an object type of which multiple instances may exist in operational applications.<br/>
An Application Function or process can operate on Data Objects.<br/>
A Data Object may be communicated via interactions and used or produced by Application Services.<br/>
A Data Object can be accessed by an Application Function, Application Interaction, or Application Service.<br/>
A Data Object may realize a Business Object, and may be realized by an Artifact.<br/>
A Data Object may have Association, Specialization, Aggregation, or Composition relationships with other Data Objects.<br/>
The name of a Data Object should preferably be a noun.
</div>
<div class ="categories"> <strong>Categories: </strong>application, passive</div>
<div class="examples"><strong>Examples: </strong>Customer File Data, Insurance Policy Data, Insurance Request Data,<br/>
Client Database.</div></div>
`

const deliverable_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Deliverable</h2></div>
<div class="description"><strong>Description: </strong>A Deliverable represents a precisely-defined outcome of<br/>
a Work Package.<br/>
Work Packages produce Deliverables. These may be results of any kind;<br/>
e.g., reports, papers, services, software, physical products, etc.,<br/>
or intangible results such as organizational change.<br/>
A Deliverable may also be the implementation of (a part of) an architecture.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>implementation_migration</div>
<div class="examples"><strong>Examples: </strong>Software, Hardware, CRM System, Report, Paper</div></div>
`

const device_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Device</h2></div>
<div class="description"><strong>Description: </strong>A Device represents a physical IT resource upon which system<br/>
software and artifacts may be stored or deployed for execution.<br/>
A Device is a specialization of a Node that represents a physical IT resource with processing capability.<br/>
It is typically used to model hardware systems such as mainframes, PCs, or routers.<br/>
Usually, they are part of a node together with system software.<br/>
Devices may be composite; i.e., consist of sub-devices.<br/>
Devices can be interconnected by Networks.<br/>
Devices can be assigned to Artifacts and to System Software, to model that Artifacts and System Software<br/>
are deployed on that Device. A Node can contain one or more Devices.<br/>
The name of a Device should preferably be a noun referring to the type of hardware.</div>
<div class ="categories"> <strong>Categories: </strong>technology, active</div>
<div class="examples"><strong>Examples: </strong>File Server, Router, Mainframe, Desktop PC, IBM System Z.</div></div>
`

const distribution_network_html = `<div xmlns="http://www.w3.org/1999/xhtml">
<div class="name" ><h2>Distribution Network</div></h2>
<div class="description" align="justify"><strong>Description:</strong>A Distribution Network represents a physical network used to transport materials or energy.<br/>
A Distribution Network represents the physical distribution or transportation infrastructure.<br/>
It embodies the physical realization of the logical paths between Nodes.<br/>
A Distribution Network connects two or more Nodes.<br/>A Distribution Network may realize one or more Paths.<br/>
A Distribution Network can consist of sub-networks and can aggregate Facilities and Equipment.
</div>
<div class ="categories"> <strong>Categories: </strong>physical, active</div>
<div class="examples"><strong>Examples:</strong>Local Trucking, Overseas Shipping.</div></div>
`

const driver_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify">
<div class="name" ><h2>Driver</h2></div>
<div class="description"><strong>Description: </strong>A Driver represents an external or internal condition that motivates an organization to define<br/>
its goals and implement the changes necessary to achieve them.<br/>
Drivers may be internal, in which case they are usually associated with a Stakeholder.<br/>
They may also be external, e.g., economic changes or changing legislation.<br/>
The name of a Driver should preferably be a noun.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>"Customer satisfaction", "Compliance to legislation", "Profitability", "Economic changes",<br/>
"Changing legislation"</div></div>
`

const equipment_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" >
<h2>Equipment</div></h2>
<div class="description"><strong>Description: </strong>AEquipment represents one or more physical machines,<br/>
tools, or instruments that can create, use, store, move, or transform materials.<br/>
Equipment comprises all active processing elements that carry out physical processes <br/>
in which materials are used or transformed. Equipment is a specialization of the Node element.<br/>
Therefore, it is possible to model nodes that are formed by a combination of<br/>
IT infrastructure (devices, system software) and physical infrastructure (equipment);<br/>
e.g., an MRI scanner at a hospital, a production plant with its control systems, etc.<br/>
Material can be accessed (e.g., created, used, stored, moved, or transformed) by equipment.<br/>
Equipment can serve other Equipment, and also Business Roles and Actors, and Facilities <br/>
can be assigned to Equipment.<br/>
A piece of Equipment can be composed of other pieces of Equipment.<br/>
Equipment can be assigned to (i.e., installed and used in or on) a Facility and can be aggregated<br/>
in a Location.<br/>
The name of a piece of Equipment should preferably be a noun.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>physical, active</div>
<div class="examples"><strong>Examples: </strong>MRI scanner, Assembly line.</div></div>
`

const facility_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Facility</div></h2>
<div class="description"><strong>Description: </strong>A Facility represents a physical structure or environment.<br/>
A Facility is a specialization of a Node.<br/>
It represents a physical resource that has the capability of facilitating (e.g., housing or locating)<br/>
the use of equipment.<br/>
It is typically used to model factories, buildings, or outdoor constructions that<br/>
have an important role in production or distribution processes.<br/>
Facilities can be interconnected by Distribution Networks. Material can be accessed<br/>
(e.g., created, used, stored, moved, or transformed) by Equipment.<br/>
A Facility can serve other Facilities, and also Business Roles and Actors.<br/>
Locations can be assigned to Facilities. A Facility can be composed of other Facilities<br/>
and can be aggregated in a Location.<br/>
The name of a Facility should preferably be a noun referring to the type of Facility.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>physical, active</div>
<div class="examples"><strong>Examples: </strong>Oil refinery, Factory, Laboratory, Warehouse,<br/>
Shopping Mall, Office.</div></div>
`


const gap_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name"><h2>Gap</h2></div>
<div class="description"><strong>Description: </strong>A Gap represents a statement of difference between two Plateaus<br/>
The Gap element is associated with two Plateaus (e.g., Baseline and Target Architectures,<br/>
or two subsequent Transition Architectures),<br/>
and represents the differences between these Plateaus.
</div>
<div class ="categories"> <strong>Categories: </strong>implementation_migration</div>
<div class="examples"><strong>Examples: </strong>"Gap between the Baseline and Target infrastructure",<br/>
"Knowledge of how to address customer needs".</div></div>
`

const goal_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Goal</div></h2>
<div class="description"><strong>Description: </strong>A Goal represents a high-level statement of intent, direction,<br/>
or desired end state for an organization and its stakeholders.<br/>
An end can represent anything a stakeholder may desire, such as a state of affairs,<br/>
or a produced value. Goals are typically used to measure success of an organization.<br/>
Goals are generally expressed using qualitative words.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>Increase profit, reduce waiting times at the helpdesk,<br/>
introduce on-line portfolio management, more sales</div></div>
`


const grouping_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify">
 <div class="name"><h2>Grouping</h2></div>
<div class="description"><strong>Description: </strong>The Grouping element aggregates or composes concepts that belong together<br/>
 based on some common characteristic.<br/>
The Grouping element is used to aggregate or compose an arbitrary group of concepts,<br/>
which can be elements and/or relationships of the same or of different types.<br/>
An Aggregation or Composition relationship is used to link the Grouping element to the grouped concepts.
</div>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>Aggregate two Processes and an Object that together Realize a Service</div></div>
`

const junction_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify">
 <div class="name"><h2>Junction</h2></div>
<div class="description"><strong>Description: </strong>A Junction is used to connect relationships of the same type.<br/>A Junction may have multiple incoming relationships and one outgoing relationship, one incoming relationship<br/> and multiple outgoing relationships, or multiple incoming and outgoing relationships.<br/>
The relationships that can be used in combination with a Junction are all the dynamic relationships,<br/> as well as Assignment, Realization, and Association.<br/> A Junction is used to explicitly express that several elements together participate in the relationship (and Junction)<br/>or that one of the elements participates in the relationship (or Junction).<br/>
Ensure that only relationships of the same type are used to connect elements and Junctions.<br/>
There are two types - And and Or</br>

</div>
<div class ="categories"> <strong>Categories: </strong>Other</div>
<div class="examples"><strong>Examples: </strong>An "assess application" Business Process can lead to a choice Junction (split) <br/> to accept or reject the client application and route to alternative processes for each case.</div></div>
`

const implementation_event_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Implementation Event</h2></div>
<div class="description"><strong>Description: </strong>An Implementation Event is a behaviour element that denotes a state change related<br/>
to implementation or migration.<br/>
Work Packages may be triggered or interrupted by an Implementation Event.<br/>
Also, work packages may raise events that trigger other behaviour.<br/>
Unlike a Work Package, an event is instantaneous: it does not have duration.<br/>
An Implementation Event may have a time attribute that denotes the<br/>
moment or moments at which the event happens.<br/>
Implementation Events access Deliverables to fulfil project objectives.<br/>
An Implementation Event may trigger or be triggered (raised) by a Work Package or a Plateau.<br/>
An Implementation Event may access a Deliverable and may be composed of other Implementation Events.<br/>
An Implementation Event may be associated with any core element;<br/>
e.g., to indicate a lifecycle state change.<br/>
The name of an Implementation Event should preferably be a verb in the perfect tense.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>implementation_migration</div>
<div class="examples"><strong>Examples: </strong>"Release to production", "Project initiation phase completed".</div></div>
`


const location_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Location</h2></div>
<div class="descrition"><strong>Description: </strong>A Location represents a conceptual or physical place or position where concepts are located<br/>
(e.g., structure elements) or performed (e.g., behavior elements).<br/>
The Location element is used to model the places where (active and passive) structure elements<br/>
such as business actors, application components, and devices are located.<br/>
This is modeled by means of an aggregation relationship from a location to structure element.<br/>
A location can also aggregate a behavior element, to indicate where the behavior is performed.</div>
<div class ="categories"> <strong>Category: </strong>
other, composite</div>
<div class="examples"><strong>Examples: </strong>
Main Office, Local Office, Room.</div></div>
`
const material_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Material</h2></div>
<div class="descrition"><strong>Description: </strong>Material represents tangible physical matter or energy.<br/>
Material can have attributes such as size and weight.<br/>
It is typically used to model raw materials and physical products,<br/>
and also energy sources such as fuel. Material can be accessed by physical processes.<br/>
The name of Material should be a noun. Pieces of Material may be composed of other pieces of Material.<br/>
</div>
<div class ="categories"> <strong>Category: </strong>physical, passive</div>
<div class="examples"><strong>Examples: </strong>
Plastic Case, Internal Antenna, Speedometer.</div></div>
`

const meaning_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Meaning</h2></div>
<div class="descrition"><strong>Description: </strong>Meaning represents the knowledge or expertise present in, or the interpretation given to, a concept in a particular context.<br/>
A Meaning represents the interpretation of an element of the architecture.<br/>
It is a description that expresses the intent of that element; i.e., how it informs the external user.<br/>
A Meaning can be associated with any core element.<br/>
To denote that a Meaning is specific to a particular Stakeholder,<br/>
this Stakeholder can also be associated to the Meaning.<br/>
The name of a Meaning should preferably be a noun or noun phrase.<br/>
<div class ="categories"> <strong>Category: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>Policy explanation, Insurance Policy notification.</div></div>
`

const node_html = `<div xmlns="http://www.w3.org/1999/xhtml"><div class="name" ><h2>Node</h2></div>
<div class="descrition" align="justify"><strong>Description:</strong> A Node represents a computational or physical resource that hosts, manipulates,<br/>
or interacts with other computational or physical resources.<br/>
Nodes are elements that perform technology behaviour and execute, store,<br/>
and process technology objects such as Artifacts. For instance, Nodes are used<br/>
to model application platforms.
Nodes can be interconnected by Paths.<br/>
A node may be assigned to an Artifact to model that the Artifact is deployed on the Node.<br/>
The name of a Node should preferably be a noun. A node may consist of sub-nodes.<br/>
<div class ="categories"> <strong>Category:</strong>technology,active</div>
<div class="examples"><strong>Examples:</strong>Mainframe, Unix Server Farm, Application Server, Firewall.</div></div>
`

const outcome_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Outcome</h2></div>
<div class="descrition"><strong>Description: </strong> An Outcome represents an end result.<br/>
Outcomes are high-level, business-oriented results produced by capabilities of an organization.<br/>
Outcomes are closely related to requirements, goals, and other intentions.<br/>
Outcomes are the end results, and goals or requirements are often formulated<br/>
in terms of outcomes that should be realized.<br/>
Capabilities are designed to achieve such outcomes.<br/>
Outcome names should identify end results that have been achieved in order to<br/>
avoid confusion with actions or goals.<br/>
At a minimum, outcome names should consist of a noun identifying the end result followed<br/>
by a past-tense verb or adjective indicating that the result has been achieved.<br/>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>"First-place ranking achieved", "Key supplier partnerships in place", "2015 quarterly profits rose 10%"</div></div>
`


const path_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Path</div></h2>
<div class="description"><strong>Description: </strong>A Path represents a link between two or more Nodes, through which these nodes can exchange<br/>
data, energy, or material.<br/>
A Path is used to model the logical communication (or distribution) relations between Nodes.<br/>
It is realized by one or more Networks, which represent the physical communication (or distribution) links.<br/>
A Path connects two or more Nodes. A Path is realized by one or more Networks.
<br/> A Path can aggregate Nodes.</div>
<div class ="categories"> <strong>Categories: </strong>technology, active</div>
<div class="examples"><strong>Examples: </strong>Message Queuing, Data Replication Path.</div></div>
`

const plateau_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Plateau</h2></div>
<div class="description"><strong>Description: </strong>A Plateau represents a relatively stable state of the<br/>
architecture that exists during a limited period of time.</div>
<div class ="categories"> <strong>Categories: </strong>implementation_migration</div>
<div class="examples"><strong>Examples: </strong>Baseline, Transition 1, Strategic Plan complete, Services in place.</div></div>
`

const principle_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Principle</h2></div>
<div class="description"><strong>Description: </strong>A Principle represents a statement of intent defining a general property that<br/>
applies to any system in a certain context in the architecture.<br/>
Principles define intended properties of systems.<br/>
A Principle defines a general property that applies to any system in a certain context.<br/>
A Principle is motivated by some goal or driver.<br/>
Organizational values, best practices, and design knowledge may be reflected and made applicable in terms of principles.<br/>
Principles are strongly related to goals and requirements. Similar to requirements, principles define intended properties of systems.</div>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>"Systems should be customer facing", "Customers should have a great experience", "Colleagues should be informed",<br/>
"Open Source Software should be used"</div></div>
`

const product_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Product</h2></div>
<div class="description"><strong>Description: </strong>A Product represents a coherent collection of services and/or passive structure elements,<br/>
accompanied by a contract/set of agreements, which is offered as a whole to (internal or external) customers.<br/>
A Product consists of a collection of Services, and a Contract that specifies the characteristics,<br/>
rights, and requirements associated with the Product.<br/>
A Product may aggregate Business Services or Application Services, as well as a Contract.<br/>
Generally, the Product element is used to specify a product type.<br/>
A Product may be offered both internally to the organisation and externally to customers.<br/>
A Value may be associated with a Product.<br/>
The name of a Product is usually the name which is used in the communication with customers,<br/>
or possibly a more generic noun (e.g., "travel insurance").</div>
<div class ="categories"> <strong>Categories: </strong>business,composite</div>
<div class="examples"><strong>Examples: </strong>A Travel Insurance Product consisting of Insurance Services and a Contract.</div></div>
`

const representation_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Representation</h2></div>
<div class="description"><strong>Description: </strong>A Representation represents a perceptible form of the information carried by a Business Object.<br/>
Representations (for example, messages or documents) are the perceptible carriers of information that are<br/>
related to Business Objects.<br/>
A single Business Object can have a number of different Representations.<br/>
A Representation may realize one or more Business Objects.<br/>
A Meaning can be associated with a Representation that carries this Meaning.<br/>
The name of a Representation is preferably a noun.</div>
<div class ="categories"> <strong>Categories: </strong>business,passive</div>
<div class="examples"><strong>Examples: </strong>Paper Bill, Request Form, Claim Form, Online Form.</div></div>
`

const requirement_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Requirement</h2></div>
<div class="description"><strong>Description: </strong>A Requirement represents a statement of need defining a property that applies<br/>
to a specific system as described by the architecture.<br/>
Requirements model the properties of these elements that are needed to achieve the "ends" that are modelled by the goals.<br/>
In this respect, requirements represent the "means" to realize goals.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>"Assign personal assistant", "Provide on-line portfolio service", "Provide on-line information service",<br/>
"Use open source software"</div></div>
`

const resource_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Resource</h2></div>
<div class="description"><strong>Description: </strong>A Resource represents an asset owned or controlled by an individual or organization.<br/>
Resources are a central concept in the field of strategic management, economics, computer science, portfolio management,<br/>
and more. They are often considered, together with capabilities, to be sources of competitive advantage<br/>
for organizations.<br/>
The name of a Resource should preferably be a noun.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>strategy, structure.</div>
<div class="examples"><strong>Examples: </strong>Cash, Securities, Plant, Equipment, Land, Mineral Reserves, Patents,<br/>
Copyrights, Reputation, Brand, Skills/know-how.</div></div>
`

const stakeholder_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name"><h2>Stakeholder</h2></div>
<div class="description"><strong>Description: </strong>A Stakeholder represents the role of an individual, team, or organization (or classes thereof)<br/>
that represents their interests in the effects of the architecture.<br/>
A Stakeholder has one or more interests in, or concerns about, the organization and its enterprise architecture.<br/>
In order to direct efforts to these interests and concerns, stakeholders change, set, and emphasize goals.<br/>
The name of a Stakeholder should preferably be a noun.
</div>
<div class ="categories"> <strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>CEO, the board of directors, shareholders, customers, business,<br/>
and application architects</div></div>
`

const system_software_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name">
<h2>System Software</h2></div>
<div class="description"><strong>Description: </strong>System Software represents software that provides or contributes to an environment for storing,<br/>
executing, and using software or data deployed within it.<br/>
System Software is a specialization of a Node that is used to model the software environment<br/>
in which Artifacts run.<br/>
Usually, System Software is combined with a Device representing the hardware environment to form a general Node.<br/>
A Device or System Software can be assigned to other System Software;<br/>
e.g., to model different layers of software running on top of each other.<br/>
System Software can be assigned to Artifacts, to model that these Artifacts are deployed on that software.<br/>
System Software can realize other System Software.<br/>
A Node can be composed of System Software.<br/>
The name of System Software should preferably be a noun referring to the type of execution environment.
</div>
<div class ="categories"> <strong>Categories: </strong>technology, active</div>
<div class="examples"><strong>Examples: </strong>DBMS, DB2 System Software, Message Queuing, Operating System,<br/>
J2EE Application Server</div></div>
`

const technology_collaboration_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Technology Collaboration</h2></div>
<div class="description"><strong>Description: </strong>System Software represents software that provides or contributes to an environment for storing,<br/>
executing, and using software or data deployed within it.<br/>
System Software is a specialization of a Node that is used to model the software environment<br/>
in which Artifacts run.<br/>
Usually, System Software is combined with a Device representing the hardware environment to form a general Node.<br/>
A Device or System Software can be assigned to other System Software;<br/>
e.g., to model different layers of software running on top of each other.<br/>
System Software can be assigned to Artifacts, to model that these Artifacts are deployed on that software.<br/>
System Software can realize other System Software.<br/>
A Node can be composed of System Software.<br/>
The name of System Software should preferably be a noun referring to the type of execution environment.
</div>
<div class ="categories"> <strong>Categories: </strong>technology, active</div>
<div class="examples"><strong>Examples: </strong>DBMS, DB2 System Software, Message Queuing, Operating System,<br/>
J2EE Application Server</div></div>
`

const technology_event_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Technology Event</h2></div>
<div class="description"><strong>Description: </strong>A Technology Event represents a technology state change.<br/>
Technology Functions and other technology behaviour may be triggered or interrupted by a Technology Event.<br/>
Also, Technology Functions may raise events that trigger other infrastructure behaviour.<br/>
An event is instantaneous: it does not have duration.<br/>
Events may originate from the environment of the organization,<br/>
but also internal events may occur generated by, for example, other devices within the organization.<br/>
A Technology Event may trigger or be triggered (raised) by a Technology Function, Process, or Interaction.<br/>
A Technology Event may access a Data Object and may be composed of other Technology Events.<br/>
The name of a Technology Event should preferably be a verb in the perfect tense.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>technology, behavioural</div>
<div class="examples"><strong>Examples: </strong>Message received, Database update.</div></div>
`

const technology_function_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Technology Function</h2></div>
<div class="description"><strong>Description: </strong>A Technology Function represents a collection of technology behaviour that can be performed by a Node.<br/>
A Technology Function describes the internal behaviour of a Node;<br/>
for the user of a Node that performs a Technology Function, this function is invisible.<br/>
If its behaviour is exposed externally, this is done through one or more Technology Services.<br/>
A Technology Function abstracts from the way it is implemented.<br/>
A Technology Function may realize Technology Services.<br/>
Technology Services of other Technology Functions may serve Technology Functions.<br/>
A Technology Function may access Technology Objects.<br/>
A Node may be assigned to a Technology Function (which means that the Node performs the Technology Function).<br/>
The name of a Technology Function should preferably be a verb ending with "ing".<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>technology, behavioural</div>
<div class="examples"><strong>Examples: </strong>Providing Data Access, Managing Data.</div></div>
`

const technology_interaction_html = `<div xmlns="http://www.w3.org/1999/xhtml" align="justify"><div class="name" ><h2>Technology Interaction</h2></div>
<div class="description"><strong>Description: </strong>A Technology Interaction represents a unit of collective technology behaviour performed by<br/>
(a collaboration of) two or more Nodes.<br/>
A Technology Interaction describes the collective behaviour that is performed by the Nodes that<br/>
participate in a Technology Collaboration.<br/>
A Technology Interaction can also specify the externally visible behaviour needed to realize a Technology Service.<br/>
A Technology Collaboration may be assigned to a Technology Interaction.<br/>
A Technology Interaction may realize a Technology Service.<br/>
Technology Services may serve a Technology Interaction.<br/>
A Technology Interaction may access Artifacts.<br/>
The name of a technology interaction should clearly identify a series of technology behaviours.<br/>
</div>
<div class ="categories"> <strong>Categories: </strong>technology, behavioural</div>
<div class="examples"><strong>Examples: </strong>Client profile creation, Update customer records.</div></div>
`

const technology_interface_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Technology Interface</h2></div>
<div class="description">A Technology Interface represents a point of access where technology services offered by a Node can be accessed.<br/>
A Technology Interface specifies how the technology services of a Node can be accessed by other Nodes.<br/>
A Technology Interface exposes a Technology Service to the environment.<br/>
A Technology Interface specifies a kind of contract that a component realizing this interface must fulfil.<br/>
A Technology Interface may be part of a Node through composition, which means that these interfaces<br/>
are provided by that Node, and can serve other Nodes.<br/>
A Technology Interface can be assigned to a Technology Service, to expose that service to the environment.<br/>
The name of a Technology Interface should preferably be a noun.<br/>
<div class ="categories"> <strong>Categories: </strong>technology, active</div>
<div class="examples"><strong>Examples</strong>Client software, Management Interface.</div></div>
`

const technology_process_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" ><h2>Technology Process</h2></div>
<div class="description"> <strong>Description: </strong>Technology Process represents a sequence of technology behaviours that achieves a specific result.<br/>
A Technology Process describes internal behaviour of a Node.<br/>
If its behaviour is exposed externally, this is done through one or more Technology Services.<br/>
A Technology Process abstracts from the way it is implemented.<br/>
A Technology Process may realize Technology Services.<br/>
Other Technology Services may serve (be used by) a Technology Process.<br/>
A Node may be assigned to a Technology Process, which means that this Node performs the process.<br/>
The name of a Technology Process should clearly identify a series of technology behaviours using a verb<br/>
or verb-noun combination.</div>
<div class ="categories"> <strong>Categories: </strong>technology, behavioural</div>
<div class="examples"><strong>Examples: </strong>Boot up system, Replicate database</div></div>
`

const technology_service_html = `<div xmlns="http://www.w3.org/1999/xhtml"   align="justify"><div class="name" ><h2>Technology Service</div></h2>
<div class="description"><strong>Description: </strong>A Technology Service represents an explicitly defined exposed technology behaviour.<br/>
A Technology Service exposes the functionality of a Node to its environment.<br/>
This functionality is accessed through one or more Technology Interfaces.<br/>
It may require, use, and produce Artifacts.<br/>
Typical Technology Services may, for example, include messaging, storage, naming, and directory services.<br/>
It may access Artifacts; e.g., a file containing a message.<br/>
A Technology Service may serve Application Components or Nodes.<br/>
A Technology Service is realized by a Technology Function or Process.<br/>
A Technology Service is exposed by a Node by assigning Technology Interfaces to it.<br/>
A Technology Service may access Artifacts.<br/>
The name of a Technology Service should preferably be a verb ending with "ing".</div>
<div class ="categories"> <strong>Categories: </strong>technology, behavioural</div>
<div class="examples"><strong>Examples: </strong>Messaging Service, Customer File Service, Claim Files Service.</div></div>
`

const value_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" style="display:block;"><h2>Value</h2></div>
<div class="description"><strong>Description: </strong>Value represents the relative worth, utility, or importance of a concept.<br/>
Value may apply to what a party gets by selling or making available some product or service,<br/>
or it may apply to what a party gets by buying or obtaining access to it.<br/>
Value may be expressed in terms of money, but non-monetary value is also essential to business<br/>
- for example, practical/functional value (including the right to use a service),<br/>
and the value of information or knowledge.<br/>
Though Value can hold internally for some system or organisational unit,<br/>
it is most typically applied to external appreciation of goods, services, information, knowledge,<br/>
or money, normally as part of some sort of customer-provider relationship.<br/>
A Value can be associated with any concept. To model the stakeholder for whom this Value applies,<br/>
this stakeholder can also be associated with that Value.<br/>
It is recommended to try and express the name of a Value as an action or state that can be performed<br/>
or reached as a result of the corresponding service being available.
</div>
<div class ="categories"><strong>Categories: </strong>motivation</div>
<div class="examples"><strong>Examples: </strong>Be insured, Improve relationship, Improve knowledge, Experience benefit of a product.</div></div>
`

const valuestream_html = `<div xmlns="http://www.w3.org/1999/xhtml"  align="justify"><div class="name" style="display:block;"><h2>Value Stream</h2></div>
<div class="description"><strong>Description: </strong>A Value Stream represents a sequence of activities that create an overall result for a customer, stakeholder, or end user.<br/>
A value stream describes how an enterprise organizes its activities to create value.<br/>
Value streams are typically realized by business processes and possibly other core behavior elements.<br/>
Value streams may be defined at different levels of the organization;<br/>
e.g., at the enterprise level, business unit level, or department level.<br/>
Value streams can be a composition or aggregation of value-adding activities.<br/>
These are also modeled with the value stream element and are known as value (stream) stages,<br/>
each of which creates and adds incremental value from one stage to the next.<br/> 
These stages are typically related using flow relationships to model the flow of value between them.<br/>
Resources can be assigned to value streams and capabilities can serve (i.e., enable) a value stream
</div>
<div class ="categories"><strong>Categories: </strong>strategy, behaviour</div>
<div class="examples"><strong>Examples: </strong>Acquire Insurance Product, Acquire Data, Perform Analysis.</div></div>
`

const workpackage_html = `<div xmlns="http://www.w3.org/1999/xhtml"   align="justify"><div class="name" ><h2>Workpackage</h2></div>
<div class="description"><strong>Description: </strong>A Work Package represents a series of actions identified and<br/>
designed to achieve specific results within specified time and resource constraints.<br/>
The central behavioural element is a Work Package.<br/>
A Work Package is a behaviour element that has a clearly defined start and end date,<br/>
and realizes a well-defined set of Goals or Deliverables.<br/>
The Work Package element can be used to model sub-projects or tasks within a project,<br/>
complete projects, programs, or project portfolios.
</div>
<div class ="categories"><strong>Categories</strong>Implementation_Migration</div>
<div class="examples"><strong>Examples</strong>"Program to sustain implementation", "Project to secure funding",<br/>
"Project for CRM system integration"</div></div>
`

function oneLetterRelationCode(relation){
  var letterIndex=acg_ArchiMateRelations.indexOf(relation.data("type"));
  if (letterIndex+1){return ArchiMateRelationIDs[letterIndex]} else {return undefined}
 }

function allowedArchiMateRelation(edge){
  var letter=oneLetterRelationCode(edge);
  var sourceType=edge.source().data("type");
  var targetType=edge.target().data("type");
  var sourceIndex=ja_ArchiMateObjects.indexOf(sourceType);
  var targetIndex=ja_ArchiMateObjects.indexOf(targetType);

  if (letter === undefined || sourceIndex ===  undefined || targetIndex === undefined){
    console.log(sourceType+ " "+edge.data("type")+ " "+ " "+targetType + " undefined");
      ;
    return undefined} 
    else{
      console.log(sourceType+ " "+edge.data("type")+ " "+ ArchiMateRelations[sourceIndex][targetIndex+1]+ " "+targetType);
      return ArchiMateRelations[sourceIndex][targetIndex+1].includes(letter);
  }
}