"use client"

import { Search, Globe, Palette, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "SEO Optimization",
        description: "Dominate search results with our global SEO experts. We scale your business with high-intent keywords and international ranking strategies, driving organic growth from Coimbatore to the US.",
        icon: Search,
        href: "/seo-services-pollachi",
    },
    {
        title: "Digital Marketing",
        description: "As a premier digital marketing agency, we offer professional social media management and high-ROI ad campaigns (Facebook, Instagram, Google Ads) for global brands and startups.",
        icon: Globe,
        href: "/digital-marketing-pollachi",
    },
    {
        title: "Graphic Design",
        description: "Our creative graphic design studio delivers professional logo design and corporate branding worldwide. We build visual identities that command authority in international markets.",
        icon: Palette,
        href: "/graphic-design-services-pollachi",
    },
    {
        title: "GMB Optimization",
        description: "Local dominance combined with global standards. We optimize your Google Business Profile to rank in the Local 3-Pack, driving immediate calls and trust from local customers and global searchers.",
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
