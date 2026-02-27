import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pollachi & Coimbatore | Synzephyr Technologies",
  description: "Synzephyr Technologies – Pollachi's #1 digital marketing agency. We offer SEO, Google Business Profile (GMB) optimization, social media marketing & graphic design. Get a free consultation today!",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app",
  },
  openGraph: {
    title: "Digital Marketing Agency in Pollachi & Coimbatore | Synzephyr Technologies",
    description: "Synzephyr Technologies – Pollachi's #1 digital marketing agency. We offer SEO, GMB optimization, social media marketing & graphic design.",
    url: "https://synzephyrtechnologies.web.app",
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://synzephyrtechnologies.web.app/#website",
  "url": "https://synzephyrtechnologies.web.app",
  "name": "Synzephyr Technologies",
  "description": "Digital marketing agency in Pollachi & Coimbatore",
  "publisher": {
    "@id": "https://synzephyrtechnologies.web.app/#localbusiness"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://synzephyrtechnologies.web.app/services"
    },
    "query-input": "required name=search_term_string"
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Process />
      <CTA />
    </div>
  );
}
