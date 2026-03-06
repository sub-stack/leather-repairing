import { motion } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000" 
                alt="Leather artisan working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink-navy/10"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-cream-white p-6 rounded-3xl shadow-xl border border-ink-navy/5 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-warm-coral/10 flex items-center justify-center text-warm-coral">
                  <Heart size={24} />
                </div>
                <div className="font-bold text-ink-navy text-2xl">1000+</div>
              </div>
              <p className="text-sm text-ink-navy/70 font-medium">
                成功為過千個手袋與皮具續命
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-navy mb-6 tracking-tight">
              有些袋子不是舊了，<br />
              只是需要被<span className="text-leather-tan">好好照顧一次</span>。
            </h2>
            
            <p className="text-lg text-ink-navy/70 leading-relaxed mb-8">
              我們不是把袋修好而已。我們是在幫很多人，把喜歡的東西留低。
              皮袋復活社工作室專注於皮革修復，由經驗豐富的香港本地團隊主理。
              無論是陪伴多年的名牌手袋，還是每天使用的日常皮具，我們都用心對待。
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Sparkles className="text-warm-coral" size={24} />,
                  title: "專注皮革修復",
                  desc: "從深層清潔到轉色修補，提供全方位皮具護理。"
                },
                {
                  icon: <MapPin className="text-leather-tan" size={24} />,
                  title: "香港本地團隊",
                  desc: "自家工作室處理，溝通直接，進度透明。"
                },
                {
                  icon: <ShieldCheck className="text-fresh-green" size={24} />,
                  title: "經驗技師主理",
                  desc: "熟悉各大品牌皮革特性，對症下藥，安全可靠。"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cream-white border border-ink-navy/5 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-navy mb-1">{item.title}</h3>
                    <p className="text-ink-navy/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
