# AGENTS.md — KidZoo Website Project

**Project:** KidZoo Multi-App Website  
**Tech Stack:** Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui + Framer Motion  
**Repository:** `/Users/biswajeet/Desktop/Mayuresh Projects/KidzooWebsiteReact/`  

---

## 1. Project Overview

This is a **premium, bespoke marketing website** for KidZoo — a suite of mobile applications for modern parents. The flagship app is **KidZoo Playdates**, with 8 additional apps in the ecosystem (Events, Camp, Activities, Market, ChildCare, Venues, Parties, Cakes).

The website features:
- **Two homepage concepts** (A/B testing on separate routes)
- **9 app-specific landing pages**
- **Shared pages** (About, Blog, Help/FAQ, Contact)
- **Rich scroll animations** inspired by wero-wallet.eu
- **Firebase Hosting** compatible static export

**Design Philosophy:** Parent-first, premium, warm but not childish, modern with subtle animations.

---

## 2. Quick Reference

### 2.1 Important Files
| File | Purpose |
|------|---------|
| `Design.md` | Comprehensive design system, tokens, components, animations |
| `AGENTS.md` | This file — project context and agent guidelines |
| `next.config.js` | Next.js configuration (static export) |
| `tailwind.config.ts` | Tailwind theme extension with design tokens |
| `app/layout.tsx` | Root layout — fonts, metadata, providers |
| `lib/apps-data.ts` | Central data file for all 9 apps (names, descriptions, links, colors) |

### 2.2 Key URLs
| Site | URL | Purpose |
|------|-----|---------|
| Reference Design | https://sowieso.wero-wallet.eu/nl-en/merchant | Animation, layout, typography inspiration |
| Current Site | https://www.kidzooapp.com | Content reference, existing brand |
| Playdates Android | https://play.google.com/store/apps/details?id=com.kidzoo.kidzoo | Real download link |

### 2.3 Brand Colors (Quick Ref)
- **Primary Pink:** `#E83E8C`
- **Primary Teal:** `#0D9488`
- **Dark:** `#0F172A`
- **Cream:** `#FDF8F5`

### 2.4 Fonts
- **Display/Headings:** Plus Jakarta Sans (weights 400-800)
- **Body:** Inter (weights 400-600)

---

## 3. Development Guidelines

### 3.1 Before Writing Code
1. **Read `Design.md`** — Check the relevant section for colors, spacing, typography, animations.
2. **Check `lib/apps-data.ts`** — Use centralized data, don't hardcode app names/descriptions.
3. **Review existing components** — Reuse from `components/ui/`, `components/shared/`, `components/layout/`.

### 3.2 Component Rules
- **All components** are React Server Components by default unless they need:
  - State (`useState`)
  - Effects (`useEffect`)
  - Browser APIs (`window`, `document`)
  - Event handlers (onclick with state)
  - Animation hooks (`useInView`, `useAnimation`)
  
  If any of the above apply, add `"use client"` at the top.

- **Props interface** — Every component must have a typed props interface:
  ```tsx
  interface MyComponentProps {
    title: string;
    description?: string;
  }
  
  export function MyComponent({ title, description }: MyComponentProps) {
    // ...
  }
  ```

- **Default exports** — Use named exports for components. Avoid `export default` unless required by Next.js (pages).

### 3.3 Styling Rules
- **Use Tailwind classes** — No inline styles except for dynamic values (e.g., animation delays).
- **Design tokens only** — No arbitrary values like `mt-[50px]`. Use `mt-12` (48px) or `mt-16` (64px).
- **Color tokens** — Use Tailwind config colors: `bg-pink-primary`, `text-gray-600`, etc. No hex codes in JSX.
- **Responsive** — Mobile-first. Write base style, then `md:`, `lg:` enhancements.
- **Dark mode** — Not required for v1. Light mode only.

### 3.4 Animation Rules
- **Framer Motion** is the animation library.
- **Reusable wrapper:** `components/shared/ScrollReveal.tsx` handles most scroll animations.
- **Always check `prefers-reduced-motion`** — Wrap animations in a check:
  ```tsx
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;
  ```
- **No random durations** — Use tokens from `Design.md` Section 7.2.

### 3.5 Data Rules
- **Centralize app data** in `lib/apps-data.ts`:
  ```ts
  export const apps = [
    {
      id: 'playdates',
      name: 'KidZoo Playdates',
      description: 'Set up playdates for your children in 30 seconds.',
      color: '#E83E8C',
      lightColor: '#FDE8F2',
      slug: '/playdates',
      downloadLink: 'https://play.google.com/store/apps/details?id=com.kidzoo.kidzoo',
      hasScreenshots: true,
      isPlaceholder: false,
    },
    // ... etc
  ];
  ```
- **Never hardcode app lists** — Import from `apps-data.ts`.

