import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { Megaphone, MessageCircle, MousePointerClick } from "lucide-react"

export const metadata: Metadata = {
    title: "Digital Marketing in Pollachi | Social Media & PPC | Synzephyr",
    description: "Grow your brand with Pollachi's premier digital marketing agency. Social media management, Facebook Ads, and more for local businesses.",
}

const benefits = [
    "Social Media Management (FB, Insta, LinkedIn)",
    "Facebook & Instagram Ads",
    "Google Ads (PPC) Campaigns",
    "Email Marketing Automation",
    "Content Strategy & Creation",
    "Influencer Collaborations",
]

export default function DigitalMarketingPollachiPage() {
    return (
        <ServiceLayout
            title="Digital Marketing in Pollachi"
            subtitle="Accelerate Your Growth with Targeted Digital Marketing Campaigns."
            description="Connect with your audience where they spend their time. Our digital marketing services in Pollachi are designed to build brand awareness, engage your community, and drive direct sales. Whether it's viral social media content or high-converting paid ads, we have the expertise to deliver results."
            benefits={benefits}
        >
            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <Megaphone className="h-8 w-8 text-red-500" />
                    <div>
                        <h3 className="font-bold">Brand Awareness</h3>
                        <p className="text-sm text-muted-foreground">Make your brand a household name in Pollachi.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <MessageCircle className="h-8 w-8 text-blue-400" />
                    <div>
                        <h3 className="font-bold">Customer Engagement</h3>
                        <p className="text-sm text-muted-foreground">Build lasting relationships with your audience.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <MousePointerClick className="h-8 w-8 text-green-500" />
                    <div>
                        <h3 className="font-bold">Instant Traffic</h3>
                        <p className="text-sm text-muted-foreground">Get immediate visibility with paid ad campaigns.</p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    )
}
