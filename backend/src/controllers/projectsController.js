import prisma from '../config/db.js';
import { initialProjects } from '../data/mockData.js';

let inMemoryProjects = [...initialProjects];

export const getProjects = async (req, res) => {
  try {
    if (prisma) {
      const dbProjects = await prisma.project.findMany({
        orderBy: { date_creation: 'desc' }
      });
      if (dbProjects && dbProjects.length > 0) {
        return res.status(200).json({ success: true, count: dbProjects.length, data: dbProjects });
      }
    }
    // Return in-memory fallback
    return res.status(200).json({ success: true, count: inMemoryProjects.length, data: inMemoryProjects });
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    // Fallback to mock data on DB error
    return res.status(200).json({ success: true, count: inMemoryProjects.length, data: inMemoryProjects, note: "Using memory fallback" });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const projectId = parseInt(id, 10);

    if (prisma) {
      const project = await prisma.project.findUnique({ where: { id: projectId } });
      if (project) return res.status(200).json({ success: true, data: project });
    }

    const memoryProject = inMemoryProjects.find(p => p.id === projectId);
    if (memoryProject) {
      return res.status(200).json({ success: true, data: memoryProject });
    }

    return res.status(404).json({ success: false, message: "Projet non trouvé" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
};
