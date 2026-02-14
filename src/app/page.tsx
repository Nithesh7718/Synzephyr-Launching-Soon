import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Process />
      <CTA />
    </div>
  );
}
