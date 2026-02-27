import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { BarChart, Search, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
    title: "SEO Services in Pollachi | Best SEO Company Pollachi | Synzephyr",
    description: "Looking for the best SEO services in Pollachi? Synzephyr Technologies helps local businesses rank #1 on Google with proven SEO strategies. Get more leads, more calls, and more sales. Free audit!",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/seo-services-pollachi",
    },
    openGraph: {
        title: "SEO Services in Pollachi | Best SEO Company | Synzephyr",
        description: "Rank #1 on Google in Pollachi with Synzephyr's expert SEO services. Local SEO, keyword research, on-page & off-page optimization.",
        url: "https://synzephyrtechnologies.web.app/seo-services-pollachi",
    },
}

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services in Pollachi",
    "description": "Professional search engine optimization services for businesses in Pollachi, Tamil Nadu. We help local businesses rank higher on Google and attract more customers.",
    "provider": { "@id": "https://synzephyrtechnologies.web.app/#localbusiness" },
    "serviceType": "Search Engine Optimization",
    "areaServed": { "@type": "City", "name": "Pollachi" },
    "url": "https://synzephyrtechnologies.web.app/seo-services-pollachi",
}

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How long does SEO take to show results in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most businesses in Pollachi start seeing noticeable improvements in rankings within 3–6 months of starting a consistent SEO campaign. Local SEO results can appear even faster, sometimes within 4–8 weeks." }
        },
        {
            "@type": "Question",
            "name": "Why do I need a local SEO company in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "A local SEO company in Pollachi understands the regional market, Tamil audience behavior, and the specific keywords your potential customers search for. This local expertise leads to faster, more effective results than a generic national agency." }
        },
        {
            "@type": "Question",
            "name": "What is included in your SEO services in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Our SEO services in Pollachi include keyword research, on-page optimization, technical SEO audit, local citations, Google Business Profile optimization, link building, and monthly performance reporting." }
        }
    ]
}

const benefits = [
    "Keyword Research tailored for Pollachi & Coimbatore market",
    "On-Page & Off-Page Optimization",
    "Local SEO to dominate Google Maps & Local Pack",
    "Technical SEO for faster loading speeds",
    "Google Business Profile (GMB) Optimization",
    "Competitor Analysis & Strategy",
    "High-Quality Backlink Building",
    "Monthly Performance Reports with clear ROI",
]

export default function SeoPollachiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <ServiceLayout
                title="SEO Services in Pollachi"
                subtitle="Rank #1 on Google and Attract High-Quality Leads in Pollachi."
                description="In today's digital age, if your business isn't found on Google, you're losing customers to your competitors every single day. At Synzephyr Technologies — the best SEO company in Pollachi — we specialize in helping local businesses climb the search engine rankings. Our data-driven SEO strategies are designed to increase your visibility, drive sustained organic traffic, and convert visitors into loyal, paying customers. Whether you run a retail store, a restaurant, a clinic, or a service business in Pollachi, we have the expertise to get you results."
                benefits={benefits}
            >
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <Search className="h-8 w-8 text-blue-500" />
                        <div>
                            <h3 className="font-bold">Targeted Local Traffic</h3>
                            <p className="text-sm text-muted-foreground">Reach customers in Pollachi actively looking for your services on Google.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <TrendingUp className="h-8 w-8 text-green-500" />
                        <div>
                            <h3 className="font-bold">Sustainable Organic Growth</h3>
                            <p className="text-sm text-muted-foreground">Long-term results that build your brand authority in the Pollachi market.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <BarChart className="h-8 w-8 text-purple-500" />
                        <div>
                            <h3 className="font-bold">Measurable ROI</h3>
                            <p className="text-sm text-muted-foreground">Track every click, call, and conversion with detailed monthly reporting.</p>
                        </div>
                    </div>
                    <section className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <h2 className="font-bold text-lg mb-2">Why Choose Synzephyr for SEO in Pollachi?</h2>
                        <p className="text-sm text-muted-foreground">We are a Pollachi-based SEO agency with deep knowledge of the local business landscape. We have helped businesses across Pollachi, Udumalpet, and greater Coimbatore district achieve top Google rankings — driving real footfall and online inquiries.</p>
                    </section>
                </div>
            </ServiceLayout>
        </>
    )
}
