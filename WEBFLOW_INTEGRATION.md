# Webflow Integration Guide

## Option 1: Webflow Cloud (RECOMMENDED) ⭐

**Best for:** Native integration, cleanest URLs, professional setup

### What It Is
Webflow Cloud lets you deploy your Next.js blog directly to Webflow's infrastructure at `athletictrainerjob.com/blog/`.

### Requirements
- Webflow paid site plan
- Next.js 15+ (✅ you have this!)
- Webflow Cloud access

### Setup Steps

1. **Push Code to GitHub** (if not done yet):
   ```bash
   cd "/Users/mattcretzman/Desktop/_Client Projects/PSI/psi-blog"
   git remote add origin https://github.com/YOUR_USERNAME/psi-blog.git
   git push -u origin main
   ```

2. **Go to Webflow Dashboard:**
   - Open your `athletictrainerjob.com` site
   - Go to **Hosting** → **Webflow Cloud**
   - Click **"Add Application"**

3. **Connect GitHub:**
   - Select your `psi-blog` repository
   - Framework: **Next.js**
   - Build Command: `npm run build`
   - Mount Path: `/blog`

4. **Add Environment Variables:**
   - `UNSPLASH_ACCESS_KEY`: `UCjA_bCsFeM4h12YIiPVNRo7NsjhKrHZX6-Fm3a3ChA`

5. **Deploy:**
   - Click **"Deploy"**
   - Your blog will be live at: `https://www.athletictrainerjob.com/blog/`

### Benefits
✅ Native Webflow integration
✅ Automatic HTTPS
✅ One domain for everything
✅ No reverse proxy needed
✅ Webflow manages hosting

---

## Option 2: Subdomain (EASY SETUP)

**Best for:** Quick setup, separate blog branding

### What It Is
Create `blog.athletictrainerjob.com` and point it to your Vercel deployment.

### Setup Steps

1. **In Webflow:**
   - Go to Site Settings → Publishing → Custom Domains
   - Add subdomain: `blog.athletictrainerjob.com`
   - Follow Webflow's DNS instructions

2. **In Vercel:**
   - Go to your `psi-blog` project → Settings → Domains
   - Add domain: `blog.athletictrainerjob.com`
   - Update DNS as instructed by Vercel

3. **Update Next.js Config:**
   Remove `basePath: "/blog"` from `next.config.mjs` since it's now the root of the subdomain:
   ```javascript
   const nextConfig = {
     // basePath: "/blog", // REMOVE THIS LINE
     output: "standalone",
     // ... rest of config
   };
   ```

4. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Result
Your blog will be at: `https://blog.athletictrainerjob.com/`

### Benefits
✅ Easiest to set up
✅ Works with any registrar
✅ Independent hosting
✅ No Webflow plan requirement

---

## Option 3: Reverse Proxy with Subfold

**Best for:** `/blog` path on main domain without Webflow Cloud

### What It Is
Use Subfold to proxy `athletictrainerjob.com/blog/*` requests to your Vercel deployment.

### Setup Steps

1. **Sign up for Subfold:**
   - Go to [subfold.io](https://subfold.io/)
   - Connect your Webflow site
   - Free plan available for basic usage

2. **Configure Subfold:**
   - Source: `athletictrainerjob.com/blog`
   - Destination: `https://psi-blog.vercel.app/blog`

3. **Update DNS:**
   - Follow Subfold's DNS instructions
   - Usually involves pointing to Subfold's servers

4. **That's it!**
   - Subfold handles routing automatically
   - Your blog appears at: `https://www.athletictrainerjob.com/blog/`

### Benefits
✅ Clean `/blog` path
✅ No code changes needed
✅ Works with current setup
✅ Free SSL/TLS

### Downsides
⚠️ Additional service to manage
⚠️ Potential latency
⚠️ Monthly cost (after free tier)

---

## Option 4: Webflow CMS API (NOT RECOMMENDED)

**Use the API to push blog posts into Webflow's native CMS**

### Why NOT Recommended
- ❌ Requires rebuilding entire blog in Webflow
- ❌ Loses all your custom components
- ❌ Loses automatic image features
- ❌ More expensive (Webflow CMS plan required)
- ❌ Can't use Next.js features

### When to Consider
Only if you want everything 100% within Webflow and are willing to rebuild.

---

## Comparison Table

| Feature | Webflow Cloud | Subdomain | Reverse Proxy |
|---------|---------------|-----------|---------------|
| **URL** | `/blog` | `blog.` subdomain | `/blog` |
| **Setup Time** | Medium | Fast | Medium |
| **Cost** | Webflow plan | Free | Subfold fee |
| **Performance** | Excellent | Excellent | Good |
| **Maintenance** | Low | Low | Medium |
| **Webflow Integration** | Native | Separate | Via proxy |

---

## Recommended Path

### If you have Webflow paid plan:
→ **Use Webflow Cloud** (Option 1)

### If you want quick and free:
→ **Use Subdomain** (Option 2)

### If you need `/blog` path without Webflow Cloud:
→ **Use Reverse Proxy** (Option 3)

---

## Your API Token

You provided a Webflow API token: `d6c019f8...def56a`

This token is useful for:
- Automating CMS content updates (if using Webflow CMS)
- Managing site settings via API
- **NOT needed** for Options 1-3 above

**Keep this token secret!** Don't commit it to git.

---

## Next Steps

1. **Decide which option** fits your needs
2. **Find your domain** (check Webflow site settings to see where DNS is managed)
3. **Follow the setup steps** for your chosen option
4. **Update any links** on your main site to point to the blog

---

## Need Help?

- **Webflow Support:** For Webflow Cloud or domain setup
- **Vercel Support:** For deployment issues
- **Subfold Support:** For reverse proxy questions

Your blog is **100% ready to deploy** with any of these options! 🚀
