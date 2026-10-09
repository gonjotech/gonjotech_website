import Link from "next/link";
import { ArrowUpRight, TrendingUp, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface CaseStudyCardProps {
  project: Project;
}

export default function CaseStudyCard({ project }: CaseStudyCardProps) {
  return (
    <div className="bg-[#0b1322]/90 border border-white/10 hover:border-cyan-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {project.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {project.client}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Results Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#070b14]/90 border border-white/5 mb-6">
          {project.results.map((res) => (
            <div key={res.label} className="text-left">
              <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent block">
                {res.metric}
              </span>
              <span className="text-[11px] text-slate-400 font-medium leading-tight block">
                {res.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Details */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link shrink-0 ml-2"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
