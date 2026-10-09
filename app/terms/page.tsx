import type { Metadata } from "next";
import Link from "next/link";
import { companyData } from "@/data/company";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Engineering & Engagement Terms",
  description:
    "GonjoTech terms of service, engagement models, intellectual property transfer, and warranty commitments.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Service Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Last Updated: March 2025 &bull; Governing all engineering engagements with GonjoTech
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Scope of Engagement</h2>
            <p>
              These Terms of Service govern the professional engineering services, software development, cloud deployment, and consulting provided by {companyData.legalName} (&ldquo;GonjoTech&rdquo;) to clients and website users.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Proposals, Scopes &amp; Sprints</h2>
            <p>
              All software development projects proceed pursuant to an agreed Statement of Work (SOW) or sprint roadmap outlining technical architecture, deliverables, milestone schedules, and financial compensation. Changes in technical scope are governed by formal change-order procedures to ensure cost transparency.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              Upon receipt of full payment for agreed milestones, GonjoTech assigns all right, title, and interest in custom software source code, database architectures, and graphical designs developed specifically for the client. Any pre-existing open-source libraries or GonjoTech framework modules remain subject to their respective open-source or commercial licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Quality Assurance &amp; Warranty Period</h2>
            <p>
              GonjoTech provides a standard post-launch warranty period (typically 30 to 90 days as defined in individual SOWs) following production cutover to remediate any reproducible bugs, deviations from documented specifications, or stability defects without extra charge.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Client Cooperation &amp; Assets</h2>
            <p>
              Prompt project completion requires timely client feedback, provision of third-party API credentials, test data, and user acceptance sign-offs during designated sprint demo reviews.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
            <p>
              In no event shall GonjoTech be liable for indirect, incidental, or consequential damages resulting from third-party cloud infrastructure outages, unauthorized external system compromises, or client-initiated database modifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Inquiries &amp; Legal Notices</h2>
            <p>
              For formal legal inquiries, contract review, or partner agreements, contact:
            </p>
            <div className="p-4 rounded-2xl bg-[#0b1322] border border-white/10 text-xs text-slate-300 space-y-1 font-mono">
              <p>Email: legal@gonjotech.com / {companyData.primaryEmail}</p>
              <p>Headquarters: {companyData.headquarters.formatted}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
