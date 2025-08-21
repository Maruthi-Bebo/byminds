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
    <footer className={`${logoVisible?"active":""} footer bg-foreground pt-[9.5rem] pb-[5.2rem] px-[4.6rem] text-background`}>
      <Animate fromDown>
        <p className="w-[45rem] text-center mx-auto mb-[2.3rem] web-p1">Ready to move beyond the tactical and build a brand that truly endures?</p>
      </Animate>
      <Animate fromDown>
        <p className="w-[40rem] text-center mx-auto web-h2 mb-[4.5rem]">Let’s turn ambition into brand equity.</p>
      </Animate>
      <Animate fromDown>
        <div className="text-center mb-[10rem]">
          <CalendlyButton
              buttonLabel="Schedule a Strategic Conversation"
              calendlyUrl="https://calendly.com/connect-by-minds/introduction-call"
          />
        </div>
      </Animate>
      {/* <div>
        <img src="/images/mainLogoBig.svg" width={1346} height={391} className="w-full h-auto"/>
      </div> */}
      <div ref={logoRef} className="relative w-full text-center text-background logoContainer top-[calc(100%-38rem)] left-0 h-[36rem] overflow-hidden z-[2]">
        <div className="text-[34rem] mainLogo overflow-hidden absolute w-full top-[44%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span style={{animationDelay: "0s"}} className=" font-generalSans italic tracking-[-28px]">b</span>
            <span style={{animationDelay: "0.06s"}} className="font-generalSans italic tracking-[34px]">y</span>
            <span style={{animationDelay: "0.12s"}} className="font-manrope tracking-[-20px]">m</span>
            <span style={{animationDelay: "0.18s"}} className="font-manrope tracking-[-20px]">i</span>
            <span style={{animationDelay: "0.24s"}} className="font-manrope tracking-[-20px]">n</span>
            <span style={{animationDelay: "0.30s"}} className="font-manrope tracking-[-20px]">d</span>
            <span style={{animationDelay: "0.36s"}} className="font-manrope tracking-[-20px]">s</span>
        </div>
        <div className="captionContainer absolute top-[19%] left-[11%] max-xl:top-[15%] max-tab:top-[10%] max-tab:left-[7%] max-md:left-[6%] max-md:top-[-8px] overflow-hidden">
          <p className="caption font-generalSans text-[1.8rem] max-xl:text-[1.6rem] max-tab:text-[1.4rem] uppercase text-background tracking-[1rem] max-xl2:tracking-[5px] max-tab:tracking-[3px] max-md:tracking-[4px]">Human Edge in Brand Growth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
