"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/portfolio";
import Link from "next/link";

type ProjectCardProps = {
    project: Project;
    index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            className="glow-border glass group relative h-full rounded-[2rem] p-[1px] will-change-transform"
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.99 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-64px", amount: 0.18 }}
            transition={{ duration: 0.46, delay: Math.min(index * 0.035, 0.22), ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
        >
            <Link href={project?.url} target={"_blank"}>
                <div className="relative h-full overflow-hidden rounded-4xl bg-night/70 p-5 sm:p-6 md:p-7">
                    <div className="absolute -right-14 -top-14 size-44 rounded-full bg-cyan-glow/10 blur-3xl transition-opacity duration-500 group-hover:opacity-75" />
                    <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-cyan-glow/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-full flex-col">
                        <div className="mb-7 flex-col items-start gap-4">
                            <div className="flex items-start justify-between gap-2">
                                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.26em] text-cyan-glow/70 sm:text-[11px]">
                                    {project.eyebrow}
                                </p>
                                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-soft sm:text-xs">
                                    {project.status}
                                </span>
                            </div>
                            <h3 className="text-[1.55rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl">
                                {project.title}
                            </h3>
                        </div>

                        <p className="text-pretty text-sm leading-7 text-soft">{project.summary}</p>

                        <ul className="mt-7 space-y-3">
                            {project.details.map((detail) => (
                                <li key={detail} className="flex gap-3 text-sm leading-6 text-mist/85">
                                    <CheckCircle2
                                        className="mt-0.5 size-4 shrink-0 text-emerald-glow"
                                        aria-hidden="true"
                                    />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="skill-pill rounded-full px-3 py-1 text-xs transition group-hover:border-cyan-glow/20 group-hover:text-white"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                                {project.impact}
                            </span>
                            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:border-cyan-glow/40 group-hover:bg-cyan-glow/10">
                                <ArrowUpRight
                                    className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
