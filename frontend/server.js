'use strict';

/**
 * server.js — Punto de entrada Next.js para Phusion Passenger (cPanel)
 *
 * process.chdir(__dirname) es obligatorio: Passenger puede arrancar desde
 * un directorio distinto al del proyecto.
 */

// ── 1. Fijar el directorio de trabajo ───────────────────────────────────────
process.chdir(__dirname);

// ── 2. Handler de errores no capturados ─────────────────────────────────────
process.on('uncaughtException', function (err) {
  process.stderr.write('[Next.js] uncaughtException: ' + ((err && err.stack) || String(err)) + '\n');
  process.exit(1);
});

process.on('unhandledRejection', function (reason) {
  process.stderr.write('[Next.js] unhandledRejection: ' + ((reason && reason.stack) || String(reason)) + '\n');
});

// ── 3. Configuración ─────────────────────────────────────────────────────────
const { createServer } = require('http');
const { parse }        = require('url');
const next             = require('next');

const dev      = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port     = parseInt(process.env.PORT || '3000', 10);

// ── 4. Iniciar Next.js ───────────────────────────────────────────────────────
const app    = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(function () {
    createServer(function (req, res) {
      try {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
      } catch (err) {
        process.stderr.write('[Next.js] Request handler error: ' + String(err) + '\n');
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    }).listen(port, hostname, function () {
      process.stdout.write(
        '[Next.js] Servidor listo en http://' + hostname + ':' + port +
        ' (NODE_ENV=' + (process.env.NODE_ENV || 'development') + ')\n'
      );
    });
  })
  .catch(function (err) {
    process.stderr.write('[Next.js] Error fatal al iniciar: ' + ((err && err.stack) || String(err)) + '\n');
    process.exit(1);
  });
