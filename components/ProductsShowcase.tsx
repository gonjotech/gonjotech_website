import Link from "next/link";
import {
  Layers,
  GraduationCap,
  Store,
  Calculator,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    id: "gonjo-erp",
    name: "GonjoERP",
    tagline: "Enterprise Resource Planning Suite",
    description:
      "A complete enterprise management platform synchronizing inventory across multi-location warehouses, double-entry accounting, and sales dispatch.",
    features: [
      "Multi-Warehouse Inventory & SKU Tracking",
      "Automated Double-Entry Ledger & Balance Sheet",
      "Purchase Order Approval Hierarchies",
      "Multi-Currency & VAT Compliance",
    ],
    metric: "75%",
    metricLabel: "Reduction in Reconciliation Overhead",
    icon: Layers,
    accent: "from-blue-600/30 via-cyan-500/10 to-transparent",
    badge: "Enterprise Flagship",
    link: "/portfolio/gonjo-erp-enterprise-suite",
  },
  {
    id: "gonjo-edu",
    name: "GonjoEducation",
    tagline: "School, College & University OS",
    description:
      "Comprehensive academic lifecycle platform managing student enrollment, attendance biometric sync, examination grading, and online fees.",
    features: [
      "Student & Guardian Portal with Real-Time SMS",
      "Digital Fee Reconciliation (bKash, Cards)",
      "Automated Semester Gradebook & Report Cards",
      "Biometric Device Integration for Attendance",
    ],
    metric: "90%",
    metricLabel: "Faster Report Card Generation",
    icon: GraduationCap,
    accent: "from-indigo-600/30 via-violet-500/10 to-transparent",
    badge: "Academic Sector",
    link: "/portfolio/gonjo-education-management",
  },
  {
    id: "retail-pos",
    name: "eCommerce & POS",
    tagline: "Omnichannel Retail Management",
    description:
      "High-speed Point-of-Sale desktop system paired with an ultrafast consumer digital storefront sharing real-time synchronized stock.",
    features: [
      "Offline-First Barcode Scanner POS Terminal",
      "Websocket Stock Sync Across Web & Physical Stores",
      "Thermal Receipt & Invoicing Hardware Driver",
      "Customer Loyalty & Discount Engine",
    ],
    metric: "<150ms",
    metricLabel: "Cross-Store Inventory Sync Latency",
    icon: Store,
    accent: "from-cyan-600/30 via-teal-500/10 to-transparent",
    badge: "Retail & Commerce",
    link: "/portfolio/omnichannel-retail-pos-ecommerce",
  },
  {
    id: "accounting-inventory",
    name: "Inventory & Accounting",
    tagline: "Financial Intelligence & Asset Tracking",
    description:
      "Dedicated ledger balancing and FIFO stock evaluation software preventing revenue leakage and manual spreadsheet errors.",
    features: [
      "FIFO Stock Valuation & Expiry Alerts",
      "Automated Bank Reconciliation",
      "Granular Role-Based Audit Trails",
      "Executive Financial Dashboard & Cash Flow Forecasting",
    ],
    metric: "99.4%",
    metricLabel: "Physical Stock Count Accuracy",
    icon: Calculator,
    accent: "from-emerald-600/30 via-blue-500/10 to-transparent",
    badge: "Financial Engine",
    link: "/services/enterprise-erp-solutions",
  },
];

export default function ProductsShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((prod) => {
        const Icon = prod.icon;
        return (
          <div
            key={prod.id}
            className="group relative rounded-3xl bg-[#090e1d]/90 border border-white/[0.09] hover:border-cyan-500/30 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Corner Radial Accent */}
            <div
              className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${prod.accent} rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`}
            />

            <div className="relative z-10">
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0c1429] border border-white/10 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-lg">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {prod.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {prod.name}
              </h3>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                {prod.tagline}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {prod.description}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                {prod.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric & CTA Footer */}
            <div className="relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                  {prod.metric}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {prod.metricLabel}
                </span>
              </div>

              <Link
                href={prod.link}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all group/btn"
              >
                <span>Explore Solution</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
