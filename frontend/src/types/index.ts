// ==========================================
// TIPOS GLOBALES DEL PROYECTO
// ==========================================

// --- Strapi Response Wrappers ---
export interface StrapiResponse<T> {
  data: StrapiData<T>;
  meta: StrapiMeta;
}

export interface StrapiListResponse<T> {
  data: StrapiData<T>[];
  meta: StrapiMeta;
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

// --- Home Page ---
export interface HomePage {
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  heroButtonLink: string;
  aboutTitle: string;
  aboutText: string;
  benefits: Benefit[];
  finalCtaTitle: string;
  finalCtaText: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// --- Service ---
export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  featured: boolean;
  order: number;
  seoTitle: string;
  seoDescription: string;
}

// --- Testimonial ---
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  active: boolean;
}

// --- Contact Info ---
export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  businessHours: string;
  mapEmbedUrl: string;
  introText: string;
}

// --- Contact Message (form submission) ---
export interface ContactMessagePayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

// --- Trabaja con Nosotros ---
export interface TrabajaConNosotros {
  titulo: string;
  descripcion: string;
  perfilesBuscados: string;
  emailPostulacion: string;
  activo: boolean;
  seoTitle: string;
  seoDescription: string;
}

// --- Configuración del Sitio ---
export interface ConfiguracionSitio {
  nombreEmpresa: string;
  slogan: string;
  colorPrimario: string;
}
