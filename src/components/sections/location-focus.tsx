"use client"

import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const serviceAreas = [
    "Pollachi", "Coimbatore", "Udumalpet", "Tiruppur", "Anaimalai",
    "Valparai", "Palladam", "Kinathukadavu", "Madukarai", "Sulur"
]

export function LocationFocus() {
    return (
        <section className="py-24 bg-muted/30 dark:bg-muted/10 overflow-hidden" aria-labelledby="locations-heading">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <h2 id="locations-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Global Reach, <span className="text-primary">Local Expertise</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        While our physical Headquarters are in <strong>Pollachi</strong> and <strong>Coimbatore</strong>, we provide expert digital growth and marketing services to clients <strong>all over the world, completely online</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-background rounded-3xl border border-border p-8 md:p-12 space-y-6 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold">Pollachi HQ</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                            <p>
                                Our primary office is located in the heart of Pollachi, serving as a hub for our operations and local consultations within the Coimbatore district.
                            </p>
                            <p>
                                We leverage our local roots to understand regional markets while applying global standards to every campaign we execute online.
                            </p>
                        </div>
                        <Link href="/digital-marketing-pollachi" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group-hover:underline">
                            Local SEO & Marketing <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="bg-background rounded-3xl border border-border p-8 md:p-12 space-y-6 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group">
                        <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold">Coimbatore Base</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                            <p>
                                With a strong presence in Coimbatore, the industrial capital of South India, we are positioned to help businesses scale from local industries to global leaders.
                            </p>
                            <p>
                                Our Coimbatore-centric strategies are built for high-competition markets, ensuring your brand stands out, whether locally or internationally.
                            </p>
                        </div>
                        <Link href="/digital-marketing-coimbatore" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group-hover:underline">
                            Strategic Digital Growth <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="bg-primary/5 rounded-3xl border border-primary/20 p-8 text-center max-w-3xl mx-auto backdrop-blur-sm">
                    <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" /> Serving All Over Online
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        We collaborate with organizations across the globe, delivering high-performance digital solutions remotely.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {serviceAreas.map(area => (
                            <span key={area} className="text-xs font-medium bg-background border border-border rounded-lg px-4 py-2 text-muted-foreground hover:border-primary/30 transition-colors shadow-sm">
                                {area}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 font-semibold uppercase tracking-widest opacity-60">
                        USA · UK · India · Worldwide
                    </p>
                </div>
            </div>
        </section>
    )
}
