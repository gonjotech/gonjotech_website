export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  foundedYear: number;
  founder: string;
  headquarters: {
    street: string;
    area: string;
    city: string;
    country: string;
    formatted: string;
  };
  regionalOffice: {
    street: string;
    area: string;
    district: string;
    postalCode: string;
    country: string;
    formatted: string;
  };
  phones: string[];
  primaryPhone: string;
  whatsappPhone: string;
  emails: string[];
  primaryEmail: string;
  website: string;
  socials: {
    linkedin?: string;
    github?: string;
    facebook?: string;
    twitter?: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "GonjoTech",
  legalName: "GonjoTech Software & Digital Solutions",
  tagline: "High-Performance Engineering & Modern Digital Solutions",
  headline: "Turning Bold Ideas Into Powerful Digital Solutions.",
  subheadline:
    "We build modern digital experiences, intelligent software, and enterprise-grade technology solutions that help businesses innovate, operate smarter, and scale with confidence.",
  foundedYear: 2019,
  founder: "Hossain",
  headquarters: {
    street: "A-1, Lift-07, House 494/1, Ashidag Road",
    area: "Ibrahimpur, Mirpur-14",
    city: "Dhaka",
    country: "Bangladesh",
    formatted: "A-1, Lift-07, House 494/1, Ashidag Road, Ibrahimpur, Mirpur-14, Dhaka, Bangladesh",
  },
  regionalOffice: {
    street: "House 135, Road 4, Rajpat",
    area: "Kashiani",
    district: "Gopalganj",
    postalCode: "8133",
    country: "Bangladesh",
    formatted: "House 135, Road 4, Rajpat, Kashiani, Gopalganj-8133, Bangladesh",
  },
  phones: ["+880 1623-473041", "+880 1736-902507"],
  primaryPhone: "+880 1623-473041",
  whatsappPhone: "+8801736902507",
  emails: ["info@gonjotech.com", "gonjotech@gmail.com"],
  primaryEmail: "info@gonjotech.com",
  website: "https://gonjotech.com",
  socials: {
    facebook: "https://facebook.com/gonjotech",
    linkedin: "https://linkedin.com/company/gonjotech",
    github: "https://github.com/gonjotech",
  },
  stats: [
    {
      label: "Years of Experience",
      value: "5+",
      description: "Founded in 2019, delivering software solutions worldwide.",
    },
    {
      label: "Verified Services",
      value: "6+",
      description: "From custom ERP to native mobile applications.",
    },
    {
      label: "Client Satisfaction",
      value: "100%",
      description: "Committed to quality with 24/7 post-launch technical support.",
    },
    {
      label: "Core Technologies",
      value: "15+",
      description: "Next.js, React, Node, Python, Java, Spring Boot, Laravel, Mobile.",
    },
  ],
  pillars: [
    {
      title: "Thoughtful Engineering",
      description:
        "Every line of code is structured for maintainability, high performance, and long-term business scalability.",
      icon: "Code2",
    },
    {
      title: "Security & Reliability",
      description:
        "Built-in data privacy, automated testing, and hardened security controls protecting client intellectual property.",
      icon: "ShieldCheck",
    },
    {
      title: "Business-First Architecture",
      description:
        "We align technology decisions directly with ROI, workflow velocity, and tangible customer conversion.",
      icon: "TrendingUp",
    },
    {
      title: "24/7 Post-Launch Support",
      description:
        "Long-term engineering stewardship, proactive monitoring, SLA-backed maintenance, and iterative upgrades.",
      icon: "Clock8",
    },
  ],
};
