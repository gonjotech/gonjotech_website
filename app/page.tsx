import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechStackGrid from "@/components/TechStackGrid";
import FaqAccordion from "@/components/FaqAccordion";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { faqsData } from "@/data/faqs";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Layers,
  Cpu,
  Clock8,
  TrendingUp,
  MapPin,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-white/5">
        {/* Ambient atmospheric glows */}
        <div className="ambient-glow bg-cyan-500/15 w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2" />
        <div className="ambient-glow bg-blue-600/15 w-[600px] h-[400px] top-40 -left-40" />
        <div className="ambient-glow bg-indigo-600/10 w-[500px] h-[500px] top-60 -right-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 text-cyan-300 shadow-lg shadow-cyan-500/10 animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>On-Demand High Performance Engineering Teams &bull; Est. 2019</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Turning Bold Ideas Into{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Powerful Digital Solutions.
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              {companyData.subheadline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 text-cyan-200" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 text-cyan-200" />
              </Link>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Verified Quick Stats Bar */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 text-left">
              {companyData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0b1222]/80 border border-white/5 hover:border-cyan-500/20 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUST & VALUE PROPOSITION
      ========================================================================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Businesses Trust Us"
            title="Engineered for Reliability,"
            highlight="Built for Scale."
            description="We bridge creative product design with enterprise software discipline, ensuring your technology investments deliver compounding business returns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.pillars.map((pillar) => {
              const icons: Record<string, React.ElementType> = {
                Code2,
                ShieldCheck,
                TrendingUp,
                Clock8,
              };
              const Icon = icons[pillar.icon] || Code2;

              return (
                <div
                  key={pillar.title}
                  className="bg-[#0b1222]/90 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED SERVICES & SOLUTIONS
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#050912] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Verified Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Services &amp; Digital Solutions{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  We Deliver
                </span>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group shrink-0"
            >
              <span>View All 6 Service Disciplines</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS / CASE STUDIES
      ========================================================================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Demonstrated Impact"
            title="Real-World Software"
            highlight="Solutions & Platforms"
            description="Inspect select projects demonstrating our capabilities in custom enterprise ERPs, omnichannel digital storefronts, and cross-platform mobility."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/30 hover:text-white transition-all"
            >
              <span>Explore Comprehensive Portfolio &amp; Case Studies</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DEVELOPMENT PROCESS TIMELINE
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#050912] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Methodology"
            title="Our 5-Stage"
            highlight="Development Lifecycle"
            description="A disciplined, transparent delivery framework engineered to eliminate surprises and maintain continuous client visibility from concept to deployment."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGIES & EXPERTISE
      ========================================================================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Battle-Tested Tech Stack"
            title="Technologies &amp;"
            highlight="Engineering Stack"
            description="We leverage modern, verified programming frameworks and database engines chosen specifically for stability, concurrency, and security."
          />

          <TechStackGrid />
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE GONJOTECH (BUSINESS OUTCOMES)
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#060a14] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>The GonjoTech Advantage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Focused on Business Outcomes,{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Not Empty Claims.
                </span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Since our founding in 2019 in Gopalganj, Bangladesh, GonjoTech has held a single guiding principle: deliver uncompromised software quality with complete customer dedication. We don&apos;t build disposable templates—we build dependable systems that power real operations.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Exact Business Alignment",
                    desc: "Custom architectures engineered around your precise operational constraints rather than generic off-the-shelf templates.",
                  },
                  {
                    title: "Strict Code Standards & Full Ownership",
                    desc: "Type-safe, clean code with 100% intellectual property ownership transferred to you upon milestone delivery.",
                  },
                  {
                    title: "Proactive Security & Testing",
                    desc: "Automated regression testing, load simulations, and OWASP security controls prior to production release.",
                  },
                  {
                    title: "24/7 Ongoing Post-Launch Support",
                    desc: "Dedicated SLAs, rapid emergency response, and continuous maintenance keeping your platforms running smoothly.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Learn More About Our Company &amp; Culture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Card Showcase */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6 relative z-10">
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                      GT
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        GonjoTech Engineering Commitments
                      </span>
                      <span className="text-xs text-slate-400">
                        Dhaka &amp; Gopalganj Operations
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Active SLA 24/7
                  </span>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-xl bg-[#070b14]/90 border border-white/5 space-y-1">
                    <span className="font-semibold text-cyan-300 block">
                      Customer Satisfaction Guarantee
                    </span>
                    <p className="text-slate-400">
                      &ldquo;In GonjoTech, customer satisfaction is guaranteed – it’s our commitment. Quality is our first priority. We will not compromise with quality by any means.&rdquo;
                    </p>
                    <span className="text-[11px] text-slate-400 block pt-1">
                      &mdash; Verified Corporate Charter Statement
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="text-slate-400 block text-[11px]">Primary Office</span>
                      <span className="font-semibold text-white">Mirpur-14, Dhaka</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="text-slate-400 block text-[11px]">Founding Regional Base</span>
                      <span className="font-semibold text-white">Kashiani, Gopalganj</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-cyan-500/20"
                  >
                    <span>Request Technical Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS
      ========================================================================= */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Answers"
            title="Frequently Asked"
            highlight="Questions"
            description="Clear details on our engagement models, software deliverables, custom development process, and international client support."
          />

          <FaqAccordion items={faqsData} />
        </div>
      </section>

      {/* =========================================================================
          CONVERSION-FOCUSED FINAL CTA
      ========================================================================= */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#0c162e] via-[#0f1d3c] to-[#0c162e] border border-cyan-500/30 p-8 sm:p-16 text-center shadow-2xl shadow-cyan-950/40 overflow-hidden">
            {/* Ambient inner glow */}
            <div className="ambient-glow bg-cyan-500/10 w-96 h-96 -top-24 left-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Innovate?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Have an Idea? Let&apos;s Build{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Something Exceptional.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Tell us about your goals, and let&apos;s explore the right technology solution for your business. We provide detailed scope estimates and architectural proposals within 24 to 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5 text-cyan-200" />
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5 text-cyan-200" />
                </Link>

                <a
                  href={`tel:${companyData.primaryPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/30 hover:text-white transition-all"
                >
                  <span>Call: {companyData.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
