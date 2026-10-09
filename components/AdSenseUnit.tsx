"use client";

import { useEffect, useRef } from "react";

interface AdSenseUnitProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

export default function AdSenseUnit({
  slot = "7244702911", // Verified AdSense Slot ID from original website
  format = "auto",
  responsive = true,
  className = "",
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // Safe push into adsbygoogle queue
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
          (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      }
    } catch (err) {
      // Ad blocker or initial load suppression
      console.warn("[AdSense Error/AdBlocker active]:", err);
    }
  }, []);

  return (
    <div
      className={`my-8 p-3 rounded-2xl bg-[#070b14]/60 border border-white/5 text-center overflow-hidden ${className}`}
    >
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 select-none">
        Advertisement
      </div>
      <div className="flex items-center justify-center min-h-[90px] overflow-hidden">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2859421916525978"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}
