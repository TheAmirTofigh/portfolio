import type { Metadata } from "next";
import { profile, projects, skillGroups } from "@/data/portfolio";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://amirtofigh.vercel.app").replace(/\/+$/, "");

/**
 * Keep every public URL in one place so canonical tags, sitemap, robots, and
 * structured data stay consistent after moving between local, Vercel, and a
 * custom domain.
 */
export const siteConfig = {
    name: `${profile.name} Portfolio`,
    title: `${profile.name} - ${profile.role}`,
    description:
        "Front-End Developer portfolio focused on React, Next.js, TypeScript, Redux Toolkit, dashboards, admin panels, booking flows, API-driven products, performance, localization, and responsive UI.",
    url: siteUrl,
    locale: "en_US",
    ogImage: "/opengraph-image",
    twitterImage: "/twitter-image",
    creator: profile.name,
    keywords: [
        profile.name,
        profile.role,
        "Front-End Developer Portfolio",
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "Redux Toolkit",
        "Tailwind CSS Developer",
        "Frontend Developer Iran",
        "Production Web Applications",
        "Dashboard Developer",
        "Admin Panel Developer",
        "Booking Flow Developer",
        "API Driven Products",
        "WebSocket UI",
        "Responsive UI",
        "Core Web Vitals"
    ]
} as const;

export function getAbsoluteUrl(path = "/") {
    return new URL(path, siteConfig.url).toString();
}

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
        default: siteConfig.title,
        template: `%s | ${profile.name}`
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: profile.name, url: profile.linkedIn }],
    creator: siteConfig.creator,
    publisher: profile.name,
    category: "technology",
    alternates: {
        canonical: "/"
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
        }
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        type: "profile",
        locale: siteConfig.locale,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${profile.name} - ${profile.role}`
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.twitterImage]
    },
    icons: {
        icon: [
            { url: "/logo-mark-256.png", sizes: "256x256", type: "image/png" },
            { url: "/favicon.svg", type: "image/svg+xml" }
        ],
        apple: [{ url: "/logo-mark-256.png", sizes: "256x256", type: "image/png" }]
    },
    manifest: "/manifest.webmanifest"
};

export function getPortfolioJsonLd() {
    const personId = `${siteConfig.url}/#person`;
    const websiteId = `${siteConfig.url}/#website`;
    const profilePageId = `${siteConfig.url}/#profile-page`;

    const skills = skillGroups.flatMap((group) => group.skills);

    return [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": personId,
            name: profile.name,
            jobTitle: profile.role,
            email: profile.email,
            telephone: profile.phone,
            image: getAbsoluteUrl("/profile-avatar.png"),
            url: siteConfig.url,
            sameAs: [profile.linkedIn],
            address: {
                "@type": "PostalAddress",
                addressLocality: "Tabriz",
                addressCountry: "IR"
            },
            knowsAbout: skills,
            worksFor: {
                "@type": "Organization",
                name: "GoToSafar"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": websiteId,
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            inLanguage: "en",
            author: { "@id": personId }
        },
        {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": profilePageId,
            name: siteConfig.title,
            url: siteConfig.url,
            description: siteConfig.description,
            inLanguage: "en",
            isPartOf: { "@id": websiteId },
            mainEntity: { "@id": personId },
            about: projects.map((project) => ({
                "@type": "CreativeWork",
                name: project.title,
                description: project.summary,
                url: project.url
            }))
        }
    ];
}
