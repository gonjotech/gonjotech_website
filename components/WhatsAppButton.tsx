"use client";

import { MessageCircle } from "lucide-react";
import { companyData } from "@/data/company";

export default function WhatsAppButton() {
  const cleanNumber = companyData.whatsappPhone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    "Hello GonjoTech! I would like to inquire about your software and web development services."
  )}`;

  return (
    <aside
      aria-label="Direct Support"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GonjoTech on WhatsApp"
        className="flex items-center gap-2 px-3.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 hover:shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 border border-emerald-400/30"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
