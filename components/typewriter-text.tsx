"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type TypewriterTextProps = {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    loop?: boolean;
    loopDelay?: number;
};

export function TypewriterText({
    text,
    className,
    speed = 22,
    delay = 120,
    loop = false,
    loopDelay = 1800
}: TypewriterTextProps) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [isInView, setIsInView] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) {
            setDisplayText(text);
            return;
        }

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (!loop) observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -14% 0px", threshold: 0.35 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [loop, shouldReduceMotion, text]);

    useEffect(() => {
        if (!isInView || shouldReduceMotion) return;

        let timeoutId: ReturnType<typeof setTimeout> | undefined;
        let index = 0;
        let isDeleting = false;

        const tick = () => {
            if (!loop) {
                index += 1;
                setDisplayText(text.slice(0, index));

                if (index < text.length) {
                    timeoutId = setTimeout(tick, speed);
                }
                return;
            }

            if (!isDeleting) {
                index += 1;
                setDisplayText(text.slice(0, index));

                if (index >= text.length) {
                    isDeleting = true;
                    timeoutId = setTimeout(tick, loopDelay);
                    return;
                }

                timeoutId = setTimeout(tick, speed);
                return;
            }

            index -= 1;
            setDisplayText(text.slice(0, index));

            if (index <= 0) {
                isDeleting = false;
                timeoutId = setTimeout(tick, 280);
                return;
            }

            timeoutId = setTimeout(tick, speed * 0.55);
        };

        timeoutId = setTimeout(tick, delay);

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [delay, isInView, loop, loopDelay, shouldReduceMotion, speed, text]);

    return (
        <span ref={ref} className={`inline-block max-w-full align-baseline ${className ?? ""}`} aria-label={text}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true" className="relative inline-block max-w-full align-baseline">
                <span className="invisible block whitespace-pre-wrap break-words">{text}</span>
                <span className="absolute inset-0 whitespace-pre-wrap break-words">
                    {displayText}
                    {/*<span className="type-caret" />*/}
                </span>
            </span>
        </span>
    );
}
