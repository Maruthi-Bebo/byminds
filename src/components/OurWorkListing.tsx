import { TCustomMedia, Tlink } from "@/app.types";
import { PortableTextBlock } from "next-sanity";
import CustomRichText from "./CustomRichText";
import SingleCaseSlider from "./SingleCaseSlider";
import Animate from "./Animate";

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
    
    return (
        <div className="ourWorkListing pt-[18rem]">
            <div className="relative">
              <div className="sticky top-0 pt-[1rem] pb-[1rem] text-center bg-background z-[1]">
                <Animate fromDown>
                  {props.title && <CustomRichText value={props.title} className="web-h2 mb-[1rem]"/>}
                  {props.caption && <p className="web-p1">{props.caption}</p>}
                </Animate>
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
