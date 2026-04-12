import { motion } from "framer-motion";
import { Megaphone, CalendarHeart, Code, Film } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "SEO-friendly campaigns, social media management, and performance-driven strategies that amplify your brand's reach.",
  },
  {
    icon: CalendarHeart,
    title: "Event Management",
    description:
      "From concept to execution, we organize memorable events that leave a lasting impression on your audience.",
  },
  {
    icon: Code,
    title: "Web & App Development",
    description:
      "Cutting-edge websites and applications built with modern technology, designed for performance and user experience.",
  },
  {
    icon: Film,
    title: "Short Films",
    description:
      "Cinematic storytelling that captures your brand's essence and connects with audiences on an emotional level.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-glow transition-all duration-300 hover:glow-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
