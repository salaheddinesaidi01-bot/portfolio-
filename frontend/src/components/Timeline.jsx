import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Timeline = ({ events }) => {
  return (
    <div
      style={{
        position: 'relative',
        paddingLeft: '2.5rem',
        margin: '2rem 0'
      }}
    >
      {/* Central Vertical Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '12px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
          opacity: 0.4
        }}
      />

      {events.map((event, index) => {
        const isEducation = event.title.toLowerCase().includes('master') || event.title.toLowerCase().includes('formation') || event.title.toLowerCase().includes('université');
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            style={{
              position: 'relative',
              marginBottom: '2.5rem'
            }}
          >
            {/* Timeline Node Bullet */}
            <div
              style={{
                position: 'absolute',
                left: '-2.5rem',
                top: '0',
                transform: 'translateX(-50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '2px solid var(--accent-primary)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              {isEducation ? <GraduationCap size={16} /> : <Briefcase size={16} />}
            </div>

            {/* Event Card */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--badge-bg)',
                  color: 'var(--badge-text)',
                  border: '1px solid var(--badge-border)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '0.6rem'
                }}
              >
                {event.year}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                {event.title}
              </h3>

              <h4
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--accent-secondary)',
                  fontWeight: 600,
                  marginBottom: '0.75rem'
                }}
              >
                {event.company}
              </h4>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {event.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
