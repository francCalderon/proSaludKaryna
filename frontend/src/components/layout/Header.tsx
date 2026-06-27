'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, HeartPulse } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/trabaja-con-nosotros', label: 'Trabaja con Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'var(--color-white)',
        boxShadow: scrolled ? 'var(--shadow-md)' : '0 1px 0 var(--color-gray-100)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'var(--transition-slow)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Prosalud SpA - Ir al inicio"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
          }}
        >
          <HeartPulse size={28} color="var(--color-primary)" strokeWidth={2} />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--color-gray-900)',
            }}
          >
            Pro<span style={{ color: 'var(--color-primary)' }}>salud</span>
            <span style={{ color: 'var(--color-gray-400)', fontWeight: 400, fontSize: '0.9rem', marginLeft: '3px' }}>SpA</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav
          aria-label="Navegación principal"
          style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 500,
                fontSize: '0.9rem',
                color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-gray-600)',
                background: pathname === link.href ? 'var(--color-primary-light)' : 'transparent',
                transition: 'var(--transition)',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            style={{
              marginLeft: '0.5rem',
              padding: '0.5rem 1.25rem',
              background: 'var(--color-primary)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '0.9rem',
              boxShadow: 'var(--shadow-blue)',
              transition: 'var(--transition)',
              whiteSpace: 'nowrap',
            }}
            className="nav-cta"
          >
            Solicitar atención
          </Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            color: 'var(--color-gray-700)',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div
          style={{
            background: 'var(--color-white)',
            borderTop: '1px solid var(--color-gray-100)',
            padding: '1rem',
          }}
          className="mobile-menu"
        >
          <nav
            aria-label="Menú móvil"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 500,
                  color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-gray-700)',
                  background: pathname === link.href ? 'var(--color-primary-light)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem 1rem',
                background: 'var(--color-primary)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Solicitar atención
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
        .desktop-nav a:not(.nav-cta):hover {
          background: var(--color-primary-light) !important;
          color: var(--color-primary) !important;
        }
        .nav-cta:hover {
          background: var(--color-primary-dark) !important;
          color: var(--color-white) !important;
        }
      `}</style>
    </header>
  );
}
