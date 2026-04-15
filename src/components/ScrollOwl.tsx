import { motion, useScroll, useTransform } from "framer-motion";

// ⬇️ Place your 8-second owl video in src/assets/ and update this import path
import owlVideo from "@/assets/owl-scroll-video.mp4";

const ScrollOwl = () => {
  const { scrollYProgress } = useScroll();

  // Parallax vertical drift as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  // Fade in as user scrolls, stay visible, fade out at end
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.85, 1], [0, 0.1, 0.1, 0]);

  // Subtle scale-up as user scrolls for dramatic reveal
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1.05, 1.05, 0.95]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{
          y,
          opacity,
          scale,
        }}
        className="relative w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] md:w-[850px] md:h-[850px]"
      >
        <video
          src={owlVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{
            WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
            maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
            filter: "brightness(1.4)",
          }}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default ScrollOwl;
