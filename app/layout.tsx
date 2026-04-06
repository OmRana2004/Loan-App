import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import CustomChat from "./components/CustomChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
      
      {/* ✅ ADD THIS HEAD */}
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
          rel="stylesheet"
        />
      </head>

      <body
        className="
          font-sans
          bg-slate-50
          text-slate-800
          antialiased
          overflow-x-hidden
        "
      >
        <Navbar />

        <main className="">
          {children}
        </main>

        {/* ✅ Chat Component */}
        <CustomChat />

        <Footer />
      </body>
    </html>
  );
}