export interface Website {
  title: string;
  url: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  github_link?: string;
  tags: string[];
  images: string[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  school: string;
  schoolUrl?: string;
  period: string;
  description: string;
}

export interface Achievement {
  title: string;
  event?: string;
  eventUrl?: string;
  date: string;
  description: string;
}

export const websites: Website[] = [
  {
    title: "Secur",
    url: "https://secur-zeta.vercel.app/",
    description:
      "A modern security services platform showcasing professional protection solutions with a sleek, responsive design.",
    image: "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419157/besthrerp/connexion.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Sun Cuisine",
    url: "https://suncuisine.tn",
    description:
      "Tunisian culinary experience platform featuring authentic recipes, catering services, and a vibrant food community.",
    image: "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419269/noz%20ai/image.png",
    tags: ["Django", "Bootstrap", "PostgreSQL"],
  },
  {
    title: "Naouar",
    url: "https://naouar.vercel.app/",
    description:
      "Professional portfolio and business showcase for Naouar, delivering a clean and modern web presence.",
    image: "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419268/noz%20ai/image_copy_2.png",
    tags: ["Next.js", "Framer Motion", "Vercel"],
  },
  {
    title: "El Maken",
    url: "https://el-maken.vercel.app/",
    description:
      "Youth club platform showcasing vibrant activities and rich history, built in 12 hours during a hackathon.",
    image: "/static/portfolio_app/images/elmaken/elmaken.png",
    tags: ["React", "CSS", "Hackathon"],
  },
];

export const skills: Skill[] = [
  { name: "Django", percentage: 95 },
  { name: "Angular", percentage: 90 },
  { name: "Node.js", percentage: 90 },
  { name: "Next.js", percentage: 85 },
  { name: "Git", percentage: 85 },
];

export const experiences: Experience[] = [
  {
    role: "Web Developer",
    company: "Bestlog Technology",
    companyUrl: "https://www.bestlogtechnology.com/",
    period: "Nov 2024 - Present",
    details: [
      "Enhanced project and absence management platform (Django, Angular)",
      "Developed work cycle planning and holiday calendars with API integration",
      "Implemented onboarding workflows for new employees",
      "Built a CRM module for employment agencies operations",
    ],
  },
  {
    role: "End of Study Intern",
    company: "Bestlog Technology",
    companyUrl: "https://www.bestlogtechnology.com/",
    period: "Feb 2024 - Jul 2024",
    details: [
      "Developed a project and absence management platform (Django, Angular)",
      "Implemented task traceability and automated workflows",
      "Built schedule tracking with overtime calculation",
    ],
  },
  {
    role: "Intern",
    company: "GreenTech, Germany",
    companyUrl: "https://www.greentech.fr/en/",
    period: "Jul 2023 - Oct 2023",
    details: [
      "Implemented a database structure using MongoDB",
      "Developed backend services using Node.js",
      "Integrated APIs with a React project",
    ],
  },
  {
    role: "Intern",
    company: "B2B Technology",
    period: "Jul 2022 - Sep 2022",
    details: [
      "Designed database structures using MySQL",
      "Developed a user-friendly website interface using Django",
      "Enhanced the platform's UI",
    ],
  },
  {
    role: "Intern",
    company: "Wide Web Words",
    companyUrl: "https://www.linkedin.com/company/wide-web-words",
    period: "Jul 2021 - Aug 2021",
    details: [
      "Developed web features using PHP",
      "Maintained and optimized a WordPress website",
      "Content creation and management",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Computer Science Engineer",
    school: "Esprit: Private School of Engineering and Technologies",
    schoolUrl: "https://esprit.tn/",
    period: "09/2019 - 10/2024",
    description: "Focused on web and mobile development.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Hackathon Winner - E-Health Valley",
    event: "Hack4Tunisia",
    eventUrl: "https://www.facebook.com/events/820204066258094",
    date: "10/2023",
    description:
      "Developed an innovative web app using Django and AI APIs in 24 hours for automated appointment scheduling for cancer patients.",
  },
  {
    title: "Hackathon Winner - Hack for Future",
    event: "Gomycode",
    eventUrl: "https://www.facebook.com/events/628864099265974/",
    date: "11/2023",
    description:
      "Developed an interactive educational app in under 24 hours, blending learning with play.",
  },
  {
    title: "Tunisian Insurance Hackathon",
    date: "04/2024",
    description:
      "Developed an insurance data system that reads PDF rules via OCR technology with integrated chatbot.",
  },
  {
    title: "E-Health Valley - 2nd Place",
    date: "10/2024",
    description:
      "Developed a comprehensive pharmaceutical platform with patient database and treatment tracking.",
  },
  {
    title: "VEO Hackathon",
    date: "02/2025",
    description:
      "Created a supplier platform featuring comprehensive databases for France and Belgium suppliers.",
  },
];

export const projects: Project[] = [
  {
    id: 7,
    title: "BestHR ERP",
    category: "Internship",
    description:
      "A web platform that centralizes HR functionalities including task tracking, absence management, schedule tracking, and automation.",
    tags: ["Django", "Angular", "PostgreSQL"],
    images: [
      "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419157/besthrerp/connexion.png",
    ],
  },
  {
    id: 8,
    title: "NOZ AI Hackathon",
    category: "Hackathon",
    description:
      "Supplier platform with comprehensive databases for France and Belgium suppliers with region-based search.",
    tags: ["Python", "Scraping", "FastAPI"],
    images: [
      "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419269/noz%20ai/image.png",
    ],
  },
  {
    id: 9,
    title: "E-Health Valley 2",
    category: "Hackathon",
    description:
      "Comprehensive pharmaceutical platform with patient database management and interactive quiz system.",
    tags: ["Django", "AI", "PDF"],
    images: [
      "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419410/ehealth/459681479_1761288064410347_4979833571078674614_n.png",
    ],
  },
  {
    id: 2,
    title: "GreenTech",
    category: "Internship",
    description:
      "Node.js server for managing eco-friendly packaging solutions with MongoDB and JWT authentication.",
    tags: ["Node.js", "Express", "MongoDB"],
    images: [
      "/static/portfolio_app/images/greentech/greentech2.png",
    ],
    github_link: "https://github.com/houssem9017/GreenTech-backend",
  },
  {
    id: 3,
    title: "BallerChain",
    category: "Academic",
    description:
      "Blockchain-based fantasy football backend using Web3.js and Ethereum with Ganache.",
    tags: ["Node.js", "Web3.js", "Ethereum"],
    images: [
      "/static/portfolio_app/images/ballerchain/ballerchain.png",
    ],
    github_link: "https://github.com/houssem9017/BallerChain-Backend",
  },
  {
    id: 4,
    title: "Devops Project",
    category: "Academic",
    description:
      "SpringBoot web application featuring automated CI/CD pipeline orchestrated by Jenkins.",
    tags: ["SpringBoot", "Jenkins", "Docker"],
    images: [
      "/static/portfolio_app/images/devops/jenkins.png",
    ],
  },
  {
    id: 5,
    title: "Career Pulse",
    category: "Hackathon",
    description:
      "MERN stack HR management platform built in 24 hours during a hackathon.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    images: [
      "/static/portfolio_app/images/career_pulse/2.png",
    ],
    github_link: "https://github.com/houssem9017/Career-Pulse-Frontend",
  },
  {
    id: 6,
    title: "Super Coin Sniper",
    category: "Freelance",
    description:
      "Django marketplace for purchasing and selling Fifa coins with payment integration.",
    tags: ["Django", "Stripe", "Coinbase"],
    images: [
      "/static/portfolio_app/images/scs/0.png",
    ],
  },
  {
    id: 1,
    title: "El Maken (Hackathon)",
    category: "Hackathon",
    description:
      "Online platform built in 12 hours showcasing youth club activities and history.",
    tags: ["React", "CSS"],
    images: [
      "/static/portfolio_app/images/elmaken/elmaken.png",
    ],
    github_link: "https://github.com/houssem9017/el_maken",
  },
];
