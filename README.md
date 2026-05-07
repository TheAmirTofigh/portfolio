# Amir Tofigh Portfolio

A premium dark portfolio for **Amir Tofigh**, a Senior Front-End Engineer focused on Next.js, React, TypeScript, OTA platforms, white-label systems, real-time dashboards, and polished product interfaces.

The project is built as a production-ready personal brand website: strong SEO defaults, responsive UI, refined motion, server-rendered structured data, clean project data, and a public GitHub-friendly README.

## Highlights

- **Modern portfolio architecture** with Next.js App Router, TypeScript, and Tailwind CSS v4.
- **Professional SEO setup** with metadata, canonical URL, Open Graph, Twitter cards, robots, sitemap, dynamic social images, and JSON-LD.
- **Premium dark UI** with personal logo, portrait, macOS-style code profile card, responsive project cards, and polished interaction states.
- **Performance-conscious animation** using Motion with reduced-motion support and transform/opacity-first transitions.
- **Clean content model** in `data/portfolio.ts` so experience, projects, skills, and profile details are easy to maintain.
- **Public repository polish** with Prettier config, formatting scripts, environment example, and clear customization notes.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- Motion for React animations
- Lucide React for interface icons
- Local SVG social and navigation icons
- Next Metadata API, dynamic OG images, sitemap, robots, and JSON-LD

## Project Structure

```txt
app/
  layout.tsx          # Global fonts, viewport, and SEO metadata
  page.tsx            # Server-rendered JSON-LD + homepage shell
  opengraph-image.tsx # Dynamic Open Graph image
  twitter-image.tsx   # Twitter image using the same visual system
  robots.ts           # robots.txt metadata route
  sitemap.ts          # sitemap.xml metadata route
components/
  hero.tsx            # Hero, portrait, logo, and code profile card
  home-page.tsx       # Main page sections
  site-nav.tsx        # Sticky header, active section detection, mobile nav
  project-card.tsx    # Animated project cards
data/
  portfolio.ts        # Profile, experience, projects, skills, and navigation data
  seo.ts              # Central SEO config and structured data helpers
public/
  Amir-Tofigh-Resume.pdf
  logo-mark.png
  logo-mark-256.png
  profile-avatar.png
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
pnpm dev           # Start the local development server
pnpm build         # Create a production build
pnpm start         # Start the production server
pnpm lint          # Run ESLint
pnpm typecheck     # Run TypeScript checks
pnpm format        # Format the project with Prettier
pnpm format:check  # Check Prettier formatting
```

## SEO Configuration

The SEO configuration lives in `data/seo.ts`.

Before publishing, create an environment file from the example:

```bash
cp .env.example .env.local
```

Then set your final domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for:

- canonical URL
- sitemap URL
- robots host and sitemap entry
- Open Graph image URLs
- Twitter card image URLs
- JSON-LD structured data

The site currently includes:

- metadata title and description
- title template
- canonical URL
- keyword set
- author, creator, publisher, and category metadata
- Open Graph profile metadata
- Twitter summary card metadata
- index/follow robots rules
- dynamic `sitemap.xml`
- dynamic `robots.txt`
- dynamic `opengraph-image`
- dynamic `twitter-image`
- Person, WebSite, and ProfilePage JSON-LD

## Customization Checklist

Before deploying publicly, update these items:

- `NEXT_PUBLIC_SITE_URL` in `.env.local` or your hosting provider settings.
- `profile.socials` in `data/portfolio.ts` once final GitHub/GitLab links are ready.
- Project `url` fields in `data/portfolio.ts` if any links change.
- Resume file at `public/Amir-Tofigh-Resume.pdf` whenever the resume is updated.
- `data/seo.ts` if you want to adjust SEO keywords or metadata wording.

## Formatting

This repository uses Prettier with **4-space indentation**.

```bash
pnpm format
```

The configuration is stored in `.prettierrc.json`.

## Deployment

The easiest deployment target is Vercel:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` with your production URL.
4. Deploy.

Any Node-compatible platform that supports Next.js can also run the project.

## Notes for Public GitHub

The code is suitable for a public portfolio repository, but the personal assets are intentionally part of Amir's brand identity. Do not reuse the resume, portrait, logo, or personal information in another project without permission.

## License

No open-source license has been added yet. Add one before encouraging reuse of the code outside this portfolio.
