export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  logo: string;
  color: string;
  colorRgb: string;
  longDescription: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Numaris",
    role: "Software Engineer",
    period: "June 2025 - Present",
    location: "Cuernavaca, Morelos, Mexico",
    description:
      "Development of cross-platform mobile applications and high-concurrency backend services for IoT device control.",
    technologies: [
      "React Native",
      "Go",
      "AWS Lambda",
      "AWS Cognito",
      "Bluetooth",
      "Zoho",
    ],
    logo: "/images/logos/numaris.webp",
    color: "#6366f1",
    colorRgb: "99, 102, 241",
    longDescription:
      "At Numaris, I lead the development of a cross-platform React Native app for secure control of Teltonika FMC130 units via Bluetooth, replacing physical iButtons across a fleet of 300K+ vehicles. I architect and optimize high-concurrency backend services using Go and AWS Lambda to process over 15 million events per day with low latency. I implement MFA-enabled authentication with AWS Cognito, ensuring security across mobile clients. Additionally, I integrate Zoho workflows through Lambda automation, accelerating onboarding and account management processes.",
  },
  {
    id: 2,
    company: "Dinoware",
    role: "Senior Software Engineer",
    period: "March 2025 - May 2025",
    location: "Remote",
    description: "Development of web applications and software solutions.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    logo: "/images/logos/dinoware.webp",
    color: "#69c347",
    colorRgb: "105, 195, 71",
    longDescription:
      "We are a software development company specialized in building tailor-made digital solutions that adapt to your business needs. From web and mobile applications to enterprise-grade systems, we design, develop, and deploy scalable software that drives innovation and efficiency. Our team combines cutting-edge technologies with agile methodologies to deliver high-quality, reliable, and secure products on time and within budget. Whether you're looking to automate processes, enhance customer experience, or launch a new digital product, we're here to turn your ideas into powerful software solutions.",
  },
  {
    id: 3,
    company: "ZF Group",
    role: "Software Engineer Jr",
    period: "May 2024 - February 2025",
    location: "Saltillo, Coahuila, Mexico",
    description:
      "Development of route optimization tools and process automation to improve operational efficiency.",
    technologies: ["Python", "Google Maps API", "Power Apps", "Django", "AWS"],
    logo: "/images/logos/zf.webp",
    color: "#036EB8",
    colorRgb: "3, 110, 184",
    longDescription:
      "At ZF Group, I built a logistics optimization tool using Python and Google Maps API, cutting monthly costs by over $6,000 and improving operations for 200+ employees. I automated HR and Continuous Improvement processes to reduce workflows from several days to minutes. Additionally, I created internal Power Apps to manage job roles and food services, and a Django-based census platform that streamlined data collection from four weeks to three days.",
  },
  {
    id: 4,
    company: "Cinvestav RONIHM",
    role: "Software Engineer",
    period: "June 2023 - December 2024",
    location: "Saltillo, Coahuila, Mexico",
    description:
      "Architecture and development of data analysis systems for police cadet driving assessments.",
    technologies: [
      "ReactJS",
      "NestJS",
      "AWS Cloud",
      "Tauri",
      "Rust",
      "Data Analysis",
    ],
    logo: "/images/logos/cinve.webp",
    color: "#009F94",
    colorRgb: "0, 159, 148",
    longDescription:
      "At Cinvestav RONIHM, I designed and developed a data analytics platform to evaluate police cadet driving tests. Initially built with Rust/Tauri, the system evolved into a scalable web solution using ReactJS and NestJS on AWS. It captures biometric and telemetry data such as stress levels, heart rate, and vehicle dynamics, providing real-time analysis and post-test evaluations to enhance decision-making in training programs.",
  },
  {
    id: 5,
    company: "Justia",
    role: "Web Services Intern",
    period: "October 2023 - April 2024",
    location: "Saltillo, Coahuila, Mexico",
    description:
      "Development of automation scripts and on-site to AWS server migration with SEO improvements.",
    technologies: ["Python", "TypeScript", "AWS", "SEO", "Server Migration"],
    logo: "/images/logos/justia.webp",
    color: "#06347A",
    colorRgb: "6, 52, 122",
    longDescription:
      "At Justia, I created Python scripts to automate internal web publishing tasks, reducing time from two weeks to two days. I led the migration of client websites from physical servers to AWS, ensuring 100% uptime. I also contributed to SEO enhancements using TypeScript and analytics tools, helping to improve page ranking and performance.",
  },
  {
    id: 6,
    company: "Cinvestav RONIHM",
    role: "Research Intern",
    period: "June 2022 - August 2022",
    location: "Saltillo, Coahuila, Mexico",
    description:
      "Development of computer vision systems for autonomous positional drift correction in quadcopters.",
    technologies: [
      "OpenCV",
      "Neural Networks",
      "C/C++",
      "Python",
      "Computer Vision",
    ],
    logo: "/images/logos/cinve.webp",
    color: "#009F94",
    colorRgb: "0, 159, 148",
    longDescription:
      "As a Research Intern, I developed a vision-based drift correction system for autonomous quadcopters. Using OpenCV, C++ and neural networks, I implemented real-time optical flow tracking that allowed drones to detect and adjust their position mid-flight, improving stability and reliability in indoor environments.",
  },
  {
    id: 7,
    company: "Ilumps",
    role: "Software Engineering Jr",
    period: "January 2021 - January 2023",
    location: "Chihuahua, Chihuahua, Mexico",
    description:
      "Development of multiple projects including B2C applications, AR systems and medical imaging tools.",
    technologies: [
      "TypeScript",
      "ReactJS",
      "TensorFlow",
      "Java",
      "AR Foundation",
      "AWS S3",
      "Firebase",
    ],
    logo: "/images/logos/ilum.webp",
    color: "#ea580c",
    colorRgb: "234, 88, 12",
    longDescription:
      "At Ilumps, I contributed to four key projects: (1) Zaturna – created dashboards and scheduling tools for an event booking platform; (2) Vesvir – built AR overlays using TensorFlow and migrated the mobile experience from Ionic to native Java with AR Foundation; (3) Medical Imaging System – handled file storage using AWS S3 and secured access with React-based auth; (4) Nexum – participated in QA and enhanced e-signature capabilities using Firebase.",
  },
];
