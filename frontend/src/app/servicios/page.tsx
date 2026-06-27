import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { SectionTitle } from '@/components/ui';
import { getServices } from '@/lib/strapi';
import { fallbackServices } from '@/lib/fallback-data';

export const metadata: Metadata = {
  title: 'Servicios de Enfermería Domiciliaria',
  description:
    'Conozca todos nuestros servicios: cuidado de adultos mayores, administración de medicamentos, curaciones, acompañamiento domiciliario, atención postoperatoria y más.',
  openGraph: {
    title: 'Servicios de Enfermería | CuidadoEnfermería',
    description: 'Servicios profesionales de enfermería domiciliaria.',
  },
};

export default async function ServiciosPage() {
  const services = await getServices();
  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-off-white) 100%)',
          paddingTop: 'calc(70px + 4rem)',
          paddingBottom: '4rem',
        }}
      >
        <div className="container">
          <SectionTitle
            tag="Nuestros servicios"
            title="Cuidado profesional para cada necesidad"
            subtitle="Contamos con un equipo especializado para brindar atención integral en el hogar, adaptada a cada paciente y situación clínica."
          />
        </div>
      </section>

      {/* Services grid */}
      <ServicesGrid services={displayServices} />

      {/* CTA */}
      <CTASection
        title="¿No encuentra lo que busca?"
        text="Contáctenos directamente. Evaluamos su caso de forma personalizada y le ofrecemos la solución que mejor se adapte a sus necesidades."
      />
    </>
  );
}
