import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceCTA from "@/components/ServiceCTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="py-12">
        <ServicesSection />
      </div>
      <ProcessSection />
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Services;
