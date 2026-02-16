import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synzephyr Technologies | Digital Growth Agency",
  description: "Digital Growth Solutions for Businesses in Pollachi & Coimbatore. SEO, Digital Marketing, Graphic Design, and GMB Optimization.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "JBxZnbNTUf5G2DrRxX9wTMrLPp6EIE2ktdPFqqqUSP0",
  },
  openGraph: {
    title: "Synzephyr Technologies | Digital Growth Agency",
    description: "Digital Growth Solutions for Businesses in Pollachi & Coimbatore. SEO, Digital Marketing, Graphic Design, and GMB Optimization.",
    url: "https://synzephyrtechnologies.web.app",
    siteName: "Synzephyr Technologies",
    images: [
      {
        url: "https://synzephyrtechnologies.web.app/logo.png",
        width: 800,
        height: 600,
        alt: "Synzephyr Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MGN73MG5');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9JWCS0D7H1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9JWCS0D7H1');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGN73MG5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Synzephyr Technologies",
              "image": "https://synzephyrtechnologies.web.app/logo.png",
              "description": "Digital Growth Solutions for Businesses in Pollachi & Coimbatore. SEO, Digital Marketing, Graphic Design, and GMB Optimization.",
              "@id": "https://synzephyrtechnologies.web.app",
              "url": "https://synzephyrtechnologies.web.app",
              "telephone": "+919443449557",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pollachi",
                "addressLocality": "Pollachi",
                "addressRegion": "TN",
                "postalCode": "642001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.6601,
                "longitude": 77.0046
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/synzephyr",
                "https://www.instagram.com/synzephyr",
                "https://www.linkedin.com/company/synzephyr",
                "https://twitter.com/synzephyr"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
