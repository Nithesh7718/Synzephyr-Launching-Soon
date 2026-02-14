"use client"

import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We analyze your business, goals, and target audience to understand your unique needs.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "We develop a tailored digital marketing roadmap designed to achieve your specific objectives.",
    },
    {
        number: "03",
        title: "Execute",
        description: "Our team implements the strategy with precision, utilizing the latest tools and techniques.",
    },
    {
        number: "04",
        title: "Grow",
        description: "We monitor performance, optimize campaigns, and scale your success to new heights.",
    },
]

export function Process() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        A simple, transparent approach to digital growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative p-6 bg-background rounded-2xl border border-border"
                        >
                            <div className="text-5xl font-bold text-muted/20 absolute top-4 right-4 select-none">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-4 mt-8">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
