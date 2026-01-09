import Link from "next/link";
import {
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const linkClass =
  "relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4 relative">

        {/* BRAND */}
        <div>
          <h3 className="text-white text-base font-semibold mb-2">
            LoanBank
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-3">
            Transparent loan solutions facilitated through RBI-registered NBFC
            partners.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            RBI-Compliant Process
          </div>
        </div>

        {/* LOANS */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-2">Loans</h4>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/loans/personal-loan" className={linkClass}>Personal Loan</Link></li>
            <li><Link href="/loans/education-loan" className={linkClass}>Education Loan</Link></li>
            <li><Link href="/loans/business-loan" className={linkClass}>Business Loan</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-2">Company</h4>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/" className={linkClass}>About</Link></li>
            <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            <li><Link href="/" className={linkClass}>Privacy Policy</Link></li>
            <li><Link href="/" className={linkClass}>Terms</Link></li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-2">Office</h4>

          <p className="text-sm text-slate-400 leading-relaxed mb-2">
            Chandmari Chowk,<br />
            Doiwala, Dehradun – 248140
          </p>

          <a
            href="https://www.google.com/maps/search/Chandmari+Chowk,+Doiwala,+Dehradun+%E2%80%93+248140+MPS/@30.1758691,78.1097753,19.84z?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition"
          >
            <MapPin className="w-4 h-4" />
            Locate Us
          </a>
        </div>

        {/* CONTACT – TOP RIGHT */}
        <div className="absolute right-6 top-6 flex items-center gap-4">
          <a
            href="tel:+919084518752"
            className="text-slate-400 hover:text-white transition"
            aria-label="Call us"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          <a
            href="mailto:support@loanbank.com"
            className="text-slate-400 hover:text-white transition"
            aria-label="Email us"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/919084518752"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <img src="/banks/ssl.png" alt="SSL Secure" className="h-26 opacity-80" />
            <img src="/banks/so.png" alt="ISO 27001" className="h-26 opacity-80" />
          </div>

          <p className="text-sm text-slate-500 text-center md:text-right max-w-xl">
            Secured with SSL encryption. Information security practices aligned
            with ISO 27001. LoanBank is not a lender.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-stone-300">
          © {new Date().getFullYear()} LoanBank. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
