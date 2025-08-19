import { PortableTextBlock } from "next-sanity"
import CustomRichText from "./CustomRichText";
import Animate from "./Animate";
import { useEffect, useState } from "react";

interface BrandIconsProps{
    caption: string;
    title: PortableTextBlock[];
    description: PortableTextBlock[];
    icons: {
        icon: {
            imageUrl: string;
        };
        _key: string;
    }[];
}

export default function BrandIcons(props: BrandIconsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    function chunkArray<T>(arr: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    const iconSets = chunkArray(props.icons, 5);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % iconSets.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [iconSets.length]);

    return (
        <div className="brandIcons pt-[9rem] pb-[24rem]">
            <Animate fromDown>
                <p className="text-center mb-[1.5rem] web-p1">{props.caption}</p>
            </Animate>
            <Animate fromDown>
                <CustomRichText value={props.title} className="web-h2 text-center mb-[5rem]"/>
            </Animate>
            <Animate fromDown>
                <CustomRichText value={props.description} className="web-p2 text-center mb-[13rem] w-[58.3rem] mx-auto"/>
            </Animate>
            <Animate fromDown>
                <ul className="h-[57px] w-full">
                    {iconSets.map((set, index) => (
                        <li key={index} className={`${index === activeIndex? "activeList":""} brandIconsList absolute w-full left-0 flex gap-[1.2rem] justify-center`}>
                            {set.map((icon, iconIndex) => (
                                <img
                                    style={{ transitionDelay: `${iconIndex * 100}ms` }}
                                    key={icon._key}
                                    src={icon.icon.imageUrl}
                                    alt={`Brand icon ${icon._key}`}
                                    width={203}
                                    height={57}
                                    className="w-[203px] h-[57px] object-fit"
                                />
                            ))}
                        </li>
                    ))}
                </ul>
            </Animate>
        </div>
    )
}
