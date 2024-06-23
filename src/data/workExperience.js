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
        summary: `I Replaced the Tungsten process responsible for reading EDI files and generating PDF and XML for each
        invoice for further processing.`,
      },
    ],
  },
];

export default workExperience;
