"use client";

import { Code2, Layers3, Network, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { principles, skillGroups } from "@/data/portfolio";

const icons = [Code2, Layers3, Network, Wrench];

export function SkillsPanel() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
                <div className="grid gap-4 md:grid-cols-2 h-full">
                    {skillGroups.map((group, index) => {
                        const Icon = icons[index] ?? Code2;
                        return (
                            <motion.section
                                key={group.title}
                                className="group rounded-3xl border border-white/10 glass p-5 transition hover:border-cyan-glow/25! hover:backdrop-blur-3xl! will-change-transform"
                                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={reduceMotion ? undefined : { y: -3 }}
                            >
                                <div className="mb-5 w-full flex items-center gap-2">
                                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-cyan-glow/20 bg-cyan-glow/10 text-cyan-glow transition group-hover:scale-105">
                                        <Icon className="size-5" aria-hidden="true" />
                                    </span>
                                    <h3 className="font-semibold text-white">{group.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            className="skill-pill rounded-full px-3 py-1.5 text-xs transition group-hover:border-cyan-glow/20 group-hover:text-white"
                                            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                                            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.28, delay: index * 0.04 + skillIndex * 0.018 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.section>
                        );
                    })}
                </div>
            </Reveal>

            <Reveal delay={0.08}>
                <aside className="glass h-full overflow-hidden rounded-[2rem] p-5 sm:p-6 md:p-8">
                    <motion.div
                        className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-glow to-violet-glow"
                        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                        whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-glow/80">
                        Working principles
                    </p>
                    <h3 className="mt-4 text-[1.25rem] sm:text-[1.5rem] font-bold leading-tight tracking-tighter text-white">
                        How I Approach Front-End Work
                    </h3>
                    <div className="mt-8 space-y-3">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle}
                                className="group flex items-center gap-3 rounded-2xl border border-white/10 glass p-4 transition hover:border-violet-glow/25! hover:backdrop-blur-3xl!"
                                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.42, delay: index * 0.05 }}
                            >
                                <span className="font-mono text-sm text-cyan-glow/80 transition group-hover:text-cyan-glow">
                                    0{index + 1}
                                </span>
                                <p className="text-sm leading-6 text-mist/85">{principle}</p>
                            </motion.div>
                        ))}
                    </div>
                </aside>
            </Reveal>
        </div>
    );
}
