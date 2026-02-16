# GEMINI.md -- Dr. Samina Khan Psychiatry Website

> Context file for Gemini CLI and Code Assist. Loaded hierarchically from project root. Keep concise, actionable, and specific.

## Project

Professional website for Dr. Samina Khan, MD. Board-certified psychiatrist (General + Geriatric, ABPN). Bay Area, California. 20+ years experience across hospitals, correctional facilities, and private practice.

**Stack:** Next.js 14 (App Router), Tailwind CSS, Framer Motion, React Hook Form, Resend API
**Deploy:** GitHub Pages (initial), Vercel/Render (production)

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero, services preview, about preview, conditions grid, contact CTA |
| `/about` | Education, training (Stanford/Duke/Emory/Morehouse), credentials, career timeline |
| `/services` | Medication management, evaluations, inpatient/correctional, TMS, ECT, geriatric |
| `/conditions` | Depression, anxiety, bipolar, PTSD, schizophrenia, OCD, ADHD, sleep, geriatric, substance use |
| `/contact` | Form (React Hook Form), phone, address, telehealth info |

## Directory

```
app/           -> Pages and API routes
components/    -> layout/ | ui/ | sections/ | motion/
lib/           -> animations.ts, cn.ts (clsx+twMerge), schema.ts (JSON-LD)
public/images/ -> Static assets
```

## Design Tokens

```
Backgrounds: cream #FAF8F5, stone #F0EDE8
Primary:     navy #1B3A5C, steel #2E5078, sky #4A7FB5
Accents:     sage #7A9E8E, clay #C4A882, terracotta #B07D62
Text:        charcoal #2D3436, graphite #636E72
Fonts:       Playfair Display 600 (headings), Inter 400/500 (body)
```

## Code Rules

- TypeScript strict mode
- Server Components default; "use client" only for interactivity
- `cn()` from lib/cn.ts for conditional classes
- No inline styles
- Semantic HTML throughout
- All animations respect `prefers-reduced-motion`

## Copy Rules (Strict)

1. No emojis
2. No em dashes (commas, periods, or colons only)
3. No AI filler: "It's worth noting," "At its core," "In today's landscape"
4. No inflated language: "transforms," "revolutionizes," "game-changing"
5. Plain English. No dense medical jargon without explanation
6. Must sound natural when read aloud

## Agent Boundaries

**Always:** Use semantic HTML, test at 3 breakpoints (375/768/1440), include alt text, validate schema
**Ask first:** New dependencies, palette changes, architecture changes, credential copy changes
**Never:** Emojis, em dashes, stock photos, expose DEA numbers, add analytics without permission, overengineer

## SEO

Target: "psychiatrist in [Mountain View/Cupertino/San Jose/Palo Alto/Sunnyvale/Santa Clara/Bay Area/Silicon Valley]"
Schema: Physician, FAQPage, LocalBusiness, Service (JSON-LD)
Office: 2500 Hospital Drive, Suite 3A, Mountain View, CA 94040
Phone: 408-568-8628

## Commands

```bash
npm install && npm run dev    # Start dev
npm run build                 # Verify production build
npm run lint                  # Lint
```

## Skills

Read SKILL.md files in `/Users/zaydk/.gemini/antigravity/skills/` before corresponding work:
- **Copy:** copywriting, humanizer, content-strategy
- **Build:** frontend-design, tailwind-patterns, nextjs-best-practices, scroll-experience, accessibility
- **Verify:** core-web-vitals, seo-fundamentals, schema-markup, web-design-guidelines

## Quality Gates

- Lighthouse: Performance >= 95, Accessibility >= 95, SEO >= 95
- Google Rich Results Test: all schema types valid
- Humanizer pass: every line of visible text
- Mobile-first: 375px looks good before anything else
