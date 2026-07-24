'use strict';

// Orígenes CORS permitidos — se construyen desde variables de entorno
// para que el mismo código sirva en local y en producción.
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:1337',
  process.env.CORS_ORIGIN          || null,
  process.env.NEXT_PUBLIC_SITE_URL || null,
].filter(Boolean);

module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'res.cloudinary.com',
            // Permitir imágenes del propio dominio de la API
            process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL).hostname : null,
          ].filter(Boolean),
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled:         true,
      headers:         ['*'],
      origin:          allowedOrigins,
      methods:         ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
