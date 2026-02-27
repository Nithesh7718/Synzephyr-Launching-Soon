"use client"

import React from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactPageClient() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">Get in Touch</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                        Ready to grow your business in Pollachi or Coimbatore? Let&apos;s discuss how Synzephyr Technologies can help you succeed online.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Our Location</h3>
                                        <p className="text-muted-foreground">Pollachi & Coimbatore, Tamil Nadu, India</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-6 w-6 text-primary mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone / WhatsApp</h3>
                                        <a href="tel:+919443449557" className="text-muted-foreground hover:text-primary transition-colors">+91 94434 49557</a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-6 w-6 text-primary mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <a href="mailto:contact.synzephyr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">contact.synzephyr@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <h3 className="font-bold text-xl mb-2">Service Areas</h3>
                                <p className="text-muted-foreground">
                                    We proudly serve businesses in <strong>Pollachi</strong>, <strong>Coimbatore</strong>, Udumalpet, Tiruppur, and surrounding areas in Tamil Nadu. We also work with clients globally.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
        const whatsappUrl = `https://wa.me/919443449557?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your Name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="your@email.com"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
                <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="SEO Inquiry / Marketing Help"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us about your business and goals..."
                ></textarea>
            </div>
            <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transition-colors">
                Send via WhatsApp <Send className="ml-2 h-4 w-4" />
            </button>
        </form>
    );
}
