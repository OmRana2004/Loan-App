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
      // Add error handling here
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen selection:bg-blue-100">
      <section className="relative max-w-7xl mx-auto px-5 pt-24 pb-16 md:pt-32">
        
        {/* Soothing Background Accents */}
        <div className="absolute top-0 right-0 -z-10 w-75 h-75 bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-0 -z-10 w-62.5 h-62.5 bg-indigo-100/40 rounded-full blur-[80px]" />

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                Trusted Partners
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
                Quick Enquiry <br />
                <span className="text-slate-400 font-medium">For Your Loan.</span>
              </h1>
              <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
                Fill the details below. Our financial advisor will contact you to discuss personalized interest rates and plans.
              </p>
            </motion.div>

            {/* Compact Trust Badges */}
            <div className="grid grid-cols-1 gap-3 pr-8">
              {[
                { icon: ShieldCheck, title: "Data Encrypted", desc: "Your info is 100% safe", color: "text-blue-500" },
                { icon: Zap, title: "Fast Response", desc: "Callback within 12-24 hours", color: "text-amber-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/50 border border-slate-100">
                  <item.icon size={18} className={`${item.color} mt-0.5`} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-gray-50 rounded-[2rem] p-6 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 10, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h2>
                  <p className="text-slate-500 text-sm max-w-60 mx-auto">
                    We've received your request. Expect a call from our expert soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Full Name" name="name" icon={User} placeholder="Enter name" />
                    <Input label="Mobile Number" name="phone" type="tel" icon={Phone} placeholder="+91 ..." />
                  </div>

                  <Input label="Your Area / Address" name="address" icon={Home} placeholder="Current city" />

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
                    className="w-full mt-2 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      "Submit Enquiry"
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-600 font-medium flex items-center justify-center gap-1">
                    <Lock size={10} /> Secure SSL Encrypted Form
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- SOOTHING INPUT COMPONENTS ---------------- */

function Input({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider ml-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
        <input
          {...props}
          required
          className="w-full text-sm rounded-xl border border-slate-100 bg-slate-50/50 py-3.5 pl-11 pr-4 focus:bg-white focus:border-blue-200 outline-none transition-all placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}

function Select({ label, icon: Icon, options, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider ml-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
        <select
          {...props}
          required
          className="w-full text-sm appearance-none rounded-xl border border-slate-100 bg-slate-50/50 py-3.5 pl-11 pr-4 focus:bg-white focus:border-blue-200 outline-none transition-all text-slate-900"
        >
          <option value="">Choose loan category</option>
          {options.map((o: string) => <option key={o}>{o}</option>)}
        </select>
      </div>
    </div>
  );
}

function Textarea({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider ml-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-4 h-4 w-4 text-slate-300 pointer-events-none" />
        <textarea
          {...props}
          rows={2}
          className="w-full text-sm rounded-xl border border-slate-100 bg-slate-50/50 py-3.5 pl-11 pr-4 focus:bg-white focus:border-blue-200 outline-none transition-all placeholder:text-slate-300 resize-none"
        />
      </div>
    </div>
  );
}