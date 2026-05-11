"use client";

import { motion, useReducedMotion } from "motion/react";

const lineOne = ["Senior", "Front-End", "Engineer"];
const lineTwo = ["who", "turns", "complex", "product", "requirements", "into", "fast,", "maintainable", "interfaces"];

export function AnimatedHeadline() {
    const shouldReduceMotion = useReducedMotion();
    const words = [...lineOne, ...lineTwo];

    return (
        <h1 className="mt-7 max-w-5xl text-balance text-[2.25rem] md:text-[2.8rem] font-semibold leading-[0.88] tracking-[-0.075em] text-white sm:leading-[0.86] lg:max-w-6xl">
            <span className="sr-only">
                Senior Front-End Engineer who turns complex product requirements into fast, maintainable interfaces.
            </span>
            <span
                aria-hidden="true"
                className="inline-flex justify-center md:justify-start flex-wrap gap-x-3 gap-y-2 sm:gap-x-4 md:gap-y-3"
            >
                {words.map((word, index) => {
                    const isGradient =
                        word === "complex" || word === "Front-End" || word === "interfaces" || word === "requirements";

                    return (
                        <span key={`${word}-${index}`} className="pb-1">
                            <motion.span
                                className={isGradient ? "text-gradient inline-block p-0.5" : "inline-block p-0.5"}
                                initial={shouldReduceMotion ? false : { y: "110%", rotate: 2, opacity: 0 }}
                                animate={shouldReduceMotion ? undefined : { y: 0, rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.78, delay: 0.1 + index * 0.075, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    );
                })}
            </span>
        </h1>
    );
}
