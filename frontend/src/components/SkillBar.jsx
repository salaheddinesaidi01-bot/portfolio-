import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Box, 
  FileCode, 
  Palette, 
  Cpu, 
  GitBranch, 
  BarChart3, 
  LineChart, 
  Layout,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Code2,
  Server,
  Database,
  Box,
  FileCode,
  Palette,
  Cpu,
  GitBranch,
  BarChart3,
  LineChart,
  Layout
};

const SkillBar = ({ skill, index }) => {
  const IconComponent = iconMap[skill.icon] || CheckCircle2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, x: 4 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.9rem',
        padding: '0.85rem 1.1rem',
        marginBottom: '0.75rem',
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        transition: 'all 0.25s ease',
        cursor: 'default'
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          backgroundColor: 'var(--badge-bg)',
          border: '1px solid var(--badge-border)',
          color: 'var(--accent-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <IconComponent size={20} />
      </div>
      <span
        style={{
          fontWeight: 600,
          fontSize: '0.96rem',
          color: 'var(--text-primary)',
          lineHeight: 1.3
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillBar;

