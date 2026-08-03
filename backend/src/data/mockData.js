export const initialProjects = [
  {
    id: 1,
    titre: "Site web pour boutique de vêtements destiné au e-commerce",
    description: "Site web e-commerce moderne et responsive pour boutique de vêtements et prêt-à-porter (KOUNOUZ). Interface élégante avec univers Homme, Femme, Enfant, catalogue dynamique, filtres et expérience d'achat fluide.",
    image_url: "/assets/project_ecommerce.png",
    technologies: ["HTML5/CSS3", "JavaScript", "E-Commerce", "Design Responsive", "Mode & Vêtements"],
    lien_projet: "https://f5db1c4k-5174.euw.devtunnels.ms/",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    date_creation: new Date("2026-01-15")
  },
  {
    id: 2,
    titre: "Tableau de Bord & Dashboard Décisionnel d'Entreprise",
    description: "Application web d'aide à la décision et de pilotage d'entreprise. Génération automatique de rapports (Direction, Commercial), suivi du chiffre d'affaires, gestion de la flotte logistique, livreurs et seuil de rentabilité.",
    image_url: "/assets/project_dashboard.png",
    technologies: ["HTML5/CSS3", "JavaScript", "Aide à la Décision", "Rapports Automatiques", "Dashboard Analytics"],
    lien_projet: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    date_creation: new Date("2025-11-20")
  },
  {
    id: 3,
    titre: "Landing Page High-Tech & Services",
    description: "Landing page événementielle et promotionnelle à fort taux de conversion avec effets visuels en parallax, badges interactifs et formulaire de contact rapide.",
    image_url: "/assets/project_ai_analytics.png",
    technologies: ["HTML5", "TailwindCSS", "JavaScript", "PHP Form Handler", "Responsive"],
    lien_projet: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    date_creation: new Date("2025-08-10")
  }
];

export const initialAboutInfo = {
  id: 1,
  nom: "SAIDI SALAH EDDINE",
  titre: "Développeur Web",
  presentation: "Passionné par la création de sites web et tableaux de bord modernes, responsive et performants. Je conçois des sites vitrines, boutiques e-commerce et dashboards d'aide à la décision sur-mesure.",
  parcours: "Développeur Web spécialisé dans l'intégration UI/UX, les dashboards d'entreprise et la réalisation de sites internet professionnels.",
  skills: [
    { category: "Frontend", name: "HTML5 / CSS3 / SASS", level: 95, icon: "Code2" },
    { category: "Frontend", name: "JavaScript Modern", level: 90, icon: "FileCode" },
    { category: "Frontend", name: "Responsive & Dashboards UI", level: 92, icon: "Palette" },
    { category: "Web", name: "PHP & WordPress", level: 85, icon: "Server" },
    { category: "Web", name: "SEO & Performances Web", level: 90, icon: "Cpu" },
    { category: "Web", name: "Git & Versioning", level: 90, icon: "GitBranch" }
  ],
  timeline: [
    {
      year: "Récents",
      title: "Développeur Web Freelance & Studio",
      company: "Création de Sites Web & Dashboards Sur-Mesure",
      description: "Conception et développement de sites vitrines modernes, boutiques e-commerce performantes et tableaux de bord d'aide à la décision avec rapports automatisés."
    },
    {
      year: "Projets",
      title: "Développeur Web & Intégrateur",
      company: "Digital Web Agency",
      description: "Intégration responsive de maquettes web, création d'interfaces dynamiques, développement de thèmes personnalisés et maintenance de sites web."
    }
  ]
};
