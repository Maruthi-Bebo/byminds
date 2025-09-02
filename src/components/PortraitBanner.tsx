import { TCustomMedia } from "@/app.types"
import { PortableTextBlock } from "next-sanity"
import CustomRichText from "./CustomRichText";
import Animate from "./Animate";
import { useRef } from 'react';
import { useIsBottomVisible } from "@/hooks/useIsBottomVisible";

interface PortraitBannerProps{
    caption: string,
    media: TCustomMedia,
    title: PortableTextBlock[],
    headingAndDesc: {
        heading: string,
        desc: PortableTextBlock[],
    }[]
}

export default function PortraitBanner(props: PortraitBannerProps) {
    const bannerRef = useRef<HTMLDivElement>(null);
    const isBottomVisible = useIsBottomVisible(bannerRef as React.RefObject<HTMLElement>);
   
    // let bgImage;
    // if (props.media.mediaType === "image") {
    //     bgImage = props.media.image?.desktopImage?.imageUrl;
    // }
    // style={{backgroundImage: `url(${bgImage})`}}
    return (
        <div 
            ref={bannerRef}
            className={`portraitBanner relative pt-[28.5rem] max-md:py-[10rem] pb-[18rem] text-foreground overflow-hidden sectionUnderline ${isBottomVisible ? 'sectionUnderlineActive' : ''}`}
        >
            {/* <div className="absolute h-full w-full top-0 left-0">
                <Media {...props.media} className="w-full h-full object-cover"/>
            </div> */}
            <Animate fromDown>
                <p className="font-generalSans text-[2rem] max-md:text-[1.4rem] font-[500] text-greenLight uppercase text-center tracking-[1rem] max-md:tracking-[4px] mb-[2rem] max-md:mb-[1.4rem]">{props.caption}</p>
            </Animate>
            <Animate fromDown threshold={1}>
                <CustomRichText value={props.title} className="text-center mb-[15rem] max-md:mb-[8rem] bigTitle max-md:text-[4rem] max-md:leading-[4.4rem] w-[97rem] max-lg:w-[100%] max-lg:px-[2rem] mx-auto"/>
            </Animate>
            <ul className="flex flex-col items-center gap-[8rem] max-md:gap-[6rem]">
                {props.headingAndDesc.map((item, id)=>(
                    <li key={`p-banner-text-${id}`} className="text-center w-[63.5rem] max-md:w-[100%] max-md:px-[4rem]">
                        <Animate fromDown>
                            <p className="web-h1 max-md:mob-h1 mb-[1.2rem]">{item.heading}</p>
                            <CustomRichText value={item.desc} className="text-center web-p1 max-md:mob-p1"/>
                        </Animate>
                    </li>
                ))}
            </ul>
        </div>
    )
}
