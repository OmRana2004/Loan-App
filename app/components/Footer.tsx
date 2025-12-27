export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        © {new Date().getFullYear()} LoanBank. All rights reserved.
      </div>
    </footer>
  );
}
