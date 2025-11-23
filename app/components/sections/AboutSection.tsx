"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-14 sm:py-16 scroll-mt-20"
    >
      <div className="page-container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-r from-cyan-500/80 via-cyan-400/50 to-transparent" />
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400">
            About
          </h2>
          <div className="h-px flex-1 bg-gradient-l from-cyan-500/80 via-cyan-400/50 to-transparent" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Left: Story */}
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Who I am
            </p>
            <p>
              I&apos;m <span className="font-semibold text-cyan-200">Nagaraju K</span>,
              an engineering graduate who fell in love with data. I completed my{" "}
              <span className="font-semibold text-cyan-200">
                B.E. in Aeronautical Engineering
              </span>{" "}
              from Anna University, Chennai (2020–2024) with a CGPA of{" "}
              <span className="font-semibold text-cyan-200">8.37 / 10</span>.
            </p>

            <p>
              During college, I realised I enjoyed digging into numbers more than
              anything else — understanding why something happened, not just that
              it happened. That curiosity naturally pulled me towards{" "}
              <span className="font-semibold text-cyan-200">
                data analytics
              </span>
              .
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 pt-2">
              What I do
            </p>
            <p>
              Today I work with{" "}
              <span className="font-semibold text-slate-100">
                SQL, Excel, Power BI and Tableau
              </span>{" "}
              to clean data, build dashboards, and tell clear stories with charts.
              I&apos;ve built projects like{" "}
              <span className="font-semibold text-slate-100">
                Sales Performance Analysis
              </span>{" "}
              and{" "}
              <span className="font-semibold text-slate-100">
                HR Attrition Analysis
              </span>
              , where I handled everything from raw data to final insights.
            </p>

            <p>
              I enjoy the full journey — from messy spreadsheets and raw tables
              to polished visuals that help stakeholders make confident decisions.
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 pt-2">
              Right now
            </p>
            <p>
              I&apos;m actively looking for an{" "}
              <span className="font-semibold text-cyan-200">
                entry-level Data Analyst
              </span>{" "}
              role where I can apply my skills, learn from experienced teams, and
              keep growing into roles like{" "}
              <span className="font-semibold text-slate-100">
                Senior Analyst or BI Developer
              </span>{" "}
              over time.
            </p>
          </div>

          {/* Right: Highlight cards / mini-timeline */}
          <div className="space-y-4">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-4 shadow-md shadow-cyan-500/10">
                <p className="text-[11px] text-slate-400">Degree</p>
                <p className="mt-1 text-xs font-semibold text-slate-100">
                  B.E. Aero
                </p>
                <p className="mt-0.5 text-[11px] text-cyan-300">CGPA 8.37</p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-4 shadow-md shadow-cyan-500/10">
                <p className="text-[11px] text-slate-400">Core Tools</p>
                <p className="mt-1 text-xs font-semibold text-slate-100">
                  SQL · Excel
                </p>
                <p className="mt-0.5 text-[11px] text-cyan-300">
                  Power BI · Tableau
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-4 shadow-md shadow-cyan-500/10">
                <p className="text-[11px] text-slate-400">Focus</p>
                <p className="mt-1 text-xs font-semibold text-slate-100">
                  Data
                </p>
                <p className="mt-0.5 text-[11px] text-cyan-300">
                  Dashboards · Insights
                </p>
              </div>
            </div>

            {/* Timeline-style card */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-md shadow-cyan-500/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Journey so far
              </p>
              <ol className="mt-3 space-y-3 text-xs text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-cyan-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      2020–2024 · Engineering foundation
                    </p>
                    <p className="mt-0.5">
                      Built strong fundamentals in maths, physics and problem
                      solving through Aeronautical Engineering.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-cyan-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      2024+ · Shift into data
                    </p>
                    <p className="mt-0.5">
                      Learned SQL, Excel, Power BI and Tableau while building
                      hands-on projects like sales dashboards and attrition
                      analysis.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-cyan-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Now · Ready for real-world problems
                    </p>
                    <p className="mt-0.5">
                      Looking for an opportunity to turn real business data into
                      clear, actionable insights as a Data Analyst.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Strengths card */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-md shadow-cyan-500/10 text-xs text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                How I work
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    I like breaking vague problems into clear, structured steps.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    I care a lot about clean data and clear visuals, not just
                    fancy charts.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>
                    I&apos;m comfortable learning new tools fast and adapting to
                    how teams work.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
