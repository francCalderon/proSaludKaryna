'use strict';

/**
 * Configuración de base de datos.
 *
 * - LOCAL (desarrollo): SQLite — no requiere ninguna variable de entorno.
 *   Los datos se guardan en backend/.tmp/data.db automáticamente.
 *
 * - PRODUCCIÓN (cPanel): MySQL/MariaDB — requiere DATABASE_CLIENT=mysql
 *   más las variables DATABASE_HOST, DATABASE_PORT, DATABASE_NAME,
 *   DATABASE_USERNAME y DATABASE_PASSWORD en el archivo .env del servidor.
 */
module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  if (client === 'mysql') {
    return {
      connection: {
        client: 'mysql',
        connection: {
          host:     env('DATABASE_HOST', 'localhost'),
          port:     env.int('DATABASE_PORT', 3306),
          database: env('DATABASE_NAME', 'prosalud_db'),
          user:     env('DATABASE_USERNAME', 'root'),
          password: env('DATABASE_PASSWORD', ''),
          ssl:      env.bool('DATABASE_SSL', false),
        },
        pool: { min: 2, max: 10 },
        acquireConnectionTimeout: 60000,
      },
    };
  }

  // SQLite — desarrollo local (valor por defecto)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};
