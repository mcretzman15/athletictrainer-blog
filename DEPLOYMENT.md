# Vercel Deployment Guide

## Prerequisites
- Vercel account (free tier works perfectly)
- GitHub repository (or direct Vercel CLI)

---

## Environment Variables to Add in Vercel

Before deploying, add this environment variable in your Vercel project settings:

```
UNSPLASH_ACCESS_KEY=UCjA_bCsFeM4h12YIiPVNRo7NsjhKrHZX6-Fm3a3ChA
```

**How to add:**
1. Go to your Vercel project → Settings → Environment Variables
2. Add `UNSPLASH_ACCESS_KEY` with the value above
3. Select "Production", "Preview", and "Development"

---

## Deployment Method 1: GitHub (Recommended)

### Step 1: Push to GitHub
```bash
# If not already initialized
git remote add origin https://github.com/YOUR_USERNAME/psi-blog.git

# Push all commits
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
5. Add environment variable: `UNSPLASH_ACCESS_KEY`
6. Click "Deploy"

### Step 3: Configure Custom Domain (Optional)
1. In Vercel project → Settings → Domains
2. Add `blog.athletictrainerjob.com` or use Vercel's auto-generated domain
3. Update DNS records as instructed by Vercel

---

## Deployment Method 2: Vercel CLI (Quick Deploy)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
cd "/Users/mattcretzman/Desktop/_Client Projects/PSI/psi-blog"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N** (first time)
- What's your project's name? **psi-blog**
- In which directory is your code located? **.**
- Want to override settings? **N**

### Step 4: Add Environment Variable
```bash
vercel env add UNSPLASH_ACCESS_KEY
```
Paste your Unsplash key when prompted, select "Production"

### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## Post-Deployment Checklist

After deployment, verify:

✅ **Homepage loads:** `https://your-domain.vercel.app/blog/`
✅ **Posts render:** Click through to individual articles
✅ **Images display:** Hero images and inline images show up
✅ **OG images work:** Share a post link on LinkedIn/Slack to test
✅ **RSS feed:** `https://your-domain.vercel.app/blog/feed.xml`
✅ **Sitemap:** `https://your-domain.vercel.app/blog/sitemap.xml`

---

## Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** → Automatic production deployment
- **Every PR** → Automatic preview deployment
- **Image resolution** → Runs automatically in `prebuild` script

---

## Troubleshooting

### Build Fails with "UNSPLASH_ACCESS_KEY not set"
- Add the environment variable in Vercel settings
- Redeploy

### Images Not Showing
- Check Vercel build logs for image download errors
- Verify Unsplash API key is valid
- Check rate limits (50/hour on free tier)

### 404 Errors
- Verify `basePath: "/blog"` is in `next.config.mjs`
- Check that URLs include `/blog/` prefix

### Slow First Load
- Normal for Vercel edge functions cold start
- Subsequent loads are instant

---

## Monitoring

Vercel provides:
- **Analytics:** Page views, performance metrics
- **Logs:** Real-time function logs
- **Insights:** Core Web Vitals tracking
- **Bandwidth:** Monitor usage

Access via: Project → Analytics / Logs

---

## Updating Content

### Method 1: Via GitHub
1. Update MDX files in `content/posts/`
2. Commit and push to GitHub
3. Vercel auto-deploys

### Method 2: Via AI Agent (Future)
The AI agent can:
1. Create new MDX files via GitHub API
2. Set `featuredImage: "auto"`
3. Commit directly to repository
4. Vercel auto-builds and resolves images

---

## Costs

**Vercel Free Tier includes:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Edge functions
- ✅ Automatic HTTPS
- ✅ Preview deployments

**Unsplash Free Tier:**
- ✅ 50 requests/hour
- ✅ Sufficient for 3 posts/week

**Total cost: $0/month** 🎉

---

## Support

If issues arise:
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Check build logs** in Vercel dashboard
- **Review `IMAGE_SYSTEMS.md`** for image troubleshooting
