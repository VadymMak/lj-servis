import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'LJ Servis — Oprava elektroniky v Trenčíne',
  description: 'Profesionálny servis a oprava elektroniky v Trenčíne. Mobilné telefóny, notebooky, tablety. Diagnostika zadarmo.',
  keywords: 'oprava elektroniky, servis Trenčín, oprava telefónov, oprava notebookov',
  openGraph: {
    title: 'LJ Servis — Oprava elektroniky v Trenčíne',
    description: 'Profesionálny servis a oprava elektroniky. Diagnostika zadarmo, 6-mesačná záruka.',
    locale: 'sk_SK',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
