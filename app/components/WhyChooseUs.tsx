"use client";

import { motion } from "framer-motion";
import { Star, ChartColumn } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Why thousands <br />
              <span className="text-blue-400">choose us daily.</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Transparent Fees",
                  desc: "Zero hidden charges. What you see is what you pay.",
                },
                {
                  title: "No Prepayment Penalty",
                  desc: "Pay back early without any extra costs.",
                },
                {
                  title: "Digital First",
                  desc: "100% online process from application to disbursal.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1">
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="
              relative z-10
              bg-slate-800 border border-slate-700
              rounded-3xl sm:rounded-[3rem]
              p-6 sm:p-10
            ">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
                    Total Trust
                  </p>
                  <h3 className="text-3xl sm:text-5xl font-black">
                    ₹1,200Cr+
                  </h3>
                </div>
                <ChartColumn className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
              </div>

              <div className="space-y-4">
                <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[85%]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  85% Approval Rate for Qualified Leads
                </p>
              </div>
            </div>

            {/* glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-blue-600/20 rounded-full blur-[90px]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
