"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShieldCheck,
  Database,
  Lock,
  Share2,
  RefreshCcw,
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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed text-sm sm:text-base">
            At <strong>LoanBank</strong>, we handle your personal and financial
            information with transparency, responsibility, and industry-standard
            security practices.
          </p>
        </motion.header>

        {/* Content */}
        <div className="space-y-5">
          {[
            {
              icon: Database,
              title: "Information We Collect",
              content: (
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personal details (name, phone, email)</li>
                  <li>Loan and financial information</li>
                  <li>Technical data such as IP and browser</li>
                </ul>
              ),
            },
            {
              icon: ShieldCheck,
              title: "How We Use Your Information",
              content: (
                <ul className="list-disc pl-5 space-y-1">
                  <li>Loan processing and verification</li>
                  <li>Customer communication and support</li>
                  <li>Security monitoring and improvements</li>
                </ul>
              ),
            },
            {
              icon: Lock,
              title: "Data Security",
              content: (
                <p>
                  We use secure infrastructure and access controls to prevent
                  unauthorized access, loss, or misuse of your data.
                </p>
              ),
            },
            {
              icon: Share2,
              title: "Third-Party Sharing",
              content: (
                <p>
                  We never sell your data. Information is shared only with
                  RBI-registered NBFC partners strictly for loan processing.
                </p>
              ),
            },
            {
              icon: RefreshCcw,
              title: "Policy Updates",
              content: (
                <p>
                  This policy may be updated periodically. Continued use of our
                  services indicates acceptance of the revised policy.
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
