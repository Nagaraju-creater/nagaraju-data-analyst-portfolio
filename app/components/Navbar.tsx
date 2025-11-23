"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        {/* Left logo / name */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/60 shadow-md shadow-cyan-500/40">
            <span className="text-sm font-bold tracking-tight text-cyan-300">
              NK
            </span>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-slate-400">
              Data Analyst
            </p>
            <p className="text-xs text-slate-400">Nagaraju K · Hosur, India</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-cyan-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 p-2 text-slate-200 shadow-sm"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 rounded bg-slate-100" />
            <span className="block h-0.5 w-4 rounded bg-slate-100" />
            <span className="block h-0.5 w-3.5 rounded bg-slate-100" />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden border-t border-slate-800/80 bg-slate-950/95">
          <div className="page-container py-3 text-xs text-slate-200">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block rounded-md px-2 py-1 hover:bg-slate-800/80 hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
