# Cloudflare Pages Deployment Instructions

Your project is configured for Cloudflare Pages with `pnpm`. To deploy successfully, you must configure the build settings in the Cloudflare Dashboard to use `pnpm` instead of `npm`/`npx`.

## 1. Build Configuration

Go to **Cloudflare Dashboard** > **Pages** > **Your Project** > **Settings** > **Builds & deployments**.

Update the **Build configuration** with the following settings:

- **Build command:** `pnpm run pages:build`
- **Build output directory:** `.vercel/output/static`
- **Root directory:** `/` (default)

## 2. Why this is needed?

Your `package.json` specifies `pnpm` version 10+. The default `npx @cloudflare/next-on-pages` command tries to run with `npm`, which causes a version conflict with the strict `engines` definition in your project.

Using `pnpm run pages:build` executes the script defined in your `package.json`:
```json
"pages:build": "corepack enable && next-on-pages"
```
This ensures:
1. `corepack enable` activates the correct `pnpm` version.
2. `next-on-pages` runs within the correct `pnpm` environment.

## 3. Environment Variables (Optional)

If you use any environment variables, add them in the **Environment variables** section in the Cloudflare Dashboard.

## 4. Compatibility Flags

Ensure your `wrangler.toml` (or compatibility settings in Dashboard) includes:
- **Compatibility flags:** `nodejs_compat`
- **Compatibility date:** `2024-09-23` (or newer)
