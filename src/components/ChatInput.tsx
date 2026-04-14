import { useState } from "react";
import { Send, Command } from "lucide-react";
import { motion } from "framer-motion";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative mt-4"
    >
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-primary/30 rounded-tl-lg pointer-events-none" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-primary/30 rounded-br-lg pointer-events-none" />
      
      <div className="flex items-center gap-2 p-1 bg-secondary/50 backdrop-blur-md rounded-2xl border border-border group focus-within:border-primary/40 transition-all">
        <div className="pl-3 hidden sm:block">
          <Command size={14} className="text-muted-foreground" />
        </div>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="SEND_NEURAL_QUERY..."
          disabled={disabled}
          className="flex-1 bg-transparent border-none outline-none py-3 px-2 text-sm font-body placeholder:text-muted-foreground/50 disabled:opacity-50"
        />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!message.trim() || disabled}
          className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:grayscale transition-all shadow-lg shadow-primary/20"
        >
          <Send size={18} />
        </motion.button>
      </div>
    </form>
  );
};

export default ChatInput;
