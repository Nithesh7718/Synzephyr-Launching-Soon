import type { Metadata } from "next"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Globe, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Connect with Synzephyr | Social Media Links",
    description: "Follow Synzephyr Technologies on social media. Stay connected with the best digital marketing agency in Pollachi & Coimbatore.",
}

const links = [
    {
        name: "Website",
        url: "/",
        icon: Globe,
        color: "bg-blue-500",
        textColor: "text-white"
    },
    {
        name: "Instagram",
        url: "#",
        icon: Instagram,
        color: "bg-pink-600",
        textColor: "text-white"
    },
    {
        name: "Facebook",
        url: "#",
        icon: Facebook,
        color: "bg-blue-700",
        textColor: "text-white"
    },
    {
        name: "LinkedIn",
        url: "#",
        icon: Linkedin,
        color: "bg-blue-800",
        textColor: "text-white"
    },
    {
        name: "Twitter / X",
        url: "#",
        icon: Twitter,
        color: "bg-black dark:bg-zinc-800",
        textColor: "text-white"
    },
    {
        name: "WhatsApp Business",
        url: "#",
        icon: MessageCircle,
        color: "bg-green-500",
        textColor: "text-white"
    },
    {
        name: "Email Us",
        url: "mailto:contact@synzephyr.web.app",
        icon: Mail,
        color: "bg-red-500",
        textColor: "text-white"
    },
    {
        name: "Google Business Profile",
        url: "#",
        icon: MapPin,
        color: "bg-blue-400",
        textColor: "text-white"
    },
]

export default function ConnectPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center py-20 px-4 bg-muted/20">
            <div className="w-full max-w-md text-center">
                <div className="h-24 w-24 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    S
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight mb-2">Synzephyr Technologies</h1>
                <p className="text-muted-foreground mb-8">Digital Growth Agency | Pollachi & Coimbatore</p>

                <div className="space-y-4">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : "_self"}
                            className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all bg-background border border-border group`}
                        >
                            <div className={`p-2 rounded-full ${link.color} ${link.textColor} mr-4 group-hover:opacity-90 transition-opacity`}>
                                <link.icon className="h-5 w-5" />
                            </div>
                            <span className="font-semibold flex-1 text-left">{link.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Synzephyr Technologies
                </div>
            </div>
        </div>
    )
}
