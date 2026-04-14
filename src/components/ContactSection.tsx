import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 bg-secondary/20 dark:bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Ready to take your brand to the next level? Reach out and let's create something extraordinary together.
            </p>

            <div className="space-y-4">
              <a
                href="tel:8148111530"
                className="flex items-center gap-4 p-4 rounded-xl dark:bg-card bg-card border border-primary/10 dark:border-border hover:border-primary/40 transition-all group shadow-sm dark:shadow-none hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">8148111530</p>
                </div>
              </a>

              <a
                href="mailto:theowlcreationss@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl dark:bg-card bg-card border border-primary/10 dark:border-border hover:border-primary/40 transition-all group shadow-sm dark:shadow-none hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">theowlcreationss@gmail.com</p>
                </div>
              </a>
            </div>

            <p className="text-muted-foreground text-sm font-body">
              <span className="text-foreground font-medium">Danush Kumar BE.CSE</span> — Founder
            </p>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-card border border-primary/10 dark:border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-card border border-primary/10 dark:border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-card border border-primary/10 dark:border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-gold"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-6xl mx-auto mt-12"
      >
        <div className="w-full h-[400px] rounded-[2.5rem] dark:bg-card bg-card border border-primary/10 dark:border-border relative overflow-hidden group shadow-lg dark:shadow-none">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 rounded-3xl bg-background/80 backdrop-blur-md border border-primary/20 text-center max-w-xs transition-transform group-hover:scale-105 duration-500">
              <h4 className="font-display font-bold text-xl mb-2">Global Headquarters</h4>
              <p className="text-sm text-muted-foreground mb-4">India — Serving clients worldwide with cinematic vision.</p>
              <a 
                href="https://wa.me/918148111530" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
