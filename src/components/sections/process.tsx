import Link from "next/link"

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We analyze your business, goals, competitor landscape, and local market in Pollachi or Coimbatore to understand your unique needs and opportunity.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "We develop a tailored digital marketing roadmap — SEO, GMB, social media, or ads — designed to achieve your specific growth objectives.",
    },
    {
        number: "03",
        title: "Execute",
        description: "Our team implements the strategy with precision, using the latest SEO tools, content techniques, and ad platforms.",
    },
    {
        number: "04",
        title: "Grow",
        description: "We monitor performance monthly, optimize campaigns continuously, and scale your success to bring more customers and revenue.",
    },
]

export function Process() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        A simple, transparent approach to digital growth for businesses in Pollachi &amp; Coimbatore.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative p-6 bg-background rounded-2xl border border-border animate-fade-in-up delay-${(index + 1) * 100}`}
                        >
                            <div className="text-5xl font-bold text-muted-foreground/10 absolute top-4 right-4 select-none" aria-hidden="true">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-4 mt-8">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                        Start Your Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}
