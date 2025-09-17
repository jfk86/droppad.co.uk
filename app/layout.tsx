
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Droppad - Architectural Services | Loft Conversions & Extensions',
  description: 'Professional architectural services specialising in loft conversions, house extensions, drawings and structural calculations across London & Home Counties.',
  keywords: 'loft conversion, house extension, structural calculations, planning permission, building regulations, architect, Luton, St Albans, Harrow, Maida Vale',
  openGraph: {
    title: 'Droppad - Architectural Services',
    description: 'Professional architectural services specialising in loft conversions, house extensions, drawings and structural calculations.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Droppad - Architectural Services',
    description: 'Professional architectural services specialising in loft conversions, house extensions, drawings and structural calculations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          rel="stylesheet" 
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Droppad",
            "description": "Architectural services specialising in loft conversions, house extensions, drawings and structural calculations.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Studio, Beadlow Road",
              "addressLocality": "Luton",
              "postalCode": "LU4 0QY",
              "addressCountry": "GB"
            },
            "areaServed": ["Luton", "St Albans", "Harrow", "Maida Vale"],
            "contactPoint": [{
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+44 7777 347741",
              "url": "https://wa.me/447777347741"
            }]
          })
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
