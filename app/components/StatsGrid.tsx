"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatsGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [stats, setStats] = useState({
    experience: 0,
    clients: 0,
    loans: 0,
    transparency: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setStats((prev) => ({
        experience: Math.min(prev.experience + 1, 10),
        clients: Math.min(prev.clients + 20, 500),
        loans: Math.min(prev.loans + 1, 5),
        transparency: Math.min(prev.transparency + 5, 100),
      }));
    }, 40);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-6">
      {[
        { label: "Years of Experience", value: `${stats.experience}+` },
        { label: "Happy Clients", value: `${stats.clients}+` },
        { label: "Loan Categories", value: `${stats.loans}+` },
        { label: "Process Transparency", value: `${stats.transparency}%` },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="
            rounded-2xl p-6 text-center
            bg-white/60 backdrop-blur-xl
            border border-white/40
            shadow-sm hover:shadow-lg
          "
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {item.value}
          </div>
          <div className="text-gray-600 text-sm">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
