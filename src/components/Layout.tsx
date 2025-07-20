import Footer from "./Footer";
import NavBar from "./Navbar";

import { FooterQueryResult, NavigationQueryResult } from "@/sanity/types";
import { ReactNode } from "react";
import { montserrat } from "@/fonts/loadFonts";

interface LayoutProps {
  navData: NavigationQueryResult;
  footerData: FooterQueryResult;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={`${montserrat.variable}`}>
      {props.navData && <NavBar {...props.navData} />}
      <main>{props.children}</main>
      {props.footerData && <Footer {...props.footerData} />}
    </div>
  );
};

export default Layout;
