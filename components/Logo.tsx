import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg p-1 ${className}`}>
      {/* Precision Geometric SVG Monogram */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/30 transition-shadow">
        <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/20" />
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-cyan-400 transform group-hover:scale-105 transition-transform"
          >
            {/* Stylized 'G' Tech Node */}
            <path
              d="M16 4L27 10.35V21.65L16 28L5 21.65V10.35L16 4Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
              className="opacity-40"
            />
            <path
              d="M16 8L23 12V20L16 24L9 20V12L16 8Z"
              stroke="url(#logo-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13V19M16 19H20"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="13" r="2" fill="#38bdf8" />
            <circle cx="20" cy="19" r="1.5" fill="#818cf8" />
            <defs>
              <linearGradient id="logo-grad" x1="9" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="0.5" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-white group-hover:text-slate-100 transition-colors">Gonjo</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-0.5">
            Tech
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 inline-block animate-pulse" />
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
            Software & Digital Solutions
          </span>
        )}
      </div>
    </Link>
  );
}
