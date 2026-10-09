import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { companyData } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock8,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project with GonjoTech",
  description:
    "Get in touch with GonjoTech engineering. Request a project proposal, schedule a technical consultation, or visit our offices in Mirpur-14 Dhaka and Kashiani Gopalganj.",
};

export default function ContactPage() {
  const cleanNumber = companyData.whatsappPhone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    "Hello GonjoTech! I would like to discuss a new software project."
  )}`;

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Direct Engineering Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Exceptional Together.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your business goals, technical requirements, or custom software roadmap. We evaluate scope and reply with architectural feedback within 24 hours.
          </p>
        </div>

        {/* Contact Layout: Form (Left 7 cols) & Information (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Company Details & Verified Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Instant Channels Card */}
            <div className="bg-[#0b1322] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock8 className="w-5 h-5 text-cyan-400" />
                <span>Verified Direct Channels</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                {/* Phone Lines */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#070b14] border border-white/5">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Direct Phone Lines
                    </span>
                    <a
                      href="tel:+8801736902507"
                      className="text-white hover:text-cyan-400 font-semibold block transition-colors mt-0.5"
                    >
                      +880 1736-902507
                    </a>
                    <a
                      href="tel:+8801623473041"
                      className="text-slate-400 hover:text-white block transition-colors"
                    >
                      +880 1623-473041
                    </a>
                  </div>
                </div>

                {/* Email Inboxes */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#070b14] border border-white/5">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Business Email
                    </span>
                    <a
                      href="mailto:info@gonjotech.com"
                      className="text-white hover:text-cyan-400 font-semibold block transition-colors mt-0.5"
                    >
                      info@gonjotech.com
                    </a>
                    <a
                      href="mailto:gonjotech@gmail.com"
                      className="text-slate-400 hover:text-white block transition-colors"
                    >
                      gonjotech@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-emerald-200 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Direct WhatsApp Chat
                      </span>
                      <span className="text-[11px] text-emerald-400/80">
                        Quick response for urgent inquiries
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Chat &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-[#0b1322] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Our Physical Offices</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-3.5 rounded-2xl bg-[#070b14] border border-white/5 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">
                    Dhaka Headquarters
                  </span>
                  <p className="text-white font-medium">
                    {companyData.headquarters.street}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {companyData.headquarters.area}, {companyData.headquarters.city}, {companyData.headquarters.country}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#070b14] border border-white/5 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Founding Regional Office
                  </span>
                  <p className="text-white font-medium">
                    {companyData.regionalOffice.street}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {companyData.regionalOffice.area}, {companyData.regionalOffice.district}-{companyData.regionalOffice.postalCode}, {companyData.regionalOffice.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-[#070b14] border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-semibold">
                  24-Hour Guaranteed Turnaround
                </strong>
                We review specifications and respond with preliminary technical proposals promptly.
              </div>
            </div>
          </div>
        </div>

        {/* Verified Google Map Embed Section */}
        <div className="bg-[#0b1322] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Locate GonjoTech on Google Maps</span>
              </h2>
              <p className="text-xs text-slate-400">
                House 351, Matbar Bari Sarak, Mirpur-14, Dhaka, Bangladesh
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 w-fit">
              Latitude: 23.8001 | Longitude: 90.3713
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12225.788366065364!2d90.37137683979944!3d23.800169823603706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72e56f9eab9%3A0xf8e3069720ec7a42!2sKafrul%20Police%20Station!5e1!3m2!1sen!2sbd!4v1747799282505!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GonjoTech Dhaka Headquarters Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
