"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdSenseUnit from "@/components/AdSenseUnit";
import {
  Eye,
  FileText,
  Monitor,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function ToolsPage() {
  // --- Tool 1: 20-20-20 Eye Strain Timer ---
  const [secondsLeft, setSecondsLeft] = useState(20 * 60); // 20 minutes
  const [isActive, setIsActive] = useState(false);
  const [isRestPhase, setIsRestPhase] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }
        setIsRestPhase((currentPhase) => {
          const nextPhase = !currentPhase;
          return nextPhase;
        });
        return isRestPhase ? 20 * 60 : 20;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, isRestPhase]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setIsRestPhase(false);
    setSecondsLeft(20 * 60);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeFormatted = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // --- Tool 2: Screen & Viewport Inspector ---
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    height: 0,
    dpr: 1,
    orientation: "landscape",
  });

  useEffect(() => {
    const updateDimensions = () => {
      setScreenInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio || 1,
        orientation: window.innerWidth > window.innerHeight ? "Landscape" : "Portrait",
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // --- Tool 3: Document Text & Word Counter ---
  const [textInput, setTextInput] = useState("");
  const wordCount = textInput.trim() ? textInput.trim().split(/\s+/).length : 0;
  const charCount = textInput.length;
  const readingTimeEstimate = Math.ceil(wordCount / 200);

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-400 font-medium">Digital Utilities &amp; Developer Tools</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GonjoTech Utilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Digital Utilities &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Developer Tools
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Free browser-based tools built for remote professionals, software developers, and content creators. High performance, zero tracking, entirely local.
          </p>
        </div>

        {/* AdSense Unit */}
        <AdSenseUnit slot="7244702911" />

        {/* Grid of Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tool 1: 20-20-20 Eye Care Companion */}
          <div className="bg-[#0b1322] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">20-20-20 Eye Strain Timer</h2>
                  <p className="text-xs text-slate-400">Digital Wellness for Screen Workers</p>
                </div>
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-mono font-semibold ${
                  isRestPhase
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                }`}
              >
                {isRestPhase ? "Rest Phase" : "Focus Phase"}
              </span>
            </div>

            <div className="text-center py-6 bg-[#070b14] rounded-2xl border border-white/5 space-y-2">
              <div className="text-5xl sm:text-6xl font-mono font-extrabold text-white tracking-wider">
                {timeFormatted}
              </div>
              <p className="text-xs text-slate-400">
                {isRestPhase
                  ? "Look at an object 20 feet (6m) away for 20 seconds!"
                  : "Work normally. Next eye stretch in 20 minutes."}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={toggleTimer}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                {isActive ? (
                  <>
                    <Pause className="w-3.5 h-3.5" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" /> Start Timer
                  </>
                )}
              </button>

              <button
                onClick={resetTimer}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            <div className="text-xs text-slate-400 space-y-2 pt-2 border-t border-white/5">
              <p className="font-semibold text-slate-300">Why the 20-20-20 Rule?</p>
              <p className="leading-relaxed">
                Staring at monitors reduces blink rate by 60%, causing computer vision syndrome. Taking a 20-second break every 20 minutes relaxes the ciliary muscles in the eyes and prevents chronic digital strain.
              </p>
            </div>
          </div>

          {/* Tool 2: Viewport & Screen Inspector */}
          <div className="bg-[#0b1322] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Live Viewport Inspector</h2>
                  <p className="text-xs text-slate-400">Real-time Breakpoint &amp; Resolution Telemetry</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#070b14] border border-white/5">
                  <div className="text-xs text-slate-400">Viewport Width</div>
                  <div className="text-2xl font-bold font-mono text-cyan-300">{screenInfo.width}px</div>
                </div>
                <div className="p-4 rounded-xl bg-[#070b14] border border-white/5">
                  <div className="text-xs text-slate-400">Viewport Height</div>
                  <div className="text-2xl font-bold font-mono text-cyan-300">{screenInfo.height}px</div>
                </div>
                <div className="p-4 rounded-xl bg-[#070b14] border border-white/5">
                  <div className="text-xs text-slate-400">Device Pixel Ratio (DPR)</div>
                  <div className="text-2xl font-bold font-mono text-white">{screenInfo.dpr}x</div>
                </div>
                <div className="p-4 rounded-xl bg-[#070b14] border border-white/5">
                  <div className="text-xs text-slate-400">Orientation</div>
                  <div className="text-2xl font-bold font-mono text-white">{screenInfo.orientation}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300 space-y-1">
              <span className="font-semibold block">Tailwind Breakpoint:</span>
              <span className="font-mono">
                {screenInfo.width >= 1536
                  ? "2xl (>= 1536px)"
                  : screenInfo.width >= 1280
                  ? "xl (>= 1280px)"
                  : screenInfo.width >= 1024
                  ? "lg (>= 1024px)"
                  : screenInfo.width >= 768
                  ? "md (>= 768px)"
                  : screenInfo.width >= 640
                  ? "sm (>= 640px)"
                  : "Default Mobile (< 640px)"}
              </span>
            </div>
          </div>
        </div>

        {/* Tool 3: Document & Text Word Counter */}
        <div className="bg-[#0b1322] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Document &amp; Text Content Inspector</h2>
              <p className="text-xs text-slate-400">Word count, character count, and reading duration</p>
            </div>
          </div>

          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            rows={5}
            placeholder="Paste your document excerpt, article draft, or code notes here..."
            className="w-full rounded-2xl bg-[#070b14] border border-white/10 p-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-y"
          />

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-[#070b14] rounded-xl border border-white/5">
              <div className="text-xs text-slate-400">Words</div>
              <div className="text-xl font-bold font-mono text-cyan-300">{wordCount}</div>
            </div>
            <div className="p-3 bg-[#070b14] rounded-xl border border-white/5">
              <div className="text-xs text-slate-400">Characters</div>
              <div className="text-xl font-bold font-mono text-white">{charCount}</div>
            </div>
            <div className="p-3 bg-[#070b14] rounded-xl border border-white/5">
              <div className="text-xs text-slate-400">Estimated Read Time</div>
              <div className="text-xl font-bold font-mono text-indigo-300">{readingTimeEstimate} min</div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-900/30 border border-cyan-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need a Custom Digital Tool or Enterprise Web App?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              GonjoTech builds customized ERP suites, real-time logistics portals, and client web dashboards tailored to your exact business specifications.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center gap-2 transition-all flex-shrink-0"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
