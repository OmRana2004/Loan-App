"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, FileText, PhoneCall, ShieldCheck, CheckCircle2, Phone } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { LayoutTextFlip } from "./components/ui/layout-text-flip";
import StatsGrid from "./components/StatsGrid";

/* Motion */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
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
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Transparent interest rates, flexible repayment plans and direct
            communication designed to support your financial goals.
          </motion.p>
        </div>

        {/* Floating accents */}
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

     {/* ABOUT */}
<section className="relative max-w-7xl mx-auto px-4 py-20 md:py-24 overflow-hidden">
  {/* subtle background accent */}
  <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative grid md:grid-cols-2 gap-16 items-center"
  >
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
        About <span className="text-blue-600">Our Services</span>
      </h2>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
        We provide <span className="font-medium text-gray-900">responsible private loan solutions</span>
        built on transparency, fairness, and long-term trust. Every loan is
        clearly explained before approval.
      </p>

      <p className="text-gray-600 leading-relaxed max-w-xl mb-8">
        Our repayment structures are designed around your income and comfort —
        never unrealistic pressure or hidden conditions.
      </p>

      {/* WHY CHOOSE US */}
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

      {/* CTA */}
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        href="#contact"
        className="
          inline-flex items-center gap-3
          bg-blue-600 text-white
          px-6 py-3 rounded-xl
          font-medium text-sm
          shadow-md hover:shadow-lg
          transition
        "
      >
        <Phone className="w-4 h-4" />
        Talk to an Advisor
      </motion.a>
    </motion.div>

    {/* RIGHT STATS */}
    <StatsGrid />
  </motion.div>
</section>



     {/* HOW IT WORKS – TIMELINE VERSION */}
<section className="relative bg-gray-50 py-20 md:py-4 overflow-hidden">
  <div className="absolute inset-0 bg-linear-to-b from-blue-50/60 to-transparent" />

  <div className="relative max-w-7xl mx-auto px-4">
    {/* heading */}
    <div className="text-center mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold tracking-tight"
      >
        How It <span className="text-blue-600">Works</span>
      </motion.h2>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        A simple, transparent process designed to get you funded quickly, with a smooth application flow, real-time updates at every stage, and clear communication throughout — no hidden charges, no unnecessary delays, just a secure and hassle-free experience from start to finish.
      </p>
    </div>

    {/* timeline */}
    <div className="relative">
      {/* horizontal line (desktop) */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-linear-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 origin-left"
      />

      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            step: "01",
            title: "Submit Enquiry",
            desc: "Share your loan requirement using our secure enquiry form.",
            icon: FileText,
          },
          {
            step: "02",
            title: "Personal Consultation",
            desc: "Our specialist evaluates eligibility and repayment capacity.",
            icon: PhoneCall,
          },
          {
            step: "03",
            title: "Approval & Disbursal",
            desc: "Quick approval with clear documentation and smooth payout.",
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
              className="group relative text-center"
            >
              {/* node */}
              <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
                {/* glow */}
                <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-md opacity-0 group-hover:opacity-100 transition" />

                {/* icon container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-14 h-14 rounded-full bg-white border border-blue-100 flex items-center justify-center"
                >
                  {/* pulse */}
                  <span className="absolute inset-0 rounded-full bg-blue-600/20 animate-ping opacity-0 group-hover:opacity-100" />

                  <Icon className="w-6 h-6 text-blue-600 relative z-10" />
                </motion.div>
              </div>

              {/* step */}
              <div className="mt-4 text-sm font-semibold text-blue-600">
                Step {item.step}
              </div>

              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>



      {/* TRUST NOTE */}
<section className="relative max-w-4xl mx-auto px-4 py-14">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="
      relative rounded-2xl px-6 md:px-10 py-6 md:py-8
      bg-linear-to-br from-gray-50 to-white
      border border-gray-100
      shadow-sm
    "
  >
    {/* subtle icon */}
    <div className="flex justify-center mb-4">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0-1.105-.895-2-2-2m4 0a2 2 0 10-4 0m4 0v6m-4-6v6m-6 4h12"
          />
        </svg>
      </div>
    </div>

    {/* text */}
    <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
      We follow <span className="font-medium text-gray-800">responsible lending practices</span>.
      All interest rates, repayment schedules, and terms are communicated clearly
      before approval. Borrow responsibly and assess your repayment capability
      before applying.
    </p>
  </motion.div>
</section>


      {/* FLOATING CTA */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-5 right-5 z-50"
      >
        <Link
          href="/loans"
          className="group bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium"
        >
          Explore Loans
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </>
  );
}
