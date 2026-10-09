import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import { servicesData } from "@/data/services";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Clock,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | Custom Software & Web Engineering",
  description:
    "Explore GonjoTech's verified technology services: Custom Software, Web Development, Mobile Apps, GonjoERP & Enterprise Solutions, QA Testing, and Digital Marketing.",
};

const engagementModels = [
  {
    title: "Dedicated Engineering Squad",
    subtitle: "Full-Time Embedded Team",
    description:
      "A hand-picked squad of senior frontend, backend, QA, and UI/UX specialists working exclusively as an extension of your company under agile sprint rituals.",
    icon: Users,
    bestFor: "Growing scale-ups, long-term software platforms, and continuous feature roadmaps.",
    features: [
      "Direct daily Slack/Jira communication",
      "Flexible scaling of team headcount",
      "100% intellectual property ownership",
      "Asynchronous standups for global time zones",
    ],
  },
  {
    title: "Fixed Scope Project Delivery",
    subtitle: "Milestone-Based Execution",
    description:
      "Guaranteed delivery for projects with clearly defined requirements, established budgets, and fixed target delivery dates.",
    icon: Briefcase,
    bestFor: "MVPs, specific modular software additions, corporate web portals, and system migrations.",
    features: [
      "Transparent fixed price quotation",
      "Structured milestone checkpoints & UAT",
      "Included post-launch stabilization warranty",
      "Comprehensive architectural handover",
    ],
  },
  {
    title: "Support & Infrastructure Retainer",
    subtitle: "24/7 Ongoing Maintenance",
    description:
      "Continuous technical maintenance, SLA-backed emergency incident coverage, security patching, and cloud infrastructure monitoring.",
    icon: Clock,
    bestFor: "Live enterprise platforms, critical ERP installations, and high-traffic e-commerce systems.",
    features: [
      "Guaranteed uptime SLA monitoring",
      "Proactive security vulnerability patching",
      "Automated off-site database backups",
      "Monthly performance & analytics reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Comprehensive Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Software Capabilities Engineered for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Measurable Impact.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From custom enterprise software and ERP suites to native mobile applications and technical SEO, GonjoTech delivers complete end-to-end technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="space-y-12">
          <SectionHeader
            badge="Flexible Collaboration"
            title="How We Partner With"
            highlight="Our Clients"
            description="Choose the engagement structure that best fits your technical scope, operating budget, and internal management style."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="bg-[#0b1322]/90 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                      {model.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {model.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                      {model.description}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {model.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[11px] text-slate-500 block mb-1 font-medium">
                      Best suited for:
                    </span>
                    <p className="text-xs text-slate-300 italic">
                      {model.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="space-y-12">
          <SectionHeader
            badge="Engineering Delivery"
            title="Our Structured"
            highlight="Execution Framework"
            description="Our proven 5-stage lifecycle guarantees transparent milestones, high code quality, and predictable launches."
          />

          <ProcessTimeline />
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-[#0b1322] border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need a Tailored Software Solution for Your Business?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contact our engineering team to discuss your project requirements and receive a comprehensive proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/20"
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
