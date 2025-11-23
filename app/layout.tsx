import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nagaraju K | Data Analyst Portfolio",
  description:
    "Portfolio of Nagaraju K, an aspiring Data Analyst skilled in SQL, Excel, Power BI, and Tableau.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-50 antialiased selection:bg-cyan-500 selection:text-slate-950`}
      >
        <Navbar />
        {/* padding-top to avoid content hidden behind fixed navbar */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
