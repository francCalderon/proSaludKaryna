import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Shield, Star, Users } from 'lucide-react';
import type { HomePage } from '@/types';

interface HeroSectionProps {
  data: Partial<HomePage>;
}

const defaultData = {
  heroTitle: 'Cuidado de paciente en domicilio',
  heroSubtitle:
    'Servicios de enfermería y cuidado domiciliario para adultos mayores y pacientes postoperatorios. Profesionales y personal certificado, atención personalizada y el acompañamiento que su familia necesita.',
  heroButtonText: 'Solicitar información',
  heroButtonLink: '/contacto',
};

const heroServices = [
  'Cuidado de adulto mayor',
  'Administración de medicamentos',
  'Control postoperatorio',
  'Toma de muestras sanguíneas',
  'Instalación de sonda vesical',
  'Curaciones simples y avanzadas',
];

const indicators = [
  { icon: <Shield size={18} />, label: 'Profesionales y personal certificados' },
  { icon: <Clock size={18} />, label: 'Servicio 24/7' },
  { icon: <Star size={18} />, label: 'Atención con costo de evaluación' },
  { icon: <Users size={18} />, label: '+7 años de experiencia' },
];

export function HeroSection({ data }: HeroSectionProps) {
  const d = { ...defaultData, ...data };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #EAF6FB 0%, #ffffff 55%, #EAF6FB 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '70px',
      }}
      aria-label="Sección principal"
    >
      {/* Círculos decorativos de fondo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'clamp(300px, 50vw, 600px)',
          height: 'clamp(300px, 50vw, 600px)',
          background: 'radial-gradient(circle, rgba(27,168,209,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 'clamp(200px, 35vw, 450px)',
          height: 'clamp(200px, 35vw, 450px)',
          background: 'radial-gradient(circle, rgba(43,184,154,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="container" style={{ padding: 'clamp(3rem, 8vw, 6rem) var(--container-padding)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Contenido de texto */}
          <div style={{ maxWidth: '580px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--color-secondary)',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
              Enfermería domiciliaria profesional
            </span>

            <h1
              style={{
                marginBottom: '0.75rem',
                color: 'var(--color-gray-900)',
                lineHeight: 1.2,
              }}
            >
              {d.heroTitle}
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'var(--color-primary)',
                fontStyle: 'italic',
                fontWeight: 500,
                marginBottom: '1.25rem',
              }}
            >
              "Al cuidado de los que amas"
            </p>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                color: 'var(--color-gray-500)',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              {d.heroSubtitle}
            </p>

            {/* Indicadores */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.6rem',
                marginBottom: '2.5rem',
              }}
            >
              {indicators.map((item) => (
                <span
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem',
                    color: 'var(--color-gray-600)',
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link
                href={d.heroButtonLink || '/contacto'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  background: 'var(--color-primary)',
                  color: 'var(--color-white)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: 'var(--shadow-blue)',
                  transition: 'var(--transition)',
                  textDecoration: 'none',
                }}
                className="hero-cta-primary"
              >
                {d.heroButtonText}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/servicios"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  background: 'transparent',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: '2px solid var(--color-primary-light)',
                  transition: 'var(--transition)',
                  textDecoration: 'none',
                }}
                className="hero-cta-secondary"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          {/* Tarjeta visual con servicios */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 'clamp(280px, 40vw, 420px)',
              }}
            >
              <div
                style={{
                  background: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--color-gray-100)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--color-gray-100)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--color-primary-light)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                    aria-hidden="true"
                  >
                    👩‍⚕️
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: 'var(--color-gray-900)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                      }}
                    >
                      Prosalud SpA
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)' }}>
                      Disponible 24/7
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-gray-400)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  Servicios disponibles
                </p>

                {heroServices.map((service) => (
                  <div
                    key={service}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--color-gray-50)',
                    }}
                  >
                    <CheckCircle
                      size={15}
                      color="var(--color-secondary)"
                      strokeWidth={2.5}
                      style={{ flexShrink: 0 }}
                    />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)' }}>
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* Badge flotante */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  left: '-1rem',
                  background: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  boxShadow: 'var(--shadow-blue)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                +7 años de experiencia
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-cta-primary:hover {
          background: var(--color-primary-dark) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(27,168,209,0.28) !important;
        }
        .hero-cta-secondary:hover {
          background: var(--color-primary-light) !important;
        }
      `}</style>
    </section>
  );
}
