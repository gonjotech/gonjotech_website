export interface TeamMember {
  name: string;
  role: string;
  department: "Leadership" | "Engineering" | "Design" | "Operations";
  bio: string;
  specialty: string[];
}

export const teamData: TeamMember[] = [
  {
    name: "Hossain",
    role: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader behind GonjoTech since its 2019 inception, committed to delivering uncompromising software quality and expanding IT benefits across Bangladesh and global markets.",
    specialty: ["Strategic Direction", "Product Strategy", "Enterprise Delivery"],
  },
  {
    name: "Abdus Sahid",
    role: "Head of Technical",
    department: "Engineering",
    bio: "Directs technology architecture and engineering standards across custom software and cloud systems, ensuring strict security, scalability, and code maintainability.",
    specialty: ["System Architecture", "Cloud Infrastructure", "Full-Stack Engineering"],
  },
  {
    name: "Rajib Hossain",
    role: "Project Manager",
    department: "Leadership",
    bio: "Leads agile delivery pipelines, client communications, sprint roadmaps, and cross-functional team alignment to ensure on-time, high-fidelity project completion.",
    specialty: ["Agile/Scrum", "Client Success", "Scope Governance"],
  },
  {
    name: "Abdul Hannan",
    role: "Head of Marketing",
    department: "Operations",
    bio: "Oversees digital growth, enterprise partner relations, and strategic market positioning for GonjoTech's enterprise solutions and international initiatives.",
    specialty: ["B2B Growth", "Brand Strategy", "Market Analysis"],
  },
  {
    name: "Sirajul Islam",
    role: "UI/UX Designer",
    department: "Design",
    bio: "Crafts intuitive user experiences, comprehensive design systems, and responsive layouts that balance technical precision with minimalist elegance.",
    specialty: ["Interface Design", "Design Systems", "Prototyping"],
  },
  {
    name: "Akhi Akter",
    role: "Head of Human Resources",
    department: "Operations",
    bio: "Fosters an inclusive, high-performance engineering culture, championing talent acquisition, professional growth, and organizational excellence.",
    specialty: ["People Strategy", "Talent Acquisition", "Company Culture"],
  },
  {
    name: "Sojol Loskar",
    role: "Senior Software Developer",
    department: "Engineering",
    bio: "Specializes in high-performance web applications, backend APIs, and database architecture across complex business management workflows.",
    specialty: ["Backend APIs", "PostgreSQL", "Next.js"],
  },
  {
    name: "Rashedul",
    role: "Software Developer",
    department: "Engineering",
    bio: "Focuses on scalable web engineering, frontend interactivity, and rigorous test coverage across client software deliverables.",
    specialty: ["Frontend Systems", "TypeScript", "React"],
  },
  {
    name: "Rayhan Mir",
    role: "Mobile & Web Developer",
    department: "Engineering",
    bio: "Builds cross-platform mobile solutions, website-to-app integrations, and smooth responsive user interfaces.",
    specialty: ["Mobile Development", "REST Integration", "UI Engineering"],
  },
];
