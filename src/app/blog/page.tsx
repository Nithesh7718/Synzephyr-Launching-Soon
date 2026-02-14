import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

export const metadata: Metadata = {
    title: "Blog & Insights | Synzephyr Technologies",
    description: "Stay updated with the latest trends in SEO, digital marketing, and web design. Expert insights for businesses in Pollachi & Coimbatore.",
}

const posts = [
    {
        title: "Why Local SEO is Crucial for Pollachi Businesses",
        excerpt: "Learn how to leverage Google Business Profile and local keywords to attract customers in your neighborhood.",
        date: "October 15, 2023",
        author: "Synzephyr Team",
        category: "SEO",
        slug: "local-seo-pollachi",
    },
    {
        title: "5 Digital Marketing Trends to Watch in 2024",
        excerpt: "From AI-driven content to video marketing, discover the strategies that will dominate the digital landscape next year.",
        date: "November 2, 2023",
        author: "Synzephyr Team",
        category: "Marketing",
        slug: "digital-marketing-trends-2024",
    },
    {
        title: "The Importance of Responsive Web Design",
        excerpt: "With mobile usage skyrocketing, having a mobile-friendly website is no longer optional. Here's why.",
        date: "November 20, 2023",
        author: "Synzephyr Team",
        category: "Web Design",
        slug: "responsive-web-design",
    },
]

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">Insights & News</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                        Expert advice, industry trends, and tips to help you grow your business online.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article key={index} className="flex flex-col bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-muted w-full relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/50">
                                        Article Image
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
                                        <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                                        <Link href={`#`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <User className="h-3 w-3 mr-1" /> {post.author}
                                        </div>
                                        <Link href="#" className="text-sm font-medium text-primary hover:underline">Read More</Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
