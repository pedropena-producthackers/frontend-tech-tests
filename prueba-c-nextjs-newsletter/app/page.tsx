import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>Prueba C</h1>
      <p>Ve a <Link href="/newsletter">/newsletter</Link> para empezar.</p>
    </main>
  );
}
