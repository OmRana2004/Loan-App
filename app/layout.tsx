import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

/* Font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Metadata */
export const metadata = {
  title: "MPS",
  description: "Personal, Education and Business Loans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="
          font-sans
          bg-slate-50
          text-slate-800
          antialiased
          overflow-x-hidden
        "
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="min-h-screen pt-16 sm:pt-18">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
