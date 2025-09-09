import { TCustomMedia } from "@/app.types"
import { PortableTextBlock } from "next-sanity"
import CustomRichText from "./CustomRichText";
import Animate from "./Animate";
import Media from "./Media";
import CalendlyButton from "./CalendlyButton";

interface ServicesProps{
    title1: string;
    title2: string;
    media: TCustomMedia;
    services: {
        heading: string;
        desc1: PortableTextBlock[];
        desc2: PortableTextBlock[];
        _key: string;
    }[];
    buttonLabel: string;
}

export default function Services(props: ServicesProps) {
    
    // let bgImage;
    // if (props.media.mediaType === "image") {
    //     bgImage = props.media.image?.desktopImage?.imageUrl;
    // }
    // style={{backgroundImage: `url(${bgImage})`}}
    return (
        <div className="services relative pt-[24rem] pb-[24rem] max-tab:py-[10rem] text-background overflow-hidden">
            <div className="absolute h-full w-full top-0 left-0 z-[-1]">
                <Media {...props.media} className="w-full h-full object-cover" containerClassName="w-full h-full"/>
            </div>
            <Animate fromDown className="mb-[14rem] max-md:mb-[8rem]">
                <div className="flex items-center justify-center text-greenLight text-[2.2rem] max-md:mob-p2 font-generalSans gap-[2rem]">
                    {!!props.title1 && <p>{props.title1}</p>}
                    {!!props.title1 && !!props.title2 && <span className="bg-background h-[1.3px] w-[10rem]"></span>}
                    {!!props.title2 && <p>{props.title2}</p>}
                </div>
            </Animate>
            {/* <Animate fromDown>
                <CustomRichText value={props.title} className="text-[6.7rem] text-center font-generalSans font-[500] px-[11%] leading-[7rem] mb-[22.2rem]"/>
            </Animate> */}
            <ul className="flex flex-col w-[907px] max-tab:w-[40rem] max-[500px]:w-full max-[500]:px-[4rem] mx-auto gap-[11.4rem] max-tab:gap-[8rem]">
                {props.services.map((service)=>(
                    <li key={service._key} className="max-tab:text-center">
                        <Animate fromDown>
                            <h4 className="web-h1 mb-[2rem] w-[50rem] max-tab:w-full max-md:mob-h2 max-md:mb-[1.5rem]">{service.heading}</h4>
                            <div className="flex web-p2 max-md:mob-p2 gap-[14rem] max-tab:flex-col max-tab:gap-[4rem]">
                                <CustomRichText value={service.desc1} className="w-[45rem] max-tab:w-full"/>
                                <CustomRichText value={service.desc2} className="w-[45rem] max-tab:w-full"/>
                            </div>
                        </Animate>
                    </li>
                ))}
            </ul>
            <Animate fromDown>
                <div className="text-center mt-[13rem] max-md:mt-[8rem]">
                    <CalendlyButton
                        buttonLabel={props.buttonLabel}
                        calendlyUrl="https://cal.com/ozlem-birkalan-ugtg7s/30min"
                    />
                </div>
            </Animate>
        </div>
    )
}
