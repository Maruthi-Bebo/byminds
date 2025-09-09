import Footer from "./Footer";
import NavBar from "./Navbar";
import type LocomotiveScrollType from 'locomotive-scroll';
import type { ILocomotiveScrollOptions } from 'locomotive-scroll';
import { FooterQueryResult, NavigationQueryResult } from "@/sanity/types";
import { ReactNode } from "react";
import { generalSans, manrope, satoshi } from "@/fonts/loadFonts";
import { useEffect, useRef } from 'react';
import { GlobalProvider } from "@/context/GlobalContext";
import { useState } from "react";

interface FixedScrollOptions extends ILocomotiveScrollOptions {
  el: HTMLElement;
  smooth: boolean
}

interface LayoutProps {
  navData: NavigationQueryResult;
  footerData: FooterQueryResult;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstance = useRef<LocomotiveScrollType | null>(null);

  useEffect(() => {
    const initScroll = async () => {
      if (typeof window === 'undefined') return;

      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const options: FixedScrollOptions = {
        el: scrollRef.current!,
        smooth: true,
      };

      // scrollInstance.current = new LocomotiveScroll(options);
      const scroll = new LocomotiveScroll(options);
      scrollInstance.current = scroll;

      // Wait one tick to ensure Locomotive is ready
      // requestAnimationFrame(() => {
      //   scroll.stop();

      //   setTimeout(() => {
      //     scroll.start();
      //   }, 3500);
      // });
    };

    initScroll();

    return () => {
      scrollInstance.current?.destroy();
    };
  }, []);

  const [isScrolledPastViewport, setIsScrolledPastViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      // setIsScrolledPastViewport(rect.top < -window.innerHeight);
      setIsScrolledPastViewport(rect.top < -1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <GlobalProvider>
      <div ref={scrollRef} data-scroll-container id="app" className={`${generalSans.variable} ${satoshi.variable} ${manrope.variable}`}>
        {/* {props.navData && } */}
        <NavBar />
        <main>{props.children}</main>
        {/* {props.footerData && <Footer {...props.footerData} />} */}
        <Footer />
        <div onClick={scrollToTop} className={`${isScrolledPastViewport?"translate-y-[0]":"translate-y-[15rem]"} z-[9] duration-[0.3s] ease-out transition-all w-[10rem] h-[10rem] fixed bottom-[3rem] right-[4rem] cursor-pointer max-md:hidden`}>
          <img src="/images/scrollupArrow.png" width={28} height={37} className="w-[2.8rem] h-[auto] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
          <img src="/images/scrollup.png" width={100} height={100} className="rotate-hover w-[10rem] h-[auto] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default Layout;
