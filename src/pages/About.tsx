import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <AboutSection />
      <StorySection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
