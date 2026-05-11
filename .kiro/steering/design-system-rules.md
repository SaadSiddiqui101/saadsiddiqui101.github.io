---
inclusion: auto
---

# Design System Rules — Saad Siddiqui Portfolio

These rules guide all design-to-code implementations for the portfolio project. Follow these specifications exactly to maintain visual consistency.

---

## 🎨 Color System

### Background Colors
```css
--bg-primary:   #0f0f0f  /* Main page background */
--bg-card:      #121212  /* Card containers, hero image wrapper */
--bg-tool:      #181818  /* Tool cards, article source section */
--bg-article:   #212121  /* Article content section */
```

### Accent Colors
```css
--accent-blue:        #2591cd  /* Primary accent, links, highlights */
--accent-teal:        #67CDBE  /* Testimonial variant 1 */
--accent-purple:      #C088EA  /* Testimonial variant 2 */
--accent-blue-violet: #5D8BD7  /* Testimonial variant 3 */
```

### Text Colors
```css
/* Dark Theme (Default) */
--text-primary: #ffffff
--text-muted:   rgba(255,255,255,0.4)  /* Section labels, metadata */
--text-body:    rgba(237,237,237,0.75) /* Article body text */

/* Light Theme */
--text-primary: #0f0f0f
--text-muted:   rgba(15,15,15,0.45)
--text-body:    rgba(30,30,30,0.7)
```

### Borders & Dividers
```css
--border:      rgba(255,255,255,0.08)  /* Standard dividers */
--border-soft: rgba(255,255,255,0.06)  /* Subtle borders */
```

### Background Pattern
```css
/* Dot grid pattern applied to body */
background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
background-size: 24px 24px;

/* Light theme variant */
background-image: radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px);
```

**RULE:** Always apply the dot grid pattern to the main body background. Never omit this detail.

---

## 📝 Typography System

### Font Families
```css
--font-display: 'Darker Grotesque', sans-serif;  /* Hero titles only */
--font-body:    'Inter', sans-serif;             /* Everything else */
```

**CRITICAL:** Import both fonts from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Typography Scale

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| **Display Title** | Darker Grotesque | 67px | 600 (SemiBold) | 1.1 | --text-primary |
| **Section Label** | Inter | 20px | 500 (Medium) | normal | --text-muted |
| **Card Title** | Inter | 18px | 500 (Medium) | 24px | #ededed |
| **Project Title** | Inter | 18px | 400 (Regular) | normal | --text-primary |
| **Body Text** | Inter | 14px | 400 (Regular) | 24px | --text-body |
| **Caption/Meta** | Inter | 14px | 400 (Regular) | normal | --text-muted |
| **Footer** | Inter | 16px | 400 (Regular) | normal | --text-muted |

**RULE:** Display titles (hero) MUST use Darker Grotesque. All other text uses Inter. Never substitute fonts.

