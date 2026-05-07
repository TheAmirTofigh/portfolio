export type Project = {
    title: string;
    eyebrow: string;
    summary: string;
    details: string[];
    stack: string[];
    impact: string;
    status: string;
    url: string;
};

export type Experience = {
    company: string;
    location: string;
    role: string;
    period: string;
    summary: string;
    achievements: string[];
    stack: string[];
};

export type FocusArea = {
    title: string;
    description: string;
    signal: string;
};

export const profile = {
    name: "Amir Tofigh",
    role: "Senior Front-End Engineer",
    location: "Tabriz, Iran · Open to relocate",
    email: "amir.tgh1381@gmail.com",
    phone: "+989032522311",
    phoneBreak: "+98 903 252 2311",
    linkedIn: "https://linkedin.com/in/amirtofigh",
    headline:
        "Senior Front-End Engineer building large-scale OTA platforms, white-label systems, and real-time product interfaces.",
    intro: "I lead front-end architecture for production-grade booking, fintech, crypto, and AI products - turning complex data, supplier APIs, and multi-tenant requirements into fast, polished, maintainable experiences.",
    availability: "Open to senior front-end, Next.js, OTA, real-time UI, and product engineering roles.",
    resumePath: "/Amir-Tofigh-Resume.pdf",
    socials: [
        { label: "Email", href: "mailto:amir.tgh1381@gmail.com" },
        { label: "LinkedIn", href: "https://linkedin.com/in/amirtofigh" },
        { label: "GitHub", href: "#contact" },
        { label: "GitLab", href: "#contact" }
    ]
} as const;

export const stats = [
    { value: "5+", label: "Years building production front-ends" },
    { value: "12+", label: "Complex product interfaces delivered" },
    { value: "90+", label: "Performance score target for key pages" },
    { value: "60K+", label: "Users reached across shipped products" }
] as const;

export const navItems = [
    { label: "Work", href: "#work" },
    { label: "Systems", href: "#systems" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
] as const;

export const experiences: Experience[] = [
    {
        company: "Ipek Yolu Araz - GoToSafar",
        location: "Full-time onsite · Tabriz, Iran",
        role: "Senior Front-End Engineer",
        period: "May 2023 - Present",
        summary:
            "Leading front-end architecture across GoToSafar's OTA ecosystem, including the main booking platform, admin panel, GoToCruise, and partner white-label deployments.",
        achievements: [
            "Led the front-end of multi-service booking flows for flights, hotels, cruises, residences, car rental, transfers, tours, and visa products.",
            "Built a scalable white-label system that powers multiple independently branded travel agency platforms from one shared front-end core.",
            "Improved Core Web Vitals and production performance through bundle optimization, rendering strategy, and performance-first architecture."
        ],
        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Axios",
            "PWA",
            "Tailwind CSS",
            "Website Localization",
            "Performance Optimization",
            "etc."
        ]
    },
    {
        company: "Negin Fannavaran Arta",
        location: "Part-time remote · Iran",
        role: "Front-End Developer",
        period: "Oct 2022 - Jan 2024",
        summary:
            "Developed front-end interfaces across fintech, real-time gold trading, cryptocurrency, AI, security consulting, memorial sites, and internal platforms.",
        achievements: [
            "Built real-time trading dashboards and crypto payment UIs with live data feeds, complex state handling, and wallet integrations.",
            "Contributed to Telim, a personal AI platform with per-user private spaces for data, memories, and contextual assistance.",
            "Owned full UI lifecycles from architecture to deployment inside a 6-engineer cross-functional product team."
        ],
        stack: ["React", "Next.js", "TypeScript", "WebSocket", "Axios", "PWA", "Performance Optimization", "etc."]
    },
    {
        company: "Mahan Pardakht Asia",
        location: "Full-time hybrid · Tabriz, Iran",
        role: "Front-End Developer",
        period: "Jul 2021 - Sep 2022",
        summary:
            "Built the front-end of an OTC cryptocurrency exchange from scratch, covering trading interfaces, wallet dashboards, and account flows.",
        achievements: [
            "Implemented WebSocket-driven real-time price feeds across trading views for 200+ coins and tokens.",
            "Developed KYC onboarding with live video capture plus fraud and suspicious-activity alerting interfaces.",
            "Supported product growth to 16K+ registered users and roughly 300 daily active users through iterative UX improvements."
        ],
        stack: ["React", "Next.js", "TypeScript", "WebSocket", "PWA", "Real-Time Systems", "etc."]
    },
    {
        company: "Web Negah",
        location: "Contract · Tehran, Iran",
        role: "Front-End Developer",
        period: "Nov 2022 - Feb 2023",
        summary:
            "Architected and built the entire front-end of Asan Tahator from scratch as the sole front-end developer.",
        achievements: [
            "Delivered a modern e-commerce front-end using Next.js, GraphQL, Redux Toolkit, and Sass.",
            "Built responsive, pixel-perfect UI across device sizes with a focus on performance and maintainability.",
            "Created a maintainable architecture that translated complex commerce requirements into clear user flows."
        ],
        stack: ["Next.js", "GraphQL", "Redux Toolkit", "Sass", "Responsive UI"]
    }
];

