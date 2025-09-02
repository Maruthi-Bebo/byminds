import { TCustomMedia, Tlink } from "@/app.types";
import { PortableTextBlock } from "next-sanity";
import CustomRichText from "./CustomRichText";
import SingleCaseSlider from "./SingleCaseSlider";
import Animate from "./Animate";
import { useRef } from "react";
import { useState, useEffect } from "react";

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isBottomAtCenter, setIsBottomAtCenter] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const isAtCenter = rect.bottom <= viewportCenter && rect.bottom >= viewportCenter - 10;
          if (isAtCenter) {
            setIsBottomAtCenter(true);
            window.removeEventListener("scroll", handleScroll);
          }
        }
      }
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className={`ourWorkListing pt-[18rem] pb-[18rem] max-md:py-[10rem] relative sectionUnderline ${isBottomAtCenter ? 'sectionUnderlineActive' : ''}`}>
            <div className="relative">
              <div className="max-md:p-0 px-[2rem] text-center bg-background z-[1]">
                <Animate fromDown>
                  {props.title && <CustomRichText value={props.title} className="web-h2 mb-[1rem] max-md:mob-h2"/>}
                  {props.caption && <p className="web-p1 max-md:mob-p1">{props.caption}</p>}
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
