"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Percent, Clock } from "lucide-react";

/* Loan Data */
const loans = [
  {
    title: "Personal Loan",
    description:
      "Flexible personal loans for emergencies, travel and everyday needs with clearly defined interest rates and repayment terms.",
    interest: "12% – 18%",
    tenure: "1 – 5 Years",
    slug: "personal-loan",
  },
  {
    title: "Education Loan",
    description:
      "Affordable education loans to support academic goals with lower interest rates and student-friendly repayment options.",
    interest: "8% – 12%",
    tenure: "3 – 7 Years",
    slug: "education-loan",
  },
  {
    title: "Business Loan",
    description:
      "Tailored business loan solutions designed to improve cash flow, fund expansion and support sustainable growth.",
    interest: "10% – 16%",
    tenure: "2 – 6 Years",
    slug: "business-loan",
  },
];

/* Motion */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function LoansPage() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 pt-24 pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50/60 via-white to-white" />

      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 md:mb-20"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Loan <span className="text-blue-600">Solutions</span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Transparent loan options designed with clarity, flexibility and
          responsible lending practices at the core.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-7 md:gap-10 md:grid-cols-3"
      >
        {loans.map((loan) => (
          <motion.article
            key={loan.slug}
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              relative bg-white rounded-3xl
              p-7 md:p-8
              border border-gray-100
              transition-all
              flex flex-col
            "
          >
            {/* Top Accent */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-linear-to-r from-blue-500 to-indigo-500" />

            {/* Title */}
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 tracking-tight">
              {loan.title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-[15px] leading-relaxed text-gray-600 mb-6 grow">
              {loan.description}
            </p>

            {/* Meta */}
            <div className="space-y-3 mb-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Percent size={15} className="text-blue-600" />
                <span>
                  <span className="font-medium text-gray-900">
                    Interest Rate:
                  </span>{" "}
                  {loan.interest}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={15} className="text-blue-600" />
                <span>
                  <span className="font-medium text-gray-900">
                    Loan Tenure:
                  </span>{" "}
                  {loan.tenure}
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/loans/${loan.slug}`}
              className="
                inline-flex items-center gap-2
                text-sm font-medium text-blue-600
                group
              "
            >
              View Details
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
