import Layout from "@/components/Layout";
import PageMetaData from "@/components/PageMetaData";
import PageContent from "@/components/PageContent";

import {
  footerQuery,
  homePageQuery,
  navigationQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  FooterQueryResult,
  HomePageQueryResult,
  NavigationQueryResult,
} from "@/sanity/types";
import { GetStaticProps } from "next";
import SEO from "@/components/SEO";

type PageProps = {
  pageData: HomePageQueryResult;
  navData: NavigationQueryResult;
  footerData: FooterQueryResult;
  draftMode: boolean;
};

export default function Home(props: PageProps) {
  const { pageData, navData, footerData } = props;
  
  return (
      <Layout navData={navData} footerData={footerData}>
        {/* <PageMetaData {...pageData?.metaData} /> */}
        <SEO
          title={pageData?.metaData?.title ?? "We build brands people love | byminds"}
          description={pageData?.metaData?.description ?? "We build brands people love. With emotional intelligence, strategic clarity, and bold creativity."}
          canonical={pageData?.metaData?.metadataBase ?? "https://www.by-minds.com/"}
          openGraph={{
            url: `${pageData?.metaData?.metadataBase ?? "https://www.by-minds.com/"}`,
            title: `${pageData?.metaData?.title ?? "We build brands people love | byminds"}`,
            description: `${pageData?.metaData?.description ?? "We build brands people love. With emotional intelligence, strategic clarity, and bold creativity."}`,
            images: [{ url: pageData?.metaData?.ogImage?.imageUrl ?? "/images/ogImage.jpg", alt: `${pageData?.metaData?.title ?? "We build brands people love | byminds"}` }],
          }}
        />
        {pageData?.content && <PageContent content={pageData.content} />}
      </Layout>
  );
}

export const getStaticProps = (async ({ draftMode = false }) => {
  const [pageData, navData, footerData] = await Promise.all([
    await sanityFetch({
      query: homePageQuery,
      perspective: draftMode ? "previewDrafts" : " published",
    }),
    await sanityFetch({
      query: navigationQuery,
      perspective: draftMode ? "previewDrafts" : " published",
    }),
    await sanityFetch({
      query: footerQuery,
      perspective: draftMode ? "previewDrafts" : " published",
    }),
  ]);

  return {
    props: {
      pageData,
      navData,
      footerData,
      draftMode,
    },
  };
}) satisfies GetStaticProps<PageProps>;
