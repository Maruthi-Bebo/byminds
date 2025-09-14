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
            className={`logoBanner active showLogo portraitBanner relative pt-[28.5rem] max-md:pt-[20rem] max-md:pb-[10rem] pb-[18rem] text-foreground overflow-hidden sectionUnderline ${isBottomVisible ? 'sectionUnderlineActive' : ''}`}
        >
            {/* <div className="absolute h-full w-full top-0 left-0">
                <Media {...props.media} className="w-full h-full object-cover"/>
            </div> */}

            <div className="w-screen h-screen absolute top-0 left-0 z-[99]">
                <div className="blackBanner bg-foreground h-full w-full absolute z-[1] top-0"></div>
                <div className="w-[1360px] max-[1360px]:w-[94rem] max-tab:w-[80rem] max-[830px]:w-[70rem] max-md:w-[52rem] max-[550px]:w-[30rem] text-center text-background logoContainer absolute top-[calc(100%-38rem)] left-[50%] translate-x-[-50%] h-[36rem] max-lg2:h-[26rem] max-[550px]:h-[10rem] overflow-hidden z-[2] max-lg2:top-[50%] max-lg2:translate-y-[-50%]">
                    <div className="text-[34rem] max-[1360px]:text-[24rem] max-tab:text-[20rem] max-[830px]:text-[16rem] max-md:text-[13rem] max-[550px]:text-[7.7rem] mainLogo overflow-hidden absolute w-full top-[44%] left-[50%] translate-x-[-51.5%] max-md:translate-x-[-51%] translate-y-[-50%]">
                        <span style={{animationDelay: "0s"}} className=" font-generalSans italic tracking-[-28px] max-[1360px]:tracking-[-21px] max-tab:tracking-[-14px] max-md:tracking-[-9px] max-[550px]:tracking-[-4px]">b</span>
                        <span style={{animationDelay: "0.06s"}} className="font-generalSans italic tracking-[34px] max-tab:tracking-[21px] max-md:tracking-[14px] max-[550px]:tracking-[8px]">y</span>
                        <span style={{animationDelay: "0.12s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">m</span>
                        <span style={{animationDelay: "0.18s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">i</span>
                        <span style={{animationDelay: "0.24s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">n</span>
                        <span style={{animationDelay: "0.30s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">d</span>
                        <span style={{animationDelay: "0.36s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">s</span>
                    </div>
                    <div className="captionContainer absolute top-[20%] left-[10%] max-[1360px]:left-[11%] max-[1360px]:top-[26%] max-lg2:top-[19%] max-tab:top-[22%] max-tab:left-[10%] max-[830px]:left-[15%] max-[830px]:top-[26%] max-md:left-[7%] max-md:top-[16%] max-[550px]:top-[-4%] overflow-hidden">
                    <p className="caption font-generalSans text-[1.8rem] max-[1360px]:text-[1.4rem] max-[1360px]:tracking-[0.6rem] max-tab:text-[1.4rem] max-[830px]:text-[1.1rem] max-[830px]:tracking-[0.3rem] uppercase text-background tracking-[1rem] max-tab:tracking-[4px] max-md:text-[14px] max-md:tracking-[9.8px] max-[550px]:text-[11px] max-[550px]:tracking-[3.9px]">{props.caption}</p>
                    </div>
                </div>
            </div>

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
