import { Github, Twitter, Linkedin } from 'lucide-react';

// For SVG files in public folder, we use string paths
const LogoJavascript = '/images/logos/icon-javascript.svg';
const LogoTypescript = '/images/logos/icon-typescript.svg';
const LogoReact = '/images/logos/icon-react.svg';
const LogoAngular = '/images/logos/icon-angular.svg';
const LogoMySQL = '/images/logos/icon-mysql.svg';
const LogoDocker = '/images/logos/icon-docker.svg';
const LogoStripe = '/images/logos/icon-stripe.svg';
const LogoN8N = '/images/logos/icon-n8n.png';
const LogoBootstrap = '/images/logos/icon-bootstrap.svg';
const LogoNodejs = '/images/logos/icon-nodejs.svg';
const LogoExpress = '/images/logos/icon-express.svg';
const LogoExpressLight = '/images/logos/icon-express-light.svg';
const LogoPostgreSQL = '/images/logos/icon-postgresql.svg';
const LogoMongoDB = '/images/logos/icon-mongodb.svg';
const LogoSass = '/images/logos/icon-sass.svg';
const LogoTailwindcss = '/images/logos/icon-tailwindcss.svg';
const LogoGit = '/images/logos/icon-git.svg';
const LogoNextjs = '/images/logos/icon-nextjs.svg';
const LogoSwiftUI = '/images/logos/icon-swiftui.svg';

const LogoEfani = '/images/logos/logo-efani.png';
const LogoEfaniDark = '/images/logos/logo-efani-dark.svg';
const LogoTeresol = '/images/logos/logo-teresol.png';
const LogoQLU = '/images/logos/logo-qlu-ai.png';
const LogoContract = '/images/logos/logo-contract-pk.png';
const LogoFFBL = '/images/logos/logo-ffbl.png';

