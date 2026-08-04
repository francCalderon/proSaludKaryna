'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-info.contact-info', {
  config: {
    find:   { auth: false },
    update: { auth: { scope: ['admin::isAuthenticatedAdmin'] } },
  },
});
