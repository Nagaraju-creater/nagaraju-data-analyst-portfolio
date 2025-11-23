// components/ProjectsSection.tsx

type Project = {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  highlight: string;
  bullets: string[];
};

const projects: Project[] = [
  {
    id: "sales-dashboard",
    title: "Sales Performance Dashboard",
    subtitle: "End-to-end sales analysis with Excel & Power BI",
    stack: ["Excel", "Power Query", "Power BI", "DAX"],
    highlight:
      "Interactive regional & product-wise sales tracking with trend analysis.",
    bullets: [
      "Cleaned and transformed raw sales data using Power Query.",
      "Built KPI tiles for Total Sales, QoQ Growth, and Top Region.",
      "Designed slicer-driven visuals to compare regions, categories, and time periods.",
      "Used DAX measures to calculate growth % and average sales per product.",
    ],
  },
  {
    id: "hr-attrition",
    title: "HR Attrition Analysis",
    subtitle: "Understanding employee turnover with SQL & Excel",
    stack: ["SQL", "Excel", "Pivot Tables"],
    highlight:
      "Mapped attrition hotspots by department, age group, and experience.",
    bullets: [
      "Queried employee master and attrition tables using SQL joins and filters.",
      "Exported result sets to Excel for pivot-based reporting.",
      "Created charts to compare attrition across departments and roles.",
      "Highlighted high-risk areas using conditional formatting.",
    ],
  },
  {
    id: "customer-churn",
    title: "Customer Churn Exploration",
    subtitle: "Exploring churn drivers for a subscription business",
    stack: ["SQL", "Excel", "Power BI"],
    highlight:
      "Segmented customers by tenure, plan, and engagement to find patterns.",
    bullets: [
      "Prepared churn labels, tenure buckets, and engagement scores using SQL.",
      "Built Power BI visuals to compare churn by cohort and plan type.",
      "Identified high-risk segments with low usage and short tenure.",
      "Suggested actions like retention offers for at-risk customers.",
    ],
  },
  {
    id: "inventory-sales",
    title: "Retail Inventory & Sales Analysis",
    subtitle: "Balancing stock levels with demand",
    stack: ["Excel", "Pivot Tables", "Charts"],
    highlight:
      "Tracked stock movement and product performance across stores.",
    bullets: [
      "Merged inventory and sales data into a single reporting workbook.",
      "Used Pivot Tables to compare stock vs sales by product and store.",
      "Detected slow-moving items and stock-out risks.",
      "Built a summary view for buyers to plan better replenishment.",
    ],
  },
  {
    id: "targets-tableau",
    title: "Sales vs Target Dashboard",
    subtitle: "Visualizing performance against goals in Tableau",
    stack: ["Tableau", "Excel"],
    highlight:
      "Compared actual vs target sales with dynamic region filters.",
    bullets: [
      "Prepared target and actual sales datasets in Excel.",
      "Created KPI cards and variance views in Tableau.",
      "Used filters to switch between regions, products, and periods.",
      "Helped managers quickly spot under-performing areas.",
    ],
  },
];

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-r from-cyan-500/80 via-cyan-400/50 to-transparent" />
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {label}
      </h2>
      <div className="h-px flex-1 bg-gradient-l from-cyan-500/80 via-cyan-400/50 to-transparent" />
    </div>
  );
}

function StackPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-100">
      {label}
    </span>
  );
}

/**
 * Dashboard preview per project – same visual language as Hero dashboard,
 * but each project has a unique layout.
 */
