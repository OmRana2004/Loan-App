"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-28">
      {/* Header */}
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

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
      >
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-medium text-green-600 mb-3">
              Enquiry Submitted ✅
            </h2>
            <p className="text-gray-600">
              Thank you for contacting us. Our team will reach out to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                required
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Loan Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan Type
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select loan type</option>
                <option>Personal Loan</option>
                <option>Education Loan</option>
                <option>Business Loan</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Any additional details"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Submit Enquiry
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
