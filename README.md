# Dr. Khan Psychiatry Website

**Psychiatrist professional site for my mom.**

I built this website for my mom, **Dr. Samina Khan**, a Board Certified Psychiatrist in Mountain View, CA. She's been in practice for over 20 years, serving the Bay Area community with general and geriatric psychiatric care.

This site is designed to be simple, accessible, and professional—reflecting her grounded approach to medicine.

## The Tech Stack

I chose a modern, performance-focused stack to ensure the site is fast and accessible for her older patients.

-   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with a custom high-contrast design system.
-   **Type Safety:** TypeScript for reliability.
-   **Deployment:** GitHub Pages (via GitHub Actions).
-   **Font Optimization:** `next/font` using *Lora* (Serif) and *Inter* (Sans).

## Design Philosophy

The design avoids the "corporate SaaS" look. Instead, I aimed for a **"Professional Grounded"** aesthetic:
-   **Type-Driven:** Strong hierarchy using *Lora* headings to convey authority and warmth.
-   **High Contrast:** Dark Charcoal and Navy text on Cream backgrounds for maximum readability.
-   **No Fluff:** We removed all "marketing speak" and AI-generated filler. The copy is direct, factual, and helpful.

## Deployment

This site uses **GitHub Actions** for deployment.

**Important:** You must configure the repository settings:
1.  Go to **Settings** > **Pages**.
2.  Under **Build and deployment**, switch the **Source** to **"GitHub Actions"**.
3.  The workflow will then automatically build and deploy the site.

## Development

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

---
*Built with love by Zayd Khan.*
