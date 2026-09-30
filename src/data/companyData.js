/**
 * PAWAR CONSTRUCTIONS - Centralized Data Structure
 * Contains all static metadata, navigation links, company overview,
 * services, projects, strengths, team members, process steps, and contact placeholders.
 * 
 * NOTE: As per guidelines, all company statistics, clients, certificates, 
 * addresses, phone numbers, emails, and project claims use clearly marked placeholders.
 */

export const companyData = {
  name: "PAWAR CONSTRUCTIONS",
  legalName: "PAWAR CONSTRUCTIONS PVT. LTD.",
  shortName: "PAWAR",
  tagline: "Building Strong Foundations for a Better Tomorrow",
  subTagline: "Pawar Constructions delivers dependable construction solutions with a focus on quality, safety and customer satisfaction.",
  establishedYear: "[YEAR FOUNDED]",
  
  contact: {
    phone: "[COMPANY PHONE]",
    altPhone: "[COMPANY SECONDARY PHONE]",
    email: "[COMPANY EMAIL]",
    supportEmail: "[COMPANY INQUIRY EMAIL]",
    address: "[COMPANY ADDRESS]",
    headquarters: "[REGIONAL HQ ADDRESS / CORPORATE SUITE]",
    workingHours: "[BUSINESS HOURS]",
    whatsapp: "[WHATSAPP NUMBER]",
    landmark: "[OFFICE LANDMARK / METRO JUNCTION]",
    emergencySupport: "[24/7 SITE EMERGENCY CONTACT]",
  },
  // Alias for backward-compatibility
  get contactInfo() {
    return this.contact;
  },

  contactPageConfig: {
    heroTitle: "Let's Build Something Together",
    heroSubtitle: "Connect with Pawar Constructions to discuss your architectural vision, site feasibility, and transparent cost estimates.",
    whatsappCTA: "Chat on WhatsApp",
    mapHeading: "Our Corporate Location",
    mapSubtitle: "Strategically located for seamless site connectivity and client consultations."
  },

  socialLinks: [
    { name: "LinkedIn", url: "#", icon: "Linkedin" },
    { name: "Facebook", url: "#", icon: "Facebook" },
    { name: "Instagram", url: "#", icon: "Instagram" },
    { name: "Twitter", url: "#", icon: "Twitter" },
    { name: "YouTube", url: "#", icon: "Youtube" },
  ],

  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Strengths", path: "/strengths" },
    { label: "Contact", path: "/contact" },
  ],

  // Exact 4 Trust / Highlights Cards for Home Page
  trustCards: [
    {
      id: "trust-quality",
      title: "Quality Construction",
      desc: "High-grade certified materials, stringent quality control, and rigorous structural integrity on every project.",
      icon: "ShieldCheck"
    },
    {
      id: "trust-exp",
      title: "Experienced Professionals",
      desc: "Multi-decade engineering leadership, licensed project managers, and seasoned on-site foremen.",
      icon: "HardHat"
    },
    {
      id: "trust-delivery",
      title: "On-Time Delivery",
      desc: "Milestone-driven project monitoring, optimized scheduling, and timely client handovers.",
      icon: "Clock"
    },
    {
      id: "trust-satisfaction",
      title: "Customer Satisfaction",
      desc: "Transparent itemized billing, proactive communication, and lasting client partnerships.",
      icon: "HeartHandshake"
    }
  ],

  // Editable Statistics Placeholders
  stats: [
    { 
      id: "exp", 
      value: "[YEARS OF EXPERIENCE]", 
      label: "Years of Experience", 
      subtitle: "In civil contracting & infrastructure",
      isPlaceholder: true 
    },
    { 
      id: "projects", 
      value: "[PROJECTS COMPLETED]", 
      label: "Projects Completed", 
      subtitle: "Across diverse real-estate sectors",
      isPlaceholder: true 
    },
    { 
      id: "clients", 
      value: "[CLIENTS SERVED]", 
      label: "Clients Served", 
      subtitle: "Commercial & residential clients",
      isPlaceholder: true 
    },
    { 
      id: "team", 
      value: "[TEAM MEMBERS]", 
      label: "Team Members", 
      subtitle: "Engineers, supervisors & staff",
      isPlaceholder: true 
    },
  ],

  // Centralized Services Configuration (All 8 Core Disciplines)
  services: [
    {
      id: "residential-construction",
      title: "Residential Construction",
      image: "/images/project-residential.jpg",
      icon: "Home",
      shortDesc: "Bespoke luxury residences, modern multi-family apartments, and integrated gated township developments built with architectural finesse.",
      fullDesc: "From custom private estates to multi-tier residential towers, we deliver turnkey housing infrastructure engineered with seismic resilience, optimal natural ventilation, premium finishes, and strict regulatory adherence.",
      features: [
        "Luxury private villas & custom estates",
        "Multi-storey residential towers & gated layouts",
        "Seismic-compliant RCC framed structures",
        "Sustainable, eco-friendly green building practices"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=residential-construction"
    },
    {
      id: "commercial-construction",
      title: "Commercial Construction",
      image: "/images/project-commercial.jpg",
      icon: "Building2",
      shortDesc: "High-spec corporate offices, retail complexes, shopping plazas, and institutional facilities engineered for commercial success.",
      fullDesc: "We construct landmark commercial spaces with energy-efficient glass curtain walls, expansive column-free structural spans, advanced MEP integrations, multi-level basement parking, and complete fire-safety compliance.",
      features: [
        "Corporate headquarters & tech business hubs",
        "Commercial shopping malls & multiplex centers",
        "Educational academies & healthcare facilities",
        "Modern curtain glass facades & thermal envelopes"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=commercial-construction"
    },
    {
      id: "industrial-construction",
      title: "Industrial Construction",
      image: "/images/project-industrial.jpg",
      icon: "Factory",
      shortDesc: "Heavy manufacturing plants, automated logistics parks, cold storage warehouses, and pre-engineered steel buildings.",
      fullDesc: "Engineered specifically for heavy mechanical loads and seamless logistics flow, our industrial builds feature laser-screeded heavy-duty flooring, wide PEB steel frameworks, industrial ventilation, and utility integration.",
      features: [
        "Heavy manufacturing units & process plants",
        "Automated fulfillment warehouses & logistics hubs",
        "Pre-engineered steel (PEB) building superstructures",
        "High-tolerance heavy-duty industrial floor slabs"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=industrial-construction"
    },
    {
      id: "civil-construction",
      title: "Civil Construction",
      image: "/images/project-infrastructure.jpg",
      icon: "HardHat",
      shortDesc: "Heavy civil infrastructure including arterial concrete roads, bridges, flyovers, stormwater drainage, and municipal civil works.",
      fullDesc: "We execute large-scale public and private civil contracting with heavy mechanized machinery, certified structural concrete grades, precision GPS surveying, and durable sub-base engineering that withstands intense traffic.",
      features: [
        "Reinforced concrete highways & arterial roadways",
        "Elevated flyovers, bridges, and underpasses",
        "Stormwater drainage channels & culverts",
        "Sub-grade stabilization & mass earthworks"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=civil-construction"
    },
    {
      id: "renovation-remodeling",
      title: "Renovation & Remodeling",
      image: "/images/about-facade.jpg",
      icon: "Wrench",
      shortDesc: "Structural retrofitting, facility expansion, architectural modernizations, and seismic strengthening of existing structures.",
      fullDesc: "Extend building lifespans and upgrade operational efficiency through non-destructive structural audits, carbon-fiber composite strengthening, facade restoration, MEP modernization, and adaptive commercial reuse.",
      features: [
        "Seismic retrofitting & concrete beam strengthening",
        "Exterior facade modernization & waterproofing",
        "Complete MEP rewiring & HVAC retrofits",
        "Adaptive reuse and building expansions"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=renovation-remodeling"
    },
    {
      id: "project-management",
      title: "Project Management",
      image: "/images/about-engineers.jpg",
      icon: "Briefcase",
      shortDesc: "End-to-end turnkey project management, site supervision, statutory clearances, cost estimation, and schedule assurance.",
      fullDesc: "Complete EPC (Engineering, Procurement, and Construction) governance offering single-point accountability. We monitor critical paths via computerized schedules, oversee vendor compliance, and guarantee budget discipline.",
      features: [
        "Single-source turnkey EPC delivery model",
        "Gantt-chart driven critical path scheduling",
        "Statutory approvals, permits & licensing support",
        "Transparent bill-of-quantities (BOQ) cost control"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=project-management"
    },
    {
      id: "interior-finishing-work",
      title: "Interior & Finishing Work",
      image: "/images/service-interior.jpg",
      icon: "Paintbrush",
      shortDesc: "Architectural acoustic ceilings, precision carpentry, premium marble & vitrified tiling, and turnkey commercial fit-outs.",
      fullDesc: "We provide high-grade architectural interior craftsmanship for luxury residences, corporate boardrooms, retail showrooms, and hospitality suites, harmonizing aesthetic design with functional ergonomic precision.",
      features: [
        "Acoustic ceiling systems & recessed architectural lighting",
        "Premium Italian marble, granite, and vitrified tiling",
        "Custom architectural millwork, wood panelling & partitions",
        "Turnkey corporate, retail, and luxury interior fit-outs"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=interior-finishing-work"
    },
    {
      id: "site-development",
      title: "Site Development",
      image: "/images/service-sitedev.jpg",
      icon: "Layers",
      shortDesc: "Comprehensive site preparation, laser grading, bulk excavation, stormwater detention ponds, and subterranean utility cabling.",
      fullDesc: "Transform raw acreage into fully serviced, construction-ready parcels. Our site preparation includes clearing, geotechnical earth compaction, underground utilities, retention ponds, and perimeter security infrastructure.",
      features: [
        "Precision laser land grading & bulk excavation",
        "Underground storm drainage, water & sewage networks",
        "Soil stabilization, compaction & retaining walls",
        "Perimeter boundary walls & site access paving"
      ],
      ctaText: "Enquire Now",
      ctaLink: "/contact?service=site-development"
    }
  ],

  // 6-Step Construction Process (Requirement 01-06)
  servicesProcess: [
    {
      step: "01",
      title: "Requirement Discussion",
      desc: "Comprehensive discovery sessions to understand your architectural aspirations, functional parameters, spatial layout needs, and target budget.",
      icon: "MessageSquare"
    },
    {
      step: "02",
      title: "Site Assessment",
      desc: "Detailed on-site topographic surveys, geotechnical soil testing, environmental assessments, and municipal setback verification.",
      icon: "Compass"
    },
    {
      step: "03",
      title: "Planning & Estimation",
      desc: "Structural 3D BIM modeling, architectural CAD drafts, statutory municipal approvals, and itemized bill-of-quantities (BOQ) costing.",
      icon: "FileSpreadsheet"
    },
    {
      step: "04",
      title: "Execution",
      desc: "On-site equipment mobilization, precision excavation, placement of batch-tested steel and concrete, and daily safety management.",
      icon: "Hammer"
    },
    {
      step: "05",
      title: "Quality Inspection",
      desc: "Rigorous destructive and non-destructive structural audits, cube compression tests, MEP pressure testing, and finish tolerance checks.",
      icon: "CheckCircle2"
    },
    {
      step: "06",
      title: "Final Handover",
      desc: "Issuance of statutory occupancy certificates, joint client walkthrough, punch-list clearance, key handover, and documented structural warranties.",
      icon: "Key"
    }
  ],

  // Centralized Configuration for Services Page Content
  servicesPageConfig: {
    heroTitle: "Construction Solutions Built Around Your Needs",
    heroSubtitle: "Comprehensive general contracting, civil infrastructure, turnkey project management, and specialized interior works engineered to the highest safety and quality standards.",
    ctaHeading: "Have a project requirement?",
    ctaText: "Let's discuss your architectural specifications, site feasibility, and transparent cost estimates.",
    ctaButton: "Request a Quote"
  },

  // 5 Why Choose Us Cards for Home & Capabilities
  whyChooseUs: [
    {
      id: "why-quality",
      title: "Quality First",
      desc: "Rigorous batch laboratory testing of concrete, standard-tested steel reinforcement, and certified construction practices.",
      icon: "Award"
    },
    {
      id: "why-transparency",
      title: "Transparent Process",
      desc: "Clear itemized BOQ estimations, structured milestone billing, and total transparency with zero hidden costs.",
      icon: "FileCheck"
    },
    {
      id: "why-safety",
      title: "Safety Focused",
      desc: "100% PPE compliance, zero-incident safety protocols, and daily on-site toolbox hazard meetings.",
      icon: "ShieldAlert"
    },
    {
      id: "why-team",
      title: "Skilled Team",
      desc: "Experienced civil engineers, certified structural consultants, and seasoned site supervisors on every shift.",
      icon: "Users"
    },
    {
      id: "why-customer",
      title: "Customer-Centric Approach",
      desc: "Dedicated relationship manager, regular digital site progress updates, and enduring post-handover support.",
      icon: "HeartHandshake"
    }
  ],

  // Centralized Projects Portfolio Configuration
  projectsPageConfig: {
    heroTitle: "Our Projects",
    heroSubtitle: "Explore our construction work and completed projects.",
    categories: ["All", "Residential", "Commercial", "Industrial", "Civil", "Renovation"]
  },

  // 8 Categorized Projects with Editable Placeholders & Rich Details
  projects: [
    {
      id: "corporate-commercial-plaza",
      title: "Corporate Commercial Plaza",
      category: "Commercial",
      location: "Tech Park Corridor",
      status: "Ongoing",
      badge: "Ongoing Project",
      shortDesc: "A state-of-the-art commercial tower with energy-efficient glass facade, automated building management, and multi-level parking.",
      description: "Premium 18-storey corporate office development featuring high-performance insulated curtain glass, expansive column-free floor plates, integrated MEP building automation, high-speed elevators, and a three-tier subterranean parking deck.",
      imageUrl: "/images/project-commercial.jpg",
      gallery: [
        "/images/project-commercial.jpg",
        "/images/hero-bg.jpg",
        "/images/about-facade.jpg"
      ],
      scopeOfWork: [
        "Deep contiguous pile foundation and mass earthwork",
        "Reinforced concrete frame with post-tensioned floor slabs",
        "Unitized double-glazed reflective curtain wall facade",
        "Turnkey electrical substation, HVAC chillers, and fire suppression system",
        "Interior common area fit-out and architectural hardscaping"
      ],
      highlights: [
        "Zero-incident safety benchmark achieved over 500,000 man-hours",
        "Seismic Zone IV structural earthquake resilience engineering",
        "Designed to meet GRIHA / LEED Gold sustainability standards",
        "Critical path milestone execution tracking on schedule"
      ],
      specifications: {
        area: "350,000 SQ. FT.",
        timeline: "24 Months",
        clientType: "Commercial Tech Park Developer",
        structureType: "RCC Frame & Composite Steel"
      },
      tags: ["Commercial", "High-Rise", "Turnkey"]
    },
    {
      id: "grand-crest-luxury-residences",
      title: "Grand Crest Luxury Residences",
      category: "Residential",
      location: "Premium Suburban Enclave",
      status: "Ongoing",
      badge: "Ongoing Project",
      shortDesc: "Integrated residential community featuring luxury gated villas, clubhouse amenities, underground power cabling, and solar parks.",
      description: "Gated luxury residential enclave comprising contemporary private duplex villas, landscaped perimeter walkways, community clubhouse, underground rainwater harvesting channels, and decentralized rooftop solar generation.",
      imageUrl: "/images/project-residential.jpg",
      gallery: [
        "/images/project-residential.jpg",
        "/images/service-interior.jpg",
        "/images/about-facade.jpg"
      ],
      scopeOfWork: [
        "Comprehensive civil engineering and structural RCC superstructure",
        "Architectural masonry, waterproofing, and exterior acoustic plaster",
        "Premium imported marble, vitrified tiling, and custom millwork",
        "Underground storm water drainage and subterranean electrical conduits",
        "Community leisure clubhouse, swimming pool, and sports court construction"
      ],
      highlights: [
        "Standard-tested corrosion-resistant TMT steel reinforcement",
        "Multi-layer crystalline chemical waterproofing warranty",
        "High acoustic privacy insulation between villa units",
        "Bi-weekly digital drone progress logs provided to homeowners"
      ],
      specifications: {
        area: "220,000 SQ. FT.",
        timeline: "18 Months",
        clientType: "Real Estate Development Group",
        structureType: "RCC Framed Villa Enclave"
      },
      tags: ["Residential", "Township", "Villas"]
    },
    {
      id: "apex-industrial-logistics-hub",
      title: "Apex Industrial Logistics Hub",
      category: "Industrial",
      location: "State Logistics Zone",
      status: "Completed",
      badge: "Completed",
      shortDesc: "Pre-engineered heavy industrial logistics warehouse with automated dock levelers, heavy-load floor slab, and fire suppression system.",
      description: "Turnkey industrial logistics and fulfillment center engineered for heavy transport movement. Features high-bay pre-engineered steel superstructures, FM2 laser-screeded jointless flooring, automated loading docks, and 24/7 industrial utility integrations.",
      imageUrl: "/images/project-industrial.jpg",
      gallery: [
        "/images/project-industrial.jpg",
        "/images/service-sitedev.jpg",
        "/images/hero-bg.jpg"
      ],
      scopeOfWork: [
        "Geotechnical ground stabilization and heavy-load subgrade compaction",
        "Pre-engineered steel building (PEB) design, fabrication, and erection",
        "Jointless steel-fiber reinforced concrete industrial floor slab",
        "High-capacity automated hydraulic dock levelers and rapid roll doors",
        "ESFR high-density overhead fire sprinkler and hydrant network"
      ],
      highlights: [
        "Successfully delivered 3 weeks ahead of contractual deadline",
        "Heavy-duty 8-ton per square meter point load capacity floor",
        "High solar-reflectance cool roofing with continuous thermal ridge ventilators",
        "Complete statutory clearance and occupancy certificate attained"
      ],
      specifications: {
        area: "480,000 SQ. FT.",
        timeline: "12 Months",
        clientType: "Multinational Logistics Operator",
        structureType: "Pre-Engineered Steel PEB"
      },
      tags: ["Industrial", "Warehouse", "PEB Structure"]
    },
    {
      id: "metro-arterial-flyover-roadway",
      title: "Metro Arterial Flyover & Roadway",
      category: "Civil",
      location: "National Highway Junction",
      status: "Completed",
      badge: "Completed",
      shortDesc: "Reinforced concrete flyover and connecting arterial 4-lane carriage roadway delivered under government tender specifications.",
      description: "Major arterial civil infrastructure project encompassing a 4-lane elevated reinforced concrete flyover, pre-stressed concrete I-girders, slip roads, pedestrian underpasses, and high-capacity stormwater canalization designed for heavy freight traffic.",
      imageUrl: "/images/project-infrastructure.jpg",
      gallery: [
        "/images/project-infrastructure.jpg",
        "/images/service-sitedev.jpg",
        "/images/about-engineers.jpg"
      ],
      scopeOfWork: [
        "Bored cast-in-situ concrete pile foundation and pier caps",
        "Pre-cast post-tensioned concrete girder launching and deck slab casting",
        "Multi-layer asphaltic concrete wearing coat and mastic seal",
        "Reinforced earth (RE) approach walls and slip road construction",
        "Crash barriers, LED gantry lighting, and road safety signage"
      ],
      highlights: [
        "100% adherence to Ministry of Road Transport & Highways (MORTH) specs",
        "Zero traffic disruption during nighttime girder erection phases",
        "Third-party non-destructive ultrasonic concrete testing passed",
        "Delivered with 10-year structural warranty certificate"
      ],
      specifications: {
        area: "[STRETCH: 3.2 KILOMETERS]",
        timeline: "20 Months",
        clientType: "State Infrastructure Development Corp",
        structureType: "Pre-stressed Concrete Bridge"
      },
      tags: ["Civil", "Infrastructure", "Highway"]
    },
    {
      id: "horizon-tech-park-modernization",
      title: "Horizon Tech Park Modernization",
      category: "Renovation",
      location: "Central Commercial District",
      status: "Ongoing",
      badge: "Ongoing Project",
      shortDesc: "Comprehensive structural retrofit, seismic strengthening, facade enhancement, and MEP modernization of a multi-story office building.",
      description: "Structural retrofit and architectural revitalization of an operational 8-storey commercial facility. Work includes carbon-fiber composite beam wrapping, foundation underpinning, thermal glass facade replacement, and complete interior lobby transformation.",
      imageUrl: "/images/about-facade.jpg",
      gallery: [
        "/images/about-facade.jpg",
        "/images/service-interior.jpg",
        "/images/project-commercial.jpg"
      ],
      scopeOfWork: [
        "Non-destructive structural core testing and load re-evaluation",
        "Carbon fiber reinforced polymer (CFRP) structural beam wrapping",
        "Complete replacement of outdated glazing with modern energy-efficient louvers",
        "High-efficiency VRF HVAC installation and electrical busduct renewal",
        "Lobby interior remodeling with acoustic ceilings and marble finishes"
      ],
      highlights: [
        "Executed while building remained partially occupied with zero disruptions",
        "35% reduction in building operational energy consumption achieved",
        "Restored structural lifespan by an estimated 30+ years",
        "Complete architectural modernization without demolition waste"
      ],
      specifications: {
        area: "160,000 SQ. FT.",
        timeline: "10 Months",
        clientType: "Corporate Commercial Asset Trust",
        structureType: "Retrofitted RCC Frame"
      },
      tags: ["Renovation", "Structural Retrofit", "Facade"]
    },
    {
      id: "highland-green-villas",
      title: "Highland Green Township Villas",
      category: "Residential",
      location: "Valley Foothills Sector",
      status: "Completed",
      badge: "Completed",
      shortDesc: "Eco-friendly residential community featuring 45 luxury row villas, underground utilities, and rainwater recharge shafts.",
      description: "Sustainable residential master development offering individual villas with private terrace gardens, subterranean electrical and sewage piping, paved internal avenue roads, and solar street lighting.",
      imageUrl: "/images/project-residential.jpg",
      gallery: [
        "/images/project-residential.jpg",
        "/images/service-interior.jpg",
        "/images/hero-bg.jpg"
      ],
      scopeOfWork: [
        "Turnkey civil excavation, foundation, and RCC superstructure",
        "Architectural joinery, thermal roof insulation, and terrace waterproofing",
        "Internal interlocking paver road networks and stormwater harvesting wells",
        "Sewage treatment plant (STP) installation and treated water recycling network",
        "Final occupancy clearance and individual villa homeowner handover"
      ],
      highlights: [
        "100% on-time handover of all 45 villa units",
        "Rainwater recharge systems preserving 90% of site runoff",
        "Zero punch-list defects reported at final client inspection",
        "Full five-year structural and seepage warranty granted"
      ],
      specifications: {
        area: "180,000 SQ. FT.",
        timeline: "16 Months",
        clientType: "Private Housing Consortium",
        structureType: "Residential RCC Superstructure"
      },
      tags: ["Residential", "Township", "Completed"]
    },
    {
      id: "skyline-business-tower",
      title: "Skyline Executive Business Tower",
      category: "Commercial",
      location: "Financial Enterprise District",
      status: "Completed",
      badge: "Completed",
      shortDesc: "Modern 14-storey business center with architectural glass atrium, multi-tier retail podium, and high-speed elevator banks.",
      description: "Grade-A commercial landmark built to house banking institutions and corporate headquarters. Featuring an expansive four-storey structural glass atrium, post-tensioned floor slabs, intelligent building management systems, and double-basement parking.",
      imageUrl: "/images/project-commercial.jpg",
      gallery: [
        "/images/project-commercial.jpg",
        "/images/about-facade.jpg",
        "/images/hero-bg.jpg"
      ],
      scopeOfWork: [
        "Deep diaphragm wall construction and basements excavation",
        "High-strength M50 grade concrete pour for core columns and shear walls",
        "Structural steel space-frame atrium roof and spider glass glazing",
        "Integrated building management (BMS) and smart access control",
        "Comprehensive exterior hardscaping and road integration"
      ],
      highlights: [
        "Delivered within approved contractual budget without variation claims",
        "Acoustic rating engineered for low ambient indoor decibel levels",
        "Third-party structural audit certificate issued by independent civil institute",
        "100% occupancy achieved within 3 months of handover"
      ],
      specifications: {
        area: "290,000 SQ. FT.",
        timeline: "22 Months",
        clientType: "Financial Services Conglomerate",
        structureType: "High-Rise RCC Shear Wall"
      },
      tags: ["Commercial", "High-Rise", "Completed"]
    },
    {
      id: "suburban-drainage-road-network",
      title: "Suburban Arterial Road & Canalization",
      category: "Civil",
      location: "Industrial Growth Corridor",
      status: "Ongoing",
      badge: "Ongoing Project",
      shortDesc: "Heavy civil infrastructure comprising 6-kilometer dual carriage concrete expressway and reinforced stormwater culvert network.",
      description: "Major municipal civil engineering project providing flood mitigation and heavy freight connectivity. Includes reinforced concrete box culverts, high-load pavement quality concrete (PQC), underground utility ducts, and junction flyover ramps.",
      imageUrl: "/images/project-infrastructure.jpg",
      gallery: [
        "/images/project-infrastructure.jpg",
        "/images/service-sitedev.jpg",
        "/images/about-engineers.jpg"
      ],
      scopeOfWork: [
        "Mass excavation, sub-grade stabilization, and granular sub-base placement",
        "Dry lean concrete (DLC) and slip-form pavement quality concrete (PQC)",
        "Reinforced cement concrete (RCC) box culverts and canal lining",
        "Utility duct crossings and high-voltage electrical cabling protection",
        "Modern smart traffic signaling, retro-reflective markings, and crash barriers"
      ],
      highlights: [
        "Laser-guided paving ensuring high international roughness index (IRI)",
        "Advanced flood runoff capacity calculated for 50-year storm models",
        "Continuous field laboratory batch testing of cement concrete mix",
        "Active traffic diversions managed safely throughout construction"
      ],
      specifications: {
        area: "[STRETCH: 6.0 KILOMETERS]",
        timeline: "18 Months",
        clientType: "Municipal Development Authority",
        structureType: "Rigid Concrete Pavement & Culverts"
      },
      tags: ["Civil", "Infrastructure", "Roadways"]
    },
    {
      id: "precision-manufacturing-plant",
      title: "Precision Tech Manufacturing Plant",
      category: "Industrial",
      location: "High-Tech Industrial Corridor",
      status: "Ongoing",
      badge: "Ongoing Project",
      shortDesc: "Automated precision manufacturing facility with clean-room bays, heavy machinery foundations, and integrated overhead gantry cranes.",
      description: "Turnkey engineering and construction of an advanced industrial manufacturing campus. Includes heavy vibration-isolated foundation plinths for high-precision CNC machinery, pre-engineered structural steel framework, insulated facade panels, and dedicated substation facilities.",
      imageUrl: "/images/project-manufacturing.jpg",
      gallery: [
        "/images/project-manufacturing.jpg",
        "/images/project-industrial.jpg",
        "/images/service-sitedev.jpg"
      ],
      scopeOfWork: [
        "Deep pile foundation and vibration-isolated precision machine pits",
        "Heavy structural steel framing with 20-ton overhead crane runways",
        "Clean room architectural partitions and epoxy ESD flooring",
        "High-capacity electrical transformer yard and automated HVAC air filtration",
        "Dedicated multi-bay logistics loading terminal and internal roadways"
      ],
      highlights: [
        "Rigorous tolerance floor leveling compliant with DIN 18202 standards",
        "Energy-efficient thermal envelope with continuous solar rooftop panels",
        "Zero loss-time incidents logged across 300,000 project man-hours",
        "Comprehensive statutory environmental clearance achieved"
      ],
      specifications: {
        area: "310,000 SQ. FT.",
        timeline: "14 Months",
        clientType: "Advanced Precision Manufacturing Corp",
        structureType: "PEB & Isolated Machine Foundations"
      },
      tags: ["Industrial", "Manufacturing", "PEB Structure"]
    },
    {
      id: "heritage-commercial-hub-retrofit",
      title: "Innovation Hub Commercial Retrofit",
      category: "Renovation",
      location: "Historic Downtown Financial District",
      status: "Completed",
      badge: "Completed",
      shortDesc: "Contemporary glass curtain wall retrofit and adaptive reuse of a multi-storey commercial facility with integrated green energy systems.",
      description: "Turnkey architectural renovation and structural modernization of an established commercial campus. Features double-glazed acoustic curtain walling, structural column retrofitting, landscaped civic plaza integration, energy-efficient LED automation, and modernized reception atrium.",
      imageUrl: "/images/project-retrofit.jpg",
      gallery: [
        "/images/project-retrofit.jpg",
        "/images/about-facade.jpg",
        "/images/service-interior.jpg"
      ],
      scopeOfWork: [
        "Ultrasonic non-destructive testing of existing RCC framework",
        "Structural steel bracing and seismic tie-back retrofitting",
        "Turnkey architectural glass curtain wall replacement and solar louvers",
        "Centralized VRF air conditioning and intelligent building automation (BMS)",
        "Pedestrian hardscaping, plaza water features, and subterranean drainage"
      ],
      highlights: [
        "Completed on schedule while maintaining pedestrian safety in downtown sector",
        "40% reduction in thermal heat gain through insulated Low-E glazing",
        "Complete architectural revitalization extending asset life by 35 years",
        "Received municipal commendation for sustainable urban revitalisation"
      ],
      specifications: {
        area: "195,000 SQ. FT.",
        timeline: "12 Months",
        clientType: "Urban Redevelopment Corporation",
        structureType: "Modernized RCC & Glass Curtain Wall"
      },
      tags: ["Renovation", "Commercial", "Modernization"]
    }
  ],

  teamMembers: [
    {
      id: "team-1",
      name: "Senior Operations Director",
      role: "Head of Operations & Strategic Planning",
      qualification: "[QUALIFICATIONS: B.Tech Civil, M.Tech Structural Engineering, 20+ Yrs Exp]",
      bio: "[EXECUTIVE BIO: Oversees master project execution, regulatory compliance, engineering quality assurance, and company-wide construction safety policies.]",
      imagePlaceholder: "[DIRECTOR PHOTO]"
    },
    {
      id: "team-2",
      name: "Chief Project Engineer",
      role: "Lead Project & Site Management",
      qualification: "[QUALIFICATIONS: B.E. Civil, PMP Certified, 16+ Yrs Exp in High-Rise Civil Works]",
      bio: "[EXECUTIVE BIO: Directs on-site execution, vendor coordination, critical path milestones, and equipment mobilization across all ongoing developments.]",
      imagePlaceholder: "[ENGINEER PHOTO]"
    },
    {
      id: "team-3",
      name: "Head of Quality & Safety (HSE)",
      role: "HSE Compliance & Material Testing Manager",
      qualification: "[QUALIFICATIONS: NEBOSH Certified, M.Sc Industrial Safety, 14+ Yrs Exp]",
      bio: "[EXECUTIVE BIO: Implements strict job-site safety rules, zero-incident safety protocols, regular batch laboratory material testing, and environmental compliance.]",
      imagePlaceholder: "[HSE MANAGER PHOTO]"
    },
    {
      id: "team-4",
      name: "Head of Commercial & Contracts",
      role: "Procurement, Estimation & Legal",
      qualification: "[QUALIFICATIONS: Chartered Accountant / Quantity Surveyor, 15+ Yrs Exp]",
      bio: "[EXECUTIVE BIO: Manages competitive procurement, client estimating, project budgeting, and transparent milestone invoicing with complete fiscal governance.]",
      imagePlaceholder: "[COMMERCIAL HEAD PHOTO]"
    }
  ],

  values: [
    { title: "Reliability & Durability", desc: "Delivering lasting structures built with prime materials, precision engineering, and adherence to highest industry benchmarks." },
    { title: "Technical Excellence", desc: "Striving for perfection in every structural calculation, concrete pour, and finish detail." },
    { title: "Process Innovation", desc: "Deploying modern construction techniques, BIM planning, and modern site machinery to increase efficiency." },
    { title: "Workforce Empowerment", desc: "Equipping our engineers, site supervisors, and artisans with continuous training and safety gear." },
    { title: "Client Delight", desc: "Honoring contractual timelines and budgets, ensuring full transparent communication through every build phase." }
  ],

  // Strengths Page Configuration
  strengthsPageConfig: {
    heroTitle: "Why Choose Pawar Constructions?",
    heroSubtitle: "Engineered on structural integrity, verified with certified batch testing, and delivered through uncompromising craftsmanship across every project milestone.",
    timelineTitle: "Our Construction Process Timeline",
    timelineSubtitle: "From the initial consultation to final key handover, our streamlined 5-stage project lifecycle ensures complete quality governance, safety, and transparency.",
    ctaHeading: "Start Your Project With Us",
    ctaSubtitle: "Whether planning a commercial development, residential enclave, industrial manufacturing campus, or public civil infrastructure, partner with an engineering team dedicated to flawless execution.",
    ctaButton: "Schedule Consultation"
  },

  // 8 Core Strengths with Detailed Explanations, Icons, Supporting Visuals, and Metrics
  strengths: [
    {
      id: "quality-materials",
      number: "01",
      title: "Quality Materials",
      icon: "ShieldCheck",
      tagline: "Certified Raw Materials & Independent Batch Laboratory Testing",
      explanation: "Every structural component begins with certified, traceable raw materials. We source exclusively from premier ISI-certified cement manufacturers and corrosion-resistant primary steel plants. Dispatches are subjected to independent compressive cube strength testing and tensile rebar elongation audits prior to casting, guaranteeing unyielding load resistance.",
      visual: "/images/strength-materials.jpg",
      visualAlt: "Civil engineers conducting batch concrete and rebar testing in quality laboratory",
      visualBadge: "Certified Lab Tested",
      metric: "M40/M50 & Fe-550D",
      metricLabel: "Standard Concrete & Steel Grades",
      keyPoints: [
        "Independent compressive cube laboratory crushing tests at 7 & 28 days",
        "Corrosion-resistant TMT steel reinforcement with certified chemical composition",
        "Premium aggregate gradation and mechanized sand washing for zero organic impurities",
        "Standard multi-barrier waterproofing membranes on all subterranean and terrace zones"
      ]
    },
    {
      id: "skilled-professionals",
      number: "02",
      title: "Skilled Professionals",
      icon: "Users",
      tagline: "Experienced Civil Engineers, Structural Consultants & Certified Foremen",
      explanation: "Great buildings demand seasoned leadership. Our multidisciplinary engineering desk pairs senior civil consultants and structural designers with certified on-site foremen and safety officers. With decades of hands-on contracting experience, our supervisors ensure that site drawings translate flawlessly into physical reality.",
      visual: "/images/about-engineers.jpg",
      visualAlt: "Pawar Constructions engineering leaders reviewing structural schematics on site",
      visualBadge: "Licensed Engineering Desk",
      metric: "15+ Years",
      metricLabel: "Average Site Leadership Experience",
      keyPoints: [
        "Certified structural engineers on site during critical reinforcement casting",
        "Dedicated HSE (Health, Safety & Environment) officers on every active shift",
        "Continuous technical upskilling workshops for site technicians and machine operators",
        "Rigorous vendor qualification and certified MEP engineering specialists"
      ]
    },
    {
      id: "safety-first",
      number: "03",
      title: "Safety First",
      icon: "HardHat",
      tagline: "Zero-Incident Safety Culture & Mandatory PPE Enforcement",
      explanation: "We believe no project milestone is urgent enough to compromise worker safety. Every site operates under strict zero-incident occupational health protocols, incorporating mandatory 100% PPE compliance, daily morning toolbox hazard meetings, certified steel staging, heavy machinery safety perimeters, and regular third-party scaffolding audits.",
      visual: "/images/strength-safety.jpg",
      visualAlt: "Construction crew holding morning safety briefing with PPE and site safety rules",
      visualBadge: "Zero-Incident Protocol",
      metric: "100%",
      metricLabel: "Mandatory PPE Site Compliance",
      keyPoints: [
        "Daily morning toolbox briefings covering specific hazard zones before every shift",
        "Certified fall-protection netting, safety harnesses, and guardrail scaffolding systems",
        "Mechanized crane and gantry hoist load-testing certificates audited monthly",
        "Designated emergency medical response stations and trained first-aid officers on site"
      ]
    },
    {
      id: "transparent-communication",
      number: "04",
      title: "Transparent Communication",
      icon: "FileText",
      tagline: "Clear Itemized BOQs, Zero Hidden Costs & Digital Milestone Logs",
      explanation: "Trust is preserved through unvarnished transparency. From initial engagement, we provide fully transparent, itemized Bill of Quantities (BOQ) with transparent material specifications. Clients receive scheduled digital progress updates, bi-weekly drone footage logs, and structured milestone billing linked directly to verified site inspections.",
      visual: "/images/about-facade.jpg",
      visualAlt: "Contemporary glass facade built with documented project transparency",
      visualBadge: "Zero Hidden Costs",
      metric: "100%",
      metricLabel: "Documented Itemized BOQ",
      keyPoints: [
        "Exhaustive itemized BOQ estimations preventing surprise budget variations",
        "Weekly digital site progress logs with high-resolution photographic milestones",
        "Milestone-linked escrow and stage billing tied to verified architectural sign-offs",
        "Dedicated client relationship managers available for regular design revisions"
      ]
    },
    {
      id: "timely-execution",
      number: "05",
      title: "Timely Execution",
      icon: "Clock",
      tagline: "Gantt-Driven Critical Path Schedules & Penalty-Backed Commitments",
      explanation: "Time is capital. Pawar Constructions deploys modern computerized project management tools and critical-path scheduling to coordinate concurrent workflows without bottlenecks. Our extensive fleet of owned modern earthmovers, transit mixers, concrete boom pumps, and staging gear ensures execution never stalls on equipment shortages.",
      visual: "/images/project-industrial.jpg",
      visualAlt: "Fast-track pre-engineered industrial development completed on contractual schedule",
      visualBadge: "Schedule Assurance",
      metric: "Critical Path",
      metricLabel: "Computerized Milestone Scheduling",
      keyPoints: [
        "BIM and Gantt scheduling to identify critical path tasks and avoid cascading delays",
        "Captive fleet of concrete transit mixers, boom pumps, and laser screeds",
        "Strategic material inventory stockpiles mitigating seasonal supply chain disruptions",
        "Proactive statutory clearance workflows to prevent municipal approval delays"
      ]
    },
    {
      id: "customer-satisfaction",
      number: "06",
      title: "Customer Satisfaction",
      icon: "HeartHandshake",
      tagline: "Client-Centric Collaboration from Concept to Post-Handover Care",
      explanation: "We measure our enduring success not merely by structures erected, but by long-term client relationships. We adopt a responsive, collaborative posture throughout design iteration, accommodating owner preferences seamlessly while offering technical guidance to optimize structural value and life-cycle operating costs.",
      visual: "/images/project-commercial.jpg",
      visualAlt: "Completed commercial tower handed over with comprehensive client satisfaction",
      visualBadge: "Client Satisfaction",
      metric: "Collaborative",
      metricLabel: "End-to-End Client Governance",
      keyPoints: [
        "Comprehensive joint pre-handover walkthroughs to resolve every punch-list detail",
        "Value engineering advisory suggesting cost-effective materials without sacrificing strength",
        "Dedicated post-occupancy maintenance support desk and rapid-response warranty service",
        "Transparent handover documentation dossiers including structural as-built schematics"
      ]
    },
    {
      id: "attention-to-detail",
      number: "07",
      title: "Attention to Detail",
      icon: "Sparkles",
      tagline: "Architectural Precision, Laser Alignment & Meticulous Tolerance Audits",
      explanation: "True craftsmanship reveals itself at the joints, corners, and planes. Whether casting exposed concrete pillars, laying book-matched Italian marble, sealing double-glazed curtain walls, or aligning subterranean drainage conduits, our site supervisors enforce millimeter-tolerance standards that elevate buildings from ordinary to extraordinary.",
      visual: "/images/service-interior.jpg",
      visualAlt: "Architectural acoustic ceiling and marble interior crafted with fine tolerance",
      visualBadge: "Millimeter Precision",
      metric: "DIN / IS",
      metricLabel: "International Tolerance Alignment",
      keyPoints: [
        "Laser-leveling and robotic total-station surveys for absolute plumb and alignment",
        "Comprehensive waterproofing membrane flood-testing before tile and stone placement",
        "Acoustic and thermal insulation detailing minimizing ambient exterior noise",
        "Flawless architectural joinery, shadow gaps, and concealed MEP utility integration"
      ]
    },
    {
      id: "long-term-reliability",
      number: "08",
      title: "Long-Term Reliability",
      icon: "Award",
      tagline: "Structural Resilience Built for Generations with Documented Warranties",
      explanation: "A building is a multi-generational legacy. We design and construct structures to withstand harsh climatic extremes, seismic loads, and ground vibrations. Our reinforced structural foundations, anti-carbonation coatings, and comprehensive multi-year structural warranty certificates ensure peace of mind for decades to come.",
      visual: "/images/hero-bg.jpg",
      visualAlt: "Towering high-rise foundation built for structural longevity and seismic endurance",
      visualBadge: "Generational Longevity",
      metric: "Seismic Resilient",
      metricLabel: "Zone IV Structural Engineering",
      keyPoints: [
        "High-density concrete cover preventing chloride attack and rebar oxidation",
        "Multi-year documented structural and water-leakage warranty certificates",
        "Anti-termite soil treatment barriers protecting structural timber and foundations",
        "Detailed as-built MEP conduit schematics provided for future building modifications"
      ]
    }
  ],

  // 5-Step Construction Process Timeline: Consultation → Planning → Execution → Quality Check → Handover
  timelineProcess: [
    {
      step: "01",
      title: "Consultation",
      subtitle: "Discovery & Site Feasibility",
      desc: "Comprehensive discovery sessions to evaluate your architectural vision, plot boundaries, zoning bylaws, soil condition reports, and preliminary budget framework.",
      icon: "MessageSquare",
      highlights: [
        "Plot boundary and topographic survey",
        "Zoning bylaws and setback analysis",
        "Architectural requirement discovery",
        "Preliminary budget and timeline estimate"
      ]
    },
    {
      step: "02",
      title: "Planning",
      subtitle: "Architectural & BOQ Modeling",
      desc: "Detailed structural calculations, 3D BIM coordination, MEP drafting, statutory municipal approval workflows, and itemized bill-of-quantities cost freezing.",
      icon: "FileSpreadsheet",
      highlights: [
        "3D structural modeling & load calculations",
        "Transparent itemized BOQ cost sheet",
        "Municipal and environmental clearances",
        "Milestone Gantt-chart critical path schedule"
      ]
    },
    {
      step: "03",
      title: "Execution",
      subtitle: "Mechanized Civil Construction",
      desc: "Site equipment mobilization, foundation excavation, steel reinforcement tie-ins, batch-tested concrete pours, and strict daily zero-incident safety enforcement.",
      icon: "Hammer",
      highlights: [
        "Heavy earthwork and deep foundation casting",
        "Precision RCC frame and masonry erection",
        "Daily toolbox safety meetings & 100% PPE",
        "Bi-weekly drone photographic progress logs"
      ]
    },
    {
      step: "04",
      title: "Quality Check",
      subtitle: "Rigorous Structural Auditing",
      desc: "Independent destructive cube compression crushing, non-destructive ultrasonic tests, hydrostatic plumbing pressure tests, and millimeter finish tolerance audits.",
      icon: "CheckCircle2",
      highlights: [
        "7-day & 28-day concrete cube laboratory tests",
        "Non-destructive ultrasonic pulse testing",
        "Waterproofing 72-hour ponding flood test",
        "Comprehensive MEP load and pressure sign-off"
      ]
    },
    {
      step: "05",
      title: "Handover",
      subtitle: "Clearance, Warranties & Keys",
      desc: "Issuance of municipal occupancy certificates, exhaustive joint walkthrough punch-list clearance, delivery of as-built architectural schematics, structural warranty, and keys.",
      icon: "Key",
      highlights: [
        "Statutory completion and occupancy permits",
        "Full punch-list defect rectification",
        "As-built MEP and architectural dossiers",
        "Formal structural warranty and keys handover"
      ]
    }
  ]
};
