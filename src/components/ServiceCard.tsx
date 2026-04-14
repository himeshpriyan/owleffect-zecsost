import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, className = "" }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform springs into rotations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group dark:bg-card/40 bg-card/90 backdrop-blur-3xl border border-primary/20 dark:border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden transition-all hover:border-primary/50 shadow-premium hover:shadow-xl dark:shadow-none dark:hover:shadow-none ${className}`}
    >

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative">
          <Icon className="w-7 h-7 text-primary" />
          {/* Animated pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl border border-primary/20"
          />
        </div>

        <h3 className="font-display text-2xl font-bold mb-4 text-foreground tracking-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground font-body leading-relaxed mb-8 text-sm md:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {features.map((feature, idx) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary/90"
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements based on title/type logic could go here */}
      <div className="absolute top-0 right-0 p-4 dark:opacity-[0.02] opacity-[0.05] group-hover:dark:opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
        <Icon className="w-32 h-32 rotate-12 translate-x-12 -translate-y-8" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
