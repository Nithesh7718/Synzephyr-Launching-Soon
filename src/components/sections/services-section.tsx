"use client"

import { Search, Globe, Palette, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "SEO Optimization",
        description: "Dominate search results with our advanced SEO strategies. We focus on ranking your business specifically for high-intent keywords in Pollachi and Coimbatore, ensuring a consistent flow of organic traffic and local leads to your website.",
        icon: Search,
        href: "/seo-services-pollachi",
    },
    {
        title: "Digital Marketing",
        description: "Reach your audience where they spend their time. Our comprehensive digital marketing service includes expert management of Facebook, Instagram, and Google Ads, specifically designed to increase brand awareness for businesses across Tamil Nadu.",
        icon: Globe,
        href: "/digital-marketing-pollachi",
    },
    {
        title: "Graphic Design",
        description: "Convert visitors into customers with professional visual storytelling. From premium logo design and brand identity to engaging social media creatives and high-quality print materials, we make your business stand out in the competitive Pollachi market.",
        icon: Palette,
        href: "/graphic-design-services-pollachi",
    },
    {
        title: "GMB Optimization",
        description: "Be the first business customers see on Google Maps. We optimize your Google Business Profile (GMB) to rank in the Local 3-Pack, driving immediate phone calls, walk-in traffic, and trust from customers searching for local services in Pollachi.",
        icon: MapPin,
        href: "/google-business-profile-setup-pollachi",
    },
]

export function ServicesSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Comprehensive digital solutions designed to help your business grow.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in-up delay-${(index + 1) * 100}`}
                        >
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                            <Link
                                href={service.href}
                                className="text-primary font-medium text-sm inline-flex items-center hover:underline"
                            >
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
