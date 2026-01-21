"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import {
  User,
  Phone,
  MessageSquare,
  Banknote,
  CheckCircle2,
  Loader2,
  Home,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading || submitted) return;
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      loanType: formData.get("loanType"),
      address: formData.get("address"),
      message: formData.get("message"),
    };

    try {
      const res = await axios.post("/api/enquiry", payload);
      if (!res.data?.success) throw new Error("Failed");
      setSubmitted(true);
      e.currentTarget.reset();
    } catch {
      // optional error toast
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-slate-50 min-h-screen px-4 sm:px-6 pt-20 sm:pt-28 pb-20">
      {/* background accents */}
      <div className="absolute -top-10 right-0 -z-10 w-64 h-64 bg-blue-100/40 rounded-full blur-[90px]" />
      <div className="absolute bottom-10 left-0 -z-10 w-56 h-56 bg-indigo-100/40 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-12 items-start">
        {/* LEFT */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold uppercase tracking-widest">
              Trusted Partners
            </span>

            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Quick Enquiry <br />
              <span className="text-slate-400 font-medium">
                For Your Loan
              </span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-sm">
              Fill the details below. Our advisor will contact you with
              personalized rates and plans.
            </p>
          </motion.div>

          {/* trust badges – 2 columns on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
            {[
              {
                icon: ShieldCheck,
                title: "Data Encrypted",
                desc: "Your info is 100% safe",
                color: "text-blue-600",
              },
              {
                icon: Zap,
                title: "Fast Response",
                desc: "Callback within 12–24 hrs",
                color: "text-amber-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl bg-white border border-slate-100"
              >
                <item.icon size={16} className={item.color} />
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-lg"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  Message Sent
                </h2>
                <p className="text-sm text-slate-500 max-w-xs mx-auto">
                  Our advisor will call you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4"
              >
                {/* 2 columns on mobile */}
                <div className="grid grid-cols-2 gap-3">
                  <Input label="Full Name" name="name" icon={User} placeholder="Enter name" />
                  <Input label="Mobile Number" name="phone" type="tel" icon={Phone} placeholder="+91 ..." />
                </div>

                <Input label="Your Area / Address" name="address" icon={Home} placeholder="Current city"/>

                <Select
                  label="Loan Requirement"
                  name="loanType"
                  icon={Banknote}
                  options={["Personal Loan", "Education Loan", "Business Loan"]}
                />

                <Textarea
                  label="Message"
                  name="message"
                  icon={MessageSquare}
                  placeholder="Briefly describe your need..."
                />

                <button
                  disabled={loading}
                  className="mt-1 w-full py-3.5 bg-slate-900 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Enquiry"}
                </button>

                <p className="text-center text-[10px] text-slate-500 flex items-center justify-center gap-1">
                  <Lock size={10} /> Secure SSL Encrypted Form
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* INPUTS */

function Input({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-bold uppercase text-slate-600 ml-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          {...props}
          required
          className="w-full text-sm rounded-xl border border-slate-100 bg-slate-50 py-3 pl-10 pr-3 focus:bg-white focus:border-blue-200 outline-none"
        />
      </div>
    </div>
  );
}

function Select({ label, icon: Icon, options, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-bold uppercase text-slate-600 ml-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <select
          {...props}
          required
          className="w-full text-sm rounded-xl border border-slate-100 bg-slate-50 py-3 pl-10 pr-3 focus:bg-white focus:border-blue-200 outline-none"
        >
          <option value="">Choose option</option>
          {options.map((o: string) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Textarea({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-bold uppercase text-slate-600 ml-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
        <textarea
          {...props}
          rows={2}
          className="w-full text-sm rounded-xl border border-slate-100 bg-slate-50 py-3 pl-10 pr-3 focus:bg-white focus:border-blue-200 outline-none resize-none"
        />
      </div>
    </div>
  );
}
