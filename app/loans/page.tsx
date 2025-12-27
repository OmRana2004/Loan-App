"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Percent, Clock } from "lucide-react";

const loans = [
  {
    title: "Personal Loan",
    description:
      "Flexible personal loans designed to support emergencies, travel plans and everyday financial needs with transparent terms.",
    interest: "12% – 18%",
    tenure: "1 – 5 Years",
    slug: "personal-loan",
  },
  {
    title: "Education Loan",
    description:
      "Affordable education loans to help you achieve academic goals with easy repayment options and lower interest rates.",
    interest: "8% – 12%",
    tenure: "3 – 7 Years",
    slug: "education-loan",
  },
  {
    title: "Business Loan",
    description:
      "Customized business loan solutions to help you expand operations, manage cash flow and grow sustainably.",
    interest: "10% – 16%",
    tenure: "2 – 6 Years",
    slug: "business-loan",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function LoansPage() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50/50 via-white to-white" />

      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl md:text-[42px] font-semibold tracking-tight text-gray-900 mb-6">
          Our <span className="text-blue-600">Loan Services</span>
        </h1>

        <p className="text-[17px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
          Explore carefully structured loan options with transparent pricing,
          flexible repayment terms and personal guidance at every step.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-12"
      >
        {loans.map((loan) => (
          <motion.div
            key={loan.slug}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="
              relative bg-white rounded-3xl
              p-9
              border border-gray-100
              shadow-sm hover:shadow-xl
              transition-all
              flex flex-col
            "
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-blue-500 to-indigo-500 rounded-t-3xl" />

            {/* Title */}
            <h2 className="text-[22px] font-semibold text-gray-900 mb-4">
              {loan.title}
            </h2>

            {/* Description */}
            <p className="text-[15.5px] leading-relaxed text-gray-600 mb-10 grow">
              {loan.description}
            </p>

            {/* Meta */}
            <div className="space-y-4 mb-10 text-[14.5px] text-gray-700">
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
              className="inline-flex items-center gap-2 text-[15px] font-medium text-blue-600 group"
            >
              View Details
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
