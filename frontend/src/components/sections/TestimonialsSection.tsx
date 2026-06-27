import { Star, Quote } from 'lucide-react';
import { SectionTitle } from '@/components/ui';
import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className="section"
      style={{ background: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}
      id="testimonios"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle
          tag="Testimonios"
          title="Lo que dicen nuestras familias"
          subtitle="La confianza de nuestros pacientes y sus familias es nuestro mayor reconocimiento."
        />

        {/* Override colors for dark background */}
        <style>{`
          #testimonios .section-tag { 
            background: rgba(255,255,255,0.15) !important; 
            color: white !important; 
          }
          #testimonios h2 { color: white !important; }
          #testimonios p { color: rgba(255,255,255,0.75) !important; }
        `}</style>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      style={{
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 'var(--radius-md)',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Quote icon */}
      <Quote
        size={28}
        color="rgba(255,255,255,0.3)"
        style={{ transform: 'scaleX(-1)' }}
        aria-hidden="true"
      />

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px' }} aria-label={`${testimonial.rating} de 5 estrellas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < testimonial.rating ? '#fbbf24' : 'transparent'}
            color={i < testimonial.rating ? '#fbbf24' : 'rgba(255,255,255,0.3)'}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.95rem',
          lineHeight: 1.75,
          fontStyle: 'italic',
          fontFamily: 'var(--font-heading)',
          margin: 0,
          flex: 1,
        }}
      >
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            color: 'white',
            fontSize: '1rem',
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>
            {testimonial.name}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
            {testimonial.role}
          </div>
        </div>
      </footer>
    </article>
  );
}
