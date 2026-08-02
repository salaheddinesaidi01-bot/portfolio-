import { PrismaClient } from '@prisma/client';

let prisma;

try {
  prisma = new PrismaClient();
} catch (error) {
  console.warn('Prisma Client failed to initialize:', error.message);
  prisma = null;
}

export default prisma;
