import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesPreview } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { TrabajaConNosotrosSection } from '@/components/sections/TrabajaConNosotros';
import {
  getHomePage,
  getServices,
  getTestimonials,
  getContactInfo,
  getTrabajaConNosotros,
} from '@/lib/strapi';
import {
  fallbackHomePage,
  fallbackServices,
  fallbackTestimonials,
  fallbackContactInfo,
  fallbackTrabajaConNosotros,
} from '@/lib/fallback-data';

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHomePage();
  const data = home || fallbackHomePage;

  return {
    title: data.seoTitle || 'Prosalud SpA | Enfermería y Cuidado Domiciliario',
    description:
      data.seoDescription ||
      'Servicios de enfermería y cuidado domiciliario en Viña del Mar. Personal certificado, atención 24/7.',
    openGraph: {
      title: data.seoTitle || 'Prosalud SpA',
      description: data.seoDescription || '',
    },
  };
}

export default async function HomePage() {
  const [homeData, services, testimonials, contactInfo, trabajaData] = await Promise.all([
    getHomePage(),
    getServices(true),
    getTestimonials(),
    getContactInfo(),
    getTrabajaConNosotros(),
  ]);

  const home = homeData || fallbackHomePage;
  const displayServices = services.length > 0 ? services : fallbackServices.slice(0, 3);
  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const contactInfoData = contactInfo || fallbackContactInfo;
  const trabaja = trabajaData || fallbackTrabajaConNosotros;

  return (
    <>
      <HeroSection data={home} />
      <AboutSection
        aboutTitle={home.aboutTitle}
        aboutText={home.aboutText}
        benefits={home.benefits}
      />
      <ServicesPreview services={displayServices} />
      <TrabajaConNosotrosSection data={trabaja} />
      <TestimonialsSection testimonials={displayTestimonials} />
      <CTASection
        title={home.finalCtaTitle}
        text={home.finalCtaText}
        phone={contactInfoData.phone}
      />
    </>
  );
}
