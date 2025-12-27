import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Static data (Phase-1) */
const loans = {
  "personal-loan": {
    title: "Personal Loan",
    interest: "12% – 18%",
    tenure: "1 – 5 Years",
    eligibility: "Salaried or self-employed individuals with stable income.",
    description:
      "Our personal loans help you manage emergencies, travel expenses and everyday needs with flexible repayment options.",
  },
  "education-loan": {
    title: "Education Loan",
    interest: "8% – 12%",
    tenure: "3 – 7 Years",
    eligibility: "Students with confirmed admission in recognized institutions.",
    description:
      "Education loans to support your academic journey with affordable interest rates and easy repayment terms.",
  },
  "business-loan": {
    title: "Business Loan",
    interest: "10% – 16%",
    tenure: "2 – 6 Years",
    eligibility: "Business owners with minimum 1 year of operational history.",
    description:
      "Business loans designed to help expand operations and manage cash flow.",
  },
};

type LoanSlug = keyof typeof loans;

export default async function LoanDetailPage({
  params,
}: {
  params: Promise<{ slug: LoanSlug }>;
}) {
  const { slug } = await params;

  const loan = loans[slug];
  if (!loan) return notFound();

  return (
    <section className="max-w-5xl mx-auto px-4 py-28">
      <h1 className="text-4xl font-semibold mb-4">{loan.title}</h1>

      <p className="text-gray-600 max-w-3xl mb-12">
        {loan.description}
      </p>

      <div className="grid md:grid-cols-3 gap-10 bg-white p-10 rounded-3xl border border-gray-100 mb-16">
        <Detail label="Interest Rate" value={loan.interest} />
        <Detail label="Tenure" value={loan.tenure} />
        <Detail label="Eligibility" value={loan.eligibility} />
      </div>

      <div className="flex gap-6">
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition inline-flex items-center gap-2"
        >
          Contact for Enquiry <ArrowRight size={16} />
        </Link>

        <Link
          href="/loans"
          className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition"
        >
          Back to Loans
        </Link>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-lg font-medium">{value}</p>
    </div>
  );
}
