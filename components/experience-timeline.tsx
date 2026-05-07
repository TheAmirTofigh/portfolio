"use client";

import { BriefcaseBusiness } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 hidden h-full w-px overflow-hidden bg-white/10 md:block">
                <motion.div
                    className="h-full w-full origin-top bg-linear-to-b from-cyan-glow/0 via-cyan-glow/70 to-violet-glow/0"
                    initial={reduceMotion ? false : { scaleY: 0 }}
                    whileInView={reduceMotion ? undefined : { scaleY: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            <div className="space-y-5">
                {experiences.map((experience, index) => (
                    <Reveal key={experience.company} delay={index * 0.08}>
                        <motion.article
                            className="glass group relative overflow-hidden rounded-[2rem] p-5 will-change-transform sm:p-6 md:ml-12 md:p-8"
                            whileHover={reduceMotion ? undefined : { y: -4 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="absolute -left-[3.25rem] top-8 hidden size-9 place-items-center rounded-full border border-cyan-glow/25 bg-night text-cyan-glow shadow-[0_0_0_8px_rgba(103,232,249,0.035)] md:grid">
                                <BriefcaseBusiness className="size-4" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-glow/45 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                <div className="min-w-0">
                                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-glow/75 sm:tracking-[0.28em]">
                                        {experience.period}
                                    </p>
                                    <h3 className="mt-3 text-[1.55rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl">
                                        {experience.role}
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-soft">
                                        {experience.company} / {experience.location}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                                    {experience.stack.map((item) => (
                                        <span
                                            key={item}
                                            className="skill-pill rounded-full px-3 py-1 text-xs transition group-hover:border-cyan-glow/20 group-hover:text-white"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="mt-6 text-pretty text-sm leading-7 text-mist/80">{experience.summary}</p>
                            <ul className="mt-6 grid gap-3 text-sm leading-6 text-soft md:grid-cols-3">
                                {experience.achievements.map((achievement, achievementIndex) => (
                                    <motion.li
                                        key={achievement}
                                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.42, delay: achievementIndex * 0.06 }}
                                    >
                                        {achievement}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.article>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
