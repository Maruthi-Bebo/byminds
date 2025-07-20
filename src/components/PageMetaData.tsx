import { WithoutNull } from "@/app.types";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import type { HomePageQueryResult, PageMetaData } from "@/sanity/types";
import Head from "next/head";

type PageMetaDataProps = Partial<
  WithoutNull<WithoutNull<HomePageQueryResult>["metaData"]>
>;

export default function PageMetaData(props: PageMetaDataProps) {
  const { title, description, ogImage, metadataBase } = props;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {metadataBase && <link rel="canonical" href={metadataBase} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage?.imageUrl && (
        <meta
          property="og:image"
          content={resolveOpenGraphImage(ogImage.imageUrl)}
        />
      )}
    </Head>
  );
}
