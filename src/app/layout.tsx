import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://synzephyrtechnologies.web.app"),
  title: {
    default: "Synzephyr Technologies | #1 Digital Marketing Agency in Pollachi & Coimbatore",
    template: "%s | Synzephyr Technologies",
  },
  description: "Synzephyr Technologies is the leading digital marketing agency in Pollachi & Coimbatore. Expert SEO services, GMB optimization, social media marketing & graphic design to grow your local business.",
  keywords: [
    "digital marketing agency in Pollachi",
    "SEO services in Pollachi",
    "digital marketing agency in Coimbatore",
    "GMB optimization Pollachi",
    "GMB optimization Coimbatore",
    "Google Business Profile setup Pollachi",
    "SEO company Pollachi",
    "social media marketing Pollachi",
    "graphic design Pollachi",
    "local SEO Tamil Nadu",
  ],
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app",
  },
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
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "JBxZnbNTUf5G2DrRxX9wTMrLPp6EIE2ktdPFqqqUSP0",
  },
  openGraph: {
    title: "Synzephyr Technologies | #1 Digital Marketing Agency in Pollachi & Coimbatore",
    description: "Expert SEO, digital marketing, GMB optimization & graphic design services for businesses in Pollachi & Coimbatore, Tamil Nadu.",
    url: "https://synzephyrtechnologies.web.app",
    siteName: "Synzephyr Technologies",
    images: [
      {
        url: "https://synzephyrtechnologies.web.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Synzephyr Technologies – Digital Marketing Agency in Pollachi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synzephyr Technologies | Digital Marketing Agency in Pollachi",
    description: "Expert SEO, GMB optimization & digital marketing for local businesses in Pollachi & Coimbatore.",
    images: ["https://synzephyrtechnologies.web.app/logo.png"],
    site: "@synzephyr_tech",
  },
};



// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-MGN73MG5" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >

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
              "@id": "https://synzephyrtechnologies.web.app/#localbusiness",
              "name": "Synzephyr Technologies",
              "legalName": "Synzephyr Technologies",
              "image": "https://synzephyrtechnologies.web.app/logo.png",
              "logo": "https://synzephyrtechnologies.web.app/logo.png",
              "description": "Synzephyr Technologies is the leading digital marketing agency in Pollachi and Coimbatore, offering SEO services, Google Business Profile optimization, social media marketing, and graphic design to help local businesses grow online.",
              "url": "https://synzephyrtechnologies.web.app",
              "telephone": "+919443449557",
              "email": "contact.synzephyr@gmail.com",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Bank Transfer, UPI",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pollachi",
                "addressLocality": "Pollachi",
                "addressRegion": "Tamil Nadu",
                "postalCode": "642001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.6601,
                "longitude": 77.0046
              },
              "areaServed": [
                { "@type": "City", "name": "Pollachi" },
                { "@type": "City", "name": "Coimbatore" },
                { "@type": "City", "name": "Udumalpet" },
                { "@type": "City", "name": "Tiruppur" },
                { "@type": "State", "name": "Tamil Nadu" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Pollachi", "url": "https://synzephyrtechnologies.web.app/seo-services-pollachi" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Coimbatore", "url": "https://synzephyrtechnologies.web.app/seo-services-coimbatore" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing in Pollachi", "url": "https://synzephyrtechnologies.web.app/digital-marketing-pollachi" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design Services Pollachi", "url": "https://synzephyrtechnologies.web.app/graphic-design-services-pollachi" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Setup Pollachi", "url": "https://synzephyrtechnologies.web.app/google-business-profile-setup-pollachi" } }
                ]
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/share/1cYS7ZipVY/",
                "https://www.instagram.com/synzephyr.tech",
                "https://www.linkedin.com/company/synzephyr/",
                "https://x.com/synzephyr_tech"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
