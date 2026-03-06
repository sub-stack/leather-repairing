import { motion } from 'motion/react';
import { MessageSquare, Camera, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-ink-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--color-warm-coral)_0%,_transparent_30%)] opacity-10"></div>
      
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cream-white mb-6 tracking-tight">
            準備好讓你的皮袋<br />
            <span className="text-warm-coral">重新出發</span>了嗎？
          </h2>
          
          <p className="text-lg text-cream-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            無論是名牌手袋還是日常皮具，只要你想留住它，我們都能幫忙。
            拍照並 WhatsApp 我們，為你提供免費評估及報價。
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-12 text-left">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cream-white/10 border border-cream-white/20 flex items-center justify-center text-warm-coral shrink-0">
                <Camera size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream-white mb-2">1. 拍照上傳</h3>
                <p className="text-cream-white/60 text-sm">拍下皮具的整體及需要修復的細節照片。</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cream-white/10 border border-cream-white/20 flex items-center justify-center text-leather-tan shrink-0">
                <MessageSquare size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream-white mb-2">2. 專業評估</h3>
                <p className="text-cream-white/60 text-sm">我們的技師會根據照片狀況，提供修復建議及報價。</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cream-white/10 border border-cream-white/20 flex items-center justify-center text-fresh-green shrink-0">
                <Send size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream-white mb-2">3. 確認修復</h3>
                <p className="text-cream-white/60 text-sm">確認報價後，可親臨門市或安排速遞交收。</p>
              </div>
            </div>
          </div>

          <a 
            href="https://wa.me/85291234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-all shadow-lg hover:-translate-y-1 text-lg"
          >
            <MessageCircle size={24} />
            立即 WhatsApp 查詢
          </a>
        </motion.div>
      </div>
    </section>
  );
}
