import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { companyData } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gonjotech.com"),
  title: {
    default: "GonjoTech | Custom Software, Web & Mobile Engineering",
    template: "%s | GonjoTech",
  },
  description:
    "GonjoTech is a premium digital technology brand engineering custom software, modern web platforms, GonjoERP suites, and native mobile applications for businesses in Bangladesh and worldwide.",
  keywords: [
    "GonjoTech",
    "software development Bangladesh",
    "custom software development",
    "web development company Dhaka",
    "mobile app development Android iOS",
    "GonjoERP",
    "ERP software Bangladesh",
    "IT company Gopalganj Dhaka",
    "software testing QA",
    "Next.js web development",
  ],
  authors: [{ name: "GonjoTech", url: "https://gonjotech.com" }],
  creator: "GonjoTech",
  publisher: "GonjoTech Software & Digital Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GonjoTech | Custom Software, Web & Mobile Engineering",
    description:
      "Turning bold ideas into powerful digital solutions. Enterprise software, web development, ERP platforms, and mobile apps engineered for scale.",
    url: "https://gonjotech.com",
    siteName: "GonjoTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GonjoTech | Custom Software & Modern Digital Solutions",
    description:
      "Enterprise software, responsive web portals, mobile apps, and GonjoERP solutions engineered for international performance.",
    creator: "@gonjotech",
  },
  alternates: {
    canonical: "https://gonjotech.com",
  },
  verification: {
    google: "3BgPy8fSQHUjJkNgLH_Ia4gJ5fwCLPYnEnhfUf0S4jA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: companyData.name,
    legalName: companyData.legalName,
    url: companyData.website,
    foundingDate: "2019",
    founder: {
      "@type": "Person",
      name: companyData.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.headquarters.street,
      addressLocality: companyData.headquarters.area,
      addressRegion: companyData.headquarters.city,
      addressCountry: companyData.headquarters.country,
    },
    telephone: companyData.primaryPhone,
    email: companyData.primaryEmail,
    sameAs: [
      companyData.socials.facebook,
      companyData.socials.linkedin,
      companyData.socials.github,
    ].filter(Boolean),
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense Script Integration */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2859421916525978"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
