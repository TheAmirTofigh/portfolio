"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

    return (
        <motion.div
            aria-hidden="true"
            className="fixed left-0 top-0 z-[60] h-px w-full origin-left bg-gradient-to-r from-cyan-glow via-violet-glow to-emerald-glow"
            style={{ scaleX }}
        />
    );
}
