"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Prevent double submit (React Strict Mode)
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
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data.success !== true) {
        throw new Error(data.error || "Submission failed");
      }

      // SUCCESS
      setSubmitted(true);
      alert("Enquiry submitted successfully");
      e.currentTarget.reset();
    } catch {
      // ERROR
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Loan Enquiry
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Fill in your details and we’ll contact you shortly with the best loan
          option for your needs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                Enquiry Submitted Successfully
              </h2>
              <p className="text-gray-600">
                Thank you for contacting us. Our team will reach out to you
                shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Type
                </label>
                <select
                  name="loanType"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                >
                  <option value="">Select loan type</option>
                  <option>Personal Loan</option>
                  <option>Education Loan</option>
                  <option>Business Loan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white py-4 rounded-xl font-medium disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
