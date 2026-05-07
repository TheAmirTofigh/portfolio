import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { defaultMetadata } from "@/data/seo";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap"
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
    themeColor: "#05070c",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
