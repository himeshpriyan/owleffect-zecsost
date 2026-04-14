import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useRef } from "react";
import flyingOwl from "@/assets/flying-owl.png";

const ScrollOwl = () => {
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Create a smoothed velocity value
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Parallax movement - the owl moves slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Unique effect: Wings "expand" slightly with velocity
  const scaleY = useTransform(smoothVelocity, [-0.1, 0, 0.1], [1.2, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.35, 0.35, 0]);
  
  // Slight rotation based on velocity to give "tilt" while flying
  const rotate = useTransform(smoothVelocity, [-0.1, 0, 0.1], [-8, 0, 8]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{
          y,
          opacity,
          scaleY,
          rotate,
        }}
        className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
      >
        <img
          src={flyingOwl}
          alt=""
          style={{
            WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 80%)",
            maskImage: "radial-gradient(circle, black 40%, transparent 80%)"
          }}
          className="w-full h-full object-contain mix-blend-screen opacity-70 brightness-110 sepia-[0.2]"
        />
        
        {/* Spectral Glow Effect - Golden Amber */}
        <motion.div
          style={{
            opacity: useTransform(smoothVelocity, [-0.1, 0, 0.1], [0.6, 0, 0.6]),
          }}
          className="absolute inset-0 bg-amber-500/10 blur-[120px] rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default ScrollOwl;
