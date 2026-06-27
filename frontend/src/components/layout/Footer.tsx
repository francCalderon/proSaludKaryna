import Link from 'next/link';
import { HeartPulse, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-gray-900)',
        color: 'var(--color-gray-400)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Columna marca */}
          <div>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <HeartPulse size={26} color="var(--color-primary)" strokeWidth={2} />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                }}
              >
                Pro<span style={{ color: 'var(--color-primary)' }}>salud</span>
                <span style={{ color: 'var(--color-gray-500)', fontWeight: 400, fontSize: '0.85rem', marginLeft: '3px' }}>SpA</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-gray-400)' }}>
              Servicios profesionales de enfermería y cuidado domiciliario en Viña del Mar. Al cuidado de los que amas.
            </p>
          </div>

          {/* Columna navegación */}
          <div>
            <h3
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-gray-200)',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              Navegación
            </h3>
            <nav aria-label="Footer navegación">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/trabaja-con-nosotros', label: 'Trabaja con Nosotros' },
                { href: '/contacto', label: 'Contacto' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    color: 'var(--color-gray-400)',
                    fontSize: '0.95rem',
                    marginBottom: '0.6rem',
                    transition: 'var(--transition)',
                  }}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna servicios */}
          <div>
            <h3
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-gray-200)',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              Servicios
            </h3>
            {[
              'Cuidado de paciente en domicilio',
              'Toma de muestras sanguíneas',
              'Curaciones simples y avanzadas',
              'Instalación de sonda vesical',
              'Instalación de sonda nasogástrica',
              'Postura de aros',
            ].map((s) => (
              <Link
                key={s}
                href="/servicios"
                style={{
                  display: 'block',
                  color: 'var(--color-gray-400)',
                  fontSize: '0.88rem',
                  marginBottom: '0.5rem',
                  transition: 'var(--transition)',
                }}
                className="footer-link"
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Columna contacto */}
          <div>
            <h3
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-gray-200)',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              Contacto
            </h3>
            {[
              { icon: <Phone size={14} />, text: '+56 9 8363 2443' },
              { icon: <Mail size={14} />, text: 'procsalud49@gmail.com' },
              { icon: <MapPin size={14} />, text: 'Calle Libertad 63, Of. 401, Viña del Mar' },
              { icon: <Clock size={14} />, text: 'Atención 24/7' },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-gray-400)',
                }}
              >
                <span style={{ flexShrink: 0, marginTop: '2px' }}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Barra inferior */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
            © {currentYear} Prosalud SpA. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
            Viña del Mar, Chile
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--color-white) !important; }
      `}</style>
    </footer>
  );
}
