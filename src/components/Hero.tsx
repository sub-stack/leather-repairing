import { motion } from 'motion/react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-ink-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-leather-tan)_0%,_transparent_40%)] opacity-20"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-white/10 border border-cream-white/20 text-cream-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-warm-coral animate-pulse"></span>
              香港本地皮革修復工作室
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-cream-white leading-[1.15] tracking-tight mb-6">
              你的皮袋，<br />
              還有<span className="text-warm-coral">第二次人生</span>。
            </h1>
            
            <p className="text-lg sm:text-xl text-cream-white/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              深層清洗、保養、轉色、修補維修。名牌手袋與日常皮具，都值得好好復活，讓喜歡的袋重新上場。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-warm-coral text-cream-white font-semibold hover:bg-warm-coral/90 hover:-translate-y-1 transition-all shadow-lg shadow-warm-coral/20 flex items-center justify-center gap-2"
              >
                查看修復服務
                <ArrowRight size={20} />
              </a>
              <a 
                href="#cases" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-cream-white/10 text-cream-white font-semibold hover:bg-cream-white/20 hover:-translate-y-1 transition-all border border-cream-white/20 flex items-center justify-center gap-2"
              >
                看看案例
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { icon: <MapPin size={16} />, text: '香港本地修復' },
                { icon: <CheckCircle2 size={16} />, text: '名牌袋＋日常皮具' },
                { icon: <CheckCircle2 size={16} />, text: '真實 Before / After' },
              ].map((badge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-white/5 border border-cream-white/10 text-cream-white/70 text-sm"
                >
                  <span className="text-soft-gold">{badge.icon}</span>
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-square lg:aspect-[4/3] lg:translate-x-8">
              {/* Abstract Floating Bag Representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-leather-tan/20 to-warm-coral/20 rounded-full blur-3xl"></div>
              
              <motion.img 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src="/img/hero.png" 
                alt="Leather Bag Restoration" 
                className="relative z-10 w-full h-full object-contain lg:object-cover rounded-[40px] shadow-2xl shadow-ink-navy border border-cream-white/10"
                style={{ objectPosition: 'center' }}
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 lg:-right-12 bg-cream-white p-4 rounded-2xl shadow-xl border border-ink-navy/5 z-20"
              >
                <img src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&q=80&w=200" alt="Zipper detail" className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-xl" referrerPolicy="no-referrer" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-8 lg:-left-12 bg-cream-white p-4 rounded-2xl shadow-xl border border-ink-navy/5 z-20"
              >
                <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=200" alt="Leather texture" className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-xl" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
