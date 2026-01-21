"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FileText,
  UserCheck,
  ShieldAlert,
  Scale,
} from "lucide-react";

/* ---------------- Animations ---------------- */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ---------------- Page ---------------- */

export default function TermsPage() {
  return (
    <section className="bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 py-16 sm:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        {/* Header */}
        <motion.header variants={item} className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Terms & Conditions
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed text-sm sm:text-base">
            These terms outline the rules, responsibilities, and conditions for
            using the <strong>LoanBank</strong> platform and services.
          </p>
        </motion.header>

        {/* Content */}
        <div className="space-y-5">
          {[
            {
              icon: UserCheck,
              title: "User Eligibility",
              content: (
                <p>
                  Users must provide accurate, complete, and truthful
                  information while applying for loans. Any false information
                  may result in rejection.
                </p>
              ),
            },
            {
              icon: FileText,
              title: "Platform Usage",
              content: (
                <ul className="list-disc pl-5 space-y-1">
                  <li>Website content is for informational purposes only</li>
                  <li>Unauthorized use of the platform is prohibited</li>
                  <li>Any misuse or hacking attempt is strictly illegal</li>
                </ul>
              ),
            },
            {
              icon: ShieldAlert,
              title: "Loan Decisions",
              content: (
                <p>
                  Loan approvals depend on internal verification and assessment.
                  Submission of an application does not guarantee approval.
                </p>
              ),
            },
            {
              icon: Scale,
              title: "Limitation of Liability",
              content: (
                <p>
                  LoanBank shall not be liable for any indirect, incidental, or
                  consequential damages arising from the use of this platform.
                </p>
              ),
            },
          ].map(({ icon: Icon, title, content }, index) => (
            <motion.div
              key={index}
              variants={item}
              className="
                bg-slate-50/80
                border border-slate-200
                rounded-xl
                p-5 sm:p-6
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <div className="flex gap-3">
                <Icon className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-base sm:text-lg font-medium text-slate-900 mb-1">
                    {title}
                  </h2>
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          variants={item}
          className="text-xs sm:text-sm text-slate-500 mt-10"
        >
          Last updated: January 2026
        </motion.p>
      </motion.div>
    </section>
  );
}
