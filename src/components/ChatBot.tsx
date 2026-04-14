import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Bot, Activity, Settings2, Sparkles } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "IDENTITY_CONFIRMED: O.I. Virtual Interface initialized. I am the digital manifestation of Owl Creations' Calculated Wisdom. How may I assist your visionary impact today?",
};

const SIMULATED_RESPONSES: Record<string, string> = {
  "hello": "Greetings. System status: OPTIMAL. Analyzing your presence... How can O.I. guide your next project?",
  "hi": "Greetings. System status: OPTIMAL. Analyzing your presence... How can O.I. guide your next project?",
  "services": "ACCESSING_CAPABILITIES... We provide Narrative Engineering, Digital Ecosystems (Web/App), and Event Orchestration. Which industrial-grade solution do you require?",
  "price": "VALUATION_PROTOCOL_ACTIVE: Every project is a unique architectural challenge. Our pricing is ROI-optimized and scales with your vision. Would you like to connect with our Lead Strategist for a quote?",
  "cost": "VALUATION_PROTOCOL_ACTIVE: Every project is a unique architectural challenge. Our pricing is ROI-optimized and scales with your vision. Would you like to connect with our Lead Strategist for a quote?",
  "contact": "UPLINK_ESTABLISHED: You can reach our founders at theowlcreationss@gmail.com or +91 8148111530. Alternatively, I can flag your interest for priority callback. Should I proceed?",
  "about": "ENTITY_PROFILE: Founded by Danush Kumar, The Owl Creations merges tactical precision with creative spark. We don't just build brands; we engineer legacies.",
  "projects": "SCANNING_PORTFOLIO... We've delivered 50+ elite artifacts across fintech, luxury branding, and high-stakes media. Explore our Projects section for visual supremacy.",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isProcessing]);

  const handleSend = async (content: string) => {
    // Add user message
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate processing
    setIsProcessing(true);
    
    // Match intent
    const lowerContent = content.toLowerCase();
    let response = "NEURAL_LINK_STABLE: Request received. However, my pattern recognition suggests a direct briefing might be more effective. Would you like our team to contact you?";
    
    for (const [key, value] of Object.entries(SIMULATED_RESPONSES)) {
      if (lowerContent.includes(key)) {
        response = value;
        break;
      }
    }

    // Delay for "thinking" effect
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-body">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 90 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="w-6 h-6 animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-white/20 rounded-2xl"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(10px)" }}
            className="absolute bottom-0 right-0 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-background/95 backdrop-blur-3xl border border-primary/20 rounded-[2rem] shadow-premium flex flex-col overflow-hidden"
          >
            {/* HUD Header */}
            <div className="p-6 border-b border-primary/10 flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Bot size={20} />
                  </div>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">O.I. INTERFACE</h3>
                  <div className="flex items-center gap-2">
                    <Activity size={10} className="text-primary animate-pulse" />
                    <span className="text-[9px] font-mono text-primary uppercase tracking-widest">Calculated Wisdom active</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Settings2 size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 scroll-smooth no-scrollbar"
            >
              <div className="mb-8 text-center">
                <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em]">
                  Encrypted Neural Link: 0x88.24.4F
                </span>
              </div>
              
              {messages.map((msg, i) => (
                <ChatMessage key={i} role={msg.role} content={msg.content} />
              ))}
              
              {isProcessing && (
                <ChatMessage role="assistant" content="" isProcessing />
              )}
            </div>

            {/* Tactical Input Section */}
            <div className="p-6 bg-secondary/30 backdrop-blur-md border-t border-primary/10">
              <ChatInput onSend={handleSend} disabled={isProcessing} />
              <p className="mt-4 text-[8px] text-center text-muted-foreground uppercase tracking-widest opacity-50">
                O.I. v2.4 // The Owl Creations Proprietary Agent
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
