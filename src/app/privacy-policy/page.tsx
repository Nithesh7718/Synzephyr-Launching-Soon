import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Synzephyr Technologies",
    description: "Privacy Policy for Synzephyr Technologies usage.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/privacy-policy",
    },
}

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-12 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className="py-12">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl prose dark:prose-invert">
                    <p>
                        At Synzephyr Technologies, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you fill out a contact form, subscribe to our newsletter, or interact with our services. This may include your name, email address, phone number, and any other details you choose to share.
                    </p>

                    <h3>2. How We Use Your Information</h3>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Provide and improve our services.</li>
                        <li>Respond to your inquiries and support requests.</li>
                        <li>Send you updates, newsletters, and marketing communications (you can opt-out at any time).</li>
                        <li>Analyze website usage to enhance user experience.</li>
                    </ul>

                    <h3>3. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
                    </p>

                    <h3>4. Cookies</h3>
                    <p>
                        Our website may use cookies to improve your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of certain features.
                    </p>

                    <h3>5. Third-Party Links</h3>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                    </p>

                    <h3>6. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at contact.synzephyr&#64;gmail&#46;com.
                    </p>
                </div>
            </section>
        </div>
    )
}
