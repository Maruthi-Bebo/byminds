import { PortableTextBlock } from "next-sanity"
import CustomRichText from "./CustomRichText";
import Animate from "./Animate";
import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";

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
    const width = useWindowWidth();
    const chunkSize = width && width < 768 ? 3 : 5;

    function chunkArray<T>(arr: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    const iconSets = chunkArray(props.icons, chunkSize);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % iconSets.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [iconSets.length]);

    return (
        <div className="brandIcons pt-[18rem] pb-[24rem] max-md:py-[10rem]">
            <Animate fromDown>
                <p className="text-center mb-[1.5rem] web-p1 max-md:mob-p2">{props.caption}</p>
            </Animate>
            <Animate fromDown>
                <CustomRichText value={props.title} className="web-h2 text-center mb-[5rem] max-md:mob-h2 max-md:mb-[3rem]"/>
            </Animate>
            <Animate fromDown>
                <CustomRichText value={props.description} className="web-p2 text-center mb-[13rem] max-md:mb-[8rem] w-[58.3rem] mx-auto max-md:w-full max-md:px-[2rem] max-md:mob-p2"/>
            </Animate>
            <Animate fromDown>
                <ul className="h-[57px] max-md:h-[28.5px] w-full">
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
                                    className="w-[203px] h-[57px] object-fit max-md:w-[101.5px] max-md:h-[28.5px]"
                                />
                            ))}
                        </li>
                    ))}
                </ul>
            </Animate>
        </div>
    )
}
