import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";

export const dynamic = "force-dynamic";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-serif",
});

const displayFont = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/disneyland-paris-hero.jpg`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Independent travel portal and visitor guide for Disneyland Paris tickets, 2-Park Hopper passes, and Paris shuttle combo transfers.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Disneyland Paris Tickets — Book Official Passes & Ticket Deals (2026)",
      template: "%s | Disneyland Paris Tickets",
    },
    description:
      "Book official Disneyland Paris tickets online. Compare 1-Day, Multi-Day, Park Hopper passes, prices, and Express shuttle combos with instant mobile delivery.",
    keywords: [
      "Disneyland Paris Tickets",
      "Disneyland Paris ticket prices",
      "Disneyland Paris tickets and deals",
      "Disneyland Paris 1 day tickets",
      "Disneyland Paris 2 day tickets",
      "Disneyland Paris park tickets",
      "Disneyland Paris tickets for families",
      "Disneyland Paris attractions",
      "Disneyland Paris rides",
      "Disneyland Park tickets",
      "Walt Disney Studios Park tickets",
      "Disneyland Paris planning tips",
      "Disneyland Paris opening information",
    ],
    alternates: {
      canonical: "/",
    },
    robots,
    openGraph: {
      title: "Disneyland Paris Tickets — Official Passes, Prices & Hopper Deals",
      description:
        "Book official Disneyland Paris tickets online. Compare 1-Day, Multi-Day, 2-Park Hopper passes, and shuttle combos with instant mobile e-ticket delivery.",
      type: "website",
      url: SITE_URL,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1920, height: 1080, alt: "Disneyland Paris Sleeping Beauty Castle at sunset" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Disneyland Paris Tickets — Official Passes, Prices & Hopper Deals",
      description:
        "Book official Disneyland Paris tickets online. Compare 1-Day, Multi-Day, 2-Park Hopper passes, and shuttle combos with instant mobile e-ticket delivery.",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function buildThemeStyle(theme: { primary: string; secondary: string; dark: string; accent: string }) {
  const vars: [string, string | null][] = [
    ["--color-regal-primary", hexToRgbTriplet(theme.primary)],
    ["--color-regal-blue", hexToRgbTriplet(theme.secondary)],
    ["--color-regal-ink", hexToRgbTriplet(theme.dark)],
    ["--color-gold-400", hexToRgbTriplet(theme.accent)],
  ];
  const declarations = vars
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
  return declarations ? `:root{${declarations}}` : "";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getSiteChrome();
  const themeStyle = buildThemeStyle(theme);

  return (
    <html lang="en" className={`${serifFont.variable} ${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-79QHG880Z2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-79QHG880Z2');
          `}
        </Script>
      </head>
      <body className="font-body bg-[#FFF8F1] text-[#252A35] antialiased selection:bg-[#F04483] selection:text-white">
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
