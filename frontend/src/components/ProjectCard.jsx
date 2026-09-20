import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Maximize2, ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imagesList = project.images && project.images.length > 0
    ? project.images
    : [project.image_url];

  const currentImage = imagesList[currentImageIndex] || project.image_url;

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  return (
    <>
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
        {/* Image Container */}
        <div
          style={{
            width: '100%',
            height: '220px',
            overflow: 'hidden',
            position: 'relative',
            borderBottom: '1px solid var(--border-color)',
            cursor: 'pointer'
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0.6, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
              src={currentImage}
              alt={`${project.titre} - Image ${currentImageIndex + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </AnimatePresence>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 60%)',
              opacity: 0.6,
              pointerEvents: 'none'
            }}
          />

          {/* Gallery Badge & Expand Action */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              display: 'flex',
              gap: '8px',
              zIndex: 2
            }}
          >
            {imagesList.length > 1 && (
              <span
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <ImageIcon size={12} /> {currentImageIndex + 1}/{imagesList.length}
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              title="Agrandir les captures d'écran"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
            >
              <Maximize2 size={14} />
            </button>
          </div>

          {/* Quick Nav Controls for Multi-Image Projects */}
          {imagesList.length > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 2
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                {imagesList.map((_, imgIdx) => (
                  <button
                    key={imgIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(imgIdx);
                    }}
                    style={{
                      width: currentImageIndex === imgIdx ? '20px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: currentImageIndex === imgIdx ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.5)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  onClick={handlePrevImage}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNextImage}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Card Details Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3
            style={{
              fontSize: '1.25rem',
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
              fontSize: '0.92rem',
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

            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'opacity var(--transition-fast)'
              }}
              title="Agrandir et voir les captures d'écran"
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <Maximize2 size={15} /> Voir les captures
            </button>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            {/* Modal Header Controls */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{project.titre}</h4>
                {imagesList.length > 1 && (
                  <span
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.8rem'
                    }}
                  >
                    Capture {currentImageIndex + 1} sur {imagesList.length}
                  </span>
                )}
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Display */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={currentImage}
                alt={`${project.titre} Full View`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
                }}
              />

              {imagesList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    style={{
                      position: 'absolute',
                      left: '-20px',
                      backgroundColor: 'var(--accent-primary)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '44px',
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={handleNextImage}
                    style={{
                      position: 'absolute',
                      right: '-20px',
                      backgroundColor: 'var(--accent-primary)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '44px',
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Modal Bottom Gallery Thumbnails */}
            {imagesList.length > 1 && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginTop: '1.5rem'
                }}
              >
                {imagesList.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    style={{
                      width: '80px',
                      height: '50px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: currentImageIndex === idx ? '2px solid var(--accent-primary)' : '2px solid transparent',
                      opacity: currentImageIndex === idx ? 1 : 0.6,
                      transition: 'all 0.2s ease'
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

