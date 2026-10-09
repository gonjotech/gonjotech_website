import {
  Compass,
  FileCode,
  Palette,
  Terminal,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "Discover",
    title: "Understanding Goals & Scope",
    description:
      "We unpack your business challenges, user personas, operational constraints, and technical goals through structured discovery sessions.",
    icon: Compass,
    highlights: ["Scope Definition", "Constraint Mapping", "Technical Feasibility"],
  },
  {
    number: "02",
    phase: "Plan",
    title: "System Architecture & Milestones",
    description:
      "We design system architecture diagrams, choose suitable database schemas, draft API specs, and establish sprint deliverables.",
    icon: FileCode,
    highlights: ["Database Modeling", "API Contracts", "Sprint Roadmapping"],
  },
  {
    number: "03",
    phase: "Design",
    title: "UX Flow & Interface Design",
    description:
      "Creating intuitive user workflows, responsive component design systems, and clickable high-fidelity prototypes.",
    icon: Palette,
    highlights: ["Interactive Prototypes", "Design Systems", "Usability Validation"],
  },
  {
    number: "04",
    phase: "Build",
    title: "Full-Stack Development & QA",
    description:
      "Clean, modular engineering with bi-weekly client demos, automated regression testing, security scans, and code audits.",
    icon: Terminal,
    highlights: ["Clean Code Standards", "Automated QA Tests", "Continuous CI/CD"],
  },
  {
    number: "05",
    phase: "Launch & Support",
    title: "Deployment & 24/7 Stewardship",
    description:
      "Smooth zero-downtime deployment, team onboarding, data migration, and SLA-backed ongoing technical maintenance.",
    icon: Rocket,
    highlights: ["Zero-Downtime Cutover", "User Training", "24/7 Post-Launch Support"],
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop connector line */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/10 via-cyan-500/30 to-blue-600/10 -translate-y-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="bg-[#090e1d]/90 backdrop-blur-md border border-white/[0.08] hover:border-cyan-500/35 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0c1429] border border-white/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-black text-slate-600 group-hover:text-cyan-400/60 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                  {step.phase}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                {step.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
