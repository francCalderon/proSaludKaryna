'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service.service', {
  config: {
    find:    { auth: false },
    findOne: { auth: false },
    create:  { auth: { scope: ['admin::isAuthenticatedAdmin'] } },
    update:  { auth: { scope: ['admin::isAuthenticatedAdmin'] } },
    delete:  { auth: { scope: ['admin::isAuthenticatedAdmin'] } },
  },
});
