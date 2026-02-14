"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
    "Local Market Expertise (Pollachi/Coimbatore)",
    "Data-Driven Strategies",
    "Transparent Reporting",
    "Customized Solutions",
    "Dedicated Support Team",
    "Proven Track Record",
]

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                            Why Choose Synzephyr?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            We don&apos;t just deliver services; we deliver results. Our deep understanding of the Pollachi and Coimbatore markets allows us to create strategies that truly resonate with your local audience.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-2"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span className="font-medium">{reason}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl opacity-20 blur-2xl dark:opacity-10" />
                        <div className="relative bg-muted/50 p-8 rounded-2xl border border-border">
                            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                            <p className="text-muted-foreground">
                                &quot;At Synzephyr, we believe in building long-term partnerships. Your growth is our success, and we are committed to providing you with the tools and strategies you need to thrive in the digital landscape.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
