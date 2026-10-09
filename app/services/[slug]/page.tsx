import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  PhoneCall,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | GonjoTech Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | GonjoTech`,
      description: service.shortDescription,
      url: `https://gonjotech.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-400 font-medium">{service.title}</span>
        </nav>

        {/* Hero Banner for Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{service.category} Discipline</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/25 transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Request Quotation for {service.title}</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
              </Link>

              <a
                href="tel:+8801736902507"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Call Engineering Lead</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-[#0b1322] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-white">
                  Guaranteed Standards
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>100% Code &amp; IP Ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Type-Safe, Tested Architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>24/7 Post-Deployment SLA Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Zero Vendor Lock-In Guarantee</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/5">
                <span className="text-[11px] text-slate-400 block mb-2 font-semibold uppercase tracking-wider">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#070b14] text-cyan-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Key Capabilities */}
          <div className="bg-[#0b1322]/90 border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Core Engineering Capabilities
              </h2>
            </div>
            <div className="space-y-3">
              {service.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070b14]/70 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Deliverables */}
          <div className="bg-[#0b1322]/90 border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                What We Deliver To You
              </h2>
            </div>
            <div className="space-y-3">
              {service.deliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070b14]/70 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Strategic Business Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-[#0b1322]/70 border border-white/10 space-y-2 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-base font-bold text-cyan-300">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service-Specific Process */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Service Execution Roadmap
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-[#0b1322] border border-white/10 rounded-2xl p-6 space-y-3"
              >
                <span className="font-mono text-2xl font-black text-cyan-400 block">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900/40 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Begin Your {service.title} Project?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Discuss your specific architectural requirements, schedule a feasibility review, or get an itemized quote.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/20"
            >
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
