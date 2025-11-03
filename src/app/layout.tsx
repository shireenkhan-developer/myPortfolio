import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Shireen Khan | Full-Stack Software Engineer From Islamabad, Pakistan';
const description =
  'A dedicated Full-Stack Software Engineer specializing in React.js, Next.js, Angular & Node.js. Building scalable, innovative web applications with expertise in GCP, PostgreSQL, and modern frontend frameworks.';
const url = 'https://iamshireen.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Shireen Khan',
    'Full-Stack Engineer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Angular Developer',
    'Node.js Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node',
    'GCP',
    'PostgreSQL',
    'NUST',
    'Efani',
  ],
  creator: 'Shireen Khan',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a1f1a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1f1a' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/open-graph-shireen.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: '/images/open-graph-shireen.png',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-cosmic text-gray-700 antialiased`} suppressHydrationWarning>
        <Providers>
          <div className="relative z-[20]">
            <Header />
            <main className="flex min-h-screen w-full flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
