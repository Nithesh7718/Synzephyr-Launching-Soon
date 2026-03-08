import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import { IndustryExpertise } from "@/components/sections/industry-expertise"
import { AboutSummary } from "@/components/sections/about-summary"
import { LocationFocus } from "@/components/sections/location-focus"

export const metadata: Metadata = {
  title: "Synzephyr Technologies | Global Digital Growth & Marketing Agency",
  description: "Synzephyr Technologies is a global digital growth agency. Scale your brand worldwide with our expert SEO, digital marketing, and high-performance strategies.",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app",
  },
  openGraph: {
    title: "Global Digital Growth & Marketing Agency | Synzephyr",
    description: "Scale your business worldwide with Synzephyr Technologies. Expert global SEO, digital marketing, and data-driven brand growth strategies.",
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
    "@id": "https://synzephyrtechnologies.web.app/#organization"
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

const faqs = [
  {
    q: "Do you serve clients outside of India?",
    a: "Absolutely! Synzephyr Technologies is a global digital marketing agency. We serve clients from all over the world, including the US, UK, Europe, and Asia. Our strategies are built to scale brands internationally, regardless of their physical location."
  },
  {
    q: "What digital marketing services do you offer?",
    a: "We offer a full suite of digital growth services including Search Engine Optimization (SEO), Social Media Management, Facebook & Instagram Advertising, Google Ads (PPC), Content Marketing, and Branding. Our focus is on delivering high-ROI results for businesses worldwide."
  },
  {
    q: "How can SEO help my global brand?",
    a: "SEO ensures that your brand appears at the top of search results for international audiences. By targeting competitive global keywords and optimizing for diverse search engines, we drive high-intent organic traffic to your platform, leading to increased conversions and global authority."
  },
  {
    q: "Can you still help with Local SEO in Tamil Nadu?",
    a: "Yes! While we serve global clients, we maintain deep roots in Tamil Nadu. We provide specialized Local SEO and Google Business Profile optimization for businesses in Pollachi, Coimbatore, and surrounding areas who want to dominate their regional market."
  },
  {
    q: "How long does it take to see results from your marketing campaigns?",
    a: "Results vary by service: Paid campaigns (Google/Meta Ads) often show leads within days. SEO and organic brand building typically show meaningful growth within 3–6 months. We provide detailed monthly analytics so you can track your global performance and ROI."
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Hero />
      <ServicesSection />
      <IndustryExpertise />
      <WhyChooseUs />
      <Process />
      <AboutSummary />
      <LocationFocus />

      {/* ── FAQ Section ───────────────────────────────────────────── */}
      <section className="py-24 bg-background" aria-labelledby="faq-heading">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 id="faq-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Common questions from businesses in Pollachi &amp; Coimbatore about digital marketing.
            </p>
          </div>

          {/* FAQ JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
              })
            }}
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-muted/20 hover:bg-muted/40 border border-border rounded-3xl overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg list-none transition-colors group-open:bg-primary/5">
                  {faq.q}
                  <span className="ml-4 shrink-0 h-8 w-8 rounded-full border border-primary/20 flex items-center justify-center text-primary text-xl group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4 bg-muted/5 group-open:animate-in group-open:fade-in group-open:slide-in-from-top-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
