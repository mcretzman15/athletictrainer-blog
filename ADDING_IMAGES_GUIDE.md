# Guide: Adding Images to Blog Posts

## ✅ What's Been Fixed

**Hero Images** - All blog posts now have REAL Unsplash photos instead of green gradients:
- H2F Program article: Professional military fitness photo
- SMIP Program article: Sports medicine military healthcare photo  
- Salary article: Professional career growth photo

**Inline Images** - You can now add images INSIDE blog post content using the `<ArticleImage>` component

---

## How to Add Images to Blog Posts

### Option 1: Unsplash Hero Images (Automatic)

In your MDX frontmatter, set:

```yaml
---
featuredImage: "auto"
featuredImageAlt: ""
category: "H2F Program"
tags: ["military", "fitness"]
primaryKeyword: "army h2f program"
---
```

When you build (`npm run build`), the system will:
1. Query Unsplash with your category/keywords
2. Download a professional photo
3. Update the frontmatter automatically
4. Display it as the hero image

**Result:** Beautiful professional photo at the top of your article!

---

### Option 2: Custom Hero Images

Upload your own image to `public/images/blog/` and reference it:

```yaml
---
featuredImage: "/images/blog/my-custom-image.jpg"
featuredImageAlt: "Description of the image"
---
```

---

### Option 3: Inline Images INSIDE Articles

Use the `<ArticleImage>` component anywhere in your MDX content:

```mdx
## Section Title

Some paragraph text here explaining the topic.

<ArticleImage 
  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=675&fit=crop" 
  alt="Army soldiers training in a modern fitness facility"
  caption="H2F facilities provide state-of-the-art equipment for performance optimization"
/>

More text continuing after the image...
```

**Props:**
- `src` - Image URL (Unsplash or local `/images/blog/...`)
- `alt` - Alt text for accessibility (required)
- `caption` - Optional caption displayed below image
- `width` - Optional, defaults to 1200px
- `height` - Optional, defaults to 675px

---

## Finding Unsplash Images

### Method 1: Let the System Choose (Recommended)

Set `featuredImage: "auto"` and the system picks professional photos based on your category.

### Method 2: Manually Browse Unsplash

1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant keywords (e.g., "military fitness", "athletic trainer", "sports medicine")
3. Click on a photo you like
4. Click the "Share" button → Copy the image URL
5. Add `?w=1200&h=675&fit=crop` to the URL for optimal sizing

**Example:**
```
https://images.unsplash.com/photo-XXXXXXX?w=1200&h=675&fit=crop
```

---

## Full Example: Blog Post with Multiple Images

```mdx
---
title: "My Article Title"
slug: "my-article"
featuredImage: "auto"  # Unsplash will fetch hero image
category: "H2F Program"
tags: ["army", "fitness"]
---

The intro paragraph goes here. The hero image appears automatically at the top.

## Section 1

Some content explaining the first point.

<ArticleImage 
  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=675&fit=crop" 
  alt="Soldiers training in H2F facility"
  caption="Modern H2F facilities feature state-of-the-art equipment"
/>

More explanation after the image.

## Section 2

Another section with more content.

<ArticleImage 
  src="/images/blog/custom-photo.jpg" 
  alt="Custom image description"
  caption="You can also use your own uploaded images"
/>

Continue with more content...
```

---

## Image Best Practices

### Hero Images
- **Automatic**: Use `featuredImage: "auto"` for professional Unsplash photos
- **Dimensions**: 1200×675px (16:9 aspect ratio)
- **File size**: Under 500KB for optimal loading
- **Alt text**: Descriptive and specific

### Inline Images
- **Placement**: After headings or between sections
- **Frequency**: 1-3 images per 1000 words
- **Captions**: Helpful context, not redundant with alt text
- **Relevance**: Images should add value, not just decoration

### SEO Considerations
- Always include alt text
- Use descriptive file names (e.g., `h2f-facility-training.jpg`)
- Optimize file sizes (use WebP when possible)
- Unsplash images are automatically optimized by Next.js

---

## Updating Existing Posts with Images

To add real photos to your existing posts:

1. **Update frontmatter to auto**:
   ```yaml
   featuredImage: "auto"
   featuredImageAlt: ""
   ```

2. **Run the resolver**:
   ```bash
   npm run resolve-images
   ```

3. **Add inline images** where appropriate using `<ArticleImage>` component

4. **Rebuild**:
   ```bash
   npm run build
   ```

---

## Current Image Status

✅ **H2F Program article** - Real Unsplash hero image
✅ **SMIP Program article** - Real Unsplash hero image  
✅ **Salary article** - Real Unsplash hero image
✅ **ArticleImage component** - Available for inline use

**No more plain green backgrounds!** 🎉

---

## For AI Agent Workflow

When the AI agent creates a new blog post:

```yaml
---
# Always use auto for hero images
featuredImage: "auto"
featuredImageAlt: ""

# Add inline images in the content
---

Article intro...

<ArticleImage 
  src="https://images.unsplash.com/photo-XXXXXXX?w=1200&h=675&fit=crop" 
  alt="Relevant alt text"
  caption="Helpful caption"
/>

More content...
```

The pre-build script (`npm run resolve-images`) automatically runs before every Vercel deployment, so hero images are always resolved.

---

## Troubleshooting

**Hero image not showing?**
- Check frontmatter has `featuredImage` set
- Run `npm run resolve-images` manually
- Check `public/images/blog/` for the downloaded file

**Inline image not displaying?**
- Verify Unsplash URL includes `?w=1200&h=675&fit=crop`
- Check image URL is accessible
- For local images, ensure they're in `public/images/blog/`

**Build failing?**
- Check MDX syntax (proper spacing around `<ArticleImage>` tags)
- Verify all required props (src, alt) are provided
- Check for typos in component name

---

## Quick Reference

```mdx
# Hero Image (auto-fetched)
---
featuredImage: "auto"
---

# Inline Image (Unsplash)
<ArticleImage 
  src="https://images.unsplash.com/photo-ID?w=1200&h=675&fit=crop" 
  alt="Description"
  caption="Optional caption"
/>

# Inline Image (local)
<ArticleImage 
  src="/images/blog/my-image.jpg" 
  alt="Description"
/>
```

Now your blog has **real professional photography** throughout! 📸
