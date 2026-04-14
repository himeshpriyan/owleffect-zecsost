import { motion } from "framer-motion";

const TacticalGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden dark:opacity-[0.03] opacity-[0.12]">
      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between px-4 sm:px-8">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={`v-${i}`} className="w-[1px] h-full bg-primary/20 dark:bg-primary" />
        ))}
      </div>
      
      {/* Horizontal Lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-4 sm:py-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`h-${i}`} className="h-[1px] w-full bg-primary/20 dark:bg-primary" />
        ))}
      </div>

      {/* Coordinate Points - Shifted for better breathing room */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-primary tracking-widest dark:opacity-40 opacity-70">
        SEC_COORD_00.24.88
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-primary tracking-widest dark:opacity-40 opacity-70">
        TARGET_LOCK_ENABLE
      </div>

      {/* Crosshair pulse - Enlarged to frame content instead of obscuring letters */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-primary/20 rounded-full flex items-center justify-center opacity-10"
      >
        <div className="w-1/2 h-[1px] bg-primary/10 absolute rotate-45" />
        <div className="w-1/2 h-[1px] bg-primary/10 absolute -rotate-45" />
      </motion.div>
    </div>
  );
};

export default TacticalGrid;
