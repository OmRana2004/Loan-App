"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "./ui/resizable-navbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const PHONE_NUMBER = "+919084518752";
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Loans", link: "/loans" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        sticky top-0 z-50
        backdrop-blur-2xl
        bg-linear-to-r
        from-white/60 via-white/40 to-white/60
        border-b border-slate-200/50
        shadow-[0_10px_40px_rgba(15,23,42,0.08)]
      "
    >
      <ResizableNavbar>
        {/* ---------------- Desktop Navbar ---------------- */}
        <NavBody>
          <NavbarLogo />

          <NavItems items={navItems} />

          {/* Call Button */}
          <div>
            <NavbarButton variant="gradient" href={`tel:${PHONE_NUMBER}`}>
              Talk to an Advisor
            </NavbarButton>
          </div>
        </NavBody>

        {/* ---------------- Mobile Navbar ---------------- */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
            {/* Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-neutral-700 dark:text-neutral-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Call Button */}
            <NavbarButton
              variant="gradient"
              href={`tel:${PHONE_NUMBER}`}
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Talk to an Advisor
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </motion.nav>
  );
}
