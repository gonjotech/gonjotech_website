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
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
      {/* Decorative gradient corner on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header: Icon & Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/5">
            {service.category}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Highlight Features */}
        <div className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link shrink-0 ml-2"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
