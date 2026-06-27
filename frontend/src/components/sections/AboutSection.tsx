import { Heart, Clock, Home } from 'lucide-react';
import type { Benefit } from '@/types';

interface AboutSectionProps {
  aboutTitle?: string;
  aboutText?: string;
  benefits?: Benefit[];
}

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={24} color="var(--color-primary)" strokeWidth={2} />,
  clock: <Clock size={24} color="var(--color-primary)" strokeWidth={2} />,
  home:  <Home  size={24} color="var(--color-primary)" strokeWidth={2} />,
};

const defaultBenefits: Benefit[] = [
  {
    id: 1,
    icon: 'heart',
    title: 'Atención humanizada',
    description: 'Tratamos a cada paciente con la calidez y respeto que se merece.',
  },
  {
    id: 2,
    icon: 'clock',
    title: 'Disponibilidad 24/7',
    description: 'Estamos disponibles cuando más nos necesita.',
  },
  {
    id: 3,
    icon: 'home',
    title: 'Cuidado en casa',
    description: 'El paciente se recupera mejor en su propio entorno y junto a su familia.',
  },
];

const defaultAboutText =
  'Somos un equipo de técnicos en enfermería y cuidadoras con capacitación y certificación, comprometidos con brindar atención domiciliaria de calidad humana y cercana. Contamos con 7 años de experiencia acompañando a personas y familias en sus procesos de cuidado, entregando apoyo profesional directamente en el hogar de nuestros pacientes.';

const aboutText2 =
  'Entendemos que cada persona es única, por eso diseñamos planes de cuidado personalizados que respetan la dignidad, bienestar y necesidades de quien cuidamos, trabajando siempre en coordinación con la familia y el equipo de salud.';

export function AboutSection({ aboutTitle, aboutText, benefits }: AboutSectionProps) {
  const displayBenefits = benefits && benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <section className="section" style={{ background: 'var(--color-off-white)' }} id="nosotros">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Izquierda: texto */}
          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Quiénes somos
            </span>
            <h2 style={{ marginBottom: '1.25rem' }}>
              {aboutTitle || 'Un equipo comprometido con su bienestar'}
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              {aboutText || defaultAboutText}
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-gray-500)' }}>
              {aboutText2}
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              {[
                { value: '+7', label: 'Años de experiencia' },
                { value: '+200', label: 'Pacientes atendidos' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    textAlign: 'center',
                    padding: '1.25rem 1rem',
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--color-gray-100)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)', lineHeight: 1.3, marginTop: '0.25rem' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha: beneficios */}
          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              ¿Por qué elegirnos?
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {displayBenefits.map((benefit) => (
                <div
                  key={benefit.id}
                  style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--color-gray-100)',
                    transition: 'var(--transition-slow)',
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                  }}
                  className="benefit-card"
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--color-primary-light)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {iconMap[benefit.icon] || iconMap.heart}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.35rem', fontSize: '1rem', color: 'var(--color-gray-900)' }}>
                      {benefit.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-gray-500)' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .benefit-card:hover {
          box-shadow: var(--shadow-md) !important;
          border-color: var(--color-primary-light) !important;
        }
      `}</style>
    </section>
  );
}
