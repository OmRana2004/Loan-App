"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        sticky top-0 z-50
        bg-linear-to-b from-white/90 to-white/70
        backdrop-blur-xl
        border-b border-gray-200/60
      "
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-blue-600"
        >
          MPS <span className="text-gray-900"></span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/loans" label="Loans" />
          <NavItem href="/contact" label="Contact" />
        </div>
      </div>
    </motion.nav>
  );
}

/* ---------------------------------- */
/* Nav Item */
/* ---------------------------------- */
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="
        relative text-gray-700 font-medium
        transition-colors duration-200
        hover:text-blue-600
      "
    >
      {label}
      <span
        className="
          absolute left-0 -bottom-1
          h-0.5 w-0 bg-blue-600
          transition-all duration-300
          group-hover:w-full
        "
      />
    </Link>
  );
}
