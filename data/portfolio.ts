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
    role: "Front-End Engineer (React / Next.js)",
    location: "Tehran, Iran · Open to relocate, remote, or hybrid work",
    email: "amir.tgh1381@gmail.com",
    phone: "+989032522311",
    phoneBreak: "+98 903 252 2311",
    linkedIn: "https://linkedin.com/in/amirtofigh",
    headline:
        "Front-End Engineer with 4+ years of experience building production web applications with React, Next.js, TypeScript, Redux Toolkit, and modern UI systems.",
    intro: "I'm a front-end engineer with 4+ years building production web applications in React, Next.js, and TypeScript. I'm currently the primary front-end owner of a multi-product travel booking platform, covering flights, hotels, cruises, car rental, and white-label partner sites, all built on one shared, multi-tenant codebase across multiple languages and currencies. Earlier, I built real-time trading dashboards and wallet interfaces for a fintech and crypto platform. I like owning things end to end: architecture, state management, and the details that only show up once real users do.",
    availability: "Open to front-end, React.js, Next.js, and product engineering roles.",
    resumePath: "/Amir-Tofigh-Resume.pdf",
    github: "https://github.com/TheAmirTofigh",
    socials: [
        { label: "Email", href: "mailto:amir.tgh1381@gmail.com" },
        { label: "LinkedIn", href: "https://linkedin.com/in/amirtofigh" },
        { label: "GitHub", href: "https://github.com/TheAmirTofigh" }
    ]
} as const;

export const stats = [
    { value: "4+", label: "Years building production front-ends" },
    { value: "8", label: "Selected projects featured in my resume" },
    { value: "5000+", label: "Users across projects in production" },
    { value: "React", label: "Core stack with Next.js and TypeScript" }
] as const;

export const navItems = [
    { label: "Work", href: "#work" },
    { label: "Strengths", href: "#systems" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
] as const;

export const experiences: Experience[] = [
    {
        company: "Ipek Yolu Araz (GoToSafar)",
        location: "Full-time - Hybrid · Tabriz, Iran",
        role: "Front-End Engineer",
        period: "May 2023 - Present",
        summary:
            "Primary front-end owner of GoToSafar's booking platform, admin panel, GoToCruise, and white-label partner products.",
        achievements: [
            "Built scalable React/Next.js interfaces for flights, hotels, cruises, car rental, transfers, tours, visa, and related travel flows.",
            "Developed reusable front-end architecture for multi-tenant, multi-language, and multi-currency products from a shared codebase.",
            "Improved performance, state management, localization, and API integration across production booking and admin features.",
            "Own features end to end, from architecture through release, working with backend and product teams rather than only implementing designs."
        ],
        stack: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "i18n", "Axios", "PWA", "GA4"]
    },
    {
        company: "Mahan Pardakht / Negin Fannavaran Arta",
        location: "Full-time - Hybrid · Tabriz, Iran",
        role: "Front-End Developer",
        period: "January 2022 - April 2023",
        summary:
            "Built and maintained React/Next.js interfaces for fintech, crypto, gold trading, AI, security, and business platforms.",
        achievements: [
            "Developed real-time trading dashboards, wallet/payment UIs, KYC/account flows, and admin interfaces using REST APIs and WebSocket updates.",
            "Contributed to crypto and trading products with 200+ coin support, live price feeds, wallet operations, and transaction tracking.",
            "Delivered responsive UI and reusable components across multiple products while improving usability, performance, and maintainability."
        ],
        stack: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Axios", "WebSocket", "Sass", "PWA"]
    },
    {
        company: "Web Negah",
        location: "Contract - Remote · Tehran, Iran",
        role: "Front-End Developer (Contract)",
        period: "November 2022 - February 2023",
        summary: "Built the Asan Tahator front end from scratch using Next.js, GraphQL, Redux Toolkit, and Sass.",
        achievements: [
            "Delivered responsive, pixel-accurate UI with clean component structure and maintainable styling.",
            "Built a maintainable e-commerce front end using modern React, GraphQL, Redux Toolkit, and Sass."
        ],
        stack: ["Next.js", "GraphQL", "Redux Toolkit", "Sass"]
    }
];

export const focusAreas: FocusArea[] = [
    {
        title: "Production Web Applications",
        description:
            "React, Next.js, TypeScript, Redux Toolkit, and modern UI systems for real products, not static demos.",
        signal: "React · Next.js · TypeScript · Redux Toolkit"
    },
    {
        title: "Dashboards, Admin Panels & Booking Flows",
        description:
            "Scalable interfaces for operations, reservations, user management, product flows, and complex multi-step journeys.",
        signal: "Dashboards · Admin panels · Booking UX"
    },
    {
        title: "API-Driven & Real-Time Interfaces",
        description:
            "Front-end products connected to REST, GraphQL, Axios, WebSocket updates, live data, wallet flows, and transaction tracking.",
        signal: "REST · GraphQL · WebSocket · Axios"
    },
    {
        title: "Performance, Localization & Maintainability",
        description:
            "Clean architecture, responsive UI, Core Web Vitals, bundle optimization, i18n, GA4, and maintainable front-end code.",
        signal: "CWV · Responsive UI · i18n · GA4"
    }
];

