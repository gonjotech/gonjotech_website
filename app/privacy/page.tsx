import type { Metadata } from "next";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Client Data & Confidentiality",
  description:
    "GonjoTech's privacy commitments, intellectual property security standards, and personal data protection policies.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Legal Notice</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Last Updated: March 2025 &bull; Effective for all GonjoTech services and domains
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction &amp; Commitment</h2>
            <p>
              GonjoTech (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to safeguarding the privacy, confidentiality, and intellectual property of visitors, clients, and partners who access our website at{" "}
              <a href={companyData.website} className="text-cyan-400 underline">
                https://gonjotech.com
              </a>{" "}
              and contract our custom software engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              When you submit a project inquiry, request a technical quotation, or communicate with our engineering leads, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Full name, professional title, and organization name.</li>
              <li>Business email address, telephone / WhatsApp contact numbers.</li>
              <li>Project scope specifications, budget ranges, and architectural requirements.</li>
              <li>Technical telemetry and anonymous web server logs (browser type, IP address, referral URLs) to prevent automated security breaches.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How Information Is Utilized</h2>
            <p>Collected information is used exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Assess project feasibility and draft customized architectural proposals.</li>
              <li>Communicate directly regarding active sprint milestones and engineering deliverables.</li>
              <li>Provide ongoing 24/7 technical maintenance and SLA customer support.</li>
              <li>Ensure system security and prevent automated malicious intrusions.</li>
            </ul>
            <p>
              We never sell, rent, monetize, or trade client personal information or proprietary project briefs to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Confidentiality &amp; Non-Disclosure (NDA)</h2>
            <p>
              All proprietary project requirements, business processes, diagrams, and codebase repositories shared with GonjoTech are treated with strict confidentiality. We routinely execute bilateral Non-Disclosure Agreements (NDAs) prior to project discovery upon request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Intellectual Property Ownership</h2>
            <p>
              Unless explicitly agreed otherwise in a customized software license contract, 100% full intellectual property ownership, copyright, and source code rights for bespoke deliverables transfer to the client upon full milestone settlement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Security &amp; Data Safeguards</h2>
            <p>
              We enforce HTTPS TLS encryption across all network transfers, maintain role-based access controls on engineering repositories, and adhere to strict server hardening standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Contact the Data Protection Officer</h2>
            <p>
              If you have inquiries concerning this policy or wish to exercise data rights under applicable privacy frameworks, please contact our team:
            </p>
            <div className="p-4 rounded-2xl bg-[#0b1322] border border-white/10 text-xs text-slate-300 space-y-1 font-mono">
              <p>Email: {companyData.primaryEmail}</p>
              <p>Phone: {companyData.primaryPhone}</p>
              <p>Address: {companyData.headquarters.formatted}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
