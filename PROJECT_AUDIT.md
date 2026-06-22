# Project Audit — Skotjänst (business-2-skotjanst)

**Date:** 2026-06-22  
**Business:** Skotjänst — Skomakeri & nyckelservice i Uppsala  
**Path:** `C:\Jarvis\projects\business-2-skotjanst`

---

## Stack Summary

| Item | Value |
|------|-------|
| Framework | Next.js 16.2.9 (App Router) |
| React | 19.2.4 |
| Styling | Tailwind CSS v4 |
| TypeScript | Yes |
| Export mode | `output: "export"` (static) |
| Dev port | 3002 |

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, services, testimonials |
| `/om-oss` | About the shoe repair shop |
| `/tjanster` | Services: repairs, keys, shoe care |
| `/galleri` | Gallery placeholder |
| `/kontakt` | Contact, map, hours |
| `/robots.txt` | Dynamic robots |
| `/sitemap.xml` | Dynamic sitemap |

## Business Data

- **Source:** `src/lib/business.ts`
- **Address:** Stora Torget 1A, 753 20 Uppsala
- **Phone:** 018-13 75 54
- **Rating:** 5.0★ (2 reviews)

## SEO Status (post-audit)

| Feature | Status |
|---------|--------|
| `metadataBase` | ✅ Vercel-aware |
| Open Graph | ✅ |
| Twitter Card | ✅ |
| robots.txt | ✅ `src/app/robots.ts` |
| sitemap.xml | ✅ `src/app/sitemap.ts` |
| JSON-LD | ✅ ShoeStore + LocalBusiness |
| Canonical URL | ✅ Dynamic |

## Build Status

```
npm install  → OK
npm run lint → OK (0 errors)
npm run build → OK (10 static pages)
```

## Git Status

- Repository initialized (`master` branch)
- `.gitignore` present
- Ready for first commit

## Deployment Readiness

| Check | Result |
|-------|--------|
| Static export compatible | ✅ |
| `vercel.json` | ✅ Added |
| Production URL placeholder | `https://business-2-skotjanst.vercel.app` |

## Known Limitations

- No email — phone-only contact
- No social media links configured
- Contact form is client-side only

## Recommended Vercel Project Name

`business-2-skotjanst` or `skotjanst-uppsala`
