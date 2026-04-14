import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useVelocity, useAnimation } from "framer-motion";
import { Feather } from "lucide-react";

const FEATHER_COUNT = 25;

const FeatherRain = () => {
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  const [activeFeathers, setActiveFeathers] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollVelocity.onChange((v) => {
      // If scrolling fast enough, spawn feathers
      if (Math.abs(v) > 0.03 && activeFeathers.length < FEATHER_COUNT) {
        setActiveFeathers(prev => [...prev.slice(-FEATHER_COUNT), Date.now()]);
      }
    });
  }, [scrollVelocity, activeFeathers]);

  // Cleanup old feathers
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeathers(prev => prev.filter(t => Date.now() - t < 3000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {activeFeathers.map((id) => (
        <SingleFeather key={id} onComplete={() => setActiveFeathers(prev => prev.filter(fid => fid !== id))} />
      ))}
    </div>
  );
};

const SingleFeather = ({ onComplete }: { onComplete: () => void }) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 0.5;
  const randomDuration = 2 + Math.random() * 2;
  const randomRotation = Math.random() * 360;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: -20, 
        x: `${randomX}%`, 
        rotate: randomRotation,
        scale: 0.5 
      }}
      animate={{ 
        opacity: [0, 0.4, 0], 
        y: "110vh",
        x: [`${randomX}%`, `${randomX + (Math.random() * 10 - 5)}%`],
        rotate: randomRotation + 180
      }}
      transition={{ 
        duration: randomDuration, 
        ease: "linear",
        delay: randomDelay 
      }}
      onAnimationComplete={onComplete}
      className="absolute text-amber-500/40"
    >
      <Feather size={24} strokeWidth={1.5} />
    </motion.div>
  );
};

export default FeatherRain;
