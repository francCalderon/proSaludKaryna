import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { getServiceBySlug, getServices } from '@/lib/strapi';
import { fallbackServices } from '@/lib/fallback-data';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const services = await getServices();
  const display = services.length > 0 ? services : fallbackServices;
  return display.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  const fallback = fallbackServices.find((s) => s.slug === params.slug);
  const data = service || fallback;

  if (!data) return { title: 'Servicio no encontrado' };

  return {
    title: data.seoTitle || data.title,
    description: data.seoDescription || data.shortDescription,
    openGraph: {
      title: data.seoTitle || data.title,
      description: data.seoDescription || data.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const service = await getServiceBySlug(params.slug);
  const fallback = fallbackServices.find((s) => s.slug === params.slug);
  const data = service || fallback;

  if (!data) notFound();

  return (
    <>
      {/* Breadcrumb & header */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-off-white) 100%)',
          paddingTop: 'calc(70px + 3rem)',
          paddingBottom: '3rem',
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Ruta de navegación" style={{ marginBottom: '1.5rem' }}>
            <ol
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.4rem',
                listStyle: 'none',
                fontSize: '0.85rem',
                color: 'var(--color-gray-400)',
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
                >
                  Inicio
                </Link>
              </li>
              <li><ChevronRight size={14} /></li>
              <li>
                <Link
                  href="/servicios"
                  style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
                >
                  Servicios
                </Link>
              </li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: 'var(--color-gray-600)' }}>
                {data.title}
              </li>
            </ol>
          </nav>

          <h1 style={{ marginBottom: '1rem' }}>{data.title}</h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-gray-600)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}
          >
            {data.shortDescription}
          </p>
        </div>
      </section>

      {/* Content */}
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
            {/* Main content */}
            <article>
              <h2 style={{ marginBottom: '1.25rem', fontSize: '1.4rem' }}>
                Descripción del servicio
              </h2>
              <div
                style={{
                  color: 'var(--color-gray-600)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                }}
              >
                {(data.fullDescription || data.shortDescription)
                  .split('\n')
                  .map((paragraph, i) => (
                    <p key={i} style={{ marginBottom: '1rem' }}>
                      {paragraph}
                    </p>
                  ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div
                style={{
                  background: 'var(--color-primary-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  border: '1px solid rgba(30,111,168,0.1)',
                  position: 'sticky',
                  top: '90px',
                }}
              >
                <h3 style={{ marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                  ¿Por qué elegirnos?
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Profesionales certificados y con experiencia',
                    'Atención personalizada para cada paciente',
                    'Coordinación con equipo médico',
                    'Disponibilidad según sus necesidades',
                    'Evaluación inicial sin costo',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.9rem',
                        color: 'var(--color-gray-700)',
                      }}
                    >
                      <CheckCircle
                        size={17}
                        color="var(--color-secondary)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.8rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    marginTop: '1.5rem',
                    transition: 'var(--transition)',
                  }}
                  className="sidebar-cta"
                >
                  Solicitar este servicio
                </Link>

                <Link
                  href="/servicios"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    justifyContent: 'center',
                    marginTop: '0.75rem',
                    color: 'var(--color-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  <ArrowLeft size={15} />
                  Ver todos los servicios
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .sidebar-cta:hover { background: var(--color-primary-dark) !important; }
      `}</style>
    </>
  );
}
