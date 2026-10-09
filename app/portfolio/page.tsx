import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { projectsData } from "@/data/projects";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Proven Software & Web Engineering",
  description:
    "Explore GonjoTech's verified enterprise case studies: GonjoERP, Smart Campus Educational Systems, Omnichannel POS, and Native Mobile Applications.",
};

export default function PortfolioPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Proven Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Selected Projects &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Examine how GonjoTech engineers tailored architectures to solve real business challenges, automate complex workflows, and scale high-concurrency systems.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-full border border-white/5 pt-1">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>All projects reflect verified solutions developed by GonjoTech engineering.</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-[#0b1322] border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Specific Project or System in Mind?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            We can walk you through live architecture demos, review your technical scope, and outline a development sprint plan.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/20"
            >
              <span>Schedule an Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
