# Deployment to Cloudflare Pages

This project is configured to be deployed on Cloudflare Pages using `@cloudflare/next-on-pages`.

## Prerequisites

1.  **Cloudflare Account**: You need a Cloudflare account.
2.  **Git Repository**: Push this code to a GitHub/GitLab repository.

## Configuration

I have already configured the following:
*   Installed `@cloudflare/next-on-pages`.
*   Added `pages:build` script to `package.json`.
*   Created `wrangler.toml` with `nodejs_compat` enabled.

## Deployment Steps

1.  **Push to Git**: Ensure your latest changes are pushed.
2.  **Go to Cloudflare Dashboard**: Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3.  **Select Repository**: Choose your repository.
4.  **Build Settings**:
    *   **Framework Preset**: `Next.js` (Cloudflare might auto-detect, but verify settings below)
    *   **Build Command**: `pnpm run pages:build` (IMPORTANT: Do not use the default `next build`)
    *   **Build Output Directory**: `.vercel/output/static` (IMPORTANT: specific to next-on-pages)
5.  **Environment Variables**:
    *   If you are using the database, add `DB_CONNECTION_STRING` in the **Environment variables** section options.
    *   Recommended: Add `NODE_VERSION` = `20` (or stricter) to ensure consistency.

## Local Preview

To preview the Cloudflare build locally:

```bash
pnpm run preview
```
