import Link from "next/link";
import { CustomCtaProps } from "../app.types";
import { stegaClean } from "@sanity/client/stega";
import { getReferenceLink } from "@/sanity/lib/utils";

type Props = CustomCtaProps;

export default function CustomCta(props: Props) {
  const { linkType, url } = getReferenceLink(props.ctaLink);

  if (!url) {
    return null;
  }

  return (
    <Link
      className={`block px-4 py-3 ${
        stegaClean(props.ctaColour) === "black"
          ? "text-white bg-black"
          : "text-black bg-white border-black border"
      }`}
      href={url}
      target={linkType === "external" ? "_blank" : "_self"}
    >
      {props.ctaLabel}
    </Link>
  );
}
