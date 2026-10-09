"use client";

import { useState } from "react";
import {
  Server,
  Database,
  Cpu,
  Globe,
  Terminal,
  Layers,
  Activity,
} from "lucide-react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"architecture" | "code" | "telemetry">("architecture");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 lg:mt-16">
      {/* Outer Glow Halo */}
      <div className="ambient-glow bg-cyan-500/20 w-[450px] h-[350px] -top-20 left-1/2 -translate-x-1/2" />
      <div className="ambient-glow bg-blue-600/15 w-[350px] h-[250px] top-1/2 -right-20" />

      {/* Main Terminal Shell */}
      <div className="relative rounded-3xl bg-[#090e1c]/90 border border-white/[0.12] backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#070b16]/90">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-400/30" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-400/30" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-400/30" />
            <span className="ml-3 font-mono text-[11px] text-slate-400 select-none">
              gonjotech-core-engine &bull; v5.2.0-prod
            </span>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 bg-[#0b1222] p-1 rounded-xl border border-white/5">
            <button
              type="button"
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "architecture"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>System Topology</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "code"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>API Schema</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("telemetry")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "telemetry"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Telemetry</span>
            </button>
          </div>
        </div>

        {/* Tab 1: System Topology Visual */}
        {activeTab === "architecture" && (
          <div className="p-6 sm:p-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative z-10 items-center">
              {/* Node 1: Edge & Client Ingress */}
              <div className="p-5 rounded-2xl bg-[#0c1429] border border-cyan-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300">
                    Ingress
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Client Edge</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Web, Android, iOS &amp; POS
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>SSL / TLS 1.3</span>
                  <span className="text-emerald-400 font-mono">18ms</span>
                </div>
              </div>

              {/* Node 2: Next.js & API Gateway */}
              <div className="p-5 rounded-2xl bg-[#0e1730] border border-blue-500/30 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <Server className="w-6 h-6 text-blue-400" />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300">
                    App Router
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Next.js Gateway</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    SSR, Microservices &amp; REST
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Concurrency</span>
                  <span className="text-cyan-400 font-mono">50k req/s</span>
                </div>
              </div>

              {/* Node 3: Enterprise GonjoERP Engine */}
              <div className="p-5 rounded-2xl bg-[#111c38] border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <Cpu className="w-6 h-6 text-indigo-400" />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300">
                    GonjoERP
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Business Logic</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Multi-Tenant Accounting &amp; POS
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Job Queue</span>
                  <span className="text-emerald-400 font-mono">0 lag</span>
                </div>
              </div>

              {/* Node 4: High-Performance Database Cluster */}
              <div className="p-5 rounded-2xl bg-[#0c1429] border border-cyan-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <Database className="w-6 h-6 text-cyan-400" />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300">
                    PostgreSQL
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ACID Storage</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Replicated Read-Replicas
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Durability</span>
                  <span className="text-cyan-400 font-mono">99.999%</span>
                </div>
              </div>
            </div>

            {/* Live Status Bar */}
            <div className="mt-6 p-4 rounded-2xl bg-[#060a14] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Real-Time Production Cluster:</span>
                <span className="text-slate-400 font-mono">DHAKA-DC1 &bull; KAFRUL EDGE</span>
              </div>
              <div className="flex items-center gap-6 font-mono text-[11px] text-slate-400">
                <span>Latency: <strong className="text-emerald-400">&lt;24ms</strong></span>
                <span>Active Clients: <strong className="text-cyan-400">100%</strong></span>
                <span>SLA Support: <strong className="text-indigo-400">24/7</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: API Code Spec */}
        {activeTab === "code" && (
          <div className="p-6 sm:p-8 font-mono text-xs text-slate-300 bg-[#060a14] overflow-x-auto leading-relaxed">
            <pre className="text-slate-300">
              <span className="text-slate-500">{"// GonjoTech Enterprise Service Definition"}</span>{"\n"}
              <span className="text-indigo-400">interface</span> <span className="text-cyan-300">EnterpriseDeployment</span> &#123;{"\n"}
              {"  "}project: <span className="text-emerald-300">&quot;GonjoERP Cloud Suite&quot;</span>;{"\n"}
              {"  "}version: <span className="text-amber-300">&quot;2025.4.0&quot;</span>;{"\n"}
              {"  "}database: &#123; engine: <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>, acidCompliant: <span className="text-cyan-400">true</span> &#125;;{"\n"}
              {"  "}integrations: [ <span className="text-emerald-300">&quot;Web Portal&quot;</span>, <span className="text-emerald-300">&quot;Android SDK&quot;</span>, <span className="text-emerald-300">&quot;iOS App&quot;</span>, <span className="text-emerald-300">&quot;Hardware POS&quot;</span> ];{"\n"}
              {"  "}security: &#123; encryption: <span className="text-emerald-300">&quot;AES-256-GCM&quot;</span>, owaspCompliant: <span className="text-cyan-400">true</span> &#125;;{"\n"}
              {"  "}slaSupport: <span className="text-emerald-300">&quot;24/7 Dedicated Technical Standby&quot;</span>;{"\n"}
              &#125;
            </pre>
          </div>
        )}

        {/* Tab 3: Telemetry */}
        {activeTab === "telemetry" && (
          <div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#060a14]">
            <div className="p-4 rounded-xl bg-[#0c1429] border border-white/5">
              <span className="text-[11px] text-slate-400 block">System Availability</span>
              <span className="text-2xl font-bold text-emerald-400 font-mono mt-1 block">99.98%</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Continuous SLA Monitoring</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0c1429] border border-white/5">
              <span className="text-[11px] text-slate-400 block">API Response P95</span>
              <span className="text-2xl font-bold text-cyan-400 font-mono mt-1 block">&lt;45ms</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Edge-Accelerated Cache</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0c1429] border border-white/5">
              <span className="text-[11px] text-slate-400 block">Security Hardening</span>
              <span className="text-2xl font-bold text-indigo-400 font-mono mt-1 block">OWASP A+</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Zero Known Vulnerabilities</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0c1429] border border-white/5">
              <span className="text-[11px] text-slate-400 block">Code Ownership</span>
              <span className="text-2xl font-bold text-white font-mono mt-1 block">100% IP</span>
              <span className="text-[10px] text-slate-500 mt-1 block">Exclusive Client Rights</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
