import Link from "next/link";
import {
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const linkClass =
  "relative inline-block py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t-2 border-blue-600/30">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-4">
          
          {/* 1. BRAND - Full width on mobile, spans 2 columns */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-blue-600 px-1.5 py-0.5 rounded text-white text-xs">LB</span>
              LoanBank
            </h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Transparent loan solutions facilitated through RBI-registered NBFC
              partners. Empowering your financial journey with trust and speed.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a href="tel:+919084518752" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 transition">
                <PhoneCall className="w-4 h-4" />
              </a>
              <a href="mailto:support@loanbank.com" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 transition">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919084518752" target="_blank" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              RBI-Compliant Process
            </div>
          </div>

          {/* 2. LOANS - Side by side on mobile */}
          <div className="col-span-1">
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Loans</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/loans/personal-loan" className={linkClass}>Personal</Link></li>
              <li><Link href="/loans/education-loan" className={linkClass}>Education</Link></li>
              <li><Link href="/loans/business-loan" className={linkClass}>Business</Link></li>
            </ul>
          </div>

          {/* 3. COMPANY - Side by side on mobile */}
          <div className="col-span-1">
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className={linkClass}>About</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/privacy-policy" className={linkClass}>Privacy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms</Link></li>
            </ul>
          </div>

          {/* 4. ADDRESS - Full width or spans 2 columns on mobile for readability */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Office</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Chandmari Chowk, Doiwala, <br className="hidden md:block"/> Dehradun – 248140
            </p>
            <a
              href="https://maps.google.com" 
              className="text-xs font-bold text-blue-400 flex items-center gap-1 hover:text-blue-300"
            >
              <MapPin className="w-3 h-3" />
              VIEW ON MAPS
            </a>
          </div>
        </div>
      </div>

      {/* TRUST BAR - FLEX FOR MOBILE */}
      <div className="border-t border-slate-800 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 opacity-50 grayscale">
            <img src="/banks/ssl.png" alt="SSL" className="h-6 md:h-8" />
            <img src="/banks/so.png" alt="ISO" className="h-6 md:h-8" />
          </div>
          <p className="text-[10px] md:text-xs text-slate-500 text-right max-w-37.5 md:max-w-none">
            256-bit SSL Secure. Facilitator for RBI NBFCs.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
          <p>© {new Date().getFullYear()} LoanBank</p>
          <div className="flex gap-4">
            <span>SECURE</span>
            <span>INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}