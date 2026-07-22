export type Locale = "en" | "fr";

const translations: Record<Locale, Record<string, Record<string, string>>> = {
  en: {
    nav: {
      about: "About",
      skills: "Expertise",
      resume: "Experience",
      websites: "Work",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Full-Stack Software Engineer",
      firstName: "Houssem",
      lastName: "Darragi",
      tagline:
        "I build business platforms, SaaS products, automation systems, and polished web experiences using Django, Next.js, and Angular.",
      ctaWork: "View selected work",
      ctaResume: "Download résumé",
      ctaContact: "Contact me",
    },
    about: {
      heading: "About Me",
      p1: "I am a full-stack software engineer focused on business applications, SaaS platforms, automation systems, and modern web interfaces.",
      p2: "My professional work includes enterprise authorization, hierarchical business rules, member-management platforms, internal workflow tools, and scalable frontend and backend development.",
      p3: "Alongside my professional experience, I build independent products, client websites, developer tools, and visual experiments that allow me to explore new technologies and product ideas.",
    },
    skills: {
      heading: "Skills & Expertise",
      description:
        "A focused set of engineering, architecture, delivery, and product skills supported by my existing experience.",
      core: "Core engineering",
      experienced: "Architecture and backend",
      additional: "Delivery and infrastructure",
      product: "Product and frontend",
    },
    websites: {
      label: "Live Websites",
      heading: "Featured Websites",
      description:
        "Live projects I've built and deployed. Each one represents real-world solutions for clients and businesses.",
      badge: "Live",
      comingSoon: "Coming soon",
      viewAll: "View all websites",
      allHeading: "All Websites",
      allDescription: "A complete collection of websites I've built and deployed for clients and businesses.",
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
      heading: "Experience and education",
      experience: "Experience",
      education: "Education",
      achievements: "Achievements",
      download: "Download résumé",
      summary: "A concise overview of the roles, education, and selected achievements behind my work.",
      viewFull: "View full résumé",
      currentRole: "Current role",
      selectedAchievements: "Selected achievements",
    },
    contact: {
      heading: "Let’s build something useful",
      description:
        "For engineering opportunities, collaborations, or product discussions, feel free to contact me.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
      locationValue: "Tunisia",
    },
    work: {
      label: "Selected work",
      professionalHeading: "Selected Professional Contributions",
      professionalDescription:
        "Selected systems and product features developed as part of my work at BestLog. My contributions focused on business-critical workflows, product architecture, internal operations, and scalable platform development.",
      productsHeading: "Independent Products",
      productsDescription:
        "Products I designed and developed to solve concrete business and automation problems.",
      clientHeading: "Client Work",
      clientDescription: "Production work delivered for real businesses and stakeholders.",
      toolsHeading: "Developer Tools",
      toolsDescription:
        "Small tools and experiments built inside Visual Studio Code to explore extension development, interactive interfaces, and editor-based experiences.",
      experimentsHeading: "Experiments and Visual Work",
      experimentsDescription:
        "Smaller projects created to explore visual storytelling, responsive interfaces, animation, industry-specific layouts, and frontend techniques.",
      viewCaseStudy: "View case study",
      viewProject: "View project",
      viewLive: "View live website",
      viewAll: "View all experiments",
      concept: "Concept",
      uncommissioned: "Uncommissioned work",
      publicVisualPending: "Public visual pending",
      placeholder: "Placeholder",
      ownership: "Ownership and scope",
      backToWork: "Back to selected work",
      highlights: "Important features",
      contribution: "Contribution",
      skillsDemonstrated: "Skills demonstrated",
      status: "Project status",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Expertise",
      resume: "Expérience",
      websites: "Projets",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      role: "Ingénieur logiciel full-stack",
      firstName: "Houssem",
      lastName: "Darragi",
      tagline:
        "Je conçois des plateformes métier, des produits SaaS, des systèmes d’automatisation et des expériences web soignées avec Django, Next.js et Angular.",
      ctaWork: "Voir mes réalisations",
      ctaResume: "Télécharger mon CV",
      ctaContact: "Me contacter",
    },
    about: {
      heading: "À propos de moi",
      p1: "Je suis ingénieur logiciel full-stack, spécialisé dans les applications métier, les plateformes SaaS, les systèmes d’automatisation et les interfaces web modernes.",
      p2: "Mon expérience professionnelle comprend la gestion avancée des autorisations, les règles métier hiérarchiques, les plateformes de gestion des adhérents, les outils internes de workflow ainsi que le développement frontend et backend évolutif.",
      p3: "En parallèle de mon activité professionnelle, je développe des produits indépendants, des sites clients, des outils pour développeurs et des expériences visuelles afin d’explorer de nouvelles technologies et idées produit.",
    },
    skills: {
      heading: "Compétences & Expertise",
      description:
        "Un ensemble ciblé de compétences en ingénierie, architecture, delivery et conception produit, fondé sur mon expérience existante.",
      core: "Ingénierie logicielle",
      experienced: "Architecture et backend",
      additional: "Delivery et infrastructure",
      product: "Produit et frontend",
    },
    websites: {
      label: "Sites en ligne",
      heading: "Sites Web réalisés",
      description:
        "Des projets en ligne que j'ai construits et déployés. Chacun représente des solutions concrètes pour des clients et entreprises.",
      badge: "En ligne",
      comingSoon: "Bientôt disponible",
      viewAll: "Voir tous les sites",
      allHeading: "Tous les sites",
      allDescription: "Une collection complète de sites que j'ai construits et déployés pour des clients et entreprises.",
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
      heading: "Expérience et formation",
      experience: "Expérience",
      education: "Formation",
      achievements: "Réalisations",
      download: "Télécharger mon CV",
      summary: "Un aperçu concis des rôles, de la formation et des réalisations qui soutiennent mon travail.",
      viewFull: "Voir le CV complet",
      currentRole: "Rôle actuel",
      selectedAchievements: "Réalisations sélectionnées",
    },
    contact: {
      heading: "Construisons quelque chose d’utile",
      description:
        "Pour une opportunité professionnelle, une collaboration ou une discussion autour d’un produit, n’hésitez pas à me contacter.",
      email: "Email",
      phone: "Téléphone",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Localisation",
      locationValue: "Tunisie",
    },
    work: {
      label: "Réalisations sélectionnées",
      professionalHeading: "Contributions professionnelles sélectionnées",
      professionalDescription:
        "Une sélection de systèmes et de fonctionnalités développés dans le cadre de mon travail chez BestLog. Mes contributions portent sur les processus métier critiques, l’architecture produit, les opérations internes et le développement de plateformes évolutives.",
      productsHeading: "Produits indépendants",
      productsDescription:
        "Des produits que j’ai conçus et développés pour répondre à des besoins métier et d’automatisation concrets.",
      clientHeading: "Projets clients",
      clientDescription: "Des solutions mises en production pour de véritables entreprises et parties prenantes.",
      toolsHeading: "Outils pour développeurs",
      toolsDescription:
        "Des outils et expériences développés dans Visual Studio Code afin d’explorer le développement d’extensions, les interfaces interactives et les expériences intégrées à l’éditeur.",
      experimentsHeading: "Expériences visuelles et projets exploratoires",
      experimentsDescription:
        "Des projets plus courts créés pour explorer le storytelling visuel, les interfaces responsive, l’animation, les mises en page sectorielles et différentes techniques frontend.",
      viewCaseStudy: "Voir l’étude de cas",
      viewProject: "Voir le projet",
      viewLive: "Voir le site",
      viewAll: "Voir toutes les expériences",
      concept: "Concept",
      uncommissioned: "Travail non commandé",
      publicVisualPending: "Visuel public à ajouter",
      placeholder: "Placeholder",
      ownership: "Propriété et périmètre",
      backToWork: "Retour aux réalisations",
      highlights: "Fonctionnalités importantes",
      contribution: "Contribution",
      skillsDemonstrated: "Compétences démontrées",
      status: "Statut du projet",
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
