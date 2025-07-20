import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Tlink } from "@/app.types";
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || ""
});

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};


export const getReferenceLink = (
  value: Tlink | null
): { linkType: "external" | "internal"; url?: string | null } => {
  const linkType = value?.internalLink ? "internal" : "external";
  let url: string | undefined | null = "#";

  switch (linkType) {
    case "internal": {
      url = value?.internalLink?.slug;
      break;
    }
    case "external": {
      url = value?.externalLink;
      break;
    }
  }

  return { linkType, url };
};

export function resolveOpenGraphImage(imageUrl: string) {
  if (!imageUrl) return;
  const url = urlForImage(imageUrl)?.width(1200).height(627).fit("crop").url();
  if (!url) return;
  return url;
}