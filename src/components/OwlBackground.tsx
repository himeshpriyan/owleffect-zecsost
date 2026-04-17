import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import ScrollOwl from "./ScrollOwl";
import FeatherRain from "./FeatherRain";

const OwlBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // Logo fades out as user scrolls down to make room for dynamic effects
  const logoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Main Static Logo (Top of page) */}
      <motion.div
        style={{ opacity: logoOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={logo}
          alt=""
          className="w-[800px] h-auto grayscale opacity-[0.05] select-none"
        />
      </motion.div>

      {/* 2. The Dynamic Flying Owl (Scroll-linked) */}
      <ScrollOwl />

      {/* 3. Falling Feathers (Velocity-linked) */}
      <FeatherRain />

      {/* 4. Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />
    </div>
  );
};

export default OwlBackground;
