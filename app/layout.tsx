import './globals.css';

export const metadata = {
  title: 'La Razón — Prueba técnica',
  description: 'Mini portal de noticias',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
