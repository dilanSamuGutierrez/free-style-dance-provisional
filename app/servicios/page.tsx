import { DanceNavbar } from "@/components/Navbar";
import { ServiceDetails } from "@/components/services-sections/service-details";
import {ServiceHero}  from "@/components/services-sections/service-hero";
import {ServiceFAQ} from "@/components/services-sections/service-faq";
import { ServiceGallery } from "@/components/services-sections/service-gallery";
import { FinalCTA } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/float-buttons/WhatsApp";
import { ScrollToTop } from "@/components/float-buttons/ScrollTop";
import {FloatingPortfolio} from "@/components/float-buttons/FloatingPortfolio";

export default function Home() {
  return (
    <main className="relative bg-white">
        <DanceNavbar />
        <ServiceHero />
        <ServiceDetails />
        <ServiceFAQ />
        <ServiceGallery />
        <FinalCTA imageSrc="/cta.png" />
        <Footer />

        <WhatsAppFloat />
        <ScrollToTop />
        <FloatingPortfolio />
    </main>
  );
}
