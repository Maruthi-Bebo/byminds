import { TCustomMedia } from "@/app.types"
import Media from "./Media";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        <div className={`logoBanner active showLogo w-full h-[100vh] overflow-hidden relative ${!defaultMediaLoading || !mobileMediaLoading?"showLogo":""}`}>
          <div className="blackBanner bg-foreground h-full w-full absolute z-[1]"></div>
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
          {/* <div className="logoSvgContainer animate fixed left-[50%] translate-x-[-50%]">
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
