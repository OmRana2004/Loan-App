"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

import { LayoutTextFlip } from "./components/ui/layout-text-flip";
import StatsGrid from "./components/StatsGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import BankPartners from "./components/BankPartners";

/* Motion */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-100 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5edff_1px,transparent_1px)] bg-size-[26px_26px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-24 md:pt-32 md:pb-28 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-6"
          >
            <LayoutTextFlip
              text="Reliable Loans for "
              words={[
                "Personal Loans",
                "Education Loans",
                "Business Loans",
                "Trusted Financial Support",
              ]}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.55 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Transparent interest rates, flexible repayment plans, and direct
            communication designed to support your financial goals.
          </motion.p>
        </div>

        {/* floating accents */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-28 -left-28 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-25"
        />
        <motion.div
          animate={{ y: [0, 26, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-28 w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-25"
        />
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 md:py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About <span className="text-blue-600">Our Services</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              We provide{" "}
              <span className="font-medium text-gray-900">
                responsible private loan solutions
              </span>{" "}
              built on transparency, fairness, and long-term trust.
            </p>

            <p className="text-gray-600 max-w-xl mb-8">
              Our repayment structures are designed around your income and
              comfort — never unrealistic pressure or hidden conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Transparent terms & pricing",
                "Flexible repayment planning",
                "Personal loan advisor",
                "No hidden conditions",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919084518752"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition"
            >
              <Phone className="w-4 h-4" />
              Talk to an Advisor
            </motion.a>
          </motion.div>

          {/* Right */}
          <StatsGrid />
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative bg-gray-50 py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold"
            >
              How It <span className="text-blue-600">Works</span>
            </motion.h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              A simple, transparent process designed to get you funded quickly
              without unnecessary delays.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Submit Enquiry",
                desc: "Share your loan requirement securely.",
                icon: FileText,
              },
              {
                step: "02",
                title: "Personal Consultation",
                desc: "We evaluate eligibility and repayment capacity.",
                icon: PhoneCall,
              },
              {
                step: "03",
                title: "Approval & Disbursal",
                desc: "Clear documentation and fast payout.",
                icon: ShieldCheck,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-white border border-blue-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <div className="mt-4 text-sm font-semibold text-blue-600">
                    Step {item.step}
                  </div>

                  <h3 className="mt-2 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRUST NOTE ================= */}
      <section className="relative max-w-4xl mx-auto px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl px-6 md:px-10 py-6 md:py-8 bg-linear-to-br from-gray-50 to-white border border-gray-100 shadow-sm text-center"
        >
          <p className="text-gray-600 text-sm md:text-base">
            We follow{" "}
            <span className="font-medium text-gray-800">
              responsible lending practices
            </span>
            . All terms are communicated clearly before approval.
          </p>
        </motion.div>
      </section>

      <BankPartners />

      {/* ================= FLOATING CTA ================= */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-5 right-5 z-50"
      >
        <Link
          href="/loans"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium"
        >
          Explore Loans
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </>
  );
}