export const projects: Project[] = [
    {
        title: "GoToSafar",
        eyebrow: "Travel Booking Platform",
        summary:
            "Multi-service travel booking platform supporting flights, hotels, cruises, car rental, tours, transfers, and visa services.",
        details: [],
        stack: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "GA4"],
        impact: "Travel Product",
        status: "Production",
        url: "https://gotosafar.com/en/home"
    },
    {
        title: "GoToCruise",
        eyebrow: "Cruise Booking Platform",
        summary: "Cruise booking platform with real-time availability and end-to-end reservation flows.",
        details: [],
        stack: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "i18n"],
        impact: "Booking Flow",
        status: "Production",
        url: "https://gotocruise.tr/en"
    },
    {
        title: "GTS White-Label",
        eyebrow: "White-Label Platform",
        summary: "White-label booking platform powering multiple partner brands from the same shared codebase as GoToSafar.",
        details: [],
        stack: ["Next.js", "TypeScript", "i18n", "Tailwind CSS", "Multi-Tenant UI"],
        impact: "Partner Products",
        status: "Production",
        url: "https://ipek.travel/en"
    },
    {
        title: "Cross-Device SMS Management Platform",
        eyebrow: "Full-Stack Utility Product",
        summary:
            "Cross-device SMS management system with a Next.js dashboard, Android gateway app, Fastify backend, and Telegram-based notifications. Built independently, outside of work.",
        details: [],
        stack: ["Next.js", "Fastify", "Android Gateway", "Telegram Bot", "TypeScript"],
        impact: "Utility Product",
        status: "Independent Project",
        url: "https://atsmsgatewaydemo.vercel.app"
    },
    {
        title: "IRExchanger",
        eyebrow: "OTC Cryptocurrency Exchange",
        summary: "OTC cryptocurrency exchange with 200+ coins, live market data, and wallet integrations.",
        details: [],
        stack: ["React.js", "Next.js", "TypeScript", "WebSocket", "PWA"],
        impact: "Fintech Product",
        status: "Production",
        url: "http://irexchanger.org/"
    },
    {
        title: "Telim",
        eyebrow: "AI & Fintech Platform",
        summary: "AI-powered platform combining fintech, crypto, gold trading, and personalized user workspaces.",
        details: [],
        stack: ["React.js", "Next.js", "TypeScript", "Axios", "PWA"],
        impact: "AI Product UI",
        status: "Product UI",
        url: "https://telim.ir"
    },
    {
        title: "TripGate",
        eyebrow: "Visa Appointment Platform",
        summary: "Visa and US embassy appointment platform with a streamlined booking experience.",
        details: [],
        stack: ["Next.js", "Tailwind CSS", "Responsive UI", "Reusable Components"],
        impact: "Service Booking",
        status: "Client Work",
        url: "https://tripgate.us"
    },
    {
        title: "Asan Tahator",
        eyebrow: "E-Commerce Platform",
        summary: "E-commerce platform built from scratch with Next.js and a fully responsive user interface.",
        details: [],
        stack: ["Next.js", "GraphQL", "Redux Toolkit", "Sass"],
        impact: "E-Commerce UI",
        status: "Client Work",
        url: "https://aatcart.com/"
    }
];

export const skillGroups = [
    {
        title: "Front-End",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", "Sass", "Bootstrap"]
    },
    {
        title: "APIs & Data",
        skills: ["REST", "GraphQL", "Axios", "WebSocket", "i18n", "GA4 Ecommerce Tracking"]
    },
    {
        title: "Performance & Tooling",
        skills: ["SSR", "SSG", "PWA", "Core Web Vitals", "Bundle Optimization", "Git", "Python Basics", "Linux Basics"]
    },
    {
        title: "Product UI",
        skills: ["Dashboards", "Admin Panels", "Booking Flows", "Real-Time Interfaces", "Responsive UI", "Clean Architecture"]
    }
] as const;

export const principles = [
    "Build clean, maintainable front-end code that other developers can extend",
    "Make complex product flows feel simple, responsive, and predictable",
    "Treat performance, localization, and accessibility as part of the product",
    "Use reusable components and shared architecture instead of one-off screens",
    "Balance polished UI craft with practical production delivery"
] as const;
