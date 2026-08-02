import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Image Container with Zoom Animation on Hover */}
      <div
        style={{
          width: '100%',
          height: '210px',
          overflow: 'hidden',
          position: 'relative',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          src={project.image_url}
          alt={project.titre}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 60%)',
            opacity: 0.6
          }}
        />
      </div>

      {/* Card Details Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3
          style={{
            fontSize: '1.3rem',
            marginBottom: '0.75rem',
            fontWeight: 700,
            color: 'var(--text-primary)'
          }}
        >
          {project.titre}
        </h3>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            flexGrow: 1
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '1.5rem'
          }}
        >
          {project.technologies && project.technologies.map((tech, i) => (
            <span key={i} className="badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          {project.lien_code && (
            <a
              href={project.lien_code}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Github size={16} /> Code Source
            </a>
          )}

          {project.lien_projet && (
            <a
              href={project.lien_projet}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                transition: 'gap var(--transition-fast)'
              }}
            >
              Voir la Démo <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
