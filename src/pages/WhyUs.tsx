import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStackSection from "@/components/TechStackSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <WhyChooseUs />
      <TechStackSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default WhyUs;
