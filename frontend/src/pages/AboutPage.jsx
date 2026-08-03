import React, { useEffect, useState } from 'react';
import SkillBar from '../components/SkillBar';
import Timeline from '../components/Timeline';
import { getAboutInfo } from '../services/api';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const webDeveloperSkills = [
  { name: "Développement de Sites Web (Vitrines & E-Commerce)", level: 95, icon: "Code2" },
  { name: "Conception de Tableaux de Bord (Dashboards)", level: 95, icon: "BarChart3" },
  { name: "Développement SaaS & Applications Web", level: 92, icon: "Layout" },
  { name: "HTML5 / CSS3 / JavaScript Modern", level: 90, icon: "FileCode" },
  { name: "React.js & Intégration UI/UX", level: 92, icon: "Palette" },
  { name: "Data & Business Analysis", level: 92, icon: "LineChart" },
  { name: "Génie Industriel (Optimisation des flux)", level: 95, icon: "Cpu" },
  { name: "Gestion de la Logistique & Supply Chain", level: 90, icon: "Box" },
  { name: "Git & Versioning", level: 90, icon: "GitBranch" }
];

const webDeveloperTimeline = [
  {
    year: "Récents",
    title: "Développeur Web & Concepteur SaaS / Dashboards",
    company: "Création de Solutions Web Sur-Mesure",
    description: "Conception et développement de sites e-commerce modernes, d'applications SaaS et de tableaux de bord décisionnels interactifs pour le pilotage d'entreprise."
  },
  {
    year: "Expérience",
    title: "Data & Business Analyst",
    company: "Analyse de Données & Aide à la Décision",
    description: "Analyse de données stratégiques, modélisation d'indicateurs clés de performance (KPIs), création de dashboards interactifs et automatisation de rapports."
  },
  {
    year: "Formation & Parcours",
    title: "Ingénieur en Génie Industriel",
    company: "Spécialité Optimisation des Flux & Logistique",
    description: "Modélisation et optimisation de la chaîne logistique, gestion des stocks, cartographie des flux de production et amélioration continue des processus."
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
          <p>Développeur Web, Data & Business Analyst, et Ingénieur en Génie Industriel spécialisé en optimisation des flux et logistique.</p>
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
              Développement Web, Dashboards SaaS & Ingenierie Logistique
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Alliant une double compétence technique en <strong>Génie Industriel & Data Analysis</strong> et en <strong>Développement Web & SaaS</strong>, je conçois des applications web et des tableaux de bord sur-mesure.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.8rem' }}>
              Mon objectif est d'aider les entreprises à digitaliser leurs processus, optimiser leurs flux logistiques et transformer leurs données brutes en outils décisionnels intuitifs et performants.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Tableaux de Bord & SaaS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Data & Business Analytics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Optimisation Flux & Logistique</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Sites Vitrines & E-Commerce</span>
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
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>15+</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Projets & Dashboards
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>100%</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Optimisation des Flux
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>100%</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Satisfaction Client
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>10+</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Solutions SaaS & Web
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="subtitle">Compétences</span>
            <h2>Domaines d'Expertise</h2>
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
                Développement Web, SaaS & Dashboards
              </h4>
              {skills.slice(0, 5).map((skill, idx) => (
                <SkillBar key={idx} skill={skill} index={idx} />
              ))}
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>
                Data Analysis, Génie Industriel & Logistique
              </h4>
              {skills.slice(5).map((skill, idx) => (
                <SkillBar key={idx} skill={skill} index={idx + 5} />
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
