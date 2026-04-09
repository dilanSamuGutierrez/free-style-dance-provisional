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
import { WhatsAppFloat } from "@/components/float-buttons/WhatsApp";
import { ScrollToTop } from "@/components/float-buttons/ScrollTop";
import {FloatingPortfolio} from "@/components/float-buttons/FloatingPortfolio";

export default function Home() {
  return (
    <main className="relative bg-white">
      <DanceNavbar />
      <DanceHero />
      <SocialProof />
      <ProblemSection imageSrc="/problem.png" />
      <SolutionSection imageSrc="/solucion.png" />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTA imageSrc="/cta.png" />
      <Footer />

      <WhatsAppFloat />
      <ScrollToTop />
      <FloatingPortfolio />
    </main>
  );
}
