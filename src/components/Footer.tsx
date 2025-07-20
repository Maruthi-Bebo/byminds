import { WithoutNull } from "@/app.types";
import { FooterQueryResult } from "@/sanity/types";

type FooterProps = WithoutNull<FooterQueryResult>;

const Footer = (props: FooterProps) => {
  console.log("Footer Data", props);
  return (
    <footer className="text-center font-montserrat text-6xl">Footer</footer>
  );
};

export default Footer;
