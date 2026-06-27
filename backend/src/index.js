// src/index.js
'use strict';

module.exports = {
  /**
   * Lifecycle: se ejecuta antes de que Strapi se registre
   */
  register(/* { strapi } */) {},

  /**
   * Lifecycle: se ejecuta después de que Strapi ha arrancado
   */
  bootstrap({ strapi }) {
    strapi.log.info('🏥 CuidadoEnfermería CMS iniciado correctamente');
    strapi.log.info(`📡 API disponible en: http://${strapi.config.get('server.host')}:${strapi.config.get('server.port')}/api`);
  },
};
