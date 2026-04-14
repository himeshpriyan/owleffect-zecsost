import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isProcessing?: boolean;
}

const ChatMessage = ({ role, content, isProcessing }: ChatMessageProps) => {
  const isBot = role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex gap-3 mb-6 ${isBot ? "" : "flex-row-reverse"}`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
        isBot 
          ? "bg-primary/10 border-primary/20 text-primary shadow-[0_0_10px_rgba(212,175,55,0.2)]" 
          : "bg-secondary border-border text-muted-foreground"
      }`}>
        {isBot ? <Bot size={16} /> : <User size={16} />}
      </div>

      <div className={`max-w-[80%] space-y-2 ${isBot ? "" : "flex flex-col items-end"}`}>
        <div className={`relative px-4 py-3 rounded-2xl text-sm font-body leading-relaxed ${
          isBot 
            ? "bg-card dark:bg-surface-elevated border border-primary/10 text-foreground shadow-sm" 
            : "bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/10 rounded-tr-none"
        }`}>
          {isBot && (
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 rounded-tl-2xl -translate-x-1 -translate-y-1" />
          )}
          
          {isProcessing ? (
            <div className="flex gap-1 items-center py-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 h-1 bg-primary rounded-full"
                />
              ))}
            </div>
          ) : (
            <p className="whitespace-pre-wrap">{content}</p>
          )}
        </div>
        
        <span className="text-[8px] font-mono uppercase tracking-widest opacity-40 px-1">
          {isBot ? "O.I. INTERNAL_TRANSIT" : "LOCAL_PACKET_SEND"}
        </span>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
