import { Building2, Utensils, Stethoscope, ShoppingBag } from "lucide-react"

const industries = [
    {
        title: "Retail & E-commerce",
        description: "In the bustling markets of Pollachi and Coimbatore, retail competition is fierce. We help local stores transition to digital, ranking them for 'near me' searches and building high-converting landing pages that drive both foot traffic and online sales.",
        icon: ShoppingBag,
    },
    {
        title: "Restaurants & Cafes",
        description: "Pollachi's food scene is vibrant. Our Local SEO and GMB strategies ensure your restaurant appears at the top when hungry locals and tourists search for places to eat, highlighted by professional food photography and review management.",
        icon: Utensils,
    },
    {
        title: "Real Estate & Construction",
        description: "Real estate in Coimbatore and Pollachi requires high trust. We build authority for builders and agents through strategic content marketing, technical SEO, and lead-generation ads that target serious buyers in the Tamil Nadu region.",
        icon: Building2,
    },
    {
        title: "Healthcare & Clinics",
        description: "Healthcare providers need visibility to help patients. We specialize in medical SEO, helping clinics and doctors in Pollachi rank for specialized keywords, ensuring patients find the care they need quickly and easily through GMB and website search.",
        icon: Stethoscope,
    },
]

export function LocalExpertise() {
    return (
        <section className="py-20 bg-background" aria-labelledby="expertise-heading">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 id="expertise-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Local Industry Expertise
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
                        We don&apos;t just do digital marketing; we understand the local business landscape of Pollachi and Coimbatore. Here&apos;s how we help specific industries grow.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {industries.map((item, index) => (
                        <div key={index} className="flex gap-6 items-start">
                            <div className="mt-1 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 p-8 md:p-12 bg-primary/5 rounded-3xl border border-primary/20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2 space-y-4">
                            <h3 className="text-2xl font-bold">Why Pollachi Businesses Choose Synzephyr</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Unlike national agencies that apply a one-size-fits-all strategy, we live and work in the Pollachi and Coimbatore region. We know that a business in Pollachi needs a different digital approach than one in Chennai or Bangalore. We focus on hyper-local keywords, regional search patterns, and the specific consumer behavior of the Tamil Nadu market to deliver a competitive edge that simply can&apos;t be matched.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to empower local entrepreneurs with the same high-level digital tools used by global corporations, but with a personal, local touch that understands the heritage and future of Pollachi business.
                            </p>
                        </div>
                        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border">
                            <div className="text-4xl font-bold text-primary mb-2">10X</div>
                            <p className="font-semibold mb-1">Local Visibility</p>
                            <p className="text-sm text-muted-foreground">Average increase in local map appearances for optimized GMB profiles.</p>
                            <hr className="my-4 border-border" />
                            <div className="text-4xl font-bold text-primary mb-2">#1</div>
                            <p className="font-semibold mb-1">Market Position</p>
                            <p className="text-sm text-muted-foreground">We aim to put our clients at the top of Google for their primary local keywords.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
