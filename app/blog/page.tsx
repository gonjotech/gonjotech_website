import type { Metadata } from "next";
import Link from "next/link";
import { blogPostsData } from "@/data/blogPosts";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Engineering Blog | Technology Articles & Analysis",
  description:
    "Technical articles, engineering insights, and software architecture guides published by the GonjoTech engineering team.",
};

export default function BlogPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>GonjoTech Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Insights &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Technology Articles
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explorations into software architecture, enterprise system scalability, mobile engineering, and emerging technology ecosystems.
          </p>
        </div>

        {/* Featured Post (First one) */}
        {blogPostsData[0] && (
          <div className="rounded-3xl bg-gradient-to-br from-[#0c162e] via-[#0f1d3c] to-[#0c162e] border border-cyan-500/30 p-8 sm:p-12 transition-all hover:border-cyan-400/50 group">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Featured Article &bull; {blogPostsData[0].category}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {blogPostsData[0].readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                <Link href={`/blog/${blogPostsData[0].slug}`}>
                  {blogPostsData[0].title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {blogPostsData[0].excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 font-medium">
                  By {blogPostsData[0].author} &bull; {blogPostsData[0].publishedDate}
                </span>
                <Link
                  href={`/blog/${blogPostsData[0].slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Remaining Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPostsData.slice(1).map((post) => (
            <article
              key={post.slug}
              className="bg-[#0b1322]/80 border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full font-semibold uppercase tracking-wider bg-slate-800 text-cyan-300 border border-white/5">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {post.author} &bull; {post.publishedDate}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
