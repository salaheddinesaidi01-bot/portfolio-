import React, { useEffect, useState } from 'react';
import SkillBar from '../components/SkillBar';
import Timeline from '../components/Timeline';
import { getAboutInfo } from '../services/api';
import { motion } from 'framer-motion';
import { User, Award, BookOpen, CheckCircle } from 'lucide-react';

const fallbackSkills = [
  { name: "React / Next.js", level: 95, icon: "Code2" },
  { name: "JavaScript / TypeScript", level: 90, icon: "FileCode" },
  { name: "CSS3 / Tailwind / Framer Motion", level: 88, icon: "Palette" },
  { name: "Node.js / Express", level: 92, icon: "Server" },
  { name: "PostgreSQL / Prisma", level: 85, icon: "Database" },
  { name: "REST API & WebSockets", level: 88, icon: "Cpu" },
  { name: "Docker / DevOps", level: 80, icon: "Box" },
  { name: "Git / CI-CD", level: 95, icon: "GitBranch" }
];

const fallbackTimeline = [
  {
    year: "2024 - Présent",
    title: "Senior Full Stack Engineer",
    company: "TechNova Studio",
    description: "Conception et architecture de microservices Node.js/Express, création d'interfaces React haut de gamme et optimisation des requêtes PostgreSQL pour des milliers d'utilisateurs quotidiens."
  },
  {
    year: "2022 - 2024",
    title: "Développeur Web React & Node.js",
    company: "Digital Spark Agency",
    description: "Développement d'applications web sur mesure, intégrations d'API REST et d'ORM (Prisma/Sequelize), encadrement de développeurs juniors et mise en place de tests automatisés."
  },
  {
    year: "2020 - 2022",
    title: "Développeur Frontend Junior",
    company: "InnoWeb",
    description: "Intégration de maquettes Figma en React responsive, création d'animations fluides et optimisation des performances Web Vitals."
  },
  {
    year: "2017 - 2020",
    title: "Master en Informatique & Génie Logiciel",
    company: "Université de Technologie",
    description: "Spécialisation en architectures logicielles, bases de données relationnelles et développement web."
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

  const skills = aboutData?.skills || fallbackSkills;
  const timelineEvents = aboutData?.timeline || fallbackTimeline;

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
          <p>Découvrez mon parcours professionnel, mes compétences techniques et ma passion pour le web.</p>
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
              Créer des produits digitaux exceptionnels
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Passionné par les technologies du Web depuis plus de 5 ans, je conçois des applications 
              modernes en associant la puissance de <strong>React</strong> côté front-end et la robustesse de <strong>Node.js / Express / PostgreSQL</strong> côté back-end.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.8rem' }}>
              Mon approche est orientée vers la performance, l'accessibilité et la qualité du code. 
              J'accorde une importance primordiale à l'expérience utilisateur et aux détails visuels grâce 
              à des animations fluides et des architectures propres.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Code Propre & Testé</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>UX/UI Responsive</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>API REST & GraphQL</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>DB PostgreSQL / ORM</span>
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
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>5+</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Années d'Expérience
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>30+</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Projets Réalisés
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>100%</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Satisfaction Client
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>15+</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Technologies Maîtrisées
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="subtitle">Compétences</span>
            <h2>Stack Technique</h2>
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
                Frontend & UI
              </h4>
              {skills.slice(0, 4).map((skill, idx) => (
                <SkillBar key={idx} skill={skill} index={idx} />
              ))}
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>
                Backend, DB & DevOps
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
            <h2>Expériences & Formations</h2>
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
