"use client";

import { useEffect, useRef, useState } from "react";

type SkillCategory = "data" | "bi" | "soft";

type Skill = {
  name: string;
  level: number; // percentage
  category: SkillCategory;
  label: string; // short label for "logo"
  tagline: string;
};

const ALL_SKILLS: Skill[] = [
  // Data skills
  {
    name: "SQL",
    level: 90,
    category: "data",
    label: "SQL",
    tagline: "Queries, joins, aggregations",
  },
  {
    name: "Excel",
    level: 88,
    category: "data",
    label: "XL",
    tagline: "Pivot tables, lookups, reporting",
  },
  {
    name: "Power Query",
    level: 80,
    category: "data",
    label: "PQ",
    tagline: "Data cleaning & shaping",
  },

  // BI Tools
  {
    name: "Power BI",
    level: 85,
    category: "bi",
    label: "BI",
    tagline: "Interactive business dashboards",
  },
  {
    name: "Tableau",
    level: 78,
    category: "bi",
    label: "TB",
    tagline: "Visual storytelling with data",
  },

  // Soft skills
  {
    name: "Problem Solving",
    level: 88,
    category: "soft",
    label: "PS",
    tagline: "Breaking problems into clear steps",
  },
  {
    name: "Communication",
    level: 82,
    category: "soft",
    label: "COM",
    tagline: "Explaining insights clearly",
  },
  {
    name: "Teamwork",
    level: 86,
    category: "soft",
    label: "TW",
    tagline: "Collaborating with stakeholders",
  },
];

function useCountUp(target: number, start: boolean, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frameId: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.round(progress * target);
      setValue(current);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [target, start, duration]);

  return value;
}

export default function SkillsSection() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Trigger animations when section enters viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-14 sm:py-16 scroll-mt-24"
    >
      <div ref={sectionRef} className="page-container">
        {/* Section heading */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-r from-cyan-500/80 via-cyan-400/50 to-transparent" />
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-l from-cyan-500/80 via-cyan-400/50 to-transparent" />
        </div>

        {/* Optional legend / categories row */}
        <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
          <span className="rounded-full bg-slate-900/80 px-2 py-1">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Data Skills
          </span>
          <span className="rounded-full bg-slate-900/80 px-2 py-1">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BI Tools
          </span>
          <span className="rounded-full bg-slate-900/80 px-2 py-1">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
            Soft Skills
          </span>
        </div>

        {/* Cards grid – all skills, no filter */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SKILLS.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              startAnimation={hasEntered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function categoryPillStyles(category: SkillCategory) {
  if (category === "data") {
    return {
      label: "Data Skill",
      dotClass: "bg-cyan-400",
      pillClass: "bg-cyan-500/10 text-cyan-200 border-cyan-500/30",
    };
  }
  if (category === "bi") {
    return {
      label: "BI Tool",
      dotClass: "bg-emerald-400",
      pillClass: "bg-emerald-500/10 text-emerald-200 border-emerald-500/30",
    };
  }
  return {
    label: "Soft Skill",
    dotClass: "bg-sky-400",
    pillClass: "bg-sky-500/10 text-sky-200 border-sky-500/30",
  };
}

function SkillCard({
  skill,
  startAnimation,
}: {
  skill: Skill;
  startAnimation: boolean;
}) {
  const animatedValue = useCountUp(skill.level, startAnimation, 900);

  // Donut chart math
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const progress = animatedValue / 100;
  const strokeDashoffset = circumference * (1 - progress);

  const categoryStyles = categoryPillStyles(skill.category);

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border border-slate-700/70 
        bg-slate-900/70 p-4 shadow-md shadow-cyan-500/10 
        transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.4deg]
        hover:border-cyan-400/80 hover:shadow-cyan-500/25
      "
    >
      {/* Shimmer / glow overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-24 animate-[spin_3.8s_linear_infinite] bg-[conic-gradient(from_120deg,rgba(34,211,238,0.1),transparent_40%,rgba(56,189,248,0.2),transparent_70%)]" />
      </div>

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: category pill + logo + text */}
        <div className="space-y-2">
          {/* Category pill */}
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${categoryStyles.pillClass}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${categoryStyles.dotClass}`} />
            {categoryStyles.label}
          </span>

          {/* Logo + texts */}
          <div className="flex items-center gap-3">
            {/* Logo-style badge */}
            <div
              className="
                inline-flex h-10 w-10 items-center justify-center rounded-2xl 
                bg-gradient-br from-cyan-400 via-sky-500 to-emerald-400 
                text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-500/40
                transition-transform duration-300 group-hover:scale-105 group-hover:shadow-cyan-400/60
              "
            >
              <span className="tracking-tight">{skill.label}</span>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-50">
                {skill.name}
              </h3>
              <p className="text-[11px] text-slate-300">{skill.tagline}</p>
            </div>
          </div>
        </div>

        {/* Right: donut chart + counter */}
        <div className="relative mt-1 flex items-center justify-center sm:mt-0">
          <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            className="drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
          >
            {/* Background circle */}
            <circle
              cx="36"
              cy="36"
              r={radius}
              stroke="rgba(15,23,42,0.8)"
              strokeWidth="6"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="36"
              cy="36"
              r={radius}
              stroke="url(#skillGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 0.3s ease-out",
              }}
              transform="rotate(-90 36 36)"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="skillGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center counter */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-semibold text-slate-50">
              {animatedValue}%
            </span>
            <span className="text-[10px] text-slate-400">proficiency</span>
          </div>
        </div>
      </div>

      {/* Micro copy */}
      <p className="relative mt-3 text-[11px] text-slate-400">
        Focused on applying this skill to real-world business problems and
        analytics projects.
      </p>
    </div>
  );
}
