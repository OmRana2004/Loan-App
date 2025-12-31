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
      "Flexible personal loans designed for emergencies, travel, and everyday needs with clearly defined interest rates and repayment plans.",
    interest: "12% – 18%",
    tenure: "1 – 5 Years",
    slug: "personal-loan",
  },
  {
    title: "Education Loan",
    description:
      "Affordable education loans supporting academic goals with student-friendly repayment options and lower interest rates.",
    interest: "8% – 12%",
    tenure: "3 – 7 Years",
    slug: "education-loan",
  },
  {
    title: "Business Loan",
    description:
      "Tailored business financing solutions to improve cash flow, fund expansion, and support sustainable growth.",
    interest: "10% – 16%",
    tenure: "2 – 6 Years",
    slug: "business-loan",
  },
];

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ---------------- PAGE ---------------- */

export default function LoansPage() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 pt-24 pb-32 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 via-slate-50 to-white" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-130 h-130 bg-blue-300/20 blur-[140px] -z-10" />

      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Loan <span className="text-blue-700">Solutions</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Transparent, flexible loan options designed with responsible lending
          and long-term trust at the core.
        </p>
      </motion.div>

      {/* HIGHLIGHTS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
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
              className="bg-white/90 rounded-2xl p-5 border border-slate-100 shadow-sm text-center"
            >
              <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-blue-100/60 flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-700" />
              </div>
              <div className="text-lg font-semibold text-slate-900">
                {item.value}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {item.label}
              </div>
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
        className="grid gap-8 md:grid-cols-3"
      >
        {loans.map((loan) => (
          <motion.article
            key={loan.slug}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group relative bg-white/95 rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md flex flex-col"
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-linear-to-r from-blue-600 to-indigo-600" />

            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              {loan.title}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 grow">
              {loan.description}
            </p>

            <div className="space-y-3 mb-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Percent size={15} className="text-blue-700" />
                <span><b>Interest:</b> {loan.interest}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-blue-700" />
                <span><b>Tenure:</b> {loan.tenure}</span>
              </div>
            </div>

            <Link
              href={`/loans/${loan.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 mt-auto group/link"
            >
              View Details
              <ArrowRight
                size={15}
                className="transition-transform group-hover/link:translate-x-1"
              />
            </Link>
          </motion.article>
        ))}
      </motion.div>

      {/* PROCESS */}
      <section className="mt-28 grid md:grid-cols-3 gap-8 text-center">
        {[
          { step: "1", title: "Apply", desc: "Submit enquiry in minutes", icon: CheckCircle2 },
          { step: "2", title: "Consult", desc: "Personal discussion & checks", icon: PhoneCall },
          { step: "3", title: "Disburse", desc: "Fast approval & payout", icon: Wallet },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              whileHover={{ y: -4 }}
              className="bg-white/90 rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-blue-100/60 flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-700" />
              </div>
              <div className="text-blue-700 font-semibold mb-1">
                Step {item.step}
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mt-32 text-center">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-linear-to-r from-blue-700 to-indigo-700 rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Choosing the Right Loan?
          </h3>
          <p className="text-blue-100 max-w-xl mx-auto mb-8">
            Speak directly with our loan advisor and get personalized guidance.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            <PhoneCall size={16} />
            Talk to an Advisor
          </Link>
        </motion.div>
      </section>
    </section>
  );
}
