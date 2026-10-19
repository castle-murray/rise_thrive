/** Canonical production origin. Override with NEXT_PUBLIC_SITE_URL (no trailing slash). */
export const PROD_SITE_URL = "https://riseandthrivegh.com";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? PROD_SITE_URL).replace(/\/+$/, "");

/**
 * Index only when serving the canonical prod origin, unless explicitly forced.
 * NEXT_PUBLIC_ALLOW_INDEXING=true|false overrides. Previews (castle-murray.com, localhost) stay noindex.
 */
export const allowIndexing =
  process.env.NEXT_PUBLIC_ALLOW_INDEXING != null
    ? process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true"
    : siteUrl === PROD_SITE_URL;
