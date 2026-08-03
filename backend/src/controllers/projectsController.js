import prisma from '../config/db.js';
import { initialProjects } from '../data/mockData.js';

export const getProjects = async (req, res) => {
  try {
    if (prisma) {
      try {
        const dbProjects = await prisma.project.findMany({
          orderBy: { date_creation: 'desc' }
        });
        if (dbProjects && dbProjects.length > 0) {
          return res.status(200).json({ success: true, count: dbProjects.length, data: dbProjects });
        }
      } catch (dbError) {
        console.warn('PostgreSQL not accessible, using mock projects data');
      }
    }
    // Return latest mock data
    return res.status(200).json({ success: true, count: initialProjects.length, data: initialProjects });
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    return res.status(200).json({ success: true, count: initialProjects.length, data: initialProjects });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const projectId = parseInt(id, 10);

    if (prisma) {
      try {
        const project = await prisma.project.findUnique({ where: { id: projectId } });
        if (project) return res.status(200).json({ success: true, data: project });
      } catch (e) {}
    }

    const memoryProject = initialProjects.find(p => p.id === projectId);
    if (memoryProject) {
      return res.status(200).json({ success: true, data: memoryProject });
    }

    return res.status(404).json({ success: false, message: "Projet non trouvé" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
};
