# Vercel Deployment Guide

## ✅ Fixed Issues

### 1. Security Vulnerability (React2Shell)

- **Upgraded Next.js from 15.5.2 → 15.5.7** (patched version)
- **Upgraded eslint-config-next to 15.5.7**
- This fixes CVE-2025-55182 and CVE-2025-66478

### 2. Dependencies Updated

- All dependencies have been installed and lockfile updated

## 🚀 Deployment Steps

### 1. Commit and Push Changes

```bash
git add .
git commit -m "fix: upgrade Next.js to 15.5.7 to fix security vulnerability"
git push origin main
```

### 2. Set Environment Variables in Vercel

Go to your Vercel project settings and add these environment variables:

**Required:**

- `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., `https://latila.org`)
- `NEXT_PUBLIC_STRAPI_API_URL` - Your Strapi API URL (if using)
- `NEXT_PUBLIC_STRAPI_HOSTNAME` - Your Strapi hostname (if using)
- `NEXT_PUBLIC_CONTACT_US_API_URL` - Contact form API URL (if using)

**Optional:**

- Any other environment variables your app needs

### 3. Build Configuration

Your `next.config.ts` is already configured for static export:

```typescript
output: "export"; // ✅ Static export enabled
```

This means Vercel will:

- Build a static site
- Deploy to CDN
- No server-side rendering needed

### 4. Verify Build Locally (Optional)

Test the build locally before deploying:

```bash
bun run build
```

This will create an `out/` directory with the static files.

## 🔍 Common Deployment Issues

### Issue 1: Build Fails with "Module not found"

**Solution:**

- Make sure all dependencies are in `package.json`
- Run `bun install` locally and commit `bun.lock`
- Check that all imports use correct paths

### Issue 2: Environment Variables Not Working

**Solution:**

- Add all `NEXT_PUBLIC_*` variables in Vercel dashboard
- Redeploy after adding variables
- Use `process.env.NEXT_PUBLIC_*` (not `process.env.*`)

### Issue 3: Static Export Errors

**Solution:**

- Ensure no server-side features are used (API routes, `getServerSideProps`, etc.)
- All pages must be statically exportable
- Check for any dynamic routes that need `generateStaticParams`

### Issue 4: Image Optimization Errors

**Solution:**

- Your config already has `unoptimized: true` which is correct for static export
- All images should be in `public/` folder or use external URLs with `remotePatterns`

## 📋 Pre-Deployment Checklist

- [x] Next.js upgraded to 15.5.7 (security fix)
- [ ] All environment variables set in Vercel
- [ ] `bun.lock` committed to repository
- [ ] Build passes locally (`bun run build`)
- [ ] No TypeScript errors
- [ ] No ESLint errors (or warnings are acceptable)
- [ ] All static assets in `public/` folder
- [ ] No server-side code (API routes, etc.)

## 🎯 After Deployment

1. **Verify the site loads** at your Vercel URL
2. **Check browser console** for any errors
3. **Test all pages** and functionality
4. **Verify environment variables** are working
5. **Check Vercel logs** if anything seems off

## 🔐 Security Notes

- ✅ Next.js 15.5.7 includes React2Shell fix
- ✅ Vercel WAF provides additional protection
- ⚠️ Consider rotating environment variables if your app was online and unpatched before December 4, 2025

## 📞 Need Help?

If deployment still fails:

1. Check Vercel build logs for specific error messages
2. Verify all environment variables are set
3. Ensure `bun.lock` is committed
4. Try building locally first: `bun run build`
