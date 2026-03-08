import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://synzephyrtechnologies.web.app"),
  title: {
    default: "Synzephyr Technologies | Global Digital Growth & Marketing Agency",
    template: "%s | Synzephyr Technologies",
  },
  description: "Worldwide digital marketing agency specializing in high-performance SEO, global brand growth, and data-driven marketing strategies for businesses everywhere.",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app",
    languages: {
      "en": "https://synzephyrtechnologies.web.app",
      "en-IN": "https://synzephyrtechnologies.web.app",
      "en-US": "https://synzephyrtechnologies.web.app",
      "en-GB": "https://synzephyrtechnologies.web.app",
    },
  },
  keywords: [
    "Synzephyr Technologies worldwide",
    "Synzephyr Digital Marketing Agency",
    "Synzephyr Graphic Design Studio",
    "Synzephyr SEO Experts",
    "Synzephyr Social Media Management",
    "Digital marketing agency",
    "SEO company",
    "Graphic design agency",
    "Social media management services",
    "Web design and development company",
    "Branding and logo design services",
    "Content marketing agency",
    "PPC advertising company",
    "Email marketing services",
    "Creative design studio",
    "Online marketing solutions",
    "Corporate branding agency",
    "Best digital marketing company",
    "Top SEO agency worldwide",
    "Affordable graphic design services",
    "Professional logo design company",
    "Social media experts for businesses",
    "SEO-friendly web design services",
    "Global branding solutions",
    "International digital marketing agency",
    "Creative design services for startups",
    "Best online marketing company",
    "SEO for e-commerce websites",
    "Digital marketing for startups",
    "Social media management for small businesses",
    "Branding for tech companies",
    "Graphic design for corporate identity",
    "Website optimization for global clients",
    "Content marketing for SaaS companies",
    "PPC campaigns for international businesses",
    "Best digital marketing agency for startups",
    "Affordable SEO services for small businesses",
    "Creative graphic design studio for global brands",
    "Social media management for international companies",
    "Professional branding and logo design worldwide",
    "Top-rated SEO experts for e-commerce",
    "Web development company for global clients",
    "Digital marketing solutions for enterprises",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-160.webp", sizes: "160x160", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo-300.webp", sizes: "300x300", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "JBxZnbNTUf5G2DrRxX9wTMrLPp6EIE2ktdPFqqqUSP0",
    yandex: "2d6da97078bb3c50",
    other: {
      "msvalidate.01": ["YOUR_BING_VERIFICATION_ID"], // Standard Bing validation tag
    },
  },
  openGraph: {
    title: "Synzephyr Technologies | Global Digital Growth & Marketing Agency",
    description: "Expert SEO, digital marketing, and global brand growth strategies for businesses worldwide.",
    url: "https://synzephyrtechnologies.web.app",
    siteName: "Synzephyr Technologies",
    images: [
      {
        url: "https://synzephyrtechnologies.web.app/logo.webp",
        width: 1200,
        height: 630,
        alt: "Synzephyr Technologies – Global Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synzephyr Technologies | Global Digital Growth Agency",
    description: "Data-driven SEO, brand growth, and digital marketing for businesses worldwide.",
    images: ["https://synzephyrtechnologies.web.app/logo.webp"],
    site: "@synzephyr_tech",
    creator: "@synzephyr_tech",
  },
  category: "technology",
  other: {
    "revisit-after": "1 days",
    "distribution": "global",
    "rating": "General",
    "p:domain_verify": "YOUR_PINTEREST_VERIFICATION_CODE", // Optional but good for Pinterest
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
        {/* Resource hints — establish early connections to critical third-party origins */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://stats.g.doubleclick.net" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Preload LCP image — the hero logo is the first visible branded element */}
        <link
          rel="preload"
          as="image"
          href="/logo.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        {/* Google Tag Manager (GTM) — Manual implementation to avoid "preloaded but not used" warnings */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MGN73MG5');
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGN73MG5"
            height="0"
            width="0"
            className="hidden invisible"
          />
        </noscript>

        {/* Facebook Pixel — deferred until after hydration, zero LCP impact */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','1808210129731692');
              fbq('track','PageView');
            `,
          }}
        />

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
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
                  "@id": "https://synzephyrtechnologies.web.app/#organization",
                  "name": "Synzephyr Technologies",
                  "legalName": "Synzephyr Technologies",
                  "alternateName": ["Synzephyr", "Syn Zephyr", "Synzephyr Tech"],
                  "image": "https://synzephyrtechnologies.web.app/logo.webp",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://synzephyrtechnologies.web.app/logo.webp",
                    "width": "512",
                    "height": "512"
                  },
                  "description": "Synzephyr Technologies is a global digital marketing and growth agency headquartered in Pollachi and Coimbatore. We specialize in high-performance SEO, social media marketing, and data-driven branding for businesses worldwide through online collaboration.",
                  "url": "https://synzephyrtechnologies.web.app",
                  "telephone": "+919443449557",
                  "email": "contact.synzephyr@gmail.com",
                  "foundingDate": "2024-01-01",
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "Nithesh Kumar"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "No:20, 2nd Jeeva Street, Sakthi Nagar, Meenkarai Road",
                    "addressLocality": "Pollachi",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "642001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "10.6623",
                    "longitude": "77.0065"
                  },
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "Worldwide"
                    },
                    {
                      "@type": "ServiceChannel",
                      "name": "Online"
                    }
                  ],
                  "priceRange": "₹250+",
                  "knowsAbout": [
                    "Search Engine Optimization",
                    "Digital Marketing",
                    "Social Media Marketing",
                    "Web Development",
                    "Graphic Design",
                    "Content Creation",
                    "Pay Per Click (PPC)"
                  ],
                  "brand": {
                    "@type": "Brand",
                    "name": "Synzephyr Technologies",
                    "alternateName": "Synzephyr"
                  },
                  "sameAs": [
                    "https://share.google.com/qzAusQ6g4QiP59MeV",
                    "https://www.instagram.com/synzephyr.tech",
                    "https://www.facebook.com/synzephyr.tech",
                    "https://www.linkedin.com/company/synzephyr/",
                    "https://x.com/synzephyr_tech"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Global Growth Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Global SEO Services", "url": "https://synzephyrtechnologies.web.app/services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing Worldwide", "url": "https://synzephyrtechnologies.web.app/services" } }
                    ]
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
