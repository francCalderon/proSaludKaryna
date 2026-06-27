import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfoSection } from '@/components/sections/ContactInfoSection';
import { getContactInfo } from '@/lib/strapi';
import { fallbackContactInfo } from '@/lib/fallback-data';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contáctenos para solicitar información sobre nuestros servicios de enfermería domiciliaria. Respondemos en menos de 24 horas.',
  openGraph: {
    title: 'Contacto | CuidadoEnfermería',
    description: 'Solicite información sobre servicios de enfermería domiciliaria.',
  },
};

export default async function ContactoPage() {
  const contactInfo = await getContactInfo();
  const data = contactInfo || fallbackContactInfo;

  return (
    <>
      {/* Page header */}
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
              background: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              border: '1px solid rgba(30,111,168,0.15)',
            }}
          >
            Estamos para ayudarle
          </span>
          <h1 style={{ marginBottom: '1rem' }}>Contáctenos</h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-gray-500)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {data.introText}
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section" style={{ background: 'var(--color-off-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left: Contact info */}
            <ContactInfoSection data={data} />

            {/* Right: Form */}
            <div
              style={{
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--color-gray-100)',
              }}
            >
              <h2 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                Envíenos un mensaje
              </h2>
              <p style={{ marginBottom: '1.75rem', fontSize: '0.95rem', color: 'var(--color-gray-500)' }}>
                Complete el formulario y le responderemos en menos de 24 horas hábiles.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      {data.mapEmbedUrl ? (
        <section style={{ height: '400px', background: 'var(--color-gray-100)' }}>
          <iframe
            src={data.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de CuidadoEnfermería"
          />
        </section>
      ) : (
        <section
          style={{
            height: '200px',
            background: 'var(--color-gray-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-gray-400)',
            fontSize: '0.9rem',
          }}
        >
          <span>📍 {data.address}</span>
        </section>
      )}
    </>
  );
}
