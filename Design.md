# KidZoo Multi-App Website — Design Document

**Version:** 1.0  
**Date:** 2025-01-15  
**Status:** Approved for Build  
**Project:** KidZoo Website (Next.js + React + Tailwind + Framer Motion)  

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Brand Identity](#2-brand-identity)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Spacing & Layout](#5-spacing--layout)
6. [Component Library](#6-component-library)
7. [Animation & Motion](#7-animation--motion)
8. [Page Architecture](#8-page-architecture)
9. [Responsive Strategy](#9-responsive-strategy)
10. [Asset Guidelines](#10-asset-guidelines)
11. [Anti-Slop Rules](#11-anti-slop-rules)
12. [Change Log](#12-change-log)

---

## 1. Design Philosophy

### 1.1 Core Principles
- **Parent-First Design:** Every pixel must feel trustworthy, warm, and professional. Parents entrust their children's data to KidZoo — the design must visually communicate safety and care.
- **Premium, Not Generic:** No default Tailwind aesthetics. Every component is intentionally designed with custom values.
- **Purpose-Driven:** Both homepage concepts serve a strategic purpose — Concept A sells the flagship app; Concept B sells the mission.
- **Mobile-First:** 70%+ of traffic is mobile. Design for thumbs, not cursors.
- **Accessible:** WCAG AA minimum for contrast, focus states, and reduced-motion preferences.

### 1.2 Reference Sites
- **Primary Reference:** https://sowieso.wero-wallet.eu/nl-en/merchant — Scroll animations, bold typography, FAQ accordion, gradient orbs, sticky nav transition.
- **Current Site:** https://www.kidzooapp.com — Content reference, existing brand presence.
- **Figma Design:** Desktop-4.png — Brand colors, layout structure, content hierarchy.

### 1.3 Mood & Feel
- **Warm:** Soft cream backgrounds, rounded corners, gentle animations.
- **Confident:** Bold display typography, generous whitespace, clear CTAs.
- **Playful (but not childish):** The brand serves kids but sells to parents. Avoid cartoonish elements; use refined colors and shapes.
- **Modern:** Glassmorphism-lite (subtle blur), mesh gradients, scroll-driven reveals.

---

## 2. Brand Identity

### 2.1 Logo Usage
- **Main Logo:** KidZoo castle logo (from Figma) — used in navbar, footer.
- **App Logos:** One per app (9 total). User will provide later. For now, use placeholder initials in colored circles.
- **Logo Clearspace:** Minimum 16px padding around logo in all contexts.
- **Logo Size (Navbar):** Height 40px on desktop, 32px on mobile.

### 2.2 Taglines
- **Primary:** "Play dates, Made Easy"
- **Secondary:** "The essential toolkit for modern parents"
- **Mission (Concept B):** "No child should feel lonely"

---

## 3. Color System

### 3.1 Primary Palette
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--pink-primary` | `#E83E8C` | rgb(232, 62, 140) | Primary CTAs, highlights, gradient start, active states |
| `--pink-light` | `#FDE8F2` | rgb(253, 232, 242) | Soft backgrounds, card accents, hover tints |
| `--teal-primary` | `#0D9488` | rgb(13, 148, 136) | Secondary CTAs, trust elements, gradient end, success states |
| `--teal-light` | `#E0F2F1` | rgb(224, 242, 241) | Soft section backgrounds, feature cards |

### 3.2 Neutral Palette
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--dark` | `#0F172A` | rgb(15, 23, 42) | Primary text, dark sections, footer background |
| `--gray-900` | `#1E293B` | rgb(30, 41, 59) | Headings, bold text |
| `--gray-600` | `#475569` | rgb(71, 85, 105) | Body text, descriptions |
| `--gray-400` | `#94A3B8` | rgb(148, 163, 184) | Placeholder text, disabled states |
| `--gray-300` | `#CBD5E1` | rgb(203, 213, 225) | Borders, dividers, subtle separations |
| `--gray-100` | `#F1F5F9` | rgb(241, 245, 249) | Alternate backgrounds, input backgrounds |
| `--white` | `#FFFFFF` | rgb(255, 255, 255) | Primary backgrounds, cards |
| `--cream` | `#FDF8F5` | rgb(253, 248, 245) | Warm off-white sections, hero backgrounds |

### 3.3 Gradient Definitions
| Name | Definition | Usage |
|------|-----------|-------|
| `--gradient-hero` | `linear-gradient(135deg, #E83E8C 0%, #0D9488 100%)` | Hero backgrounds, accent cards, CTA sections |
| `--gradient-soft` | `linear-gradient(180deg, #FDE8F2 0%, #E0F2F1 100%)` | Section backgrounds, subtle dividers |
| `--gradient-dark` | `linear-gradient(180deg, #0F172A 0%, #1E293B 100%)` | Footer, dark sections |
| `--gradient-pink-glow` | `radial-gradient(circle at 30% 50%, rgba(232,62,140,0.15) 0%, transparent 70%)` | Ambient orbs, background atmosphere |
| `--gradient-teal-glow` | `radial-gradient(circle at 70% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)` | Ambient orbs, background atmosphere |

### 3.4 App-Specific Color Variations
Each app page gets a unique theme derived from the primary palette:
| App | Primary Accent | Light Background |
|-----|---------------|-----------------|
| Playdates | `#E83E8C` (Pink) | `#FDE8F2` |
| Events | `#D946EF` (Fuchsia) | `#FAE8FD` |
| Camp | `#8B5CF6` (Violet) | `#F3E8FF` |
| Activities | `#06B6D4` (Cyan) | `#E0F7FA` |
| Market | `#F59E0B` (Amber) | `#FEF3C7` |
| ChildCare | `#10B981` (Emerald) | `#D1FAE5` |
| Venues | `#6366F1` (Indigo) | `#E0E7FF` |
| Parties | `#EC4899` (Rose) | `#FCE7F3` |
| Cakes | `#F97316` (Orange) | `#FFEDD5` |

---

## 4. Typography System

### 4.1 Font Families
| Role | Font | Weights | Source |
|------|------|---------|--------|
| **Display / Headings** | Plus Jakarta Sans | 400, 500, 600, 700, 800 | Google Fonts / next/font |
| **Body / UI** | Inter | 400, 500, 600 | Google Fonts / next/font |
| **Monospace (rare)** | JetBrains Mono | 400 | Google Fonts |

### 4.2 Type Scale (Fluid, via clamp())
| Token | Size | Line Height | Letter Spacing | Weight | Usage |
|-------|------|-------------|----------------|--------|-------|
| `--text-display` | `clamp(3rem, 6vw, 5.5rem)` | 1.1 | -0.02em | 800 | Hero H1 (Concept A) |
| `--text-hero` | `clamp(2.5rem, 5vw, 4.5rem)` | 1.15 | -0.02em | 700 | Hero H1 (Concept B) |
| `--text-h1` | `clamp(2rem, 4vw, 3.5rem)` | 1.2 | -0.01em | 700 | Page titles |
| `--text-h2` | `clamp(1.75rem, 3vw, 2.5rem)` | 1.25 | -0.01em | 700 | Section headings |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.75rem)` | 1.3 | 0 | 600 | Card titles, feature names |
| `--text-h4` | `1.125rem` (18px) | 1.4 | 0 | 600 | Sub-headings |
| `--text-body-lg` | `1.125rem` (18px) | 1.7 | 0 | 400 | Lead paragraphs |
| `--text-body` | `1rem` (16px) | 1.7 | 0 | 400 | Default body |
| `--text-body-sm` | `0.875rem` (14px) | 1.6 | 0 | 400 | Captions, metadata |
| `--text-caption` | `0.75rem` (12px) | 1.5 | 0.05em | 500 | Labels, uppercase nav |

### 4.3 Typography Rules
- **Max line length:** 65 characters for body text. Use `max-w-prose` (65ch) or `max-w-2xl`.
- **Heading colors:** `--gray-900` on light backgrounds, `--white` on dark/gradient backgrounds.
- **Body colors:** `--gray-600` on light, `--gray-300` on dark.
- **Links:** `--teal-primary` with animated underline on hover.
- **Bold in body:** `--gray-900` at weight 600 (not 700, to preserve hierarchy).

---

## 5. Spacing & Layout

### 5.1 Container Widths
| Token | Max Width | Padding |
|-------|-----------|---------|
| `--container-sm` | 640px | px-6 |
| `--container-md` | 768px | px-6 |
| `--container-lg` | 1024px | px-8 |
| `--container-xl` | 1280px | px-8 |
| `--container-2xl` | 1400px | px-12 (desktop) |

### 5.2 Section Spacing
| Context | Value | Tailwind |
|---------|-------|----------|
| **Section vertical (desktop)** | 128px | `py-32` |
| **Section vertical (mobile)** | 80px | `py-20` |
| **Section vertical (compact)** | 64px | `py-16` |
| **Between elements (large)** | 48px | `gap-12` |
| **Between elements (medium)** | 32px | `gap-8` |
| **Between elements (small)** | 16px | `gap-4` |
| **Card internal padding** | 32px | `p-8` |
| **Card internal padding (mobile)** | 24px | `p-6` |

### 5.3 Grid System
- **Base:** 12-column grid.
- **Gutter:** 24px (desktop), 16px (mobile).
- **Page padding:** Minimum 16px sides on mobile, 32px on tablet, 48px on desktop.

### 5.4 Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small buttons, tags |
| `--radius-md` | 12px | Inputs, small cards |
| `--radius-lg` | 16px | Cards, modals, sections |
| `--radius-xl` | 24px | Feature cards, large containers |
| `--radius-full` | 9999px | Pills, avatars, badges |

### 5.5 Shadows
| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 4px 24px rgba(15, 23, 42, 0.06)` | Default cards |
| `--shadow-card-hover` | `0 8px 32px rgba(15, 23, 42, 0.1)` | Card hover state |
| `--shadow-button` | `0 2px 8px rgba(232, 62, 140, 0.25)` | Primary CTA |
| `--shadow-nav` | `0 2px 16px rgba(15, 23, 42, 0.05)` | Sticky navbar |
| `--shadow-glow-pink` | `0 0 40px rgba(232, 62, 140, 0.15)` | Decorative |
| `--shadow-glow-teal` | `0 0 40px rgba(13, 148, 136, 0.15)` | Decorative |

---

## 6. Component Library

### 6.1 Buttons

#### Primary Button (Pink)
```
Background: --pink-primary
Text: --white
Padding: 14px 32px (py-3.5 px-8)
Radius: --radius-full
Font: --text-body, weight 600
Hover: Background darken 10%, translateY(-2px), shadow-button
Active: Scale 0.98
Disabled: Opacity 0.5, cursor not-allowed
```

#### Secondary Button (Teal)
```
Background: --teal-primary
Text: --white
Padding: 14px 32px
Radius: --radius-full
Hover: Background darken 10%, translateY(-2px)
```

#### Outline Button
```
Background: transparent
Border: 2px solid --gray-300
Text: --gray-900
Hover: Border --pink-primary, Text --pink-primary, translateY(-2px)
```

#### Download Button (Google Play / App Store)
```
Background: --dark
Text: --white
Padding: 12px 24px
Radius: --radius-lg
Icon: Left-aligned app icon (20px)
Text: "Download on Google Playstore" / "Download on Appstore"
Subtext: Smaller text below
Hover: Background lighten to --gray-900, translateY(-2px)
App Store placeholder: Add "Coming Soon" badge (pill, --gray-400 background)
```

### 6.2 Cards

#### App Card (Ecosystem Grid)
```
Background: --white
Border: 1px solid --gray-100
Radius: --radius-xl
Padding: --card-internal-padding
Shadow: --shadow-card
Hover: translateY(-6px), shadow-card-hover, border-color --gray-200
Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Structure:
  - App Icon (64px circle with gradient background, centered initials if no logo)
  - App Name (--text-h3)
  - 1-line Description (--text-body-sm, --gray-600)
  - "Learn More →" link (--teal-primary, with arrow animation)
```

#### Feature Card
```
Background: --white
Border: none
Radius: --radius-lg
Padding: 32px
Shadow: --shadow-card
Icon: 48px circle with light tint background (e.g., --pink-light for pink features)
Title: --text-h4
Description: --text-body, --gray-600
```

#### Testimonial Card (if needed)
```
Background: --cream
Radius: --radius-xl
Padding: 32px
Quote: --text-body-lg, italic
Author: --text-body-sm, weight 600
Avatar: 48px circle
```

### 6.3 Phone Mockup Component
```
Frame: CSS-only, no images
  - Outer: 280px × 570px (aspect ratio ~1:2)
  - Border: 12px solid --dark
  - Radius: 40px border-radius
  - Notch: 40% width × 24px height, centered top
  - Screen: Inset 12px, --white background, overflow hidden
  - Shadow: Subtle drop shadow suggesting 3D depth
  - Optional: Slight perspective rotate on hover (rotateY(-5deg) rotateX(5deg))
Screen Content: App screenshot image, object-fit cover
Animation: Subtle float (translateY ±8px, 4s ease-in-out infinite)
```

### 6.4 Input Fields
```
Background: --white
Border: 1px solid --gray-300
Radius: --radius-lg
Padding: 14px 20px
Font: --text-body
Placeholder: --gray-400
Focus: Border --teal-primary, ring-2 ring-teal-primary/20
Error: Border red-500, ring red-500/20
```

### 6.5 FAQ Accordion
```
Item:
  - Background: transparent
  - Border-bottom: 1px solid --gray-200
  - Padding: 24px 0
  
Question:
  - Font: --text-h3
  - Color: --gray-900
  - Icon: ChevronRight, rotates 90° when open
  - Hover: Color --pink-primary
  
Answer:
  - Font: --text-body, --gray-600
  - Padding-top: 16px when open
  - Animation: Height expand 0.4s cubic-bezier(0.4, 0, 0.2, 1)
  
Active State:
  - Question color: --pink-primary
  - Chevron: Rotated 90°, color --pink-primary
```

### 6.6 Navbar
```
Initial State (top of page):
  - Background: transparent
  - Text: --gray-900 (on light hero) or --white (on dark hero)
  - Logo: Full color
  
Scrolled State (after 50px scroll):
  - Background: rgba(255, 255, 255, 0.95)
  - Backdrop-filter: blur(12px)
  - Shadow: --shadow-nav
  - Text: --gray-900
  - Transition: 0.3s ease
  
Layout:
  - Height: 72px desktop, 64px mobile
  - Left: Logo
  - Center: Nav links (Home, About, Our Apps [dropdown], Blog, Help, Contact)
  - Right: "Download App" CTA button (pink, pill)
  
Mobile:
  - Hamburger icon (animated to X)
  - Slide-in panel from right, 300px width
  - Backdrop: rgba(0,0,0,0.3)
  - Links stacked, full width
```

### 6.7 Footer
```
Background: --dark
Text: --white / --gray-300
Padding: 80px top, 40px bottom
Layout: 4-column grid (desktop), stacked (mobile)
Columns:
  1. Logo + tagline + social icons (24px circles, --gray-600 hover --white)
  2. "Our Apps" — all 9 app links
  3. "Company" — About, Blog, Help, Contact, Privacy
  4. Newsletter — email input + submit button
Bottom Bar:
  - Border-top: 1px solid --gray-800
  - Padding-top: 24px
  - Left: © 2025 KidZoo, Inc.
  - Right: Terms, Privacy, Cookies
```

---

## 7. Animation & Motion

### 7.1 Philosophy
- **Purposeful:** Every animation guides attention or provides feedback.
- **Subtle:** Never distracting. No bouncing, no excessive spring.
- **Consistent:** Same easing and duration families across the site.
- **Respectful:** Honor `prefers-reduced-motion`. All animations must gracefully disable.

### 7.2 Animation Tokens
| Name | Duration | Easing | CSS Equivalent |
|------|----------|--------|----------------|
| `--ease-out-quart` | 0.8s | `[0.25, 0.1, 0.25, 1.0]` | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| `--ease-out-expo` | 0.5s | `[0.22, 1, 0.36, 1]` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-smooth` | 0.3s | `[0.4, 0, 0.2, 1]` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-spring` | 0.5s | `type: "spring", stiffness: 100, damping: 15` | Framer Motion spring |

### 7.3 Scroll Reveal Patterns

#### Fade Up (Default)
```
Initial: opacity: 0, y: 24px
Animate: opacity: 1, y: 0
Duration: 0.8s
Easing: --ease-out-quart
Trigger: When element enters viewport (threshold: 0.15)
```

#### Fade Left/Right
```
Initial: opacity: 0, x: ±40px
Animate: opacity: 1, x: 0
Duration: 0.8s
Easing: --ease-out-quart
Use: Feature sections alternating sides
```

#### Stagger Children
```
Container trigger: In viewport
Child delay: 0.1s between each
Child animation: Fade up (as above)
Use: Card grids, feature lists, app showcase
```

#### Scale In
```
Initial: opacity: 0, scale: 0.95
Animate: opacity: 1, scale: 1
Duration: 0.6s
Easing: --ease-out-expo
Use: Hero elements, modal entrances
```

### 7.4 Page Transitions
```
Exit: opacity: 1 → 0, duration: 0.2s
Enter: opacity: 0 → 1, y: 10px → 0, duration: 0.4s, ease-out-expo
Use: Framer Motion AnimatePresence wrapping page content
```

### 7.5 Hover States
| Element | Effect | Duration | Easing |
|---------|--------|----------|--------|
| Card | translateY(-6px), shadow increase | 0.3s | --ease-smooth |
| Button | translateY(-2px), background darken | 0.2s | --ease-smooth |
| Link | Underline slide-in from left | 0.3s | --ease-smooth |
| Nav Link | Color shift, subtle dot appear below | 0.2s | --ease-smooth |
| App Icon | Scale(1.05), slight glow | 0.3s | --ease-smooth |
| Chevron (FAQ) | Rotate 90° | 0.3s | --ease-smooth |

### 7.6 Continuous Animations
| Element | Animation | Duration |
|---------|-----------|----------|
| Phone Mockup | Float (translateY ±8px) | 4s ease-in-out infinite |
| Gradient Orbs | Scale (1 → 1.1) + drift (translateX ±20px) | 8s ease-in-out infinite |
| Scroll Indicator | Bounce (translateY 0 → 8px) | 1.5s ease-in-out infinite |
| CTA Button (subtle) | Pulse shadow glow | 2s ease-in-out infinite (optional) |

### 7.7 Hero Entrance Sequence (Concept A)
| Step | Element | Animation | Delay |
|------|---------|-----------|-------|
| 1 | Eyebrow text | Fade up | 0s |
| 2 | Headline line 1 | Fade up + slideY | 0.1s |
| 3 | Headline line 2 | Fade up + slideY | 0.2s |
| 4 | Subheadline | Fade up | 0.4s |
| 5 | Download buttons | Fade up | 0.5s |
| 6 | Phone mockup | Slide in from right + slight rotate settle | 0.3s |
| 7 | Gradient orbs | Scale in | 0s (background) |

### 7.8 Hero Entrance Sequence (Concept B)
| Step | Element | Animation | Delay |
|------|---------|-----------|-------|
| 1 | "THE KIDZOO MISSION" | Fade up | 0s |
| 2 | Headline word 1 | Fade up | 0.1s |
| 3 | Headline word 2 | Fade up | 0.15s |
| 4 | ... (stagger per word) | ... | +0.05s each |
| 5 | Subtext | Fade up | 0.6s |
| 6 | CTA Button | Fade up + scale | 0.7s |
| 7 | Scroll indicator | Fade in | 1.0s |

---

## 8. Page Architecture

### 8.1 Site Map
```
Homepage (Concept A) → /
Homepage (Concept B) → /concept-b

App Pages:
├── /playdates      (Full real content)
├── /events         (Placeholder)
├── /camp           (Placeholder)
├── /activities     (Placeholder)
├── /market         (Placeholder)
├── /childcare      (Placeholder)
├── /venues         (Placeholder)
├── /parties        (Placeholder)
└── /cakes          (Placeholder)

Shared Pages:
├── /about
├── /blog
├── /help           (FAQ accordion, Playdates-focused)
└── /contact
```

### 8.2 Homepage Concept A — Section Order
1. **Navbar** (sticky, transparent → solid)
2. **Hero — "Play Dates, Made Easy"**
   - Left: Headline, subheadline, download buttons
   - Right: Phone mockup carousel (auto-rotating screenshots)
   - Background: Cream + gradient orbs
   - Scroll indicator
3. **Mission Statement**
   - Centered, narrow container
   - "We are parents who have felt the frustration..."
   - Background: White
4. **Playdates Features**
   - Alternating left/right layout
   - 4 features with phone mockups
   - Icons, titles, descriptions
5. **The KidZoo Ecosystem**
   - Grid of 8 app cards (excluding Playdates, or including as "Featured")
   - Each card: placeholder logo, name, description, link
6. **Newsletter**
   - Gradient background
   - Email input + submit
7. **Footer**

### 8.3 Homepage Concept B — Section Order
1. **Navbar** (same as A)
2. **Hero — "No Child Should Feel Lonely"**
   - Centered, typographic-only (no phone)
   - Massive mission headline
   - CTA: "Explore Our Apps"
   - Background: Gradient mesh with animated orbs
3. **Why We Exist**
   - Two-column: Large stat + story paragraph
   - Counter animation for stat
4. **For Every Parenting Need**
   - Prominent app grid (9 cards, larger than Concept A)
   - Playdates card slightly emphasized
5. **Start with Playdates**
   - Spotlight section for flagship app
   - Phone mockup + download buttons
6. **Safety & Trust**
   - Icon grid (Shield, Lock, Check, Eye)
   - Privacy/security messaging from brief
7. **Newsletter** (same as A)
8. **Footer** (same as A)

### 8.4 Playdates Page — Section Order
1. **Navbar**
2. **Hero — "Set a Playdate in 30 Seconds"**
   - Headline + subheadline + download buttons
   - Phone mockup showing app
3. **The Problem**
   - Why texting doesn't work for busy parents
   - Statistics or illustrations
4. **How It Works**
   - Step-by-step (3-4 steps)
   - Icons + brief descriptions
5. **Key Features**
   - Grid of features from user's brief:
     - Quick Registration
     - Connect with Friends
     - Schedule Easily
     - Set Availability
     - See Who's Available
     - Add to Calendar
     - Safe & Secure
6. **Privacy & Safety**
   - Detailed section addressing parent concerns
   - Data encryption, no selling data, etc.
7. **Screenshots Gallery**
   - Carousel or grid of all 5 provided screenshots
8. **Download CTA**
   - Full-width gradient section
   - Final download buttons
9. **Related Apps**
   - "Explore other KidZoo apps" grid
10. **Footer**

### 8.5 Placeholder App Page Template
1. **Navbar**
2. **Hero**
   - App-specific gradient background
   - Placeholder logo (initials in circle)
   - App name + brief description
   - "Coming Soon" badge
3. **Teaser**
   - 2-3 sentences about what this app will do
   - Optional: Sign up for notifications
4. **Related Apps**
   - Grid of other KidZoo apps
5. **Footer**

---

## 9. Responsive Strategy

### 9.1 Breakpoints
| Name | Width | Tailwind Prefix |
|------|-------|----------------|
| Mobile | < 640px | Default (no prefix) |
| Tablet | 640px – 1023px | `sm:`, `md:` |
| Desktop | 1024px – 1279px | `lg:` |
| Large Desktop | ≥ 1280px | `xl:`, `2xl:` |

### 9.2 Responsive Rules
- **Mobile-first:** Base styles for mobile, scale up with breakpoints.
- **Hero:** Stack vertically on mobile (text above, phone below). Reduce phone mockup size to 220px width.
- **Navbar:** Hamburger menu on tablet and below. Full nav on desktop.
- **App Grid:** 1 column (mobile) → 2 columns (sm) → 3 columns (md) → 4 columns (lg).
- **Footer:** 1 column (mobile) → 2 columns (sm) → 4 columns (lg).
- **Section Padding:** `py-20` mobile, `py-24` tablet, `py-32` desktop.
- **Typography:** Fluid `clamp()` scales automatically. No additional breakpoint overrides needed for headings.
- **Phone Mockup:** Hide on smallest screens (< 400px) if space is too tight, or reduce further.

### 9.3 Touch Targets
- All interactive elements: Minimum 44px × 44px.
- Buttons: Minimum 48px height.
- Nav links in mobile menu: Full row height (56px).

---

## 10. Asset Guidelines

### 10.1 Images
| Type | Format | Max Size | Notes |
|------|--------|----------|-------|
| App Screenshots | PNG | 400KB each | Use actual device frames via CSS, not pre-framed images |
| Logos | SVG (preferred) or PNG | 50KB | Transparent background |
| Hero Backgrounds | SVG/CSS gradients | N/A | Prefer CSS over images |
| Blog Thumbnails | JPG/PNG | 200KB | 16:9 ratio, consistent |
| Team Photos | JPG | 150KB | Square or 4:5, consistent treatment |
| Icons | SVG (Lucide) | N/A | Uniform stroke width (2px) |

### 10.2 App Screenshots — Current Inventory
| File | App | Screen |
|------|-----|--------|
| `Active play dates_Friend request alert.png` | Playdates | Friend Request Alert |
| `Active play dates_Friend request alert (1).png` | Playdates | Friend Request Alert (duplicate?) |
| `Child's Profile.jpg` | Playdates | Child Profile |
| `Edit Parent Profile_Female.jpg` | Playdates | Edit Parent Profile |
| `See Who Is Available.png` | Playdates | See Who's Available |

**Note:** Need additional screenshots for: Home screen, Schedule playdate flow, Calendar integration, Group view.

### 10.3 Placeholder Assets
Until real assets are provided:
- **App Logos:** CSS circle (64px) with app initial (e.g., "P" for Playdates) in white text on gradient background.
- **Team Photos:** Gray circle with initials.
- **Blog Images:** Gradient placeholder with category icon.

### 10.4 Asset Directory Structure
```
public/
├── images/
│   ├── screenshots/
│   │   ├── playdates/
│   │   │   ├── friend-request.png
│   │   │   ├── child-profile.jpg
│   │   │   ├── parent-profile.jpg
│   │   │   └── whos-available.png
│   │   └── [app-name]/ (for future apps)
│   ├── logos/
│   │   ├── kidzoo-main.svg
│   │   ├── playdates.svg (placeholder)
│   │   ├── events.svg (placeholder)
│   │   └── ... (8 more)
│   ├── blog/ (for future)
│   └── team/ (for future)
└── fonts/ (if self-hosting)
```

---

## 11. Anti-Slop Rules

### 11.1 Never Do These
1. ❌ **Generic stock photos** — No Unsplash children photos unless specifically requested. Use real app screenshots.
2. ❌ **Default Tailwind values** — No `bg-gray-100`, `shadow-md`, `rounded-lg` defaults. Always use design tokens.
3. ❌ **Random gradients** — Every gradient must use the defined brand colors (`--pink-primary`, `--teal-primary`). No rainbow, no purple, no blue gradients unless defined.
4. ❌ **Inconsistent spacing** — No arbitrary margin/padding values. Use the spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
5. ❌ **Default shadows** — Never use `shadow-lg` or `shadow-xl` as-is. Use the defined shadow tokens with brand-appropriate opacity.
6. ❌ **Generic icons** — No emojis as icons. Use Lucide React icons only.
7. ❌ **Placeholder text** — No "Lorem ipsum", no "Sample text", no "Your content here". Use real KidZoo copy or meaningful placeholder descriptions.
8. ❌ **Flat buttons** — Every button must have hover states (lift, darken, shadow). No static buttons.
9. ❌ **Jarring animations** — No bounce, no elastic snap, no 3D flips. Keep motion subtle and purposeful.
10. ❌ **Inconsistent radius** — Cards use `--radius-xl` (24px), buttons use `--radius-full`, inputs use `--radius-lg`. Don't mix.

### 11.2 Always Do These
1. ✅ **Real content first** — Populate with the actual Playdates brief provided by the user.
2. ✅ **Consistent easing** — All scroll reveals use `--ease-out-quart`. All hovers use `--ease-smooth`.
3. ✅ **Whitespace generosity** — Sections need breathing room. Never cram content. Minimum 80px vertical padding.
4. ✅ **Mobile-first CSS** — Write base styles for mobile, enhance for desktop.
5. ✅ **Accessibility** — All images have alt text. All buttons have aria-labels. Focus rings visible. Color contrast ≥ 4.5:1 for body text.
6. ✅ **Performance** — Optimize images. Use next/image. Lazy load below-fold sections. Minimize JS bundle.
7. ✅ **Type hierarchy** — Every page has one H1. Sections use H2. Cards use H3. Never skip levels.
8. ✅ **Hover states** — Every interactive element has a clear, smooth hover state.
9. ✅ **Loading states** — Images fade in when loaded. No layout shift.
10. ✅ **Error handling** — Forms show validation errors. Broken images show fallback.

---

## 12. Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2025-01-15 | Initial design document | AI Agent |

---

**Next Steps:**
1. ✅ Design document approved
2. ⬜ Initialize Next.js project with shadcn/ui
3. ⬜ Configure Tailwind with design tokens
4. ⬜ Build shared components (Navbar, Footer, ScrollReveal)
5. ⬜ Build Homepage Concept A
6. ⬜ Build Homepage Concept B
7. ⬜ Build Playdates page
8. ⬜ Build 8 placeholder app pages
9. ⬜ Build shared pages (About, Blog, Help, Contact)
10. ⬜ Polish, test, export
11. ⬜ Firebase hosting setup

---

**End of Design Document**
