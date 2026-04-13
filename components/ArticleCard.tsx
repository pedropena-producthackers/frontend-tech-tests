type Props = {
  id: number;
  title: string;
  body: string;
};

// TODO: maquetar una tarjeta de artículo SEO-friendly:
//   - <article> con imagen (https://picsum.photos/seed/{id}/400/225), loading="lazy", alt descriptivo.
//   - Etiqueta de categoría (ej: "POLÍTICA") como enlace.
//   - Titular <h3> (ya hay <h2> en la sección contenedora).
//   - Extracto truncado a 2 líneas (CSS: -webkit-line-clamp).
//   - Metadatos: autor + <time datetime="2026-04-12">12 abr 2026</time> + tiempo de lectura.

export function ArticleCard({ id, title, body }: Props) {
  return (
    <article className="article-card">
      {/* Tu código aquí */}
    </article>
  );
}
