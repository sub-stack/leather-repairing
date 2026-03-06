import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "關於我們", href: "#about" },
    { name: "修復服務", href: "#services" },
    { name: "成功案例", href: "#cases" },
    { name: "門市地點", href: "#locations" },
    { name: "聯絡查詢", href: "#contact" },
  ];
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const logoSrc = `${baseUrl}img/logo.png`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-white/90 backdrop-blur-md border-b border-ink-navy/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="text-ink-navy hover:opacity-80 transition-opacity"
            >
              <Logo />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-ink-navy/80 hover:text-warm-coral font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-cream-white/10 flex items-center justify-center text-cream-white hover:bg-warm-coral transition-colors"
              aria-label="Instagram"
            >
              <img
                src="/img/fb.svg"
                alt="fb"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-lg m-1"
                referrerPolicy="no-referrer"
              />
              <img
                src="/img/ig.svg"
                alt="ig"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-lg m-1"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              href="#contact"
              className="bg-ink-navy text-cream-white px-6 py-2.5 rounded-full font-medium hover:bg-ink-navy/90 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              WhatsApp 查詢
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink-navy hover:text-warm-coral focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-white border-b border-ink-navy/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-ink-navy/80 hover:text-warm-coral hover:bg-ink-navy/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <img
                src="/img/fb.svg"
                alt="fb"
                className="inline w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-lg m-1"
                referrerPolicy="no-referrer"
              />
              <img
                src="/img/ig.svg"
                alt="ig"
                className="inline w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-lg m-1"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
