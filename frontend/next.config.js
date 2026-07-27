/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Límite de workers para shared hosting ──────────────────────────────────
  // SWC (compilador Rust de Next.js) usa Rayon para paralelismo.
  // En cPanel el kernel bloquea la creación de hilos con EAGAIN cuando se
  // alcanza el límite de procesos del usuario (nproc). Fijar cpus:1 limita
  // Next.js a un solo worker de compilación. El env var RAYON_NUM_THREADS=1
  // (aplicar en el comando de build) limita el pool interno de Rayon.
  experimental: {
    cpus: 1,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port:     '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: process.env.STRAPI_HOST || 'localhost',
        pathname: '/uploads/**',
      },
    ],
  },

  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options',        value: 'DENY' },
        { key: 'X-XSS-Protection',       value: '1; mode=block' },
      ],
    }];
  },
};

module.exports = nextConfig;
