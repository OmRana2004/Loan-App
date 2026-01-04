"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const banks = [
  { name: "SBI", logo: "/banks/sbi.png" },
  { name: "ICICI", logo: "/banks/icici.png" },
  { name: "HDFC", logo: "/banks/hdfc.png" },
  { name: "PNB", logo: "/banks/pnb.png" },
];

export default function BankPartners() {
  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Our Banking Partners
          </h2>
          <p className="mt-2 text-slate-600">
            Trusted by India’s leading banks
          </p>
        </div>

        {/* Moving logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-20 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 32, // smooth & slow
              ease: "linear",
            }}
          >
            {[...banks, ...banks].map((bank, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center
                  w-40 h-20
                "
              >
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
