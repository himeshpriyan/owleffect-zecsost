import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Techflow Sol",
    content: "The Owl Creations transformed our digital presence. Their attention to detail and creative vision is unmatched.",
  },
  {
    name: "Sarah Miller",
    role: "Marketing Director",
    content: "Working with them was a breeze. They delivered our short film ahead of schedule and it blew everyone away.",
  },
  {
    name: "Arun Varma",
    role: "Founder, Alpha Events",
    content: "Our event's branding and execution were handled perfectly. Highly recommend their holistic creative approach.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Client Chronicles
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl dark:bg-card bg-card border border-primary/10 dark:border-border relative shadow-sm dark:shadow-none hover:shadow-md transition-all"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary dark:opacity-20 opacity-30" />
              <p className="text-muted-foreground font-body italic mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                <p className="text-primary text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
