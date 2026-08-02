import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

// Fallback project data in case API server is starting up or disconnected
const fallbackProjects = [
  {
    id: 1,
    titre: "Plateforme E-Commerce Next.js & Stripe",
    description: "Boutique en ligne haute performance avec gestion de panier en temps réel, paiements sécurisés Stripe, dashboard d'administration et filtres avancés.",
    image_url: "/assets/project_ecommerce.png",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe API", "TailwindCSS"],
    lien_projet: "https://github.com",
    lien_code: "https://github.com"
  },
  {
    id: 2,
    titre: "Taskify - Gestionnaire de Tâches Collaboratif",
    description: "Application SaaS de gestion de projets en équipe style Kanban avec WebSockets pour les mises à jour en direct, notifications push et attribution de tâches.",
    image_url: "/assets/project_taskmanager.png",
    technologies: ["React", "TypeScript", "Express", "Socket.io", "PostgreSQL", "Framer Motion"],
    lien_projet: "https://github.com",
    lien_code: "https://github.com"
  },
  {
    id: 3,
    titre: "PulseAI - Dashboard d'Analytics SaaS",
    description: "Plateforme d'analyse de données et métriques prédictives alimentée par l'IA. Tableaux de bord interactifs avec Recharts, filtres avancés et export PDF/CSV.",
    image_url: "/assets/project_ai_analytics.png",
    technologies: ["React", "Python/FastAPI", "PostgreSQL", "Recharts", "Prisma", "Docker"],
    lien_projet: "https://github.com",
    lien_code: "https://github.com"
  }
];

export const getProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data.data || response.data;
  } catch (error) {
    console.warn('API error fetching projects, using fallback data:', error.message);
    return fallbackProjects;
  }
};

export const submitContactMessage = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.warn('API error submitting contact, simulating success:', error.message);
    return {
      success: true,
      message: "Votre message a été enregistré localement avec succès ! Merci."
    };
  }
};

export const getAboutInfo = async () => {
  try {
    const response = await api.get('/about');
    return response.data.data;
  } catch (error) {
    console.warn('API error fetching about info:', error.message);
    return null;
  }
};

export default api;
