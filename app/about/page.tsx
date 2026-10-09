import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { companyData } from "@/data/company";
import { teamData } from "@/data/team";
import {
  Compass,
  Target,
  Sparkles,
  ShieldCheck,
  MapPin,
  Clock8,
  ArrowRight,
  HeartHandshake,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Company History, Mission & Leadership",
  description:
    "Learn about GonjoTech's founding in 2019, our commitment to uncompromised software engineering, our verified leadership team, and our mission to empower businesses through technology.",
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>About GonjoTech</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            High-Performance Engineering,{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Rooted in Dedication.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Founded in 2019, GonjoTech is an energetic software company and digital product studio committed to delivering uncompromised quality, robust enterprise software, and scalable technology partnerships.
          </p>
        </div>

        {/* Founding Journey & Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Our Journey Since 2019
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              From Regional Roots to Global Technology Solutions
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                GonjoTech was established in 2019 in Gopalganj, Bangladesh, founded with the belief that world-class software engineering and digital transformation should reach every business, from bustling metropolitan commercial centers to regional enterprises.
              </p>
              <p>
                As our portfolio expanded across custom ERP solutions, school management systems, and high-concurrency mobile applications, we established our primary operational headquarters in <strong>Mirpur-14, Dhaka</strong>, while maintaining our founding regional base in <strong>Kashiani, Gopalganj</strong>.
              </p>
              <p>
                Today, GonjoTech unites seasoned software engineers, UI/UX designers, and technology strategists delivering solutions for clients across Bangladesh, North America, Europe, and Asia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0b1322] border border-white/10">
                <span className="text-2xl font-black text-cyan-400">2019</span>
                <span className="text-xs text-slate-400 block mt-1">
                  Year of Inception
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0b1322] border border-white/10">
                <span className="text-2xl font-black text-cyan-400">100%</span>
                <span className="text-xs text-slate-400 block mt-1">
                  Quality Satisfaction Pledge
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Verified Office Locations</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 rounded-2xl bg-[#070b14] border border-white/5 space-y-1">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Primary Headquarters
                </span>
                <h4 className="font-bold text-white text-base">Dhaka Operations</h4>
                <p className="text-slate-400 text-xs">
                  {companyData.headquarters.formatted}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070b14] border border-white/5 space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Founding Regional Office
                </span>
                <h4 className="font-bold text-white text-base">Gopalganj Center</h4>
                <p className="text-slate-400 text-xs">
                  {companyData.regionalOffice.formatted}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock8 className="w-4 h-4 text-cyan-400" />
                <span>24/7 Ongoing Technical Stewardship &amp; SLA Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision (Preserving verified corporate values) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0b1322]/90 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We want to provide high-quality products to all customers. In GonjoTech, customer satisfaction is guaranteed – it’s our commitment. Quality is our first priority. We will not compromise with quality by any means. Our valued customers receive 24/7 support from us, ensuring that modern technology benefits reach every community and commercial institution with total reliability.
            </p>
          </div>

          <div className="bg-[#0b1322]/90 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We want to become one of the premier software companies recognized internationally for engineering excellence and client satisfaction. We want to empower people in regional and remote areas with the benefits of IT, embracing social responsibility and leveraging technology as a sustainable vehicle for economic progress and poverty alleviation.
            </p>
          </div>
        </div>

        {/* Leadership & Engineering Team */}
        <div className="space-y-12">
          <SectionHeader
            badge="The People Behind GonjoTech"
            title="Our Dedicated"
            highlight="Team & Leadership"
            description="Meet the verified engineers, product architects, and designers driving technology excellence across every client project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.map((member) => (
              <div
                key={member.name}
                className="bg-[#0b1322]/80 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold flex items-center justify-center text-base">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                      {member.department}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {member.specialty.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900/40 border border-white/10 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Dedicated Technology Partner?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Whether you need a dedicated development team, custom enterprise software, or an architectural audit, we are ready to build with you.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/20"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
