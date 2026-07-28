# DEPLOY.md — Guía de Despliegue en Producción

**Proyecto:** Prosalud SpA  
**Stack:** Next.js · Strapi 4 · MySQL · cPanel + Phusion Passenger  
**Frontend:** https://procsalud.cl  
**Backend:**  https://api.procsalud.cl

---

## Índice

1. [Prerequisitos](#1-prerequisitos)
2. [Primera instalación](#2-primera-instalación)
   - [A. Configurar MySQL en cPanel](#a-configurar-mysql-en-cpanel)
   - [B. Clonar el repositorio](#b-clonar-el-repositorio)
   - [C. Configurar Strapi](#c-configurar-strapi)
   - [D. Configurar Next.js](#d-configurar-nextjs)
   - [E. Crear apps en cPanel Setup Node.js App](#e-crear-apps-en-cpanel-setup-nodejs-app)
   - [F. SSL y subdominios](#f-ssl-y-subdominios)
   - [G. Inicializar Strapi](#g-inicializar-strapi)
3. [Actualización (git pull)](#3-actualización-git-pull)
4. [Rollback](#4-rollback)
5. [Troubleshooting](#5-troubleshooting)
6. [Variables de entorno de referencia](#6-variables-de-entorno-de-referencia)

---

## 1. Prerequisitos

| Requisito | Valor requerido |
|-----------|----------------|
| Node.js   | 20.x (cPanel Setup Node.js App) |
| npm       | ≥ 9.x |
| MySQL     | ≥ 5.7 / MariaDB ≥ 10.4 |
| cPanel    | Con Phusion Passenger habilitado |
| Git       | Disponible en terminal SSH |

Verificar en la terminal SSH de cPanel:

```bash
node --version   # debe mostrar v20.x.x
npm --version
git --version
mysql --version
```

---

## 2. Primera instalación

### A. Configurar MySQL en cPanel

1. cPanel → **Bases de datos MySQL**
2. **Crear base de datos:** `prosalud` → quedará como `asitlpen_prosalud`
3. **Crear usuario:** `strapi` → quedará como `asitlpen_strapi` (guardar la contraseña)
4. **Asignar usuario a BD:** usuario `asitlpen_strapi` + BD `asitlpen_prosalud` → **Todos los privilegios**
5. Verificar en phpMyAdmin que la BD existe y está vacía (Strapi crea las tablas al arrancar)

### B. Clonar el repositorio

```bash
# Crear directorio de trabajo
mkdir -p ~/apps
cd ~/apps

# Clonar (si el repo es privado, usar token personal de GitHub)
git clone https://github.com/francCalderon/proSaludKaryna.git prosalud

# Verificar estructura
ls prosalud/
# Debe mostrar: backend/  frontend/  DEPLOY.md  .gitignore
```

### C. Configurar Strapi

```bash
cd ~/apps/prosalud/backend

# Instalar dependencias de producción
npm install --production

# Crear archivo de entorno
cp .env.example .env
nano .env   # completar los valores indicados abajo
```

**Contenido del `backend/.env` en producción:**

```ini
HOST=0.0.0.0
PORT=1337
PUBLIC_URL=https://api.procsalud.cl
NODE_ENV=production

# Generar cada valor con:
# node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
APP_KEYS=BASE64_1,BASE64_2,BASE64_3,BASE64_4
API_TOKEN_SALT=BASE64_UNICO
ADMIN_JWT_SECRET=BASE64_UNICO
TRANSFER_TOKEN_SALT=BASE64_UNICO
JWT_SECRET=BASE64_UNICO

DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=asitlpen_prosalud
DATABASE_USERNAME=asitlpen_strapi
DATABASE_PASSWORD=CONTRASEÑA_MYSQL

CORS_ORIGIN=https://procsalud.cl
NEXT_PUBLIC_SITE_URL=https://procsalud.cl
```

```bash
# Restringir permisos del .env (solo lectura para el propietario)
chmod 600 ~/apps/prosalud/backend/.env

# Crear directorio de uploads
mkdir -p ~/apps/prosalud/backend/public/uploads
chmod 775 ~/apps/prosalud/backend/public/uploads

# Compilar el panel de administración de Strapi
NODE_ENV=production npm run build
```

### D. Configurar Next.js

> **IMPORTANTE:** El servidor **NUNCA compila** Next.js. La carpeta `.next/` viene pre-compilada
> desde el repositorio (compilada localmente en Windows con `npm run build`). El servidor solo
> instala dependencias de Node y sirve la build ya construida.

```bash
cd ~/apps/prosalud/frontend

# Instalar SOLO dependencias de producción (no devDependencies como eslint/typescript)
npm install --production

# Crear archivo de entorno
cp .env.example .env.local
nano .env.local   # completar con los valores de producción
```

**Contenido del `frontend/.env.local` en producción:**

```ini
NEXT_PUBLIC_SITE_URL=https://procsalud.cl
NEXT_PUBLIC_STRAPI_URL=https://api.procsalud.cl
STRAPI_API_TOKEN=TOKEN_GENERADO_EN_PASO_G
STRAPI_HOST=api.procsalud.cl
```

> **Nota:** `STRAPI_API_TOKEN` se genera en el Paso G. Usar un token placeholder la primera vez y actualizar después.

```bash
# Verificar que la build pre-compilada existe
ls .next/BUILD_ID   # debe mostrar un hash
# Si no existe, alguien olvidó hacer commit del .next/ — ver sección 3B.
```

### E. Crear apps en cPanel Setup Node.js App

#### App 1 — Strapi (backend)

| Campo | Valor |
|-------|-------|
| Node.js version | **20.x** |
| Application mode | **Production** |
| Application root | `apps/prosalud/backend` |
| Application URL | `api.procsalud.cl` |
| **Application startup file** | **`app.js`** |

Variables de entorno adicionales en el panel:

| Variable | Valor |
|----------|-------|
| `NODE_ENV` | `production` |

→ Clic en **Create** → **Run NPM Install** (si aparece) → **Start App**

#### App 2 — Next.js (frontend)

| Campo | Valor |
|-------|-------|
| Node.js version | **20.x** |
| Application mode | **Production** |
| Application root | `apps/prosalud/frontend` |
| Application URL | `procsalud.cl` |
| **Application startup file** | **`server.js`** |

Variables de entorno adicionales:

| Variable | Valor |
|----------|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |

→ Clic en **Create** → **Start App**

### F. SSL y subdominios

1. cPanel → **Subdominios** → crear `api` en `procsalud.cl`
2. cPanel → **SSL/TLS** → **Let's Encrypt** → instalar en `procsalud.cl` y `api.procsalud.cl`
3. Verificar: `https://procsalud.cl` y `https://api.procsalud.cl` deben cargar con candado verde

### G. Inicializar Strapi

1. Abrir `https://api.procsalud.cl/admin` en el navegador
2. Registrar el primer usuario administrador
3. **Configurar permisos públicos:** Settings → Users & Permissions → Roles → Public

   | Endpoint | Permisos |
   |----------|---------|
   | `home-page` | `find` |
   | `services` | `find`, `findOne` |
   | `testimonials` | `find` |
   | `contact-info` | `find` |
   | `trabaja-con-nosotros` | `find` |
   | `configuracion-sitio` | `find` |
   | `contact-messages` | `create` |

4. **Generar API Token:** Settings → API Tokens → Create → Read-only → Unlimited
5. Copiar el token y actualizar `frontend/.env.local`:
   ```ini
   STRAPI_API_TOKEN=token_copiado_aqui
   ```
6. Actualizar `frontend/.env.local` con el nuevo token y reiniciar el frontend:
   ```bash
   # cPanel → Setup Node.js App → frontend → Restart App
   # (No es necesario recompilar — .next/ ya está en git)
   ```

---

## 3. Actualización (git pull)

### A. Flujo estándar (cambios de contenido o código)

**Paso 1 — Compilar localmente en Windows** (antes de hacer push):

```bash
# En tu máquina Windows, dentro de frontend/
set NODE_ENV=production
set NEXT_PUBLIC_STRAPI_URL=https://api.procsalud.cl
set STRAPI_HOST=api.procsalud.cl
npm run build

# Verificar que compiló correctamente (debe mostrar las páginas generadas)
# Luego hacer commit del .next/ actualizado:
git add frontend/.next
git commit -m "build: production bundle $(date +%Y-%m-%d)"
git push origin main
```

**Paso 2 — Actualizar el servidor** (después del push):

```bash
cd ~/apps/prosalud

# Obtener cambios (incluye el .next/ pre-compilado)
git pull origin main

# Si cambiaron dependencias del backend:
cd backend && npm install --production && NODE_ENV=production npm run build

# Si cambiaron dependencias del frontend:
cd ~/apps/prosalud/frontend && npm install --production

# Reiniciar las apps
# cPanel → Setup Node.js App → backend → Restart App
# cPanel → Setup Node.js App → frontend → Restart App
```

> **Por qué no se compila en el servidor:** El hosting compartido tiene límites bajos de `nproc`
> (máximo de hilos) que impiden que el compilador Rust (SWC/Turbopack) inicialice su thread pool.
> La build se hace en Windows (sin esa limitación) y se sube pre-compilada.

### B. Si accidentalmente se eliminó `.next/` del repositorio

```bash
# En Windows, compilar y volver a agregar:
cd frontend
npm run build
git add .next
git commit -m "build: restore production bundle"
git push origin main
```

---

## 4. Rollback

### Rollback rápido al commit anterior

```bash
cd ~/apps/prosalud

# Ver el historial
git log --oneline -10

# Volver al commit anterior (sin perder el historial)
git checkout <HASH_DEL_COMMIT_ANTERIOR>

# Reconstruir lo que sea necesario
cd backend && NODE_ENV=production npm run build
cd ../frontend && NODE_ENV=production npm run build

# Reiniciar desde cPanel
```

Para volver al estado actual después de un rollback:

```bash
cd ~/apps/prosalud
git checkout master
git pull origin master
```

### Rollback de base de datos

Si una migración de Strapi rompió la BD, restaurar desde phpMyAdmin:

1. phpMyAdmin → `asitlpen_prosalud` → **Exportar** (antes de cualquier deploy importante)
2. Para restaurar: phpMyAdmin → **Importar** → seleccionar el dump `.sql`

---

## 5. Troubleshooting

### Strapi no inicia (Passenger devuelve 503)

```bash
# Ver logs de Passenger/Apache
cat ~/logs/error_log | tail -100

# Iniciar manualmente para ver el error en tiempo real
cd ~/apps/prosalud/backend
NODE_ENV=production node app.js
```

Causas más comunes:
- Variables de entorno incompletas en `backend/.env`
- Contraseña MySQL incorrecta
- Puerto 1337 ocupado por otro proceso
- `backend/build/` no existe → ejecutar `npm run build`

### Next.js devuelve página en blanco o error 500

```bash
# Ver logs
cat ~/logs/error_log | tail -100

# Iniciar manualmente
cd ~/apps/prosalud/frontend
NODE_ENV=production node server.js
```

Causas más comunes:
- `STRAPI_API_TOKEN` inválido o expirado → regenerar en Strapi Admin y actualizar `.env.local`
- `NEXT_PUBLIC_STRAPI_URL` apuntando a localhost en lugar de `https://api.procsalud.cl`
- `.next/` no existe → compilar localmente y hacer push (ver sección 3B)

### Error "Can't connect to MySQL"

```bash
# Verificar credenciales directamente
mysql -u asitlpen_strapi -p asitlpen_prosalud -e "SHOW TABLES;"
```

Si falla: revisar la contraseña en `backend/.env` y los privilegios del usuario en cPanel.

### CORS: el frontend recibe error de origen bloqueado

Verificar en `backend/.env`:
```ini
CORS_ORIGIN=https://procsalud.cl
NEXT_PUBLIC_SITE_URL=https://procsalud.cl
```

Reiniciar Strapi después de cambiar variables de entorno.

### Passenger no detecta el startup file

1. cPanel → Setup Node.js App → verificar que el startup file sea exactamente `app.js` (Strapi) o `server.js` (Next.js)
2. Verificar que los archivos existen: `ls ~/apps/prosalud/backend/app.js`
3. Verificar que `node_modules/` existe: `ls ~/apps/prosalud/backend/node_modules/@strapi`

### Verificación rápida del estado del sistema

```bash
# ¿Los procesos Node están corriendo?
ps aux | grep node | grep -v grep

# ¿Strapi responde internamente?
curl -s http://localhost:1337/api/services | head -c 200

# ¿Next.js responde internamente?
curl -s http://localhost:3000 | head -c 200

# ¿MySQL responde?
mysql -u asitlpen_strapi -p asitlpen_prosalud \
  -e "SELECT COUNT(*) as tablas FROM information_schema.tables WHERE table_schema='asitlpen_prosalud';"
```

---

## 6. Variables de entorno de referencia

### backend/.env (producción)

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `HOST` | Interfaz de red | `0.0.0.0` |
| `PORT` | Puerto de Strapi | `1337` |
| `PUBLIC_URL` | URL pública de la API | `https://api.procsalud.cl` |
| `NODE_ENV` | Entorno | `production` |
| `APP_KEYS` | 4 claves base64 separadas por coma | `abc,def,ghi,jkl` |
| `API_TOKEN_SALT` | Salt para tokens de API | 32 bytes en base64 |
| `ADMIN_JWT_SECRET` | Secret del panel admin | 32 bytes en base64 |
| `TRANSFER_TOKEN_SALT` | Salt para tokens de transferencia | 32 bytes en base64 |
| `JWT_SECRET` | Secret JWT usuarios | 32 bytes en base64 |
| `DATABASE_CLIENT` | Driver de BD | `mysql` |
| `DATABASE_HOST` | Host MySQL | `localhost` |
| `DATABASE_PORT` | Puerto MySQL | `3306` |
| `DATABASE_NAME` | Nombre de la BD | `asitlpen_prosalud` |
| `DATABASE_USERNAME` | Usuario MySQL | `asitlpen_strapi` |
| `DATABASE_PASSWORD` | Contraseña MySQL | _(generada en cPanel)_ |
| `CORS_ORIGIN` | Origen del frontend | `https://procsalud.cl` |

### frontend/.env.local (producción)

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio | `https://procsalud.cl` |
| `NEXT_PUBLIC_STRAPI_URL` | URL de la API Strapi (SSR) | `https://api.procsalud.cl` |
| `STRAPI_API_TOKEN` | Token de API Read-only | _(generado en Strapi Admin)_ |
| `STRAPI_HOST` | Hostname para next/image | `api.procsalud.cl` |

---

*Generado automáticamente. Mantener actualizado con cada cambio arquitectónico.*
