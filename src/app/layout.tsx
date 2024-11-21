import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'World Ranks',
  description: 'World Ranks - Developed by Ibrahim AbdElwahab.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
