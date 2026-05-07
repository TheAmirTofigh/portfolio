"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedHeadline } from "@/components/animated-headline";
import { Reveal } from "@/components/reveal";
import { TypewriterText } from "@/components/typewriter-text";
import { profile, stats } from "@/data/portfolio";

const stackLine = [
    "Next.js",
    "React",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "REST APIs",
    "WebSocket",
    "Internationalization",
    "Core Web Vitals",
    "GA4"
];
const profileSignals = ["Performance Optimization", "Website Localization", "OTA Systems"];

export function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="top" className="section-shell relative min-h-screen overflow-hidden pt-12 sm:pt-16 lg:pt-28">
            <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] xl:gap-14">
                <div className="min-w-0 flex flex-col items-center sm:items-start">
                    <Reveal>
                        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/10 px-3 py-2 text-xs text-cyan-100 shadow-soft-glow sm:px-4 sm:text-sm">
                            <Sparkles className="size-4 shrink-0" aria-hidden="true" />
                            <TypewriterText
                                text="Senior front-end work across travel, fintech, crypto, and AI products."
                                speed={18}
                                delay={260}
                                className="min-w-0 text-center sm:text-start"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <AnimatedHeadline />
                    </Reveal>

                    <Reveal delay={0.18}>
                        <p className="text-center sm:text-start mt-7 max-w-2xl text-pretty text-base leading-8 text-soft md:text-lg">
                            {profile.intro}
                        </p>
                    </Reveal>

                    <Reveal delay={0.26}>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <motion.a
                                href={`mailto:${profile.email}`}
                                className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-night transition hover:bg-cyan-100"
                                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.015 }}
                                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                            >
                                <Mail className="size-4" aria-hidden="true" />
                                Start a Conversation
                                <ArrowUpRight
                                    className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </motion.a>
                            <motion.a
                                href={profile.resumePath}
                                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/8"
                                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.015 }}
                                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                            >
                                <Download className="size-4" aria-hidden="true" />
                                Download Resume
                            </motion.a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.34}>
                        <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-soft">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                                <MapPin className="size-4 text-cyan-glow" aria-hidden="true" />
                                {profile.location}
                            </span>
                            <span className="inline-flex items-center gap-2 text-center sm:text-start rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                                <ShieldCheck className="min-w-4 size-4 text-emerald-glow" aria-hidden="true" />
                                {profile.availability}
                            </span>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.18}>
                    <motion.div
                        className="glow-border glass relative mx-auto w-full max-w-136 rounded-4xl p-px will-change-transform md:rounded-[2.25rem]"
                        whileHover={reduceMotion ? undefined : { y: -6 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative overflow-hidden rounded-4xl bg-night/80 p-4 md:rounded-[2.25rem]">
                            <div
                                aria-hidden="true"
                                className="absolute -right-20 -top-24 size-72 rounded-full bg-cyan-glow/12 blur-3xl"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-24 left-10 size-64 rounded-full bg-violet-glow/10 blur-3xl"
                            />
                            <div className="flex items-center justify-between px-2.5 mt-1.5 mb-4 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="size-3 rounded-full bg-red-400/80" />
                                    <span className="size-3 rounded-full bg-yellow-300/80" />
                                    <span className="size-3 rounded-full bg-emerald-400/80" />
                                </div>
                                <div className="flex items-center gap-2 font-mono text-[11px] text-soft sm:text-xs">
                                    <Terminal className="size-4" aria-hidden="true" />
                                    senior-frontend.ts
                                </div>
                            </div>

                            <div className="relative grid gap-4">
                                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/3">
                                    <div className="relative aspect-[1.12/1] overflow-hidden">
                                        <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/12 bg-night/70 px-3 py-2 text-[11px] font-medium tracking-[0.18em] text-white/80 backdrop-blur-xl sm:text-xs">
                                            Amir Tofigh
                                        </div>

                                        <div className="absolute left-4 top-1 z-10">
                                            <Image
                                                src="/logo-mark.png"
                                                alt="logo"
                                                width={64}
                                                height={64}
                                                className="size-14 w-auto"
                                            />
                                        </div>

                                        <Image
                                            src="/profile-avatar.png"
                                            alt="Portrait of Amir Tofigh"
                                            width={1122}
                                            height={1402}
                                            priority
                                            className="h-full w-full object-cover object-[50%_24%]"
                                        />

                                        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-night via-night/55 to-transparent" />

                                        <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                                            {profileSignals.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-white/12 bg-night/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-xl"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative rounded-[1.6rem] border border-white/10 bg-night/80 px-4 py-2.5 shadow-2xl">
                                    <div className="overflow-x-auto font-mono text-xs leading-6">
                                        <p className="text-soft">
                                            <span className="text-orange-500/75">const </span> ENGINEER = &#123;
                                        </p>
                                        <p className="ms-4">
                                            <span className="text-violet-glow">name</span>:{" "}
                                            <span className="text-cyan-glow">&quot;{profile.name}&quot;</span>,
                                        </p>
                                        <p className="ms-4">
                                            <span className="text-violet-glow">role</span>:{" "}
                                            <span className="text-cyan-glow">&quot;{profile.role}&quot;</span>,
                                        </p>
                                        <p className="ms-4">
                                            <span className="text-violet-glow">domain</span>:{" "}
                                            <span className="text-cyan-glow">&quot;OTA + Fintech + AI&quot;</span>,
                                        </p>
                                        <p className="ms-4">
                                            <span className="text-violet-glow">systems</span>:{" "}
                                            <span className="text-cyan-glow">
                                                [&quot;Booking&quot;, &quot;White-Label&quot;, &quot;Real-Time&quot;]
                                            </span>
                                            ,
                                        </p>
                                        <p className="ms-4">
                                            <span className="text-violet-glow">standard</span>:{" "}
                                            <span className="text-cyan-glow">
                                                [&quot;Fast&quot;, &quot;Polished&quot;, &quot;Scalable&quot;]
                                            </span>
                                            ,
                                        </p>
                                        <p className="text-soft">&#125;</p>
                                    </div>
                                </div>

                                <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                                    <div className="flex w-max animate-marquee gap-2 px-3">
                                        {[...stackLine, ...stackLine].map((item, index) => (
                                            <span
                                                key={`${item}-${index}`}
                                                className="rounded-full border border-white/10 bg-white/4.5 px-3 py-1 text-xs text-mist/80"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Reveal>
            </div>

            <Reveal delay={0.42}>
                <div className="mt-12 grid gap-3 sm:mt-14 grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="glass group relative overflow-hidden rounded-3xl p-5"
                            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            whileHover={reduceMotion ? undefined : { y: -4 }}
                        >
                            <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-glow/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                            <p className="text-3xl font-semibold tracking-tighter text-white">
                                <AnimatedCounter value={stat.value} />
                            </p>
                            <p className="mt-2 text-sm leading-6 text-soft">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Reveal>

            <div className="mt-12 flex justify-center pb-10">
                <a
                    href="/#work"
                    aria-label="Scroll to work section"
                    className="focus-ring grid size-11 animate-float place-items-center rounded-full border border-white/10 bg-white/4 text-white/70 transition hover:text-white"
                >
                    <ArrowDown className="size-5" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
