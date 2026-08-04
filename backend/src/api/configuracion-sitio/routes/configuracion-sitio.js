'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::configuracion-sitio.configuracion-sitio', {
  config: {
    find:   { auth: false },
    update: { auth: { scope: ['admin::isAuthenticatedAdmin'] } },
  },
});
