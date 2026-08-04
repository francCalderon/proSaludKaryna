'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trabaja-con-nosotros.trabaja-con-nosotros', {
  config: {
    find:   { auth: false },
    update: { auth: { scope: ['admin::isAuthenticatedAdmin'] } },
  },
});
