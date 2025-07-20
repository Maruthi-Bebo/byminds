/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import { getReferenceLink } from "@/sanity/lib/utils";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

import Link from "next/link";

export default function CustomRichText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    marks: {
      referenceLink: ({ children, value }) => {
        const { linkType, url } = getReferenceLink(value);

        if (!url) {
          return null;
        }

        return (
          <Link
            href={url}
            target={linkType === "external" ? "_blank" : "_self"}
            className="underline"
          >
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <div className={className}>
      <PortableText components={components} value={value} />
    </div>
  );
}
