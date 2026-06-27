// ==========================================
// UTILIDADES DE FETCH - STRAPI API
// ==========================================

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  populate?: string | string[] | Record<string, unknown>;
  filters?: Record<string, unknown>;
  sort?: string[];
  pagination?: { page?: number; pageSize?: number };
  cache?: RequestCache;
  revalidate?: number;
}

function buildQueryString(options: FetchOptions): string {
  const params = new URLSearchParams();

  if (options.populate) {
    if (typeof options.populate === 'string') {
      params.set('populate', options.populate);
    } else if (Array.isArray(options.populate)) {
      options.populate.forEach((p) => params.append('populate[]', p));
    }
  }

  if (options.sort) {
    options.sort.forEach((s) => params.append('sort[]', s));
  }

  if (options.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      params.set(`filters[${key}][$eq]`, String(value));
    });
  }

  if (options.pagination) {
    if (options.pagination.page) params.set('pagination[page]', String(options.pagination.page));
    if (options.pagination.pageSize) params.set('pagination[pageSize]', String(options.pagination.pageSize));
  }

  return params.toString();
}

export async function strapiGet<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const query = buildQueryString(options);
  const url = `${STRAPI_URL}/api/${endpoint}${query ? `?${query}` : ''}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const fetchOptions: RequestInit = {
    headers,
    cache: options.cache || 'no-store',
  };

  if (options.revalidate !== undefined) {
    fetchOptions.next = { revalidate: options.revalidate };
    delete fetchOptions.cache;
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    throw new Error(`Strapi fetch error: ${res.status} ${res.statusText} for ${url}`);
  }

  return res.json();
}

export async function strapiPost<T>(
  endpoint: string,
  data: unknown
): Promise<T> {
  const url = `${STRAPI_URL}/api/${endpoint}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data }),
    cache: 'no-store',
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      error?.error?.message || `Strapi POST error: ${res.status}`
    );
  }

  return res.json();
}

// ---- Funciones específicas por content type ----

import type {
  StrapiResponse,
  StrapiListResponse,
  HomePage,
  Service,
  Testimonial,
  ContactInfo,
  ContactMessagePayload,
  TrabajaConNosotros,
  ConfiguracionSitio,
} from '@/types';

export async function getHomePage(): Promise<HomePage | null> {
  try {
    const data = await strapiGet<StrapiResponse<HomePage>>('home-page', {
      populate: ['benefits'],
      revalidate: 60,
    });
    return data?.data?.attributes ?? null;
  } catch (e) {
    console.error('Error fetching home page:', e);
    return null;
  }
}

export async function getServices(featuredOnly = false): Promise<Service[]> {
  try {
    const options: FetchOptions = {
      sort: ['order:asc'],
      revalidate: 60,
    };
    if (featuredOnly) {
      options.filters = { featured: true };
    }
    const data = await strapiGet<StrapiListResponse<Service>>('services', options);
    return data?.data?.map((item) => item.attributes) ?? [];
  } catch (e) {
    console.error('Error fetching services:', e);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const data = await strapiGet<StrapiListResponse<Service>>('services', {
      filters: { slug },
      revalidate: 60,
    });
    return data?.data?.[0]?.attributes ?? null;
  } catch (e) {
    console.error('Error fetching service:', e);
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await strapiGet<StrapiListResponse<Testimonial>>('testimonials', {
      filters: { active: true },
      revalidate: 300,
    });
    return data?.data?.map((item) => item.attributes) ?? [];
  } catch (e) {
    console.error('Error fetching testimonials:', e);
    return [];
  }
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  try {
    const data = await strapiGet<StrapiResponse<ContactInfo>>('contact-info', {
      revalidate: 300,
    });
    return data?.data?.attributes ?? null;
  } catch (e) {
    console.error('Error fetching contact info:', e);
    return null;
  }
}

export async function submitContactMessage(payload: ContactMessagePayload) {
  return strapiPost('contact-messages', payload);
}

export async function getTrabajaConNosotros(): Promise<TrabajaConNosotros | null> {
  try {
    const data = await strapiGet<StrapiResponse<TrabajaConNosotros>>('trabaja-con-nosotros', {
      revalidate: 300,
    });
    return data?.data?.attributes ?? null;
  } catch (e) {
    console.error('Error fetching trabaja-con-nosotros:', e);
    return null;
  }
}

export async function getConfiguracionSitio(): Promise<ConfiguracionSitio | null> {
  try {
    const data = await strapiGet<StrapiResponse<ConfiguracionSitio>>('configuracion-sitio', {
      revalidate: 3600,
    });
    return data?.data?.attributes ?? null;
  } catch (e) {
    console.error('Error fetching configuracion-sitio:', e);
    return null;
  }
}
