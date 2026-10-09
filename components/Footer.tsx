"use client";

import Link from "next/link";
import Logo from "./Logo";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#05080f] text-slate-300 border-t border-white/10 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="ambient-glow bg-cyan-600/10 w-96 h-96 -top-40 -left-40" />
      <div className="ambient-glow bg-blue-600/10 w-96 h-96 bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo showTagline />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              GonjoTech is a premium software engineering firm founded in 2019. We engineer scalable custom software, high-speed web platforms, enterprise ERP solutions, and intuitive mobile applications for businesses in Bangladesh and international markets.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Available for New Projects & Consultations</span>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Verified Services
            </p>
            <ul className="space-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About GonjoTech
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  All Capabilities
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-slate-400 hover:text-white transition-colors">
                  Developer Tools &amp; Utilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Request a Quotation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Headquarters & Contact
            </p>

            <div className="space-y-3 text-xs text-slate-400">
              {/* Primary Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Dhaka Headquarters:</span>
                  <span>{companyData.headquarters.formatted}</span>
                </div>
              </div>

              {/* Regional Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-slate-300 block">Regional Office (Origin):</span>
                  <span>{companyData.regionalOffice.formatted}</span>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+8801623473041"
                    className="hover:text-white block transition-colors font-medium text-slate-200"
                  >
                    +880 1623-473041
                  </a>
                  <a
                    href="tel:+8801736902507"
                    className="hover:text-white block transition-colors text-slate-400"
                  >
                    +880 1736-902507
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:info@gonjotech.com"
                    className="hover:text-white block transition-colors font-medium text-slate-200"
                  >
                    info@gonjotech.com
                  </a>
                  <a
                    href="mailto:gonjotech@gmail.com"
                    className="hover:text-white block transition-colors text-slate-400"
                  >
                    gonjotech@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Compliance & Status */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <p>
              &copy; 2019&ndash;{currentYear} <strong className="text-slate-300">{companyData.legalName}</strong>. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">&bull;</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Enterprise Code Quality & 24/7 SLA Support
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://gonjotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors"
            >
              <span>gonjotech.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
