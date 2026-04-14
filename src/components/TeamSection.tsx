import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const team = [
  {
    name: "Danush Kumar BE.CSE",
    role: "Founder & Lead Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    name: "Alex Reed",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
  },
  {
    name: "Elena Vance",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/20 dark:bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            The Visionaries
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Meet the <span className="text-gradient-gold">Team</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 dark:bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 dark:bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-body">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
