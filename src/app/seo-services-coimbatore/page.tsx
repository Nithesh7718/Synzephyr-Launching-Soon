import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { Globe, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
    title: "SEO Services in Coimbatore | Top Rated SEO Agency | Synzephyr",
    description: "Expand your business reach in Coimbatore with our advanced SEO strategies. Proven track record of ranking businesses on page 1.",
}

const benefits = [
    "Comprehensive SEO Audit",
    "Enterprise-grade Keyword Strategy",
    "Content Marketing & Optimization",
    "High-Quality Backlink Building",
    "E-commerce SEO Solutions",
    "Conversion Rate Optimization (CRO)",
]

export default function SeoCoimbatorePage() {
    return (
        <ServiceLayout
            title="SEO Services in Coimbatore"
            subtitle="Dominate the Competitive Coimbatore Market with Expert SEO."
            description="Coimbatore is a bustling hub of industry and commerce. Standing out requires more than just a website; it requires a strategic presence. Synzephyr provides cutting-edge SEO services tailored for the Coimbatore market, helping you outrank competitors and capture significant market share."
            benefits={benefits}
        >
            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <Globe className="h-8 w-8 text-cyan-500" />
                    <div>
                        <h3 className="font-bold">Wider Reach</h3>
                        <p className="text-sm text-muted-foreground">Target customers across the entire Coimbatore region.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <Users className="h-8 w-8 text-orange-500" />
                    <div>
                        <h3 className="font-bold">Quality Leads</h3>
                        <p className="text-sm text-muted-foreground">Attract high-intent users ready to purchase.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    <div>
                        <h3 className="font-bold">Industry Authority</h3>
                        <p className="text-sm text-muted-foreground">Establish your brand as the leader in your niche.</p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    )
}
