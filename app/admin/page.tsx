"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  loanType: string;
  message?: string;
  createdAt: string;
};

/* -------- Animations -------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const row = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function fetchEnquiries() {
    try {
      const res = await axios.get("/api/enquiry");
      setEnquiries(res.data);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this enquiry?")) return;

    setDeletingId(id);
    await axios.delete(`/api/enquiry?id=${id}`);

    setEnquiries((prev) => prev.filter((e) => e.id !== id));
    setDeletingId(null);
  }

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-8"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold mb-6"
      >
        Enquiry List
      </motion.h1>

      {loading ? (
        <p className="text-gray-500">Loading enquiries...</p>
      ) : enquiries.length === 0 ? (
        <p className="text-gray-500">No enquiries found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Loan Type</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <motion.tbody
              variants={container}
              initial="hidden"
              animate="show"
            >
              <AnimatePresence>
                {enquiries.map((e) => (
                  <motion.tr
                    key={e.id}
                    variants={row}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium">{e.name}</td>
                    <td className="px-4 py-3">{e.phone}</td>
                    <td className="px-4 py-3">{e.loanType}</td>
                    <td className="px-4 py-3">{e.message || "-"}</td>
                    <td className="px-4 py-3 text-gray-500">
                      {new Date(e.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <motion.button
                        whileTap={{ scale: 0.94 }}
                        whileHover={{ scale: 1.05 }}
                        disabled={deletingId === e.id}
                        onClick={() => handleDelete(e.id)}
                        className="
                          rounded-md
                          bg-red-50 px-3 py-1.5
                          text-red-600
                          hover:bg-red-100
                          transition
                          disabled:opacity-50
                        "
                      >
                        {deletingId === e.id ? "Deleting..." : "Delete"}
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </motion.tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
