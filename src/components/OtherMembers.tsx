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
    console.log("props others", props);
    
    return (
        <ul className="otherMembers px-[20rem] gap-y-[9rem] flex flex-wrap justify-between">
            {props.members.map((member) => (
                <li key={member._key} className="w-[40%]">
                    <Animate fromDown>
                        <h3 className="web-h1">{member.name}</h3>
                        <p className="web-h3 font-[500] mb-[2.4rem]">{member.role}</p>
                        <CustomRichText value={member.about} className="web-p2"/>
                    </Animate>
                </li>
            ))}
        </ul>
    )
}
