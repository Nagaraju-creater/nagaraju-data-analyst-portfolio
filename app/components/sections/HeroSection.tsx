import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      // scroll-mt-24 makes the section stop 96px below the top when navigated via #hero
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      {/* Background glow & grid */}
      <div className="pointer-events-none absolute inset-0">
        {/* gradient blobs */}
        <div className="absolute -top-28 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0)_0,rgba(15,23,42,0.9)_55%)]" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      {/* Compact vertical padding */}
      <div className="page-container relative z-10 py-6 sm:py-7 lg:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Text content */}
          <div className="max-w-xl space-y-4">
            {/* Availability + small context pill row */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-cyan-100 shadow shadow-cyan-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Data Analyst roles
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                Fresh graduate · B.E. 8.37 CGPA
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                Data Analyst · SQL · Excel · Power BI · Tableau
              </p>

              <h1 className="text-[1.7rem] font-semibold leading-tight text-slate-50 sm:text-[1.9rem] lg:text-[2.2rem]">
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 rounded-xl bg-gradient-r from-cyan-500/40 via-sky-500/40 to-cyan-400/40 blur-md" />
                  <span className="relative rounded-xl bg-slate-950/80 px-2 text-cyan-200 shadow-lg shadow-cyan-500/30">
                    Nagaraju&nbsp;K
                  </span>
                </span>
                .
                <br className="hidden sm:block" />
                <span className="mt-1 block bg-gradient-r from-slate-100 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
                  I turn raw data into clear decisions.
                </span>
              </h1>
            </div>

            {/* Subtitle (compact) */}
            <p className="text-[13px] leading-relaxed text-slate-300 sm:text-sm">
              I&apos;m an aspiring Data Analyst skilled in{" "}
              <span className="font-medium text-cyan-200">
                SQL, Excel, Power BI, and Tableau
              </span>
              . I enjoy taking messy datasets, cleaning and exploring them, and
              building dashboards that help teams see what&apos;s really
              happening in the business.
            </p>

            {/* Role intent */}
            <p className="text-[11px] sm:text-xs text-slate-400">
              I&apos;m looking for an entry-level{" "}
              <span className="font-medium text-slate-200">Data Analyst</span>{" "}
              role where I can work on real data, collaborate with a team, and
              keep improving every day.
            </p>

            {/* Data pipeline strip */}
            <div className="mt-1 flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-2 text-[10px] text-slate-300">
              {["Collect", "Clean", "Analyze", "Visualize", "Share"].map(
                (step, idx, arr) => (
                  <div key={step} className="flex items-center gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-slate-900/90 px-2 py-1">
                      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {step}
                    </span>
                    {idx !== arr.length - 1 && (
                      <span className="hidden text-slate-500 sm:inline">
                        →
                      </span>
                    )}
                  </div>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition-transform hover:-translate-y-0.5 hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View My Projects
              </Link>

              <Link
                href="/Nagaraju_K_Data_Analyst_Resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 shadow-sm transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Download Resume
              </Link>
            </div>

            {/* Tech tags row */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-slate-400">
              <span className="font-medium text-slate-300">Core tools:</span>
              {["SQL", "Excel", "Power BI", "Tableau", "Data Visualization"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-cyan-200"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Profile + "live" dashboard */}
          <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row sm:items-stretch lg:flex-row lg:justify-end">
            {/* Profile card */}
            <div className="relative w-full max-w-xs rounded-3xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-xl shadow-cyan-500/25 backdrop-blur">
              {/* halo */}
              <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-br from-cyan-500/40 via-sky-500/20 to-transparent opacity-70 blur-xl" />

              <div className="flex items-center gap-3 sm:flex-col sm:items-center lg:flex-col lg:items-center">
                {/* circular profile */}
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-cyan-400/70 bg-slate-950 shadow-lg shadow-cyan-500/50">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile photo of Nagaraju K"
                    width={140}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                  {/* small online dot */}
                  <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border border-slate-900 bg-emerald-400" />
                </div>

                <div className="space-y-0.5 text-center">
                  <p className="text-sm font-semibold text-slate-50">
                    Nagaraju K
                  </p>
                  <p className="text-xs font-medium text-cyan-200">
                    Aspiring Data Analyst
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Hosur, India · Open to relocation
                  </p>
                </div>
              </div>

              {/* mini stats */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-300">
                <div className="rounded-2xl bg-slate-950/70 px-2 py-2">
                  <p className="text-xs font-semibold text-cyan-200">5+</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Analytics Projects
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 px-2 py-2">
                  <p className="text-xs font-semibold text-cyan-200">4</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Data Certificates
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 px-2 py-2">
                  <p className="text-xs font-semibold text-cyan-200">8.37</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    CGPA (B.E.)
                  </p>
                </div>
              </div>
            </div>

            {/* Live-style dashboard card */}
            <div className="w-full max-w-sm rounded-3xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-xl shadow-slate-900/60">
              <div className="mb-2 flex items-center justify-between text-[11px]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Portfolio Snapshot
                  </p>
                  <p className="text-xs font-medium text-slate-100">
                    Analytics projects overview
                  </p>
                </div>
                <span className="rounded-full bg-slate-950/80 px-2 py-1 text-[10px] text-emerald-300">
                  Demo Dashboard
                </span>
              </div>

              {/* KPIs */}
              <div className="mb-2 grid grid-cols-3 gap-2 text-[10px]">
                <div className="rounded-xl bg-slate-950/80 p-2">
                  <p className="text-slate-400">Projects</p>
                  <p className="mt-1 text-xs font-semibold text-cyan-300">
                    5
                  </p>
                  <p className="text-[9px] text-emerald-400">+3 recently</p>
                </div>
                <div className="rounded-xl bg-slate-950/80 p-2">
                  <p className="text-slate-400">Tools</p>
                  <p className="mt-1 text-xs font-semibold text-slate-100">
                    4 / 4
                  </p>
                  <p className="text-[9px] text-slate-400">
                    SQL · Excel · BI · Viz
                  </p>
                </div>
                <div className="rounded-xl bg-slate-950/80 p-2">
                  <p className="text-slate-400">Domains</p>
                  <p className="mt-1 text-xs font-semibold text-slate-100">
                    3
                  </p>
                  <p className="text-[9px] text-slate-400">
                    Sales · HR · Retail
                  </p>
                </div>
              </div>

              {/* Trend + mix */}
              <div className="grid grid-cols-[1.7fr,1.3fr] gap-2">
                <div className="rounded-xl bg-gradient-t from-slate-950 via-slate-900 to-slate-900/40 p-3">
                  <div className="mb-2 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Skill usage</span>
                    <span>Last 5 projects</span>
                  </div>
                  <div className="flex h-14 items-end gap-1.5">
                    <div className="h-[55%] flex-1 rounded-t bg-cyan-500/80" />
                    <div className="h-[70%] flex-1 rounded-t bg-sky-400/80" />
                    <div className="h-[85%] flex-1 rounded-t bg-emerald-400/80" />
                    <div className="h-[60%] flex-1 rounded-t bg-cyan-400/80" />
                    <div className="h-[75%] flex-1 rounded-t bg-indigo-400/80" />
                  </div>
                </div>

                <div className="rounded-xl bg-slate-950/90 p-3 text-[10px]">
                  <p className="mb-2 text-slate-400">Project mix</p>
                  <div className="relative mx-auto h-14 w-14">
                    <div className="absolute inset-0 rounded-full border-[5px] border-cyan-400/80" />
                    <div className="absolute inset-0 rounded-full border-[5px] border-emerald-400/80 border-t-transparent border-l-transparent" />
                    <div className="absolute inset-3 rounded-full bg-slate-950" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[8px]">
                      <span className="text-slate-200">Dashboards</span>
                      <span className="font-semibold text-cyan-300">
                        60%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom filters row */}
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-300">
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-slate-950/90 px-2 py-1 text-cyan-200">
                    Filter: Tool
                  </span>
                  <span className="rounded-full bg-slate-900/90 px-2 py-1">
                    Domain
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-300">
                  Built with SQL · Excel · Power BI · Tableau
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
