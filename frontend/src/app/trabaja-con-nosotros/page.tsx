import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { getTrabajaConNosotros, getContactInfo } from '@/lib/strapi';
import { fallbackTrabajaConNosotros, fallbackContactInfo } from '@/lib/fallback-data';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTrabajaConNosotros();
  const d = data || fallbackTrabajaConNosotros;

  return {
    title: d.seoTitle || 'Trabaja con Nosotros | Prosalud SpA',
    description: d.seoDescription || 'Únete al equipo de Prosalud SpA en Viña del Mar.',
    openGraph: {
      title: d.seoTitle || 'Trabaja con Nosotros | Prosalud SpA',
      description: d.seoDescription || '',
    },
  };
}

export default async function TrabajaConNosotrosPage() {
  const [trabajaData, contactData] = await Promise.all([
    getTrabajaConNosotros(),
    getContactInfo(),
  ]);

  const d = trabajaData || fallbackTrabajaConNosotros;
  const contactInfo = contactData || fallbackContactInfo;
  const perfiles = d.perfilesBuscados
    ? d.perfilesBuscados.split('\n').filter(Boolean)
    : [];

  return (
    <>
      {/* Header de página */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-off-white) 100%)',
          paddingTop: 'calc(70px + 4rem)',
          paddingBottom: '4rem',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span
            style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              background: 'var(--color-white)',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              border: '1px solid rgba(27,168,209,0.2)',
            }}
          >
            Únete a nuestro equipo
          </span>
          <h1 style={{ marginBottom: '1rem' }}>{d.titulo}</h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-gray-500)',
              maxWidth: '600px',
              margin: '0 auto 1.5rem',
              lineHeight: 1.7,
            }}
          >
            {d.descripcion}
          </p>
          <Link
            href="/contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-primary)',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={15} />
            Volver al inicio
          </Link>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Descripción completa */}
            <article>
              <h2 style={{ marginBottom: '1.25rem', fontSize: '1.4rem' }}>
                ¿Por qué trabajar con nosotros?
              </h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1.25rem', color: 'var(--color-gray-600)' }}>
                En Prosalud SpA creemos que el cuidado de calidad comienza con un equipo humano
                comprometido. Ofrecemos un ambiente de trabajo donde la vocación de servicio y el
                profesionalismo son los pilares fundamentales.
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-gray-600)' }}>
                Buscamos personas responsables, empáticas y con vocación de servicio para brindar
                atención profesional y cercana a nuestros pacientes y sus familias.
              </p>

              {/* Cómo postular */}
              <div
                style={{
                  background: 'var(--color-primary-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  border: '1px solid rgba(27,168,209,0.15)',
                }}
              >
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                  ¿Cómo postular?
                </h3>
                <p style={{ lineHeight: 1.7, color: 'var(--color-gray-600)', marginBottom: '1.25rem' }}>
                  Envíanos tu curriculum vitae y una breve presentación personal al siguiente correo:
                </p>
                <a
                  href={`mailto:${d.emailPostulacion}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.5rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    boxShadow: 'var(--shadow-blue)',
                    transition: 'var(--transition)',
                  }}
                  className="postular-btn"
                >
                  <Mail size={18} />
                  {d.emailPostulacion}
                </a>
              </div>
            </article>

            {/* Sidebar: perfiles */}
            <aside>
              {perfiles.length > 0 && (
                <div
                  style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.75rem',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--color-gray-100)',
                    position: 'sticky',
                    top: '90px',
                  }}
                >
                  <h3 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                    Perfiles que buscamos
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {perfiles.map((perfil) => (
                      <li
                        key={perfil}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.85rem 1rem',
                          background: 'var(--color-primary-light)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.95rem',
                          color: 'var(--color-gray-700)',
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle size={17} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                        {perfil}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--color-gray-100)',
                      fontSize: '0.85rem',
                      color: 'var(--color-gray-500)',
                      lineHeight: 1.6,
                    }}
                  >
                    ¿Tienes preguntas?{' '}
                    <a
                      href={`mailto:${d.emailPostulacion}`}
                      style={{ color: 'var(--color-primary)', fontWeight: 600 }}
                    >
                      Escríbenos
                    </a>
                    {' '}o llámanos al{' '}
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      style={{ color: 'var(--color-primary)', fontWeight: 600 }}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .postular-btn:hover { background: var(--color-primary-dark) !important; transform: translateY(-1px); }
      `}</style>
    </>
  );
}
