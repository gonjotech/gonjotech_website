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
  const isPushed = useRef(false);

  useEffect(() => {
    if (isPushed.current) return;
    try {
      if (typeof window !== "undefined") {
        const windowWithAds = window as unknown as { adsbygoogle?: unknown[] };
        windowWithAds.adsbygoogle = windowWithAds.adsbygoogle || [];
        windowWithAds.adsbygoogle.push({});
        isPushed.current = true;
      }
    } catch {
      // Ignored for ad blocker or development mode
    }
  }, []);

  return (
    <div
      className={`my-8 p-3 rounded-2xl bg-[#070b14]/60 border border-white/5 text-center overflow-hidden ${className}`}
    >
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-2 select-none">
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
