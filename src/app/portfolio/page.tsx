import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Our Portfolio | Synzephyr Technologies",
    description: "Check out our latest projects. We deliver high-quality websites, SEO results, and branding for businesses in Pollachi and Coimbatore.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/portfolio",
    },
}

const projects = [
    {
        title: "E-Commerce Growth",
        category: "SEO & Digital Marketing",
        description: "Increased organic traffic by 200% for a local clothing brand in Coimbatore.",
        image: "/placeholder-project-1.jpg", // We would need actual images here
    },
    {
        title: "Corporate Rebranding",
        category: "Branding & Web Design",
        description: "Complete brand overhaul and new website for a manufacturing firm in Pollachi.",
        image: "/placeholder-project-2.jpg",
    },
    {
        title: "Local SEO Dominance",
        category: "Local SEO",
        description: "Helped a dental clinic rank #1 for all major keywords in their locality.",
        image: "/placeholder-project-3.jpg",
    },
]

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">Our Work</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                        A showcase of our recent projects and the results we&apos;ve achieved for our clients.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group overflow-hidden rounded-2xl border border-border bg-background hover:shadow-lg transition-all">
                                <div className="relative h-64 bg-muted w-full overflow-hidden">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary">
                                        Project Image Placeholder
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground text-lg mb-6">Want to see more detailed case studies?</p>
                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
