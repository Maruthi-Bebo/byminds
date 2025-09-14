// components/SEO.tsx
import Head from "next/head";
import React from "react";

export type OpenGraphImage = {
  url: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  type?: string;
};

export type OpenGraph = {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  images?: OpenGraphImage[];
};

export type Twitter = {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string; // @site
  creator?: string; // @creator
};

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string[] | string;
  openGraph?: OpenGraph;
  twitter?: Twitter;
  structuredData?: object | object[]; // JSON-LD
  extraMeta?: React.ReactNode; // any additional <meta />s or tags
  children?: React.ReactNode;
};

const DEFAULT_META = {
  siteName: "by minds",
  titleTemplate: "%s | by minds",
  description:
    "Default description for by minds. Override per-page via the SEO component.",
  url: "https://example.com",
  locale: "en_US",
  twitterSite: "@your_twitter",
  twitterCreator: "@your_twitter",
  defaultImage: {
    url: "https://example.com/default-og-image.jpg",
    alt: "Default image",
    width: 1200,
    height: 630,
  },
};

function ensureArray<T>(val?: T | T[]) {
  if (!val) return [] as T[];
  return Array.isArray(val) ? val : [val];
}

export default function SEO(props: SEOProps) {
  const {
    title,
    description,
    canonical,
    noindex,
    nofollow,
    keywords,
    openGraph = {},
    twitter = {},
    structuredData,
    extraMeta,
    children,
  } = props;

  const siteName = openGraph.siteName ?? DEFAULT_META.siteName;
  const locale = openGraph.locale ?? DEFAULT_META.locale;
  const baseUrl = openGraph.url ?? DEFAULT_META.url;

  const finalTitle = title
    ? DEFAULT_META.titleTemplate.replace("%s", title)
    : DEFAULT_META.titleTemplate.replace(" %s |", "").trim(); // fallback to site name

  const metaDescription = description ?? openGraph.description ?? DEFAULT_META.description;

  const ogImages = ensureArray(openGraph.images).length
    ? ensureArray(openGraph.images)
    : [DEFAULT_META.defaultImage];

  const robots = (() => {
    if (noindex && nofollow) return "noindex,nofollow";
    if (noindex) return "noindex,follow";
    if (nofollow) return "index,nofollow";
    return "index,follow";
  })();

  const keywordsContent =
    typeof keywords === "string"
      ? keywords
      : Array.isArray(keywords)
      ? keywords.join(", ")
      : undefined;

  // JSON-LD: if user provided structuredData use it; otherwise create a simple WebSite/WebPage snippet
  const jsonLd =
    structuredData ??
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title ?? siteName,
      description: metaDescription,
      url: canonical ?? baseUrl,
      publisher: {
        "@type": "Organization",
        name: siteName,
      },
    };

  return (
    <Head>
      <title>{finalTitle}</title>

      <meta name="description" content={metaDescription} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}

      <meta name="robots" content={robots} />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* Open Graph */}
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={openGraph.type ?? "website"} />
      <meta property="og:title" content={openGraph.title ?? title ?? siteName} />
      <meta
        property="og:description"
        content={openGraph.description ?? metaDescription}
      />
      <meta property="og:url" content={openGraph.url ?? canonical ?? baseUrl} />
      {ogImages.map((img, i) => (
        <React.Fragment key={i}>
          <meta property="og:image" content={img.url} />
          {img.type && <meta property="og:image:type" content={img.type} />}
          {img.width && <meta property="og:image:width" content={String(img.width)} />}
          {img.height && <meta property="og:image:height" content={String(img.height)} />}
          {img.alt && <meta property="og:image:alt" content={img.alt} />}
        </React.Fragment>
      ))}

      {/* Twitter */}
      {/* <meta name="twitter:card" content={twitter.card ?? "summary_large_image"} />
      {twitter.site ?? DEFAULT_META.twitterSite ? (
        <meta name="twitter:site" content={twitter.site ?? DEFAULT_META.twitterSite} />
      ) : null}
      {twitter.creator ?? DEFAULT_META.twitterCreator ? (
        <meta
          name="twitter:creator"
          content={twitter.creator ?? DEFAULT_META.twitterCreator}
        />
      ) : null}
      <meta name="twitter:title" content={openGraph.title ?? title ?? siteName} />
      <meta
        name="twitter:description"
        content={openGraph.description ?? metaDescription}
      />
      {ogImages[0] && <meta name="twitter:image" content={ogImages[0].url} />} */}

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Extra meta / tags */}
      {extraMeta}
      {children}
    </Head>
  );
}
