# Content Correction Design — Houssem Darragi Portfolio

> **Created**: 2026-07-18
> **Spec source**: User's8-section content/structural correction spec
> **Scope**: Hero, About, Skills, Résumé, Website cards — no visual redesign

## Confirmed decisions

| Decision | Resolution |
|----------|------------|
| Hero subtitle | "Full-Stack Software Engineer" (not "Full-Stack Engineer") |
| Hero tagline | Replace template system with static text per spec |
| Hero buttons | "View my work" + "Download résumé" in hero; "Contact me" stays in navbar/footer |
| Café Gondi | User says "handle later" — skip for now |
| Fitness website | Titan Fitness (strongest) |
| Featured websites (homepage) | 6 only: Secur, Sun Cuisine, Naouar, Nexa Store, Éclat Prestige, Titan Fitness |
| Remaining websites | Dedicated `/websites` + `/fr/websites` page |
| Visual redesign | None — dark theme, purple accent, animations all stay |

## Section 1 — Hero

### Current state
- `src/lib/translations.ts` hero: role = "Full-Stack Engineer", tagline = template with `{{tech1}}`, `{{tech2}}`, `{{tech3}}`
- `src/lib/site.ts` role: "Full-Stack Engineer"
- `src/app/opengraph-image.tsx`: text says "Full-Stack Engineer"
- Buttons: "View My Work" + "Get In Touch"

### Changes

#### 1a. Role / subtitle
- `site.ts` role: change to `"Full-Stack Software Engineer"`
- `translations.ts` hero.role EN: `"Full-Stack Software Engineer"`
- `translations.ts` hero.role FR: `"Ingénieur logiciel full-stack"`
- `opengraph-image.tsx`: update text to "Full-Stack Software Engineer"

#### 1b. Tagline → static description
- `translations.ts` hero.tagline EN: `"I build robust web applications, SaaS platforms and automation systems using Django, Next.js and Angular."`
- `translations.ts` hero.tagline FR: `"Je développe des applications web robustes, des plateformes SaaS et des systèmes d'automatisation avec Django, Next.js et Angular."`
- Remove `{{tech1}}`, `{{tech2}}`, `{{tech3}}` variables — just use the raw string

#### 1c. Buttons
- `translations.ts` hero.ctaWork EN: `"View my work"` (lowercase)
- Add `translations.ts` hero.ctaResume EN: `"Download résumé"` / FR: `"Télécharger mon CV"`
- Keep `translations.ts` hero.ctaContact for use in Contact section / Navbar
- Hero component: render 2 buttons — `#websites` (View my work) + link to `/resume.pdf` (Download résumé)
- "Contact me" stays in Navbar (already there via `#contact`) and Footer

### Files touched
- `src/lib/site.ts`
- `src/lib/translations.ts`
- `src/components/Hero.tsx`
- `src/app/opengraph-image.tsx`

---

## Section 2 — About KPIs

### Current state
- Card 1: value="5", label="Hackathon Podiums", subtitle="4 wins · 1 runner-up" ✅ correct
- Card 2: value="4", label="Hackathons Won" ❌ needs change

### Changes

#### 2a. Card 2 content
- `translations.ts` about.stats_hackathons: change from "Hackathons Won" to a new key
- Add `about.stats_engineer_label` EN: `"Full-Stack Engineer"` / FR: `"Ingénieur full-stack"`
- Add `about.stats_engineer_detail` EN: `"Django · Next.js · Angular"` / FR: `"Django · Next.js · Angular"`
- `About.tsx` stats array: update card 2 to use the new keys, no numeric value, just label + subtitle

#### 2b. Card sizing
- Cards currently `p-6` — reduce to `p-4` or `p-5` for more compact appearance
- Grid: keep 2-column but ensure cards don't dominate the right side
- Text-to-KPI ratio: left column (text) = ~55-60%, right column (KPIs) = ~40-45% — currently `grid-cols-2` which is 50/50, acceptable with smaller cards

### Files touched
- `src/lib/translations.ts`
- `src/components/About.tsx`

---

## Section 3 — About Text

### Current state
- 3 paragraphs (`about.p1`, `about.p2`, `about.p3`) — current text is generic

### Changes

Replace with the exact text from the spec:

