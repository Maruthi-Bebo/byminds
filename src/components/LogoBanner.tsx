import { TCustomMedia } from "@/app.types"
import Media from "./Media";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
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
    const logoRef = useRef(null)
    
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

    useLayoutEffect(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width:768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".logoBanner",
                    start: 'top top',
                    end: '+=1000px',
                    scrub: 0.1,
                    pin: true,
                    pinSpacing: true,
                },
            });
        
            tl
            .to(".captionContainer", {
                translateY: '-30px',
                opacity: 0,
                duration: 1,
            })
            .to(".logoContainer", {
                width: '217px',
                top: "1%",
                bottom: 'auto',
                duration: 2,
            })
        })

        mm.add("(max-width:768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".logoBanner",
                    start: 'top top',
                    end: '+=1000px',
                    scrub: 0.1,
                    pin: true,
                    pinSpacing: true,
                },
            });
        
            tl
            .to(".captionContainer", {
                translateY: '-30px',
                opacity: 0,
                duration: 1,
            })
            .to(".logoContainer", {
                width: '100px',
                top: "1%",
                bottom: 'auto',
                duration: 2,
            })
        })
        
    }, []);

    return (
      <div className={`logoBanner w-full h-[100dvh] ${!defaultMediaLoading || !mobileMediaLoading?"showLogo":""}`}>
        <Media {...props.media} className="object-cover" height={"100%"} width={"100%"} defaultMediaLoading={desktopMediaDownloaded} mobileMediaLoading={mobileMediaDownloaded}/>
        <div ref={logoRef} className="w-[calc(100%-8rem)] max-md:w-[calc(100%-2rem)] fixed bottom-0 translate-x-[-50%] left-[50%] logoContainer">
          <div className="captionContainer absolute top-[18%] left-[7.5%] max-xl:top-[15%] max-tab:top-[10%] max-tab:left-[7%] max-md:left-[6%] max-md:top-[-8px] overflow-hidden">
            <p className="caption font-generalSans text-[2rem] max-xl:text-[1.6rem] max-tab:text-[1.4rem] uppercase text-background tracking-[1rem] max-xl2:tracking-[5px] max-tab:tracking-[3px] max-md:tracking-[4px]">{props.caption}</p>
          </div>
          <img src="/images/mainLogoBig.svg" width={1193} height={347} alt="Logo" className="w-full"/>
        </div>
      </div>
    )
}
