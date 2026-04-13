# Prueba A — Tarjeta de Artículo SEO-Friendly

**Plataforma:** CodeSandbox (HTML/CSS puro) · **Tiempo:** 25 min

## Requisitos

1. Imagen con `loading="lazy"`, `width/height` y `alt` descriptivo.
2. Categoría clicable (`POLÍTICA`) como enlace destacado.
3. Titular `<h2>` (el `<h1>` es de la página contenedora).
4. Extracto truncado a **2 líneas** con `-webkit-line-clamp`.
5. Metadatos con `<time datetime="2026-04-12">12 abr 2026</time>` y autor.
6. Tiempo estimado de lectura (`4 min`).

**Bonus:** responsive sin media queries (`clamp()` + `aspect-ratio`).

## Restricciones

- NO frameworks CSS (Bootstrap, Tailwind, etc.).
- Imagen: `https://picsum.photos/400/225`.
- Fuente: `system-ui` o Google Fonts.

## Qué se evalúa

- HTML semántico (`<article>`, `<header>`, `<time>`, jerarquía).
- `alt` descriptivo vs genérico.
- Contraste y foco visible.
- CSS limpio y sin selectores redundantes.
