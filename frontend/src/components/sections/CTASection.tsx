import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  text?: string;
  phone?: string;
}

export function CTASection({ title, text, phone }: CTASectionProps) {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-off-white)' }}
      id="cta-final"
    >
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2.5rem, 6vw, 4rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                color: 'white',
                marginBottom: '1rem',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              }}
            >
              {title || '¿Necesita cuidado para un ser querido?'}
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                maxWidth: '560px',
                margin: '0 auto 2rem',
              }}
            >
              {text ||
                'Contáctenos hoy y le responderemos en menos de 24 horas. Evaluamos su caso sin costo y le ofrecemos la mejor solución para su familia.'}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <Link
                href="/contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  background: 'white',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'var(--transition)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                }}
                className="cta-primary-btn"
              >
                Solicitar información
                <ArrowRight size={18} />
              </Link>

              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 2rem',
                    background: 'rgba(255,255,255,0.12)',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'var(--transition)',
                  }}
                  className="cta-secondary-btn"
                >
                  <Phone size={18} />
                  {phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
        }
        .cta-secondary-btn:hover {
          background: rgba(255,255,255,0.2) !important;
          border-color: rgba(255,255,255,0.5) !important;
        }
      `}</style>
    </section>
  );
}