**RULE:** The accent dot (`.`) in "I Design Stuff." MUST be colored with `--accent-blue` (#2591cd).

**RULE:** Color Pallete should be.. tailwind 

---

## 📏 Spacing Scale

Use this consistent spacing scale throughout the design:

```css
--space-1:  4px   /* Micro spacing */
--space-2:  8px   /* Tight spacing, gaps between small elements */
--space-3: 12px   /* Standard gap (nav links, project right section) */
--space-4: 16px   /* Card padding, medium gaps */
--space-5: 24px   /* Card internal padding */
--space-6: 30px   /* Hero section internal gaps */
--space-7: 36px   /* Section bottom margins, hero image margin */
--space-8: 46px   /* Section label bottom margin */
--space-9: 56px   /* Large section spacing */
```

**RULE:** Never use arbitrary spacing values. Always reference the spacing scale.

**RULE:** Section spacing (between major sections) = 80px minimum.

---

## 🔲 Border Radius System

```css
--radius-sm:  8px   /* Tool icons */
--radius-md: 12px   /* Cards (tool cards, article cards) */
--radius-lg: 16px   /* Hero image */
--radius-xl: 37px   /* Testimonial outer container */
```

**Additional radii:**
- Testimonial avatar inner: `23px`
- Play button: `50%` (perfect circle)

**RULE:** Use these exact values. Do not round to nearest 5 or 10.

---

## 🧩 Component Specifications

### 1. Nav Links
```css
font-size: 14px;
color: var(--text-primary);
text-decoration: none;
transition: color 0.2s;

/* Hover state */
:hover {
  color: var(--accent-blue);
}
```

**Layout:** Vertical stack with 12px gap between links.

---

### 2. Project List Item

**Structure:**
```
┌─────────────────────────────────────────────────────┐
│ [Title]                          [Category] [Icon]  │
│ [Meta]                                              │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Display: `flex`, `justify-content: space-between`, `align-items: center`
- Title: 18px, regular weight, --text-primary
- Meta: 14px, regular weight, --text-muted (format: "Company — Date")
- Category: 14px, --text-primary, white-space: nowrap
- Icon: 24×24px, external link icon
- Gap between category and icon: 12px
- Divider below: 1px solid --border, 34px gap to next item

**RULE:** Project items MUST have a divider line between them (except after the last item).

---

### 3. Tool Card

**Dimensions:** 330px × 164px

**Structure:**
```css
background: var(--bg-tool);  /* #181818 */
border-radius: var(--radius-md);  /* 12px */
padding: 24px;
```

**Title:**
- Position: top 25px, left 24px
- Font: Inter Medium, 18px
- Color: #ededed

**Tool Icons:**
- Size: 57×57px each
- Border radius: 8px
- Position: top 78px
- Horizontal positions: 24px, 100px, 174px, 249px
- Gap between icons: ~18px

**RULE:** Tool cards MUST be exactly 330px wide. In responsive layouts, stack vertically (100% width).

---

### 4. Testimonial Character Card

**Outer Container:**
- Size: 217×217px
- Border radius: 37px
- Background: Layered gradients
  - Layer 1: `linear-gradient(rgba(255,255,255,0.04), rgba(255,255,255,0))`
  - Layer 2: `linear-gradient(rgba([accent-color],0), rgba([accent-color],0.11))`

**Avatar (Inner):**
- Size: 137×137px
- Border radius: 23px
- Position: top 40px, left 40px
- Background: Solid accent color gradient
  - `linear-gradient(rgba(255,255,255,0.04), rgba(255,255,255,0))`
  - `linear-gradient(90deg, rgb([accent]), rgb([accent]))`

**Play Button:**
- Size: 48×48px
- Position: top 153px, left 85px (centered horizontally)
- Background: `rgba(255,255,255,0.15)` with `backdrop-filter: blur(4px)`
- Border radius: 50%
- Cursor: pointer
- Hover: `transform: scale(1.1)`

**Color Variants:**
1. **Teal:** `#67CDBE` / `rgb(103, 205, 190)`
2. **Blue-Violet:** `#5D8BD7` / `rgb(93, 139, 215)`
3. **Purple:** `#C088EA` / `rgb(192, 136, 234)`

**RULE:** Testimonial cards MUST use the exact gradient layering structure. Do not simplify.

---

### 5. Article Card

**Dimensions:** 671px × 235px (max-width: 100%)

**Two-Layer Structure:**

**Layer 1 — Article Source Section (Back):**
- Size: 671×235px
- Background: `var(--bg-tool)` (#181818)
- Border radius: 12px
- Source label: 
  - Position: bottom 24px, left 20px
  - Font: Inter Regular, 14px
  - Color: --text-muted

**Layer 2 — Article Content Section (Front):**
- Size: 671×206px (29px shorter to reveal source below)
- Background: `var(--bg-article)` (#212121)
- Border radius: 12px
- Position: Stacked on top (absolute positioning)

**Content:**
- **Title:** 
  - Position: top 25px, left 21px
  - Font: Inter Medium, 18px
  - Color: #ededed
  - Line height: 24px
- **Body:**
  - Position: top 69px, left 21px
  - Width: 620px (max-width: calc(100% - 42px))
  - Font: Inter Regular, 14px
  - Color: --text-body
  - Line height: 24px
- **Fade Gradient:**
  - Position: bottom 0
  - Height: 80px
  - Background: `linear-gradient(transparent, var(--bg-article))`

**RULE:** The article card MUST use the two-layer stacking technique. The source section is taller and reveals the source label at the bottom.

---

## 📱 Responsive Breakpoints

### Desktop (≥ 1280px)
- Content column: 671px centered within 1280px canvas
- Left offset: ~300px
- Full layout with all features

### Laptop (1024px – 1279px)
- Content column: ~65% viewport width
- Hero font: ~52px (down from 67px)
- Maintain side padding ≥ 40px

### Tablet (768px – 1023px)
- Single column layout
- Tool cards: Stack 1-per-row (100% width)
- Nav links: Vertical list
- Hero font: ~40px

### Mobile (< 768px)
- Full-width content with 20px side padding
- Hero font: ~32px
- Project rows: Stack vertically (title/meta above, category/icon below)
- Testimonial cards: Horizontal scroll with overflow
- Footer: Stack vertically, center text

**RULE:** Always implement responsive breakpoints. Never create desktop-only layouts.

---

## 🎭 Theme Support

The design system supports both dark (default) and light themes.

**Theme Toggle Implementation:**
```javascript
document.documentElement.dataset.theme = 'light'; // or 'dark'
```

**Light Theme Overrides:**
```css
[data-theme="light"] {
  --bg-primary:   #f5f5f5;
  --bg-card:      #ebebeb;
  --bg-tool:      #e0e0e0;
  --bg-article:   #d6d6d6;
  --text-primary: #0f0f0f;
  --text-muted:   rgba(15,15,15,0.45);
  --text-body:    rgba(30,30,30,0.7);
  /* ... etc */
}
```

**RULE:** If implementing theme switching, use CSS custom properties and data attributes. Never hardcode colors.

---

## 🎯 Layout Rules

### Content Width
- Max width: 1280px
- Content column: 671px
- Centered with `margin: 0 auto`

### Hero Section
- Padding top: 95px
- Header top layout: `display: flex`, `justify-content: space-between`, `align-items: flex-end`
- Gap between left and right: 168px (desktop)
- Hero image height: 670px
- Hero image border radius: 16px
- Hero image overflow: hidden
- Hero image background: --bg-card

### Section Spacing
- Section margin bottom: 80px
- Section label margin bottom: 46px

**RULE:** The hero image MUST have `overflow: hidden` and `border-radius: 16px`. The image inside is positioned absolutely with negative offsets.

---

## ⚡ Interaction & Animation

### Hover States
- **Nav links:** Color changes to --accent-blue (0.2s transition)
- **Play button:** Scale to 1.1 (0.2s transition)
- **Project icons:** Implicit hover (cursor: pointer)

### Transitions
```css
transition: color 0.2s;
transition: transform 0.2s;
transition: background 0.2s;
```

**RULE:** All interactive elements MUST have smooth transitions. Use 0.2s duration with ease timing.

---

## 🚫 Don'ts

1. ❌ **Never** use Tailwind classes unless explicitly converting to vanilla CSS
2. ❌ **Never** substitute fonts (Darker Grotesque for display, Inter for body)
3. ❌ **Never** use arbitrary spacing values outside the spacing scale
4. ❌ **Never** omit the dot grid background pattern
5. ❌ **Never** simplify the testimonial card gradient structure
6. ❌ **Never** forget the two-layer article card structure
7. ❌ **Never** hardcode colors — always use CSS custom properties
8. ❌ **Never** create desktop-only layouts — always implement responsive breakpoints

---

## ✅ Do's

1. ✅ **Always** use CSS custom properties for colors
2. ✅ **Always** reference the spacing scale
3. ✅ **Always** implement hover states with smooth transitions
4. ✅ **Always** use exact border radius values from the system
5. ✅ **Always** apply the dot grid background pattern
6. ✅ **Always** use semantic HTML (header, section, footer, nav)
7. ✅ **Always** implement responsive breakpoints
8. ✅ **Always** maintain the exact component dimensions and positioning

---

## 📦 Asset Guidelines

### Icons
- External link icon: 24×24px
- Play button icon: Centered within 48×48px circle
- Logo: 35×35px

### Images
- Hero image: Positioned with negative offsets (top: -1px, left: -165px)
- Tool icons: 57×57px with 8px border radius
- Testimonial avatars: 137×137px with 23px border radius

**RULE:** When using localhost asset URLs from Figma MCP, use them directly without modification.

---

## 🔍 Quality Checklist

Before considering any implementation complete, verify:

- [ ] Dot grid background pattern is applied
- [ ] Correct fonts are loaded (Darker Grotesque + Inter)
- [ ] All spacing uses the spacing scale
- [ ] Border radius values match the system
- [ ] Colors use CSS custom properties
- [ ] Hover states have smooth transitions
- [ ] Responsive breakpoints are implemented
- [ ] Component dimensions are exact
- [ ] Two-layer article card structure is correct
- [ ] Testimonial gradient layering is preserved
- [ ] Accent dot in hero title is colored blue

---

**Last Updated:** 2026-04-24  
**Source:** design-system.html via Figma MCP  
**Maintainer:** Saad Siddiqui Portfolio Project
