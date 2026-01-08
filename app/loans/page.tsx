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


/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ---------------- PAGE ---------------- */

export default function LoansPage() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 via-slate-50 to-white" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-130 h-130 bg-blue-300/20 blur-[140px] -z-10" />

      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 sm:mb-18"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Loan <span className="text-blue-700">Solutions</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Simple, transparent loans built on trust, speed, and responsible
          lending.
        </p>
      </motion.div>

      {/* HIGHLIGHTS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20"
      >
        {[
          { label: "Fast Approval", value: "24–48 hrs", icon: Timer },
          { label: "Low Interest", value: "From 8%", icon: Percent },
          { label: "Flexible Tenure", value: "Up to 7 Years", icon: Wallet },
          { label: "Secure Process", value: "100%", icon: ShieldCheck },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm text-center"
            >
              <div className="mx-auto mb-2 sm:mb-3 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-700" />
              </div>
              <div className="text-base sm:text-lg font-semibold text-slate-900">
                {item.value}
              </div>
              <div className="text-xs text-slate-600 mt-1">{item.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* LOAN CARDS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:gap-8 md:grid-cols-3"
      >
        {loans.map((loan) => (
          <motion.article
            key={loan.slug}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-100/60 flex flex-col"
          >
            {/* Image */}
            <div className="relative mb-4 h-32 sm:h-36 w-full overflow-hidden rounded-xl">
              <img
                src={loan.image}
                alt={loan.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>

            <h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              {loan.title}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {loan.description}
            </p>

            <div className="space-y-2 mb-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Percent size={15} className="text-blue-700" />
                <span>
                  <b>Interest:</b> {loan.interest}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-blue-700" />
                <span>
                  <b>Tenure:</b> {loan.tenure}
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/loans/${loan.slug}`}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl 
                         bg-linear-to-r from-blue-600 to-indigo-600 
                         px-4 py-3 text-sm font-semibold text-white 
                         shadow-sm transition-all
                         hover:shadow-md hover:scale-[1.03]"
            >
              View Details
              <ArrowRight size={14} />
            </Link>
          </motion.article>
        ))}
      </motion.div>

      {/* PROCESS – Industry Best Practice */}
      <section className="relative mt-28 sm:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Simple & Transparent Loan Process
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Designed to be quick, secure, and hassle-free — just the way it
            should be.
          </p>
        </motion.div>

        {/* Progress line */}
        <div className="hidden md:block absolute left-1/2 top-[7.2rem] w-[70%] -translate-x-1/2 h-px bg-slate-200" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          className="grid gap-10 md:grid-cols-3 text-center relative"
        >
          {[
            {
              step: "01",
              title: "Apply Online",
              desc: "Quick form, no paperwork",
              icon: CheckCircle2,
            },
            {
              step: "02",
              title: "Get Expert Call",
              desc: "Verification & guidance",
              icon: PhoneCall,
            },
            {
              step: "03",
              title: "Loan Disbursed",
              desc: "Fast approval & payout",
              icon: Wallet,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex flex-col items-center"
              >
                {/* Step circle */}
                <div
                  className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full 
                          bg-white border border-slate-200 shadow-sm"
                >
                  <Icon className="h-6 w-6 text-blue-700" />
                </div>

                {/* Step number */}
                <div className="text-blue-700 text-xs font-semibold tracking-widest mb-1">
                  STEP {item.step}
                </div>

                {/* Title */}
                <h4 className="text-base font-semibold text-slate-900 mb-1">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* TRUST STATS – Clean Fintech Style */}
      <section className="mt-20 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-center"
        >
          {[
            { value: "95%", label: "Approval Rate" },
            { value: "₹10Cr+", label: "Loans Facilitated" },
            { value: "5,000+", label: "Customers Served" },
            { value: "24–48 Hrs", label: "Processing Time" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl border border-slate-100 px-4 py-6 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* COMPLIANCE & SECURITY – Minimal & Trust Focused */}
      <section className="mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-xl border border-slate-100 bg-slate-50 px-6 py-7 sm:px-8 sm:py-8 text-center"
        >
          <p className="text-sm sm:text-base text-slate-700 font-medium mb-5 max-w-2xl mx-auto">
            Loans are facilitated through RBI-registered NBFCs and regulated
            lending partners, ensuring transparency and compliance at every
            step.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              RBI-Compliant Process
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              Bank-Grade Security
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              Data Privacy Assured
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mt-28 sm:mt-32 text-center">
        <motion.div
          whileHover={{ scale: 1.015 }}
          className="bg-linear-to-r from-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Need Help Choosing the Right Loan?
          </h3>
          <p className="text-blue-100 max-w-xl mx-auto mb-7 text-sm sm:text-base">
            Talk directly with our loan advisor and get a plan tailored to you.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            <PhoneCall size={16} />
            Talk to an Advisor
          </Link>
        </motion.div>
      </section>
    </section>
  );
}
