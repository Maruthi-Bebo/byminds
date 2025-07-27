import { TCustomMedia } from "@/app.types"
import Media from "./Media";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LogoSvg from "./LogoSvg";

interface LogoBannerProps{
    media: TCustomMedia;
    caption: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function LogoBanner(props: LogoBannerProps) {
    const [defaultMediaLoading, setDefaultMediaLoading] = useState(true);
    const [mobileMediaLoading, setMobileMediaLoading] = useState(true);
    
    const desktopMediaDownloaded = () =>{
      setTimeout(() => {
        setDefaultMediaLoading(false)
      }, 100);
    }
    const mobileMediaDownloaded = () =>{
      setTimeout(() => {
        setMobileMediaLoading(false)
      }, 100);
    }

    // useEffect(() => {
    //   const ctx = gsap.context(() => {
    //     gsap.to(logoRef.current, {
    //       width: '100px',
    //       top: 0,
    //       bottom: 'auto',
    //       scrollTrigger: {
    //         trigger: ".logoBanner",
    //         start: 'top top',
    //         end: '+=200',
    //         scrub: true,
    //       },
    //     })
    //   }, logoRef)

    //   return () => ctx.revert()
    // }, [])

    // useLayoutEffect(() => {
    //     const mm = gsap.matchMedia()

    //     mm.add("(min-width:768px)", () => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".logoBanner",
    //                 start: 'top top',
    //                 end: '+=400px',
    //                 scrub: true,
    //                 pin: true,
    //                 pinSpacing: true,
    //                 snap: 1
    //             },
    //         });
        
    //         tl
    //         .to(".captionContainer", {
    //             translateY: '-30px',
    //             opacity: 0,
    //         })
    //         .to(".logoContainer", {
    //             width: '217px',
    //             // scale: 0.15,
    //             top: "1%",
    //             // bottom: 'auto',
    //         })
    //     })

    //     mm.add("(max-width:768px)", () => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".logoBanner",
    //                 start: 'top top',
    //                 end: '+=400px',
    //                 scrub: 0.1,
    //                 pin: true,
    //                 pinSpacing: true,
    //             },
    //         });
        
    //         tl
    //         .to(".captionContainer", {
    //             translateY: '-30px',
    //             opacity: 0,
    //         })
    //         .to(".logoContainer", {
    //             width: '100px',
    //             top: "1%",
    //             bottom: 'auto',
    //         })
    //     })
        
    // }, []);

    return (
      <div className="">
        <div className={`logoBanner showLogo w-full h-[100vh] relative ${!defaultMediaLoading || !mobileMediaLoading?"showLogo":""}`}>
          {/* <div className="blackBanner bg-foreground h-full w-full absolute"></div>
          <div className="logoSvgContainer animate fixed left-[50%] translate-x-[-50%]">
            <LogoSvg/>
            <div className="captionContainer absolute top-[10%] left-[7%] max-xl:top-[15%] max-tab:top-[10%] max-tab:left-[7%] max-md:left-[6%] max-md:top-[-8px] overflow-hidden">
              <p className="caption font-generalSans text-[2rem] max-xl:text-[1.6rem] max-tab:text-[1.4rem] uppercase text-background tracking-[1rem] max-xl2:tracking-[5px] max-tab:tracking-[3px] max-md:tracking-[4px]">{props.caption}</p>
            </div>
          </div> */}
          <Media {...props.media} className="object-cover w-full h-[100vh]" height={"100%"} width={"100%"} defaultMediaLoading={desktopMediaDownloaded} mobileMediaLoading={mobileMediaDownloaded}/>
        </div>
      </div>
    )
}
