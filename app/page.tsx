// Server Component — NO añadir 'use client'
import { NewsFeed } from '@/components/NewsFeed';
import { NewsletterForm } from '@/components/NewsletterForm';

export default function HomePage() {
  return (
    <main>
      <h1>La Razón — Últimas noticias</h1>

      <section aria-labelledby="feed-title">
        <h2 id="feed-title">Titulares</h2>
        {/* TODO (parte 1 y 2): renderiza aquí <NewsFeed /> */}
      </section>

      <section aria-labelledby="newsletter-title" style={{ marginTop: '3rem' }}>
        <h2 id="newsletter-title">Suscríbete al newsletter</h2>
        {/* TODO (parte 3): renderiza aquí <NewsletterForm /> */}
      </section>
    </main>
  );
}
