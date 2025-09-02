import { PortableTextBlock } from "next-sanity";
import CustomRichText from "./CustomRichText";
import Animate from "./Animate";

interface OtherMembersProps {
    members:{
        _key: string;
        name: string;
        role: string;
        about: PortableTextBlock[];
    }[];
}

export default function OtherMembers(props: OtherMembersProps) {
    
    return (
        <ul className="otherMembers pt-[20rem] max-md:pt-[10rem] w-[1020px] mx-auto gap-y-[9rem] max-md:gap-y-[6rem] max-lg:px-[4rem] max-lg:w-full flex max-md:flex-col flex-wrap justify-between">
            {props.members.map((member) => (
                <li key={member._key} className="w-[40%] max-lg:w-[48%] max-md:w-full max-md:text-center">
                    <Animate fromDown>
                        <h3 className="web-h1 max-md:mob-h2">{member.name}</h3>
                        <p className="web-h3 font-[500] max-md:mob-p1 max-md:font-[500] mb-[2.4rem] max-md:mb-[1.5rem]">{member.role}</p>
                        <CustomRichText value={member.about} className="web-p2 max-md:mob-p2"/>
                    </Animate>
                </li>
            ))}
        </ul>
    )
}
