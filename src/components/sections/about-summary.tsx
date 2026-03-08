"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

const services = [
    { label: "Advanced SEO Hub", desc: "Rank #1 for high-volume keywords in Pollachi and Coimbatore search results.", href: "/seo-services-pollachi" },
    { label: "Strategic Digital Marketing", desc: "Targeted ads and social media management to skyrocket your brand awareness.", href: "/digital-marketing-pollachi" },
    { label: "GMB Power Optimization", desc: "Dominate the Local 3-Pack and drive massive phone calls and store visits.", href: "/google-business-profile-setup-pollachi" },
    { label: "Premium Graphic Design", desc: "Pro logos, brand kits, and marketing materials that build instant authority.", href: "/graphic-design-services-pollachi" },
]

export function AboutSummary() {
    return (
        <section className="py-24 bg-background overflow-hidden" aria-labelledby="about-heading">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                            About Synzephyr Technologies
                        </div>
                        <h2 id="about-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
                            Global Digital Growth Partner with <span className="text-primary">Deep Technical Roots</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
                            <p>
                                Synzephyr Technologies is a results-driven digital marketing agency serving clients <strong>all over the world, completely online</strong>. While we maintain our physical roots in Pollachi and Coimbatore, India, our operations are built for global scale.
                            </p>
                            <p>
                                We bridge the gap between technical excellence and creative marketing to help businesses of all sizes scale their online presence. Our team combines international standards with a personalized touch, regardless of your physical location.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link href="/about" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-xl border border-input bg-background px-8 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all">
                                Free Consultation
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-500" />
                        <div className="relative space-y-6">
                            <div className="bg-muted/40 backdrop-blur-sm rounded-3xl border border-border p-8 space-y-6 shadow-xl">
                                <h3 className="text-2xl font-bold">Comprehensive Growth Services</h3>
                                <p className="text-sm text-muted-foreground">
                                    We provide a full-funnel digital marketing approach to ensure your business stays ahead of the curve in the Coimbatore district business ecosystem.
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    {services.map((s, i) => (
                                        <Link key={i} href={s.href} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-background/80 transition-all border border-transparent hover:border-border group/item">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:rotate-12 transition-transform">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold group-hover/item:text-primary transition-colors">{s.label}</h4>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
