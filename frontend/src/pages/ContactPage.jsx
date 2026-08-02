import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactMessage } from '../services/api';
import { Send, CheckCircle2, Mail, MapPin, Phone, Github, Linkedin, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    responseMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        error: 'Veuillez remplir tous les champs du formulaire.',
        responseMessage: ''
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null, responseMessage: '' });

    try {
      const res = await submitContactMessage(formData);
      if (res && res.success !== false) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          responseMessage: res.message || 'Votre message a été envoyé avec succès !'
        });
        setFormData({ nom: '', email: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: res.message || 'Une erreur est survenue lors de l\'envoi.',
          responseMessage: ''
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Impossible de contacter le serveur backend.',
        responseMessage: ''
      });
    }
  };

  return (
    <div style={{ paddingTop: '7.5rem', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="subtitle">Contact</span>
          <h2>Travaillons Ensemble</h2>
          <p>Vous avez un projet en tête ou une opportunité à me proposer ? N'hésitez pas à me laisser un message.</p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.8fr 1.2fr',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Contact Channels & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
              Mes Coordonnées
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</h4>
                  <p style={{ fontWeight: 600, fontSize: '1rem' }}>contact@alexandre.dev</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Localisation</h4>
                  <p style={{ fontWeight: 600, fontSize: '1rem' }}>Paris / Full Remote</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Téléphone</h4>
                  <p style={{ fontWeight: 600, fontSize: '1rem' }}>+33 6 12 34 56 78</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 700 }}>Réseaux Sociaux</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '0.75rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '0.75rem 1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ padding: '2.5rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
              Envoyer un Message
            </h3>

            <AnimatePresence mode="wait">
              {status.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid #10b981',
                    borderRadius: 'var(--radius-md)',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={48} style={{ color: '#10b981', margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#10b981' }}>
                    Message Envoyé avec Succès !
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {status.responseMessage}
                  </p>
                  <button
                    onClick={() => setStatus({ loading: false, success: false, error: null, responseMessage: '' })}
                    className="btn-primary"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  {status.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid #ef4444',
                        color: '#ef4444',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.9rem'
                      }}
                    >
                      <AlertCircle size={18} />
                      {status.error}
                    </motion.div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean.dupont@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      Votre Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Bonjour Alexandre, nous aimerions échanger sur un projet..."
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status.loading}
                    type="submit"
                    className="btn-primary"
                    style={{
                      justifyContent: 'center',
                      width: '100%',
                      padding: '1rem',
                      marginTop: '0.5rem'
                    }}
                  >
                    {status.loading ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        Envoyer le Message <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
