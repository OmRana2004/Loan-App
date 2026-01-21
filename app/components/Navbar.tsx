"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  /* Prevent background scroll when mobile menu is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        sticky top-0 z-50
        backdrop-blur-2xl
        bg-linear-to-r
        from-white/70 via-white/50 to-white/70
        border-b border-slate-200/60
        shadow-[0_8px_30px_rgba(15,23,42,0.08)]
      "
    >
      <ResizableNavbar>
        {/* ---------------- Desktop Navbar ---------------- */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />

          <NavbarButton variant="gradient" href={`tel:${PHONE_NUMBER}`}>
            Talk to an Advisor
          </NavbarButton>
        </NavBody>

        {/* ---------------- Mobile Navbar ---------------- */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={open}
              onClick={() => setOpen(!open)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={open}
            onClose={() => setOpen(false)}
            className="px-6 py-6"
          >
            {/* Nav Links */}
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="
                    text-base font-medium
                    text-slate-700
                    py-2
                    border-b border-slate-200
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <NavbarButton
              variant="gradient"
              href={`tel:${PHONE_NUMBER}`}
              className="w-full mt-6 h-12 text-base"
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
