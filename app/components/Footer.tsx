import Link from "next/link";
import {
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const linkClass =
  "relative inline-block py-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 border-t border-blue-600/30">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
          
          {/* BRAND */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
              <span className="bg-blue-600 px-1.5 py-0.5 rounded text-[10px]">
                MPS
              </span>
              Finance
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-sm">
              Transparent loan solutions facilitated through RBI-registered NBFC
              partners.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <a
                href="tel:+919084518752"
                className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 transition"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              <a
                href="mailto:support@loanbank.com"
                className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 transition"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919084518752"
                target="_blank"
                className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              RBI-Compliant
            </div>
          </div>

          {/* LOANS */}
          <div>
            <h4 className="text-white text-[11px] font-extrabold uppercase tracking-widest mb-3">
              Loans
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/loans/personal-loan" className={linkClass}>
                  Personal
                </Link>
              </li>
              <li>
                <Link href="/loans/education-loan" className={linkClass}>
                  Education
                </Link>
              </li>
              <li>
                <Link href="/loans/business-loan" className={linkClass}>
                  Business
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white text-[11px] font-extrabold uppercase tracking-widest mb-3">
              Company
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* OFFICE */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white text-[11px] font-extrabold uppercase tracking-widest mb-3">
              Office
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed mb-2">
              Chandmari Chowk, Doiwala,
              <br className="hidden md:block" />
              Dehradun – 248140
            </p>

            <a
              href="https://maps.google.com"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300"
            >
              <MapPin className="w-3 h-3" />
              View Map
            </a>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="border-t border-slate-800 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 opacity-60 grayscale">
            <img src="/banks/ssl.png" alt="SSL" className="h-6" />
            <img src="/banks/so.png" alt="ISO" className="h-6" />
          </div>

          <p className="text-[10px] text-slate-500 text-right">
            256-bit SSL · RBI NBFC Partners
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center text-[10px] text-slate-600 font-semibold uppercase">
          <p>© {new Date().getFullYear()} MPS</p>
          <div className="flex gap-3">
            <span>Secure</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
