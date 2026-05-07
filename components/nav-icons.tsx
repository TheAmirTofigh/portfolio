import type { SVGProps } from "react";

type NavIconProps = SVGProps<SVGSVGElement> & {
    name: "work" | "systems" | "projects" | "skills" | "contact";
};

const paths = {
    work: [
        "M9 7V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1",
        "M5 8h14a2 2 0 0 1 2 2v7.5A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5V10a2 2 0 0 1 2-2Z",
        "M3 12.5h18",
        "M10 13h4"
    ],
    systems: ["M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z", "M12 12 4 7.5", "M12 12v9", "M12 12l8-4.5"],
    projects: [
        "M4 6.5A2.5 2.5 0 0 1 6.5 4h3l2 2h6A2.5 2.5 0 0 1 20 8.5v8A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-10Z",
        "M8 13h8",
        "M8 16h5"
    ],
    skills: [
        "M12 3l2.2 5.15 5.55.5-4.2 3.65 1.25 5.45L12 15.9 7.2 17.75l1.25-5.45-4.2-3.65 5.55-.5L12 3Z",
        "M12 15.9V21"
    ],
    contact: [
        "M4.5 6.5h15A2.5 2.5 0 0 1 22 9v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17V9a2.5 2.5 0 0 1 2.5-2.5Z",
        "m3 8 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 8"
    ]
} as const;

export function NavIcon({ name, className, ...props }: NavIconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {paths[name].map((path) => (
                <path key={path} d={path} />
            ))}
        </svg>
    );
}
