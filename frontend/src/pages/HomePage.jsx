import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../services/api';
import { motion } from 'framer-motion';
import { Sparkles, Code, Server, Database } from 'lucide-react';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Mes Travaux / Projects Section */}
      <section id="projets" style={{ padding: '4rem 0 6rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Portfolio</span>
            <h2>Mes Travaux & Projets</h2>
            <p>
              Une sélection de mes réalisations récentes. Chaque projet reflète mes exigences 
              en matière d'architecture logicielle, de design et de performance.
            </p>
          </div>

          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '4rem 0'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid var(--border-color)',
                  borderTopColor: 'var(--accent-primary)',
                  borderRadius: '50%'
                }}
              />
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '2rem'
              }}
            >
              {projects.map((project, idx) => (
                <ProjectCard key={project.id || idx} project={project} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack Banner Highlights */}
      <section
        style={{
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '3rem 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '2rem',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Code size={28} style={{ color: 'var(--accent-primary)' }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Frontend Modern</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>React, Vite, Framer Motion</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Server size={28} style={{ color: 'var(--accent-secondary)' }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Backend Robuste</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Node.js, Express REST API</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Database size={28} style={{ color: '#10b981' }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Base de Données</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>PostgreSQL & Prisma ORM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
