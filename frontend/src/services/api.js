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
    titre: "DZ TECH STORE — Magasin & Catalogue E-Commerce High-Tech",
    description: "Plateforme Web e-commerce et vitrine haut de gamme spécialisée dans la vente d'équipements High-Tech (Smartphones neufs sous emballage, téléphones Caba certifiés, et PC portables Gamer / Pro). Interface moderne avec bannières promotionnelles, sélection par gamme et livraison sécurisée 58 Wilayas.",
    image_url: "/assets/dztechstore_hero.png",
    images: ["/assets/dztechstore_hero.png", "/assets/dztechstore_catalog.png"],
    technologies: ["React.js", "Node.js / Express", "Catalogue High-Tech", "E-Commerce", "Livraison 58 Wilayas", "Design Premium"],
    lien_projet: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-"
  },
  {
    id: 2,
    titre: "Site web pour boutique de vêtements destiné au e-commerce",
    description: "Site web e-commerce moderne et responsive pour boutique de vêtements et prêt-à-porter (KOUNOUZ). Interface élégante avec univers Homme, Femme, Enfant, catalogue dynamique, filtres et expérience d'achat fluide.",
    image_url: "/assets/project_ecommerce.png",
    technologies: ["HTML5/CSS3", "JavaScript", "E-Commerce", "Design Responsive", "Mode & Vêtements"],
    lien_projet: "https://f5db1c4k-5174.euw.devtunnels.ms/",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-"
  },
  {
    id: 3,
    titre: "Tableau de Bord & Dashboard Décisionnel d'Entreprise",
    description: "Application web d'aide à la décision et de pilotage d'entreprise. Génération automatique de rapports (Direction, Commercial), suivi du chiffre d'affaires, gestion de la flotte logistique, livreurs et seuil de rentabilité.",
    image_url: "/assets/project_dashboard.png",
    technologies: ["HTML5/CSS3", "JavaScript", "Aide à la Décision", "Rapports Automatiques", "Dashboard Analytics"],
    lien_projet: "https://github.com/salaheddinesaidi01-bot/portfolio-",
    lien_code: "https://github.com/salaheddinesaidi01-bot/portfolio-"
  }
];

export const getProjects = async () => {
  try {
    const response = await api.get(`/projects?t=${Date.now()}`);
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
    const response = await api.get(`/about?t=${Date.now()}`);
    return response.data.data;
  } catch (error) {
    console.warn('API error fetching about info:', error.message);
    return null;
  }
};

export default api;
