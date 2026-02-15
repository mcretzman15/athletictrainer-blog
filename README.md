# AthleticTrainerJob.com Blog

A Next.js 14+ blog application for Cognito Systems (a PSI joint venture), deployed at `athletictrainerjob.com/blog`. This blog serves as the organic content marketing channel for athletic trainer recruitment, focusing on military healthcare careers in Army H2F and Marine Corps SMIP programs.

## Project Overview

- **Framework:** Next.js 14+ with App Router
- **Content System:** MDX files with frontmatter
- **Styling:** Tailwind CSS with PSI design tokens
- **Deployment:** Vercel with `/blog` base path
- **TypeScript:** Full type safety throughout

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd psi-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/blog](http://localhost:3000/blog) in your browser.

## Project Structure

```
psi-blog/
├── content/
│   ├── posts/              # MDX blog articles
│   └── authors/            # Author JSON profiles
├── public/
│   └── images/
│       ├── blog/           # Post featured images
│       └── authors/        # Author photos
├── src/
│   ├── app/
│   │   └── blog/           # All blog routes
│   │       ├── page.tsx            # Blog index
│   │       ├── [slug]/page.tsx     # Individual posts
│   │       ├── category/[category]/page.tsx
│   │       ├── author/[slug]/page.tsx
│   │       ├── sitemap.xml/route.ts
│   │       └── feed.xml/route.ts
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Container
│   │   ├── blog/           # Blog-specific components
│   │   ├── mdx/            # Custom MDX components
│   │   └── seo/            # Schema markup components
│   ├── lib/
│   │   ├── mdx.ts          # MDX parsing and queries
│   │   ├── posts.ts        # Post pagination and filtering
│   │   └── utils.ts        # Helper functions
│   └── styles/
│       └── globals.css     # Tailwind + custom CSS
├── tailwind.config.ts      # Tailwind with PSI tokens
├── next.config.mjs         # Next.js config with /blog base path
└── tsconfig.json
```

## Creating Content

### Adding a New Blog Post

1. Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
description: "Brief description for SEO and previews"
date: "2026-02-15"
author: "psi-editorial"
category: "H2F Program"
tags: ["tag1", "tag2"]
featuredImage: "/images/blog/your-image.jpg"
featuredImageAlt: "Image description"
published: true
featured: false
seoTitle: "SEO-optimized title"
seoDescription: "SEO meta description"
canonicalUrl: "https://www.athletictrainerjob.com/blog/your-post-slug"
schema: "Article"
primaryKeyword: "main keyword"
relatedPosts: ["related-post-1", "related-post-2"]
---

Your content here using MDX and custom components.
```

2. Add your featured image to `public/images/blog/`

3. Build and test:
```bash
npm run build
npm run dev
```

### Custom MDX Components

The blog includes custom components for rich content:

**Callout**
```mdx
<Callout type="info|warning|tip|mission">
Your callout content here
</Callout>
```

**FAQ**
```mdx
<FAQ>
  <FAQItem question="Your question?">
    Answer content
  </FAQItem>
</FAQ>
```

**Job CTA**
```mdx
<JobCTA location="Fort Riley" program="H2F" />
```

**Salary Range**
```mdx
<SalaryRange min={60000} max={90000} disclaimer={true} />
```

**Location Card**
```mdx
<LocationCard 
  name="Fort Riley" 
  state="Kansas" 
  program="H2F"
  description="Brief description"
/>
```

**Comparison Table**
```mdx
<ComparisonTable>
  <TableHead>
    <TableRow>
      <TableHeader>Column 1</TableHeader>
      <TableHeader>Column 2</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
    </TableRow>
  </TableBody>
</ComparisonTable>
```

### Adding Authors

Create a JSON file in `content/authors/`:

```json
{
  "slug": "author-slug",
  "name": "Author Name",
  "title": "Author Title",
  "bio": "Author biography",
  "photo": "/images/authors/photo.jpg",
  "linkedin": "https://linkedin.com/in/...",
  "twitter": "https://twitter.com/..."
}
```

## Design System

### Colors

The blog uses PSI's exact brand colors:

- **Primary Navy:** `#1B3A5F` - Headers, navigation, primary CTAs
- **Accent Red:** `#E31837` - Urgent CTAs, hover states
- **Text:** `#1A1A2E` - Body text
- **Gray Text:** `#4A4A5A` - Secondary text
- **Light Gray:** `#F5F5F7` - Backgrounds
- **Border Gray:** `#E0E0E0` - Borders and dividers

### Typography

- **Font Family:** Modern system sans-serif stack (SF Pro, Segoe UI, Roboto, etc.)
- **Body Text:** 16px minimum, 1.7 line height
- **Headings:** Primary blue color, semibold to bold weight

### Components

- **Buttons:** Use `btn-primary` (blue), `btn-accent` (green), or `btn-ghost` classes
- **Cards:** Rounded-xl corners with soft shadows
- **Category Pills:** Use `category-pill` class with blue background
- **Containers:** Use `<Container>` component with maxWidth prop
- **Gradients:** Hero sections use gradient backgrounds (primary to blue-800)

## SEO Features

### Implemented SEO

- ✅ Dynamic meta tags (title, description, Open Graph, Twitter Cards)
- ✅ Canonical URLs on all pages
- ✅ Article structured data (JSON-LD)
- ✅ FAQ structured data
- ✅ Breadcrumb structured data
- ✅ Organization structured data
- ✅ Dynamic sitemap at `/blog/sitemap.xml`
- ✅ RSS feed at `/blog/feed.xml`
- ✅ Self-referencing canonical tags
- ✅ Performance optimized images

### Key SEO URLs

- Sitemap: `https://www.athletictrainerjob.com/blog/sitemap.xml`
- RSS Feed: `https://www.athletictrainerjob.com/blog/feed.xml`

## Deployment

### Vercel Deployment

The blog is configured for Vercel deployment with custom domain routing:

1. **Connect Repository to Vercel:**
   - Import project in Vercel dashboard
   - Connect to GitHub repository

2. **Configure Domain:**
   - Add `athletictrainerjob.com` as custom domain
   - Configure DNS to point to Vercel
   - Set up rewrite rules to route `/blog/*` to this app

3. **Environment Variables:**
   - Set `NODE_ENV=production`
   - Add any API keys if needed in future

4. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Domain Configuration

The blog runs at `athletictrainerjob.com/blog` via:
- `basePath: "/blog"` in `next.config.mjs`
- Vercel rewrites routing `/blog/*` to this application
- Main Webflow site continues to serve all other paths

### Post-Deployment Checklist

- [ ] Verify `/blog` loads correctly
- [ ] Test all navigation links
- [ ] Check sitemap at `/blog/sitemap.xml`
- [ ] Verify RSS feed at `/blog/feed.xml`
- [ ] Test blog post pages render correctly
- [ ] Confirm images load properly
- [ ] Submit sitemap to Google Search Console
- [ ] Verify schema markup with Google Rich Results Test
- [ ] Check Core Web Vitals in PageSpeed Insights

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (configure as needed)

### Performance Targets

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Lighthouse Performance Score: 90+

## Content Guidelines

### Blog Post Requirements

1. **Frontmatter:** Complete all required fields
2. **Images:** WebP format, optimized, with alt text
3. **Length:** Minimum 1,500 words for SEO value
4. **Headings:** Proper H2/H3 structure for TOC
5. **Internal Links:** Link to 2-3 related posts
6. **CTAs:** Include at least one JobCTA component
7. **SEO:** Target one primary keyword naturally

### Brand Voice

- **Tone:** Professional, authoritative, warm
- **Perspective:** Second person ("you")
- **Style:** "Trusted advisor" not "recruiter"
- **Vocabulary:** 
  - Use "athletic trainer" not "AT" in first reference
  - Use "service members" not "troops"
  - Use "military healthcare" not "military medicine"
- **Formatting:** No exclamation points in body copy

## Troubleshooting

### Common Issues

**Build Fails:**
- Check all MDX files have valid frontmatter
- Ensure all imported images exist
- Verify no TypeScript errors

**Images Not Loading:**
- Confirm images are in `public/images/`
- Check image paths start with `/images/`
- Verify Next.js image optimization config

**Styling Issues:**
- Run `npm run build` to rebuild Tailwind
- Check for conflicting CSS classes
- Verify custom properties in globals.css

**404 on Routes:**
- Confirm basePath is set to `/blog` in next.config.mjs
- Check route file names match conventions
- Verify slug matches filename

## Support

For questions or issues:
- **Technical Issues:** Contact development team
- **Content Questions:** Contact PSI marketing team
- **Design Requests:** Refer to PSI brand guidelines

## License

© 2026 Planned Systems International. All rights reserved.
