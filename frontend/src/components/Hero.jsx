import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Glowing Backdrops */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'var(--accent-primary)',
          filter: 'blur(140px)',
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'var(--accent-secondary)',
          filter: 'blur(150px)',
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column - Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--badge-bg)',
              border: '1px solid var(--badge-border)',
              color: 'var(--badge-text)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }}
            />
            Disponible pour la création de vos sites web
          </motion.div>

          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
              lineHeight: 1.15,
              marginBottom: '1.2rem',
              fontWeight: 800
            }}
          >
            Bonjour, je suis <br />
            <span className="text-gradient">SAIDI SALAH EDDINE</span>
          </h1>

          <h2
            style={{
              fontSize: '1.35rem',
              color: 'var(--accent-secondary)',
              fontWeight: 600,
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Globe size={22} /> Développeur Web (Création & Intégration de Sites Web)
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              marginBottom: '2.5rem',
              lineHeight: 1.7
            }}
          >
            Spécialiste de la création de sites web modernes, responsive et sur-mesure. 
            J'accompagne mes clients dans la conception de leurs sites vitrines, e-commerce et landing pages 
            à fort impact visuel et parfaitement optimisés.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/contact" className="btn-primary">
              Me contacter <ArrowRight size={18} />
            </Link>
            <a
              href="#projets"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Sparkles size={18} /> Voir mes réalisations
            </a>
          </div>
        </motion.div>

        {/* Right Column - User Profile Photo (Without Experience Badge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '320px'
            }}
          >
            {/* Animated Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                opacity: 0.8,
                filter: 'blur(8px)'
              }}
            />

            {/* Photo Circular Frame */}
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                border: '4px solid var(--bg-secondary)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <img
                src="/assets/avatar.png"
                alt="SAIDI SALAH EDDINE Photo de Profil"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .container h2 {
            justify-content: center;
          }
          .container p {
            margin-left: auto;
            margin-right: auto;
          }
          .container div[style*="flexWrap"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
