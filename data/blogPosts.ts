export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "Mobile" | "Technology" | "Industry";
  author: string;
  publishedDate: string;
  readTime: string;
  content: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "what-is-object-orientation-in-modern-software",
    title: "Understanding Object-Oriented Architecture in Modern Software Development",
    excerpt:
      "A deep dive into why object-oriented design patterns remain the bedrock of maintainable enterprise applications, domain modeling, and system scalability.",
    category: "Engineering",
    author: "GonjoTech Engineering",
    publishedDate: "October 2024",
    readTime: "6 min read",
    content: [
      "Object-oriented software development provides a structured foundation that prevents common pitfalls in enterprise software engineering. By mapping real-world business entities into cohesive classes and encapsulated models, engineering teams can maintain large codebases without succumbing to high cognitive overhead or brittle regressions.",
      "In modern full-stack development—whether implementing domain models in Java Spring Boot, TypeScript Node services, or Python backends—principles like Single Responsibility, Open-Closed design, and Dependency Inversion dictate the longevity of a system.",
      "At GonjoTech, we utilize domain-driven design and object-oriented architectures to ensure that as enterprise clients add business requirements, our code structures expand predictably without requiring risky full-system rewrites.",
    ],
  },
  {
    slug: "how-to-convert-website-to-mobile-app",
    title: "How to Successfully Convert a Web Platform into a High-Performing Mobile App",
    excerpt:
      "Key architectural considerations, performance strategies, and UX patterns for bridging web portals into native iOS and Android experiences.",
    category: "Mobile",
    author: "GonjoTech Mobile Lab",
    publishedDate: "November 2024",
    readTime: "7 min read",
    content: [
      "As consumer behavior increasingly skews toward mobile smartphones, businesses are realizing that standard mobile browser experiences often lack the persistent engagement, biometrics, and push notification reach required to retain modern users.",
      "Converting an existing web service into a mobile app requires more than wrapping a URL inside a generic web view. Successful mobile transitions require native device integration: offline caching engines, hardware biometric authentication (FaceID/Fingerprint), background sync, and push notifications.",
      "GonjoTech specializes in taking existing web infrastructures and building native or cross-platform wrappers and dedicated mobile apps that feel intuitive, lightning-fast, and fully compliant with Google Play and Apple App Store guidelines.",
    ],
  },
  {
    slug: "virtual-reality-and-modern-digital-simulation",
    title: "Virtual Reality & Immersive Simulation in Enterprise and Education",
    excerpt:
      "How simulation technologies and 3D visual environments are transforming vocational training, medical simulations, and institutional education.",
    category: "Technology",
    author: "GonjoTech Insights",
    publishedDate: "December 2024",
    readTime: "5 min read",
    content: [
      "Virtual Reality (VR) and 3D simulation have matured far beyond gaming novelties. Today, they represent vital operational tools for high-risk training simulations, interactive medical demonstrations, and architectural visualization.",
      "By placing students or professionals in simulated real-world scenarios, organizations eliminate equipment risks, reduce training overhead, and improve knowledge retention rates significantly.",
      "At GonjoTech, we track emerging spatial computing and 3D web frameworks (Three.js, WebGL) to explore how immersive visualization can enhance educational platforms like GonjoEducation.",
    ],
  },
  {
    slug: "top-programming-languages-for-enterprise-software",
    title: "Selecting the Right Programming Stack for Enterprise Software Solutions",
    excerpt:
      "Comparing TypeScript, Python, Java, and Go for high-concurrency backends, microservices, and modern database architectures.",
    category: "Engineering",
    author: "GonjoTech Technical Team",
    publishedDate: "January 2025",
    readTime: "8 min read",
    content: [
      "Choosing a programming language for an enterprise product is not about chasing fleeting developer hype; it is about evaluating concurrency models, type safety, ecosystem tooling, and operational maintainability.",
      "TypeScript with Node.js offers unrivaled full-stack code reuse and JSON handling speed; Java and Spring Boot provide battle-tested transactional rigidity for banking and ERP suites; Python excels at data manipulation and AI workflows.",
      "Our engineering team guides clients through this selection process based on expected request volumes, database complexity, and team growth trajectories.",
    ],
  },
  {
    slug: "tech-talent-and-global-outsourcing-in-bangladesh",
    title: "The Rise of High-Precision Tech Outsourcing & Engineering in Bangladesh",
    excerpt:
      "How Bangladesh’s emerging software ecosystem is delivering cost-effective, world-class engineering solutions to international markets.",
    category: "Industry",
    author: "Hossain, CEO",
    publishedDate: "February 2025",
    readTime: "6 min read",
    content: [
      "Over the past decade, Bangladesh has evolved from a nascent IT hub into a powerhouse of energetic, talented software engineers capable of building scalable enterprise systems.",
      "With universities graduating thousands of ambitious developers each year and strong government focus on digital infrastructure, local software firms are delivering world-class custom software, mobile apps, and ERP solutions to international clients.",
      "GonjoTech was founded in 2019 to bridge local technical talent with high-standard engineering delivery, proving that regional software studios can rival international firms in code quality, security, and customer dedication.",
    ],
  },
];
