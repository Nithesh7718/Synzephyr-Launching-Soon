import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import Link from "next/link"
import { CheckCircle, MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pollachi | Synzephyr",
  description: "Synzephyr Technologies – Pollachi's #1 digital marketing agency. We offer SEO, Google Business Profile (GMB) optimization, social media marketing & graphic design. Get a free consultation today!",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app",
  },
  openGraph: {
    title: "Digital Marketing Agency in Pollachi | Synzephyr",
    description: "Synzephyr Technologies – Pollachi's #1 digital marketing agency. SEO, GMB optimization, social media marketing & graphic design.",
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

const faqs = [
  {
    q: "What digital marketing services do you offer in Pollachi?",
    a: "Synzephyr Technologies offers a comprehensive range of digital marketing services in Pollachi including Search Engine Optimization (SEO), Google Business Profile (GMB) setup and optimization, social media marketing and management, Facebook & Instagram advertising, Google Ads (PPC), graphic design, branding, and content marketing. We tailor every service to the specific needs of local Pollachi businesses."
  },
  {
    q: "How can SEO help my business in Pollachi?",
    a: "SEO helps your Pollachi business appear at the top of Google search results when potential customers search for your services. For example, if you run a restaurant in Pollachi, a well-executed local SEO strategy will help you appear when someone searches 'restaurants near me in Pollachi' or 'best restaurant Pollachi'. This drives free, highly targeted organic traffic directly to your website or Google Business Profile — resulting in more calls, walk-ins, and enquiries."
  },
  {
    q: "Why is Google Business Profile (GMB) important for local businesses in Pollachi?",
    a: "Google Business Profile (formerly Google My Business or GMB) is the single most important tool for local business visibility. When someone in Pollachi searches for any service on Google, the first results shown are often the 'Local 3-Pack' — a map with 3 businesses. Appearing in this Local 3-Pack drives enormous call and walk-in volume. An optimized GMB profile with accurate information, photos, reviews, and regular posts significantly increases your chances of ranking in this coveted position."
  },
  {
    q: "Do you serve businesses in Coimbatore as well?",
    a: "Yes! While Synzephyr Technologies is based in Pollachi, we actively serve clients across Coimbatore, Udumalpet, Tiruppur, and the greater Tamil Nadu region. We offer the same full suite of SEO, digital marketing, GMB optimization, and graphic design services to businesses throughout Coimbatore district. We understand the local market dynamics of both Pollachi and Coimbatore, giving our clients a competitive advantage."
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Results timelines vary by service. Google Business Profile optimization can start showing improved visibility within 4–8 weeks. SEO typically shows meaningful ranking improvements within 3–6 months of consistent effort. Social media marketing and paid advertising (Google Ads, Facebook Ads) can generate leads and traffic almost immediately upon launch. We provide monthly reports so you can see exactly what's working and track your return on investment."
  },
]

const serviceAreas = [
  "Pollachi", "Coimbatore", "Udumalpet", "Tiruppur", "Anaimalai",
  "Valparai", "Palladam", "Kinathukadavu", "Madukarai", "Sulur"
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
      <WhyChooseUs />
      <Process />

      {/* ── About Section ─────────────────────────────────────────── */}
      <section className="py-20 bg-background" aria-labelledby="about-heading">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Pollachi&apos;s Trusted Digital Marketing Partner
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Synzephyr Technologies is a results-driven digital marketing agency headquartered in Pollachi, Tamil Nadu. We help small and medium businesses across Pollachi, Coimbatore, and the greater Tamil Nadu region build a powerful online presence, attract more local customers, and grow their revenue through data-backed digital strategies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a mission to make world-class digital marketing accessible to local businesses, we understand the unique challenges and opportunities of the Pollachi and Coimbatore markets. Our team combines deep local knowledge with proven digital marketing expertise to deliver campaigns that generate real, measurable results — not just vanity metrics.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you are a retailer, restaurant owner, doctor, contractor, or service provider in Pollachi, our customized digital marketing solutions are designed to connect you with customers exactly when they are searching for your services. From ranking your website on page 1 of Google through expert SEO, to managing your Google Business Profile (GMB) to dominate local map searches — Synzephyr Technologies is your end-to-end growth partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/about" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Free Consultation
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-muted/40 rounded-2xl border border-border p-6 space-y-4">
                <h3 className="text-xl font-bold">What We Do</h3>
                {[
                  { label: "SEO Services", desc: "Rank higher on Google for keywords your customers search — locally in Pollachi and Coimbatore.", href: "/seo-services-pollachi" },
                  { label: "Digital Marketing", desc: "Social media management, Facebook & Instagram Ads, Google Ads — all under one roof.", href: "/digital-marketing-pollachi" },
                  { label: "GMB Optimization", desc: "Appear in Google Maps Local 3-Pack and drive calls & walk-ins from nearby customers.", href: "/google-business-profile-setup-pollachi" },
                  { label: "Graphic Design", desc: "Professional logos, branding, social creatives and print materials that make you stand out.", href: "/graphic-design-services-pollachi" },
                ].map((s, i) => (
                  <Link key={i} href={s.href} className="flex items-start gap-3 group">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold group-hover:text-primary transition-colors">{s.label}</span>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" /> Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map(area => (
                    <span key={area} className="text-sm bg-background border border-border rounded-full px-3 py-1 text-muted-foreground">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Based in Pollachi · Serving all of Tamil Nadu &amp; beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location Sections ──────────────────────────────────────── */}
      <section className="py-20 bg-muted/30" aria-labelledby="locations-heading">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 id="locations-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-4">
            Digital Marketing Services in Pollachi &amp; Coimbatore
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            We are the local experts. Our region-specific knowledge gives our clients a decisive advantage over businesses using generic national agencies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl border border-border p-8 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold">Digital Marketing in Pollachi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pollachi is a thriving agricultural and commercial hub in the Coimbatore district of Tamil Nadu. With a growing number of businesses going online, the competition for local digital visibility is intensifying rapidly. Synzephyr Technologies works with businesses across every industry in Pollachi — from retail stores and restaurants to clinics, coaching centres, and service providers — helping them outrank competitors on Google and attract a consistent stream of new customers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Pollachi-focused SEO strategies target high-intent local searches like &quot;best [service] in Pollachi&quot;, ensuring your business appears exactly when and where potential customers are looking. Combined with GMB optimization and targeted social media campaigns, we deliver a complete local digital marketing solution.
              </p>
              <Link href="/digital-marketing-pollachi" className="inline-flex items-center text-primary font-semibold hover:underline text-sm">
                Digital Marketing in Pollachi <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-background rounded-2xl border border-border p-8 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold">Digital Marketing in Coimbatore</h3>
              <p className="text-muted-foreground leading-relaxed">
                Coimbatore — the &quot;Manchester of South India&quot; — is one of Tamil Nadu&apos;s most competitive business markets. With a sprawling industrial base, a thriving IT sector, and thousands of small businesses, ranking on Google in Coimbatore requires a sophisticated, data-driven approach. Synzephyr Technologies brings that expertise to Coimbatore businesses, helping them dominate both organic search and Google Maps across the city.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From RS Puram to Peelamedu, Gandhipuram to Singanallur — we build hyper-local SEO and digital marketing strategies that target your exact service area within Coimbatore. Our proven approach combines on-page SEO, technical optimization, local citation building, and GMB management to put you ahead of competitors.
              </p>
              <Link href="/digital-marketing-coimbatore" className="inline-flex items-center text-primary font-semibold hover:underline text-sm">
                Digital Marketing in Coimbatore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────────────────── */}
      <section className="py-20 bg-background" aria-labelledby="faq-heading">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Common questions from businesses in Pollachi &amp; Coimbatore about digital marketing.
          </p>

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
              <details key={i} className="group bg-muted/40 border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg list-none hover:bg-muted/60 transition-colors">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-primary text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
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
