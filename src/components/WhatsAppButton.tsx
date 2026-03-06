import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/85291234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors group"
      aria-label="Chat on WhatsApp"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-ink-navy text-cream-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
        WhatsApp 查詢
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-ink-navy"></span>
      </span>
    </motion.a>
  );
}
