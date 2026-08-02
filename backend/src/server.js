import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projects.js';
import contactRoutes from './routes/contact.js';
import aboutRoutes from './routes/about.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', process.env.CLIENT_URL || '*'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Portfolio API Backend'
  });
});

// API Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/about', aboutRoutes);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route non trouvée' });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur Backend Portfolio démarré sur http://localhost:${PORT}`);
  console.log(`📡 Endpoints prêts: /api/projects, /api/contact, /api/about, /api/health`);
});