#### EN
- `about.p1`: `"I'm a Full-Stack Software Engineer specialized in building robust web applications using Django, Next.js, and Angular. My work spans backend architecture, frontend interfaces, and API integrations."`
- `about.p2`: `"I started my career in November 2024, but I've been building web applications through internships, hackathons, and personal projects since my engineering studies. I thrive in fast-paced environments, combining problem-solving skills with a focus on clean, maintainable code."`
- `about.p3`: `"Proficient in Python (Django), JavaScript/TypeScript (Node.js, Next.js, Angular), and Framer Motion. Skilled in Git workflows, relational and NoSQL databases. Fluent in English and French."`

#### FR
- `about.p1`: `"Je suis un ingénieur logiciel full-stack spécialisé dans la création d'applications web robustes avec Django, Next.js et Angular. Mon travail couvre l'architecture backend, les interfaces frontend et les intégrations d'API."`
- `about.p2`: `"J'ai commencé ma carrière en novembre 2024, mais je développe des applications web depuis mes études d'ingénieur, à travers des stages, des hackathons et des projets personnels. Je m'épanouis dans des environnements dynamiques, combinant résolution de problèmes et code propre et maintenable."`
- `about.p3`: `"Compétent en Python (Django), JavaScript/TypeScript (Node.js, Next.js, Angular) et Framer Motion. Expérimenté avec Git, les bases de données relationnelles et NoSQL. Parlant couramment anglais et français."`

### Files touched
- `src/lib/translations.ts`

---

## Section 4 — Skills

### Current state
- `data.ts` exports `skills: Skill[]` with `{ name, percentage }` — 6 items
- `Skills.tsx` renders percentage bars in a 2-column grid
- `translations.ts` skills: heading + description only

### Changes

#### 4a. Data structure
- Replace `Skill` interface with `SkillCategory`:
  ```ts
  interface SkillCategory {
    label: string;        // category label
    items: string[];      // skill names
  }
  ```
- Add `skillCategories` to `data.ts` with 3 categories per spec

#### 4b. Skill categories (exact from spec)
```
Core Technologies:
  Django, Next.js, Angular, Node.js, Python, TypeScript, JavaScript

Experienced With:
  PostgreSQL, MongoDB, Git, REST APIs, Framer Motion, Tailwind CSS

Additional Experience:
  React, Docker, CI/CD, Web Scraping, Linux, GraphQL, Firebase, AWS, Vercel, HTML/CSS
```

#### 4c. Translations
- `skills.heading`: keep as-is
- `skills.description`: keep as-is
- Add `skills.core`: EN `"Core Technologies"` / FR `"Technologies principales"`
- Add `skills.experienced`: EN `"Experienced With"` / FR `"Expérimenté avec"`
- Add `skills.additional`: EN `"Additional Experience"` / FR `"Expérience complémentaire"`

#### 4d. Skills.tsx component
- Remove percentage bars entirely
- Render 3 rows, each with:
  - Category label (bold, purple accent)
  - Horizontal list of chips/tags (same style as website card tags)
- Animate chips with stagger on scroll (existing pattern)

### Files touched
- `src/lib/data.ts` — new `SkillCategory` type + `skillCategories` array
- `src/lib/translations.ts` — new keys
- `src/components/Skills.tsx` — complete rewrite of render logic

---

## Section 5 — Résumé

### Current state
- `Resume.tsx`: timeline layout with `TimelineItem` component
- Text is `text-sm`, tight spacing
- No download button

### Changes

#### 5a. Readability improvements
- Date labels: change from `text-xs` to `text-sm`, keep mono font, add slightly more spacing
- Role/degree titles: `text-base` → keep as-is (already correct)
- Company/school: `text-sm` → keep as-is
- Detail bullets: `text-sm` → keep as-is, but increase `space-y-1` to `space-y-2`
- Timeline item: increase `pb-8` to `pb-10` for more breathing room

#### 5b. Date formatting
- Current format: `"Nov 2024 - Present"`, `"09/2019 - 10/2024"`, `"10/2023"`
- Standardize to: `"Nov 2024 – Present"`, `"Sep 2019 – Oct 2024"`, `"Oct 2023"` — use en-dash, abbreviated months
- Update `data.ts` experience/education/achievement date strings

#### 5c. Limit bullets
- Cap experience details at 4 items max (already have 4 max in data)

#### 5d. Download button
- Add a "Download résumé" button at the top of the section (same style as hero button)
- Links to `/resume.pdf` (placeholder — file not yet added)
- `translations.ts`: add `resume.download` EN: `"Download résumé"` / FR: `"Télécharger mon CV"`

