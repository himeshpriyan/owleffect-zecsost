import { motion, useScroll, useTransform } from "framer-motion";
import flyingOwl from "@/assets/flying-owl.png";

const ScrollOwl = () => {
  const { scrollYProgress } = useScroll();

  // Stable Parallax: Only vertical movement, no shaking or tilting.
  // The owl drifts slowly across the page depths.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Fade in at the start, stay constant, fade out at the very end.
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.12, 0.12, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{
          y,
          opacity,
        }}
        // Responsive sizing: Smaller on mobile, larger on desktop
        className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px]"
      >
        <img
          src={flyingOwl}
          alt=""
          style={{
            // Soften the edges to prevent any "box" from being visible
            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 80%)",
            maskImage: "radial-gradient(circle, black 30%, transparent 80%)"
          }}
          className="w-full h-full object-contain mix-blend-screen grayscale brightness-110"
        />
      </motion.div>
    </div>
  );
};

export default ScrollOwl;
