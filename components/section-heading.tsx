import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description: string;
    align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
    const isCenter = align === "center";

    return (
        <div className={`mb-10 max-w-3xl md:mb-14 ${isCenter ? "mx-auto text-center" : "text-left"}`}>
            <Reveal>
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.32em] text-cyan-glow/80">
                    <span className="h-px w-7 bg-cyan-glow/45" aria-hidden="true" />
                    {eyebrow}
                    <span className="h-px w-7 bg-cyan-glow/45" aria-hidden="true" />
                </p>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="text-balance text-[1.5rem] md:text-[2.6rem] font-bold leading-[1.1] tracking-[-0.06em] text-white">
                    {title}
                </h2>
            </Reveal>
            <Reveal delay={0.1}>
                <p
                    className={`mt-5 max-w-2xl text-pretty text-sm leading-7 text-soft md:text-base ${isCenter ? "mx-auto" : ""}`}
                >
                    {description}
                </p>
            </Reveal>
        </div>
    );
}
