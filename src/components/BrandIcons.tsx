import { PortableTextBlock } from "next-sanity"
import CustomRichText from "./CustomRichText";
import Animate from "./Animate";

interface BrandIconsProps{
    caption: string;
    title: PortableTextBlock[];
    description: PortableTextBlock[];
    icons: {
        imageUrl: string;
    }[];
}

export default function BrandIcons(props: BrandIconsProps) {
    console.log("BrandIcons", props);
    
    return (
        <div className="brandIcons pt-[9rem] pb-[24rem]">
            <Animate fromDown>
                <p className="text-center mb-[1.5rem] web-p1">{props.caption}</p>
            </Animate>
            <Animate fromDown>
                <CustomRichText value={props.title} className="web-h2 text-center mb-[5rem]"/>
            </Animate>
            <Animate fromDown>
                <CustomRichText value={props.description} className="web-p2 text-center mb-[6.2rem] w-[58.3rem] mx-auto"/>
            </Animate>
        </div>
    )
}
