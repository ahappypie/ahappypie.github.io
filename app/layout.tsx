import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './components/navbar';

const font = localFont({
  src: '../public/fonts/inter-var-latin.woff2',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ahappypie.github.io'),
  title: {
    default: 'Brian Bagdasarian',
    template: '%s | Brian Bagdasarian',
  },
  description: 'Systems design',
  openGraph: {
    title: 'Brian Bagdasarian',
    description: 'Systems design',
    url: 'https://ahappypie.github.io',
    siteName: 'Brian Bagdasarian',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        font.variable
      )}
    >
    <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Navbar />
      {children}
    </main>
    </body>
    </html>
  );
}