// ==========================================
// DATOS DE FALLBACK — Prosalud SpA
// Útil para desarrollo inicial o cuando Strapi no responde
// ==========================================

import type { HomePage, Service, Testimonial, ContactInfo, TrabajaConNosotros } from '@/types';

export const fallbackHomePage: HomePage = {
  heroTitle: 'Cuidado de paciente en domicilio',
  heroSubtitle:
    'Servicios de enfermería y cuidado domiciliario para adultos mayores y pacientes postoperatorios. Profesionales y personal certificado, atención personalizada y el acompañamiento que su familia necesita.',
  heroButtonText: 'Solicitar información',
  heroButtonLink: '/contacto',
  aboutTitle: 'Quiénes somos',
  aboutText:
    'Somos un equipo de técnicos en enfermería y cuidadoras con capacitación y certificación, comprometidos con brindar atención domiciliaria de calidad humana y cercana. Contamos con 7 años de experiencia acompañando a personas y familias en sus procesos de cuidado, entregando apoyo profesional directamente en el hogar de nuestros pacientes.',
  benefits: [
    {
      id: 1,
      icon: 'heart',
      title: 'Atención humanizada',
      description: 'Tratamos a cada paciente con la calidez y respeto que se merece.',
    },
    {
      id: 2,
      icon: 'clock',
      title: 'Disponibilidad 24/7',
      description: 'Estamos disponibles cuando más nos necesita.',
    },
    {
      id: 3,
      icon: 'home',
      title: 'Cuidado en casa',
      description: 'El paciente se recupera mejor en su propio entorno y junto a su familia.',
    },
  ],
  finalCtaTitle: '¿Necesita cuidado para un ser querido?',
  finalCtaText:
    'Contáctenos hoy y le responderemos a la brevedad. Evaluamos su caso y le ofrecemos la mejor solución para su familia.',
  seoTitle: 'Prosalud SpA | Enfermería y Cuidado Domiciliario',
  seoDescription:
    'Servicios de enfermería y cuidado domiciliario para adultos mayores y pacientes postoperatorios. Personal certificado en Viña del Mar.',
};

