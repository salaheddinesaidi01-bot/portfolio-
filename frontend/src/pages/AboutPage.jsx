import React, { useEffect, useState } from 'react';
import SkillBar from '../components/SkillBar';
import Timeline from '../components/Timeline';
import { getAboutInfo } from '../services/api';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const webDeveloperSkills = [
  { name: "HTML5 / CSS3 / SASS", level: 95, icon: "Code2" },
  { name: "JavaScript Modern (ES6+)", level: 90, icon: "FileCode" },
  { name: "Responsive Web Design & Animations", level: 92, icon: "Palette" },
  { name: "Integration UI/UX & Tailwind", level: 88, icon: "Palette" },
  { name: "PHP & WordPress Development", level: 85, icon: "Server" },
  { name: "Optimisation SEO & Performances Web", level: 90, icon: "Cpu" },
  { name: "Git & Versioning", level: 90, icon: "GitBranch" },
  { name: "E-Commerce & Sites Vitrines", level: 95, icon: "Box" }
];

const webDeveloperTimeline = [
  {
    year: "2024 - Présent",
    title: "Développeur Web Freelance & Studio",
    company: "Création de Sites Web Sur-Mesure",
    description: "Conception et développement de sites vitrines modernes, boutiques e-commerce performantes et landing pages optimisées pour la conversion et le référencement naturel (SEO)."
  },
  {
    year: "2022 - 2024",
    title: "Développeur Web & Intégrateur",
    company: "Digital Web Agency",
    description: "Intégration responsive de maquettes web, création d'interfaces dynamiques, développement de thèmes personnalisés et maintenance de sites web."
  },
  {
    year: "2020 - 2022",
    title: "Formation en Développement Web & Informatique",
    company: "Institut de Technologie Web",
    description: "Acquisition des compétences fondamentales en intégration web, programmation client/serveur et gestion de projets web."
  }
];

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      const data = await getAboutInfo();
      if (data) {
        setAboutData(data);
      }
    };
    loadAbout();
  }, []);

  const skills = webDeveloperSkills;
  const timelineEvents = webDeveloperTimeline;

  return (
    <div style={{ paddingTop: '7.5rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="subtitle">Présentation</span>
          <h2>À Propos de Moi</h2>
          <p>Découvrez mon parcours de Développeur Web, mes compétences et mon expertise dans la création de sites web.</p>
        </motion.div>

        {/* Detailed Presentation Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: 700 }}>
              Des sites web sur-mesure, élégants et performants
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Avec <strong>2 ans d'expérience</strong> dans le développement web, je crée des <strong>sites web professionnels</strong> (sites vitrines, e-commerce, portfolios, landing pages) conçus pour captiver vos visiteurs et booster votre présence en ligne.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.8rem' }}>
              Je privilégie une approche moderne axée sur le design responsive, la rapidité de chargement et l'optimisation SEO afin d'offrir une expérience utilisateur irréprochable sur tous les écrans (mobile, tablette, ordinateur).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Design Responsive 100%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Sites Vitrines & E-Commerce</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Optimisation SEO & Vitesse</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Intégration UI/UX Soignée</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
          >
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>2</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Ans d'Expérience
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>15+</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Sites Web Créés
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>100%</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Sites Responsive & Fluid
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>10+</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Projets Clients Livrés
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="subtitle">Compétences</span>
            <h2>Compétences Web</h2>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                Intégration & Design Front-End
              </h4>
              {skills.slice(0, 4).map((skill, idx) => (
                <SkillBar key={idx} skill={skill} index={idx} />
              ))}
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>
                CMS, SEO & Développement Web
              </h4>
              {skills.slice(4).map((skill, idx) => (
                <SkillBar key={idx} skill={skill} index={idx + 4} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="subtitle">Parcours</span>
            <h2>Parcours Professionnel</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Timeline events={timelineEvents} />
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
