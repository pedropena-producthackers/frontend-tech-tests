# Prueba B — News Feed con Consumo de API

**Plataforma:** CodeSandbox (JS vanilla) · **Tiempo:** 25 min
**API:** `https://jsonplaceholder.typicode.com/posts`

## Requisitos

1. Mostrar **10 titulares** desde el endpoint.
2. **Skeleton/spinner** visible durante la carga.
3. **Estado de error** con mensaje y botón `Reintentar` funcional.
4. **Filtro en cliente** sobre los titulares cacheados (sin volver a llamar al API).

**Bonus:** `debounce` de 200–300 ms y cancelación con `AbortController`.

## Qué se evalúa

- Separación fetch / render / estado.
- Gestión real de errores.
- Accesibilidad (`label`, `aria-live`).
- Rendimiento: no re-renderizar todo el DOM en cada tecla.
