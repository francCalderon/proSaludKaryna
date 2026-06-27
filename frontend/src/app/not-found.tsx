import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-off-white)',
        paddingTop: '70px',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '480px' }}>
        <div
          style={{
            fontSize: '6rem',
            lineHeight: 1,
            marginBottom: '1rem',
            color: 'var(--color-gray-200)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
          }}
          aria-hidden="true"
        >
          404
        </div>
        <h1 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
          Página no encontrada
        </h1>
        <p style={{ color: 'var(--color-gray-500)', marginBottom: '2rem', lineHeight: 1.7 }}>
          La página que busca no existe o fue movida. Explore nuestros servicios o contáctenos directamente.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              padding: '0.7rem 1.5rem',
              background: 'var(--color-primary)',
              color: 'white',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            style={{
              padding: '0.7rem 1.5rem',
              border: '2px solid var(--color-primary)',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
