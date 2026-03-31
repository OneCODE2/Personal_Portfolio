export const portfolioData = {
  identity: {
    name: "Aditya Gajbhiye",
    navbarTitle: "Aditya",
    greeting: "Hello! I'm",
    heroName: "ADITYA GAJBHIYE",
    headline: "Impact-driven",
    roles: ["Frontend Engineer", "Full-Stack Builder"],
    footerStatement: "Built with product focus by Aditya Gajbhiye",
    footerYear: "2026",
  },
  about:
    "Full-Stack Engineer with 1.5 years of end-to-end product ownership across frontend, backend, and cloud deployment. At GrowthJockey, I have shipped 5 client systems from zero to live using React 19, Next.js 14, Java 22, Spring Boot 3.2, and Node.js. I focus on measurable outcomes: improving conversion, performance, delivery speed, and operational efficiency with clean architecture and production-first engineering.",
  whatIDo: [
    {
      title: "DEVELOP",
      description:
        "I build production-grade web apps end to end, from UI architecture and RBAC dashboards to secure APIs and cloud deployment. My focus is reliability, speed, and measurable business impact.",
      tools: ["React 19", "Next.js 14", "TypeScript", "Java 22", "Spring Boot 3.2", "Node.js", "Express.js", "PostgreSQL", "MySQL", "AWS", "Docker"],
    },
    {
      title: "OPTIMIZE",
      description:
        "I optimize growth and operations through performance engineering, SEO-safe migrations, automation, and AI workflows. Recent work improved conversions, increased content velocity, and cut support and campaign overhead.",
      tools: ["SSR", "Core Web Vitals", "Lighthouse CI", "RAG Pipelines", "Text-to-SQL", "n8n Automation", "GTM", "GA4", "Jenkins"],
    },
  ],
  experience: [
    {
      role: "Software Engineer - GrowthJockey",
      duration: "Jul 2025 - Present",
      highlights: [
        "Led end-to-end delivery across multiple client systems at GrowthJockey, owning architecture, implementation, integration, and release quality.",
        "Built the Tuffex industrial e-commerce ecosystem including customer storefront, React 19 admin SPA with RBAC across 10+ modules, and backend services with 50+ REST endpoints, OTP auth, and GST invoice workflows.",
        "Eliminated a major SEO engineering bottleneck by developing a self-serve CMS for Sleepyhug and migrating 800+ posts with zero broken routes, improving publishing output from 3 to 7 posts/day.",
        "Improved performance and discoverability through SSR, hydration strategy, and image optimization, contributing to higher conversion and stronger organic traffic outcomes.",
        "Launched a RAG-powered chatbot that autonomously resolved 40-50% of inbound support queries from day one.",
        "Delivered automation pipelines for campaign operations that significantly reduced manual overhead and increased team throughput.",
      ],
    },
    {
      role: "Software Engineer Intern - GrowthJockey",
      duration: "Jan 2025 - Jun 2025",
      highlights: [
        "Built a strong execution foundation during internship by delivering production-ready frontend and integration work across parallel sprint tracks.",
        "Shipped SSR-first Next.js 14 experiences with lazy hydration and optimized media delivery to improve Core Web Vitals and user-perceived performance.",
        "Published 15+ WCAG 2.1-compliant reusable components to an internal shared library, reducing repeated implementation effort and accelerating feature delivery across squads.",
        "Integrated 10+ third-party APIs with robust error handling patterns and contributed to code review and release processes.",
        "Maintained consistent on-time delivery through structured Git workflows and CI/CD pipelines, leading to full-time conversion.",
      ],
    },
  ],
  projects: [
    {
      title: "Tuffex E-commerce",
      category: "Industrial Storefront",
      tools: "React 19, Next.js, API, RBAC",
      description:
        "Built an industrial e-commerce platform with conversion-focused storefront UX, secure RBAC admin modules, and scalable API integration for production operations.",
      link: "https://www.tuffex.store",
      image: "/images/tuffex.png",
    },
    {
      title: "Sleepyhug CMS & Chatbot",
      category: "Content Management & AI",
      tools: "React, RAG, Zero-broken routes",
      description:
        "Shipped a self-serve CMS with 800+ SEO-safe migrations and a RAG chatbot that auto-resolves a large share of support and product queries.",
      link: "https://www.sleepyhug.in",
      image: "/images/sleepyhug.png",
    },
    {
      title: "Authentication System",
      category: "Full-Stack Security Platform",
      tools: "Node.js, Express, MongoDB, React, JWT, OTP",
      description:
        "Built a production-ready auth system with OTP email verification, JWT access/refresh token rotation, bcrypt password hashing, and multi-device session management with revoke controls.",
      link: null,
      image: "/images/auth.jpg",
    },
    {
      title: "Custom SMTP Server",
      category: "DevOps Infrastructure",
      tools: "AWS EC2, SPF, DKIM, DMARC",
      description:
        "Deployed a self-hosted SMTP infrastructure on AWS with SPF, DKIM, and DMARC configured for reliable inbox delivery and lower infra cost.",
      link: null,
      image: "/images/smtp.jpg",
    },
    {
      title: "4site Analytics Platform",
      category: "Web Analytics Product",
      tools: "Heatmaps, Engagement Tracking, Reporting",
      description:
        "Built an internal analytics product to track engagement, session behavior, and page performance, enabling data-backed product and content decisions.",
      link: null,
      image: "/images/4site.png",
    },
    {
      title: "Medicare - Doctor Appointment Booking Site",
      category: "Healthcare Booking Platform",
      tools: "React, Routing, Forms, API Integration",
      description:
        "Created a doctor-appointment platform with patient-first booking flows and modular frontend architecture for clean scaling and maintainability.",
      link: "https://medicare-ten-umber.vercel.app",
      image: "/images/medicare.png",
    },
    {
      title: "Jobify",
      category: "Job Application Tracker",
      tools: "React, Dashboard UI, State Management",
      description:
        "Built a dashboard-driven job tracker for managing application stages and activity, optimized for daily workflow speed and clarity.",
      link: "https://jobify.live",
      image: "/images/jobify.png",
    },
    {
      title: "EcoFood",
      category: "Food Delivery Application",
      tools: "React, Component Architecture, UI Flows",
      description:
        "Developed a food-ordering interface with fast browsing, clear conversion paths, and reusable UI components for consistent feature delivery.",
      link: "https://ecofoodankit.vercel.app",
      image: "/images/ecofood.png",
    },
    {
      title: "DermStore Clone",
      category: "E-commerce for Skincare & Cosmetics",
      tools: "React, Product Listing, Cart UX",
      description:
        "Recreated a skincare commerce experience with catalog discovery, product detail journeys, and cart interactions with polished responsive behavior.",
      link: "https://dermstore-clone-01.vercel.app",
      image: "/images/dermstore.png",
    },
    {
      title: "2048 Game",
      category: "Interactive Web Game",
      tools: "JavaScript, Game Logic, UI Interactions",
      description:
        "Implemented a browser-based 2048 game with deterministic merge logic, responsive controls, and smooth interaction feedback.",
      link: "https://play2048.co",
      image: "/images/2048.png",
    },
  ],
  techStackSummary: {
    title: "My Techstack",
    lines: [
      "Frontend: React 19, Next.js 14, TypeScript, TailwindCSS",
      "Backend & Databases: Java 22, Spring Boot, Node.js, PostgreSQL, MySQL",
      "DevOps & AI: AWS (EC2, ECR), Docker, Jenkins, RAG Pipelines",
    ],
  },
  contact: {
    email: "adityagajbhiye125@gmail.com",
    phone: "+91 8698720931",
  },
  social: {
    github: "https://github.com/OneCODE2",
    linkedin: "https://www.linkedin.com/in/aditya-gajbhiye-9b6048230/",
    instagram: "https://www.instagram.com",
    resume: "/resume/Aditya_Full_Stack.pdf",
  },
  loadingText: [
    "Full-Stack Engineer",
    "React 19 and Next.js 14",
    "Java 22 and Spring Boot 3.2",
    "Node.js and TypeScript",
    "Welcome",
  ],
};


