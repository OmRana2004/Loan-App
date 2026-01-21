"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { use, useState } from "react";
import {
  ArrowRight,
  Percent,
  Calendar,
  UserCheck,
  Calculator,
  FileText,
  CheckCircle2,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const loans = {
  "personal-loan": {
    title: "Personal Loan",
    interest: 14,
    tenure: "1 – 5 Years",
    eligibility: "Salaried or self-employed individuals with stable income.",
    description:
      "Flexible personal loans for emergencies, travel, and home needs with transparent pricing and fast disbursal.",
    highlights: [
      "No restriction on usage",
      "Minimal documentation",
      "Flexible repayment options",
      "Transparent interest rates",
    ],
  },
  "education-loan": {
    title: "Education Loan",
    interest: 10,
    tenure: "3 – 7 Years",
    eligibility: "Students with confirmed admission in recognized institutions.",
    description:
      "Education loans for higher studies in India and abroad with student-friendly repayment plans.",
    highlights: [
      "Covers tuition & living expenses",
      "Lower interest rates",
      "Repayment after course completion",
      "Longer tenure options",
    ],
  },
  "business-loan": {
    title: "Business Loan",
    interest: 13,
    tenure: "2 – 6 Years",
    eligibility: "Business owners with minimum 1 year operational history.",
    description:
      "Growth-focused business loans for working capital, expansion and cash-flow management.",
    highlights: [
      "Working capital & expansion",
      "Cash-flow friendly repayment",
      "Clear approval process",
      "Supports long-term growth",
    ],
  },
};

type LoanSlug = keyof typeof loans;

/* ---------------- PAGE ---------------- */

export default function LoanDetailPage({
  params,
}: {
  params: Promise<{ slug: LoanSlug }>;
}) {
  const { slug } = use(params);
  const loan = loans[slug];
  if (!loan) return notFound();

  /* EMI STATE */
  const [amount, setAmount] = useState(500000);
  const [rate] = useState(loan.interest);
  const [years, setYears] = useState(5);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;

  const emi =
    (amount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayable = Math.round(emi * months);
  const totalInterest = totalPayable - amount;

  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-20 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 to-white" />

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-4xl font-semibold text-slate-900 mb-2">
          {loan.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
          {loan.description}
        </p>
      </motion.div>

      {/* ================= HIGHLIGHTS ================= */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 mb-10 sm:mb-16">
        <h3 className="text-sm sm:text-lg font-semibold mb-4">
          Key Benefits
        </h3>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          {loan.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= DETAILS ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 bg-white border border-slate-200 p-4 sm:p-8 rounded-2xl mb-12 sm:mb-20">
        <Detail icon={Percent} label="Interest Rate" value={`${loan.interest}%`} />
        <Detail icon={Calendar} label="Tenure" value={loan.tenure} />
        <Detail icon={UserCheck} label="Eligibility" value={loan.eligibility} />
      </div>

      {/* ================= EMI CALCULATOR ================= */}
      <section className="mb-14 sm:mb-24">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-500" />
          EMI Calculator
        </h3>

        <div className="bg-linear-to-br from-indigo-50 via-white to-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-8">
          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            <SliderField
              label="Loan Amount"
              value={amount}
              min={50000}
              max={5000000}
              step={50000}
              unit="₹"
              onChange={setAmount}
            />
            <SliderField
              label="Interest Rate"
              value={rate}
              min={6}
              max={24}
              step={0.5}
              unit="%"
              onChange={() => {}}
              disabled
            />
            <SliderField
              label="Tenure"
              value={years}
              min={1}
              max={10}
              step={1}
              unit="Years"
              onChange={setYears}
            />
          </div>

          {/* EMI RESULT */}
          <div className="bg-linear-to-r from-indigo-500 to-indigo-400 rounded-xl p-4 sm:p-6 text-center mb-6">
            <p className="text-indigo-100 text-xs mb-1">
              Estimated Monthly EMI
            </p>
            <p className="text-2xl sm:text-4xl font-semibold text-white">
              ₹{Math.round(emi).toLocaleString()}
            </p>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Breakdown label="Principal" value={amount} />
            <Breakdown label="Interest" value={totalInterest} />
            <Breakdown label="Total Payable" value={totalPayable} />
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section className="mb-14 sm:mb-24">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          Required Documents
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
          {[
            "Aadhaar / PAN Card",
            "Address Proof",
            "Bank Statements (6 months)",
            "Income Proof",
            "Photograph",
            "Business Proof (if any)",
          ].map((doc) => (
            <div
              key={doc}
              className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-lg text-xs sm:text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              {doc}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 text-center font-medium"
        >
          Contact for Enquiry
        </Link>

        <Link
          href="/loans"
          className="border border-slate-300 px-6 py-3 rounded-xl hover:bg-slate-100 text-center"
        >
          Back to Loans
        </Link>
      </div>
    </section>
  );
}

/* ---------------- HELPERS ---------------- */

function Detail({ icon: Icon, label, value }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 text-slate-500 mb-1">
        <Icon size={15} />
        <span className="text-xs">{label}</span>
      </div>
      <p className="text-sm sm:text-base font-medium">{value}</p>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
  disabled,
}: any) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span className="font-medium">
          {unit === "₹" ? "₹" : ""}
          {value.toLocaleString()}
          {unit !== "₹" ? ` ${unit}` : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-600"
      />
    </div>
  );
}

function Breakdown({ label, value }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="text-sm font-semibold">
        ₹{value.toLocaleString()}
      </p>
    </div>
  );
}
