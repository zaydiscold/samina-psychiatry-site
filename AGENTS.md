# AGENTS.md -- Dr. Samina Khan Psychiatry Website

> Vendor-agnostic agent context. Compatible with Claude Code, Gemini CLI, Cursor, Windsurf, Copilot, Codex, and any agent that reads AGENTS.md.
> Follows the open AGENTS.md standard (agents.md specification, 2025).

## Role

You are building a professional medical website. The client is a real, practicing psychiatrist. Every output (code, copy, design) will be reviewed by her son (the project owner) and eventually by her patients. Act accordingly.

## Project Summary

| Field | Value |
|---|---|
| Client | Dr. Samina Khan, MD |
| Specialty | General Psychiatry, Geriatric Psychiatry (ABPN) |
| Location | Bay Area, California |
| Site type | Multi-page professional website |
| Stack | Next.js 14 (App Router), Tailwind CSS, Framer Motion |
| Forms | React Hook Form + Resend API |
| Deploy | GitHub Pages (initial), Vercel/Render (later) |

## Architecture

5 pages: Home (`/`), About (`/about`), Services (`/services`), Conditions (`/conditions`), Contact (`/contact`)

```
app/                    # Next.js App Router
  layout.tsx            # Root: fonts (Playfair Display, Inter), metadata, JSON-LD
  page.tsx              # Home
  about/page.tsx
  services/page.tsx
  conditions/page.tsx
  contact/page.tsx
  api/contact/route.ts  # Serverless email (Resend)
components/
  layout/               # Navbar, Footer, SectionWrapper
  ui/                   # Button, ServiceCard, ConditionCard, TimelineEntry, ContactForm
  sections/             # Hero, AboutPreview, ServicesGrid, ConditionsGrid, ContactCTA
  motion/               # AnimatedSection (Framer Motion whileInView)
lib/
  animations.ts         # Motion presets: fadeUp, stagger, custom easing
  cn.ts                 # clsx + tailwind-merge
  schema.ts             # JSON-LD generators
public/images/
```

## Design System

### Colors
```
cream      #FAF8F5   Background
stone      #F0EDE8   Alternating sections
navy       #1B3A5C   Headings, primary
steel      #2E5078   Links
sky        #4A7FB5   Hover
sage       #7A9E8E   Trust, calming
clay       #C4A882   Warm accent
terracotta #B07D62   CTAs
charcoal   #2D3436   Body text
graphite   #636E72   Secondary text
```

### Typography
- Headings: `Playfair Display`, weight 600, serif
- Body: `Inter`, weight 400, sans-serif
- Nav/Labels: `Inter`, weight 500

### Animations
- Fade-up on scroll: `duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]`
- Staggered cards: `staggerChildren: 0.1`
- All animations: `whileInView`, `once: true`, `viewport: { amount: 0.3 }`
- Must respect `prefers-reduced-motion: reduce`

## Code Conventions

```typescript
// Always: TypeScript strict, functional components, Server Components by default
// "use client" only for: animations, forms, event handlers
// Class merging: import { cn } from '@/lib/cn'
// No inline styles. No default exports except pages.
```

## Behavioral Boundaries

### Always
- Semantic HTML (`main`, `nav`, `section`, `article`, `footer`)
- Alt text on every image
- Test at 375px (mobile), 768px (tablet), 1440px (desktop)
- Validate JSON-LD schema
- Run humanizer pass on all visible text before shipping

### Ask Before
- Adding any npm dependency
- Changing colors, fonts, or animation timing
- Adding or removing pages
- Editing any text about Dr. Khan's credentials, qualifications, or professional history
- Changing schema markup structure

### Never
- Emojis (anywhere, ever)
- Em dashes (use commas, periods, colons)
- Filler: "It's worth noting," "At its core," "In today's landscape," "comprehensive suite of"
- Inflated language: "transforms," "revolutionizes," "game-changing," "cutting-edge"
- Stock photos
- DEA license numbers (say "DEA Licensed" only)
- Third-party tracking/analytics without explicit approval
- Inline styles
- Overengineering (this is a 5-page info site)

## SEO Strategy

### Local Keywords (embed in titles, headings, meta, alt, schema, aria-labels)
```
psychiatrist in Mountain View
psychiatrist in Cupertino
psychiatrist in San Jose
psychiatrist in Palo Alto
psychiatrist in Sunnyvale
psychiatrist in Santa Clara
psychiatrist in Bay Area
psychiatrist in Silicon Valley
psychiatrist near Stanford
geriatric psychiatrist Bay Area
board-certified psychiatrist California
depression treatment Bay Area
anxiety psychiatrist Mountain View
TMS therapy Bay Area
```

### Schema (JSON-LD, in <head>)
- `Physician` (root, all pages)
- `FAQPage` (conditions page)
- `LocalBusiness` (contact page)
- `Service` (services page, one per service)

### Key Data
- Office: Mountain View Psychiatry and TMS, 2500 Hospital Drive, Suite 3A, Mountain View, CA 94040
- Phone: 408-568-8628
- Email: saminadr@yahoo.com
- Telehealth: Yes

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:3000
npm run build        # Production build
npm run lint         # Lint check
npm run start        # Serve production locally
```

## Quality Gates

| Check | Target |
|---|---|
| Lighthouse Performance | >= 95 |
| Lighthouse Accessibility | >= 95 |
| Lighthouse SEO | >= 95 |
| Schema validation | All types pass Google Rich Results Test |
| Humanizer pass | Every line of visible text reviewed |
| Mobile-first | 375px renders correctly before wider breakpoints |
| Keyboard nav | All interactive elements reachable via Tab |

## Skills

Before starting work, read the corresponding SKILL.md files in `/Users/zaydk/.gemini/antigravity/skills/`:

| Phase | Skills to Read |
|---|---|
| Writing copy | `copywriting`, `humanizer`, `content-strategy` |
| Building UI | `frontend-design`, `tailwind-patterns`, `nextjs-best-practices`, `scroll-experience`, `accessibility` |
| Final verification | `core-web-vitals`, `seo-fundamentals`, `schema-markup`, `web-design-guidelines` |

## Client Context

Dr. Khan's credentials (for accurate representation):
- **MBBS:** Ayub Medical College, University of Peshawar, Pakistan
- **MD:** Morehouse School of Medicine, Atlanta, GA
- **Fellowships:** Stanford (Geriatric Psychiatry), Duke (TMS), Emory (ECT)
- **Boards:** General Psychiatry (ABPN), Geriatric Psychiatry (ABPN)
- **Licensure:** California, DEA Licensed
- **Experience:** El Camino Hospital (Consultant Psychiatrist, 2016-present), County of Santa Clara (Staff Psychiatrist, 2013-2026), Private practice (current)
- **From:** Abbottabad, Pakistan
