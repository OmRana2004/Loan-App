"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-32 text-center relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Trusted Loans for{" "}
            <span className="text-blue-600">Every Stage of Life</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We provide transparent, reliable and personalized loan solutions
            designed to support your personal, educational and business goals.
          </motion.p>
        </div>

        {/* Animated background blobs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-24 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30"
        />
      </section>

      {/* ABOUT US SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">
              About <span className="text-blue-600">Us</span>
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed">
              We are a trusted private loan service focused on providing honest,
              clear and flexible financial support. Our goal is to simplify
              borrowing with easy-to-understand loan options.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you need funds for education, personal needs or business
              growth, we help you choose a loan plan that fits your repayment
              capacity.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Years of Trust", value: "10+" },
              { label: "Happy Clients", value: "500+" },
              { label: "Loan Types", value: "5+" },
              { label: "Personal Support", value: "100%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center"
        >
          {[
            {
              title: "Transparent Process",
              desc: "Clear interest rates and no hidden charges.",
            },
            {
              title: "Flexible Repayment",
              desc: "Tenures aligned with your income comfort.",
            },
            {
              title: "Direct Communication",
              desc: "Personal guidance at every step.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FLOATING EXPLORE BUTTON */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href="/loans"
          className="bg-blue-600 text-white px-6 py-4 rounded-full shadow-xl hover:bg-blue-700 transition flex items-center gap-2"
        >
          Explore Loans
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </>
  );
}
