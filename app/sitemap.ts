import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        }
    ];
}
