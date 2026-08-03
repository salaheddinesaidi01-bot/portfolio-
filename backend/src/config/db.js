import { PrismaClient } from '@prisma/client';

let prisma = null;

// Only instantiate Prisma if DATABASE_URL is defined and PostgreSQL is intended
if (process.env.DATABASE_URL && process.env.USE_POSTGRES === 'true') {
  try {
    prisma = new PrismaClient();
  } catch (error) {
    console.warn('Prisma Client initialization skipped:', error.message);
    prisma = null;
  }
}

export default prisma;
