import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '< Wasim Akram />',
  description:
    'Senior Full-Stack Engineer & Technical Lead specializing in Next.js, Node.js, React, Cloud Systems, and AI. Building production-grade web applications.',
  keywords: [
    'Full Stack Engineer',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Cloud',
    'AI',
    'Wasim Akram',
  ],
  authors: [{ name: 'Wasim Akram' }],
  openGraph: {
    title: '< Wasim Akram />',
    description:
      'Senior Full-Stack Engineer & Technical Lead specializing in Next.js, Node.js, React, Cloud, and AI systems.',
    type: 'website',
    images: [{ url: 'https://avatars.githubusercontent.com/u/94052940?v=4' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wasim Akram',
    description: 'Senior Full-Stack Engineer & Technical Lead',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
