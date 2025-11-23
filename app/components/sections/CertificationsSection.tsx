"use client";

import Link from "next/link";

type Certificate = {
  title: string;
  provider: string;
  date: string;
  code: string;
  level: "data" | "bi" | "design";
  href: string;
};

const certificates: Certificate[] = [
  {
    title: "Free Data Analyst Course",
    provider: "Simplilearn",
    date: "29 Aug 2025",
    code: "8877567",
    level: "data",
    href: "/certificates/data-analyst-course.pdf",
  },
  {
    title: "Business Analytics with Excel",
    provider: "Simplilearn",
    date: "03 Sep 2025",
    code: "8906391",
    level: "data",
    href: "/certificates/business-analytics-excel.pdf",
  },
  {
    title: "Website UI/UX Designing using ChatGPT",
    provider: "Simplilearn",
    date: "03 Sep 2025",
    code: "8906855",
    level: "design",
    href: "/certificates/ui-ux-chatgpt.pdf",
  },
  {
    title: "Power BI for Beginners",
    provider: "Simplilearn",
    date: "05 Sep 2025",
    code: "8917520",
    level: "bi",
    href: "/certificates/power-bi-beginners.pdf",
  },
];

// Different gradient per card so each looks unique
function certificateBackgroundByIndex(index: number) {
  switch (index) {
    case 0:
      return "from-cyan-500/35 via-sky-500/20 to-slate-950/0";
    case 1:
      return "from-emerald-500/35 via-teal-500/20 to-slate-950/0";
    case 2:
      return "from-fuchsia-500/35 via-violet-500/20 to-slate-950/0";
    case 3:
      return "from-amber-500/35 via-orange-500/20 to-slate-950/0";
    default:
      return "from-cyan-500/35 via-sky-500/20 to-slate-950/0";
  }
}

function certificateBadgeLabel(level: Certificate["level"]) {
  if (level === "bi") return "BI & Dashboards";
  if (level === "design") return "Design & UX";
  return "Data Analytics";
}

function certificateBadgeShort(level: Certificate["level"]) {
  if (level === "bi") return "BI";
  if (level === "design") return "UX";
  return "DA";
}

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 py-14 sm:py-16"
    >
      <div className="page-container">
        {/* Heading style matches Projects / Skills */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-r from-cyan-500/80 via-cyan-400/50 to-transparent" />
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Certifications
          </h2>
          <div className="h-px flex-1 bg-gradient-l from-cyan-500/80 via-cyan-400/50 to-transparent" />
        </div>

        {/* No paragraph here – straight to cards, as you wanted */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <article
              key={cert.code}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-lg shadow-slate-900/60 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/80 hover:shadow-cyan-500/30"
            >
              {/* Background gradient – different per card */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-br opacity-80 ${certificateBackgroundByIndex(
                  index
                )}`}
              />
              {/* Subtle pattern overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.7)_1px,transparent_0)] bg-size-[18px_18px]" />

              {/* Content */}
              <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="min-h-[54px]">
                    <span className="inline-flex items-center rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
                      {cert.provider}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold leading-snug text-slate-50">
                      {cert.title}
                    </h3>
                  </div>
                  {/* Logo-style badge */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950/80 shadow-md shadow-slate-900/80 ring-1 ring-slate-700/80 transition group-hover:ring-cyan-300/80">
                    <span className="text-center text-[11px] font-bold leading-tight text-cyan-100">
                      {certificateBadgeShort(cert.level)}
                    </span>
                  </div>
                </div>

                <dl className="mb-4 space-y-1 text-[11px] text-slate-200">
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-slate-300">Completed on</dt>
                    <dd className="font-mono tabular-nums text-[11px] font-medium text-slate-50">
                      {cert.date}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-slate-300">Certificate code</dt>
                    <dd className="font-mono tabular-nums text-[10px] text-cyan-100">
                      {cert.code}
                    </dd>
                  </div>
                </dl>

                {/* Bottom row: tag + button */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="inline-flex items-center rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-medium text-slate-200">
                    {certificateBadgeLabel(cert.level)}
                  </span>

                  <Link
                    href={cert.href}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-md shadow-cyan-500/40 transition hover:bg-cyan-400 hover:shadow-cyan-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    View Certificate
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
