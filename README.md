# Prueba técnica — Frontend Developer (La Razón)

**Plataforma:** CodeSandbox (Devbox / Cloud Sandbox) · **Tiempo:** 30 min · **Stack:** Next.js 15 + React 19 + Zod

[**Abrir en CodeSandbox →**](https://codesandbox.io/p/sandbox/github/pedropena-producthackers/frontend-tech-tests/main)

---

## Contexto

Vas a construir un **mini portal de noticias** con dos secciones en la misma página:

1. **Listado de titulares** desde una API pública.
2. **Formulario de suscripción** al newsletter.

La prueba toca tres competencias: HTML/CSS semántico, consumo de API con gestión de estados y Server Actions de Next.js.

## Estructura

```
app/
├── layout.tsx
├── globals.css
├── page.tsx                  ← Server Component (punto de entrada)
└── newsletter/
    └── actions.ts            ← 'use server' — Server Action + Zod
components/
├── NewsFeed.tsx              ← 'use client' — fetch + búsqueda
├── ArticleCard.tsx           ← Maqueta de tarjeta SEO-friendly
└── NewsletterForm.tsx        ← 'use client' — useActionState + useFormStatus
```

---

## Parte 1 — Tarjeta de artículo (~10 min)

En `components/ArticleCard.tsx` maqueta una tarjeta de noticia:

- `<article>` con imagen de `https://picsum.photos/seed/{id}/400/225`, `loading="lazy"` y `alt` descriptivo.
- Categoría clicable (ej. `POLÍTICA`).
- Titular `<h3>` (ya hay un `<h2>` en la sección contenedora).
- Extracto truncado a **2 líneas** con CSS (`-webkit-line-clamp`).
- Metadatos: autor + `<time datetime="2026-04-12">12 abr 2026</time>` + tiempo de lectura (`4 min`).

**Restricción:** solo CSS puro (sin frameworks). Los estilos van en `app/globals.css`.

## Parte 2 — News feed con API (~10 min)

En `components/NewsFeed.tsx` implementa:

- Consumo de `https://jsonplaceholder.typicode.com/posts` → primeros **10** artículos, renderizados con `<ArticleCard />`.
- **Skeleton / spinner** mientras carga.
- **Estado de error** con botón `Reintentar`.
- **Input de búsqueda** que filtre titulares **en cliente** (sin volver a llamar al API).

**Bonus:** `debounce` en el input.

## Parte 3 — Newsletter con Server Action (~10 min)

En `app/newsletter/actions.ts` y `components/NewsletterForm.tsx`:

- Server Action `subscribeAction` que **valida con Zod** (`name` mín. 2 car., `email` válido) y devuelve errores por campo.
- Formulario con `useActionState` + `useFormStatus` (botón `Enviando...` y `disabled` durante el envío).
- Mensaje de confirmación al éxito.
- `page.tsx` debe seguir siendo **Server Component**.

**Bonus:** funciona sin JavaScript (progressive enhancement con `<form action={subscribeAction}>`).

---

## Qué se evalúa

| Área | Señales |
|---|---|
| HTML semántico / SEO | `<article>`, `<time>`, jerarquía de encabezados, `alt` útil |
| CSS | variables, `clamp()`, `aspect-ratio`, `line-clamp` |
| JS / React | estados loading/error/success, separación de concerns, a11y (`aria-live`, `aria-invalid`) |
| Next.js | frontera server/client, tipado del action, `name` en los inputs |
| Producto | UX de errores, mensajes claros, rendimiento del filtro |

## Preguntas de profundización

- ¿Por qué `NewsFeed` es client y `page.tsx` server?
- ¿Cómo evitarías XSS si el título viniera con HTML?
- ¿Dónde vive `subscribeAction` y cómo viaja al cliente?
- Si tuvieras 10 minutos más, ¿qué mejorarías?

---

*La Razón · Departamento de Tecnología · Abril 2026*
