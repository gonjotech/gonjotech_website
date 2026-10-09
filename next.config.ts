import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogsc",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/company",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/services-software-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services-website-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services-mobile-apps-development",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/services-digital-marketing",
        destination: "/services/digital-marketing-seo",
        permanent: true,
      },
      {
        source: "/what-is-object-oriantation",
        destination: "/blog/what-is-object-orientation-in-modern-software",
        permanent: true,
      },
      {
        source: "/how-to-convert-website-to-mobile-app",
        destination: "/blog/how-to-convert-website-to-mobile-app",
        permanent: true,
      },
      {
        source: "/virtual-reality",
        destination: "/blog/virtual-reality-and-modern-digital-simulation",
        permanent: true,
      },
      {
        source: "/top-3-programming-languages-to-learn-in-2020",
        destination: "/blog/top-programming-languages-for-enterprise-software",
        permanent: true,
      },
      {
        source: "/freelancing-as-a-career",
        destination: "/blog/tech-talent-and-global-outsourcing-in-bangladesh",
        permanent: true,
      },
      {
        source: "/motin-mia-a-fairytale-bangladeshi-footballer",
        destination: "/blog/motin-mia-a-fairytale-bangladeshi-footballer",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

