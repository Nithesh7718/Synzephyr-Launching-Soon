"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-20 bg-primary/5 dark:bg-primary/10">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                    Ready to Grow Your Business?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-lg mb-8">
                    Let&apos;s discuss how Synzephyr Technologies can help you dominate the market in Pollachi, Coimbatore, and beyond.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </section>
    )
}
