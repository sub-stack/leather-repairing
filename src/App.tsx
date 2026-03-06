import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cases from './components/Cases';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>皮袋復活社工作室 | 香港皮革修復專門店</title>
        <meta name="description" content="香港皮革修復品牌。專門為手袋、銀包和皮具「續命」。名牌袋翻新、轉色、修補，日常皮袋清洗、保養。舊袋不用丟，讓它復活。" />
      </Helmet>
      
      <div className="min-h-screen bg-cream-white text-ink-navy font-sans selection:bg-warm-coral/30">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Cases />
          <Locations />
          <Contact />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}
