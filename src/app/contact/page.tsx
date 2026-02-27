import type { Metadata } from "next"
import { ContactPageClient } from "./contact-client"

export const metadata: Metadata = {
    title: "Contact Us | Free Digital Marketing Consultation in Pollachi | Synzephyr",
    description: "Get in touch with Synzephyr Technologies — your digital marketing partner in Pollachi & Coimbatore. Call us, WhatsApp us, or fill the form for a free consultation.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/contact",
    },
}

export default function ContactPage() {
    return <ContactPageClient />
}
