"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
    {
        title: "Local Market Expertise",
        desc: "Deep knowledge of Pollachi, Coimbatore, and Tamil Nadu consumer behaviour that national agencies simply don't have.",
    },
    {
        title: "Data-Driven Strategies",
        desc: "Every campaign decision is backed by keyword data, competitor analysis, and live performance metrics.",
    },
    {
        title: "Transparent Reporting",
        desc: "Monthly reports with clear metrics — rankings, traffic, leads, and ROI — so you always know what's working.",
    },
    {
        title: "Customized Solutions",
        desc: "No cookie-cutter packages. Every strategy is built specifically for your business, industry, and local audience.",
    },
    {
        title: "Dedicated Support Team",
        desc: "A real team you can call or WhatsApp. We are always available to answer questions and provide updates.",
    },
    {
        title: "Proven Track Record",
        desc: "We have helped businesses in Pollachi & Coimbatore rank on page 1 of Google and grow their customer base.",
    },
]

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-background" aria-labelledby="why-heading">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 id="why-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                            Why Choose Synzephyr Technologies?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                            We don&apos;t just deliver digital marketing services — we deliver measurable business growth. As a Pollachi-based digital marketing agency, our deep understanding of the local market in Pollachi and Coimbatore allows us to create strategies that truly resonate with your target audience and outperform generic, one-size-fits-all approaches.
                        </p>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            When you work with Synzephyr, you get a partner who is as invested in your success as you are. We combine technical SEO expertise, creative content, and paid campaign management with genuine local knowledge to build digital marketing campaigns that convert.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold block">{reason.title}</span>
                                        <span className="text-sm text-muted-foreground">{reason.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl opacity-20 blur-2xl dark:opacity-10" aria-hidden="true" />
                        <div className="relative bg-muted/50 p-8 rounded-2xl border border-border space-y-6">
                            <h3 className="text-2xl font-bold">Our Commitment to Pollachi &amp; Coimbatore Businesses</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                At Synzephyr Technologies, we believe that every business in Pollachi, Coimbatore, and across Tamil Nadu deserves access to high-quality, affordable digital marketing that drives genuine growth. We are committed to building long-term partnerships — not just completing one-off projects.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Your growth is our success. That&apos;s why we focus on results that matter — more phone calls, more website visits, more walk-in customers, and ultimately more revenue for your business. We measure our performance by the growth you experience, not by the number of social media posts we publish.
                            </p>
                            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-border">
                                {[
                                    { stat: "50+", label: "Clients Served" },
                                    { stat: "3+", label: "Years Experience" },
                                    { stat: "100%", label: "Transparent Reports" },
                                ].map((item, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">{item.stat}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
