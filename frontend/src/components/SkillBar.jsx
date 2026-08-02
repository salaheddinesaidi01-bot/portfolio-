import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Box, FileCode, Palette, Cpu, GitBranch } from 'lucide-react';

const iconMap = {
  Code2,
  Server,
  Database,
  Box,
  FileCode,
  Palette,
  Cpu,
  GitBranch
};

const SkillBar = ({ skill, index }) => {
  const IconComponent = iconMap[skill.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ marginBottom: '1.4rem' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            fontWeight: 600,
            fontSize: '0.95rem',
            color: 'var(--text-primary)'
          }}
        >
          <span
            style={{
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <IconComponent size={18} />
          </span>
          {skill.name}
        </span>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-secondary)' }}>
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar Track */}
      <div
        style={{
          width: '100%',
          height: '8px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--badge-bg)',
          border: '1px solid var(--border-color)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Animated Progress Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '100%',
            borderRadius: 'var(--radius-full)',
            background: 'var(--accent-gradient)',
            boxShadow: '0 0 10px var(--accent-glow)'
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
