'use strict';

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // PUBLIC_URL es obligatorio en producción: define el origen de los uploads
  // y de las URLs absolutas que genera Strapi (emails, media, admin).
  // En local queda como http://localhost:1337; en servidor: https://api.procsalud.cl
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
