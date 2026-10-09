"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: servicesData[0]?.title || "Custom Software Development",
    budget: "$2,000 - $5,000",
    message: "",
    privacyConsent: false,
    honeypot: "", // hidden field for bot spam trap
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const budgetOptions = [
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
    "Not sure / Let's discuss",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Client-side quick check
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg("Please write at least 10 characters detailing your project.");
      return;
    }
    if (!formData.privacyConsent) {
      setErrorMsg("Please acknowledge the Privacy Policy to proceed.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to send inquiry. Please try again.");
      }

      setSuccessData({
        referenceId: data.data?.referenceId || "GT-CONFIRMED",
        message: data.message,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to connect to inquiry server. Please email info@gonjotech.com directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-[#0b1322] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl shadow-cyan-500/10 animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Inquiry Dispatched Successfully
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Thank You for Reaching Out!
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {successData.message}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300 font-mono">
          <span>Inquiry Reference:</span>
          <span className="text-cyan-400 font-bold">{successData.referenceId}</span>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setSuccessData(null);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: servicesData[0]?.title || "Custom Software Development",
                budget: "$2,000 - $5,000",
                message: "",
                privacyConsent: false,
                honeypot: "",
              });
            }}
            className="px-6 py-2.5 text-sm font-semibold rounded-xl text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0b1322]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
      noValidate
    >
      {/* Honeypot field for bot suppression */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Leave this empty</label>
        <input
          id="website_url_hp"
          type="text"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Tell Us About Your Project
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Fill out the details below. We reply with technical proposals in under 24 hours.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
          <ShieldCheck className="w-4 h-4" />
          <span>Confidential &amp; NDA Ready</span>
        </div>
      </div>

      {errorMsg && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Your Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Morgan"
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Business Email <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm transition-all"
          />
        </div>
      </div>

      {/* Row 2: Phone and Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Phone / WhatsApp <span className="text-slate-500">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000 or +880..."
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Company / Organization <span className="text-slate-500">(Optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Acme Innovations Ltd."
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm transition-all"
          />
        </div>
      </div>

      {/* Row 3: Service Selection & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Service Required <span className="text-cyan-400">*</span>
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm transition-all"
          >
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="General Software Consulting">General Software Consulting</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Estimated Budget <span className="text-slate-500">(Optional)</span>
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm transition-all"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Project Description */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Project Goals &amp; Overview <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe what you want to build, key features, target timeline, or existing infrastructure..."
          className="w-full px-4 py-3 rounded-xl bg-[#070b14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm transition-all resize-y"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="privacyConsent"
          type="checkbox"
          required
          checked={formData.privacyConsent}
          onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
          className="mt-1 w-4 h-4 rounded text-cyan-500 bg-[#070b14] border-white/20 focus:ring-cyan-400 focus:ring-offset-0"
        />
        <label htmlFor="privacyConsent" className="text-xs text-slate-400 leading-normal">
          I consent to GonjoTech processing my inquiry details in accordance with the{" "}
          <Link href="/privacy" className="text-cyan-400 underline hover:text-cyan-300">
            Privacy Policy
          </Link>
          . We protect your information with strict confidentiality.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-cyan-200" />
            <span>Transmitting Inquiry...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Send Project Inquiry</span>
            <Send className="w-4 h-4 text-cyan-200 ml-1" />
          </>
        )}
      </button>
    </form>
  );
}
