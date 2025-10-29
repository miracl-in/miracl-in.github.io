# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🚀 Automatic Deployment Setup

### 1. Repository Setup
1. Push this code to a GitHub repository
2. Go to repository **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Automatic Deployment
- Every push to `main` branch triggers deployment
- GitHub Actions builds and deploys automatically
- Site will be available at: `https://yourusername.github.io/repository-name`

## 📋 Deployment Process

The GitHub Action workflow:
1. **Checkout** code from repository
2. **Setup Node.js** environment
3. **Install** dependencies with `npm ci`
4. **Build** static site with `npm run build`
5. **Deploy** to GitHub Pages

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The static files are in the 'out' directory
# Upload contents of 'out' folder to any static hosting
```

## 🌐 Custom Domain (Optional)

To use a custom domain:
1. Add `CNAME` file to `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## 📊 Build Status

The deployment status is visible in:
- **Actions** tab of your GitHub repository
- **Environments** section showing deployment history
- Green checkmark on commits when deployment succeeds

## 🔍 Troubleshooting

**Build fails?**
- Check Node.js version (requires 18+)
- Verify all dependencies are in package.json
- Check for TypeScript errors

**Site not updating?**
- Wait 5-10 minutes for GitHub Pages cache
- Check Actions tab for deployment status
- Ensure push was to `main` branch

**404 errors?**
- Verify repository name matches URL path
- Check that `next.config.js` has correct `basePath` if needed

## ✅ Ready to Deploy!

Simply push to GitHub and your site will be live automatically!