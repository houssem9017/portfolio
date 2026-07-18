export type Locale = "en" | "fr";

const translations: Record<Locale, Record<string, Record<string, string>>> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      resume: "Resume",
      websites: "Websites",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Full-Stack Software Engineer",
      firstName: "Houssem",
      lastName: "Darragi",
      tagline:
        "Building robust web applications with modern technologies. Specialized in {{tech1}}, {{tech2}}, and {{tech3}}.",
      ctaWork: "View My Work",
      ctaContact: "Get In Touch",
    },
    about: {
      heading: "About Me",
      stats_experience: "Experience",
      stats_experience_value: "4+ Years",
      stats_projects: "Projects",
      stats_hackathons: "Hackathons Won",
      stats_clients: "Clients",
      p1: "I'm a Fullstack Developer specialized in building robust web applications using Django and Angular. My experience spans backend architecture, frontend interfaces, and API integrations.",
      p2: "With a solid foundation from academic projects, internships, and hackathons, I deliver efficient and scalable solutions. I thrive in fast-paced environments, combining problem-solving skills with a focus on clean, maintainable code.",
      p3: "Proficient in Python (Django), JavaScript/TypeScript (Node.js, Next.js, Angular), and Framer Motion. Skilled in Git workflows, relational and NoSQL databases. Fluent in English and French.",
    },
    skills: {
      heading: "Skills & Expertise",
      description:
        "My project experience in multiple languages showcases my rapid adaptability and eagerness to learn, enabling me to thrive in evolving tech environments.",
    },
    websites: {
      label: "Live Websites",
      heading: "Featured Websites",
      description:
        "Live projects I've built and deployed. Each one represents real-world solutions for clients and businesses.",
      badge: "Live",
      comingSoon: "Coming soon",
      item1_title: "Secur",
      item1_desc:
        "A modern security services platform showcasing professional protection solutions with a sleek, responsive design.",
      item2_title: "Sun Cuisine",
      item2_desc:
        "Tunisian culinary experience platform featuring authentic recipes, catering services, and a vibrant food community.",
      item3_title: "Naouar",
      item3_desc:
        "Professional portfolio and business showcase for Naouar, delivering a clean and modern web presence.",
      item4_title: "Nexa Store",
      item4_desc:
        "Premium product e-commerce platform for professionals featuring electronics, accessories, and wearables with a complete dashboard.",
      item5_title: "Café Oasis",
      item5_desc:
        "Elegant landing page for a café in Sidi Bou Said, Tunisia, with a refined visual identity and smooth animations.",
      item6_title: "Éclat Prestige",
      item6_desc:
        "Beauty salon landing page in Tunis, Tunisia, presenting services, a gallery of work, and booking information in a refined design.",
      item7_title: "Elle Fit Tunis",
      item7_desc:
        "Women-only fitness gym in Tunis offering yoga, pilates, dance cardio, and gentle weight training in an all-female environment.",
      item8_title: "Epic Fitness",
      item8_desc:
        "Modern mixed-gender fitness gym in Tunis with two locations, offering group classes, weight training, and certified coaching.",
      item9_title: "Titan Fitness",
      item9_desc:
        "Fitness gym in Tunis with an emerald brand theme, offering weight training, cardio, and group classes to help members push their limits.",
      item10_title: "Olympe Gym",
      item10_desc:
        "Mixed-gender fitness gym in Sousse with two locations, offering group classes, weight training, cardio, and a swimming pool.",
    },
    projects: {
      heading: "Other Projects",
      description:
        "A collection of projects from internships, hackathons, and academic work that showcase my development journey.",
      source: "Source",
      showLess: "Show Less",
      showAll: "Show All Projects ({{count}})",
    },
    resume: {
      heading: "My Resume",
      experience: "Experience",
      education: "Education",
      achievements: "Achievements",
    },
    contact: {
      heading: "Get In Touch",
      description:
        "For collaboration opportunities, job offers, or project inquiries, feel free to reach out.",
      email: "Email",
      phone: "Phone",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      resume: "CV",
      websites: "Sites Web",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      role: "Ingénieur logiciel full-stack",
      firstName: "Houssem",
      lastName: "Darragi",
      tagline:
        "Je construis des applications web robustes avec les technologies modernes. Spécialisé en {{tech1}}, {{tech2}} et {{tech3}}.",
      ctaWork: "Voir mon travail",
      ctaContact: "Me contacter",
    },
    about: {
      heading: "À propos de moi",
      stats_experience: "Expérience",
      stats_experience_value: "4+ Années",
      stats_projects: "Projets",
      stats_hackathons: "Hackathons gagnés",
      stats_clients: "Clients",
      p1: "Je suis un développeur Fullstack spécialisé dans la création d'applications web robustes avec Django et Angular. Mon expérience couvre l'architecture backend, les interfaces frontend et les intégrations d'API.",
      p2: "Avec une base solide issue de projets académiques, de stages et de hackathons, je fournis des solutions efficaces et évolutives. Je m'épanouis dans des environnements dynamiques, combinant des compétences en résolution de problèmes avec un accent sur un code propre et maintenable.",
      p3: "Compétent en Python (Django), JavaScript/TypeScript (Node.js, Next.js, Angular) et Framer Motion. Expérimenté avec Git, les bases de données relationnelles et NoSQL. Parlant couramment anglais et français.",
    },
    skills: {
      heading: "Compétences & Expertise",
      description:
        "Mon expérience de projet dans plusieurs langages démontre ma rapidité d'adaptation et ma soif d'apprendre, me permettant de prospérer dans des environnements technologiques en évolution.",
    },
    websites: {
      label: "Sites en ligne",
      heading: "Sites Web réalisés",
      description:
        "Des projets en ligne que j'ai construits et déployés. Chacun représente des solutions concrètes pour des clients et entreprises.",
      badge: "En ligne",
      comingSoon: "Bientôt disponible",
      item1_title: "Secur",
      item1_desc:
        "Une plateforme moderne de services de sécurité présentant des solutions de protection professionnelles avec un design élégant et réactif.",
      item2_title: "Sun Cuisine",
      item2_desc:
        "Plateforme culinaire tunisienne proposant des recettes authentiques, des services de traiteur et une communauté gastronomique dynamique.",
      item3_title: "Naouar",
      item3_desc:
        "Portfolio professionnel et vitrine commerciale pour Naouar, offrant une présence web moderne et épurée.",
      item4_title: "Nexa Store",
      item4_desc:
        "Plateforme e-commerce de produits premium pour professionnels avec électronique, accessoires et wearables, incluant un tableau de bord complet.",
      item5_title: "Café Oasis",
      item5_desc:
        "Page d'accueil élégante pour un café à Sidi Bou Said, Tunisie, avec une identité visuelle raffinée et des animations fluides.",
      item6_title: "Éclat Prestige",
      item6_desc:
        "Page d'accueil pour un salon de beauté à Tunis, présentant les services, une galerie de réalisations et une prise de rendez-vous dans un design raffiné.",
      item7_title: "Elle Fit Tunis",
      item7_desc:
        "Salle de fitness exclusivement féminine à Tunis proposant yoga, pilates, cardio-danse et musculation douce dans un environnement 100 % femmes.",
      item8_title: "Epic Fitness",
      item8_desc:
        "Salle de fitness mixte à Tunis avec deux emplacements, offrant cours collectifs, musculation et coaching certifié.",
      item9_title: "Titan Fitness",
      item9_desc:
        "Salle de fitness à Tunis au thème émeraude, offrant musculation, cardio et cours collectifs pour repousser ses limites.",
      item10_title: "Olympe Gym",
      item10_desc:
        "Salle de fitness mixte à Sousse avec deux emplacements, proposant cours collectifs, musculation, cardio et piscine.",
    },
    projects: {
      heading: "Autres projets",
      description:
        "Une collection de projets issus de stages, hackathons et travaux académiques qui illustrent mon parcours de développement.",
      source: "Code source",
      showLess: "Voir moins",
      showAll: "Voir tous les projets ({{count}})",
    },
    resume: {
      heading: "Mon CV",
      experience: "Expérience",
      education: "Formation",
      achievements: "Réalisations",
    },
    contact: {
      heading: "Me contacter",
      description:
        "Pour des opportunités de collaboration, offres d'emploi ou demandes de projet, n'hésitez pas à me contacter.",
      email: "Email",
      phone: "Téléphone",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
};

export function getTranslations(locale: Locale) {
  return (key: string, vars?: Record<string, string>) => {
    const keys = key.split(".");
    let value: Record<string, unknown> | string | undefined = translations[locale];
    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = value[k] as Record<string, unknown> | string | undefined;
      } else {
        return key;
      }
    }
    if (typeof value !== "string") return key;
    if (vars) {
      return value.replace(/\{\{(\w+)\}\}/g, (_, v) => vars[v] ?? "");
    }
    return value;
  };
}

export function getLocaleFromBrowser(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() || "";
  if (lang.startsWith("fr")) return "fr";
  return "en";
}
