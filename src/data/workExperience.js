const workExperience = [
  {
    company: 'Banco G&T Continental',
    position: 'Letters of Credit Assistant',
    description: `I Managed the opening of import/export guarantees with correspondent banks and Analyzed import documents, customer collections, and debts or transfers with correspondent banks.
    `,
    project: [],
  },
  {
    company: 'Universidad del Valle de Guatemala',
    position: 'Software Developer',
    description: `I Participated in the entire software development lifecycle, working on diverse administrative
    modules and also academic modules, implementing new requirements or change request in order
    to align software solutions with business needs.`,
    project: [
      {
        name: 'Learning Management System Integration',
        imgName: 'canvasLogo.webp',
        techStack: [
          'SQL Server',
          'C#',
          'Javascript',
          'NodeJS',
          'ExpressJS',
          'Integration Services',
        ],
        summary: `
          Successfully integrated Canvas LMS with UVG Scoring System. This integration provided a better user experience LMS that interact with different API'S. 
          Sync processes were implemented.
        `,
        tasks: [
          'I created SQL Server stored procedures responsible for extracting, validating, and transforming data associated with courses, enrollments, users, terms, and accounts',
          'I also contributed to the generation of some Microsoft Integration Services Packages designed to retrieve and generate CSV files, which were then loaded into the LMS via the SFTP server.',
          'I initially implemented C# SOAP web services, which were later replaced by a NodeJS REST API for retrieving data related to grades, task groups, tasks, and performance managed in the LMS.',
          'I also created stored procedures to validate, transform, and store this information in the database, facilitating the generation of academic performance reports for directors.',
        ],
        diagram: 'img/diagrams/canvasIntegration.jpg',
      },
      {
        name: 'Professional Services Billing',
        imgName: 'paymentTerms.webp',
        techStack: [
          'SQL Server',
          'C#',
          'Javascript',
          'NodeJS',
          'ExpressJS',
          'Angular',
          'Docker',
          'Bootstrap',
        ],
        tasks: [
          'Developed the integration between Canvas LMS and UVG Scoring System',
          'Developed the synchronization process',
          'Developed the process to send grades to Canvas LMS',
        ],

        diagram: 'img/diagrams/professionalServicesBilling.jpg',
        summary: `We reduced the amount of time spent for all parties involved in the process of payroll, invoicing and accounts payable  eliminating reprocessing by integrating academic, finnancial and HR systems.`,
      },
      {
        name: 'Online Payment Request',
        imgName: 'powerAutomate.jpg',
        techStack: [
          'SQL Server',
          'Javascript',
          'Angular',
          'NodeJS',
          'ExpressJS',
          'GraphQL',
          'Power Automate',
          'Docker',
          'Bootstrap',
        ],
        tasks: [
          'Developed the integration between Canvas LMS and UVG Scoring System',
          'Developed the synchronization process',
          'Developed the process to send grades to Canvas LMS',
        ],

        diagram: 'img/diagrams/onlinePaymentRequest.jpg',
        summary: `We reduced manual intervention of all parties involved in the authorization of payments, implementing reusable forms that used a flexible workflow built in Power Automate`,
      },
    ],
  },
  {
    company: 'Conduent Business Services LLC',
    position: 'App Dev and Support Engineer II',
    description: `I am responsible for performing end-to-end software development lifecycle, including analysis, design,
    development, testing, and delivery of multiple software modules. I am focus on designing and developing scalable solutions using efficient Design Patterns to
    meet the needs of our clients. `,
    project: [
      {
        name: 'Tungsten EDI Replacement',
        imgName: 'tungstenLogo.jpg',
        techStack: ['C#', 'SQL Server'],
        tasks: [
          'Developed the integration between Canvas LMS and UVG Scoring System',
          'Developed the synchronization process',
          'Developed the process to send grades to Canvas LMS',
        ],
        summary: `I Replaced the Tungsten process responsible for reading EDI files and generating PDF and XML for each
        invoice for further processing.`,
      },
    ],
  },
];

export default workExperience;