const ProjectSoundOfSilence = '/images/project-sos.png';
const ProjectDrowsiness = '/images/project-drowsiness.png';
const ProjectBlackSeal = '/images/project-bsp.png';
const ProjectLawBot = '/images/project-lawbot.png';
const ProjectGoogleAds = '/images/project-googleads.png';
const ProjectAIContentWriter = '/images/project-ai-content-writer.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shireenkhan-developer',
  GITHUB_REPO: 'https://github.com/shireenkhan-developer',
  LINKEDIN: 'https://www.linkedin.com/in/shireen-khan1/',
  EMAIL: 'mailto:shireenkhan.412@gmail.com',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Education',
    href: '#education',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/shireenkhan-developer',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/shireen-khan1/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Angular',
    logo: LogoAngular,
    url: 'https://angular.io/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://docker.com/',
  },
  {
    label: 'Stripe',
    logo: LogoStripe,
    url: 'https://stripe.com/',
  },
  {
    label: 'N8N',
    logo: LogoN8N,
    url: 'https://n8n.io/',
  },
  {
    label: 'SwiftUI',
    logo: LogoSwiftUI,
    url: 'https://developer.apple.com/swiftui/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Bootstrap',
    logo: LogoBootstrap,
    url: 'https://getbootstrap.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoEfani,
    darkModeLogo: LogoEfani,
    logoAlt: 'Efani',
    position: 'Full Stack Engineer',
    startDate: new Date(2024, 2), // March 2024
    currentlyWorkHere: true,
    technologies: ['Node.js', 'Angular', 'Express.js', 'PostgreSQL', 'n8n', 'GCP', 'BigQuery', 'Cloud Run', 'SendGrid', 'Stripe', 'Heroku', 'Atom SDK', 'SwiftUI', 'Xcode'],
    summary: [
      'Developed and maintained full-stack features across the PEAN stack, ensuring scalability, performance, and security through OWASP/BurpSuite testing, encrypted data handling, and secure API implementations.',
      'Designed and deployed a custom subscription and coupon system replacing Stripe, reducing costs and improving flexibility, while automating email workflows via SendGrid and Zoho, increasing engagement by 25%.',
      'Automated Google Ads workflows via n8n by integrating BigQuery data with LLM-powered analysis, reducing manual effort by 90% and enabling real-time campaign optimization.',
      'Enhanced checkout and tracking systems, improving conversions by 10%, adding crypto payment support, and increasing event accuracy by 40% through server-side GTM and Meta CAPI integration.',
      'Learned SwiftUI from scratch and contributed to the Efani iOS app by implementing In-App Purchases and other core app features, fixing bugs, and improving performance; additionally, mentored junior developers, led task planning, and conducted code reviews to maintain high engineering standards.',
    ],
  },
  {
    logo: LogoTeresol,
    logoAlt: 'Teresol',
    position: 'Software Design Engineer',
    startDate: new Date(2023, 10), // November 2023
    endDate: new Date(2024, 2), // March 2024
    technologies: ['Vue.js', 'Node.js', 'XState', 'JavaScript', 'Postman'],
    summary: [
      'Reverse-engineered legacy Java flows and translated them into modern FSMs using XState, mapping UI actions to backend APIs.',
      'Built Vue.js components bound to FSM context data, tested APIs in Postman, and integrated responses into FSM logic.',
      'Optimized transaction reliability with proper error handling, implemented transaction flows with event handling and API triggers.',
      'Modernized legacy banking app into structured FSM system, reducing errors and improving frontend/backend integration.',
      'Gained expertise in finite state modeling and API integration, enabling faster feature integration in the banking platform.',
    ],
  },
  {
    logo: LogoQLU,
    logoAlt: 'QLU.ai',
    position: 'Full Stack Engineer',
    startDate: new Date(2023, 6), // July 2023
    endDate: new Date(2023, 10), // November 2023
    technologies: ['React', 'Electron', 'Node.js', 'Docker'],
    summary: [
      'Built MVP GPU-lending platform end-to-end, enabling organizations to share and access GPUs securely via SSH desktop interface.',
      'Developed Electron desktop app with Docker-based environments and organization-level access system for shared GPUs.',
      'Implemented secure SSH tunneling and Docker containers, resolving connection issues and developing real-time GPU availability workflows.',
      'Delivered fully functional MVP prototype, demonstrating technical ownership and full-stack expertise.',
      'Gained expertise in desktop app development, container management, and secure remote access solutions.',
    ],
  },
  {
    logo: LogoContract,
    logoAlt: 'Contract.pk',
    position: 'Engineering Intern',
    startDate: new Date(2022, 7), // August 2022
    endDate: new Date(2022, 8), // September 2022
    technologies: ['React', 'Next.js', 'Firebase', 'Google Gemini AI', 'Vercel'],
    summary: [
      'Built and deployed AI-powered legal consultation platform with Google/Email authentication and protected routes.',
      'Developed chatbot-style AI queries using Google Gemini AI with PPC/Constitution references and Firestore integration.',
      'Created community dashboard for legal discussions and structured 40 requirements in Firestore dashboard.',
      'Enabled users in Pakistan to access instant legal consultation through AI-powered queries with PPC/Constitution references, especially helpful in remote areas.',
      'Gained experience in AI product design, authentication flows, and scalable Firebase systems.',
    ],
  },
  {
    logo: LogoFFBL,
    logoAlt: 'Fauji Fertilizer Bin Qasim Ltd. (FFBL)',
    position: 'IT Intern',
    startDate: new Date(2022, 6), // July 2022
    endDate: new Date(2022, 7), // August 2022
    technologies: ['SAP', 'ABAP', 'Qlik Sense', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
    summary: [
      'Received training in Network & Security, Backups & Support, WordPress development, PHP scripting, and data center operations.',
      'Developed and customized SAP ABAP programs to filter and organize enterprise data from multiple database tables.',
      'Created data visualizations in Qlik Sense to generate business reports and dashboards for internal teams.',
      'Built internal websites using HTML, CSS, and JavaScript for ICT department needs.',
      'Gained foundation in enterprise software systems (SAP, ERP), data analytics, and networking.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Sound of Silence (FYP)',
    description:
      'A web and mobile app that performs automated lipreading using machine learning. Converts silent or noisy speech videos into clear audio in real time for accessibility and communication use cases.',
    url: '', // No link available yet
    previewImage: ProjectSoundOfSilence,
    technologies: [
      'Flutter',
      'React.js',
      'Python',
      'Flask',
      'Machine Learning',
      'Computer Vision',
    ],
  },
  {
    name: 'Driver\'s Drowsiness Detection System',
    description:
      'An AI-powered real-time system that monitors eye movement through a webcam to detect driver fatigue and trigger instant alerts, helping prevent road accidents.',
    url: 'https://real-time-drowsiness-detection.vercel.app/',
    previewImage: ProjectDrowsiness,
    technologies: [
      'Next.js',
      'React',
      'CNN',
      'Computer Vision',
      'Tailwind CSS',
    ],
  },
  {
    name: 'Black Seal Protection',
    description:
      'A mobile security app that offers SIM protection, device security analysis, and breach monitoring to safeguard users from account compromises and privacy threats.',
    url: 'https://apps.apple.com/us/app/black-seal-protection/id6742754502',
    previewImage: ProjectBlackSeal,
    technologies: [
      'SwiftUI',
      'Xcode',
      'Node.js',
      'PostgreSQL',
      'Heroku',
      'Atom SDK',
    ],
  },
  {
    name: 'LawBot',
    description:
      'An AI-powered legal assistant that provides instant legal guidance based on Pakistan\'s Penal Code and Constitution, making legal help accessible to everyone, especially in remote areas.',
    url: 'https://law-bot-final-website.vercel.app/',
    previewImage: ProjectLawBot,
    technologies: [
      'React',
      'Firebase',
      'Google Gemini AI',
      'React Router',
      'Vercel',
    ],
  },
  {
    name: 'N8N Flow – Google Ads Optimization',
    description:
      'An automated n8n workflow that analyzes Google Ads performance data using LLMs and applies optimization changes, reducing manual review time and improving campaign efficiency.',
    url: '', // No link available yet
    previewImage: ProjectGoogleAds,
    technologies: [
      'N8N',
      'GCP',
      'BigQuery',
      'Cloud Run',
      'LLM',
      'Google Ads API',
    ],
  },
  {
    name: 'N8N Flow – Blog Generator',
    description:
      'An AI-driven content automation system that generates blogs with images, sends them to Slack for approval, and iterates based on user feedback — streamlining content creation.',
    url: '', // No link available yet
    previewImage: ProjectAIContentWriter,
    technologies: [
      'N8N',
      'LLM',
      'Image Generation',
      'Slack API',
      'Workflow Automation',
    ],
  },
];
