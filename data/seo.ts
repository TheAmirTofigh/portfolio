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
        "Senior Front-End Engineer portfolio focused on Next.js, React, TypeScript, OTA platforms, white-label systems, real-time interfaces, and polished product UI.",
    url: siteUrl,
    locale: "en_US",
    ogImage: "/opengraph-image",
    twitterImage: "/twitter-image",
    creator: profile.name,
    keywords: [
        profile.name,
        profile.role,
        "Senior Front-End Engineer Portfolio",
        "React Engineer",
        "Next.js Engineer",
        "TypeScript Developer",
        "Tailwind CSS Developer",
        "Redux Toolkit",
        "OTA Platform",
        "Travel Booking Platform",
        "White Label Architecture",
        "WebSocket UI",
        "Real-Time Dashboard",
        "Core Web Vitals",
        "Frontend Developer Iran"
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
