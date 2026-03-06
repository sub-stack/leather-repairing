import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import Logo from './Logo';

export default function Locations() {
  const locations = [
    {
      id: "central",
      name: "中環店",
      address: "中環德輔道中",
      hours: "星期一至六 11:00 - 20:00",
      phone: "+852 1234 5678",
      link: "https://maps.google.com"
    },
    {
      id: "mongkok",
      name: "旺角店",
      address: "旺角彌敦道",
      hours: "星期一至日 12:00 - 21:00",
      phone: "+852 2345 6789",
      link: "https://maps.google.com"
    },
    {
      id: "kwuntong",
      name: "觀塘店",
      address: "觀塘開源道",
      hours: "星期一至六 10:00 - 19:00",
      phone: "+852 3456 7890",
      link: "https://maps.google.com"
    }
  ];

  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section id="locations" className="py-24 lg:py-32 bg-cream-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="mb-6 text-ink-navy">
            <Logo />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-ink-navy mb-4 tracking-tight"
          >
            門市地點
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ink-navy/70"
          >
            三間香港門市，隨時為你的皮具提供專業評估。
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="w-full h-[300px] lg:h-full min-h-[400px] rounded-[24px] overflow-hidden shadow-sm border border-ink-navy/5 relative bg-ink-navy/5">
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(locations[activeLocation].address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full object-cover absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
          
          <div className="order-1 lg:order-2 space-y-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                onClick={() => setActiveLocation(i)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-6 rounded-[20px] shadow-sm border cursor-pointer transition-all group ${
                  activeLocation === i 
                    ? 'border-warm-coral shadow-md' 
                    : 'border-ink-navy/5 hover:border-warm-coral/30 hover:shadow-md'
                }`}
              >
                <h3 className="text-xl font-bold text-ink-navy mb-4 flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    activeLocation === i 
                      ? 'bg-warm-coral text-cream-white' 
                      : 'bg-ink-navy/5 text-warm-coral group-hover:bg-warm-coral/10'
                  }`}>
                    <MapPin size={16} />
                  </div>
                  {loc.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-ink-navy/70">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-ink-navy/40" />
                    <span className="text-sm leading-relaxed">{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-ink-navy/70">
                    <Clock size={18} className="mt-0.5 shrink-0 text-ink-navy/40" />
                    <span className="text-sm leading-relaxed">{loc.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 text-ink-navy/70">
                    <Phone size={18} className="mt-0.5 shrink-0 text-ink-navy/40" />
                    <span className="text-sm leading-relaxed">{loc.phone}</span>
                  </div>
                </div>
                
                <a 
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full py-2.5 rounded-xl bg-ink-navy/5 text-ink-navy font-medium hover:bg-warm-coral hover:text-cream-white transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Navigation size={16} />
                  立即導航
                </a>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
