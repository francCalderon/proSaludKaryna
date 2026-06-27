// src/api/contact-message/controllers/contact-message.js
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::contact-message.contact-message',
  ({ strapi }) => ({
    async create(ctx) {
      // Sanitizar entrada antes de guardar
      const { name, email, phone, subject, message } = ctx.request.body?.data || {};

      // Validaciones básicas server-side
      if (!name || !email || !message) {
        return ctx.badRequest('Faltan campos obligatorios: name, email, message');
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return ctx.badRequest('Formato de correo inválido');
      }

      if (message.length < 20) {
        return ctx.badRequest('El mensaje debe tener al menos 20 caracteres');
      }

      // Sanitización: eliminar caracteres potencialmente peligrosos
      const sanitize = (str) =>
        String(str || '').replace(/[<>]/g, '').trim().substring(0, 2000);

      ctx.request.body = {
        data: {
          name: sanitize(name).substring(0, 100),
          email: email.toLowerCase().trim(),
          phone: sanitize(phone).substring(0, 30),
          ...(subject ? { subject: sanitize(subject).substring(0, 200) } : {}),
          message: sanitize(message),
          status: 'new',
        },
      };

      // Llamar al controlador base
      const response = await super.create(ctx);
      return response;
    },
  })
);
