import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${profile.name} - ${profile.role}`;
export const size = {
    width: 1200,
    height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                alignItems: "center",
                background:
                    "radial-gradient(circle at 18% 12%, rgba(103, 232, 249, 0.32), transparent 340px), radial-gradient(circle at 88% 6%, rgba(167, 139, 250, 0.28), transparent 360px), #05070c",
                color: "white",
                display: "flex",
                height: "100%",
                justifyContent: "center",
                padding: "64px",
                width: "100%"
            }}
        >
            <div
                style={{
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "44px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                    padding: "56px",
                    width: "100%"
                }}
            >
                <div style={{ color: "#67e8f9", fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>
                    Senior Front-End Engineer
                </div>
                <div>
                    <h1 style={{ fontSize: 82, letterSpacing: -5, lineHeight: 1, margin: 0 }}>{profile.name}</h1>
                    <p style={{ color: "#d8e2ef", fontSize: 34, lineHeight: 1.35, marginTop: 28, maxWidth: 860 }}>
                        Next.js, React, TypeScript, OTA platforms, white-label systems, and real-time product
                        interfaces.
                    </p>
                </div>
                <div style={{ color: "#8b98aa", display: "flex", fontSize: 26, gap: 24 }}>
                    <span>OTA Architecture</span>
                    <span>·</span>
                    <span>Realtime UI</span>
                    <span>·</span>
                    <span>Performance</span>
                </div>
            </div>
        </div>,
        size
    );
}
