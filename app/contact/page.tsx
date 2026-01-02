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
      message: formData.get("message"),
    };

    try {
      const res = await axios.post("/api/enquiry", payload);
      if (!res.data?.success) throw new Error("Failed");

      setSubmitted(true);
      e.currentTarget.reset();
    } catch {
      // you can add toast later
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden py-28 px-4">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-indigo-50" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Loan Enquiry
        </h1>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto">
          Share your details and our loan expert will contact you shortly with
          the best available option.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          max-w-3xl mx-auto
          rounded-3xl
          border border-slate-200/60
          bg-white/70 backdrop-blur-xl
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          p-10
        "
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <CheckCircle2 className="mx-auto h-14 w-14 text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Enquiry Submitted
              </h2>
              <p className="text-slate-600">
                Thank you for reaching out. Our team will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid gap-6"
            >
              <Input
                label="Full Name"
                name="name"
                icon={User}
                placeholder="Enter your full name"
              />

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                icon={Phone}
                placeholder="Enter your mobile number"
              />

              <Select
                label="Loan Type"
                name="loanType"
                icon={Banknote}
                options={[
                  "Personal Loan",
                  "Education Loan",
                  "Business Loan",
                ]}
              />

              <Textarea
                label="Message (Optional)"
                name="message"
                icon={MessageSquare}
                placeholder="Any specific requirement..."
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="
                  mt-4
                  flex items-center justify-center gap-2
                  rounded-xl
                  bg-linear-to-r from-blue-600 to-indigo-600
                  py-4
                  font-semibold text-white
                  shadow-lg
                  hover:shadow-xl
                  transition
                  disabled:opacity-60
                "
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

/* ---------------- Reusable Inputs ---------------- */

function Input({ label, icon: Icon, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative mt-1">
        <Icon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          {...props}
          required
          className="
            w-full rounded-xl border border-slate-300
            py-3 pl-11 pr-4
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500
            outline-none
          "
        />
      </div>
    </div>
  );
}

function Select({ label, icon: Icon, options, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative mt-1">
        <Icon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <select
          {...props}
          required
          className="
            w-full rounded-xl border border-slate-300
            py-3 pl-11 pr-4
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500
            outline-none
          "
        >
          <option value="">Select loan type</option>
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
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative mt-1">
        <Icon className="absolute left-3 top-4 h-5 w-5 text-slate-400" />
        <textarea
          {...props}
          rows={4}
          className="
            w-full rounded-xl border border-slate-300
            py-3 pl-11 pr-4
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500
            outline-none
          "
        />
      </div>
    </div>
  );
}
