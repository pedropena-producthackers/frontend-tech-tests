# Prueba C — Server Action + Formulario en Next.js

**Plataforma:** CodeSandbox (Cloud Sandbox / Devbox, NO Browser Sandbox) · **Tiempo:** 25 min
**Dependencia:** `zod` ya instalada.

## Requisitos

1. Envío con **Server Action** — prohibido `fetch` o API Route.
2. **Zod** dentro del action, errores devueltos por campo.
3. Botón con `useFormStatus`: texto `Enviando...` y `disabled` durante el envío.
4. Mensaje de confirmación al `success`.
5. `page.tsx` se queda como **Server Component**; solo el form es `'use client'`.

**Bonus:** funciona sin JavaScript (progressive enhancement).

## Estructura

```
app/newsletter/
├── page.tsx             ← Server Component (no tocar directiva)
├── actions.ts           ← 'use server'
└── NewsletterForm.tsx   ← 'use client'
```

## Qué se evalúa

- Frontera server/client (no marcar todo como `'use client'`).
- Tipado correcto de `prevState` y retorno del action.
- `name` en los `<input>` (sin él, `FormData` llega vacío).
- A11y: `aria-invalid`, `aria-describedby`.
