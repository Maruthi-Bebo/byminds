import { TCustomMedia, Tlink } from "@/app.types";
import { PortableTextBlock } from "next-sanity";
import CustomRichText from "./CustomRichText";
import SingleCaseSlider from "./SingleCaseSlider";

interface OurWorkListingProps {
  title?: PortableTextBlock[];
  caption?: string;
  caseStudies?: {
    heading?: string;
    caption?: string;
    roles?: {
      roleName?: string;
      personName?: string;
    }[];
    aboutLabel?: string;
    aboutContent?: string;
    impactLabel?: string;
    impactContent?: string;
    images?: {
      image: TCustomMedia;
    }[];
    link?: Tlink;
  }[];
}

export default function OurWorkListing(props: OurWorkListingProps) {
    console.log("case studies", props);
    
    return (
        <div className="ourWorkListing pt-[27rem]">
            <div className="relative">
              <div className="sticky top-0 pt-[1rem] pb-[1rem] text-center bg-background z-[1]">
                {props.title && <CustomRichText value={props.title} className="font-satoshi font-[700] text-[4rem]"/>}
                {props.caption && <p className="font-generalSans text-[2.2rem]">{props.caption}</p>}
              </div>
              <div>
                {props.caseStudies?.map((caseItem, id)=>(
                  <div key={`case-item-home-${id}`}>
                    <SingleCaseSlider caseItem={caseItem}/>
                  </div>
                ))}
              </div>
            </div>
        </div>
    )
}
