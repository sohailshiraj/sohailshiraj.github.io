import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Sohail Shiraj - Full Stack Developer',
    template: '%s | Sohail Shiraj',
  },
  description: 'Full Stack Developer with 5+ years of experience building scalable, user-focused web applications. Expert in React.js, Next.js, Node.js, TypeScript, and cloud technologies.',
  keywords: ['sohail shiraj', 'full stack developer', 'react', 'nextjs', 'typescript', 'nodejs', 'web development', 'ecommerce', 'quantum computing', 'canada developer'],
  authors: [{ name: 'Sohail Shiraj' }],
  creator: 'Sohail Shiraj',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`,
    title: 'Sohail Shiraj - Full Stack Developer',
    description: 'Full Stack Developer with 5+ years of experience building scalable, user-focused web applications. Expert in React.js, Next.js, Node.js, TypeScript, and cloud technologies.',
    siteName: 'Sohail Shiraj',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sohail Shiraj - Full Stack Developer',
    description: 'Full Stack Developer with 5+ years of experience building scalable, user-focused web applications. Expert in React.js, Next.js, Node.js, TypeScript, and cloud technologies.',
    creator: '@sohailshiraj',
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6HFC6CJ1WM" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6HFC6CJ1WM');
        `}
      </Script>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}