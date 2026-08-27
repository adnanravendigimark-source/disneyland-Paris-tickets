// Single source of truth for the site's public URL — used by the root
// layout (metadataBase, canonical/OG URL resolution), sitemap.xml, and
// robots.txt.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.disneylandparistickets.org";
export const SITE_NAME = "Disneyland Paris Tickets";
