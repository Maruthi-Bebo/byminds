import Footer from "./Footer";
import NavBar from "./Navbar";
import type LocomotiveScrollType from 'locomotive-scroll';
import type { ILocomotiveScrollOptions } from 'locomotive-scroll';
import { FooterQueryResult, NavigationQueryResult } from "@/sanity/types";
import { ReactNode } from "react";
import { generalSans, manrope, satoshi } from "@/fonts/loadFonts";
import { useEffect, useRef } from 'react';

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

      scrollInstance.current = new LocomotiveScroll(options);
    };

    initScroll();

    return () => {
      scrollInstance.current?.destroy();
    };
  }, []);
  
  return (
    <div ref={scrollRef} data-scroll-container id="app" className={`${generalSans.variable} ${satoshi.variable} ${manrope.variable}`}>
      {props.navData && <NavBar {...props.navData} />}
      <main>{props.children}</main>
      {/* {props.footerData && <Footer {...props.footerData} />} */}
      <Footer />
    </div>
  );
};

export default Layout;
