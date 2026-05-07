import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    turbopack: {
        root: path.join(__dirname)
    },
    experimental: {
        optimizePackageImports: ["lucide-react", "motion"]
    }
};

export default nextConfig;
