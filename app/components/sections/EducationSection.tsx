"use client";

type EducationItem = {
  level: string;
  institution: string;
  location?: string;
  yearRange: string;
  scoreLabel: string;
  scoreValue: string;
  highlight?: boolean;
};

const educationData: EducationItem[] = [
  {
    level: "Bachelor of Engineering – Aeronautical Engineering",
    institution: "Anna University, Chennai",
    location: "Tamil Nadu, India",
    yearRange: "2020 – 2024",
    scoreLabel: "CGPA",
    scoreValue: "8.37 / 10",
    highlight: true,
  },
  {
    level: "Higher Secondary (HSC)",
    institution: "Government Higher Secondary School, Berigai",
    location: "Tamil Nadu, India",
    yearRange: "2018 – 2020",
    scoreLabel: "Percentage",
    scoreValue: "69%",
  },
  {
    level: "SSLC",
    institution: "Government High School, Nerigam",
    location: "Tamil Nadu, India",
    yearRange: "2016 – 2017",
    scoreLabel: "Percentage",
    scoreValue: "94.5%",
  },
];

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-r from-cyan-500/80 via-cyan-400/40 to-transparent" />
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {label}
      </h2>
      <div className="h-px flex-1 bg-gradient-l from-cyan-500/80 via-cyan-400/40 to-transparent" />
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-14 sm:py-16">
      <div className="page-container">
        <SectionTitle label="Education" />

        <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.5fr)]">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="pointer-events-none absolute left-2.5 top-2 h-[calc(100%-1rem)] w-px bg-linear-to-b from-cyan-400/70 via-slate-700/70 to-transparent sm:left-4" />

            <ul className="space-y-5">
              {educationData.map((item) => {
                const isHighlight = item.highlight;

                return (
                  <li key={item.level} className="relative flex gap-4 sm:gap-5">
                    {/* Timeline dot */}
                    <div className="mt-2 sm:mt-3">
                      <div className="relative h-4 w-4 sm:h-5 sm:w-5">
                        <span className="absolute inset-0 rounded-full bg-cyan-400/80 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                        <span className="absolute inset-1 rounded-full bg-slate-950" />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={[
                        "group flex-1 rounded-2xl border bg-slate-900/70 p-4 sm:p-5 shadow-md transition-transform duration-300",
                        isHighlight
                          ? "border-cyan-400/70 shadow-cyan-500/30 bg-gradient-br from-slate-900 via-slate-900 to-slate-950/90"
                          : "border-slate-700/80 hover:border-cyan-400/60 hover:shadow-cyan-500/20",
                      ].join(" ")}
                    >
                      {/* Badge + year */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={[
                            "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
                            isHighlight
                              ? "bg-cyan-500/15 text-cyan-200 border border-cyan-400/60"
                              : "bg-slate-900/80 text-slate-300 border border-slate-600/70",
                          ].join(" ")}
                        >
                          {item.level}
                        </span>
                        <span className="text-xs font-medium text-cyan-300">
                          {item.yearRange}
                        </span>
                      </div>

                      {/* Institution */}
                      <p className="mt-3 text-sm font-semibold text-slate-100">
                        {item.institution}
                      </p>
                      {item.location && (
                        <p className="mt-1 text-xs text-slate-400">
                          {item.location}
                        </p>
                      )}

                      {/* Score */}
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                        <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-cyan-100">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-medium">
                            {item.scoreLabel}:{" "}
                            <span className="text-white">
                              {item.scoreValue}
                            </span>
                          </span>
                        </div>
                        {isHighlight && (
                          <span className="text-[11px] text-sky-300/90">
                            Strong foundation in mathematics & analytical
                            thinking
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Summary card */}
          <aside className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-md shadow-cyan-500/10">
            <h3 className="text-sm font-semibold text-slate-100">
              Academic Snapshot
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              My education journey built a strong base in{" "}
              <span className="font-medium text-cyan-200">
                logical reasoning, mathematics, and structured problem solving
              </span>
              , which supports my transition into data analytics.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-3">
                <p className="text-[11px] text-slate-400">Highest Degree</p>
                <p className="mt-1 font-semibold text-slate-100">
                  B.E. Aeronautical
                </p>
                <p className="mt-1 text-[11px] text-cyan-300">CGPA 8.37 / 10</p>
              </div>
              <div className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-3">
                <p className="text-[11px] text-slate-400">Academic Strength</p>
                <p className="mt-1 font-semibold text-slate-100">
                  Consistent Top Scores
                </p>
                <p className="mt-1 text-[11px] text-emerald-300">
                  94.5% in SSLC
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-3 text-xs text-slate-200">
              <p className="font-semibold text-cyan-200">
                How it supports data analytics
              </p>
              <ul className="mt-2 space-y-1.5">
                <li className="flex gap-2">
                  <span className="mt-[5px] h-1 w-3 rounded-full bg-cyan-400" />
                  <span>
                    Engineering background helps in understanding complex
                    systems and problem solving.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-1 w-3 rounded-full bg-cyan-400" />
                  <span>
                    Strong math and logic skills translate well into analytics
                    and statistics.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-1 w-3 rounded-full bg-cyan-400" />
                  <span>
                    Habit of structured thinking helps when working with large
                    datasets and business problems.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
