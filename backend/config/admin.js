// config/admin.js
'use strict';

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'defaultSecretCambiarEnProduccion'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'defaultSaltCambiarEnProduccion'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'defaultTransferSaltCambiarEnProduccion'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
