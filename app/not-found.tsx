import Link from "next/link";
import { ArrowLeft, Home, Compass, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative inline-block">
          <span className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-400 bg-clip-text text-transparent select-none">
            404
          </span>
          <div className="ambient-glow bg-cyan-500/20 w-40 h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page or resource you are looking for has been moved, renamed, or is unavailable in the new system architecture.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-cyan-500/30 transition-all"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Explore Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-slate-500">
          Need immediate assistance?{" "}
          <Link href="/contact" className="text-cyan-400 underline hover:text-cyan-300">
            Contact Engineering Support
          </Link>
        </div>
      </div>
    </div>
  );
}
