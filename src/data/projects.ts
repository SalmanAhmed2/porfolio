export type ProjectVisualStyle = 'enterprise' | 'futuristic' | 'healthcare' | 'crm' | 'fintech'

export interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  overview: string
  problem: string
  solution: string
  contribution: string
  technologies: string[]
  features: string[]
  liveUrl: string
  image: string
  visualStyle: ProjectVisualStyle
  featured: boolean
  layout: 'featured' | 'split-left' | 'split-right' | 'compact'
}

export const projects: Project[] = [
  {
    id: 'petromin-crm',
    number: '01',
    title: 'Petromin CRM',
    category: 'Enterprise CRM / Complaint Management',
    description:
      'Petromin is an enterprise complaint and user management platform designed to manage complaints, users, assets, vendors and operational workflows across multiple organizational roles.',
    overview:
      'A comprehensive enterprise platform enabling multi-role complaint management, asset tracking, vendor coordination, and regional oversight for large-scale operations.',
    problem:
      'Organizations needed a centralized system to manage complaints across multiple roles, track assets, coordinate vendors, and maintain operational visibility across regions.',
    solution:
      'Built a role-based CRM with dedicated dashboards for each user type, automated complaint assignment workflows, and integrated asset and vendor management modules.',
    contribution:
      'Led frontend development including role-based dashboard architecture, complaint workflow UI, responsive design, and API integration with Node.js backend.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL'],
    features: [
      'Complaint management',
      'User management',
      'Role-based dashboards',
      'Complaint assignment',
      'Complaint resolution workflow',
      'Vendor management',
      'Asset management',
      'Procurement workflows',
      'Regional management',
      'Role-based access control',
    ],
    liveUrl: 'https://app-petromin.thesymmetry.net/',
    image: '/projects/petromin-crm.png',
    visualStyle: 'enterprise',
    featured: true,
    layout: 'featured',
  },
  {
    id: 'influsense-ai',
    number: '02',
    title: 'Influsense AI',
    category: 'AI / Influencer Marketing',
    description:
      'One-stop-shop AI-powered influencer marketing solution built for the data-driven age.',
    overview:
      'An AI-driven platform that streamlines influencer discovery, campaign management, and data-driven marketing workflows for modern brands.',
    problem:
      'Marketing teams struggled to discover relevant influencers and manage data-driven campaigns efficiently across fragmented tools.',
    solution:
      'Developed an integrated AI platform with intelligent influencer discovery, analytics dashboards, and streamlined campaign workflow management.',
    contribution:
      'Architected and built the frontend experience including AI discovery interfaces, data visualization components, and responsive marketing dashboards.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL'],
    features: [
      'AI-powered influencer discovery',
      'Data-driven marketing workflows',
      'Campaign management',
      'Analytics dashboards',
      'Influencer profiling',
    ],
    liveUrl: 'https://discover-staging.influsense.ai/',
    image: '/projects/influsense-ai.png',
    visualStyle: 'futuristic',
    featured: false,
    layout: 'split-right',
  },
  {
    id: 'healthcare-talent-link',
    number: '03',
    title: 'HealthCare Talent Link',
    category: 'Healthcare Platform',
    description:
      'HealthCareTalentLink is a professional platform connecting the healthcare community with talent, products and services.',
    overview:
      'A professional networking platform bridging healthcare professionals, talent, products, and services in one cohesive ecosystem.',
    problem:
      'The healthcare community lacked a unified platform to connect talent with opportunities, products, and professional services.',
    solution:
      'Built a clean, professional Next.js platform with intuitive navigation, profile management, and service discovery features.',
    contribution:
      'Developed the frontend using Next.js with server-side rendering, responsive layouts, and seamless API integration.',
    technologies: ['Next.js', 'Node.js'],
    features: [
      'Professional networking',
      'Talent discovery',
      'Product listings',
      'Service marketplace',
      'Responsive design',
    ],
    liveUrl: 'https://healthcaretalentlink.com/',
    image: '/projects/healthcare-talent-link.png',
    visualStyle: 'healthcare',
    featured: false,
    layout: 'split-left',
  },
  {
    id: 'asset-management-system',
    number: '04',
    title: 'Asset Management System',
    category: 'CRM / Asset Management',
    description:
      'An asset management CRM designed to help organizations manage users and their assigned assets from a centralized platform.',
    overview:
      'A centralized CRM for tracking organizational assets, user assignments, and maintaining complete asset lifecycle visibility.',
    problem:
      'Organizations needed a single platform to track asset assignments, user relationships, and maintain accurate asset records.',
    solution:
      'Created a React-based CRM with user-asset relationship management, assignment workflows, and centralized data dashboards.',
    contribution:
      'Built the complete frontend including asset tracking UI, user management modules, assignment workflows, and data tables.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL'],
    features: [
      'User management',
      'Asset management',
      'Asset assignment',
      'User-asset relationships',
      'Centralized CRM',
      'Data management',
    ],
    liveUrl: 'https://manage-assets.thesymmetry.net/',
    image: '/projects/asset-management.png',
    visualStyle: 'crm',
    featured: false,
    layout: 'split-right',
  },
  {
    id: 'home-expenses-pwa',
    number: '05',
    title: 'Home Expenses PWA',
    category: 'Progressive Web App / Finance',
    description:
      'A simple personal finance Progressive Web App that helps users track income, manage expenses and automatically calculate remaining balances.',
    overview:
      'A lightweight personal finance PWA for tracking income, managing expenses, and maintaining real-time balance calculations.',
    problem:
      'Users needed a simple, accessible way to track personal finances without complex accounting software.',
    solution:
      'Built a clean PWA with Firebase backend, automatic balance calculations, offline support, and intuitive expense categorization.',
    contribution:
      'Designed and developed the full frontend with TypeScript, Firebase integration, PWA capabilities, and responsive fintech-inspired UI.',
    technologies: ['React.js', 'TypeScript', 'Firebase'],
    features: [
      'Income tracking',
      'Expense management',
      'Remaining balance calculation',
      'Firebase database',
      'PWA support',
      'Responsive design',
    ],
    liveUrl: 'https://expense-beta-eight.vercel.app/',
    image: '/projects/home-expenses-pwa.png',
    visualStyle: 'fintech',
    featured: false,
    layout: 'compact',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
