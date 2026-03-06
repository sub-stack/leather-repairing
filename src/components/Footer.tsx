import { Instagram, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink-navy pt-20 pb-10 border-t border-cream-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block mb-6 text-cream-white hover:opacity-80 transition-opacity"
            >
              <Logo />
            </a>
            <p className="text-cream-white/60 max-w-sm leading-relaxed mb-6">
              舊袋翻新，讓喜歡的東西再陪你久一點。
              <br />
              香港本地專業皮革修復團隊。
            </p>
            <div className="flex gap-4">
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
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-white/10 flex items-center justify-center text-cream-white hover:bg-warm-coral transition-colors"
                aria-label="WhatsApp"
              >
                <img
                  src="/img/ig.svg"
                  alt="ig"
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-lg m-1"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-cream-white font-semibold mb-6 tracking-wider uppercase text-sm">
              快速連結
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-cream-white/60 hover:text-warm-coral transition-colors"
                >
                  關於我們
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-cream-white/60 hover:text-warm-coral transition-colors"
                >
                  修復服務
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="text-cream-white/60 hover:text-warm-coral transition-colors"
                >
                  成功案例
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  className="text-cream-white/60 hover:text-warm-coral transition-colors"
                >
                  門市地點
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream-white font-semibold mb-6 tracking-wider uppercase text-sm">
              聯絡方式
            </h4>
            <ul className="space-y-4">
              <li className="text-cream-white/60 flex items-center gap-2">
                <Phone size={16} className="text-warm-coral" />
                <span>+852 9123 4567</span>
              </li>
              <li className="text-cream-white/60 flex items-center gap-2">
                <Mail size={16} className="text-warm-coral" />
                <span>hello@bagrevival.hk</span>
              </li>
              <li className="text-cream-white/60 mt-4 text-sm">
                營業時間：
                <br />
                星期一至六 11:00 - 20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-white/40 text-sm">
            &copy; {new Date().getFullYear()} 皮袋復活社工作室. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-cream-white/40 hover:text-cream-white transition-colors"
            >
              私隱條款
            </a>
            <a
              href="#"
              className="text-cream-white/40 hover:text-cream-white transition-colors"
            >
              使用條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