export const focusAreas: FocusArea[] = [
    {
        title: "Multi-Service OTA Architecture",
        description:
            "Complex travel search and booking flows across location, date, passenger, country, supplier, currency, and language dimensions.",
        signal: "Flights · Hotels · Cruises · Transfers · Tours · Visa"
    },
    {
        title: "White-Label Front-End Systems",
        description:
            "A shared front-end core that can safely power multiple branded agency experiences with isolated themes, content, and configuration.",
        signal: "Multi-tenant UI · Partner platforms · Configurable branding"
    },
    {
        title: "Real-Time Product Interfaces",
        description:
            "High-frequency WebSocket interfaces for trading dashboards, crypto rates, wallet flows, gold trading, and live operational data.",
        signal: "WebSocket · 200+ assets · Live state"
    },
    {
        title: "Performance & Localization",
        description:
            "Core Web Vitals, bundle optimization, rendering strategy, GA4 e-commerce tracking, and i18next locale architecture.",
        signal: "CWV · SSR/SSG · i18n · GA4"
    }
];

export const projects: Project[] = [
    {
        title: "GoToSafar",
        eyebrow: "Full-Scale OTA Platform",
        summary:
            "A production travel platform covering flights, hotels, cruises, car rental, transfers, tours, residences, and visa services with multi-language and multi-currency support.",
        details: [
            "Led front-end development across high-intent booking flows and supplier API-powered travel experiences.",
            "Structured complex data mapping between third-party providers, product state, and user-facing reservation flows.",
            "Built performance-conscious pages and reusable product UI for a large, multi-service OTA ecosystem."
        ],
        stack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind", "REST", "GA4"],
        impact: "OTA Product",
        status: "Production",
        url: "https://gotosafar.com/en/home"
    },
    {
        title: "GoToCruise",
        eyebrow: "Cruise Booking System",
        summary:
            "A cruise tour booking platform with real-time availability, multi-language support, and end-to-end booking flows.",
        details: [
            "Designed cruise-specific user flows around availability, passenger details, reservation steps, and content-heavy tour pages.",
            "Integrated booking states with supplier-driven data and reusable OTA components.",
            "Maintained a premium responsive experience across search, detail, and checkout touchpoints."
        ],
        stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "i18n"],
        impact: "Travel Vertical Expansion",
        status: "Production",
        url: "https://gotocruise.tr/en"
    },
    {
        title: "GTS White-Label",
        eyebrow: "Multi-tenant platform system",
        summary:
            "A white-label OTA architecture enabling partner agencies to launch independent branded booking platforms from one shared front-end core.",
        details: [
            "Architected isolated themes, agency content, and configuration without duplicating the product codebase.",
            "Created scalable UI foundations for partner-specific travel flows and branded experiences.",
            "Reduced long-term maintenance by separating shared product logic from tenant presentation concerns."
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "i18n", "Config Architecture"],
        impact: "Multi-Tenant Architecture",
        status: "Architecture",
        url: "https://ipek.travel/en"
    },
    {
        title: "Cross-Device SMS Management Platform",
        eyebrow: "Full-stack utility product",
        summary:
            "A cross-device SMS management system with a Next.js dashboard, Fastify backend, Android SMS gateway, and Telegram bot control layer.",
        details: [
            "Built a web dashboard for managing Android SMS across web, iOS, and Telegram workflows.",
            "Connected the front-end to a Fastify backend and Android gateway for practical cross-device operations.",
            "Designed the product around reliable states, clear control surfaces, and operational visibility."
        ],
        stack: ["Next.js", "Fastify", "Android Gateway", "Telegram Bot", "TypeScript"],
        impact: "End-to-End System",
        status: "Full-Stack",
        url: "https://atsmsgatewaydemo.vercel.app"
    },
    {
        title: "IRExchanger",
        eyebrow: "OTC cryptocurrency exchange",
        summary:
            "A crypto exchange interface supporting 200+ coins with real-time rates, buy/sell flows, wallet dashboards, transaction tracking, and KYC onboarding.",
        details: [
            "Built trading views from scratch with WebSocket-driven price updates and responsive market UI.",
            "Implemented wallet and transaction flows for Bitcoin, Ethereum, Fantom, and other assets.",
            "Contributed UX improvements for a platform that reached 16K+ registered users and about 300 daily active users."
        ],
        stack: ["React", "Next.js", "TypeScript", "WebSocket", "PWA", "Blockchain UI"],
        impact: "Real-Time Fintech Product",
        status: "Fintech",
        url: "http://irexchanger.org/"
    },
    {
        title: "Telim",
        eyebrow: "AI and Fintech Platform",
        summary:
            "A multi-purpose platform spanning fintech, gold trading, cryptocurrency, and AI-driven personal assistance with per-user private data spaces.",
        details: [
            "Contributed dynamic user-driven UI patterns for private data spaces, memories, and contextual assistance.",
            "Worked on product areas that demanded flexible state handling and fast iteration across AI and fintech features.",
            "Collaborated inside a cross-functional engineering team across automation, AI vision, and product interfaces."
        ],
        stack: ["React", "Next.js", "TypeScript", "Axios", "PWA"],
        impact: "AI-Assisted Product UI",
        status: "Multi-Purpose",
        url: "https://telim.ir"
    },
    {
        title: "TripGate",
        eyebrow: "Visa Appointment Platform",
        summary:
            "A booking platform for US embassy appointment scheduling and visa application services with a streamlined, user-focused interface.",
        details: [
            "Built reusable components to clarify complex visa and appointment flows.",
            "Focused on fast loading, responsive design, and direct task completion for service users.",
            "Delivered a clean UI that reduces friction across high-stress application steps."
        ],
        stack: ["Next.js", "Tailwind", "Reusable Components", "Performance"],
        impact: "Visa Service UX",
        status: "Client Work",
        url: "https://tripgate.us"
    },
    {
        title: "Asan Tahator",
        eyebrow: "E-Commerce Platform",
        summary:
            "A commerce platform built from scratch as the sole front-end developer with modern architecture and fully responsive UI.",
        details: [
            "Architected product, commerce, and account interfaces using Next.js, GraphQL, Redux Toolkit, and Sass.",
            "Delivered pixel-perfect responsive screens across device sizes.",
            "Kept the implementation maintainable while moving quickly through contract delivery constraints."
        ],
        stack: ["Next.js", "GraphQL", "Redux Toolkit", "Sass"],
        impact: "E-Commerce Front-End",
        status: "Client Work",
        url: "https://aatcart.com/"
    },
    {
        title: "Personal Portfolio",
        eyebrow: "Developer Brand Website",
        summary:
            "A modern portfolio website showcasing my experience, projects, skills, and personal brand with a polished dark UI.",
        details: [
            "Built a premium hero with personal photo, logo branding, and macOS-style code profile card.",
            "Created responsive sections for projects, experience, skills, and contact.",
            "Added smooth animations and performance-conscious UI patterns."
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "Motion", "React", "Responsive UI"],
        impact: "Personal Brand",
        status: "Live Portfolio",
        url: "https://amirtofigh.vercel.com"
    }
];

export const skillGroups = [
    {
        title: "Core Engineering",
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Redux Toolkit",
            "Component Architecture",
            "Design Systems"
        ]
    },
    {
        title: "APIs & Real-Time",
        skills: ["REST", "GraphQL", "WebSocket", "Axios", "Supplier APIs", "Blockchain Wallet UI", "Live Data Feeds"]
    },
    {
        title: "Rendering & Performance",
        skills: ["SSR", "SSG", "PWA", "Rendering Strategy", "Responsive UI", "Core Web Vitals", "Bundle Optimization"]
    },
    {
        title: "Product & Tooling",
        skills: ["Tailwind CSS", "Sass", "Bootstrap", "i18n", "GA4", "Git", "Linux", "Python"]
    }
] as const;

export const principles = [
    "Architect for scale before the UI becomes hard to change",
    "Make complex flows feel calm, direct, and predictable",
    "Treat performance, localization, and analytics as product requirements",
    "Build reusable foundations instead of one-off screens",
    "Balance polished UI craft with production engineering constraints"
] as const;
