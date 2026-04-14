import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import owlEyesVideo from "@/assets/Video_Generation_with_Blinking_Eyes (online-video-cutter.com).mp4";
import TacticalGrid from "./TacticalGrid";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <TacticalGrid />
      
      {/* Background image */}
      <div className="absolute inset-0">
        <video
          src={owlEyesVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center dark:opacity-60 opacity-50 mix-blend-multiply dark:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background dark:from-background/40 dark:via-background/60 dark:to-background" />
      </div>


      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-12">
        {/* Tactical Tag with Brackets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-4 mb-10 relative group px-6 py-2"
        >
          <div className="absolute inset-0 border border-primary/20 bg-primary/5 rounded-sm" />
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary" />
          
          <span className="text-primary font-mono text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase relative z-10">
            Visionary Creative Agency
          </span>
        </motion.div>

        <div className="relative inline-block mb-10">
          {/* HUD Coordinates around Heading */}
          <div className="absolute -top-12 -left-12 font-mono text-[8px] text-primary/60 dark:text-primary/40 hidden md:block">
            LAT_00.24.88
          </div>
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 font-mono text-[8px] text-primary/60 dark:text-primary/40 hidden md:block vertical-rl">
            FREQ_88.1Mhz
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] sm:leading-tight relative z-10 antialiased"
          >
            Visionary <span className="text-gradient-gold italic font-extrabold">Impact.</span>{" "}
            <br className="hidden sm:block" />
            Calculated{" "}
            <span className="text-gradient-gold">Creativity.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.7, 
            duration: 0.8
          }}
          className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 font-body leading-relaxed border-l border-primary/20 pl-6 text-left md:text-center md:border-none md:pl-0"
        >
          Scaling elite brands and high-growth startups through advanced digital storytelling and tactical precision. We build digital legacies that stand the test of time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/services"
            className="group relative px-10 py-4 overflow-hidden bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs transition-all hover:scale-105"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
          >
            <span className="relative z-10">Explore Services</span>
            <motion.div
              animate={{ left: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 w-1/4 h-full bg-white/20 skew-x-[45deg]"
            />
          </Link>
          <Link
            to="/about"
            className="group relative px-10 py-4 border border-primary/30 text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-primary/5 transition-all"
            style={{ clipPath: "polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)" }}
          >
            Learn More
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 shrink-0"
      >
        <div className="w-5 h-8 rounded-full border border-primary/30 dark:border-primary/20 flex items-start justify-center p-1">
          <motion.div 
            animate={{ scaleY: [1, 2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-1.5 bg-primary origin-top" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
