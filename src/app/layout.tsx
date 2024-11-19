import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
