# CLAUDE.md -- Dr. Samina Khan Psychiatry Website

> This file is loaded into every Claude session. Keep it concise. Only include what is universally applicable. For task-specific detail, reference the full PRD.

## Identity

You are building a professional website for Dr. Samina Khan, MD, a board-certified psychiatrist (General + Geriatric) practicing in the San Francisco Bay Area. This is a real client project for a real physician. Treat every piece of copy, every design decision, and every technical choice as if it will be reviewed by a medical professional and her patients.

## Architecture

```
Next.js 14 (App Router) / Tailwind CSS / Framer Motion
├── app/
│   ├── layout.tsx           # Root layout: fonts, metadata, JSON-LD schema
│   ├── page.tsx             # Home
│   ├── about/page.tsx       # About: education, training, timeline
│   ├── services/page.tsx    # Services: medication mgmt, evals, inpatient, TMS/ECT/geriatric
│   ├── conditions/page.tsx  # Conditions: depression, anxiety, bipolar, PTSD, etc.
│   ├── contact/page.tsx     # Contact: form + info
│   └── api/contact/route.ts # Serverless form handler (Resend)
├── components/
│   ├── layout/              # Navbar, Footer, SectionWrapper
│   ├── ui/                  # Button, ServiceCard, ConditionCard, TimelineEntry, ContactForm
│   ├── sections/            # Hero, AboutPreview, ServicesGrid, ConditionsGrid, ContactCTA
│   └── motion/              # AnimatedSection (whileInView wrapper)
├── lib/
│   ├── animations.ts        # Framer Motion presets (fadeUp, stagger)
│   ├── cn.ts                # clsx + tailwind-merge utility
│   └── schema.ts            # JSON-LD schema generators (Physician, FAQPage, LocalBusiness)
└── public/images/
```

## Design System

| Token | Value | Usage |
|---|---|---|
| `cream` | #FAF8F5 | Primary background |
| `stone` | #F0EDE8 | Alternating section bg |
| `navy` | #1B3A5C | Headings, primary accent |
| `steel` | #2E5078 | Links, secondary blue |
| `sky` | #4A7FB5 | Hover states |
| `sage` | #7A9E8E | Trust signals, calming green |
| `clay` | #C4A882 | Warm highlights |
| `terracotta` | #B07D62 | CTA buttons |
| `charcoal` | #2D3436 | Body text |
| `graphite` | #636E72 | Secondary text |

**Fonts:** Playfair Display 600 (headings), Inter 400/500 (body/nav)

## Behavioral Rules

These are non-negotiable. Follow them on every interaction.

### Always Do
- Use TypeScript strict mode
- Default to Server Components; only add "use client" for interactivity (animations, forms, event handlers)
- Use `cn()` from `lib/cn.ts` for conditional Tailwind classes
- Respect `prefers-reduced-motion` on all animations
- Write patient-friendly, plain English copy
- Include `alt` text on every image
- Use semantic HTML (`<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Test at 375px, 768px, and 1440px

### Ask First
- Before adding any new dependency
- Before changing the color palette or typography
- Before modifying the site architecture (adding/removing pages)
- Before touching schema markup structure
- Before making any copy changes that alter Dr. Khan's credentials or qualifications

### Never Do
- Use emojis anywhere on the site
- Use em dashes (use commas, periods, or colons)
- Use filler phrases: "It's worth noting," "At its core," "In today's landscape," "comprehensive suite"
- Use inflated language: "transforms," "revolutionizes," "game-changing," "cutting-edge"
- Use stock photos
- Display DEA license numbers (security risk; "DEA Licensed" is sufficient)
- Add third-party analytics or tracking without explicit permission
- Use inline styles
- Skip the humanizer pass on any visible text
- Overengineer. This is a 5-page informational site, not a SaaS product

## SEO Context

**Target keywords** (embed through headings, meta, alt text, aria-labels, schema):
- "psychiatrist in Mountain View" / "psychiatrist in Cupertino" / "psychiatrist in San Jose"
- "psychiatrist in Bay Area" / "psychiatrist in Silicon Valley" / "psychiatrist near Stanford"
- "geriatric psychiatrist Bay Area" / "board-certified psychiatrist California"
- "depression treatment Bay Area" / "anxiety psychiatrist Mountain View"

**Schema types:** Physician, FAQPage (conditions), LocalBusiness, Service

**Office:** Mountain View Psychiatry and TMS, 2500 Hospital Drive, Suite 3A, Mountain View, CA 94040
**Phone:** 408-568-8628

## Commands

```bash
npm install          # Install deps
npm run dev          # Dev server at localhost:3000
npm run build        # Production build (verify before shipping)
npm run lint         # Lint check
```

## Key References

- Full PRD: Check Antigravity brain artifacts for implementation_plan.md
- Skills: `/Users/zaydk/.gemini/antigravity/skills/` -- read each relevant SKILL.md before the corresponding work phase
- Key skills: copywriting, humanizer, frontend-design, tailwind-patterns, nextjs-best-practices, scroll-experience, accessibility, core-web-vitals, seo-fundamentals, schema-markup

## Verification Checklist

Before marking any page as done:
- [ ] Renders correctly at 375px, 768px, 1440px
- [ ] All text passes humanizer check (read aloud test)
- [ ] Lighthouse: Performance >= 95, Accessibility >= 95, SEO >= 95
- [ ] Schema validates in Google Rich Results Test
- [ ] Keyboard navigation works
- [ ] No console errors or warnings
