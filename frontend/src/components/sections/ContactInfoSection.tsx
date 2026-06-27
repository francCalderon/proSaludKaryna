import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import type { ContactInfo } from '@/types';

interface ContactInfoProps {
  data: Partial<ContactInfo>;
}

export function ContactInfoSection({ data }: ContactInfoProps) {
  const info = {
    email: data.email || 'contacto@cuidadoenfermeria.cl',
    phone: data.phone || '+56 2 2345 6789',
    whatsapp: data.whatsapp || '+56 9 8765 4321',
    address: data.address || 'Av. Providencia 1234, Of. 501, Santiago',
    businessHours: data.businessHours || 'Lun-Vie: 8:00 - 20:00 | Sáb: 9:00 - 14:00',
    introText: data.introText || 'Estamos aquí para responder todas sus consultas.',
  };

  const contactItems = [
    {
      icon: <Phone size={20} color="var(--color-primary)" />,
      label: 'Teléfono',
      value: info.phone,
      href: `tel:${info.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <MessageCircle size={20} color="var(--color-secondary)" />,
      label: 'WhatsApp',
      value: info.whatsapp,
      href: `https://wa.me/${info.whatsapp.replace(/[\s\+\-]/g, '')}`,
    },
    {
      icon: <Mail size={20} color="var(--color-primary)" />,
      label: 'Correo',
      value: info.email,
      href: `mailto:${info.email}`,
    },
    {
      icon: <MapPin size={20} color="var(--color-primary)" />,
      label: 'Dirección',
      value: info.address,
      href: undefined,
    },
    {
      icon: <Clock size={20} color="var(--color-primary)" />,
      label: 'Horario',
      value: info.businessHours,
      href: undefined,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Intro */}
      <div>
        <h2 style={{ marginBottom: '0.75rem' }}>Información de contacto</h2>
        <p style={{ lineHeight: 1.7 }}>{info.introText}</p>
      </div>

      {/* Contact items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {contactItems.map(({ icon, label, value, href }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1rem',
              background: 'var(--color-off-white)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-gray-100)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
              }}
              aria-hidden="true"
            >
              {icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gray-400)',
                  marginBottom: '0.2rem',
                }}
              >
                {label}
              </div>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('https') ? '_blank' : undefined}
                  rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  style={{
                    color: 'var(--color-gray-800)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'var(--transition)',
                  }}
                  className="contact-link"
                >
                  {value}
                </a>
              ) : (
                <span style={{ color: 'var(--color-gray-800)', fontWeight: 500, fontSize: '0.95rem' }}>
                  {value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <a
        href={`https://wa.me/${info.whatsapp.replace(/[\s\+\-]/g, '')}?text=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios%20de%20enfermería.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          padding: '0.85rem',
          background: '#25d366',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          fontWeight: 700,
          fontSize: '0.95rem',
          textDecoration: 'none',
          transition: 'var(--transition)',
          boxShadow: '0 4px 15px rgba(37,211,102,0.25)',
        }}
        className="whatsapp-btn"
      >
        <MessageCircle size={22} />
        Escribir por WhatsApp
      </a>

      <style>{`
        .contact-link:hover { color: var(--color-primary) !important; }
        .whatsapp-btn:hover {
          background: #20b858 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,211,102,0.3) !important;
        }
      `}</style>
    </div>
  );
}
