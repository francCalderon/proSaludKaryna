import Link from 'next/link';
import {
  Users, Pill, Stethoscope, HandHeart, Home, Accessibility, ArrowRight, ChevronRight
} from 'lucide-react';
import { SectionTitle, Card } from '@/components/ui';
import type { Service } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={26} />,
  pill: <Pill size={26} />,
  stethoscope: <Stethoscope size={26} />,
  handshake: <HandHeart size={26} />,
  home: <Home size={26} />,
  accessibility: <Accessibility size={26} />,
  bandage: <Stethoscope size={26} />,
};

function getIcon(iconName?: string) {
  return iconMap[iconName || ''] || <Stethoscope size={26} />;
}

// ==========================================
// SERVICES PREVIEW (Homepage - featured only)
// ==========================================
interface ServicesPreviewProps {
  services: Service[];
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  const displayServices = services.slice(0, 3);

  return (
    <section className="section" id="servicios-preview">
      <div className="container">
        <SectionTitle
          tag="Nuestros servicios"
          title="Cuidado especializado en cada situación"
          subtitle="Ofrecemos una gama completa de servicios de enfermería domiciliaria adaptados a las necesidades de cada paciente y familia."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {displayServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/servicios"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.7rem 1.75rem',
              background: 'transparent',
              color: 'var(--color-primary)',
              border: '2px solid var(--color-primary)',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'var(--transition)',
              textDecoration: 'none',
            }}
            className="see-all-btn"
          >
            Ver todos los servicios
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .see-all-btn:hover {
          background: var(--color-primary) !important;
          color: white !important;
        }
      `}</style>
    </section>
  );
}

// ==========================================
// SERVICES GRID (Services page - all services)
// ==========================================
interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SERVICE CARD (shared)
// ==========================================
interface ServiceCardProps {
  service: Service;
  detailed?: boolean;
}

function ServiceCard({ service, detailed }: ServiceCardProps) {
  return (
    <article
      style={{
        background: 'var(--color-white)',
        borderRadius: 'var(--radius-md)',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-gray-100)',
        transition: 'var(--transition-slow)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      className="service-card"
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          background: 'var(--color-primary-light)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-primary)',
          marginBottom: '1.25rem',
          transition: 'var(--transition)',
        }}
        aria-hidden="true"
        className="service-icon"
      >
        {getIcon(service.iconName)}
      </div>

      <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>{service.title}</h3>

      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--color-gray-500)',
          lineHeight: 1.7,
          flex: 1,
          marginBottom: '1.25rem',
        }}
      >
        {detailed ? service.fullDescription || service.shortDescription : service.shortDescription}
      </p>

      <Link
        href={`/servicios/${service.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          color: 'var(--color-primary)',
          fontWeight: 600,
          fontSize: '0.9rem',
          textDecoration: 'none',
          transition: 'var(--transition)',
          marginTop: 'auto',
        }}
        className="service-link"
        aria-label={`Ver más sobre ${service.title}`}
      >
        Más información
        <ArrowRight size={16} />
      </Link>

      <style>{`
        .service-card:hover {
          box-shadow: var(--shadow-lg) !important;
          transform: translateY(-4px);
          border-color: var(--color-primary-light) !important;
        }
        .service-card:hover .service-icon {
          background: var(--color-primary) !important;
          color: white !important;
        }
        .service-link:hover { gap: 0.6rem !important; }
      `}</style>
    </article>
  );
}
