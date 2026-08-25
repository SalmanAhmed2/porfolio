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
  liveUrl?: string
  image: string
  screenshots?: string[]
  /** Portrait for phone UI screenshots; landscape (default) for web */
  imageAspect?: 'portrait' | 'landscape'
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
  {
    id: 'msheireb',
    number: '06',
    title: 'Msheireb Downtown Doha',
    category: 'Mobile App / Smart City',
    description:
      "Experience Msheireb Downtown Doha with the Msheireb Smart app, your essential companion for navigating the world's leading smart and sustainable urban regeneration, deeply rooted in Qatari heritage with modern infrastructure and services.",
    overview:
      'A cross-platform mobile app for iOS and Android that helps residents and visitors explore Msheireb Downtown Doha — a world-leading smart and sustainable urban district — with 3D AR navigation, smart parking, venue listings, and location-aware notifications.',
    problem:
      'Residents and visitors needed a single mobile guide to navigate a complex smart city district, find parking, discover retail and cultural venues, and stay informed about nearby events and offers.',
    solution:
      'Built a React Native app with a Laravel backend, delivering 3D AR wayfinding, smart parking with GPS car location, geofenced push notifications, and comprehensive commercial and cultural listings — plus secure email, Google, and Apple sign-in.',
    contribution:
      'Developed the React Native mobile client including authentication flows, glassmorphism UI, API integration with the Laravel backend, and cross-platform iOS and Android deployment.',
    technologies: ['React Native', 'Laravel'],
    features: [
      '3D AR interactive map',
      'Smart parking',
      'Geofenced notifications',
      'Cultural and commercial listings',
      'Email authentication',
      'Google and Apple sign-in',
    ],
    image: '/projects/msheireb-login.jpg',
    screenshots: ['/projects/msheireb-login.jpg', '/projects/msheireb-signup.jpg'],
    imageAspect: 'portrait',
    visualStyle: 'futuristic',
    featured: false,
    layout: 'split-left',
  },
  {
    id: 'serve-me',
    number: '07',
    title: 'Serve-Me',
    category: 'Service Booking / Marketplace',
    description:
      'A salon and service booking web app for Denmark where users can search what services they need and where they want them — with complete Admin, Vendor, Employee, and User portals.',
    overview:
      'A multi-portal service discovery and booking platform for the Danish market, enabling users to find salon and lifestyle providers by service type and location, while vendors, employees, and admins manage operations from dedicated dashboards.',
    problem:
      'Customers needed a simple way to discover and book local service providers across Denmark, while businesses required separate portals for admin oversight, vendor management, employee scheduling, and end-user bookings.',
    solution:
      'Built a Next.js frontend with Ant Design UI and a Nest.js + PostgreSQL backend, featuring map-based search, category filtering, verified provider listings, and role-based dashboards for Admin, Vendor, Employee, and User.',
    contribution:
      'Developed the Next.js frontend with Ant Design, map-integrated search results, multi-role portal dashboards, and API integration with the Nest.js backend.',
    technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'Ant Design'],
    features: [
      'Service and location search',
      'Map-based provider discovery',
      'Admin dashboard',
      'Vendor portal',
      'Employee dashboard',
      'User booking portal',
      'Category filtering',
      'Verified provider listings',
    ],
    image: '/projects/serve-me-home.jpg',
    screenshots: ['/projects/serve-me-home.jpg', '/projects/serve-me-search.jpg'],
    visualStyle: 'fintech',
    featured: false,
    layout: 'split-right',
  },
  {
    id: 'tangopay',
    number: '08',
    title: 'TangoPay',
    category: 'Fintech / International Remittance',
    description:
      'A UK-based fintech platform for secure international money transfers to 70+ countries — with fee-free remittances, live exchange rates, and direct-to-bank, cash pickup, and mobile money delivery options.',
    overview:
      'TangoPay is a UK-regulated remittance platform enabling users to send money internationally with zero fees, competitive exchange rates, and multiple payout methods including bank deposits, cash pickup, and mobile wallets like JazzCash and EasyPaisa.',
    problem:
      'UK residents sending money abroad needed a fast, secure, and affordable way to transfer funds to family and friends — with transparent rates, multiple delivery options, and a trustworthy FCA-regulated service.',
    solution:
      'Built a Next.js frontend with Tailwind CSS and a WordPress-powered blog, featuring a live transfer calculator, country-specific landing pages, exchange rate tickers, and streamlined onboarding for bank transfer and card payments.',
    contribution:
      'Developed the Next.js frontend with Tailwind CSS, country landing pages, transfer calculator UI, responsive marketing layouts, and WordPress blog integration.',
    technologies: ['Next.js', 'Tailwind CSS', 'WordPress'],
    features: [
      'International money transfer',
      'Live exchange rate calculator',
      'Direct-to-bank deposits',
      'Cash pickup',
      'Mobile money wallets',
      'Card and bank payments',
      'Country-specific landing pages',
      'WordPress blog integration',
    ],
    liveUrl: 'https://tangopay.co.uk/',
    image: '/projects/tangopay.jpg',
    screenshots: ['/projects/tangopay.jpg'],
    visualStyle: 'fintech',
    featured: false,
    layout: 'split-left',
  },
  {
    id: 'influsense-mobile',
    number: '09',
    title: 'Influsense Mobile',
    category: 'Mobile App / Influencer Portal',
    description:
      'A React Native influencer portal app where influencers manage campaign media, update their profiles, chat with campaign managers, and submit post links for approval.',
    overview:
      'A cross-platform mobile companion to the Influsense ecosystem, giving influencers a dedicated portal to upload campaign media, track caption consents, update profile details, and communicate with managers and brands in-app.',
    problem:
      'Influencers needed a mobile-first way to manage campaign deliverables, share post links, update profiles, and stay in sync with managers — without relying solely on the web dashboard.',
    solution:
      'Built a React Native app backed by Laravel APIs, featuring secure auth, media upload workflows with approval status, editable profiles, and real-time campaign chat for posts and briefs.',
    contribution:
      'Developed the React Native mobile client including authentication, profile management, campaign media uploads, consent tracking UI, and chat — integrated with the Laravel backend.',
    technologies: ['React Native', 'Laravel'],
    features: [
      'Influencer authentication',
      'Campaign media uploads',
      'Post URL submission',
      'Caption consent tracking',
      'Profile management',
      'In-app campaign chat',
    ],
    image: '/projects/influsense-app-login.webp',
    screenshots: [
      '/projects/influsense-app-login.webp',
      '/projects/influsense-app-profile.webp',
      '/projects/influsense-app-posts.webp',
      '/projects/influsense-app-chat.webp',
    ],
    imageAspect: 'portrait',
    visualStyle: 'futuristic',
    featured: false,
    layout: 'split-right',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
