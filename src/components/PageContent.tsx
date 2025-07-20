import { PortableTextBlock } from "next-sanity";
import CustomPortableText from "./CustomPortableText";
import { HomePageQueryResult } from "@/sanity/types";
import { WithoutNull } from "@/app.types";

type PageContent = WithoutNull<HomePageQueryResult>["content"];

const PageContent = ({ content }: { content: PageContent }) => {
  return <CustomPortableText value={content as PortableTextBlock[]} />;
};

export default PageContent;
