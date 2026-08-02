import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 0',
        marginTop: '5rem'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', gap: '1.2rem' }}>
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:contact@alexandre.dev', label: 'Email' }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              aria-label={social.label}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-fast)'
              }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Alexandre Dupont. Conçu avec{' '}
          <Heart size={14} style={{ color: '#ef4444', display: 'inline', verticalAlign: 'middle' }} /> en React & Express.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
