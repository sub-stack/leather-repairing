import { motion } from 'motion/react';

export default function Cases() {
  const cases = [
    {
      id: 1,
      brand: "LV植鞣革",
      issue: "水痕清潔",
      before: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=400&sat=-50",
      after: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      brand: "Hermès",
      issue: "發霉清潔保養",
      before: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400&sat=-50",
      after: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      brand: "漆亮皮",
      issue: "清潔保養",
      before: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400&sat=-50",
      after: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      brand: "皮革製品",
      issue: "邊角磨損修護",
      before: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400&sat=-50",
      after: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="cases" className="py-16 lg:py-20 bg-[#F8F3EE] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {cases.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-center mb-6 h-14">
                <h3 className="text-xl font-medium text-[#8B7355] tracking-wide">{item.brand}</h3>
                <p className="text-xl font-medium text-[#8B7355] tracking-wide">{item.issue}</p>
              </div>
              
              <div className="flex gap-2 mb-4 w-full justify-center">
                <div className="flex flex-col items-center gap-4 w-[48%]">
                  <div className="w-full aspect-square rounded-t-full overflow-hidden border-b-0">
                    <img 
                      src={item.before} 
                      alt={`${item.brand} before`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="px-6 py-1 rounded-full border border-[#8B7355]/30 text-[#8B7355] text-sm tracking-wider">
                    before
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4 w-[48%]">
                  <div className="w-full aspect-square rounded-t-full overflow-hidden border-b-0">
                    <img 
                      src={item.after} 
                      alt={`${item.brand} after`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="px-6 py-1 rounded-full border border-[#8B7355]/30 text-[#8B7355] text-sm tracking-wider">
                    after
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
