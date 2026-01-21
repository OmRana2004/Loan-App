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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-100 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5edff_1px,transparent_1px)] bg-size-[26px_26px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-20 sm:pt-28 sm:pb-24 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
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
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
          >
            Transparent interest rates, flexible repayment plans, and direct
            communication designed to support your financial goals.
          </motion.p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-600">Our Services</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-5 max-w-xl">
              We provide{" "}
              <span className="font-medium text-gray-900">
                responsible private loan solutions
              </span>{" "}
              built on transparency, fairness, and long-term trust.
            </p>

            <p className="text-gray-600 text-sm sm:text-base max-w-xl mb-8">
              Our repayment structures are designed around your income and
              comfort — never unrealistic pressure or hidden conditions.
            </p>

            {/* ✅ GRID ON MOBILE */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Transparent terms & pricing",
                "Flexible repayment planning",
                "Personal loan advisor",
                "No hidden conditions",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+919084518752"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium shadow hover:bg-blue-700 transition"
            >
              <Phone className="w-4 h-4" />
              Talk to an Advisor
            </a>
          </motion.div>

          {/* RIGHT */}
          <StatsGrid />
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
              How It <span className="text-blue-600">Works</span>
            </h2>

            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              A simple, transparent process designed to get you funded quickly.
            </p>
          </div>

          {/* ✅ GRID ON MOBILE */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
                <div key={i} className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-white border border-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <div className="mt-3 text-sm font-semibold text-blue-600">
                    Step {item.step}
                  </div>

                  <h3 className="mt-2 text-sm sm:text-base font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-xs sm:text-sm max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRUST NOTE ================= */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-xl px-5 py-6 bg-linear-to-br from-gray-50 to-white border border-gray-100 shadow-sm text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            We follow{" "}
            <span className="font-medium text-gray-800">
              responsible lending practices
            </span>
            . All terms are communicated clearly before approval.
          </p>
        </div>
      </section>

      <BankPartners />

      {/* ================= FLOATING CTA ================= */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="/loans"
          className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium"
        >
          Explore Loans
          <ArrowRight size={14} />
        </Link>
      </div>
    </>
  );
}
