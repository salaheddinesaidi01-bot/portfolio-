import prisma from '../config/db.js';
import { initialAboutInfo } from '../data/mockData.js';

export const getAboutInfo = async (req, res) => {
  try {
    if (prisma) {
      const dbAbout = await prisma.aboutInfo.findFirst();
      if (dbAbout) {
        return res.status(200).json({ success: true, data: dbAbout });
      }
    }
    return res.status(200).json({ success: true, data: initialAboutInfo });
  } catch (error) {
    console.error('Error fetching about info:', error.message);
    return res.status(200).json({ success: true, data: initialAboutInfo });
  }
};
