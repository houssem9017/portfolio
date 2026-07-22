export interface Website {
  id: string;
  title: string;
  slug: string;
  liveUrl: string | null;
  caseStudyUrl?: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  live: boolean;
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

export interface SkillCategory {
  label: string;
  items: string[];
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

export type LocalizedText = {
  en: string;
  fr: string;
};

export type ProjectCategory =
  | "professional"
  | "product"
  | "client"
  | "tool"
  | "experiment";

export type ProjectAction = {
  label: LocalizedText;
  href?: string;
  placeholder?: string;
};

export interface PortfolioProject {
  id: string;
  slug: string;
  category: ProjectCategory;
  title: string;
  subtitle: LocalizedText;
  summary: LocalizedText;
  context?: LocalizedText;
  contributions?: { title: LocalizedText; description: LocalizedText }[];
  highlights?: LocalizedText[];
  skillsDemonstrated?: LocalizedText[];
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  marketplaceUrl?: string;
  status?: LocalizedText;
  disclaimer?: LocalizedText;
  actions?: ProjectAction[];
  featured: boolean;
  order: number;
}

/** Central external project / website URLs — do not hardcode elsewhere. */
export const projectUrls = {
  secur: "https://secur-zeta.vercel.app/",
  sunCuisine: "https://suncuisine.tn",
  naouar: "https://naouar.vercel.app/",
  nexaStore: "https://nexa-store.vercel.app/",
  cafeOasis: "https://cafe-oasis.vercel.app/",
  eclatPrestige: "https://eclat-prestige.vercel.app/",
  elleFit: "https://elle-fit.vercel.app/",
  epicFitness: "https://epic-fitness.vercel.app/",
  titanFitness: "https://titan-fitness.vercel.app/",
  olympeGym: "https://olympe-gym.vercel.app/",
  greentechGithub: "https://github.com/houssem9017/GreenTech-backend",
  ballerchainGithub: "https://github.com/houssem9017/BallerChain-Backend",
  careerPulseGithub: "https://github.com/houssem9017/Career-Pulse-Frontend",
  elMakenGithub: "https://github.com/houssem9017/el_maken",
} as const;

export const websites: Website[] = [
  {
    id: "secur",
    title: "Secur",
    slug: "secur",
    liveUrl: projectUrls.secur,
    category: "Sécurité",
    description:
      "A modern security services platform showcasing professional protection solutions with a sleek, responsive design.",
    image:
      "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419157/besthrerp/connexion.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    featured: true,
    live: true,
  },
  {
    id: "sun-cuisine",
    title: "Sun Cuisine",
    slug: "sun-cuisine",
    liveUrl: projectUrls.sunCuisine,
    category: "Cuisine",
    description:
      "Tunisian culinary experience platform featuring authentic recipes, catering services, and a vibrant food community.",
    image:
      "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419269/noz%20ai/image.png",
    technologies: ["Django", "Bootstrap", "PostgreSQL"],
    featured: true,
    live: true,
  },
  {
    id: "naouar",
    title: "Naouar",
    slug: "naouar",
    liveUrl: projectUrls.naouar,
    category: "Portfolio",
    description:
      "Professional portfolio and business showcase for Naouar, delivering a clean and modern web presence.",
    image:
      "https://res.cloudinary.com/drjr2cpgn/image/upload/v1754419268/noz%20ai/image_copy_2.png",
    technologies: ["Next.js", "Framer Motion", "Vercel"],
    featured: true,
    live: true,
  },
  {
    id: "nexa-store",
    title: "Nexa Store",
    slug: "nexa-store",
    liveUrl: projectUrls.nexaStore,
    category: "E-commerce",
    description:
      "Premium product e-commerce platform for professionals featuring electronics, accessories, and wearables with a complete dashboard.",
    image: "/static/portfolio_app/images/nexa-store/hero.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    featured: true,
    live: true,
  },
  {
    id: "cafe-oasis",
    title: "Café Oasis",
    slug: "cafe-oasis",
    liveUrl: projectUrls.cafeOasis,
    category: "Café",
    description:
      "Elegant landing page for a café in Sidi Bou Said, Tunisia, with a refined visual identity and smooth animations.",
    image: "/static/portfolio_app/images/cafe-oasis/hero.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    featured: false,
    live: true,
  },
  {
    id: "eclat-prestige",
    title: "Éclat Prestige",
    slug: "eclat-prestige",
    liveUrl: projectUrls.eclatPrestige,
    category: "Beauté",
    description:
      "Beauty salon landing page in Tunis, Tunisia, presenting services, a gallery of work, and booking information in a refined design.",
    image: "/static/portfolio_app/images/eclat-prestige/hero.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    featured: true,
    live: true,
  },
  {
    id: "elle-fit",
    title: "Elle Fit Tunis",
    slug: "elle-fit",
    liveUrl: projectUrls.elleFit,
    category: "Fitness",
    description:
      "Women-only fitness gym in Tunis offering yoga, pilates, dance cardio, and gentle weight training in an all-female environment.",
    image: "/static/portfolio_app/images/elle-fit/hero.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    featured: false,
    live: true,
  },
  {
    id: "epic-fitness",
    title: "Epic Fitness",
    slug: "epic-fitness",
    liveUrl: projectUrls.epicFitness,
    category: "Fitness",
    description:
      "Modern mixed-gender fitness gym in Tunis with two locations, offering group classes, weight training, and certified coaching.",
    image: "/static/portfolio_app/images/epic-fitness/hero.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    live: true,
  },
  {
    id: "titan-fitness",
    title: "Titan Fitness",
    slug: "titan-fitness",
    liveUrl: projectUrls.titanFitness,
    category: "Fitness",
    description:
      "Fitness gym in Tunis with an emerald brand theme, offering weight training, cardio, and group classes to help members push their limits.",
    image: "/static/portfolio_app/images/titan-fitness/hero.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    live: true,
  },
  {
    id: "olympe-gym",
    title: "Olympe Gym",
    slug: "olympe-gym",
    liveUrl: projectUrls.olympeGym,
    category: "Fitness",
    description:
      "Mixed-gender fitness gym in Sousse with two locations, offering group classes, weight training, cardio, and a swimming pool.",
    image: "/static/portfolio_app/images/olympe-gym/hero.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    live: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Core engineering",
    items: ["Django", "Next.js", "Angular", "Node.js", "Python", "TypeScript", "JavaScript"],
  },
  {
    label: "Architecture and backend",
    items: ["REST APIs", "Authentication and authorization", "RBAC", "PostgreSQL", "MongoDB", "Business-rule modeling"],
  },
  {
    label: "Delivery and infrastructure",
    items: ["Git", "Docker", "CI/CD", "Nginx", "Deployment", "Logging", "Monitoring", "Vercel"],
  },
  {
    label: "Product and frontend",
    items: ["Responsive design", "Design systems", "Accessibility", "SEO foundations", "Web animation", "Product thinking", "Framer Motion", "Tailwind CSS"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Web Developer",
    company: "Bestlog Technology",
    companyUrl: "https://www.bestlogtechnology.com/",
    period: "Nov 2024 – Present",
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
    period: "Feb 2024 – Jul 2024",
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
    period: "Jul 2023 – Oct 2023",
    details: [
      "Implemented a database structure using MongoDB",
      "Developed backend services using Node.js",
      "Integrated APIs with a React project",
    ],
  },
  {
    role: "Intern",
    company: "B2B Technology",
    period: "Jul 2022 – Sep 2022",
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
    period: "Jul 2021 – Aug 2021",
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
    period: "Sep 2019 – Oct 2024",
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
    images: ["/static/portfolio_app/images/greentech/greentech2.png"],
    github_link: projectUrls.greentechGithub,
  },
  {
    id: 3,
    title: "BallerChain",
    category: "Academic",
    description:
      "Blockchain-based fantasy football backend using Web3.js and Ethereum with Ganache.",
    tags: ["Node.js", "Web3.js", "Ethereum"],
    images: ["/static/portfolio_app/images/ballerchain/ballerchain.png"],
    github_link: projectUrls.ballerchainGithub,
  },
  {
    id: 4,
    title: "Devops Project",
    category: "Academic",
    description:
      "SpringBoot web application featuring automated CI/CD pipeline orchestrated by Jenkins.",
    tags: ["SpringBoot", "Jenkins", "Docker"],
    images: ["/static/portfolio_app/images/devops/jenkins.png"],
  },
  {
    id: 5,
    title: "Career Pulse",
    category: "Hackathon",
    description:
      "MERN stack HR management platform built in 24 hours during a hackathon.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    images: ["/static/portfolio_app/images/career_pulse/2.png"],
    github_link: projectUrls.careerPulseGithub,
  },
  {
    id: 6,
    title: "Super Coin Sniper",
    category: "Freelance",
    description:
      "Django marketplace for purchasing and selling Fifa coins with payment integration.",
    tags: ["Django", "Stripe", "Coinbase"],
    images: ["/static/portfolio_app/images/scs/0.png"],
  },
  {
    id: 1,
    title: "El Maken (Hackathon)",
    category: "Hackathon",
    description:
      "Online platform built in 12 hours showcasing youth club activities and history.",
    tags: ["React", "CSS"],
    images: ["/static/portfolio_app/images/elmaken/elmaken.png"],
    github_link: projectUrls.elMakenGithub,
  },
];

const text = (en: string, fr: string): LocalizedText => ({ en, fr });

/**
 * The homepage and project detail routes read from this single source of truth.
 * Missing public links and visuals stay explicit instead of being guessed.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "besthr",
    slug: "besthr",
    category: "professional",
    title: "BestHR",
    subtitle: text(
      "Enterprise HR and project-management platform",
      "Plateforme de gestion RH et de projets"
    ),
    summary: text(
      "Contributed to advanced authorization and budget-control workflows for an enterprise HR platform, with scoped permissions and hierarchical validation across projects, tasks, and employee activity.",
      "Contribution à des workflows avancés d’autorisation et de contrôle budgétaire pour une plateforme RH d’entreprise, avec des permissions contextualisées et une validation hiérarchique entre projets, tâches et activités des employés."
    ),
    context: text(
      "BestHR manages employees, projects, permissions, workloads, and organizational processes. My work focused on business-critical controls over access and resource consumption.",
      "BestHR gère les employés, les projets, les autorisations, les charges de travail et les processus organisationnels. Mon travail portait sur le contrôle des accès et de la consommation des ressources."
    ),
    contributions: [
      {
        title: text("Dynamic and scoped permissions", "Permissions dynamiques et contextualisées"),
        description: text(
          "Implemented permission groups for viewing, creating, editing, and deleting records inside a defined project or organizational perimeter.",
          "Mise en place de groupes de permissions pour consulter, créer, modifier et supprimer des données dans un périmètre projet ou organisationnel défini."
        ),
      },
      {
        title: text("Hierarchical budget validation", "Validation budgétaire hiérarchique"),
        description: text(
          "Added rules ensuring projects, subprojects, and tasks respect the budget allocated by their parent.",
          "Ajout de règles garantissant que les projets, sous-projets et tâches respectent le budget attribué par leur parent."
        ),
      },
      {
        title: text("Employee allocation enforcement", "Contrôle des allocations des employés"),
        description: text(
          "Validated employee activity and time allocation against the budget of the related task or project.",
          "Validation de l’activité et du temps affectés aux employés par rapport au budget de la tâche ou du projet concerné."
        ),
      },
    ],
    skillsDemonstrated: [
      text("Complex business rules", "Règles métier complexes"),
      text("Fine-grained authorization", "Autorisations granulaires"),
      text("Hierarchical data management", "Gestion de données hiérarchiques"),
      text("Data integrity", "Intégrité des données"),
      text("Enterprise application development", "Développement d’applications d’entreprise"),
    ],
    tags: ["Django", "Angular", "RBAC", "Business Logic", "Budget Control"],
    disclaimer: text(
      "Developed as part of the BestLog engineering team. Product ownership and intellectual property belong to BestLog.",
      "Développé dans le cadre de l’équipe d’ingénierie de BestLog. Le produit et sa propriété intellectuelle appartiennent à BestLog."
    ),
    actions: [
      { label: text("View case study", "Voir l’étude de cas") },
      { label: text("Public visual pending", "Visuel public à ajouter"), placeholder: "TODO_BESTHR_PUBLIC_VISUAL" },
    ],
    featured: true,
    order: 1,
  },
  {
    id: "bestdoc",
    slug: "bestdoc",
    category: "professional",
    title: "BestDocSolution",
    subtitle: text(
      "White-label B2B member-management platform",
      "Plateforme B2B white-label de gestion des adhérents"
    ),
    summary: text(
      "Contributed to the evolution of BestDocSolution from document management into a broader white-label member platform for professional organizations.",
      "Contribution à l’évolution de BestDocSolution, passée de la gestion documentaire à une plateforme white-label complète pour les organisations professionnelles."
    ),
    context: text(
      "The platform centralizes members, publications, forms, events, subscriptions, payments, follow-ups, communication history, consultation tracking, and organization-specific branding.",
      "La plateforme centralise les adhérents, publications, formulaires, événements, abonnements, paiements, suivis, historiques d’échanges, consultations et identité propre à chaque organisation."
    ),
    contributions: [
      {
        title: text("Product evolution", "Évolution produit"),
        description: text(
          "Helped connect administrative workflows that had previously been handled separately, creating a more unified member relationship platform.",
          "Contribution à la connexion de processus administratifs auparavant séparés afin de créer une plateforme plus unifiée pour la relation avec les adhérents."
        ),
      },
      {
        title: text("White-label configuration", "Configuration white-label"),
        description: text(
          "Contributed to adaptable organization-specific configuration without requiring a separate application for every customer identity.",
          "Contribution à une configuration adaptable à chaque organisation sans nécessiter une application séparée pour chaque identité client."
        ),
      },
    ],
    highlights: [
      text("Member management", "Gestion des adhérents"),
      text("Publications and document distribution", "Publications et diffusion documentaire"),
      text("Forms, events, subscriptions, and payments", "Formulaires, événements, abonnements et paiements"),
      text("Communication history and consultation tracking", "Historique des échanges et suivi des consultations"),
    ],
    skillsDemonstrated: [
      text("B2B SaaS development", "Développement SaaS B2B"),
      text("Product evolution", "Évolution produit"),
      text("White-label platforms", "Plateformes white-label"),
      text("Business workflow modeling", "Modélisation de processus métier"),
      text("Modular product architecture", "Architecture produit modulaire"),
    ],
    tags: ["B2B SaaS", "White-label", "Django", "Angular", "Product Evolution"],
    disclaimer: text(
      "Developed as part of the BestLog engineering team. Product ownership and intellectual property belong to BestLog.",
      "Développé dans le cadre de l’équipe d’ingénierie de BestLog. Le produit et sa propriété intellectuelle appartiennent à BestLog."
    ),
    actions: [
      { label: text("View case study", "Voir l’étude de cas") },
      { label: text("Public visual pending", "Visuel public à ajouter"), placeholder: "TODO_BESTDOC_PUBLIC_VISUAL" },
    ],
    featured: true,
    order: 2,
  },
  {
    id: "bestboard",
    slug: "bestboard",
    category: "professional",
    title: "BestBoard",
    subtitle: text(
      "Internal product-delivery and collaboration platform",
      "Plateforme interne de gestion et de livraison produit"
    ),
    summary: text(
      "Conceived and contributed to an internal platform connecting specifications, user stories, engineering tasks, Kanban boards, documentation, and management visibility.",
      "Conception et contribution à une plateforme interne reliant spécifications, user stories, tâches techniques, tableaux Kanban, documentation et visibilité management."
    ),
    context: text(
      "The team was spending time manually turning specifications into stories, tasks, progress updates, and status communication while context remained distributed across documents and boards.",
      "L’équipe consacrait du temps à transformer manuellement les spécifications en stories, tâches, suivis et communications, tandis que le contexte restait dispersé entre documents et tableaux."
    ),
    contributions: [
      {
        title: text("Workflow-centered product design", "Conception centrée sur le workflow"),
        description: text(
          "Proposed a lightweight internal product-delivery platform around the team’s actual workflow instead of a generic project-management system.",
          "Proposition d’une plateforme interne légère construite autour du fonctionnement réel de l’équipe plutôt que d’un outil de gestion générique."
        ),
      },
      {
        title: text("Delivery context", "Contexte de livraison"),
        description: text(
          "Defined the initial structure for projects, stories, boards, task history, specifications, permissions, and management visibility.",
          "Définition de la structure initiale pour les projets, stories, tableaux, historiques de tâches, spécifications, permissions et visibilité management."
        ),
      },
    ],
    highlights: [
      text("Projects and user stories", "Projets et user stories"),
      text("Individual and team Kanban boards", "Tableaux Kanban individuels et collectifs"),
      text("Task assignment and progress tracking", "Affectation et suivi des tâches"),
      text("Specification storage and project history", "Stockage des spécifications et historique projet"),
      text("Future MCP integration planning", "Planification d’une future intégration MCP"),
    ],
    skillsDemonstrated: [
      text("Product initiative", "Initiative produit"),
      text("Internal workflow improvement", "Amélioration de workflow interne"),
      text("Product and system design", "Conception produit et système"),
      text("Full-stack architecture", "Architecture full-stack"),
      text("AI and MCP integration planning", "Planification d’intégration IA et MCP"),
    ],
    tags: ["Product Design", "Next.js", "Django", "Kanban", "Workflow Automation"],
    disclaimer: text(
      "Developed as an internal product within BestLog. Product ownership and intellectual property belong to BestLog.",
      "Développé comme produit interne au sein de BestLog. Le produit et sa propriété intellectuelle appartiennent à BestLog."
    ),
    actions: [
      { label: text("View case study", "Voir l’étude de cas") },
      { label: text("Neutral visual pending", "Visuel neutre à ajouter"), placeholder: "TODO_BESTBOARD_NEUTRAL_VISUAL" },
    ],
    featured: true,
    order: 3,
  },
  {
    id: "ma-vitrine",
    slug: "ma-vitrine",
    category: "product",
    title: "Ma Vitrine",
    subtitle: text(
      "Website creation platform for Tunisian businesses",
      "Plateforme de création de sites pour les entreprises tunisiennes"
    ),
    summary: text(
      "An independent platform helping small Tunisian businesses launch a professional online presence through reusable foundations and business-specific presentation.",
      "Une plateforme indépendante qui aide les petites entreprises tunisiennes à lancer une présence en ligne professionnelle grâce à des fondations réutilisables et une présentation adaptée à chaque activité."
    ),
    highlights: [
      text("Business-specific website structures", "Structures adaptées aux secteurs d’activité"),
      text("Mobile-first responsive design", "Design responsive mobile-first"),
      text("Contact and lead collection", "Collecte de contacts et de prospects"),
      text("Search-engine foundations", "Fondations SEO"),
      text("Domain and deployment workflows", "Gestion des domaines et déploiements"),
      text("Reusable development architecture", "Architecture de développement réutilisable"),
    ],
    skillsDemonstrated: [
      text("SaaS product thinking", "Conception produit SaaS"),
      text("Multi-tenant foundations", "Fondations multi-tenant"),
      text("Reusable delivery architecture", "Architecture de livraison réutilisable"),
    ],
    tags: ["Django", "Next.js", "SaaS", "Multi-tenant", "SEO"],
    disclaimer: text(
      "Independent product. Add the verified production URL when it is public.",
      "Produit indépendant. Ajouter l’URL de production vérifiée lorsqu’elle sera publique."
    ),
    actions: [
      { label: text("View live website", "Voir le site"), placeholder: "TODO_MA_VITRINE_URL" },
      { label: text("View case study", "Voir l’étude de cas") },
    ],
    featured: true,
    order: 4,
  },
  {
    id: "alerts",
    slug: "alerts",
    category: "product",
    title: "Alerts",
    subtitle: text(
      "Automated public-offer monitoring platform",
      "Plateforme automatisée de veille sur les offres publiques"
    ),
    summary: text(
      "A scraping and notification platform designed to help companies discover relevant public opportunities without checking multiple portals manually every day.",
      "Une plateforme de scraping et de notification conçue pour aider les entreprises à découvrir les opportunités publiques pertinentes sans consulter plusieurs portails chaque jour."
    ),
    highlights: [
      text("Periodic data collection", "Collecte périodique des données"),
      text("Offer normalization and duplicate detection", "Normalisation des offres et détection des doublons"),
      text("Keyword and category matching", "Filtrage par mots-clés et catégories"),
      text("PDF retrieval and storage", "Récupération et stockage des PDF"),
      text("Summaries, notifications, and processing logs", "Résumés, notifications et journaux de traitement"),
      text("Retry and failure handling", "Gestion des erreurs et nouvelles tentatives"),
    ],
    tags: ["Django", "Next.js", "Scraping", "Automation", "Background Jobs"],
    status: text("Status to verify", "Statut à vérifier"),
    disclaimer: text(
      "Project status and public links must be verified from the repository before claiming a live or production-ready release.",
      "Le statut du projet et les liens publics doivent être vérifiés dans le repository avant de parler de version en ligne ou prête pour la production."
    ),
    actions: [
      { label: text("View project", "Voir le projet"), placeholder: "TODO_ALERTS_URL" },
      { label: text("View case study", "Voir l’étude de cas") },
      { label: text("Public repository", "Repository public"), placeholder: "TODO_ALERTS_GITHUB_URL" },
    ],
    featured: true,
    order: 5,
  },
  {
    id: "suncuisine",
    slug: "suncuisine",
    category: "client",
    title: "SunCuisine",
    subtitle: text(
      "Production website for a custom interior company",
      "Site en production pour une entreprise d’aménagement sur mesure"
    ),
    summary: text(
      "Designed and developed a responsive production website for a company specializing in made-to-measure kitchens, dressing rooms, and interior fittings.",
      "Conception et développement d’un site responsive en production pour une entreprise spécialisée dans les cuisines, dressings et aménagements intérieurs sur mesure."
    ),
    contributions: [
      { title: text("Requirements clarification", "Clarification des besoins"), description: text("Translated business needs into a clear page structure and content hierarchy.", "Traduction des besoins métier en structure de pages et hiérarchie de contenu claires.") },
      { title: text("Visual direction", "Direction visuelle"), description: text("Built a premium presentation suited to custom interior work and service discovery.", "Création d’une présentation premium adaptée à l’aménagement sur mesure et à la découverte des services.") },
      { title: text("Responsive implementation", "Adaptation responsive"), description: text("Delivered the interface across mobile and desktop contexts with conversion-focused contact paths.", "Déploiement de l’interface sur mobile et desktop avec des parcours de contact orientés conversion.") },
    ],
    tags: ["Next.js", "Responsive Design", "Client Project", "SEO"],
    liveUrl: projectUrls.sunCuisine,
    actions: [
      { label: text("View live website", "Voir le site"), href: projectUrls.sunCuisine },
      { label: text("View project details", "Voir les détails du projet") },
    ],
    featured: true,
    order: 6,
  },
  {
    id: "sudoku",
    slug: "sudoku",
    category: "tool",
    title: "Sudoku VS Code Extension",
    subtitle: text("VS Code game extension", "Extension de jeu pour VS Code"),
    summary: text(
      "A Sudoku game built as a Visual Studio Code extension, exploring extension APIs, custom webviews, game-state management, validation, and editor integration.",
      "Un jeu de Sudoku développé comme extension Visual Studio Code, explorant les API d’extension, les webviews, la gestion d’état, la validation et l’intégration à l’éditeur."
    ),
    highlights: [
      text("VS Code extension development", "Développement d’extensions VS Code"),
      text("Webview interfaces", "Interfaces webview"),
      text("Interactive state management", "Gestion d’état interactive"),
      text("Game logic and validation", "Logique et validation du jeu"),
      text("Editor integration", "Intégration avec l’éditeur"),
    ],
    tags: ["VS Code API", "TypeScript", "Webview", "Game Development"],
    actions: [
      { label: text("View on Marketplace", "Voir sur Marketplace"), placeholder: "TODO_SUDOKU_MARKETPLACE_URL" },
      { label: text("View source code", "Voir le code source"), placeholder: "TODO_SUDOKU_GITHUB_URL" },
    ],
    featured: false,
    order: 7,
  },
  {
    id: "snake",
    slug: "snake",
    category: "tool",
    title: "Snake VS Code Extension",
    subtitle: text("VS Code game extension", "Extension de jeu pour VS Code"),
    summary: text(
      "A playable Snake game implemented as a Visual Studio Code extension with real-time keyboard interaction, game-loop management, collision detection, score handling, and webview rendering.",
      "Un jeu Snake jouable dans Visual Studio Code, avec interactions clavier en temps réel, boucle de jeu, détection des collisions, gestion du score et rendu dans une webview."
    ),
    highlights: [
      text("Real-time user interaction", "Interactions utilisateur en temps réel"),
      text("Keyboard-event handling", "Gestion des événements clavier"),
      text("Game-loop architecture", "Architecture d’une boucle de jeu"),
      text("Collision and score logic", "Logique des collisions et du score"),
      text("Webview rendering", "Rendu dans une webview"),
    ],
    tags: ["VS Code API", "TypeScript", "Webview", "Game Development"],
    actions: [
      { label: text("View on Marketplace", "Voir sur Marketplace"), placeholder: "TODO_SNAKE_MARKETPLACE_URL" },
      { label: text("View source code", "Voir le code source"), placeholder: "TODO_SNAKE_GITHUB_URL" },
    ],
    featured: false,
    order: 8,
  },
  {
    id: "jetour",
    slug: "jetour",
    category: "experiment",
    title: "Jetour",
    subtitle: text("Independent automotive concept", "Concept automobile indépendant"),
    summary: text(
      "An independent automotive concept exploring cinematic presentation, immersive media, responsive storytelling, and premium vehicle visuals.",
      "Un concept automobile indépendant explorant la présentation cinématographique, les médias immersifs, le storytelling responsive et les visuels premium."
    ),
    tags: ["Next.js", "Motion", "Video", "Responsive Design"],
    disclaimer: text(
      "Independent concept project. Not commissioned by, endorsed by, or affiliated with Jetour.",
      "Projet conceptuel indépendant, non commandé, approuvé ou affilié à Jetour."
    ),
    featured: false,
    order: 9,
  },
  {
    id: "tunisian-sweets",
    slug: "tunisian-sweets",
    category: "experiment",
    title: "Tunisian Sweets",
    subtitle: text("Arabic-first cultural website", "Site culturel pensé d’abord pour l’arabe"),
    summary: text(
      "A cultural website concept presenting traditional Tunisian sweets, their regional origins, and their significance through modern visual storytelling.",
      "Un concept de site culturel présentant les pâtisseries tunisiennes traditionnelles, leurs origines régionales et leur importance à travers un storytelling visuel moderne."
    ),
    tags: ["Arabic UI", "RTL", "Next.js", "Culture", "Motion Design"],
    featured: false,
    order: 10,
  },
  {
    id: "gym",
    slug: "gym",
    category: "experiment",
    title: "Gym Website",
    subtitle: text("Fitness website concept", "Concept de site pour salle de sport"),
    summary: text(
      "A modern fitness website concept combining a video-based hero, training programs, coach presentation, membership offers, and conversion-focused calls to action.",
      "Un concept de site moderne pour une salle de sport combinant hero vidéo, programmes d’entraînement, présentation des coachs, offres d’abonnement et appels à l’action."
    ),
    tags: ["Next.js", "Video Hero", "Fitness", "Responsive Design"],
    featured: false,
    order: 11,
  },
  {
    id: "nexastore",
    slug: "nexastore",
    category: "experiment",
    title: "NexaStore",
    subtitle: text("Ecommerce interface concept", "Concept d’interface ecommerce"),
    summary: text(
      "A responsive ecommerce interface concept exploring product discovery, categories, product pages, cart interactions, and storefront architecture.",
      "Un concept d’interface ecommerce responsive explorant la découverte de produits, les catégories, les pages produit, le panier et l’architecture d’une boutique."
    ),
    tags: ["Ecommerce", "Next.js", "Responsive UI"],
    disclaimer: text(
      "Interface and architecture experiment, not a real commercial store unless the repository proves otherwise.",
      "Expérience d’interface et d’architecture, et non une boutique commerciale réelle sauf preuve contraire dans le repository."
    ),
    featured: false,
    order: 12,
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export const experimentGallery = {
  title: "Fictional business websites",
  description: text(
    "Concept, UI experiment, and uncommissioned work exploring industry-specific layouts, reusable components, responsive structure, and conversion-focused design.",
    "Concepts, expériences UI et travaux non commandés pour explorer les mises en page sectorielles, les composants réutilisables, le responsive et le design orienté conversion."
  ),
  items: ["Security or surveillance", "Café", "Restaurant", "Hair salon", "Additional gym concepts"],
};
