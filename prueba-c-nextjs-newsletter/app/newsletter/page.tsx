// Server Component por defecto — NO añadir 'use client'
import { NewsletterForm } from './NewsletterForm';

export default function NewsletterPage() {
  return (
    <main style={{ maxWidth: 480, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>Suscríbete a La Razón</h1>
      <p>Recibe las noticias más importantes cada mañana.</p>
      {/* TODO: renderizar <NewsletterForm /> */}
    </main>
  );
}
