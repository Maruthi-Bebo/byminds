import { TCustomMedia, Tlink } from "@/app.types";
import Media from "./Media";

interface SingleCaseSliderProps{
  caseItem?: {
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
  }
}

export default function SingleCaseSlider(props: SingleCaseSliderProps) {
  return (
    <div className="singleCaseSlider pt-[10rem]">
      <ul className="flex gap-[1.6rem] overflow-scroll scrollbar-hidden px-[5.4rem]">
        {props.caseItem?.images?.map(image=>{
          return(
            <li className="min-w-[37.6rem]">
              <Media {...image.image} width={376} height={474} className="object-cover"/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
