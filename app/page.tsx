import { HomePage } from "@/components/home-page";
import { getPortfolioJsonLd } from "@/data/seo";

export default function Page() {
    return (
        <>
            {/* Server-rendered JSON-LD gives crawlers a stable summary of the portfolio owner, page, and work. */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getPortfolioJsonLd()).replace(/</g, "\\u003c")
                }}
            />
            <HomePage />
        </>
    );
}
