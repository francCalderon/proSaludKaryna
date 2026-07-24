'use strict';

/**
 * app.js — Punto de entrada para Phusion Passenger (cPanel)
 *
 * Passenger ejecuta este archivo para iniciar Strapi.
 * process.chdir(__dirname) es CRÍTICO: Passenger puede iniciar el proceso
 * desde un directorio diferente, y Strapi necesita CWD = directorio del proyecto
 * para encontrar config/, src/ y public/.
 *
 * NO modificar la estructura de este archivo sin entender cómo funciona Passenger.
 */

// ── 1. Fijar el directorio de trabajo ───────────────────────────────────────
process.chdir(__dirname);

// ── 2. Registrar handlers de errores fatales ────────────────────────────────
process.on('uncaughtException', function (err) {
  const ts = new Date().toISOString();
  process.stderr.write('[' + ts + '] [Strapi] uncaughtException:\n');
  process.stderr.write((err && err.stack) ? err.stack : String(err));
  process.stderr.write('\n');
  process.exit(1);
});

process.on('unhandledRejection', function (reason) {
  const ts = new Date().toISOString();
  process.stderr.write('[' + ts + '] [Strapi] unhandledRejection: ');
  process.stderr.write(
    (reason && reason.stack) ? reason.stack : String(reason)
  );
  process.stderr.write('\n');
  // No salir — Strapi puede recuperarse de rechazos no relacionados con el boot
});

// ── 3. Iniciar Strapi ────────────────────────────────────────────────────────
const strapiFactory = require('@strapi/strapi');

strapiFactory({ appDir: __dirname })
  .start()
  .then(function () {
    const ts = new Date().toISOString();
    process.stdout.write('[' + ts + '] [Strapi] Servidor iniciado correctamente.\n');
  })
  .catch(function (err) {
    const ts = new Date().toISOString();
    process.stderr.write('[' + ts + '] [Strapi] Error fatal al iniciar:\n');
    process.stderr.write((err && err.stack) ? err.stack : String(err));
    process.stderr.write('\n');
    process.exit(1);
  });
