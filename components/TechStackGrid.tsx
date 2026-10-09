interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    tag: string;
  }[];
}

const techCategories: TechCategory[] = [
  {
    category: "Frontend & Web Apps",
    description: "Modern, reactive UI systems with sub-second performance",
    items: [
      { name: "Next.js", level: "Production", tag: "App Router" },
      { name: "React", level: "Core", tag: "SPA & Hooks" },
      { name: "TypeScript", level: "Standard", tag: "Type Safety" },
      { name: "Tailwind CSS", level: "Core", tag: "Modern Design" },
      { name: "Vue.js", level: "Supported", tag: "Component UI" },
      { name: "Angular", level: "Enterprise", tag: "Full Framework" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Scalable APIs, transactional services, and business logic",
    items: [
      { name: "Node.js", level: "Production", tag: "Async Engine" },
      { name: "Java & Spring Boot", level: "Enterprise", tag: "Microservices" },
      { name: "Python & Django", level: "Production", tag: "Data & APIs" },
      { name: "PHP & Laravel", level: "Production", tag: "Web Platforms" },
      { name: "REST & GraphQL", level: "Standard", tag: "API Contracts" },
    ],
  },
  {
    category: "Mobile Engineering",
    description: "Native operating system apps and cross-platform mobility",
    items: [
      { name: "Android SDK", level: "Native", tag: "Kotlin / Java" },
      { name: "iOS / Swift", level: "Native", tag: "Apple Ecosystem" },
      { name: "React Native", level: "Cross-Platform", tag: "Universal Code" },
      { name: "Flutter", level: "Cross-Platform", tag: "Dart Engine" },
      { name: "Web-to-App Bridge", level: "Specialty", tag: "App Wrapping" },
    ],
  },
  {
    category: "Databases & Infrastructure",
    description: "ACID compliance, data persistence, and cloud containers",
    items: [
      { name: "PostgreSQL", level: "Primary", tag: "Relational ACID" },
      { name: "MySQL", level: "Standard", tag: "Enterprise DB" },
      { name: "Oracle Database", level: "Enterprise", tag: "High-Volume" },
      { name: "Redis", level: "In-Memory", tag: "Cache & Queues" },
      { name: "Docker", level: "DevOps", tag: "Containers" },
    ],
  },
];

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {techCategories.map((group) => (
        <div
          key={group.category}
          className="bg-[#0b1322]/80 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-1">
                {group.category}
              </h3>
              <p className="text-xs text-slate-400">
                {group.description}
              </p>
            </div>

            <div className="space-y-2.5">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#070b14]/90 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div>
                    <span className="text-sm font-semibold text-slate-200 block">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {tech.tag}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
