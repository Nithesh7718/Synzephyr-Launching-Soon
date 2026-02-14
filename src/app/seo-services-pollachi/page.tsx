import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { BarChart, Search, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
    title: "SEO Services in Pollachi | Best SEO Company | Synzephyr",
    description: "Boost your local business ranking in Pollachi with Synzephyr's expert SEO services. Get found on Google and drive more customers.",
}

const benefits = [
    "Keyword Research tailored for Pollachi market",
    "On-Page & Off-Page Optimization",
    "Local SEO to dominate Google Maps",
    "Technical SEO for faster loading speeds",
    "Competitor Analysis",
    "Monthly Performance Reports",
]

export default function SeoPollachiPage() {
    return (
        <ServiceLayout
            title="SEO Services in Pollachi"
            subtitle="Rank #1 on Google and Attract High-Quality Leads in Pollachi."
            description="In today's digital age, if your business isn't found on Google, you're losing customers to your competitors. At Synzephyr, we specialize in helping Pollachi-based businesses climb the search engine rankings. Our data-driven SEO strategies are designed to increase your visibility, drive organic traffic, and convert visitors into loyal customers."
            benefits={benefits}
        >
            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <Search className="h-8 w-8 text-blue-500" />
                    <div>
                        <h3 className="font-bold">Targeted Traffic</h3>
                        <p className="text-sm text-muted-foreground">Reach customers actively looking for your services.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <div>
                        <h3 className="font-bold">Sustainable Growth</h3>
                        <p className="text-sm text-muted-foreground">Long-term results that build your brand authority.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <BarChart className="h-8 w-8 text-purple-500" />
                    <div>
                        <h3 className="font-bold">Measurable ROI</h3>
                        <p className="text-sm text-muted-foreground">Track every click and conversion with detailed reporting.</p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    )
}
