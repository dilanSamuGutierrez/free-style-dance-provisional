import Image from "next/image";
import { DanceHero } from "@/components/Hero";
import { DanceNavbar } from "@/components/Navbar";
import { SocialProof } from "@/components/SocialProf";
import { ProblemSection }  from "@/components/Problem";
import { SolutionSection } from "@/components/Solution";
import { ServicesSection } from "@/components/ServiceSection";
import { BenefitsSection } from "@/components/Benefits";
import { TestimonialsSection } from "@/components/TestimonialSection";
import { FinalCTA } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white">
      <DanceNavbar />
      <DanceHero />
      <SocialProof />
      <ProblemSection imageSrc="/problemImg.png" />
      <SolutionSection imageSrc="/solutionImg.png" />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTA imageSrc="/finalCtaImg.png" />
      <Footer />
    </main>
  );
}
