// config/database.js
// Soporta tanto DATABASE_URL (Railway) como variables individuales

'use strict';

const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  // Railway y muchos servicios proveen DATABASE_URL
  const databaseUrl = env('DATABASE_URL', '');

  if (databaseUrl) {
    const config = parse(databaseUrl);
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: parseInt(config.port || '5432'),
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false, // Necesario para Railway/Render
          },
        },
        pool: {
          min: 2,
          max: 10,
        },
        acquireConnectionTimeout: 60000,
      },
    };
  }

  // Variables de entorno individuales (desarrollo local)
  return {
    connection: {
      client: env('DATABASE_CLIENT', 'postgres'),
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'cuidado_enfermeria'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false)
          ? { rejectUnauthorized: false }
          : false,
      },
      pool: {
        min: 2,
        max: 10,
      },
      acquireConnectionTimeout: 60000,
    },
  };
};
