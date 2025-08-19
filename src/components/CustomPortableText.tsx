/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import TitleAndDescription from "./TitleAndDescription";
import CustomImage from "./CustomImage";
import CustomVideo from "./CustomVideo";
import Media from "./Media";
import LogoBanner from "./LogoBanner";
import PortraitBanner from "./PortraitBanner";
import OurWorkListing from "./OurWorkListing";
import BrandIcons from "./BrandIcons";
import Services from "./Services";
import Team from "./Team";


export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    types: {
      // titleAndDescription: ({ value }) => <TitleAndDescription {...value} />,
      // customImage: ({ value, index }) => (
      //   <CustomImage {...value} isLCP={index === 0} />
      // ),
      // customVideo: ({ value }) => <CustomVideo {...value} />,
      // media: ({ value, index }) => <Media {...value} isLCP={index === 0} />,
      // logoBanner: ({ value }) => <LogoBanner {...value} />,
      // portraitBanner: ({ value }) => <PortraitBanner {...value} />,
      // ourWorkListing: ({ value }) => <OurWorkListing {...value} />,
      brandIcons: ({ value }) => <BrandIcons {...value} />,
      services: ({ value }) => <Services {...value} />,
      team: ({ value }) => <Team {...value} />,
    },
  };

  return (
    <div className={className}>
      <PortableText components={components} value={value} />
    </div>
  );
}
