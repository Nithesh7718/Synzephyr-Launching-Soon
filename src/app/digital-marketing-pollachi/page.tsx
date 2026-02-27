import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { Megaphone, MessageCircle, MousePointerClick } from "lucide-react"

export const metadata: Metadata = {
    title: "Digital Marketing Agency in Pollachi | Synzephyr",
    description: "Synzephyr Technologies is the leading digital marketing agency in Pollachi. We offer social media management, Facebook & Instagram ads, Google Ads, and content marketing to grow your business.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/digital-marketing-pollachi",
    },
    openGraph: {
        title: "Digital Marketing Agency in Pollachi | Synzephyr Technologies",
        description: "Grow your brand with Pollachi's leading digital marketing agency. Social media, Facebook Ads, Google Ads & more for local businesses.",
        url: "https://synzephyrtechnologies.web.app/digital-marketing-pollachi",
    },
}

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing in Pollachi",
    "description": "Comprehensive digital marketing services for businesses in Pollachi including social media management, Facebook Ads, Google Ads PPC, email marketing, and content strategy.",
    "provider": { "@id": "https://synzephyrtechnologies.web.app/#localbusiness" },
    "serviceType": "Digital Marketing",
    "areaServed": { "@type": "City", "name": "Pollachi" },
    "url": "https://synzephyrtechnologies.web.app/digital-marketing-pollachi",
}

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Which is the best digital marketing agency in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Synzephyr Technologies is widely recognized as the best digital marketing agency in Pollachi, offering full-service digital marketing including SEO, social media, Google Ads, and GMB optimization." }
        },
        {
            "@type": "Question",
            "name": "How much does digital marketing cost for a small business in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Our digital marketing packages for small businesses in Pollachi start at affordable monthly rates. We customize every plan based on your business goals, target audience, and budget. Contact us for a free consultation." }
        },
        {
            "@type": "Question",
            "name": "Do you run Facebook and Instagram ads for businesses in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we manage Meta (Facebook & Instagram) ad campaigns for businesses in Pollachi and Coimbatore. We handle everything from audience targeting and ad creative to budget optimization and performance reporting." }
        }
    ]
}

const benefits = [
    "Social Media Management (Facebook, Instagram, LinkedIn)",
    "Facebook & Instagram Ads with ROI-focused targeting",
    "Google Ads (PPC) Campaigns for Pollachi businesses",
    "YouTube Video Marketing",
    "Email Marketing Automation",
    "WhatsApp Marketing Campaigns",
    "Content Strategy & Creation (Tamil & English)",
    "Influencer Collaborations & Partnerships",
    "Monthly Analytics & Performance Reports",
]

export default function DigitalMarketingPollachiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <ServiceLayout
                title="Digital Marketing Agency in Pollachi"
                subtitle="Accelerate Your Growth with Targeted Digital Marketing Campaigns."
                description="Connect with your audience where they spend their time. As the leading digital marketing agency in Pollachi, Synzephyr Technologies designs and executes campaigns that build brand awareness, engage your community, and drive direct sales. Whether it's viral social media content, precision-targeted Facebook Ads, or high-converting Google Ads, we have the strategy, tools, and expertise to deliver measurable results for your Pollachi-based business. We serve businesses across Pollachi, Udumalpet, Anaimalai, and the greater Coimbatore district."
                benefits={benefits}
            >
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <Megaphone className="h-8 w-8 text-red-500" />
                        <div>
                            <h3 className="font-bold">Brand Awareness in Pollachi</h3>
                            <p className="text-sm text-muted-foreground">Make your brand a household name across Pollachi and surrounding areas.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <MessageCircle className="h-8 w-8 text-blue-400" />
                        <div>
                            <h3 className="font-bold">Customer Engagement</h3>
                            <p className="text-sm text-muted-foreground">Build lasting relationships with your local audience through compelling content.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <MousePointerClick className="h-8 w-8 text-green-500" />
                        <div>
                            <h3 className="font-bold">Instant Traffic & Leads</h3>
                            <p className="text-sm text-muted-foreground">Get immediate visibility and inquiries with targeted paid ad campaigns.</p>
                        </div>
                    </div>
                    <section className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <h2 className="font-bold text-lg mb-2">Local Market Expertise</h2>
                        <p className="text-sm text-muted-foreground">We understand the Pollachi market — the festivals, the local culture, the Tamil-speaking audience. This local knowledge helps us craft campaigns that truly resonate and convert.</p>
                    </section>
                </div>
            </ServiceLayout>
        </>
    )
}
