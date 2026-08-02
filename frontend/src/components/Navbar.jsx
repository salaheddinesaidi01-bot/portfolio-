import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.8rem 0' : '1.4rem 0',
        backgroundColor: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all var(--transition-smooth)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo & Name */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <Code2 size={22} />
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
            SAIDI <span className="text-gradient">SALAH EDDINE</span>
          </span>
        </NavLink>

        {/* Action button (Theme Toggle) without the right menu bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
