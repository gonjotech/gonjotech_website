import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPostsData } from "@/data/blogPosts";
import AdSenseUnit from "@/components/AdSenseUnit";
import {
  ChevronRight,
  Clock,
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Info,
  Code,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  const canonicalUrl = `https://gonjotech.com/blog/${post.slug}`;

  return {
    title: `${post.title} | GonjoTech Insights`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | GonjoTech Insights`,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      publishedTime: post.publishedDate,
      authors: [post.author],
      siteName: "GonjoTech",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPostsData.filter((p) => p.slug !== slug).slice(0, 2);

  // Schema.org BlogPosting JSON-LD for AdSense and Google Rich Results
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://gonjotech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "GonjoTech",
      url: "https://gonjotech.com",
      logo: {
        "@type": "ImageObject",
        url: "https://gonjotech.com/public/images/logo/GonjoTech.png",
      },
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gonjotech.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    inLanguage: "en-US",
  };

  return (
    <div className="py-12 lg:py-20">
      {/* BlogPosting Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        suppressHydrationWarning
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/blog" className="hover:text-white transition-colors">
            Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-400 font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3.5 py-1.5 rounded-full font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {post.category}
            </span>
            <span className="text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 text-xs text-slate-400 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center font-bold text-cyan-300 text-sm">
                GT
              </div>
              <div>
                <span className="font-semibold text-white block">{post.author}</span>
                <span className="text-[11px] text-slate-400">Dhaka &bull; Enterprise Solutions Lab</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[11px] text-slate-500">Verified Technical Content</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </header>

        {/* Lead Summary Overview Box */}
        <div className="p-6 rounded-2xl bg-[#091122] border border-cyan-500/20 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400" />
            Executive Summary &amp; Overview
          </h2>
          <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Top In-Article AdSense Unit */}
        <AdSenseUnit slot="7244702911" className="my-6" />

        {/* Detailed Structured Sections */}
        <article className="space-y-12">
          {post.sections && post.sections.length > 0 ? (
            post.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-4 border-t border-white/5">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Bullet Points if provided */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-3 bg-[#0c162e]/70 border border-white/5 rounded-2xl p-5 sm:p-6 my-4">
                    {section.bulletPoints.map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Code Block if provided */}
                {section.codeBlock && (
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#060a12] my-6">
                    <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="uppercase">{section.codeBlock.language}</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Production Pattern</span>
                    </div>
                    <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-cyan-200/90 overflow-x-auto leading-relaxed">
                      <code>{section.codeBlock.code}</code>
                    </pre>
                  </div>
                )}

                {/* Callout box if provided */}
                {section.callout && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/30 border-l-4 border-cyan-400 text-sm sm:text-base text-cyan-200 my-6">
                    {section.callout}
                  </div>
                )}

                {/* Mid-Article AdSense placement after 2nd section */}
                {sIdx === 1 && <AdSenseUnit slot="7244702911" className="my-8" />}
              </div>
            ))
          ) : (
            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              {post.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}
        </article>

        {/* Bottom AdSense Unit */}
        <AdSenseUnit slot="7244702911" className="my-10" />

        {/* Navigation & Related Content */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
            >
              Consult GonjoTech Engineers
            </Link>
          </div>

          {otherPosts.length > 0 && (
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-bold text-white">Related Insights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="p-5 rounded-2xl bg-[#0b1322] border border-white/10 hover:border-cyan-500/30 transition-all block group"
                  >
                    <span className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                      {p.category} &bull; {p.readTime}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {p.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