### Files touched
- `src/components/Resume.tsx`
- `src/lib/translations.ts`
- `src/lib/data.ts` — date string updates

---

## Section 6 — Website Cards (Featured)

### Current state
- `Websites.tsx` shows all 10 websites in a 2-column grid
- Cards: gradient placeholder (no real images), category badge, status dot, title, description, tags

### Changes

#### 6a. Featured filter
- Add `featured: boolean` field to `Website` interface in `data.ts`
- Mark 6 as featured: secur, sun-cuisine, naouar, nexa-store, eclat-prestige, titan-fitness
- Mark 4 as non-featured: cafe-oasis, elle-fit, epic-fitness, olympe-gym

#### 6b. Homepage shows only featured
- `Websites.tsx`: filter to `websites.filter(w => w.featured)` for the homepage section
- Grid: keep `md:grid-cols-2` (6 items = 3 rows)

#### 6c. "View all websites" button
- Add below the grid: a button linking to `/websites` (EN) or `/fr/websites` (FR)
- `translations.ts`: add `websites.viewAll` EN: `"View all websites"` / FR: `"Voir tous les sites"`
- Style: secondary button (border style, like hero secondary button)

### Files touched
- `src/lib/data.ts` — `featured` field
- `src/components/Websites.tsx` — filter + button
- `src/lib/translations.ts` — new key

---

## Section 7 — Website Card Structure

### Current state
- Cards have: gradient placeholder image, category badge, status dot, title, description, tags
- Live cards are clickable `<a>` tags; non-live are `<div>` with `opacity-80`

### Changes per spec

#### 7a. Image
- Use real screenshots (Cloudinary URLs already exist for items 1-3, local paths for 4-10)
- Keep `aspect-video` ratio
- On hover: subtle scale transform (already partially there via group-hover)

#### 7b. Card layout (top to bottom)
1. Image (real screenshot)
2. Title (bold, left-aligned)
3. Category (subtext, muted)
4. Description (1-2 sentences, muted)
5. Tags (tech stack chips)
6. Action row: "Live" button (primary) + "Case study" button (secondary, if available)

#### 7c. Live button
- Replace the status dot + "Live" text with a proper button
- Style: small primary button (bg-[#6366f1], white text, rounded)
- Opens live URL in new tab

#### 7d. Case study button
- For now: no case study pages exist → hide this button
- Add `caseStudyUrl?: string` to `Website` interface for future use
- Only show when `caseStudyUrl` is defined

### Files touched
- `src/components/Websites.tsx` — card layout rewrite
- `src/lib/data.ts` — interface update

---

## Section 8 — Centralized Website Data

### Current state
- `data.ts` has `projectUrls` object + `websites` array
- `Website` interface: `id, title, url, category, description, image, tags, live`

### New interface
```ts
interface Website {
  id: string;
  title: string;
  slug: string;              // URL-friendly identifier (for future case studies)
  liveUrl: string | null;
  caseStudyUrl?: string;     // future use
  category: string;
  description: string;
  image: string;
  technologies: string[];    // renamed from `tags`
  featured: boolean;
  live: boolean;
}
```

### Migration
- Rename `tags` → `technologies` in interface and all usages
- Add `slug` field (same as `id` for now)
- Add `featured` field
- Add `caseStudyUrl` optional field
- `projectUrls` object: keep as-is for URL centralization, reference from websites array
- `Websites.tsx`: update `site.tags` → `site.technologies`

### Files touched
- `src/lib/data.ts`
- `src/components/Websites.tsx`

---

## Implementation order

1. **Data layer** (`data.ts`, `translations.ts`) — all interface changes, new keys, new data
2. **Hero** (`Hero.tsx`, `site.ts`, `opengraph-image.tsx`) — role, tagline, buttons
3. **About** (`About.tsx`) — KPI card 2, sizing
4. **Skills** (`Skills.tsx`) — complete rewrite from bars to category chips
5. **Résumé** (`Resume.tsx`) — readability, dates, download button
6. **Websites** (`Websites.tsx`) — featured filter, card structure, view all button
7. **Verify** — `tsc --noEmit`, `next build`, screenshots

## Constraints preserved
- No visual redesign (dark theme, purple accent, animations, navbar, responsive)
- Route-based i18n unchanged
- External links: `rel="noopener noreferrer"` + `target="_blank"` + accessible labels
- No paid services
- `projectUrls` centralized
