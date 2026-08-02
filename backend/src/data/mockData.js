export const initialProjects = [
  {
    id: 1,
    titre: "Plateforme E-Commerce Next.js & Stripe",
    description: "Une boutique en ligne haute performance avec gestion de panier en temps réel, paiements sécurisés Stripe, dashboard administrateur et filtrage dynamique par facettes.",
    image_url: "/assets/project_ecommerce.png",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe API", "TailwindCSS"],
    lien_projet: "https://example-ecommerce.demo",
    lien_code: "https://github.com/demo/ecommerce-platform",
    date_creation: new Date("2026-01-15")
  },
  {
    id: 2,
    titre: "Taskify - Gestionnaire de Tâches Collaboratif",
    description: "Application SaaS de gestion de projets en équipe style Kanban avec WebSockets pour les mises à jour en direct, notifications push et attribution de tâches.",
    image_url: "/assets/project_taskmanager.png",
    technologies: ["React", "TypeScript", "Express", "Socket.io", "PostgreSQL", "Framer Motion"],
    lien_projet: "https://example-taskify.demo",
    lien_code: "https://github.com/demo/taskify-app",
    date_creation: new Date("2025-11-20")
  },
  {
    id: 3,
    titre: "PulseAI - Dashboard d'Analytics SaaS",
    description: "Plateforme d'analyse de données et métriques prédictives alimentée par l'IA. Tableaux de bord interactifs avec Recharts, filtres avancés et export de rapports PDF/CSV.",
    image_url: "/assets/project_ai_analytics.png",
    technologies: ["React", "Python/FastAPI", "PostgreSQL", "Recharts", "Prisma", "Docker"],
    lien_projet: "https://example-pulseai.demo",
    lien_code: "https://github.com/demo/pulse-ai-analytics",
    date_creation: new Date("2025-08-10")
  }
];

export const initialAboutInfo = {
  id: 1,
  nom: "Alexandre Dupont",
  titre: "Développeur Full Stack Senior",
  presentation: "Passionné par la création d'expériences web modernes, fluides et performantes. Avec plus de 5 ans d'expérience dans l'écosystème JavaScript (React, Node.js, Express, PostgreSQL), je transforme des concepts complexes en applications intuitives et robustes.",
  parcours: "Diplômé en Génie Logiciel, j'ai travaillé en startup tech et en agence numérique avant d'accompagner des clients sur des projets d'envergure. Spécialisé dans les architectures Full Stack modernes et les interfaces utilisateur réactives.",
  skills: [
    { category: "Frontend", name: "React / Next.js", level: 95, icon: "Code2" },
    { category: "Frontend", name: "JavaScript / TypeScript", level: 90, icon: "FileCode" },
    { category: "Frontend", name: "CSS3 / Tailwind / Framer Motion", level: 88, icon: "Palette" },
    { category: "Backend", name: "Node.js / Express", level: 92, icon: "Server" },
    { category: "Backend", name: "PostgreSQL / Prisma / Sequelize", level: 85, icon: "Database" },
    { category: "Backend", name: "REST API & GraphQL", level: 88, icon: "Cpu" },
    { category: "DevOps & Tools", name: "Docker / CI-CD", level: 80, icon: "Box" },
    { category: "DevOps & Tools", name: "Git / GitHub / Agile", level: 95, icon: "GitBranch" }
  ],
  timeline: [
    {
      year: "2024 - Présent",
      title: "Senior Full Stack Engineer",
      company: "TechNova Studio",
      description: "Conception et architecture de microservices Node.js/Express, création d'interfaces React haut de gamme et optimisation des requêtes PostgreSQL pour des milliers d'utilisateurs quotidiens."
    },
    {
      year: "2022 - 2024",
      title: "Développeur Web React & Node.js",
      company: "Digital Spark Agency",
      description: "Développement d'applications web sur mesure, intégrations d'API REST et d'ORM (Prisma/Sequelize), encadrement de développeurs juniors et mise en place de tests automatisés."
    },
    {
      year: "2020 - 2022",
      title: "Développeur Frontend Junior",
      company: "InnoWeb",
      description: "Intégration de maquettes Figma en React responsive, création d'animations fluides et optimisation des performances Web Vitals."
    },
    {
      year: "2017 - 2020",
      title: "Master en Informatique & Génie Logiciel",
      company: "Université de Technologie",
      description: "Spécialisation en architectures logicielles, bases de données relationnelles et développement web."
    }
  ]
};
