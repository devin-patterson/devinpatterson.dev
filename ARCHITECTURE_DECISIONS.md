# Architecture Decision Record (ADR)
## devinpatterson.dev Portfolio Website

**Date:** January 29, 2026  
**Status:** Accepted  
**Author:** Devin Patterson

---

## Executive Summary

This document records the architectural decisions made for the devinpatterson.dev portfolio website, including technology choices, tradeoffs considered, and hosting recommendations based on cost-effectiveness and performance requirements.

---

## Table of Contents

1. [Context & Requirements](#1-context--requirements)
2. [Architecture Decision: Next.js SSG vs FastAPI + React + Vite](#2-architecture-decision-nextjs-ssg-vs-fastapi--react--vite)
3. [Technology Stack Decisions](#3-technology-stack-decisions)
4. [Hosting Platform Analysis](#4-hosting-platform-analysis)
5. [Final Recommendation](#5-final-recommendation)
6. [Implementation Notes](#6-implementation-notes)

---

## 1. Context & Requirements

### Project Type
- **Personal portfolio/resume website**
- **Static content** (no user authentication, no database, no real-time features)
- **SEO-critical** (recruiters, hiring managers searching for candidates)
- **Low traffic** (estimated <10,000 visits/month initially)
- **Professional presentation** (must look polished and modern)

### Functional Requirements
| Requirement | Priority | Notes |
|-------------|----------|-------|
| Display resume/CV | Must Have | Structured data, downloadable PDF |
| Showcase projects | Must Have | Portfolio with descriptions, tech stack |
| List certifications | Must Have | Current and planned certifications |
| Contact information | Must Have | Email, LinkedIn, location |
| Mobile responsive | Must Have | 50%+ traffic expected from mobile |
| Fast page loads | Should Have | <2s LCP for SEO |
| Dark mode support | Nice to Have | User preference |

### Non-Functional Requirements
| Requirement | Target | Rationale |
|-------------|--------|-----------|
| Cost | $0-5/month | Personal project, minimize expenses |
| Uptime | 99.9% | Professional presence |
| Global performance | <100ms TTFB | Good user experience |
| SEO | Core Web Vitals pass | Discoverability |
| Maintenance | Minimal | Focus on career, not ops |

---

## 2. Architecture Decision: Next.js SSG vs FastAPI + React + Vite

### ADR-001: Framework Selection

**Decision:** Use **Next.js with Static Site Generation (SSG)** instead of FastAPI + React + Vite

### Options Considered

#### Option A: FastAPI + React + Vite + TailwindCSS + shadcn/ui
```
┌─────────────────────────────────────────────────────────┐
│                    Architecture                          │
├─────────────────────────────────────────────────────────┤
│  Frontend (React + Vite)     │  Backend (FastAPI)       │
│  ├── React 18 + TypeScript   │  ├── Python 3.11         │
│  ├── Vite (build tool)       │  ├── FastAPI framework   │
│  ├── TailwindCSS             │  ├── Pydantic models     │
│  ├── shadcn/ui components    │  └── REST API endpoints  │
│  └── React Router            │                          │
├─────────────────────────────────────────────────────────┤
│  Deployment: 2 services (frontend CDN + backend server) │
└─────────────────────────────────────────────────────────┘
```

**Pros:**
- Separation of concerns (frontend/backend)
- Python backend for future dynamic features
- Familiar stack if you know Python
- More flexibility for complex backend logic
- Can add database, auth, APIs easily later

**Cons:**
- **Overkill for static content** - no backend needed
- **Higher hosting cost** - need to run Python server ($5-20/month minimum)
- **More complexity** - two deployments, CORS, API versioning
- **Slower initial load** - SPA needs to fetch data from API
- **Worse SEO** - client-side rendering without SSR setup
- **More maintenance** - two codebases, two deployment pipelines

#### Option B: Next.js with Static Site Generation (SSG) ✅ CHOSEN
```
┌─────────────────────────────────────────────────────────┐
│                    Architecture                          │
├─────────────────────────────────────────────────────────┤
│  Next.js 16 (Full-Stack Framework)                      │
│  ├── React 18 + TypeScript                              │
│  ├── App Router (file-based routing)                    │
│  ├── Static Site Generation (SSG)                       │
│  ├── TailwindCSS                                        │
│  ├── Custom UI components (shadcn/ui inspired)          │
│  └── Built-in optimizations (images, fonts, etc.)       │
├─────────────────────────────────────────────────────────┤
│  Deployment: Single static bundle to CDN (FREE)         │
└─────────────────────────────────────────────────────────┘
```

**Pros:**
- **Zero backend cost** - pure static files served from CDN
- **Excellent SEO** - pre-rendered HTML, perfect Core Web Vitals
- **Fastest possible performance** - static files at edge
- **Single codebase** - simpler development and deployment
- **Native React** - same component model as React + Vite
- **Built-in optimizations** - image optimization, font loading, code splitting
- **Free hosting** - Vercel, Netlify, Cloudflare Pages all free for static

**Cons:**
- No backend for dynamic features (not needed for portfolio)
- Locked into Next.js patterns (acceptable tradeoff)
- Build step required for content updates (acceptable for infrequent updates)

### Decision Rationale

| Factor | FastAPI + React + Vite | Next.js SSG | Winner |
|--------|------------------------|-------------|--------|
| **Hosting Cost** | $5-20/month (server) | $0/month (static CDN) | Next.js |
| **Performance** | Good (with optimization) | Excellent (static) | Next.js |
| **SEO** | Requires SSR setup | Built-in SSG | Next.js |
| **Complexity** | High (2 services) | Low (1 service) | Next.js |
| **Development Speed** | Moderate | Fast | Next.js |
| **Future Flexibility** | High | Moderate | FastAPI |
| **Maintenance** | Higher | Lower | Next.js |

**Verdict:** For a **static portfolio website**, Next.js SSG is the clear winner. The FastAPI + React + Vite stack is better suited for applications with:
- User authentication
- Database operations
- Real-time features
- Complex backend logic
- API-first architecture

None of these apply to a portfolio website.

---

## 3. Technology Stack Decisions

### ADR-002: Frontend Framework

**Decision:** Next.js 16 with App Router

| Alternative | Considered | Rejected Because |
|-------------|------------|------------------|
| Gatsby | Yes | Slower builds, GraphQL complexity, declining ecosystem |
| Astro | Yes | Less React-native, smaller ecosystem |
| Remix | Yes | Better for dynamic apps, overkill for static |
| Plain React + Vite | Yes | No SSG, requires manual routing, worse SEO |

**Rationale:** Next.js has the best combination of:
- Static site generation
- React ecosystem compatibility
- Vercel deployment optimization
- Active development and community

### ADR-003: Styling Solution

**Decision:** TailwindCSS with custom components inspired by shadcn/ui

| Alternative | Considered | Rejected Because |
|-------------|------------|------------------|
| CSS Modules | Yes | More boilerplate, less utility-first |
| Styled Components | Yes | Runtime overhead, bundle size |
| Material UI | Yes | Opinionated design, larger bundle |
| Chakra UI | Yes | Good but heavier than needed |

**Rationale:** TailwindCSS provides:
- Utility-first approach (fast development)
- Small bundle size (purges unused CSS)
- Dark mode support built-in
- Consistent design system
- shadcn/ui patterns without the full library overhead

### ADR-004: Component Library Approach

**Decision:** Custom components inspired by shadcn/ui (not full shadcn/ui installation)

**Rationale:**
- Only need ~5 components (Button, Card, Badge, Navigation, Footer)
- Full shadcn/ui adds unnecessary complexity
- Custom components are more maintainable for small projects
- Reduces dependencies and potential security issues

### ADR-005: Data Management

**Decision:** TypeScript data files (no CMS, no database)

| Alternative | Considered | Rejected Because |
|-------------|------------|------------------|
| Headless CMS (Contentful, Sanity) | Yes | Overkill, adds complexity and potential cost |
| Markdown files | Yes | Good option, but TypeScript gives better type safety |
| Database (Postgres, MongoDB) | Yes | Unnecessary for static content |

**Rationale:** Resume data changes infrequently. TypeScript files provide:
- Type safety
- IDE autocomplete
- No external dependencies
- Version control with Git
- Zero runtime cost

---

## 4. Hosting Platform Analysis

### Deep Research: Static Site Hosting Comparison (2025)

Based on extensive research of current hosting options, here's a comprehensive analysis:

### Free Tier Comparison

| Feature | Vercel | Netlify | Cloudflare Pages | GitHub Pages |
|---------|--------|---------|------------------|--------------|
| **Monthly Bandwidth** | 100 GB | 100 GB | **Unlimited** | 100 GB |
| **Build Minutes** | 6,000/month | 300/month | 500 builds/month | 10 builds/hour |
| **Serverless Functions** | 100K req/day | 125K req/month | 100K req/day | None |
| **Custom Domains** | Unlimited | Unlimited | 100/project | Unlimited |
| **SSL Certificates** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Commercial Use** | ❌ Hobby only | ✅ Yes | ✅ Yes | ✅ Yes |
| **Credit Card Required** | No | No | No | No |
| **Team Members** | 1 | 1 | **Unlimited** | Unlimited |

### Performance Comparison

| Metric | Vercel | Netlify | Cloudflare Pages |
|--------|--------|---------|------------------|
| **TTFB (Global Avg)** | ~70ms | ~90ms | **~50ms** |
| **Edge Locations** | 100+ | CDN Network | **300+** |
| **Build Times** | 1-2 min | 2-3 min | 3-5 min |

### Framework Support (Next.js Specific)

| Platform | Next.js Support | SSG | SSR | ISR | Edge Functions |
|----------|-----------------|-----|-----|-----|----------------|
| **Vercel** | ⭐⭐⭐⭐⭐ Native | ✅ | ✅ | ✅ | ✅ |
| **Netlify** | ⭐⭐⭐⭐ Good | ✅ | ✅ | ✅ | ✅ |
| **Cloudflare** | ⭐⭐⭐ Limited* | ✅ | ⚠️ | ⚠️ | ✅ |
| **GitHub Pages** | ⭐⭐ Basic | ✅ | ❌ | ❌ | ❌ |

*Cloudflare Pages requires OpenNext adapter for full Next.js SSR support

### Pricing at Scale

| Monthly Traffic | Vercel | Netlify | Cloudflare Pages |
|-----------------|--------|---------|------------------|
| **<100 GB** | $0 | $0 | $0 |
| **100-500 GB** | $20 + $55/TB | $19 + $55/TB | **$0** |
| **500 GB - 1 TB** | $20 + $55/TB | $19 + $55/TB | **$0** |
| **1 TB+** | $20 + $55/TB | $19 + $55/TB | **$5** (Workers Paid) |

### Cost Analysis for devinpatterson.dev

**Expected Usage:**
- Traffic: <10,000 visits/month initially
- Bandwidth: <5 GB/month (static site ~500KB per page)
- Builds: <50/month (infrequent updates)

**Projected Costs:**

| Platform | Year 1 Cost | Year 2+ Cost | Notes |
|----------|-------------|--------------|-------|
| **Cloudflare Pages** | **$0** | **$0** | Unlimited bandwidth free |
| **Vercel** | $0 | $0 | Within free tier |
| **Netlify** | $0 | $0 | Within free tier |
| **GitHub Pages** | $0 | $0 | Within free tier |

**All platforms are FREE for this use case.** The decision comes down to features and DX.

### Platform Strengths Summary

#### Vercel
- **Best for:** Next.js applications (native support)
- **Strengths:** Zero-config Next.js, preview deployments, analytics
- **Weaknesses:** Commercial use requires Pro ($20/user/month)
- **Verdict:** Best DX for Next.js, but free tier is "hobby only"

#### Netlify
- **Best for:** JAMstack sites, static site generators
- **Strengths:** Mature ecosystem, built-in forms, identity
- **Weaknesses:** Slower builds, fewer edge locations
- **Verdict:** Great all-rounder, commercial use allowed on free tier

#### Cloudflare Pages
- **Best for:** High-traffic sites, cost-conscious projects
- **Strengths:** Unlimited bandwidth, fastest global performance, commercial use
- **Weaknesses:** Less mature Next.js support, slower builds
- **Verdict:** Best value, but requires more setup for Next.js

#### GitHub Pages
- **Best for:** Simple static sites, documentation
- **Strengths:** Free, integrated with GitHub, simple
- **Weaknesses:** No serverless functions, limited features
- **Verdict:** Too basic for modern Next.js site

---

## 5. Final Recommendation

### ADR-006: Hosting Platform Selection

**Primary Recommendation:** **Cloudflare Pages** 🏆

**Rationale:**

1. **Cost:** $0/month with unlimited bandwidth (future-proof)
2. **Performance:** Fastest TTFB (~50ms) with 300+ edge locations
3. **Commercial Use:** Allowed on free tier (important for professional portfolio)
4. **Scalability:** No bandwidth limits means no surprise bills
5. **Security:** Industry-leading DDoS protection included

**Implementation Notes for Cloudflare Pages:**
- Use `next export` or configure for static output
- Deploy via GitHub integration or Wrangler CLI
- Custom domain setup is straightforward

### Alternative Recommendation: **Vercel** (if DX is priority)

**When to choose Vercel instead:**
- You want zero-config Next.js deployment
- You need preview deployments for every PR
- You plan to add ISR or SSR features later
- You're okay with "hobby" tier limitations

**Vercel Limitations to Consider:**
- Free tier is for "non-commercial" use only
- A professional portfolio could be considered commercial
- If you get a job through the site, technically commercial use

### Decision Matrix

| Factor | Weight | Cloudflare | Vercel | Netlify |
|--------|--------|------------|--------|---------|
| Cost (long-term) | 25% | 10 | 8 | 8 |
| Performance | 20% | 10 | 9 | 8 |
| Next.js Support | 20% | 7 | 10 | 8 |
| Commercial Use | 15% | 10 | 5 | 10 |
| DX/Ease of Use | 10% | 7 | 10 | 9 |
| Future Scalability | 10% | 10 | 8 | 8 |
| **Weighted Score** | 100% | **8.85** | 8.35 | 8.30 |

**Winner: Cloudflare Pages** (by a narrow margin)

---

## 6. Implementation Notes

### Deploying to Cloudflare Pages

#### Step 1: Configure Next.js for Static Export

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
```

#### Step 2: Deploy via Cloudflare Dashboard

1. Go to Cloudflare Dashboard → Pages
2. Create a project → Connect to Git
3. Select your repository
4. Build settings:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `npm run build`
   - Build output directory: `out`
5. Deploy

#### Step 3: Custom Domain Setup

1. In Cloudflare Pages → Custom domains
2. Add `devinpatterson.dev`
3. If domain is already on Cloudflare DNS: automatic
4. If not: add CNAME record pointing to `<project>.pages.dev`

### Alternative: Deploying to Vercel

```bash
# One-command deployment
npx vercel

# Or connect GitHub repo at vercel.com
```

No configuration needed - Vercel auto-detects Next.js.

---

## Appendix A: Technology Stack Summary

| Layer | Technology | Version | Rationale |
|-------|------------|---------|-----------|
| Framework | Next.js | 16.x | Best SSG + React support |
| Language | TypeScript | 5.x | Type safety, better DX |
| Styling | TailwindCSS | 4.x | Utility-first, small bundle |
| UI Components | Custom (shadcn-inspired) | - | Minimal dependencies |
| Icons | Lucide React | Latest | Lightweight, tree-shakeable |
| Fonts | Geist (via next/font) | - | Optimized loading |
| Hosting | Cloudflare Pages | - | Free, fast, unlimited BW |
| Domain | devinpatterson.dev | - | Professional branding |

## Appendix B: Comparison with FastAPI + React Stack

### When FastAPI + React + Vite Makes Sense

Use the FastAPI + React + Vite stack when you need:

| Feature | Portfolio Site | Dynamic App |
|---------|---------------|-------------|
| User authentication | ❌ No | ✅ Yes |
| Database operations | ❌ No | ✅ Yes |
| Real-time updates | ❌ No | ✅ Yes |
| Complex business logic | ❌ No | ✅ Yes |
| API for mobile apps | ❌ No | ✅ Yes |
| File uploads/processing | ❌ No | ✅ Yes |
| Payment processing | ❌ No | ✅ Yes |

**Conclusion:** The FastAPI + React stack is excellent for full-stack applications but is overkill for a static portfolio site. The additional complexity and hosting costs are not justified.

### Cost Comparison Over 3 Years

| Stack | Year 1 | Year 2 | Year 3 | Total |
|-------|--------|--------|--------|-------|
| **Next.js SSG + Cloudflare** | $0 | $0 | $0 | **$0** |
| **Next.js SSG + Vercel** | $0 | $0 | $0 | **$0** |
| **FastAPI + React + Railway** | $60 | $60 | $60 | **$180** |
| **FastAPI + React + AWS** | $120 | $120 | $120 | **$360** |

---

## Appendix C: Future Considerations

### If Dynamic Features Are Needed Later

The Next.js architecture allows easy migration to dynamic features:

1. **Add API Routes:** Next.js supports serverless API routes
2. **Add Database:** Use Vercel Postgres, PlanetScale, or Supabase
3. **Add Auth:** Use NextAuth.js or Clerk
4. **Add CMS:** Integrate Contentful, Sanity, or Notion

The static-first approach doesn't lock you in - it's a foundation that can grow.

### Recommended Migration Path

```
Static Portfolio (Now)
        ↓
Add Contact Form (Serverless Function)
        ↓
Add Blog (MDX or CMS)
        ↓
Add Analytics Dashboard (Database)
        ↓
Full Dynamic App (if needed)
```

---

## Decision Log

| Date | Decision | Status |
|------|----------|--------|
| 2026-01-29 | Use Next.js SSG instead of FastAPI + React | ✅ Accepted |
| 2026-01-29 | Use TailwindCSS for styling | ✅ Accepted |
| 2026-01-29 | Use custom components (not full shadcn/ui) | ✅ Accepted |
| 2026-01-29 | Use TypeScript data files (no CMS) | ✅ Accepted |
| 2026-01-29 | Host on Cloudflare Pages (primary) | ✅ Accepted |
| 2026-01-29 | Vercel as alternative if DX preferred | ✅ Accepted |

---

**Document Version:** 1.0  
**Last Updated:** January 29, 2026
