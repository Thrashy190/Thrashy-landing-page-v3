export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: string;
  statusColor: string;
  githubUrl: string;
  liveUrl: string | null;
  color: string;
  colorRgb: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Lade",
    description:
      "Logistics and freight management system for fleets, drivers, and cargo tracking with real-time monitoring.",
    longDescription:
      "A comprehensive logistics and freight management system designed to streamline fleet operations, driver management, and cargo tracking. The platform provides real-time monitoring capabilities, route optimization, driver performance analytics, and integrated billing systems. Built with modern technologies to ensure scalability and reliability for large-scale logistics operations.",
    technologies: ["React", "NestJS", "AWS", "Nginx", "PostgreSQL"],
    status: "Live",
    statusColor: "#10b981",
    githubUrl: "https://github.com/Thrashy190/lade",
    liveUrl: "https://lade.com",
    color: "#8b5cf6",
    colorRgb: "139, 92, 246",
  },
  {
    id: 2,
    name: "UShortener",
    description:
      "High-performance URL shortener built with Go, featuring Redis caching and AWS deployment with Terraform.",
    longDescription:
      "A fast and scalable URL shortening service built with Go for optimal performance. Features include Redis caching for lightning-fast redirects, Terraform infrastructure as code for reliable AWS deployment, and comprehensive analytics tracking. The system is designed to handle millions of URL redirects with minimal latency and maximum reliability.",
    technologies: ["Go", "Redis", "Terraform", "AWS", "Docker"],
    status: "Completed",
    statusColor: "#3b82f6",
    githubUrl: "https://github.com/Thrashy190/ushortener",
    liveUrl: "https://ushortener.com",
    color: "#ef4444",
    colorRgb: "239, 68, 68",
  },
  {
    id: 3,
    name: "Cosmos",
    description:
      "High-performance headless CMS built from scratch to deliver exceptional speed and developer experience.",
    longDescription:
      "A custom-built headless CMS designed to outperform existing solutions like Strapi. Built with performance as the primary focus, Cosmos provides a blazing-fast API, flexible content modeling, and developer-friendly features. The system is optimized for high-traffic applications and offers seamless integration with modern frontend frameworks.",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Docker",
    ],
    status: "Live",
    statusColor: "#f59e0b",
    githubUrl: "https://github.com/Thrashy190/cosmos",
    liveUrl: null,
    color: "#06b6d4",
    colorRgb: "6, 182, 212",
  },
  {
    id: 4,
    name: "Nucleos",
    description:
      "Complete compiler with lexical, syntactic, semantic analysis and virtual machine implementation.",
    longDescription:
      "A comprehensive compiler project that implements the full compilation pipeline from source code to execution. Features include lexical analysis (tokenization), syntactic analysis (parsing), semantic analysis (type checking), and a custom virtual machine for code execution. Built with Python and Qt5 for the development environment, providing a complete IDE experience for language development.",
    technologies: [
      "Python",
      "Qt5",
      "Compiler Design",
      "Virtual Machine",
      "IDE Development",
    ],
    status: "Live",
    statusColor: "#10b981",
    githubUrl: "https://github.com/Thrashy190/nucleos",
    liveUrl: null,
    color: "#84cc16",
    colorRgb: "132, 204, 22",
  },
  {
    id: 5,
    name: "Arqontact",
    description:
      "B2B platform connecting architects with service providers, featuring project management and networking tools.",
    longDescription:
      "A comprehensive B2B platform designed specifically for architects to manage their projects and connect with service providers. The platform combines project management tools with social networking features, allowing architects to find contractors, suppliers, and collaborators efficiently. Features include project portfolios, provider directories, messaging systems, and integrated project tracking.",
    technologies: [
      "Flutter",
      "React.js",
      "Go",
      "AWS",
      "PostgreSQL",
      "Firebase",
    ],
    status: "Completed",
    statusColor: "#3b82f6",
    githubUrl: "https://github.com/Thrashy190/arqontact",
    liveUrl: "https://arqontact.com",
    color: "#ec4899",
    colorRgb: "236, 72, 153",
  },
  {
    id: 6,
    name: "Avgi",
    description:
      "Educational platform helping high school and university students choose careers and reduce dropout rates.",
    longDescription:
      "An innovative educational platform designed to help students make informed career decisions and reduce academic dropout rates. The platform provides career guidance, academic planning tools, and personalized recommendations based on student interests and aptitudes. Features include career assessments, university program comparisons, and mentorship connections to support student success.",
    technologies: [
      "React.js",
      "Firebase",
      "Node.js",
      "Machine Learning",
      "Analytics",
    ],
    status: "In Progress",
    statusColor: "#f59e0b",
    githubUrl: "https://github.com/Thrashy190/avgi",
    liveUrl: "https://avgi.edu",
    color: "#f97316",
    colorRgb: "249, 115, 22",
  },
  {
    id: 7,
    name: "Mobile Fitness App",
    description:
      "Gym tracking application for daily exercise progress and workout management with personal analytics.",
    longDescription:
      "A comprehensive mobile fitness application designed to help users track their gym progress and maintain consistent workout routines. Features include exercise logging, progress tracking, workout planning, and personal analytics. The app provides detailed insights into performance trends, helps users stay motivated, and offers customizable workout plans based on individual fitness goals.",
    technologies: [
      "React Native",
      "SQLite",
      "Node.js",
      "Analytics",
      "Push Notifications",
    ],
    status: "In Progress",
    statusColor: "#f59e0b",
    githubUrl: "https://github.com/Thrashy190/mobile-fitness",
    liveUrl: null,
    color: "#f97316",
    colorRgb: "249, 115, 22",
  },
  {
    id: 8,
    name: "AtomDB",
    description:
      "SQLite-inspired database engine built in C++ with ongoing migration to Rust for enhanced performance.",
    longDescription:
      "A lightweight, embedded database engine inspired by SQLite, initially developed in C++ for maximum performance and portability. Currently undergoing migration to Rust to leverage modern memory safety features and improved concurrency. The database provides ACID compliance, SQL support, and is designed for embedded applications requiring reliable data storage with minimal resource usage.",
    technologies: [
      "C++",
      "Rust",
      "Database Design",
      "SQL Parser",
      "Embedded Systems",
    ],
    status: "Live",
    statusColor: "#10b981",
    githubUrl: "https://github.com/Thrashy190/atomdb",
    liveUrl: null,
    color: "#84cc16",
    colorRgb: "132, 204, 22",
  },
];
