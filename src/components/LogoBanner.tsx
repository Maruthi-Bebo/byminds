import { TCustomMedia } from "@/app.types"
import Media from "./Media";

interface LogoBannerProps{
    media: TCustomMedia;
    caption: string;
}

export default function LogoBanner(props: LogoBannerProps) {
    
    return (
      <div className="logoBanner w-full h-[100dvh]">
        <Media {...props.media} className="object-cover" height={"100%"} width={"100%"}/>
        <div className="relative">
          <img src="/images/mainLogoBig.svg" width={1193} height={347} alt="Logo" className="w-[calc(100%-8rem)] fixed bottom-0 translate-x-[-50%] left-[50%]"/>
        </div>
      </div>
    )
}
