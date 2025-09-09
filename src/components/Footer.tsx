import Animate from "./Animate";
import CalendlyButton from "./CalendlyButton";
import { useRef, useEffect, useState } from "react";


const Footer = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoVisible, setLogoVisible] = useState(false);
console.log("logoVisible", logoVisible);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio === 1 && !logoVisible) {
        setLogoVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1.0,
    });

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [logoVisible]);

  return (
    <footer className={`${logoVisible?"active":""} footer bg-foreground pt-[9.5rem] max-md:pt-[10rem] pb-[5.2rem] text-background`}>
      <div className="px-[4.9rem]">
        <Animate fromDown>
          <p className="w-[45rem] max-md:w-full text-center mx-auto mb-[2.3rem] max-md:mb-[1.3rem] web-p2 max-md:mob-p2">Ready to close the gap between your mission and your market? Let's build a brand people love.</p>
        </Animate>
        <Animate fromDown>
          <p className="w-[40rem] max-md:w-full text-center mx-auto web-h2 mb-[4.5rem]">Let’s turn ambition into brand equity.</p>
        </Animate>
        <Animate fromDown>
          <div className="text-center mb-[10rem]">
            <CalendlyButton
                buttonLabel="Schedule a strategic conversation"
                calendlyUrl="https://cal.com/ozlem-birkalan-ugtg7s/30min"
            />
          </div>
        </Animate>
      </div>
      {/* <div>
        <img src="/images/mainLogoBig.svg" width={1346} height={391} className="w-full h-auto"/>
      </div> */}
      <div className="w-full flex justify-center">
        <div 
        ref={logoRef} 
        className={`relative w-full text-center text-background logoContainer top-[calc(100%-38rem)] left-0 h-[36rem] overflow-hidden z-[2]
          w-[1360px] max-[1360px]:w-[94rem] max-tab:w-[80rem] max-[830px]:w-[70rem] max-md:w-[52rem] max-[550px]:w-[30rem] h-[36rem] max-lg2:h-[26rem] max-[550px]:h-[10rem] overflow-hidden z-[2]
          `}
        >
          <div className="text-[34rem] max-[1360px]:text-[24rem] max-tab:text-[20rem] max-[830px]:text-[16rem] max-md:text-[13rem] max-[550px]:text-[7.7rem] mainLogo overflow-hidden absolute w-full top-[44%] left-[50%] translate-x-[-51.5%] max-md:translate-x-[-51%] translate-y-[-50%]">
              <span style={{animationDelay: "0s"}} className=" font-generalSans italic tracking-[-28px] max-[1360px]:tracking-[-21px] max-tab:tracking-[-14px] max-md:tracking-[-9px] max-[550px]:tracking-[-4px]">b</span>
                <span style={{animationDelay: "0.06s"}} className="font-generalSans italic tracking-[34px] max-tab:tracking-[21px] max-md:tracking-[14px] max-[550px]:tracking-[8px]">y</span>
                <span style={{animationDelay: "0.12s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">m</span>
                <span style={{animationDelay: "0.18s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">i</span>
                <span style={{animationDelay: "0.24s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">n</span>
                <span style={{animationDelay: "0.30s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">d</span>
                <span style={{animationDelay: "0.36s"}} className="font-manrope tracking-[-20px] max-tab:tracking-[-13px] max-md:tracking-[-7px] max-[550px]:tracking-[-6px]">s</span>
          </div>
          <div className="captionContainer absolute top-[19%] left-[11.5%] max-[1360px]:left-[11%] max-[1360px]:top-[26%] max-lg2:top-[19%] max-tab:top-[22%] max-tab:left-[10%] max-[830px]:left-[15%] max-[830px]:top-[26%] max-md:left-[7%] max-md:top-[16%] max-[550px]:top-[-4%] overflow-hidden">
            <p className="caption font-generalSans text-[1.8rem] max-[1360px]:text-[1.4rem] max-[1360px]:tracking-[0.6rem] max-tab:text-[1.4rem] max-[830px]:text-[1.1rem] max-[830px]:tracking-[0.3rem] uppercase text-background tracking-[1rem] max-tab:tracking-[4px] max-md:text-[14px] max-md:tracking-[9.8px] max-[550px]:text-[11px] max-[550px]:tracking-[3.9px]">Human Edge in Brand Growth</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
