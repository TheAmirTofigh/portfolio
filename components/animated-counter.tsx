"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type AnimatedCounterProps = {
    value: string;
};

function parseStat(value: string) {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return null;
    return { target: Number(match[1]), suffix: match[2] ?? "" };
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
    const parsed = useMemo(() => parseStat(value), [value]);
    const ref = useRef<HTMLSpanElement | null>(null);
    const [current, setCurrent] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!parsed || shouldReduceMotion) {
            if (parsed) setCurrent(parsed.target);
            return;
        }

        const node = ref.current;
        if (!node) return;

        let frameId = 0;
        let startedAt = 0;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();

                const animate = (time: number) => {
                    if (!startedAt) startedAt = time;
                    const progress = Math.min((time - startedAt) / 1100, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCurrent(Math.round(parsed.target * eased));

                    if (progress < 1) frameId = requestAnimationFrame(animate);
                };

                frameId = requestAnimationFrame(animate);
            },
            { threshold: 0.4 }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frameId);
        };
    }, [parsed, shouldReduceMotion]);

    if (!parsed) return <span>{value}</span>;

    return (
        <span ref={ref}>
            {current}
            {parsed.suffix}
        </span>
    );
}
