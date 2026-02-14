import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { MapPin, Star, PhoneCall } from "lucide-react"

export const metadata: Metadata = {
    title: "Google Business Profile Setup Pollachi | GMB Optimization | Synzephyr",
    description: "Expert Google Business Profile (GMB) setup and optimization in Pollachi. Improve local visibility and get more calls from nearby customers.",
}

const benefits = [
    "Complete GMB Profile Setup & Verification",
    "Keyword Optimization for Local Search",
    "Review Management & Response Strategy",
    "Post Updates & Offer Management",
    "Photo & Video Uploads",
    "Local Citation Building",
]

export default function GmbSetupPollachiPage() {
    return (
        <ServiceLayout
            title="Google Business Profile Setup"
            subtitle="Be the First Choice for Local Customers in Pollachi."
            description="When customers in Pollachi search for services you offer, do they find you? A well-optimized Google Business Profile (formerly Google My Business) is crucial for local visibility. We help you set up, verify, and optimize your profile to ensure you appear in the 'Local Pack' and drive foot traffic and calls."
            benefits={benefits}
        >
            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <MapPin className="h-8 w-8 text-red-600" />
                    <div>
                        <h3 className="font-bold">Local Visibility</h3>
                        <p className="text-sm text-muted-foreground">Show up when it matters most - in local searches.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <Star className="h-8 w-8 text-yellow-400" />
                    <div>
                        <h3 className="font-bold">Trust & Credibility</h3>
                        <p className="text-sm text-muted-foreground">Build trust with positive reviews and accurate info.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <PhoneCall className="h-8 w-8 text-green-600" />
                    <div>
                        <h3 className="font-bold">More Calls</h3>
                        <p className="text-sm text-muted-foreground">Make it easy for customers to contact you directly.</p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    )
}
