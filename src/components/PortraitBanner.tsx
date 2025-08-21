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
            className={`portraitBanner relative pt-[28.5rem] pb-[18rem] text-foreground overflow-hidden sectionUnderline ${isBottomVisible ? 'sectionUnderlineActive' : ''}`}
        >
            {/* <div className="absolute h-full w-full top-0 left-0">
                <Media {...props.media} className="w-full h-full object-cover"/>
            </div> */}
            <Animate fromDown>
                <p className="font-generalSans text-[2rem] font-[500] text-greenLight uppercase text-center tracking-[1rem] mb-[2rem]">{props.caption}</p>
            </Animate>
            <Animate fromDown>
                <CustomRichText value={props.title} className="text-center mb-[15rem] bigTitle w-[97rem] mx-auto"/>
            </Animate>
            <ul className="flex flex-col items-center gap-[8rem]">
                {props.headingAndDesc.map((item, id)=>(
                    <li key={`p-banner-text-${id}`} className="text-center w-[63.5rem]">
                        <Animate fromDown>
                            <p className="web-h1 mb-[1.2rem]">{item.heading}</p>
                            <CustomRichText value={item.desc} className="text-center web-p1"/>
                        </Animate>
                    </li>
                ))}
            </ul>
        </div>
    )
}
