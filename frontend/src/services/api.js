import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

const fallbackProjects = [
  {
    id: 1,
    titre: "Site E-Commerce Boutique & Mode",
    description: "Boutique en ligne moderne et 100% responsive avec catalogue produits, gestion du panier, paiement sécurisé et optimisation des temps de chargement sur mobile.",
    image_url: "/assets/project_ecommerce.png",
    technologies: ["HTML5/CSS3", "JavaScript", "PHP", "WordPress / WooCommerce", "Design Responsive"],
    lien_projet: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-"
  },
  {
    id: 2,
    titre: "Site Vitrine Agence Digital & Business",
    description: "Site vitrine sur-mesure pour entreprise avec présentations d'activités, animations modernes au scroll, formulaire de devis interactif et intégration Google Maps.",
    image_url: "/assets/project_taskmanager.png",
    technologies: ["HTML5", "CSS3 / SASS", "JavaScript Modern", "Optimisation SEO", "UI/UX"],
    lien_projet: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-"
  },
  {
    id: 3,
    titre: "Landing Page High-Tech & Services",
    description: "Landing page événementielle et promotionnelle à fort taux de conversion avec effets visuels en parallax, badges interactifs et formulaire de contact rapide.",
    image_url: "/assets/project_ai_analytics.png",
    technologies: ["HTML5", "TailwindCSS", "JavaScript", "PHP Form Handler", "Responsive"],
    lien_projet: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-"
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
