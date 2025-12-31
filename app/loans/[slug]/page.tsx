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
      "Our personal loans help you manage planned and unplanned expenses such as medical emergencies, travel, or home improvements. We offer transparent pricing, flexible tenures, and quick access to funds.",
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
      "Our education loans support higher studies in India and abroad. Funds can be used for tuition fees, accommodation, books, and other academic expenses, with student-friendly repayment terms.",
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
    eligibility: "Business owners with minimum 1 year of operational history.",
    description:
      "Business loans designed to support working capital needs, expansion, equipment purchase, and cash-flow management with structured repayment plans.",
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
  const [rate, setRate] = useState(loan.interest);
  const [years, setYears] = useState(5);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;

  const emi =
    amount && rate && years
      ? Math.round(
          (amount *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1)
        )
      : 0;

  const totalPayable = emi * months;
  const totalInterest = totalPayable - amount;

  const principalPercent = (amount / totalPayable) * 100;
  const interestPercent = (totalInterest / totalPayable) * 100;

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-28 font-sans">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 to-white" />

      {/* HEADER */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          {loan.title}
        </h1>
        <p className="text-slate-600 max-w-3xl">{loan.description}</p>
      </motion.div>

      {/* IMAGE */}
      <div className="mb-16 rounded-3xl overflow-hidden border border-slate-200">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
          alt="Loan consultation"
          className="w-full h-75 object-cover"
        />
      </div>

      {/* HIGHLIGHTS */}
      <div className="bg-white/95 border border-slate-200 rounded-3xl p-8 mb-16">
        <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
        <ul className="grid md:grid-cols-2 gap-3">
          {loan.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-3 gap-8 bg-white/95 p-8 rounded-3xl border border-slate-200 mb-20">
        <Detail icon={Percent} label="Interest Rate" value={`${loan.interest}%`} />
        <Detail icon={Calendar} label="Tenure" value={loan.tenure} />
        <Detail icon={UserCheck} label="Eligibility" value={loan.eligibility} />
      </div>

      {/* EMI CALCULATOR */}
      <section className="mb-28">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-400" />
          EMI Calculator
        </h3>

        <div className="bg-linear-to-br from-indigo-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <SliderField label="Loan Amount" value={amount} min={50000} max={5000000} step={50000} unit="₹" onChange={setAmount} />
            <SliderField label="Interest Rate" value={rate} min={6} max={24} step={0.5} unit="%" onChange={setRate} />
            <SliderField label="Tenure" value={years} min={1} max={10} step={1} unit="Years" onChange={setYears} />
          </div>

          {/* EMI RESULT */}
          <motion.div
  key={emi}
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="
    bg-linear-to-r from-indigo-500 to-indigo-400
    rounded-2xl p-6 text-center mb-8
    shadow-md
  "
>
  <p className="text-indigo-100 text-sm mb-1">
    Estimated Monthly EMI
  </p>

  <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
    ₹{emi.toLocaleString()}
  </p>

  <p className="text-xs text-indigo-200 mt-2">
    Indicative EMI · Subject to final approval
  </p>
</motion.div>


          {/* BREAKDOWN */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Breakdown label="Principal" value={amount} color="text-indigo-600" />
            <Breakdown label="Total Interest" value={Math.round(totalInterest)} color="text-rose-600" />
            <Breakdown label="Total Payable" value={Math.round(totalPayable)} color="text-slate-800" />
          </div>

          {/* BAR */}
          <div className="bg-slate-200 h-3 rounded-full overflow-hidden">
            <motion.div className="h-full bg-indigo-500" animate={{ width: `${principalPercent}%` }} />
            <motion.div className="h-full bg-rose-400 -mt-3" animate={{ width: `${interestPercent}%` }} />
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="mb-24">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          Required Documents
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Aadhaar / PAN Card",
            "Address Proof",
            "Bank Statements (Last 6 months)",
            "Income Proof / Salary Slips",
            "Passport-size Photograph",
            "Business Proof (if applicable)",
          ].map((doc) => (
            <div key={doc} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span className="text-sm">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex gap-6">
        <Link href="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 inline-flex items-center gap-2">
          Contact for Enquiry <ArrowRight size={16} />
        </Link>
        <Link href="/loans" className="border border-slate-300 px-8 py-4 rounded-xl hover:bg-slate-100">
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
      <div className="flex items-center gap-2 text-slate-500 mb-2">
        <Icon size={16} />
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-lg font-medium">{value}</p>
    </div>
  );
}

function SliderField({ label, value, min, max, step, unit, onChange }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-medium">
          {unit === "₹" ? "₹" : ""}
          {value.toLocaleString()}
          {unit !== "₹" ? ` ${unit}` : ""}
        </span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-indigo-600" />
    </div>
  );
}

function Breakdown({ label, value, color }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className={`text-lg font-semibold ${color}`}>
        ₹{value.toLocaleString()}
      </p>
    </div>
  );
}