function DashboardPreview({ project }: { project: Project }) {
  const { id } = project;

  if (id === "sales-dashboard") {
    // Sales Performance Dashboard
    return (
      <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/85 p-3 shadow-inner">
        {/* Header row to match hero live card */}
        <div className="mb-3 flex items-center justify-between text-[11px]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Sales Snapshot
            </p>
            <p className="text-xs font-medium text-slate-100">
              Performance overview
            </p>
          </div>
          <span className="rounded-full bg-slate-950/80 px-2 py-1 text-[10px] text-cyan-200">
            Excel · Power BI
          </span>
        </div>

        {/* Top KPIs row */}
        <div className="mb-3 grid grid-cols-3 gap-2 text-[10px]">
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Total Sales</p>
            <p className="mt-1 text-xs font-semibold text-cyan-300">
              ₹ 12.4L
            </p>
            <p className="text-[9px] text-emerald-400">▲ 8.2% QoQ</p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Top Region</p>
            <p className="mt-1 text-xs font-semibold text-slate-100">South</p>
            <p className="text-[9px] text-slate-400">34% share</p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Orders</p>
            <p className="mt-1 text-xs font-semibold text-slate-100">1,280</p>
            <p className="text-[9px] text-slate-400">Last 12 months</p>
          </div>
        </div>

        {/* Bar trend */}
        <div className="rounded-xl bg-gradient-t from-slate-950 via-slate-900 to-slate-900/40 p-3">
          <div className="mb-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>Monthly Sales Trend</span>
            <span>Jan–Dec</span>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            <div className="h-[35%] flex-1 rounded-t bg-cyan-500/80" />
            <div className="h-[55%] flex-1 rounded-t bg-cyan-400/80" />
            <div className="h-[65%] flex-1 rounded-t bg-emerald-400/80" />
            <div className="h-[45%] flex-1 rounded-t bg-cyan-300/80" />
            <div className="h-[80%] flex-1 rounded-t bg-sky-400/80" />
            <div className="h-[70%] flex-1 rounded-t bg-cyan-500/80" />
          </div>
        </div>

        {/* Filters row – same style as hero */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-300">
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-slate-950/90 px-2 py-1 text-cyan-200">
              Filter: Region
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Category
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Time
            </span>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-300">
            Built with Excel · Power BI · DAX
          </span>
        </div>
      </div>
    );
  }

  if (id === "hr-attrition") {
    // HR Attrition heatmap-style
    return (
      <div className="relative overflow-hidden rounded-2xl border border-rose-500/40 bg-slate-900/85 p-3 shadow-inner">
        <div className="mb-3 flex items-center justify-between text-[11px]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              HR Snapshot
            </p>
            <p className="text-xs font-medium text-slate-100">
              Attrition overview
            </p>
          </div>
          <span className="rounded-full bg-rose-500/10 px-2 py-1 text-[10px] text-rose-300">
            SQL · Excel
          </span>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2 text-[10px]">
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Headcount</p>
            <p className="mt-1 text-xs font-semibold text-slate-100">520</p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Attrition</p>
            <p className="mt-1 text-xs font-semibold text-rose-300">14.2%</p>
            <p className="text-[9px] text-rose-400">High</p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Avg Tenure</p>
            <p className="mt-1 text-xs font-semibold text-slate-100">
              2.4 yrs
            </p>
          </div>
        </div>

        {/* Dept vs Attrition grid */}
        <div className="rounded-xl bg-gradient-tr from-rose-950 via-slate-950 to-slate-900/40 p-3">
          <div className="mb-2 flex items-center justify-between text-[10px] text-slate-300">
            <span>Attrition by Department</span>
            <span>Last 12 months</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-[9px]">
            {[
              { label: "Sales", level: "bg-rose-500/85", value: "22%" },
              { label: "Support", level: "bg-rose-400/85", value: "18%" },
              { label: "HR", level: "bg-amber-400/85", value: "15%" },
              { label: "Tech", level: "bg-emerald-500/80", value: "9%" },
              { label: "Ops", level: "bg-rose-300/80", value: "13%" },
              { label: "Finance", level: "bg-emerald-400/80", value: "7%" },
              { label: "Admin", level: "bg-amber-300/85", value: "11%" },
              { label: "Other", level: "bg-slate-600/80", value: "5%" },
            ].map((cell) => (
              <div
                key={cell.label}
                className={`flex h-10 flex-col justify-between rounded-md ${cell.level} p-1`}
              >
                <span className="text-[8px] text-slate-950/90">
                  {cell.label}
                </span>
                <span className="self-end text-[8px] font-semibold text-slate-950/90">
                  {cell.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend + focus pill */}
        <div className="mt-3 flex items-center justify-between text-[9px] text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-500" /> High
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Medium
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Low
            </span>
          </div>
          <span className="rounded-full bg-rose-500/10 px-2 py-1 text-rose-300">
            Focus: Sales & Support
          </span>
        </div>
      </div>
    );
  }

  if (id === "customer-churn") {
    // Customer churn segmentation / donut
    return (
      <div className="relative overflow-hidden rounded-2xl border border-indigo-500/40 bg-slate-900/85 p-3 shadow-inner">
        <div className="mb-3 flex items-center justify-between text-[11px]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Subscription Snapshot
            </p>
            <p className="text-xs font-medium text-slate-100">
              Customer churn overview
            </p>
          </div>
          <span className="rounded-full bg-slate-950/80 px-2 py-1 text-[10px] text-indigo-300">
            SQL · Power BI
          </span>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2 text-[10px]">
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Customers</p>
            <p className="mt-1 text-xs font-semibold text-slate-100">3,420</p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Churn Rate</p>
            <p className="mt-1 text-xs font-semibold text-rose-300">9.8%</p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">MRR Impact</p>
            <p className="mt-1 text-xs font-semibold text-indigo-300">
              -₹ 1.3L
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[1.2fr,1.8fr] gap-3">
          {/* Donut */}
          <div className="rounded-xl bg-gradient-br from-indigo-950 via-slate-950 to-slate-900/40 p-3 text-[10px]">
            <p className="mb-2 text-slate-400">Retention vs Churn</p>
            <div className="relative mx-auto h-16 w-16">
              <div className="absolute inset-0 rounded-full border-[7px] border-emerald-400/80" />
              <div className="absolute inset-0 rounded-full border-[7px] border-rose-400/90 border-l-transparent border-b-transparent" />
              <div className="absolute inset-4 rounded-full bg-slate-950" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[9px]">
                <span className="text-slate-200">Churn</span>
                <span className="font-semibold text-rose-300">9.8%</span>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <p className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Retained
                </span>
                <span>90.2%</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  Churned
                </span>
                <span>9.8%</span>
              </p>
            </div>
          </div>

          {/* Segment bars */}
          <div className="rounded-xl bg-slate-950/90 p-3 text-[10px]">
            <p className="mb-2 text-slate-400">Risk segments</p>
            {[
              { label: "Low tenure · Low usage", value: 78, tone: "bg-rose-500/80" },
              { label: "Medium tenure · Medium usage", value: 52, tone: "bg-amber-400/80" },
              { label: "High tenure · High usage", value: 18, tone: "bg-emerald-400/80" },
            ].map((seg) => (
              <div key={seg.label} className="mb-2 last:mb-0">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-slate-200">{seg.label}</span>
                  <span className="text-slate-400">{seg.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={`h-full ${seg.tone}`}
                    style={{ width: `${seg.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters row */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-300">
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-slate-950/90 px-2 py-1 text-cyan-200">
              Filter: Segment
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Plan
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Tenure
            </span>
          </div>
          <span className="rounded-full bg-indigo-500/15 px-2 py-1 text-indigo-300">
            Highlights high-risk churn groups
          </span>
        </div>
      </div>
    );
  }

  if (id === "inventory-sales") {
    // Inventory vs Sales view
    return (
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-slate-900/85 p-3 shadow-inner">
        <div className="mb-3 flex items-center justify-between text-[11px]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Retail Snapshot
            </p>
            <p className="text-xs font-medium text-slate-100">
              Stock vs sales
            </p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">
            Excel · Pivot Tables
          </span>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2 text-[10px]">
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Stores</p>
            <p className="mt-1 text-xs font-semibold text-slate-100">24</p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Stock Value</p>
            <p className="mt-1 text-xs font-semibold text-emerald-300">
              ₹ 8.6L
            </p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">At Risk</p>
            <p className="mt-1 text-xs font-semibold text-amber-300">
              17%
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[1.7fr,1.3fr] gap-3">
          {/* Stock vs Sales bars */}
          <div className="rounded-xl bg-gradient-t from-slate-950 via-slate-900 to-slate-900/40 p-3 text-[10px]">
            <div className="mb-2 flex items-center justify-between text-slate-400">
              <span>Stock vs Sales</span>
              <span>Top products</span>
            </div>
            {[
              { label: "Product A", stock: 90, sales: 65 },
              { label: "Product B", stock: 40, sales: 70 },
              { label: "Product C", stock: 75, sales: 30 },
            ].map((row) => (
              <div key={row.label} className="mb-2 last:mb-0">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-slate-200">{row.label}</span>
                  <span className="text-slate-400">
                    {row.sales}% sold
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-emerald-400/80"
                    style={{ width: `${row.sales}%` }}
                  />
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-cyan-400/70"
                    style={{ width: `${row.stock}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Status chips */}
          <div className="rounded-xl bg-slate-950/90 p-3 text-[10px]">
            <p className="mb-2 text-slate-400">Inventory signals</p>
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2 py-1 text-rose-300">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                3 stock-out risks
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                5 slow movers
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                12 healthy SKUs
              </span>
            </div>
            <p className="mt-3 text-[9px] text-slate-400">
              Prioritize replenishment for{" "}
              <span className="text-emerald-300">Store 3, 7, 11</span>.
            </p>
          </div>
        </div>

        {/* Filters row */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-300">
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-slate-950/90 px-2 py-1 text-cyan-200">
              Filter: Store
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Category
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Risk
            </span>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-300">
            Helps buyers plan replenishment
          </span>
        </div>
      </div>
    );
  }

  if (id === "targets-tableau") {
    // Actual vs Target bullet chart style
    return (
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-900/85 p-3 shadow-inner">
        <div className="mb-3 flex items-center justify-between text-[11px]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Targets Snapshot
            </p>
            <p className="text-xs font-medium text-slate-100">
              Sales vs goals
            </p>
          </div>
          <span className="rounded-full bg-slate-950/80 px-2 py-1 text-[10px] text-cyan-200">
            Tableau · Excel
          </span>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2 text-[10px]">
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Overall Target</p>
            <p className="mt-1 text-xs font-semibold text-slate-100">
              ₹ 15L
            </p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Actual</p>
            <p className="mt-1 text-xs font-semibold text-cyan-300">
              ₹ 13.2L
            </p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-2">
            <p className="text-slate-400">Achievement</p>
            <p className="mt-1 text-xs font-semibold text-amber-300">
              88%
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-tr from-slate-950 via-slate-900 to-slate-900/40 p-3 text-[10px]">
          <div className="mb-2 flex items-center justify-between text-slate-400">
            <span>Sales vs Target</span>
            <span>By region</span>
          </div>

          {[
            { label: "North", actual: 76 },
            { label: "South", actual: 105 },
            { label: "East", actual: 92 },
            { label: "West", actual: 81 },
          ].map((row) => (
            <div key={row.label} className="mb-2 last:mb-0">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-slate-200">{row.label}</span>
                <span
                  className={
                    row.actual >= 100
                      ? "text-emerald-300"
                      : "text-amber-300"
                  }
                >
                  {row.actual}%
                </span>
              </div>
              <div className="h-3 rounded-full bg-slate-800">
                {/* Target band */}
                <div className="h-full rounded-full bg-slate-700/70" />
                {/* Actual overlay */}
                <div
                  className={`-mt-3 h-3 rounded-full ${
                    row.actual >= 100
                      ? "bg-emerald-400/85"
                      : "bg-cyan-400/85"
                  }`}
                  style={{
                    width: `${Math.min(row.actual, 120)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Filters row */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-300">
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-slate-950/90 px-2 py-1 text-cyan-200">
              View: Region
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Product
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1">
              Month
            </span>
          </div>
          <span className="rounded-full bg-cyan-500/15 px-2 py-1 text-cyan-300">
            Mirrors Tableau dashboards in portfolio
          </span>
        </div>
      </div>
    );
  }

  // fallback – shouldn't hit with current IDs
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3 shadow-inner" />
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="project-card group relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/70 p-4 shadow-lg shadow-slate-900/60 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/70"
    >
      {/* Background glow (matches hero) */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-br from-cyan-500/10 via-slate-900/80 to-sky-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(8,47,73,0.8),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-4">
        {/* Header (same structure, different text) */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-50">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-slate-300">{project.subtitle}</p>
            <p className="mt-2 text-xs text-cyan-100/90">
              {project.highlight}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tool) => (
              <StackPill key={tool} label={tool} />
            ))}
          </div>
        </header>

        {/* Dashboard preview (varies by project) */}
        <DashboardPreview project={project} />

        {/* Text bullets */}
        <ul className="space-y-1.5 text-xs text-slate-200">
          {project.bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14 sm:py-16">
      <div className="page-container space-y-6">
        <SectionTitle label="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
