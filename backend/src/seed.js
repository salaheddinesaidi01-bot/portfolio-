import prisma from './config/db.js';
import { initialProjects, initialAboutInfo } from './data/mockData.js';

async function seed() {
  if (!prisma) {
    console.error('Prisma is not available. Please ensure DATABASE_URL is configured in .env');
    process.exit(1);
  }

  console.log('🌱 Starting Database Seeding...');

  try {
    // Seed Projects
    console.log('Cleaning existing projects...');
    await prisma.project.deleteMany({});
    
    for (const project of initialProjects) {
      await prisma.project.create({
        data: {
          titre: project.titre,
          description: project.description,
          image_url: project.image_url,
          technologies: project.technologies,
          lien_projet: project.lien_projet,
          lien_code: project.lien_code,
          date_creation: project.date_creation
        }
      });
    }
    console.log(`✅ ${initialProjects.length} projects seeded.`);

    // Seed About Info
    await prisma.aboutInfo.deleteMany({});
    await prisma.aboutInfo.create({
      data: {
        nom: initialAboutInfo.nom,
        titre: initialAboutInfo.titre,
        presentation: initialAboutInfo.presentation,
        parcours: initialAboutInfo.parcours,
        skills: initialAboutInfo.skills,
        timeline: initialAboutInfo.timeline
      }
    });
    console.log('✅ About info seeded successfully.');

    console.log('🎉 Database seeding completed!');
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
  } finally {
    if (prisma) {
      await prisma.$disconnect();
    }
  }
}

seed();
