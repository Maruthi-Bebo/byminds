import Layout from "@/components/Layout";
import PageMetaData from "@/components/PageMetaData";
import PageContent from "@/components/PageContent";

import {
  footerQuery,
  navigationQuery,
  pageQuery,
  pageSlugsQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  FooterQueryResult,
  HomePageQueryResult,
  NavigationQueryResult,
} from "@/sanity/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

type PageProps = {
  pageData: HomePageQueryResult;
  navData: NavigationQueryResult;
  footerData: FooterQueryResult;
  draftMode: boolean;
};

export default function Page(props: PageProps) {
  const { pageData, navData, footerData } = props;
  console.log("Page data", pageData);

  return (
    <>
      <Layout navData={navData} footerData={footerData}>
        <PageMetaData {...pageData?.metaData} />
        {pageData?.content && <PageContent content={pageData.content} />}
      </Layout>
    </>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IPath {
  params: IParams;
}

export const getStaticPaths = (async () => {
  const pages = await sanityFetch({ query: pageSlugsQuery, stega: false });
  const paths: IPath[] = [];
  pages.forEach((page) => {
    if (page.slug) paths.push({ params: { slug: page.slug } });
  });

  console.log("Paths", paths);

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const draftMode = context.draftMode || false;
  const { slug } = context.params as IParams;

  const [pageData, navData, footerData] = await Promise.all([
    await sanityFetch({
      query: pageQuery(slug),
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
