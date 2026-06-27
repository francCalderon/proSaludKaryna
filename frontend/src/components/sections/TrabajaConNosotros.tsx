import Link from 'next/link';
import { Mail, Users, CheckCircle, ArrowRight } from 'lucide-react';
import type { TrabajaConNosotros } from '@/types';

interface TrabajaConNosotrosProps {
  data: Partial<TrabajaConNosotros>;
}

const defaultData: TrabajaConNosotros = {
  titulo: '¿Quieres formar parte de nuestro equipo?',
  descripcion:
    'En Prosalud SpA creemos que el cuidado de calidad comienza con un equipo humano comprometido. Si eres Técnico en Enfermería (TENS), cuidador(a) certificado(a) o cuentas con experiencia en atención domiciliaria, te invitamos a formar parte de nuestro equipo.',
  perfilesBuscados:
    'Técnico en Enfermería (TENS)\nCuidador(a) certificado(a)\nPersonal con experiencia en atención domiciliaria',
  emailPostulacion: 'seleccion.prosalud@gmail.com',
  activo: true,
  seoTitle: 'Trabaja con Nosotros | Prosalud SpA',
  seoDescription:
    'Únete al equipo de Prosalud SpA. Buscamos técnicos en enfermería y cuidadores certificados en Viña del Mar.',
};

export function TrabajaConNosotrosSection({ data }: TrabajaConNosotrosProps) {
  const d = { ...defaultData, ...data };
  const perfiles = d.perfilesBuscados
    ? d.perfilesBuscados.split('\n').filter(Boolean)
    : [];

  return (
    <section
      className="section"
      style={{ background: 'var(--color-primary-light)' }}
      id="trabaja-con-nosotros"
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Texto */}
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                background: 'var(--color-white)',
                color: 'var(--color-primary)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              <Users size={14} />
              Únete a nuestro equipo
            </span>

            <h2 style={{ marginBottom: '1.25rem', color: 'var(--color-gray-900)' }}>
              {d.titulo}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--color-gray-600)',
                marginBottom: '1.5rem',
              }}
            >
              {d.descripcion}
            </p>

            <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
              Buscamos personas responsables, empáticas y con vocación de servicio para brindar
              atención profesional y cercana a nuestros pacientes.
            </p>

            <a
              href={`mailto:${d.emailPostulacion}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 2rem',
                background: 'var(--color-primary)',
                color: 'white',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: 'var(--shadow-blue)',
                transition: 'var(--transition)',
                textDecoration: 'none',
              }}
              className="trabaja-cta"
            >
              <Mail size={18} />
              Postular ahora
            </a>

            <p
              style={{
                marginTop: '0.75rem',
                fontSize: '0.85rem',
                color: 'var(--color-gray-500)',
              }}
            >
              Envía tu CV a{' '}
              <a
                href={`mailto:${d.emailPostulacion}`}
                style={{ color: 'var(--color-primary)', fontWeight: 600 }}
              >
                {d.emailPostulacion}
              </a>
            </p>
          </div>

          {/* Tarjeta con perfiles */}
          <div>
            <div
              style={{
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(27,168,209,0.12)',
              }}
            >
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-gray-900)' }}>
                Perfiles que buscamos
              </h3>

              {perfiles.length > 0 ? (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {perfiles.map((perfil) => (
                    <li
                      key={perfil}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.9rem 1rem',
                        background: 'var(--color-primary-light)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.95rem',
                        color: 'var(--color-gray-700)',
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle
                        size={18}
                        color="var(--color-primary)"
                        style={{ flexShrink: 0 }}
                      />
                      {perfil}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-gray-100)',
                }}
              >
                <Link
                  href="/trabaja-con-nosotros"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'var(--transition)',
                  }}
                  className="trabaja-link"
                >
                  Ver más información
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .trabaja-cta:hover {
          background: var(--color-primary-dark) !important;
          transform: translateY(-2px);
        }
        .trabaja-link:hover { gap: 0.7rem !important; }
      `}</style>
    </section>
  );
}
