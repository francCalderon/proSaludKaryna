# 🏥 CuidadoEnfermería — Documentación Completa del Proyecto

> Sitio web corporativo de servicios de enfermería domiciliaria  
> Stack: **Next.js 14 + Strapi 4 + PostgreSQL**

---

## Índice

1. [Arquitectura del Proyecto](#1-arquitectura-del-proyecto)
2. [Estructura de Carpetas](#2-estructura-de-carpetas)
3. [Instalación Local — Backend (Strapi)](#3-instalación-local--backend-strapi)
4. [Instalación Local — Frontend (Next.js)](#4-instalación-local--frontend-nextjs)
5. [Configuración del CMS](#5-configuración-del-cms)
6. [Variables de Entorno](#6-variables-de-entorno)
7. [Despliegue en Producción](#7-despliegue-en-producción)
8. [Uso del Sitio y CMS](#8-uso-del-sitio-y-cms)
9. [Errores Comunes y Soluciones](#9-errores-comunes-y-soluciones)
10. [Mejoras Futuras](#10-mejoras-futuras)

---

## 1. Arquitectura del Proyecto

```
┌─────────────────────────────────────────────────────────────┐
│                     ARQUITECTURA HEADLESS                    │
├───────────────────────┬─────────────────────────────────────┤
│   FRONTEND (Vercel)   │        BACKEND (Railway/Render)      │
│                       │                                      │
│   Next.js 14          │   Strapi 4 (CMS + REST API)         │
│   App Router          │                                      │
│   TypeScript          │   PostgreSQL (DB administrada)       │
│   React Hook Form     │                                      │
│   Zod Validation      │   Uploads (local / Cloudinary)      │
│                       │                                      │
│   SSR + SSG + ISR     │   Panel Admin /admin                │
│   SEO Metadata        │   API REST /api/*                   │
│   API Routes          │   Permisos granulares               │
└───────────────────────┴─────────────────────────────────────┘
```

**Flujo de datos:**
1. Next.js realiza `fetch` server-side a la API de Strapi en tiempo de build/revalidación
2. Los datos se renderizan en el servidor (SSR/ISR) para máximo SEO y rendimiento
3. El formulario de contacto llama a `/api/contact` (API Route de Next.js), que luego hace POST a Strapi
4. Strapi guarda el mensaje en PostgreSQL y queda visible en el panel admin

---

## 2. Estructura de Carpetas

```
cuidado-enfermeria/
├── frontend/                         # Proyecto Next.js
│   ├── public/                       # Archivos estáticos (favicon, og-image)
│   ├── src/
│   │   ├── app/                      # App Router de Next.js
│   │   │   ├── layout.tsx            # Layout raíz con Header y Footer
│   │   │   ├── page.tsx              # Página de Inicio (/)
│   │   │   ├── not-found.tsx         # Página 404
│   │   │   ├── sitemap.ts            # Sitemap dinámico
│   │   │   ├── robots.ts             # Robots.txt
│   │   │   ├── api/
│   │   │   │   └── contact/
│   │   │   │       └── route.ts      # API Route formulario de contacto
│   │   │   ├── servicios/
│   │   │   │   ├── page.tsx          # Página /servicios
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Página /servicios/[slug]
│   │   │   └── contacto/
│   │   │       └── page.tsx          # Página /contacto
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx        # Navbar responsive
│   │   │   │   └── Footer.tsx        # Footer con links y contacto
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── ServicesSection.tsx (ServicesPreview + ServicesGrid)
│   │   │   │   ├── TestimonialsSection.tsx
│   │   │   │   ├── CTASection.tsx
│   │   │   │   └── ContactInfoSection.tsx
│   │   │   ├── forms/
│   │   │   │   └── ContactForm.tsx   # Formulario con validación Zod + RHF
│   │   │   └── ui/
│   │   │       └── index.tsx         # Button, SectionTitle, Card
│   │   ├── lib/
│   │   │   ├── strapi.ts             # Utilidades fetch + funciones por content type
│   │   │   └── fallback-data.ts      # Datos de ejemplo para desarrollo/demo
│   │   ├── types/
│   │   │   └── index.ts              # TypeScript types globales
│   │   └── styles/
│   │       └── globals.css           # Variables CSS, reset, tipografía
│   ├── .env.example
│   ├── next.config.js
│   ├── tsconfig.json
│   └── package.json
│
└── backend/                          # Proyecto Strapi
    ├── config/
    │   ├── admin.js                  # Configuración panel admin
    │   ├── database.js               # Conexión PostgreSQL (URL o variables)
    │   ├── middlewares.js            # CORS, Security headers
    │   ├── plugins.js                # Plugins habilitados
    │   └── server.js                 # Host, puerto, app keys
    ├── src/
    │   ├── index.js                  # Bootstrap y register hooks
    │   ├── api/
    │   │   ├── home-page/            # Single Type: Página de Inicio
    │   │   ├── service/              # Collection Type: Servicios
    │   │   ├── testimonial/          # Collection Type: Testimonios
    │   │   ├── contact-info/         # Single Type: Info de Contacto
    │   │   └── contact-message/      # Collection Type: Mensajes (con controller custom)
    │   └── components/
    │       └── shared/
    │           └── benefit.json      # Componente reutilizable: Beneficio
    ├── .env.example
    └── package.json
```

---

## 3. Instalación Local — Backend (Strapi)

### Requisitos previos
- Node.js >= 18 (recomendado 18 LTS o 20 LTS)
- PostgreSQL >= 13 instalado y corriendo
- npm >= 8

### Paso a paso

```bash
# 1. Ir al directorio del backend
cd cuidado-enfermeria/backend

# 2. Instalar dependencias
npm install

# 3. Crear base de datos en PostgreSQL
psql -U postgres -c "CREATE DATABASE cuidado_enfermeria;"

# 4. Crear archivo de variables de entorno
cp .env.example .env

# 5. Editar .env con tus credenciales de base de datos
# Cambiar DATABASE_PASSWORD, y generar los APP_KEYS y secrets:
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
# Ejecutar ese comando 5 veces para: APP_KEYS (4 claves), API_TOKEN_SALT,
# ADMIN_JWT_SECRET, TRANSFER_TOKEN_SALT, JWT_SECRET

# 6. Iniciar Strapi en modo desarrollo
npm run develop
```

Strapi estará disponible en: `http://localhost:1337`  
Panel admin en: `http://localhost:1337/admin`

La primera vez, Strapi te pedirá crear un usuario administrador.

---

## 4. Instalación Local — Frontend (Next.js)

### Requisitos previos
- Node.js >= 18
- Strapi corriendo en `http://localhost:1337`

### Paso a paso

```bash
# 1. Ir al directorio del frontend
cd cuidado-enfermeria/frontend

# 2. Instalar dependencias
npm install

# 3. Crear archivo de variables de entorno
cp .env.example .env.local

# 4. Editar .env.local:
# NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# STRAPI_API_TOKEN=<token generado en Strapi admin>
# NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 5. Iniciar Next.js en modo desarrollo
npm run dev
```

El sitio estará disponible en: `http://localhost:3000`

> **Nota:** Si Strapi no está disponible, el sitio usará los datos de `fallback-data.ts` automáticamente. Esto es útil para desarrollo del frontend sin necesitar el backend.

---

## 5. Configuración del CMS

### 5.1 Crear usuario admin
Al iniciar Strapi por primera vez (`npm run develop`), acceder a `http://localhost:1337/admin` y completar el formulario de registro.

### 5.2 Generar API Token
1. En el panel admin: **Settings → API Tokens → Create new API Token**
2. Nombre: `Frontend Token`
3. Token type: `Read-only` (para las lecturas públicas) o `Custom`
4. Si usas Custom, habilitar:
   - `find` y `findOne` para: `home-page`, `service`, `testimonial`, `contact-info`
   - `create` para: `contact-message`
5. Copiar el token y pegarlo en `STRAPI_API_TOKEN` del frontend

### 5.3 Configurar permisos públicos (alternativa sin token)
1. **Settings → Users & Permissions Plugin → Roles → Public**
2. Habilitar los siguientes permisos:
   - `Home-page`: `find`
   - `Service`: `find`, `findOne`
   - `Testimonial`: `find`
   - `Contact-info`: `find`
   - `Contact-message`: `create` (**solo create, nunca find/delete públicos**)
3. Guardar cambios

### 5.4 Poblar contenido inicial

#### Página de Inicio
1. **Content Manager → Home Page → Edit**
2. Completar todos los campos
3. En la sección "Benefits", agregar 4 beneficios con `Add component`
4. Click en **Publish**

#### Servicios
1. **Content Manager → Services → Create new entry**
2. Completar: Title, Slug (auto-generado), Short Description, Full Description, Icon Name, Featured, Order
3. **Icon names válidos:** `users`, `pill`, `stethoscope`, `handshake`, `home`, `accessibility`, `bandage`
4. Marcar `featured: true` en los 3 servicios principales para que aparezcan en el Home
5. Click en **Publish**

Servicios a crear (en orden):
| # | Título | Slug | Icon | Featured |
|---|--------|------|------|----------|
| 1 | Cuidado de adultos mayores | cuidado-adultos-mayores | users | ✅ |
| 2 | Administración de medicamentos | administracion-medicamentos | pill | ✅ |
| 3 | Curaciones y control clínico | curaciones-control-clinico | stethoscope | ✅ |
| 4 | Acompañamiento domiciliario | acompanamiento-domiciliario | handshake | ❌ |
| 5 | Atención postoperatoria | atencion-postoperatoria | stethoscope | ❌ |
| 6 | Apoyo a pacientes con dependencia | apoyo-pacientes-dependencia | accessibility | ❌ |

#### Testimonios
1. **Content Manager → Testimonials → Create new entry**
2. Campos: Name, Role, Quote, Rating (1-5), Active (true)

#### Información de Contacto
1. **Content Manager → Contact Info → Edit**
2. Completar: email, phone, whatsapp, address, businessHours, introText
3. Para el mapa: obtener URL de embed desde Google Maps → Share → Embed a map → Copy HTML → usar solo la URL del `src`

---

## 6. Variables de Entorno

### Frontend (`frontend/.env.local`)

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | URL pública del frontend | `https://cuidadoenfermeria.cl` |
| `NEXT_PUBLIC_STRAPI_URL` | URL del backend Strapi | `https://cms.railway.app` |
| `STRAPI_API_TOKEN` | Token de API de Strapi (server-only) | `abc123...` |
| `STRAPI_HOST` | Hostname de Strapi para imágenes | `cms.railway.app` |

### Backend (`backend/.env`)

| Variable | Descripción | Cómo generar |
|----------|-------------|--------------|
| `HOST` | Host del servidor | `0.0.0.0` |
| `PORT` | Puerto del servidor | `1337` |
| `APP_KEYS` | 4 claves base64 separadas por coma | `node -e "..."` × 4 |
| `API_TOKEN_SALT` | Salt para tokens de API | `node -e "require('crypto').randomBytes(32).toString('base64')" ` |
| `ADMIN_JWT_SECRET` | Secret JWT del admin | Igual que arriba |
| `TRANSFER_TOKEN_SALT` | Salt para transfer tokens | Igual que arriba |
| `JWT_SECRET` | Secret JWT general | Igual que arriba |
| `DATABASE_URL` | URL completa de PostgreSQL (Railway) | `postgresql://user:pass@host/db` |
| `CORS_ORIGIN` | URL del frontend (para CORS) | `https://cuidadoenfermeria.cl` |

**Generar todos los secrets de una vez:**
```bash
node -e "
const crypto = require('crypto');
const rand = () => crypto.randomBytes(32).toString('base64');
console.log('APP_KEYS=' + [rand(),rand(),rand(),rand()].join(','));
console.log('API_TOKEN_SALT=' + rand());
console.log('ADMIN_JWT_SECRET=' + rand());
console.log('TRANSFER_TOKEN_SALT=' + rand());
console.log('JWT_SECRET=' + rand());
"
```

---

## 7. Despliegue en Producción

### 7.1 Backend Strapi en Railway

```bash
# 1. Crear cuenta en railway.app
# 2. Instalar Railway CLI
npm install -g @railway/cli
railway login

# 3. Crear nuevo proyecto desde el directorio backend
cd cuidado-enfermeria/backend
railway init

# 4. Agregar base de datos PostgreSQL
# En el dashboard de Railway: New → Database → PostgreSQL
# Railway creará automáticamente DATABASE_URL

# 5. Configurar variables de entorno en Railway Dashboard
# Settings → Variables → Agregar todas las variables de .env.example
# (Railway ya setea DATABASE_URL automáticamente si agregaste PostgreSQL)

# 6. Desplegar
railway up

# 7. Obtener la URL pública
# En Railway Dashboard: Settings → Networking → Generate Domain
# Ejemplo: https://cuidadoenfermeria-cms.up.railway.app
```

**Variables a configurar en Railway:**
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=clave1,clave2,clave3,clave4
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
CORS_ORIGIN=https://tu-frontend.vercel.app
NODE_ENV=production
```

> Railway automáticamente inyecta `DATABASE_URL` cuando conectas una base de datos PostgreSQL al proyecto.

### 7.2 Frontend Next.js en Vercel

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Desde el directorio frontend
cd cuidado-enfermeria/frontend
vercel

# O conectar el repositorio de GitHub directamente en vercel.com
# Vercel detecta automáticamente que es un proyecto Next.js
```

**Variables de entorno en Vercel Dashboard:**
```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
NEXT_PUBLIC_STRAPI_URL=https://cuidadoenfermeria-cms.up.railway.app
STRAPI_API_TOKEN=<token_generado_en_strapi>
STRAPI_HOST=cuidadoenfermeria-cms.up.railway.app
```

### 7.3 Configuración post-despliegue

**En Strapi (producción):**
1. Acceder al admin: `https://tu-cms.railway.app/admin`
2. Crear usuario administrador
3. Generar API Token con permisos de lectura
4. Configurar permisos públicos (ver sección 5.3)
5. Poblar todo el contenido

**En Next.js (producción):**
1. Actualizar `STRAPI_API_TOKEN` con el token generado
2. Actualizar `NEXT_PUBLIC_STRAPI_URL` con la URL de Railway
3. Hacer redeploy en Vercel

**Actualizar CORS en Strapi:**
Asegurarse que `CORS_ORIGIN` en Railway incluya la URL de Vercel:
```
CORS_ORIGIN=https://tu-frontend.vercel.app
```

---

## 8. Uso del Sitio y CMS

### Navegar el sitio
- `/` — Inicio: Hero, Quiénes somos, Servicios destacados, Testimonios, CTA
- `/servicios` — Listado completo de todos los servicios
- `/servicios/[slug]` — Detalle de cada servicio (ej: `/servicios/cuidado-adultos-mayores`)
- `/contacto` — Formulario de contacto + información de contacto

### Editar contenido desde el CMS
1. Acceder a `https://tu-cms.railway.app/admin`
2. Ir a **Content Manager**
3. Seleccionar el tipo de contenido a editar
4. Modificar los campos y hacer click en **Save** (luego **Publish** si tiene borrador)

**Sin tocar código se puede cambiar:**
- Todo el texto del Hero (título, subtítulo, botón)
- Texto de "Quiénes somos"
- Beneficios (agregar, quitar, modificar)
- CTA final
- Todos los servicios (título, descripción, orden, imagen)
- Testimonios (agregar/quitar/activar)
- Datos de contacto (teléfono, email, horario, dirección, mapa)

### Ver mensajes de contacto recibidos
1. En Strapi admin: **Content Manager → Contact Messages**
2. Los mensajes llegan con `status: new`
3. Cambiar status a `read`, `replied`, o `archived` según corresponda

### Agregar un nuevo servicio
1. Content Manager → Services → **Create new entry**
2. Completar: Title (el slug se genera automático), descriptions, iconName, featured, order
3. Click **Save** → **Publish**
4. Aparecerá automáticamente en `/servicios` y en `/servicios/[slug]`

---

## 9. Errores Comunes y Soluciones

### ❌ "Failed to fetch" en el frontend
**Causa:** Strapi no está corriendo o la URL es incorrecta  
**Solución:** Verificar `NEXT_PUBLIC_STRAPI_URL` y que Strapi esté activo. El sitio usará datos de fallback automáticamente.

### ❌ Error 403 al acceder a la API
**Causa:** Permisos no configurados en Strapi  
**Solución:** Settings → Users & Permissions → Public → habilitar `find` para los content types necesarios, o verificar que el `STRAPI_API_TOKEN` tenga los permisos correctos.

### ❌ Imágenes no cargan en producción
**Causa:** Dominio de Strapi no configurado en `next.config.js`  
**Solución:** Agregar el hostname de Strapi en producción a `remotePatterns` en `next.config.js` y hacer redeploy.

### ❌ Error de CORS en producción
**Causa:** La URL del frontend no está en `CORS_ORIGIN` de Strapi  
**Solución:** En Railway, agregar la URL de Vercel en `CORS_ORIGIN` y hacer redeploy.

### ❌ DATABASE_URL connection refused en Railway
**Causa:** La base de datos PostgreSQL no está vinculada al servicio  
**Solución:** En Railway Dashboard → tu proyecto → agregar el servicio PostgreSQL y asegurarse de que `DATABASE_URL` aparezca en las variables del proyecto Strapi.

### ❌ "Cannot find module 'pg-connection-string'" en Strapi
**Causa:** Dependencia faltante  
**Solución:**
```bash
cd backend
npm install pg-connection-string
```

### ❌ El formulario envía pero no llega a Strapi
**Causa:** `STRAPI_API_TOKEN` no tiene permiso de `create` en `contact-messages`  
**Solución:** En Strapi → Settings → API Tokens → editar el token → agregar permiso `create` para `Contact-message`. O configurar acceso público para `create` en Users & Permissions.

### ❌ Build de Next.js falla con error de tipos
**Causa:** TypeScript strict mode  
**Solución:** Verificar que los componentes tengan todas las props tipadas. Los datos de Strapi pueden ser null; usar el operador `?.` y valores por defecto.

---

## 10. Mejoras Futuras

### Corto plazo
- [ ] **Email de notificación:** Al recibir un mensaje de contacto, enviar email al administrador usando Nodemailer o SendGrid desde la API route
- [ ] **reCAPTCHA v3:** Agregar Google reCAPTCHA al formulario de contacto para mayor protección anti-spam
- [ ] **WhatsApp directo:** Botón flotante de WhatsApp en todas las páginas

### Mediano plazo
- [ ] **Blog/Artículos:** Nuevo content type `Article` en Strapi con editor rico, para publicar contenido de salud y mejorar SEO
- [ ] **Cloudinary:** Integrar Cloudinary como proveedor de imágenes de Strapi para mejor gestión de uploads en producción
- [ ] **Página de equipo:** Sección con perfiles del equipo de enfermería
- [ ] **Sistema de citas:** Integración con Calendly o formulario de reserva de visita domiciliaria

### Largo plazo
- [ ] **Portal de pacientes:** Área privada donde pacientes puedan ver su historial de servicios
- [ ] **Multilenguaje:** Habilitar i18n en Strapi y Next.js para versión en inglés
- [ ] **Analíticas:** Integrar Google Analytics 4 o Plausible
- [ ] **PWA:** Convertir el sitio en Progressive Web App para mejor experiencia móvil
- [ ] **Tests:** Agregar tests con Jest/Vitest para componentes clave y la API route de contacto

---

## Comandos de referencia rápida

```bash
# DESARROLLO
cd backend && npm run develop          # Strapi en modo dev (hot-reload)
cd frontend && npm run dev             # Next.js en modo dev

# PRODUCCIÓN
cd backend && npm run build && npm start   # Build y start Strapi
cd frontend && npm run build && npm start  # Build y start Next.js

# UTILIDADES
# Generar secrets para Strapi:
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Ver logs en Railway:
railway logs

# Redeploy frontend en Vercel:
cd frontend && vercel --prod
```

---

*Proyecto desarrollado con Next.js 14, Strapi 4 y PostgreSQL.*  
*Versión: 1.0.0 — Lista para producción.*
