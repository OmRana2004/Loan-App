"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LayoutTextFlip } from "./components/ui/layout-text-flip";


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
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              About <span className="text-blue-600">Our Services</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We offer private loan services focused on clarity, fairness and
              long-term trust. Every loan is explained clearly before approval.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our goal is to structure repayments that suit your income and
              comfort, not pressure you with unrealistic terms.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {[
              { label: "Experience", value: "10+" },
              { label: "Clients", value: "500+" },
              { label: "Loan Types", value: "5+" },
              { label: "Transparency", value: "100%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {item.value}
                </div>
                <div className="text-gray-600 text-xs tracking-wide">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold mb-10 tracking-tight"
          >
            How It <span className="text-blue-600">Works</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Submit Enquiry",
                desc: "Share your loan requirement using our simple form.",
              },
              {
                title: "Personal Discussion",
                desc: "We contact you to understand needs and repayment capacity.",
              },
              {
                title: "Loan Approval",
                desc: "Clear documentation and smooth fund disbursement.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-7 rounded-2xl border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TRUST NOTE */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-gray-500 text-sm leading-relaxed"
        >
          We follow responsible lending practices. All interest rates, repayment
          schedules and conditions are communicated clearly before approval.
          Borrow responsibly and assess repayment capability.
        </motion.p>
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