export const fallbackServices: Service[] = [
  {
    title: 'Cuidado de paciente en domicilio',
    slug: 'cuidado-paciente-domicilio',
    shortDescription:
      'Acompañamiento integral para pacientes en su hogar, con atención personalizada a sus necesidades físicas y emocionales.',
    fullDescription:
      'Ofrecemos cuidado domiciliario personalizado para pacientes que requieren asistencia en su vida diaria. Nuestros profesionales brindan apoyo en actividades básicas, control de signos vitales, administración de medicamentos y compañía constante. Trabajamos en coordinación con la familia para asegurar el máximo bienestar del paciente.',
    iconName: 'users',
    featured: true,
    order: 1,
    seoTitle: 'Cuidado de Paciente en Domicilio — Prosalud SpA',
    seoDescription: 'Servicio profesional de cuidado domiciliario en Viña del Mar.',
  },
  {
    title: 'Toma de muestras sanguíneas',
    slug: 'toma-muestras-sanguineas',
    shortDescription:
      'Extracción de muestras de sangre en la comodidad del hogar, con traslado al laboratorio correspondiente.',
    fullDescription:
      'Realizamos la toma de muestras sanguíneas directamente en el domicilio del paciente, evitando el desplazamiento a centros de salud. Contamos con los materiales y protocolos adecuados para garantizar la calidad de la muestra y la seguridad del paciente.',
    iconName: 'stethoscope',
    featured: true,
    order: 2,
    seoTitle: 'Toma de Muestras Sanguíneas a Domicilio',
    seoDescription: 'Extracción de sangre en el hogar por técnicos certificados en Viña del Mar.',
  },
  {
    title: 'Curaciones simples y avanzadas',
    slug: 'curaciones-simples-avanzadas',
    shortDescription:
      'Curación de heridas, manejo de úlceras y control de heridas quirúrgicas directamente en el domicilio.',
    fullDescription:
      'Realizamos curaciones simples y avanzadas, manejo de úlceras por presión, control de heridas quirúrgicas y monitoreo de signos vitales. Nuestro equipo está capacitado para detectar complicaciones y coordinar oportunamente con el médico tratante.',
    iconName: 'bandage',
    featured: true,
    order: 3,
    seoTitle: 'Curaciones a Domicilio — Prosalud SpA',
    seoDescription: 'Curación de heridas simples y avanzadas por personal certificado.',
  },
  {
    title: 'Instalación de sonda vesical',
    slug: 'instalacion-sonda-vesical',
    shortDescription:
      'Instalación y control de sonda vesical por personal certificado, con los protocolos de higiene y seguridad necesarios.',
    fullDescription:
      'Nuestros técnicos en enfermería realizan la instalación, control y retiro de sondas vesicales en el domicilio del paciente, siguiendo estrictamente los protocolos de higiene y seguridad para minimizar el riesgo de infecciones.',
    iconName: 'pill',
    featured: false,
    order: 4,
    seoTitle: 'Instalación Sonda Vesical a Domicilio',
    seoDescription: 'Instalación de sonda vesical por técnicos certificados en Viña del Mar.',
  },
  {
    title: 'Instalación de sonda nasogástrica',
    slug: 'instalacion-sonda-nasogastrica',
    shortDescription:
      'Instalación de sonda nasogástrica para alimentación enteral o aspiración gástrica, con seguimiento profesional.',
    fullDescription:
      'Realizamos la instalación y control de sondas nasogástricas para pacientes que requieren alimentación enteral o aspiración gástrica. Brindamos capacitación a la familia para el manejo seguro en el hogar.',
    iconName: 'handshake',
    featured: false,
    order: 5,
    seoTitle: 'Instalación Sonda Nasogástrica a Domicilio',
    seoDescription: 'Sonda nasogástrica para alimentación enteral por personal certificado.',
  },
  {
    title: 'Postura de aros',
    slug: 'postura-de-aros',
    shortDescription:
      'Instalación de aros o aretes con técnica aséptica para pacientes que requieren este procedimiento médico.',
    fullDescription:
      'Realizamos la postura de aros con técnica aséptica y materiales esterilizados, siguiendo los protocolos médicos correspondientes para garantizar la seguridad y comodidad del paciente.',
    iconName: 'accessibility',
    featured: false,
    order: 6,
    seoTitle: 'Postura de Aros a Domicilio — Prosalud SpA',
    seoDescription: 'Postura de aros con técnica aséptica por técnicos certificados.',
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    name: 'María González',
    role: 'Hija de paciente',
    quote:
      'El equipo de Prosalud SpA ha sido un apoyo incondicional para mi madre. Su profesionalismo y calidez nos dieron tranquilidad en un momento muy difícil. Los recomiendo con total confianza.',
    rating: 5,
    active: true,
  },
  {
    name: 'Roberto Fernández',
    role: 'Paciente postoperatorio',
    quote:
      'Mi recuperación fue mucho más rápida gracias al seguimiento diario que recibí. La técnico siempre estuvo atenta, puntual y muy bien preparada. Excelente servicio.',
    rating: 5,
    active: true,
  },
  {
    name: 'Carmen Vidal',
    role: 'Familiar de adulto mayor',
    quote:
      'Gracias a este servicio, mi padre puede vivir con dignidad en su hogar. El equipo es respetuoso, empático y muy competente. Es la mejor decisión que tomamos.',
    rating: 5,
    active: true,
  },
];

export const fallbackContactInfo: ContactInfo = {
  email: 'procsalud49@gmail.com',
  phone: '+56 9 8363 2443',
  whatsapp: '+56 9 8363 2443',
  address: 'Calle Libertad 63, Oficina 401, Viña del Mar',
  businessHours: 'Atención 24/7',
  mapEmbedUrl: '',
  introText:
    'Estamos disponibles las 24 horas para responder sus consultas y coordinar la atención que su familia necesita.',
};

export const fallbackTrabajaConNosotros: TrabajaConNosotros = {
  titulo: '¿Quieres formar parte de nuestro equipo?',
  descripcion:
    'En Prosalud SpA creemos que el cuidado de calidad comienza con un equipo humano comprometido. Si eres Técnico en Enfermería (TENS), cuidador(a) certificado(a) o cuentas con experiencia en atención domiciliaria, te invitamos a formar parte de nuestro equipo. Buscamos personas responsables, empáticas y con vocación de servicio para brindar atención profesional y cercana a nuestros pacientes.',
  perfilesBuscados:
    'Técnico en Enfermería (TENS)\nCuidador(a) certificado(a)\nPersonal con experiencia en atención domiciliaria',
  emailPostulacion: 'seleccion.prosalud@gmail.com',
  activo: true,
  seoTitle: 'Trabaja con Nosotros | Prosalud SpA',
  seoDescription:
    'Únete al equipo de Prosalud SpA. Buscamos técnicos en enfermería y cuidadores certificados en Viña del Mar.',
};
