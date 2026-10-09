"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, ArrowRight, PhoneCall, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070b14]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30 py-3.5"
            : "bg-[#070b14]/60 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full bg-[#090f20]/75 border border-white/[0.08] backdrop-blur-xl shadow-inner"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                      isActive
                        ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+8801736902507"
                className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 font-medium transition-colors px-2 py-1"
                title="Direct Phone Line"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>+880 1736-902507</span>
              </a>

              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all active:scale-[0.98] group"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-200 group-hover:rotate-12 transition-transform" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/contact"
                className="text-xs px-2.5 py-1.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium"
              >
                Let&apos;s Talk
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
                aria-expanded={isOpen}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20 bg-[#070b14]/95 backdrop-blur-2xl transition-all">
          <div className="px-6 py-6 space-y-3 max-w-md mx-auto">
            <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 px-3">
              Navigation Menu
            </p>
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                        : "text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-center pt-2">
                <a
                  href="tel:+8801736902507"
                  className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 font-medium"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call Us: +880 1736-902507</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
