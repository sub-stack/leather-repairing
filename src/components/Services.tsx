import { motion } from 'motion/react';
import { Droplets, Shield, Palette, Wrench, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "cleaning",
      icon: <Droplets size={28} />,
      title: "深層清洗去污",
      desc: "去走污漬、黏塵和舊痕，讓皮面重新見得人。",
      target: "手袋、銀包、皮背包",
      color: "text-info",
      bg: "bg-info/10"
    },
    {
      id: "protection",
      icon: <Shield size={28} />,
      title: "光澤防護保養",
      desc: "補回皮革神采，也多一層日常保護。",
      target: "名牌手袋、日常皮具",
      color: "text-success",
      bg: "bg-success/10"
    },
    {
      id: "color",
      icon: <Palette size={28} />,
      title: "轉色",
      desc: "想轉風格，不用換袋。幫你把舊色變新感覺。",
      target: "黑轉深啡、啡轉黑等",
      color: "text-warm-coral",
      bg: "bg-warm-coral/10"
    },
    {
      id: "repair",
      icon: <Wrench size={28} />,
      title: "修補維修",
      desc: "角位磨損、刮花、爆邊、五金問題，都可逐一處理。",
      target: "破損、刮花、邊油、五金",
      color: "text-leather-tan",
      bg: "bg-leather-tan/10"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-ink-navy mb-4 tracking-tight"
          >
            四大修復服務
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ink-navy/70"
          >
            針對不同皮具狀況，提供最適合的「續命」方案。
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 rounded-[24px] shadow-sm border border-ink-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-ink-navy mb-3">{service.title}</h3>
              <p className="text-ink-navy/70 mb-6 min-h-[48px] leading-relaxed">
                {service.desc}
              </p>
              
              <div className="pt-6 border-t border-ink-navy/5">
                <div className="text-xs font-semibold text-ink-navy/40 uppercase tracking-wider mb-2">
                  適用於
                </div>
                <div className="text-sm font-medium text-ink-navy/80">
                  {service.target}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink-navy text-cream-white font-semibold hover:bg-ink-navy/90 transition-all shadow-md hover:-translate-y-0.5"
          >
            了解更多詳情
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
