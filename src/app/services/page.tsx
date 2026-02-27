import type { Metadata } from "next"
import Link from "next/link"
import { Search, Globe, Palette, MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Digital Marketing Services in Pollachi | Synzephyr",
    description: "Explore Synzephyr's full range of digital marketing services in Pollachi & Coimbatore: SEO, social media marketing, graphic design, and Google Business Profile (GMB) optimization.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/services",
    },
}


const services = [
    {
        title: "SEO Services in Pollachi",
        description: "Dominate search results and attract local customers with our specialized SEO strategies tailored for the Pollachi market.",
        icon: Search,
        href: "/seo-services-pollachi",
    },
    {
        title: "SEO Services in Coimbatore",
        description: "Expand your reach in the industrial hub of Coimbatore with our data-driven SEO solutions.",
        icon: Search,
        href: "/seo-services-coimbatore",
    },
    {
        title: "Digital Marketing in Pollachi",
        description: "Comprehensive social media marketing and PPC campaigns to grow your brand presence online.",
        icon: Globe,
        href: "/digital-marketing-pollachi",
    },
    {
        title: "Graphic Design Services",
        description: "Creative logo design, branding, and marketing materials that make your business stand out.",
        icon: Palette,
        href: "/graphic-design-services-pollachi",
    },
    {
        title: "GMB Setup & Optimization",
        description: "Get found on Google Maps and Drive foot traffic with a fully optimized Google Business Profile.",
        icon: MapPin,
        href: "/google-business-profile-setup-pollachi",
    },
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">Our Services</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                        Tailored digital solutions to help your business thrive in the competitive landscape of Tamil Nadu.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-between p-8 bg-background rounded-2xl border border-border hover:shadow-lg transition-all hover:scale-[1.02]"
                            >
                                <div>
                                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                                    <p className="text-muted-foreground mb-6">{service.description}</p>
                                </div>
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center text-primary font-semibold hover:underline mt-auto"
                                >
                                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
