# Production readiness — houssemdarragi.com

## Goal
Ship the studies portfolio (Next.js) to production at `https://houssemdarragi.com` with correct branding, SEO, contact, and config. No visual redesign.

## Decisions
- **Name:** Houssem Darragi; logo HD.
- **Canonical:** `https://houssemdarragi.com` via `NEXT_PUBLIC_SITE_URL`
- **i18n:** `/` = EN, `/fr` = FR, x-default = `/`
- **Contact email:** `NEXT_PUBLIC_CONTACT_EMAIL=houssem@houssemdarragi.com`
- **Project URLs:** central config; only live URLs; no fake subdomains
- **Redirects:** Vercel domain-level (www ↔ apex); no app-level redirect
- **Analytics:** optional `@vercel/analytics` only

## Out of scope
Visual redesign, new project content, paid analytics.
