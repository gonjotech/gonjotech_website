import Link from "next/link";
import {
  Cpu,
  Globe,
  Smartphone,
  Layers,
  ShieldAlert,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Globe,
  Smartphone,
  Layers,
  ShieldAlert,
  TrendingUp,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Cpu;

  return (
    <div className="rounded-3xl bg-[#090e1d]/90 border border-white/[0.08] hover:border-cyan-500/35 p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-950/20">
      {/* Decorative gradient corner on hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-500/12 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-[#0c1429] border border-white/10 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/15 group-hover:text-cyan-300 transition-all shadow-md">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#0c1429] text-slate-300 border border-white/[0.08]">
            {service.category}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>

        {/* Highlight Features */}
        <div className="space-y-2.5 mb-8">
          {service.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#060a14] text-slate-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 group/link shrink-0 ml-2"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
