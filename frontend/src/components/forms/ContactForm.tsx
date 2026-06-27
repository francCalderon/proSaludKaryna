'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import type { ContactMessagePayload, ContactFormState } from '@/types';

// ==========================================
// SCHEMA DE VALIDACIÓN
// ==========================================
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'Nombre demasiado largo')
    .trim(),
  email: z
    .string()
    .email('Ingrese un correo electrónico válido')
    .max(150, 'Correo demasiado largo')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .max(20, 'Teléfono demasiado largo')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Ingrese solo números y caracteres válidos (+, -, espacios)')
    .trim(),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede superar los 2000 caracteres')
    .trim(),
  // Honeypot anti-spam: debe estar vacío
  _honeypot: z.string().max(0, 'Spam detectado').optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ==========================================
// CAMPO REUTILIZABLE
// ==========================================
interface FieldProps {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, id, required, error, children }: FieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label htmlFor={id} style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-gray-700)' }}>
        {label}
        {required && (
          <span style={{ color: '#e53e3e', marginLeft: '3px' }} aria-hidden="true">*</span>
        )}
      </label>
      {children}
      {error && (
        <span role="alert" style={{ fontSize: '0.8rem', color: '#e53e3e', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <AlertCircle size={13} />
          {error}
        </span>
      )}
    </div>
  );
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '0.7rem 0.9rem',
  border: `1.5px solid ${hasError ? '#e53e3e' : 'var(--color-gray-200)'}`,
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.95rem',
  color: 'var(--color-gray-800)',
  background: 'var(--color-white)',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'var(--font-body)',
});

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({ status: 'idle' });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageLength = watch('message')?.length || 0;

  const onSubmit = async (data: ContactFormData) => {
    if (data._honeypot) {
      setFormState({ status: 'success' });
      return;
    }

    setFormState({ status: 'loading' });

    try {
      const payload: ContactMessagePayload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.message || 'Error al enviar el mensaje');
      }

      setFormState({
        status: 'success',
        message: '¡Mensaje enviado! Le responderemos a la brevedad.',
      });
      reset();
    } catch (err: unknown) {
      setFormState({
        status: 'error',
        message:
          err instanceof Error
            ? err.message
            : 'Ocurrió un error. Por favor intente nuevamente o llámenos directamente.',
      });
    }
  };

  // Estado éxito
  if (formState.status === 'success') {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'var(--color-secondary-light)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(43,184,154,0.2)',
        }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={56} color="var(--color-secondary)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ marginBottom: '0.75rem', color: 'var(--color-gray-900)' }}>
          ¡Mensaje recibido!
        </h3>
        <p style={{ color: 'var(--color-gray-600)', marginBottom: '1.5rem' }}>
          {formState.message}
        </p>
        <button
          onClick={() => setFormState({ status: 'idle' })}
          style={{
            padding: '0.6rem 1.5rem',
            background: 'var(--color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulario de contacto"
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      {/* Honeypot anti-spam */}
      <div style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }} aria-hidden="true">
        <label htmlFor="website">No completar</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('_honeypot')} />
      </div>

      {/* Error general */}
      {formState.status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            padding: '0.9rem 1rem',
            background: '#fff5f5',
            border: '1px solid #fed7d7',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.6rem',
            color: '#c53030',
            fontSize: '0.9rem',
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '1px' }} />
          {formState.message}
        </div>
      )}

      {/* Nombre + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        <Field label="Nombre completo" id="name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            placeholder="Ej: María González"
            style={inputStyle(!!errors.name)}
            className="form-input"
            {...register('name')}
          />
        </Field>

        <Field label="Correo electrónico" id="email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            placeholder="correo@ejemplo.com"
            style={inputStyle(!!errors.email)}
            className="form-input"
            {...register('email')}
          />
        </Field>
      </div>

      {/* Teléfono */}
      <Field label="Teléfono" id="phone" required error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={!!errors.phone}
          placeholder="+56 9 8363 2443"
          style={inputStyle(!!errors.phone)}
          className="form-input"
          {...register('phone')}
        />
      </Field>

      {/* Mensaje */}
      <Field label="Mensaje" id="message" required error={errors.message?.message}>
        <div style={{ position: 'relative' }}>
          <textarea
            id="message"
            rows={5}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby="message-counter"
            placeholder="Cuéntenos sobre la situación del paciente, qué tipo de cuidado necesita, horarios preferidos, etc."
            style={{ ...inputStyle(!!errors.message), resize: 'vertical', minHeight: '130px' }}
            className="form-input"
            {...register('message')}
          />
          <span
            id="message-counter"
            style={{
              position: 'absolute',
              bottom: '0.5rem',
              right: '0.75rem',
              fontSize: '0.75rem',
              color:
                messageLength > 1800 ? '#e53e3e' :
                messageLength > 1500 ? '#d97706' :
                'var(--color-gray-400)',
            }}
          >
            {messageLength}/2000
          </span>
        </div>
      </Field>

      {/* Aviso privacidad */}
      <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
        Al enviar este formulario, acepta que usemos sus datos para responder a su consulta.
        Sus datos no serán compartidos con terceros.{' '}
        <span style={{ color: '#e53e3e' }}>*</span> Campos obligatorios.
      </p>

      {/* Botón enviar */}
      <button
        type="submit"
        disabled={isSubmitting || formState.status === 'loading'}
        aria-busy={isSubmitting || formState.status === 'loading'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.9rem 2rem',
          background: isSubmitting || formState.status === 'loading'
            ? 'var(--color-gray-400)'
            : 'var(--color-primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: isSubmitting || formState.status === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'var(--transition)',
          fontFamily: 'var(--font-body)',
          boxShadow: isSubmitting || formState.status === 'loading' ? 'none' : 'var(--shadow-blue)',
          width: '100%',
        }}
        className="submit-btn"
      >
        {isSubmitting || formState.status === 'loading' ? (
          <>
            <span
              style={{
                width: '18px',
                height: '18px',
                border: '2px solid white',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'spin 0.7s linear infinite',
              }}
            />
            Enviando...
          </>
        ) : (
          <>
            Enviar
            <Send size={18} />
          </>
        )}
      </button>

      <style>{`
        .form-input:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(27,168,209,0.15) !important;
          outline: none;
        }
        .submit-btn:hover:not(:disabled) {
          background: var(--color-primary-dark) !important;
          transform: translateY(-1px);
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
}
