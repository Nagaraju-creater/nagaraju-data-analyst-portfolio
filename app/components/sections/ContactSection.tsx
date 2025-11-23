"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 sm:py-20 bg-slate-950"
    >
      <div className="page-container">
        {/* Section header */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-100 shadow-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Let&apos;s work together
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Contact
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              I&apos;m actively looking for{" "}
              <span className="font-semibold text-cyan-200">Data Analyst</span>{" "}
              opportunities. Whether it&apos;s a full-time role, internship, or
              freelance project, I&apos;d love to hear from you.
            </p>
          </div>

          {/* Small info pill */}
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-xs text-slate-300 shadow-md shadow-slate-900/60">
            <p className="font-medium text-slate-100">
              Based in Hosur, India 🇮🇳
            </p>
            <p className="mt-1 text-slate-400">
              Open to remote and on-site opportunities.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,2.2fr)]">
          {/* Left: contact methods & reasons */}
          <div className="space-y-4">
            {/* Why reach out */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 shadow-md shadow-slate-900/70">
              <h3 className="text-sm font-semibold text-slate-100">
                How I can help
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    Building or maintaining{" "}
                    <span className="font-medium text-slate-100">
                      dashboards and reports
                    </span>{" "}
                    using Excel, Power BI, or Tableau.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    Writing and optimizing{" "}
                    <span className="font-medium text-slate-100">SQL</span>{" "}
                    queries to extract, clean, and analyze data.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    Turning raw data into{" "}
                    <span className="font-medium text-slate-100">
                      clear, actionable insights
                    </span>{" "}
                    for stakeholders.
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Email card */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-md shadow-slate-900/70 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/80 hover:shadow-cyan-500/20">
                <div className="pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="h-full w-full bg-gradient-br from-cyan-500/40 via-sky-500/20 to-transparent blur-3xl" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Email
                </p>
                <p className="mt-2 text-sm font-medium text-slate-50 break-all">
                  <Link
                    href="mailto:nagaraju.softtest@gmail.com"
                    className="hover:text-cyan-200"
                  >
                    nagaraju.softtest@gmail.com
                  </Link>
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Best way to reach me for opportunities.
                </p>
              </div>

              {/* Phone card */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-md shadow-slate-900/70 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/80 hover:shadow-cyan-500/20">
                <div className="pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="h-full w-full bg-gradient-br from-emerald-400/40 via-cyan-500/10 to-transparent blur-3xl" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Phone / WhatsApp
                </p>
                <p className="mt-2 text-sm font-medium text-slate-50">
                  +91 93453 94806
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Available for quick discussions and clarifications.
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 text-xs sm:text-sm text-slate-300 shadow-md shadow-slate-900/70">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-medium text-slate-100">
                  Currently open to: Data Analyst, Business Analyst (entry level),
                  Reporting Analyst roles.
                </p>
              </div>
              <p className="mt-2 text-slate-400">
                I&apos;m happy to walk through my projects, dashboards, and the
                way I approach data problems.
              </p>
            </div>
          </div>

          {/* Right: fancy contact "form" card */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-br from-cyan-500/25 via-slate-900 to-sky-500/20 blur-3xl opacity-70" />
            <div className="relative rounded-3xl border border-slate-700/80 bg-slate-950/90 p-5 sm:p-6 shadow-xl shadow-slate-900/80">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Let&apos;s talk
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-50">
                    Share your requirement
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Send me a quick message with your project or role, and I&apos;ll
                    get back to you.
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 text-[11px] text-slate-400">
                  <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-1">
                    Response: usually within 24 hrs
                  </span>
                </div>
              </div>

              {/* Faux form (you can wire this later if you want) */}
              <form
                className="mt-5 space-y-3 text-xs sm:text-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-1.5">
                  <label className="block text-slate-300" htmlFor="name">
                    Your name
                  </label>
                  <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-slate-100 shadow-inner shadow-slate-900/80 focus-within:border-cyan-400/80 focus-within:shadow-cyan-500/20 transition">
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Hiring Manager, HR, Team Lead"
                      className="w-full bg-transparent text-xs sm:text-sm outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-300" htmlFor="email">
                    Work email
                  </label>
                  <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-slate-100 shadow-inner shadow-slate-900/80 focus-within:border-cyan-400/80 focus-within:shadow-cyan-500/20 transition">
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-transparent text-xs sm:text-sm outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-300" htmlFor="message">
                    What would you like to discuss?
                  </label>
                  <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-slate-100 shadow-inner shadow-slate-900/80 focus-within:border-cyan-400/80 focus-within:shadow-cyan-500/20 transition">
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Briefly describe the role, project, or dashboard you have in mind..."
                      className="w-full bg-transparent text-xs sm:text-sm outline-none placeholder:text-slate-500 resize-none"
                    />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition-transform hover:-translate-y-0.5 hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Send via email draft
                  </button>
                  <Link
                    href="mailto:nagaraju.softtest@gmail.com"
                    className="text-[11px] sm:text-xs font-medium text-cyan-200 hover:text-cyan-300"
                  >
                    or open your email app directly →
                  </Link>
                </div>
              </form>

              {/* Small trust footer */}
              <div className="mt-5 border-t border-slate-800/80 pt-3 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
                <p>
                  I respect your time and inbox — no spam, just a genuine reply.
                </p>
                <p>
                  Prefer LinkedIn? You can easily add a link here later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
