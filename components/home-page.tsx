"use client";

import { ArrowUpRight, Cpu, Gauge, Layers3, Mail, Radio } from "lucide-react";
import { LinkedInIcon } from "@/components/social-icons";
import { motion, useReducedMotion } from "motion/react";
import { ContactCard } from "@/components/contact-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteNav } from "@/components/site-nav";
import { SkillsPanel } from "@/components/skills-panel";
import { focusAreas, profile, projects } from "@/data/portfolio";
import Image from "next/image";

const focusIcons = [Cpu, Layers3, Radio, Gauge];

export function HomePage() {
    const reduceMotion = useReducedMotion();

    return (
        <>
            <SiteNav />
            <main>
                <Hero />

                <section id="work" className="section-shell py-8 md:py-16">
                    <SectionHeading
                        eyebrow="Experience"
                        title="Senior Front-End Work Across Complex, High-Traffic Product Systems"
                        description="My strongest work sits at the intersection of polished UI craft and production engineering: complex booking flows, admin systems, real-time trading interfaces, supplier APIs, and scalable architecture."
                    />
                    <ExperienceTimeline />
                </section>

                <section id="systems" className="section-shell py-8 md:py-16">
                    <SectionHeading
                        eyebrow="System Strengths"
                        title="Built for Complex Products, Not Just Beautiful Screens"
                        description="The portfolio is positioned around the systems I have actually shipped: multi-service OTA flows, partner white-label platforms, real-time dashboards, and performance-focused Next.js architecture."
                    />
                    <div className="grid gap-5 md:grid-cols-2">
                        {focusAreas.map((area, index) => {
                            const Icon = focusIcons[index] ?? Cpu;
                            return (
                                <Reveal key={area.title} delay={index * 0.06}>
                                    <motion.article
                                        className="glow-border glass group h-full rounded-4xl p-px will-change-transform"
                                        whileHover={reduceMotion ? undefined : { y: -5 }}
                                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="relative h-full overflow-hidden rounded-4xl bg-night/75 p-5 sm:p-6 md:p-8">
                                            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-cyan-glow/10 blur-3xl transition group-hover:bg-violet-glow/15" />
                                            <div className="relative flex h-full flex-col">
                                                <div className="flex items-start justify-between gap-4">
                                                    <span className="grid size-12 place-items-center rounded-2xl border border-cyan-glow/20 bg-cyan-glow/10 text-cyan-glow">
                                                        <Icon className="size-6" aria-hidden="true" />
                                                    </span>
                                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                                                        0{index + 1}
                                                    </span>
                                                </div>
                                                <h3 className="mt-7 text-[1.55rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl">
                                                    {area.title}
                                                </h3>
                                                <p className="mt-4 text-pretty text-sm leading-7 text-soft">
                                                    {area.description}
                                                </p>
                                                <p className="mt-auto pt-8 font-mono text-xs uppercase tracking-[0.22em] text-cyan-glow/70">
                                                    {area.signal}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.article>
                                </Reveal>
                            );
                        })}
                    </div>
                </section>

                <section id="projects" className="section-shell py-8 md:py-16">
                    <SectionHeading
                        eyebrow="Selected Projects"
                        title="Projects That Required Senior-Level Engineering Judgment"
                        description="These projects show the range behind the resume: OTA platforms, white-label architecture, real-time crypto systems, AI interfaces, full-stack utilities, visa booking, and e-commerce delivery."
                    />
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </section>

                <section id="skills" className="section-shell py-8 md:py-16">
                    <SectionHeading
                        eyebrow="Skill Stack"
                        title="Modern React Engineering with Systems-Level Front-End Thinking"
                        description="A focused stack around Next.js, TypeScript, Redux Toolkit, API integration, real-time state, performance, localization, analytics, and highly responsive UI systems."
                    />
                    <SkillsPanel />
                </section>

                <section className="section-shell py-8 md:py-16">
                    <Reveal>
                        <motion.div
                            className="glass overflow-hidden rounded-[2.25rem] p-6 sm:p-8 md:rounded-[2.5rem] md:p-10"
                            whileHover={reduceMotion ? undefined : { y: -3 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet-glow/80">
                                        Positioning
                                    </p>
                                    <h2 className="mt-4 text-balance text-[1.6rem] md:text-[2.5rem] font-bold leading-[1.2] tracking-[-0.06em] text-white">
                                        I Work Best Where <span className="text-gradient"> Product </span> Complexity,
                                        Data Flow, and <span className="text-gradient"> Engineering </span> Craft
                                        Intersect
                                    </h2>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Booking engines and reservation journeys",
                                        "Multi-tenant white-label platforms",
                                        "Real-Time trading and operational dashboards",
                                        "Localization, performance, and analytics architecture"
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item}
                                            className="rounded-3xl border border-white/10 glass p-4 transition hover:border-cyan-glow/25! hover:backdrop-blur-3xl!"
                                            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                                            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.25 }}
                                            transition={{
                                                duration: 0.38,
                                                delay: index * 0.04,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                            whileHover={reduceMotion ? undefined : { y: -3 }}
                                        >
                                            <p className="font-mono text-xs text-cyan-glow/70">0{index + 1}</p>
                                            <p className="mt-4 text-sm leading-6 text-mist/85">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </Reveal>
                </section>

                <ContactCard />
            </main>

            <footer className="section-shell pb-28 md:pb-10">
                <div className="flex flex-col gap-5 border-t border-white/10 py-8 text-sm text-soft md:flex-row items-center md:justify-between">
                    <div className="flex items-center gap-2">
                        <p className="text-center md:text-start">
                            © {new Date().getFullYear()} <span className="font-bold">{profile.name}</span>
                        </p>
                        <span className="h-6 w-px bg-linear-to-b from-cyan-glow/0 via-cyan-glow/70 to-violet-glow/0" />
                        <div className="relative">
                            <Image src="/logo-mark.png" alt="logo" width={64} height={64} className="size-7 w-auto" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <a
                            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/25 hover:text-white"
                            href={`mailto:${profile.email}`}
                        >
                            <Mail className="size-4" aria-hidden="true" /> Email
                        </a>
                        <a
                            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/25 hover:text-white"
                            href={profile.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon className="size-4" /> LinkedIn
                        </a>
                        <a
                            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/25 hover:text-white"
                            href="/#top"
                        >
                            Back to top <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
