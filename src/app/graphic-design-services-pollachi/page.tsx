import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { PenTool, Image as ImageIcon, Layers } from "lucide-react"

export const metadata: Metadata = {
    title: "Graphic Design Services Pollachi | Logo & Branding | Synzephyr",
    description: "Professional graphic design services in Pollachi. Logo design, branding, brochures, and social media creative that captivate your audience.",
}

const benefits = [
    "Custom Logo Design & Branding",
    "Social Media Post Creatives",
    "Brochure & Flyer Design",
    "Business Card Design",
    "Packaging Design",
    "UI/UX Design for Web & Mobile",
]

export default function GraphicDesignPollachiPage() {
    return (
        <ServiceLayout
            title="Graphic Design Services Pollachi"
            subtitle="Visual Storytelling that Captures Essence & Drives Action."
            description="First impressions matter. Our creative graphic design team in Pollachi helps you craft a visual identity that resonates with your customers. From memorable logos to stunning marketing materials, we ensure every pixel aligns with your brand's message and goals."
            benefits={benefits}
        >
            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <PenTool className="h-8 w-8 text-pink-500" />
                    <div>
                        <h3 className="font-bold">Unique Identity</h3>
                        <p className="text-sm text-muted-foreground">Stand out from the crowd with custom branding.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <ImageIcon className="h-8 w-8 text-purple-500" />
                    <div>
                        <h3 className="font-bold">Visual Appeal</h3>
                        <p className="text-sm text-muted-foreground">Capture attention with high-quality visuals.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                    <Layers className="h-8 w-8 text-indigo-500" />
                    <div>
                        <h3 className="font-bold">Consistent Branding</h3>
                        <p className="text-sm text-muted-foreground">Maintain a cohesive look across all platforms.</p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    )
}
