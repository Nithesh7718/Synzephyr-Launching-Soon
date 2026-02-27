import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Synzephyr Technologies",
    description: "Terms of Service for Synzephyr Technologies usage.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/terms",
    },
}

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-12 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className="py-12">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl prose dark:prose-invert">
                    <p>
                        Welcome to Synzephyr Technologies. By accessing or using our website and services, you agree to be bound by these Terms of Service.
                    </p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, please do not use our services.
                    </p>

                    <h3>2. Services</h3>
                    <p>
                        Synzephyr Technologies provides digital marketing, SEO, GMB optimization, and graphic design services. We reserve the right to modify or discontinue any service at any time without notice.
                    </p>

                    <h3>3. User Conduct</h3>
                    <p>
                        You agree to use our website only for lawful purposes. You are prohibited from using the site to transmit any harmful, threatening, or otherwise objectionable content.
                    </p>

                    <h3>4. Intellectual Property</h3>
                    <p>
                        All content on this website, including text, graphics, logos, and images, is the property of Synzephyr Technologies and is protected by copyright and other intellectual property laws.
                    </p>

                    <h3>5. Limitation of Liability</h3>
                    <p>
                        Synzephyr Technologies shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                    </p>

                    <h3>6. Governing Law</h3>
                    <p>
                        These Terms of Service are governed by and construed in accordance with the laws of India.
                    </p>

                    <h3>7. Contact Us</h3>
                    <p>
                        If you have any questions about these Terms, please contact us at contact.synzephyr&#64;gmail&#46;com.
                    </p>
                </div>
            </section>
        </div>
    )
}
