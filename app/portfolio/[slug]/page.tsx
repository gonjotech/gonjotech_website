import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | GonjoTech Case Study`,
      description: project.summary,
      url: `https://gonjotech.com/portfolio/${project.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-400 font-medium">{project.title}</span>
        </nav>

        {/* Case Study Hero */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-400">
              Industry: <strong className="text-slate-200">{project.client}</strong>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl bg-[#0b1322] border border-cyan-500/30">
          {project.results.map((res) => (
            <div key={res.label} className="space-y-1 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent block">
                {res.metric}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium block">
                {res.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#0b1322]/80 border border-white/10 rounded-3xl p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
              The Operational Challenge
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Friction, Silos &amp; Inefficiencies
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-[#0b1322]/80 border border-cyan-500/30 rounded-3xl p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
              The GonjoTech Solution
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Targeted System Engineering
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack & Concrete Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#070b14] border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">
                Technologies Employed
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0b1322] border border-white/10 text-cyan-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#070b14] border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">
                Client Deliverables
              </h3>
            </div>
            <div className="space-y-2.5">
              {project.deliverables.map((deliv) => (
                <div key={deliv} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900/40 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need a Similar Solution for Your Business?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Our engineers can adapt proven architectures or design an entirely custom software product tailored to your exact business specifications.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Discuss Your System Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
