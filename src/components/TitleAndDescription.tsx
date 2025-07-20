import { PortableTextBlock } from "next-sanity";
import CustomRichText from "./CustomRichText";
import { CustomCtaProps } from "@/app.types";
import CustomCta from "./CustomCta";

type Props = {
  title: string;
  description: PortableTextBlock[];
  cta: CustomCtaProps;
};

const TitleAndDescription = (props: Props) => {
  return (
    <section className="py-10 space-y-8">
      {props.title && (
        <h2 className="font-montserrat text-4xl text-center">{props.title}</h2>
      )}
      {props.description && (
        <div className="font-montserrat text-center text-lg">
          <CustomRichText value={props.description} />
        </div>
      )}
      {props.cta && (
        <div>
          <CustomCta {...props.cta} />
        </div>
      )}
    </section>
  );
};

export default TitleAndDescription;
