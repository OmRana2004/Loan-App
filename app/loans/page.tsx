"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Percent,
  Clock,
  ShieldCheck,
  Timer,
  Wallet,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const loans = [
  {
    title: "Personal Loan",
    description:
      "Flexible loans for emergencies, travel, and daily needs with transparent interest rates.",
    interest: "12% – 18%",
    tenure: "1 – 5 Years",
    slug: "personal-loan",
    image: "/banks/PL.png",
  },
  {
    title: "Education Loan",
    description:
      "Student-friendly loans with affordable interest and flexible repayment options.",
    interest: "8% – 12%",
    tenure: "3 – 7 Years",
    slug: "education-loan",
    image: "/banks/EL.png",
  },
  {
    title: "Business Loan",
    description:
      "Growth-focused financing to improve cash flow and expand operations.",
    interest: "10% – 16%",
    tenure: "2 – 6 Years",
    slug: "business-loan",
    image: "/banks/BL.png",
  },
];

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- PAGE ---------------- */

export default function LoansPage() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-18 sm:pt-24 pb-20 sm:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 via-slate-50 to-white" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-300/20 blur-[110px] -z-10" />

      {/* ================= HEADER ================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.4 }}
        className="text-center mb-8 sm:mb-16"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">
          Loan <span className="text-blue-700">Solutions</span>
        </h1>
        <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto">
          Simple, transparent loans built on trust, speed, and responsible
          lending.
        </p>
      </motion.div>

      {/* ================= HIGHLIGHTS ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-18">
        {[
          { label: "Fast Approval", value: "24–48 hrs", icon: Timer },
          { label: "Low Interest", value: "From 8%", icon: Percent },
          { label: "Flexible Tenure", value: "Up to 7 Years", icon: Wallet },
          { label: "Secure Process", value: "100%", icon: ShieldCheck },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-xl p-3 sm:p-5 border border-slate-100 shadow-sm text-center"
            >
              <div className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
              </div>
              <div className="text-sm sm:text-lg font-semibold text-slate-900">
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= LOAN CARDS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {loans.map((loan) => (
          <motion.article
            key={loan.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-2xl p-4 sm:p-7 border border-slate-100 shadow-sm flex flex-col"
          >
            <div className="relative mb-3 h-24 sm:h-36 rounded-lg overflow-hidden">
              <img
                src={loan.image}
                alt={loan.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>

            <h2 className="text-sm sm:text-lg font-semibold text-slate-900 mb-1">
              {loan.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
              {loan.description}
            </p>

            <div className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Percent size={13} className="text-blue-700" />
                <span>
                  <b>Interest:</b> {loan.interest}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-blue-700" />
                <span>
                  <b>Tenure:</b> {loan.tenure}
                </span>
              </div>
            </div>

            <Link
              href={`/loans/${loan.slug}`}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl
                         bg-linear-to-r from-blue-600 to-indigo-600
                         px-3 py-2.5 text-xs sm:text-sm font-semibold text-white
                         transition hover:opacity-90"
            >
              View Details
              <ArrowRight size={13} />
            </Link>
          </motion.article>
        ))}
      </div>

      {/* ================= PROCESS ================= */}
      <section className="mt-12 sm:mt-24">
        <div className="text-center mb-6 sm:mb-12">
          <h3 className="text-lg sm:text-3xl font-bold text-slate-900 mb-1">
            Simple Loan Process
          </h3>
          <p className="text-xs sm:text-base text-slate-600">
            Quick, secure and transparent.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8 text-center">
          {[
            {
              step: "01",
              title: "Apply Online",
              desc: "Quick form",
              icon: CheckCircle2,
            },
            {
              step: "02",
              title: "Expert Call",
              desc: "Verification",
              icon: PhoneCall,
            },
            {
              step: "03",
              title: "Loan Disbursed",
              desc: "Fast payout",
              icon: Wallet,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-100 px-3 py-4 sm:px-6 sm:py-6 shadow-sm"
              >
                <div className="mx-auto mb-2 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                </div>
                <div className="text-[11px] font-semibold text-blue-700 mb-0.5">
                  STEP {item.step}
                </div>
                <h4 className="text-xs sm:text-base font-semibold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="mt-12 sm:mt-20">
        <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-5 sm:px-8 sm:py-8 text-center">
          <p className="text-xs sm:text-base text-slate-700 font-medium max-w-2xl mx-auto mb-4">
            Loans are facilitated through RBI-registered NBFCs and regulated
            partners.
          </p>

          <div className="grid grid-cols-2 sm:flex justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              RBI-Compliant
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Bank-Grade Security
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Data Privacy
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-14 sm:mt-28 text-center">
        <div className="bg-linear-to-r from-blue-700 to-indigo-700 rounded-2xl sm:rounded-3xl p-5 sm:p-12 text-white">
          <h3 className="text-lg sm:text-3xl font-bold mb-1">
            Need Help Choosing the Right Loan?
          </h3>
          <p className="text-blue-100 mb-5 text-xs sm:text-base max-w-xl mx-auto">
            Speak directly with our loan advisor.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            <PhoneCall size={15} />
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </section>
  );
}
