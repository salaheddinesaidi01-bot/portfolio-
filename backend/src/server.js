import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import projectsRoutes from './routes/projects.js';
import contactRoutes from './routes/contact.js';
import aboutRoutes from './routes/about.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../../frontend/dist');

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

// Serve static frontend files
app.use(express.static(distPath));

// API 404 handler
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, message: 'Route API non trouvée' });
});

// SPA fallback: any other route serves index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur Portfolio complet démarré sur http://localhost:${PORT}`);
  console.log(`📡 Endpoints API prêts: /api/projects, /api/contact, /api/about, /api/health`);
});
