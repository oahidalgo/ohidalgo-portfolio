// Bilingual content for the portfolio (ES / EN).
// Neutral fields (images, links, tech, diagrams, ids) are repeated per language
// on purpose — the site is small and this keeps each language self-contained.

const GITHUB_URL = 'https://github.com/oahidalgo';
const GITHUB_HANDLE = 'oahidalgo';
const LINKEDIN_URL = 'https://www.linkedin.com/in/oahidalgo';
const LINKEDIN_HANDLE = 'oahidalgo';
const EMAIL = 'ohgovilla@gmail.com';
const NAME = 'Oliver Hidalgo';

const content = {
  es: {
    meta: { name: NAME, github: GITHUB_URL, githubHandle: GITHUB_HANDLE, linkedin: LINKEDIN_URL, linkedinHandle: LINKEDIN_HANDLE, email: EMAIL },
    ui: {
      logo: '~/oliver-hidalgo',
      contact: 'Contacto',
      kicker: 'Software Engineer',
      heroDesc:
        'Más de 9 años desarrollando soluciones escalables y conectando plataformas con REST, SOAP, GraphQL y RPC en industrias BPO, educación superior y servicios administrativos. Cada linea de código es un paso más cerca de la cima.',
      statYears: 'años de experiencia',
      statInd: 'industrias',
      statCerts: 'certificaciones',
      btnProjects: 'Ver proyectos',
      btnAscent: 'Comenzar el ascenso',
      btnCV: 'Descargar CV',
      badge: 'Disponible para proyectos',
      projTitle: 'Proyectos personales',
      visit: 'Visitar ↗',
      roadTitle: 'Mi Travesía',
      roadSub: 'Pasa el cursor y haz clic en un diamante para explorar cada etapa.',
      clickMe: '¡Haz clic!',
      certTitle: 'Certificaciones',
      certCta: 'Ver credencial',
      workTitle: 'Experiencia laboral',
      back: '← Volver a Mi Travesía',
      backList: '← Todos los proyectos',
      viewAll: '← Ver toda mi experiencia',
      summaryTitle: 'Resumen',
      tasksTitle: 'Responsabilidades',
      diagTitle: 'Diagrama de flujo',
      footTitle: '¿Subimos juntos?',
      footDesc:
        'Abierto a nuevas expediciones, proyectos, equipos y retos que valgan la subida.',
      footCta: 'Escríbeme',
      nav: ['Proyectos', 'My Road', 'Experiencia', 'Certificaciones'],
    },
    personalProjects: [
      {
        name: 'VoiceScheduler',
        img: 'img/voice-scheduler.PNG',
        link: 'https://voice-scheduler.netlify.app/',
        tech: ['React', 'Styled Components', 'Supabase'],
        desc: 'App web para agendar sesiones de terapia por voz: calendario de citas, gestión de pacientes y autenticación. Construida con React y Supabase.',
      },
      {
        name: 'Quiniela United 2026',
        img: 'img/quiniela-united-2026.PNG',
        link: 'https://united2026quiniela.netlify.app/',
        tech: ['React', 'Styled Components', 'Supabase'],
        desc: 'App web para gestionar y seguir pronósticos del Mundial 2026. Construida con React y Supabase.',
      },
    ],
    work: [
      {
        id: 1,
        company: 'Banco G&T Continental',
        role: 'Letters of Credit Assistant',
        desc: 'Gestioné la apertura de garantías de importación/exportación con bancos corresponsales y analicé documentos de importación, cobros a clientes y transferencias.',
        projects: [],
      },
      {
        id: 2,
        company: 'Universidad del Valle de Guatemala',
        role: 'Software Developer',
        period: 'Sep 2017 – Ago 2022',
        desc: 'Participé en todo el ciclo de desarrollo de software en módulos administrativos y académicos, implementando nuevos requerimientos para alinear las soluciones con el negocio.',
        projects: [
          {
            id: 1,
            name: 'Integración LMS (Canvas)',
            imgName: 'canvasLogo.webp',
            diagram: 'img/diagrams/canvasIntegration.jpg',
            tech: ['SQL Server', 'C#', 'JavaScript', 'NodeJS', 'ExpressJS', 'Integration Services'],
            summary:
              'Integración de Canvas LMS con el sistema de notas de la UVG, con procesos de sincronización y una mejor experiencia entre APIs.',
            tasks: [
              'Creé stored procedures en SQL Server para extraer, validar y transformar datos de cursos, inscripciones, usuarios, períodos y cuentas.',
              'Contribuí a paquetes de Integration Services que generan CSV cargados al LMS vía SFTP.',
              'Implementé web services SOAP en C#, luego reemplazados por una API REST en NodeJS para notas, grupos de tareas y desempeño.',
              'Creé procedimientos para validar y almacenar esa información, facilitando reportes académicos para directores.',
            ],
          },
          {
            id: 2,
            name: 'Facturación de Servicios Profesionales',
            imgName: 'paymentTerms.webp',
            diagram: 'img/diagrams/professionalServicesBilling.jpg',
            tech: ['SQL Server', 'C#', 'JavaScript', 'NodeJS', 'ExpressJS', 'Angular', 'Docker', 'Bootstrap'],
            summary:
              'Redujimos el tiempo de todas las partes en el proceso de nómina, facturación y cuentas por pagar, integrando los sistemas académico, financiero y de RRHH.',
            tasks: [
              'Desarrollé módulos en Angular para la captura y aprobación de honorarios profesionales.',
              'Construí la API REST en NodeJS/Express que conecta los sistemas académico, financiero y de RRHH.',
              'Automaticé la generación de facturas y cuentas por pagar, eliminando reprocesos manuales.',
            ],
          },
          {
            id: 3,
            name: 'Solicitud de Pagos en Línea',
            imgName: 'powerAutomate.jpg',
            diagram: 'img/diagrams/onlinePaymentRequest.jpg',
            tech: ['SQL Server', 'JavaScript', 'Angular', 'NodeJS', 'ExpressJS', 'GraphQL', 'Power Automate', 'Docker', 'Bootstrap'],
            summary:
              'Redujimos la intervención manual en la autorización de pagos con formularios reutilizables sobre un workflow flexible en Power Automate.',
            tasks: [
              'Diseñé formularios reutilizables en Angular conectados al workflow de Power Automate.',
              'Implementé la API GraphQL para consultar estados de autorización en tiempo real.',
              'Contenericé los servicios con Docker para despliegues consistentes.',
            ],
          },
        ],
      },
      {
        id: 3,
        company: 'Conduent Business Services LLC',
        role: 'App Dev & Support Engineer II',
        period: 'Ago 2022 – Presente',
        desc: 'Responsable del ciclo completo de desarrollo: análisis, diseño, desarrollo, pruebas y entrega de múltiples módulos, con foco en soluciones escalables usando patrones de diseño eficientes.',
        projects: [
          {
            id: 4,
            name: 'Reemplazo de Tungsten EDI',
            imgName: 'tungstenLogo.jpg',
            diagram: 'img/diagrams/EDIReplacement.jpg',
            tech: ['C#', 'SQL Server'],
            summary:
              'Reemplacé el proceso de Tungsten que lee archivos EDI y genera PDF y XML por cada factura para su procesamiento posterior.',
            tasks: [
              'Desarrollé el proceso en C# que interpreta archivos EDI y genera PDF y XML por factura.',
              'Optimicé consultas en SQL Server para el procesamiento por lotes de facturas.',
            ],
          },
        ],
      },
    ],
    certifications: [
      {
        name: 'CKAD — Certified Kubernetes Application Developer',
        issuer: 'The Linux Foundation',
        img: 'ckad.png',
        link: 'https://www.credly.com/badges/abdf44fd-5fca-42d4-b871-ebadac693762/public_url',
      },
      {
        name: 'JSNAD — JavaScript Application Developer',
        issuer: 'OpenJS Foundation',
        img: 'jsnad.png',
        link: 'https://www.credly.com/badges/b73b9a07-91e5-473d-9560-94e1c97d12a2/public_url',
      },
      {
        name: 'SMC — Scrum Master Certified',
        issuer: 'SCRUMstudy',
        img: 'SMC.png',
        link: 'https://www.scrumstudy.com/certification/verify?type=SMC&number=792150',
      },
    ],
  },

  en: {
    meta: { name: NAME, github: GITHUB_URL, githubHandle: GITHUB_HANDLE, linkedin: LINKEDIN_URL, linkedinHandle: LINKEDIN_HANDLE, email: EMAIL },
    ui: {
      logo: '~/oliver-hidalgo',
      contact: 'Contact',
      kicker: 'Software Engineer',
      heroDesc:
        '9+ years developing scalable solutions and connecting platforms with REST, SOAP, GraphQL and RPC across BPO, Higher Education and Administrative Services. Each line of code is a step closer to the summit.',
      statYears: 'years of experience',
      statInd: 'industries',
      statCerts: 'certifications',
      btnProjects: 'View projects',
      btnAscent: 'Start the ascent',
      btnCV: 'Download CV',
      badge: 'Available for projects',
      projTitle: 'Personal projects',
      visit: 'Visit ↗',
      roadTitle: 'My Road',
      roadSub: 'Hover and click a diamond to explore each stage.',
      clickMe: 'Click Me!',
      certTitle: 'Certifications',
      certCta: 'View credential',
      workTitle: 'Work experience',
      back: '← Back to My Road',
      backList: '← All projects',
      viewAll: '← View all experience',
      summaryTitle: 'Summary',
      tasksTitle: 'Responsibilities',
      diagTitle: 'Flow Diagram',
      footTitle: 'Shall we climb together?',
      footDesc:
        'Open to new expeditions, projects, teams and challenges worth the climb.',
      footCta: 'Get in touch',
      nav: ['Projects', 'My Road', 'Experience', 'Certifications'],
    },
    personalProjects: [
      {
        name: 'VoiceScheduler',
        img: 'img/voice-scheduler.PNG',
        link: 'https://voice-scheduler.netlify.app/',
        tech: ['React', 'Styled Components', 'Supabase'],
        desc: 'Web app to schedule therapy sessions by voice: appointment calendar, patient management and authentication. Built with React and Supabase.',
      },
      {
        name: 'Quiniela United 2026',
        img: 'img/quiniela-united-2026.PNG',
        link: 'https://united2026quiniela.netlify.app/',
        tech: ['React', 'Styled Components', 'Supabase'],
        desc: 'Web app for managing and tracking predictions for the 2026 World Cup. Built with React and Supabase.',
      },
    ],
    work: [
      {
        id: 1,
        company: 'Banco G&T Continental',
        role: 'Letters of Credit Assistant',
        desc: 'Managed the opening of import/export guarantees with correspondent banks and analyzed import documents, customer collections and transfers.',
        projects: [],
      },
      {
        id: 2,
        company: 'Universidad del Valle de Guatemala',
        role: 'Software Developer',
        period: 'Sep 2017 – Aug 2022',
        desc: 'Worked across the entire SDLC on administrative and academic modules, implementing new requirements to align software with business needs.',
        projects: [
          {
            id: 1,
            name: 'LMS Integration (Canvas)',
            imgName: 'canvasLogo.webp',
            diagram: 'img/diagrams/canvasIntegration.jpg',
            tech: ['SQL Server', 'C#', 'JavaScript', 'NodeJS', 'ExpressJS', 'Integration Services'],
            summary:
              'Integrated Canvas LMS with the UVG scoring system, with sync processes and a better experience across APIs.',
            tasks: [
              'Created SQL Server stored procedures to extract, validate and transform data for courses, enrollments, users, terms and accounts.',
              'Contributed to Integration Services packages generating CSV files loaded into the LMS via SFTP.',
              'Implemented C# SOAP web services, later replaced by a NodeJS REST API for grades, task groups and performance.',
              'Built procedures to validate and store that data, enabling academic performance reports for directors.',
            ],
          },
          {
            id: 2,
            name: 'Professional Services Billing',
            imgName: 'paymentTerms.webp',
            diagram: 'img/diagrams/professionalServicesBilling.jpg',
            tech: ['SQL Server', 'C#', 'JavaScript', 'NodeJS', 'ExpressJS', 'Angular', 'Docker', 'Bootstrap'],
            summary:
              'Cut time spent by all parties in payroll, invoicing and accounts payable by integrating academic, financial and HR systems.',
            tasks: [
              'Built Angular modules for capturing and approving professional fees.',
              'Built the NodeJS/Express REST API connecting academic, financial and HR systems.',
              'Automated invoice and accounts-payable generation, removing manual reprocessing.',
            ],
          },
          {
            id: 3,
            name: 'Online Payment Request',
            imgName: 'powerAutomate.jpg',
            diagram: 'img/diagrams/onlinePaymentRequest.jpg',
            tech: ['SQL Server', 'JavaScript', 'Angular', 'NodeJS', 'ExpressJS', 'GraphQL', 'Power Automate', 'Docker', 'Bootstrap'],
            summary:
              'Reduced manual intervention in payment authorization with reusable forms on a flexible Power Automate workflow.',
            tasks: [
              'Designed reusable Angular forms wired to the Power Automate workflow.',
              'Implemented the GraphQL API to query authorization states in real time.',
              'Containerized services with Docker for consistent deployments.',
            ],
          },
        ],
      },
      {
        id: 3,
        company: 'Conduent Business Services LLC',
        role: 'App Dev & Support Engineer II',
        period: 'Aug 2022 – Present',
        desc: 'Own the end-to-end SDLC: analysis, design, development, testing and delivery of multiple modules, focused on scalable solutions using efficient design patterns.',
        projects: [
          {
            id: 4,
            name: 'Tungsten EDI Replacement',
            imgName: 'tungstenLogo.jpg',
            diagram: 'img/diagrams/EDIReplacement.jpg',
            tech: ['C#', 'SQL Server'],
            summary:
              'Replaced the Tungsten process that reads EDI files and generates a PDF and XML per invoice for further processing.',
            tasks: [
              'Developed the C# process that parses EDI files and generates PDF and XML per invoice.',
              'Optimized SQL Server queries for batch invoice processing.',
            ],
          },
        ],
      },
    ],
    certifications: [
      {
        name: 'CKAD — Certified Kubernetes Application Developer',
        issuer: 'The Linux Foundation',
        img: 'ckad.png',
        link: 'https://www.credly.com/badges/abdf44fd-5fca-42d4-b871-ebadac693762/public_url',
      },
      {
        name: 'JSNAD — JavaScript Application Developer',
        issuer: 'OpenJS Foundation',
        img: 'jsnad.png',
        link: 'https://www.credly.com/badges/b73b9a07-91e5-473d-9560-94e1c97d12a2/public_url',
      },
      {
        name: 'SMC — Scrum Master Certified',
        issuer: 'SCRUMstudy',
        img: 'SMC.png',
        link: 'https://www.scrumstudy.com/certification/verify?type=SMC&number=792150',
      },
    ],
  },
};

export default content;
