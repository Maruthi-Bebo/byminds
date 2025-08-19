// import { WithoutNull } from "@/app.types";
// import { FooterQueryResult } from "@/sanity/types";

import CalendlyButton from "./CalendlyButton";

// type FooterProps = WithoutNull<FooterQueryResult>;

const Footer = () => {
  return (
    <footer className="footer bg-foreground pt-[9.5rem] pb-[5.2rem] px-[4.6rem] text-background">
      <p className="w-[45rem] text-center mx-auto mb-[2.3rem] web-p1">Ready to move beyond the tactical and build a brand that truly endures?</p>
      <p className="w-[40rem] text-center mx-auto web-h2 mb-[4.5rem]">Let’s turn ambition into brand equity.</p>
      <div className="text-center mb-[10rem]">
        <CalendlyButton
            buttonLabel="Schedule a Strategic Conversation"
            calendlyUrl="https://calendly.com/connect-by-minds/introduction-call"
        />
      </div>
      <div>
        <img src="/images/mainLogoBig.svg" width={1346} height={391} className="w-full h-auto"/>
      </div>
    </footer>
  );
};

export default Footer;
