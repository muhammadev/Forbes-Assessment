# Forbes Middle East News — Nuxt 3 Technical Assessment

Responsive Nuxt 3 implementation of the provided Forbes Middle East news Figma design.

The project focuses on matching the supplied layout, building reusable news components, rendering repeated content from typed data structures, and covering core Nuxt concerns such as routing, SEO, image handling, and responsive behavior.

## Tech stack

- Nuxt 3
- Vue 3 Composition API
- TypeScript
- Tailwind CSS
- Nuxt Image

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app runs at:

```bash
http://localhost:3000
```

### Production build

```bash
npm run build
npm run preview
```

### Static generation

```bash
npm run generate
```

### Type checking

```bash
npx vue-tsc --noEmit
```

## Project structure

```text
components/
  base/                 Shared layout primitives
  layout/               App header and footer
  news/                 Reusable news UI components

data/
  articles.ts           Static article data used across pages
  categories.ts         Navigation/category data
  categoryHighlights.ts Homepage category highlight data

pages/
  index.vue             Homepage
  articles/[slug].vue   Article detail page
  categories/[slug].vue Category listing page

types/
  article.ts            Article and body block types
  category.ts           Category types

utils/
  articleCardConfig.ts  Article card variant class/config mapping
  articles.ts           Article filtering/lookup helpers
  tw.ts                 Tailwind class helper

assets/css/
  main.css              Tailwind entry and global styles

public/
  images/               Static image and icon assets
```

## Implemented features

- Responsive homepage based on the provided Forbes-style news layout.
- Dynamic rendering from typed static data instead of hardcoded repeated cards.
- Reusable card system with multiple display variants.
- Article detail pages with slug-based routing.
- Category pages with slug-based routing.
- Shared header/footer layout.
- Dynamic category navigation.
- Basic SEO metadata for homepage, category pages, and article pages.
- Article structured data on article detail pages.
- Skeleton loaders for major content sections.
- Micro-interactions:
  - Mobile nav marquee behavior.
  - Arrow icon hover rotation.
  - Article image hover scale.
- Nuxt Image usage for responsive image delivery.

## Responsive behavior

The implementation is built mobile-first with Tailwind breakpoints and supports:

- Mobile
- Tablet
- Desktop

Layouts progressively adapt from stacked mobile sections to richer desktop grids.

## Image and performance notes

- Raster images are rendered through `NuxtImg` where appropriate.
- Critical hero images use eager loading and high fetch priority.
- Non-critical/card images use lazy loading.
- Explicit `sizes`, `width`, and `height` values are provided to help Nuxt Image generate responsive assets.
- The artificial skeleton delay was removed so static SSR content can render immediately.
- Inter is intentionally loaded because the design requires it. The font is loaded through Nuxt head links with preconnect/preload hints instead of a CSS `@import`.

## Assumptions made

- The assessment is frontend-focused, so article/category data is modeled locally in TypeScript files instead of integrating a CMS or external API.
- Images are served from the local `public/images` directory.
- The article content is representative demo content created to support the supplied design and routing requirements.
- Category and article pages are implemented with static data lookup by slug.
- Dark mode was not implemented so the work could stay focused on the supplied light-mode Figma design, responsiveness, SEO, and performance.

## Notes for reviewers

The app is intentionally structured around reusable components and typed data so that replacing the static data with API/CMS data later would require minimal UI changes.
