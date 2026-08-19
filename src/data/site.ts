export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  numericValue?: number
  suffix?: string
  label: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ExperienceFocus {
  title: string
  description: string
}

export interface SocialLink {
  name: string
  href: string
  placeholder?: boolean
}

export const siteInfo = {
  name: 'Salman Ahmed',
  title: 'Senior Frontend Developer',
  experience: '5+ Years',
  location: 'Karachi, Pakistan',
  email: 'salmanahmed35518@gmail.com',
  phone: '03402031088',
  tagline: 'Building Digital Experiences That Think Fast.',
  subtitle:
    'Senior Frontend Developer specializing in React.js, Next.js and modern web applications.',
  bio: 'I build scalable, high-performance and user-focused digital products — from enterprise CRM platforms to AI-powered marketing solutions.',
  resumeUrl: '/resume.pdf',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats: StatItem[] = [
  { value: '5+', numericValue: 5, suffix: '+', label: 'Years Experience' },
  { value: '20+', numericValue: 20, suffix: '+', label: 'Projects / Applications' },
  { value: 'React', label: 'Primary Frontend' },
  { value: 'Full Stack', label: 'Development' },
]

export const aboutContent = {
  title: 'Behind the Code',
  paragraphs: [
    "I'm Salman Ahmed, a Senior Frontend Developer with 5+ years of experience building dynamic, scalable and user-friendly web applications.",
    'My primary expertise lies in React.js and modern frontend architecture, while my full-stack experience with Node.js and PostgreSQL allows me to understand and contribute across the entire product lifecycle.',
    'I enjoy transforming complex business requirements into intuitive interfaces, scalable systems and polished digital experiences.',
  ],
  badges: [
    'React Specialist',
    'Frontend Architecture',
    'SaaS Applications',
    'CRM Systems',
    'Responsive UI',
    'API Integration',
  ],
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'State & Data',
    skills: ['Redux', 'Redux Toolkit', 'RTK Query', 'Firebase'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Other',
    skills: ['Git', 'GitHub', 'Responsive Design', 'PWA', 'API Integration'],
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Frontend Development',
    description: 'Crafting polished, accessible interfaces with modern JavaScript frameworks and design systems.',
    icon: 'layout',
  },
  {
    title: 'React.js Development',
    description: 'Building scalable component architectures, state management, and high-performance React applications.',
    icon: 'react',
  },
  {
    title: 'Next.js Applications',
    description: 'Server-rendered and static applications with optimized performance and SEO best practices.',
    icon: 'globe',
  },
  {
    title: 'CRM & SaaS Applications',
    description: 'Enterprise-grade platforms with role-based access, dashboards, and complex workflow management.',
    icon: 'database',
  },
  {
    title: 'API Integration',
    description: 'Seamless frontend-backend integration with REST APIs, real-time data, and robust error handling.',
    icon: 'plug',
  },
  {
    title: 'Responsive Web Applications',
    description: 'Mobile-first, touch-friendly experiences that perform beautifully across every device.',
    icon: 'smartphone',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the business problem before writing code.',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'Build scalable and maintainable frontend architecture.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Turn ideas into fast, responsive and polished interfaces.',
  },
  {
    number: '04',
    title: 'Refine',
    description: 'Optimize performance, UX and code quality.',
  },
]

export const experienceFocus: ExperienceFocus[] = [
  {
    title: 'Symmetry Group — Junior Consultant (Software Developer)',
    description:
      'Aug 2023 – Present · Building role-based React/Next portals (admin, vendor, employee, user) with performance-optimized, user-first UI.',
  },
  {
    title: 'Digital leap — Junior Developer (Intern → Promotion)',
    description:
      'Jan 2021 – Sep 2022 · Salon app with 3 portals (User booking, Vendor employee management, Admin services/store/category control); PWA review app with AI face detection; analytics & performance dashboard (React, TypeScript, ApexCharts, Redux Toolkit Query); influencer marketing platform with campaign analytics and admin/customer/influencer portals + mobile app.',
  },
  {
    title: 'Digital Auxilius — Frontend Developer',
    description:
      'Sep 2022 – Jul 2023 · HealthCare Talent Link (LinkedIn-style) with Organization & Individual portals (jobs, interviews, hiring, freelancing); React JS + Ant Design; integrated Stripe for payment processing.',
  },
  {
    title: 'Jinnah Govt. College — Software Developer / Associate Software Developer',
    description:
      'Duration from CV: 1 year 9 months (Software Developer) + 10 months (Associate Software Developer).',
  },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: '#', placeholder: true },
  { name: 'LinkedIn', href: '#', placeholder: true },
  { name: 'Fiverr', href: '#', placeholder: true },
  { name: 'Upwork', href: '#', placeholder: true },
]

export const heroTechBadges = ['React', 'Next.js', 'TypeScript', 'Node.js']
