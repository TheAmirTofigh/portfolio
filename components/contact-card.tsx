"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/social-icons";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";
import Link from "next/link";

export function ContactCard() {
    const reduceMotion = useReducedMotion();

    return (
        <Reveal>
            <section id="contact" className="section-shell py-8 md:py-16">
                <motion.div
                    className="glow-border glass relative overflow-hidden rounded-[2.25rem] p-[1px] md:rounded-[2.5rem]"
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="relative overflow-hidden rounded-[2.25rem] bg-night/80 p-6 sm:p-8 md:rounded-[2.5rem] md:p-12 lg:p-14">
                        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-cyan-glow/12 blur-3xl" />
                        <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-violet-glow/12 blur-3xl" />

                        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                            <div className="min-w-0">
                                <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-glow/80">
                                    Contact
                                </p>
                                <h2 className="mt-4 text-balance text-[2rem] md:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.065em] text-white">
                                    Need a Senior{" "}
                                    <span className="inline-block whitespace-nowrap text-gradient"> Front-End </span>
                                    Engineer for a Serious Product Surface?
                                </h2>
                                <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-soft">
                                    I can help with Next.js architecture, OTA booking flows, real-time dashboards,
                                    white-label front-end systems, admin panels, localization, Core Web Vitals, and
                                    premium responsive UI delivery.
                                </p>
                            </div>

                            <div className="min-w-0 space-y-3">
                                <Link
                                    href={`mailto:${profile.email}`}
                                    className="focus-ring group flex min-w-0 items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/4.5 p-4 text-white transition hover:border-cyan-glow/35 hover:bg-cyan-glow/10 sm:p-5"
                                >
                                    <span className="flex min-w-0 items-center gap-3">
                                        <Mail className="size-5 shrink-0 text-cyan-glow" aria-hidden="true" />
                                        <span className="break-all">{profile.email}</span>
                                    </span>
                                    <ArrowUpRight
                                        className="size-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </Link>
                                <Link
                                    href={profile.linkedIn}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="focus-ring group flex min-w-0 items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-white transition hover:border-violet-glow/35 hover:bg-violet-glow/10 hover:text-white sm:p-5"
                                >
                                    <span className="flex min-w-0 items-center gap-3">
                                        <LinkedInIcon className="size-5 shrink-0 text-violet-glow" />
                                        <span className="break-all">My LinkedIn Profile</span>
                                    </span>
                                    <ArrowUpRight
                                        className="size-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </Link>
                                <Link
                                    href={`tel:${profile.phone}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="focus-ring group flex min-w-0 items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-white transition hover:border-violet-glow/35 hover:bg-violet-glow/10 hover:text-white sm:p-5"
                                >
                                    <span className="flex min-w-0 items-center gap-3">
                                        <Phone className="size-5 shrink-0 text-violet-glow" aria-hidden="true" />
                                        <span className="break-all">{profile.phoneBreak}</span>
                                    </span>
                                    <ArrowUpRight
                                        className="size-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </Link>
                                <div className="flex min-w-0 items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-soft sm:p-5">
                                    <MapPin className="size-5 shrink-0 text-emerald-glow" aria-hidden="true" />
                                    <span>{profile.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Reveal>
    );
}
