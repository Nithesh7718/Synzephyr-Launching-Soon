"use client"

import { motion } from "framer-motion"
import { Search, Globe, Palette, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "SEO Optimization",
        description: "Rank higher on Google and attract local customers in Pollachi & Coimbatore with our data-driven SEO strategies.",
        icon: Search,
        href: "/seo-services-pollachi",
    },
    {
        title: "Digital Marketing",
        description: "Comprehensive social media and ad campaigns to boost your brand visibility and engagement across platforms.",
        icon: Globe,
        href: "/digital-marketing-pollachi",
    },
    {
        title: "Graphic Design",
        description: "Stunning visuals and branding materials that capture your audience's attention and communicate your message effectively.",
        icon: Palette,
        href: "/graphic-design-services-pollachi",
    },
    {
        title: "GMB Optimization",
        description: "Optimize your Google Business Profile to dominate local search results and drive foot traffic to your store.",
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
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
