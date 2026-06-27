// config/plugins.js
'use strict';

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  // i18n desactivado por simplicidad - activar si se necesita multilenguaje
  // i18n: {
  //   enabled: true,
  //   config: {
  //     defaultLocale: 'es',
  //     locales: ['es'],
  //   },
  // },
});
