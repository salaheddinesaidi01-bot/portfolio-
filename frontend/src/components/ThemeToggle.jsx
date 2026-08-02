import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: 'var(--badge-bg)',
        border: '1px solid var(--badge-border)',
        color: 'var(--accent-primary)',
        transition: 'all var(--transition-fast)'
      }}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
