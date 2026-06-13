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
      role: "Fullstack Developer",
      firstName: "Darragi",
      lastName: "Houssem",
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
      p3: "Proficient in Python, JavaScript, PHP, and C# (.NET). Skilled in managing relational and NoSQL databases. Fluent in English and French.",
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
      item1_title: "Secur",
      item1_desc:
        "A modern security services platform showcasing professional protection solutions with a sleek, responsive design.",
      item2_title: "Sun Cuisine",
      item2_desc:
        "Tunisian culinary experience platform featuring authentic recipes, catering services, and a vibrant food community.",
      item3_title: "Naouar",
      item3_desc:
        "Professional portfolio and business showcase for Naouar, delivering a clean and modern web presence.",
      item4_title: "El Maken",
      item4_desc:
        "Youth club platform showcasing vibrant activities and rich history, built in 12 hours during a hackathon.",
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
      role: "Développeur Fullstack",
      firstName: "Darragi",
      lastName: "Houssem",
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
      p3: "Compétent en Python, JavaScript, PHP et C# (.NET). Expérimenté dans la gestion de bases de données relationnelles et NoSQL. Parlant couramment anglais et français.",
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
      item1_title: "Secur",
      item1_desc:
        "Une plateforme moderne de services de sécurité présentant des solutions de protection professionnelles avec un design élégant et réactif.",
      item2_title: "Sun Cuisine",
      item2_desc:
        "Plateforme culinaire tunisienne proposant des recettes authentiques, des services de traiteur et une communauté gastronomique dynamique.",
      item3_title: "Naouar",
      item3_desc:
        "Portfolio professionnel et vitrine commerciale pour Naouar, offrant une présence web moderne et épurée.",
      item4_title: "El Maken",
      item4_desc:
        "Plateforme de club de jeunesse présentant des activités dynamiques et une riche histoire, construite en 12 heures lors d'un hackathon.",
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
  if (typeof navigator === "undefined") return "fr";
  const lang = navigator.language?.toLowerCase() || "";
  if (lang.startsWith("fr")) return "fr";
  return "en";
}
