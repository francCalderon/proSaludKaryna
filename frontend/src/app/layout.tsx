import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Prosalud SpA | Enfermería y Cuidado Domiciliario',
    template: '%s | Prosalud SpA',
  },
  description:
    'Servicios profesionales de enfermería y cuidado domiciliario en Viña del Mar. Personal certificado, atención 24/7. Adultos mayores, postoperatorios, curaciones y más.',
  keywords: [
    'enfermería domiciliaria',
    'cuidado adultos mayores',
    'técnico en enfermería a domicilio',
    'cuidado postoperatorio',
    'administración medicamentos',
    'cuidado pacientes Viña del Mar',
    'Prosalud SpA',
    'toma de muestras sanguíneas',
    'curaciones a domicilio',
  ],
  authors: [{ name: 'Prosalud SpA' }],
  creator: 'Prosalud SpA',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Prosalud SpA',
    title: 'Prosalud SpA | Enfermería y Cuidado Domiciliario',
    description:
      'Servicios de enfermería y cuidado domiciliario en Viña del Mar. Personal certificado, atención 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  themeColor: '#1BA8D1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
