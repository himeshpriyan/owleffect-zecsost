import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the typical timeline for a web project?",
    answer: "Most web development projects take between 4 to 8 weeks depending on complexity, features, and content readiness.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide 3 months of priority support for all technical builds, with optional maintenance plans available thereafter.",
  },
  {
    question: "Can you handle physical event management globally?",
    answer: "Absolutely. While we are based in India, our network allowing us to manage and produce events worldwide.",
  },
  {
    question: "How do you measure Digital Marketing success?",
    answer: "We focus on KPIs that matter: ROI, conversion rates, and engagement growth, providing monthly detailed reports.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border last:border-0 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-display text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground pb-6 font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
