# Dynamic Image Systems Documentation

## Overview

The blog has two automated image systems that eliminate manual image creation:

1. **Dynamic OG Images** (`@vercel/og`) - Edge-rendered social sharing images
2. **Unsplash Fallback** - Automatic featured image resolution

---

## System 1: Dynamic OG Images

### What It Does

Automatically generates branded Open Graph (social sharing) images when articles are shared on LinkedIn, Twitter, Slack, etc.

### Endpoint

```
https://www.athletictrainerjob.com/blog/og?title={TITLE}&category={CATEGORY}
```

### Example Usage

When you share a blog post, platforms automatically fetch:
```
/blog/og?title=What%20is%20the%20H2F%20Program&category=H2F%20Program
```

This returns a 1200×630px image with:
- Army green gradient background
- Category pill (army green accent)
- Post title (white, bold, responsive sizing)
- AthleticTrainerJob.com branding footer

### Configuration

- **Route:** `src/app/og/route.tsx`
- **Runtime:** Vercel Edge (instant, cached)
- **Cost:** Free (included in Vercel hosting)
- **Colors:** Army green palette (#4A5D3E, #6B8E23)

### In Blog Posts

OG images are auto-generated **unless** you specify a custom `ogImage` in frontmatter:

```yaml
---
# Option 1: Auto-generated (default behavior)
# ogImage: (omit this field)

# Option 2: Custom OG image
ogImage: "/images/blog/custom-og-image.jpg"
---
```

The `generateMetadata` function in `src/app/[slug]/page.tsx` handles this automatically.

---

## System 2: Unsplash API Featured Images

### What It Does

When a blog post has `featuredImage: "auto"` (or empty), the pre-build script:

1. Queries Unsplash API with curated search terms
2. Downloads the best-matching professional photo
3. Saves to `public/images/blog/{slug}-unsplash.jpg`
4. Updates frontmatter with the local path and attribution

### Setup

#### 1. Get Unsplash API Key

1. Register at [unsplash.com/developers](https://unsplash.com/developers)
2. Create a new application
3. Copy your **Access Key**

#### 2. Add to Environment Variables

**Local Development** (`psi-blog/.env.local`):
```
UNSPLASH_ACCESS_KEY=your_key_here
```

**Vercel Production:**
```bash
vercel env add UNSPLASH_ACCESS_KEY
# Paste your key when prompted
```

### Rate Limits

- **Free Tier:** 50 requests/hour
- **Production:** 5,000 requests/hour (after app approval)
- **PSI Usage:** ~3 posts/week = well within free tier

### How to Use in Blog Posts

#### Option 1: Auto-resolve from Unsplash (Recommended)

```yaml
---
featuredImage: "auto"
featuredImageAlt: ""  # Will be auto-populated
imageCredit: ""       # Will be auto-populated
primaryKeyword: "army h2f program"
category: "H2F Program"
tags: ["army", "fitness", "military"]
---
```

The `npm run resolve-images` script (runs before every build) will:
- Search Unsplash using category-mapped queries
- Download and optimize the image
- Update frontmatter automatically

#### Option 2: Manual Image (Skip Unsplash)

```yaml
---
featuredImage: "/images/blog/my-custom-image.jpg"
featuredImageAlt: "Description of image"
# imageCredit: (optional, only if from Unsplash)
---
```

### Category-Mapped Search Queries

The system uses curated queries for brand consistency:

| Category | Unsplash Query |
|----------|----------------|
| H2F Program | "military fitness training facility" |
| SMIP Program | "sports medicine military healthcare" |
| Career Guides | "athletic trainer professional healthcare" |
| Locations | "military base united states" |
| Salary & Benefits | "professional career growth success" |
| Military Life | "military service members training" |

These produce professional, on-brand results that match PSI's aesthetic.

### Fallback Chain

```
1. Custom featuredImage path (if provided and exists)
   ↓
2. Unsplash API query (category query → primaryKeyword → tags)
   ↓
3. Army green gradient background (no broken images)
```

### Attribution

Unsplash requires attribution per their license. When a post uses an Unsplash image:

- `imageCredit` field is auto-populated: "Photo by [Name] on Unsplash"
- Displayed below the hero image in small italic text
- Download tracking endpoint is triggered (required by Unsplash)

### Manual Testing

To manually resolve images for existing posts:

```bash
npm run resolve-images
```

This will scan all MDX files in `content/posts/` and resolve any with `featuredImage: "auto"`.

---

## AI Agent Workflow

### When Creating a New Blog Post

The AI agent should set frontmatter as follows:

```yaml
---
# ... other fields ...
featuredImage: "auto"
featuredImageAlt: ""
# DO NOT set ogImage - it will auto-generate
primaryKeyword: "main topic keyword"
category: "H2F Program"  # Use exact category name
tags: ["army", "h2f", "athletic-trainer"]
---
```

### Publishing Flow

```bash
# 1. Agent creates MDX file with featuredImage: "auto"
# 2. Agent commits and pushes

git add content/posts/new-article.mdx
git commit -m "feat: publish new article"
git push origin main

# 3. Vercel build runs automatically:
#    - prebuild: npm run resolve-images (fetches Unsplash image)
#    - build: next build (generates static pages)
#    - deploy: Serves /og route at edge

# 4. Article goes live with:
#    - Featured image from Unsplash (or gradient if unavailable)
#    - Dynamic OG image for social sharing
#    - Proper attribution if using Unsplash
```

### Cost Summary

| System | Cost | Limits |
|--------|------|--------|
| Dynamic OG Images | Free | Unlimited (cached at edge) |
| Unsplash API | Free | 50 req/hour (free tier) |
| Image Hosting | Free | Included in Vercel |

---

## Troubleshooting

### OG Images Not Showing

1. Check metadata in `src/app/[slug]/page.tsx` - should reference `/og?title=...`
2. Test endpoint: `http://localhost:3000/blog/og?title=Test&category=Career`
3. Verify Vercel Edge runtime is supported in your plan

### Unsplash Images Not Resolving

1. Check `UNSPLASH_ACCESS_KEY` is set in environment
2. Run `npm run resolve-images` manually to see error messages
3. Verify category names match CATEGORY_QUERIES keys
4. Check rate limits (50/hour on free tier)

### Images Not Displaying

1. Check `next.config.mjs` includes `images.unsplash.com` in remotePatterns
2. Verify image file exists in `public/images/blog/`
3. Check console for download errors during `resolve-images`

---

## Files Modified/Created

**New Files:**
- `src/app/og/route.tsx` - Dynamic OG image generator
- `src/lib/unsplash.ts` - Unsplash API client
- `src/lib/image-resolver.ts` - Image resolution logic
- `scripts/resolve-images.ts` - Pre-build script
- `src/components/blog/ImageCredit.tsx` - Attribution component
- `.env.local` - Environment variables template

**Modified Files:**
- `package.json` - Added scripts and dependencies
- `next.config.mjs` - Added Unsplash to remotePatterns
- `src/app/[slug]/page.tsx` - Updated generateMetadata for dynamic OG
- `src/components/blog/PostHero.tsx` - Added ImageCredit display
- `src/lib/mdx.ts` - Added imageCredit to interface

---

## Testing

### Test Dynamic OG Images

```bash
# Start dev server
npm run dev

# Visit in browser:
http://localhost:3000/blog/og?title=Test%20Article&category=H2F%20Program

# Should see: Army green branded 1200x630 image
```

### Test Unsplash Resolution

```bash
# Set your Unsplash key in .env.local
UNSPLASH_ACCESS_KEY=your_key_here

# Run resolution script
npm run resolve-images

# Check output - should download images to public/images/blog/
```

### Test Full Build

```bash
npm run build

# Pre-build script runs automatically
# Check public/images/blog/ for downloaded Unsplash images
# Build should succeed with all OG routes working
```

---

## Production Deployment

### Vercel Environment Variables

Add via Vercel Dashboard or CLI:

```bash
vercel env add UNSPLASH_ACCESS_KEY production
# Paste your Unsplash access key
```

### First Deploy

```bash
git push origin main

# Vercel automatically:
# 1. Runs npm run resolve-images (downloads any "auto" images)
# 2. Runs npm run build (creates static pages)
# 3. Deploys edge function for /og route
# 4. All blog posts have proper images + OG cards
```

### Ongoing

Every new blog post committed with `featuredImage: "auto"` will:
- Automatically fetch an Unsplash image on build
- Generate a dynamic OG image for social sharing
- Deploy with full image support

**No manual image creation required!** 🚀
