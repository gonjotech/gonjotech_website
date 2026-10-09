export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Services" | "Engagement" | "Support";
}

export const faqsData: FAQItem[] = [
  {
    question: "What core services does GonjoTech provide?",
    answer:
      "GonjoTech specializes in six core domains: Custom Software Development, Modern Web Design & Development (Next.js/React), Native and Cross-Platform Mobile Applications (Android & iOS), Enterprise ERP Solutions (including our proprietary GonjoERP and GonjoEducation suites), Rigorous Testing & Quality Assurance, and Technical SEO & Digital Growth Marketing.",
    category: "Services",
  },
  {
    question: "Can GonjoTech engineer completely custom software tailored to my business?",
    answer:
      "Yes. While we maintain modular, ready-to-deploy platforms (like ERP, POS, and educational systems), a significant portion of our work involves building bespoke software from scratch to accommodate unique business rules, complex workflows, proprietary calculations, and legacy database migrations.",
    category: "Services",
  },
  {
    question: "How does a typical project begin with GonjoTech?",
    answer:
      "Every project follows our structured 5-stage lifecycle. We start with Phase 01: Discover—a comprehensive technical alignment call where we review your operational challenges, functional scope, and timelines. We then provide an architectural proposal and transparent quotation within 48 to 72 hours before kicking off the Plan and Design phases.",
    category: "Engagement",
  },
  {
    question: "Do you work with international clients outside Bangladesh?",
    answer:
      "Yes. GonjoTech serves clients both within Bangladesh and internationally across North America, Europe, the Middle East, and Asia. Our engineers are proficient in English, conduct daily asynchronous standups, manage sprint boards on Jira/GitHub, and accommodate multiple global time zones.",
    category: "Engagement",
  },
  {
    question: "How can I request a formal quotation or proposal for my project?",
    answer:
      "You can submit your project requirements directly via our Contact inquiry form, email us at info@gonjotech.com, or reach our technical team via direct phone / WhatsApp at +880 1736-902507. We will respond promptly with preliminary technical feedback and a consultation schedule.",
    category: "General",
  },
  {
    question: "Is post-launch technical support and maintenance available?",
    answer:
      "Yes, we provide 24/7 post-launch technical support and dedicated Service Level Agreements (SLAs). Every completed project includes a standard post-deployment warranty period for bug fixes and stability monitoring, with flexible monthly support retainers available for continuous enhancements and cloud infrastructure management.",
    category: "Support",
  },
  {
    question: "Who owns the intellectual property (IP) and source code of the project?",
    answer:
      "You retain 100% full intellectual property ownership. Upon project delivery and milestone settlement, all Git repositories, documentation, architecture diagrams, and production credentials are transferred exclusively to your organization.",
    category: "General",
  },
  {
    question: "How do you guarantee software quality, security, and performance?",
    answer:
      "Our engineering process includes automated unit and end-to-end integration testing, OWASP security best-practice adherence, encrypted database backups, and strict code review gates. We also conduct real-device testing across smartphones and perform load simulations before production deployment.",
    category: "Support",
  },
];
