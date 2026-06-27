// src/api/contact-message/routes/contact-message.js
// Solo permite crear (POST) de forma pública.
// Las operaciones de lectura, actualización y eliminación requieren autenticación.

'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-message.contact-message', {
  config: {
    find: {
      // Solo accesible con token de admin/API
      auth: {
        scope: ['admin::isAuthenticatedAdmin'],
      },
    },
    findOne: {
      auth: {
        scope: ['admin::isAuthenticatedAdmin'],
      },
    },
    create: {
      // Acceso público para que el formulario funcione
      auth: false,
    },
    update: {
      auth: {
        scope: ['admin::isAuthenticatedAdmin'],
      },
    },
    delete: {
      auth: {
        scope: ['admin::isAuthenticatedAdmin'],
      },
    },
  },
});
