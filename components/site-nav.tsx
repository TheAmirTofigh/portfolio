"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useMemo, useState} from "react";
import {ArrowUpRight, Sparkles} from "lucide-react";
import {motion, useReducedMotion} from "motion/react";
import {NavIcon} from "@/components/nav-icons";
import {ScrollProgress} from "@/components/scroll-progress";
import {navItems, profile} from "@/data/portfolio";

type NavId = "work" | "systems" | "projects" | "skills" | "contact";

const iconMap: Record<NavId, NavId> = {
    work: "work",
    systems: "systems",
    projects: "projects",
    skills: "skills",
    contact: "contact"
};

function getId(href: string) {
    return href.replace("#", "") as NavId;
}

export function SiteNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [activeSection, setActiveSection] = useState<NavId | null>(null);
    const reduceMotion = useReducedMotion();

    const ids = useMemo(() => navItems.map((item) => getId(item.href)), []);

    useEffect(() => {
        let previousY = window.scrollY;
        let rafId: number | null = null;

        const getActiveSection = (): NavId | null => {
            const y = window.scrollY;
            const activationPoint = y + Math.min(window.innerHeight * 0.38, 360);
            const topSection = document.getElementById("top");

            // Keep the nav visually quiet while the visitor is still in the hero.
            if (topSection) {
                const topEnd = topSection.offsetTop + topSection.offsetHeight;

                if (activationPoint < topEnd - 80) {
                    return null;
                }
            }

            let current: NavId | null = null;

            for (const id of ids) {
                const element = document.getElementById(id);

                if (!element) continue;

                if (activationPoint >= element.offsetTop - 120) {
                    current = id;
                }
            }

            return current;
        };

        const update = () => {
            const y = Math.max(window.scrollY, 0);
            const delta = y - previousY;
            const nearTop = y < 96;

            setIsScrolled(y > 16);

            // Hide only on intentional downward scrolls to avoid flicker on small touchpad movements.
            if (nearTop) {
                setIsHeaderVisible(true);
            } else if (Math.abs(delta) > 4) {
                setIsHeaderVisible(delta < 0);
            }

            setActiveSection(getActiveSection());
            previousY = y;
            rafId = null;
        };

        const scheduleUpdate = () => {
            if (rafId !== null) return;
            rafId = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", scheduleUpdate, {passive: true});
        window.addEventListener("resize", scheduleUpdate);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);

            if (rafId !== null) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, [ids]);

    return (
        <>
            <ScrollProgress/>
            <motion.header
                className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-6 sm:px-4"
                initial={reduceMotion ? false : {y: -18, opacity: 0}}
                animate={reduceMotion ? undefined : {y: isHeaderVisible ? 0 : -88, opacity: isHeaderVisible ? 1 : 0}}
                transition={{duration: 0.34, ease: [0.22, 1, 0.36, 1]}}
            >
                <nav
                    aria-label="Primary navigation"
                    className={`mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full px-2 transition-[background,border-color,box-shadow] duration-300 ${
                        isScrolled
                            ? "glass shadow-soft-glow"
                            : "border border-white/10 bg-white/[0.035] backdrop-blur-xl"
                    }`}
                >
                    <Link
                        href="/#top"
                        className="focus-ring group flex min-w-0 items-center gap-2 rounded-full"
                        aria-label="Back to top"
                    >
                        <span
                            className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/6 transition group-hover:border-cyan-glow/30 group-hover:bg-white/9">
                            <Image
                                src="/logo-mark.png"
                                alt="Amir Tofigh logo"
                                width={100}
                                height={100}
                                className="size-8 w-auto"
                                priority
                            />
                        </span>
                        <span className="flex min-w-0 flex-col">
                            <span className="truncate text-sm font-semibold leading-none text-white">Amir Tofigh</span>
                            <span
                                className="mt-1 hidden truncate text-[12px] uppercase tracking-[0.16em] text-white/45 sm:flex">
                                Senior Front-End Engineer
                            </span>
                        </span>
                    </Link>

                    <div className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => {
                            const id = getId(item.href);
                            const isActive = activeSection === id;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`focus-ring relative rounded-full px-4 py-2 text-sm transition ${
                                        isActive ? "text-white" : "text-soft hover:bg-white/6 hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="desktop-active-section"
                                            className="absolute inset-0 -z-10 rounded-full border border-cyan-glow/20 bg-cyan-glow/10"
                                            transition={{duration: 0.28, ease: [0.22, 1, 0.36, 1]}}
                                        />
                                    )}
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        href={`mailto:${profile.email}`}
                        className="focus-ring group inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/10 px-3 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-glow/45 hover:bg-cyan-glow/15 sm:px-4"
                    >
                        <Sparkles className="size-4" aria-hidden="true"/>
                        <span className="inline">Hire me</span>
                        <ArrowUpRight
                            className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                        />
                    </Link>
                </nav>
            </motion.header>

            <nav
                aria-label="Mobile section navigation"
                className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-md -translate-x-1/2 rounded-[1.55rem] border border-white/10 bg-night/80 p-1.5 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
                <div className="grid grid-cols-5 gap-1">
                    {navItems.map((item) => {
                        const id = getId(item.href);
                        const isActive = activeSection === id;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`focus-ring relative flex min-w-0 flex-col items-center justify-center gap-1 rounded-[1.2rem] px-1.5 py-2 text-[10px] font-medium transition ${
                                    isActive ? "text-white" : "text-soft hover:bg-white/6 hover:text-white"
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="mobile-active-section"
                                        className="absolute inset-0 -z-10 rounded-[1.2rem] border border-cyan-glow/20 bg-cyan-glow/12 shadow-[0_0_28px_rgba(103,232,249,0.14)]"
                                        transition={{duration: 0.28, ease: [0.22, 1, 0.36, 1]}}
                                    />
                                )}
                                <NavIcon
                                    name={iconMap[id]}
                                    className={`size-4 transition ${isActive ? "text-cyan-glow" : "text-white/45"}`}
                                />
                                <span className="truncate leading-none">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
