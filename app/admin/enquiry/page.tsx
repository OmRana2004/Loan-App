"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Status = "NEW" | "CONTACTED";

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  loanType: string;
  address: string;
  message?: string;
  status: Status;
  createdAt: string;
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium
        ${
          status === "NEW"
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}
    >
      {status}
    </span>
  );
}

export default function AdminEnquiriesPage() {
  const [data, setData] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function loadData() {
    const res = await axios.get("/api/enquiry");
    setData(res.data);
    setLoading(false);
  }

  async function updateStatus(id: string, status: Status) {
    const next = status === "NEW" ? "CONTACTED" : "NEW";
    setBusyId(id);

    await axios.patch("/api/enquiry", { id, status: next });
    setData((p) =>
      p.map((e) => (e.id === id ? { ...e, status: next } : e))
    );

    setBusyId(null);
  }

  async function remove(id: string) {
    if (!confirm("Delete enquiry?")) return;

    setBusyId(id);
    await axios.delete(`/api/enquiry?id=${id}`);
    setData((p) => p.filter((e) => e.id !== id));
    setBusyId(null);
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <p className="p-6 text-gray-500">Loading…</p>;
  if (!data.length)
    return <p className="p-6 text-gray-500">No enquiries</p>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Enquiries</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border rounded-lg bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Phone</th>
              <th className="px-3 py-2 text-left">Address</th>
              <th className="px-3 py-2 text-left">Loan</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Date</th>
              <th className="px-3 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="px-3 py-2">{e.name}</td>
                <td className="px-3 py-2">{e.phone}</td>
                <td className="px-3 py-2">{e.address}</td>
                <td className="px-3 py-2">{e.loanType}</td>
                <td className="px-3 py-2">
                  <StatusBadge status={e.status} />
                </td>
                <td className="px-3 py-2 text-gray-500">
                  {new Date(e.createdAt).toLocaleDateString()}
                </td>
                <td className="px-3 py-2 text-center space-x-3">
                  <button
                    onClick={() => updateStatus(e.id, e.status)}
                    disabled={busyId === e.id}
                    className="text-blue-600 hover:underline disabled:opacity-50"
                  >
                    Toggle
                  </button>
                  <button
                    onClick={() => remove(e.id)}
                    disabled={busyId === e.id}
                    className="text-red-600 hover:underline disabled:opacity-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {data.map((e) => (
          <div
            key={e.id}
            className="border rounded-lg bg-white p-3 text-sm"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{e.name}</p>
              <StatusBadge status={e.status} />
            </div>

            <p className="text-gray-600">{e.phone}</p>
            <p className="text-gray-600">{e.address}</p>
            <p className="text-gray-600">{e.loanType}</p>

            {e.message && (
              <p className="text-gray-600 mt-1">{e.message}</p>
            )}

            <p className="text-xs text-gray-500 mt-1">
              {new Date(e.createdAt).toLocaleDateString()}
            </p>

            <div className="mt-2 flex gap-3">
              <button
                onClick={() => updateStatus(e.id, e.status)}
                disabled={busyId === e.id}
                className="flex-1 rounded bg-blue-100 py-1 text-blue-700 disabled:opacity-50"
              >
                Toggle
              </button>
              <button
                onClick={() => remove(e.id)}
                disabled={busyId === e.id}
                className="flex-1 rounded bg-red-100 py-1 text-red-700 disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