### 3.6 Asset Rules
- **Images** — Use `next/image` with proper `width`, `height`, and `alt`.
- **Screenshots** — Store in `public/images/screenshots/[app-name]/`.
- **Logos** — Store in `public/images/logos/`. Use SVG when possible.
- **Placeholder logos** — CSS circle with app initial until real logo provided.

---

## 4. Page-Specific Guidelines

### 4.1 Homepage Concept A (`/`)
- **Hero:** Split layout (55/45). Phone mockup auto-rotates screenshots.
- **Mission:** Centered, narrow (`max-w-3xl`), real copy from brief.
- **Features:** Alternating layout with phone mockups.
- **Ecosystem:** 8 cards (2×4 desktop), staggered scroll reveal.

### 4.2 Homepage Concept B (`/concept-b`)
- **Hero:** Centered typography-only. No phone mockup. Gradient orbs background.
- **Stats:** Large number with counter animation.
- **Apps Grid:** Larger cards than Concept A. Playdates slightly emphasized.
- **Spotlight:** "Start with Playdates" section with phone mockup.

### 4.3 Playdates Page (`/playdates`)
- **Full real content** from user's brief.
- **Features section:** Extract from brief (Quick Registration, Connect Friends, Schedule, Availability, Who's Available, Calendar, Safety).
- **Privacy section:** Detailed, addresses parent concerns.
- **Screenshots:** Use all 5 provided assets in a gallery/carousel.

### 4.4 Placeholder App Pages (`/events`, `/camp`, etc.)
- **App-specific gradient** (from Design.md Section 3.4).
- **"Coming Soon" badge** — Pill shape, app accent color.
- **Teaser text** — 2-3 sentences about what the app will do.
- **Related apps grid** — Link to other KidZoo apps.

### 4.5 Help/FAQ Page (`/help`)
- **Accordion** — Reuse `components/sections/FAQAccordion.tsx`.
- **Categories** — Safety, Privacy, Features, Account.
- **Questions** — Use content from user's Playdates brief.

---

## 5. Common Tasks

### 5.1 Adding a New App Page
1. Add app data to `lib/apps-data.ts`.
2. Create `app/[app-name]/page.tsx`.
3. Import app data and use `AppPageTemplate` component.
4. Add route to navbar dropdown.

### 5.2 Adding a New Section
1. Create component in `components/sections/[SectionName].tsx`.
2. Add to page file.
3. Document in `Design.md` if reusable.

### 5.3 Modifying Design Tokens
1. Update `tailwind.config.ts`.
2. Update `Design.md` Section 3 (Color System).
3. Update all affected components.

### 5.4 Adding Animations
1. Check `components/shared/ScrollReveal.tsx` first.
2. For complex sequences, use Framer Motion `useInView` + `motion.div`.
3. Document in `Design.md` Section 7.

---

## 6. Testing Checklist

### 6.1 Before Committing
- [ ] No TypeScript errors (`npm run build` passes)
- [ ] No ESLint warnings
- [ ] All images have `alt` text
- [ ] All buttons have hover states
- [ ] Mobile responsive (test 375px, 768px, 1440px)
- [ ] Scroll animations work smoothly
- [ ] Navbar transitions correctly on scroll
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Phone mockup displays correctly
- [ ] Download buttons link correctly (Playdates → real link, others → placeholder)

### 6.2 Before Deploying
- [ ] Static export succeeds (`next build`)
- [ ] All routes work in exported HTML
- [ ] No 404s on internal links
- [ ] Images optimized and loading
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)

---

## 7. Troubleshooting

| Issue | Solution |
|-------|----------|
| `next/image` not working with static export | Use `unoptimized` in `next.config.js` or standard `<img>` for static |
| Framer Motion `useInView` not triggering | Ensure `threshold` is set (default 0.15). Check element is in viewport. |
| Tailwind classes not applying | Run `npm run dev` to regenerate. Check `tailwind.config.ts` includes file path. |
| shadcn component not found | Run `npx shadcn add [component-name]` |
| Phone mockup looks flat | Add `transform: perspective(1000px) rotateY(-5deg)` and subtle shadow |
| Scroll animations feel janky | Reduce duration, check `prefers-reduced-motion`, use `will-change: transform` sparingly |

---

## 8. External Resources

- **Next.js App Router Docs:** https://nextjs.org/docs/app
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **shadcn/ui Components:** https://ui.shadcn.com/docs/components
- **Framer Motion Docs:** https://www.framer.com/motion/
- **Lucide Icons:** https://lucide.dev/icons/
- **wero-wallet Reference:** https://sowieso.wero-wallet.eu/nl-en/merchant

---

## 9. Contact & Ownership

- **Project Owner:** Mayuresh (KidZoo, Inc.)
- **Current Website:** https://www.kidzooapp.com
- **Playdates App:** https://play.google.com/store/apps/details?id=com.kidzoo.kidzoo

---

**Last Updated:** 2025-01-15  
**Version:** 1.0

**End of AGENTS.md**
