# GYMPlus Web

React + TypeScript + Vite + Tailwind v4 + TanStack Query + React Hook Form/Zod + React Router.
Toda la lógica de negocio vive en la API FastAPI; este proyecto solo presenta y consume.

## Arranque
```bash
npm install
cp .env.example .env
npm run dev
```
Componentes shadcn adicionales: `npx shadcn@latest add dialog tabs ...` (usa `components.json`).
Cuando se necesiten: `npm i recharts` y `npm i -D @playwright/test` (`npx playwright install`).

## Estructura
- `src/app/` router y providers globales.
- `src/pages/` una página por ruta; solo componen features (sin lógica).
- `src/features/<nombre>/` todo lo de un dominio: `schema.ts` (Zod), `api.ts` (hooks TanStack Query), componentes y tests.
- `src/components/ui/` primitivas estilo shadcn; `components/layout/` header, footer, layout.
- `src/lib/` cliente HTTP (`api-client.ts`), `query-client.ts`, `env.ts`.
- `src/config/site.ts` contenido estático de la landing (planes, links, redes).

## Convenciones
1. Ninguna llamada `fetch` fuera de `features/*/api.ts`; siempre vía `api` + TanStack Query.
2. Todo formulario: Zod schema + React Hook Form + `FormField`.
3. Las validaciones de negocio se repiten en la API; las del front son solo UX.
4. Panel admin futuro: agregar `src/features/{members,classes,...}`, un grupo de rutas `/admin` con layout propio y guard de auth.
   Mover el token a cookie httpOnly emitida por FastAPI.

## Contratos asumidos con la API (ajustar)
| Método | Ruta | Uso |
|---|---|---|
| POST | `/contact` | formulario de propuesta |
| POST | `/account-deletion/request` | envía correo de confirmación |
| POST | `/account-deletion/confirm` | `{token}`, inicia ventana de 30 días |
| POST | `/auth/login` | `{access_token}` |

CORS en FastAPI: permitir el origen del front. `/privacidad` es un placeholder.
