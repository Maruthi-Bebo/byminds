import CustomImage from "./CustomImage";
import CustomVideo from "./CustomVideo";
import { CustomImageProps, CustomVideoProps } from "../app.types";

type Props = {
  mediaType: "image" | "video";
  image?: CustomImageProps;
  video?: CustomVideoProps;
  isLCP?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
  containerClassName?: string;
  defaultMediaLoading?: (loading: boolean) => void;
  mobileMediaLoading?: (loading: boolean) => void;
};

export default function Media(props: Props) {
  return (
    <>
      {props.mediaType === "image" && props.image && (
        <CustomImage
          {...props.image}
          isLCP={props.isLCP}
          className={props.className}
          width={props.width}
          height={props.height}
          // defaultMediaLoading={props.defaultMediaLoading}
          // mobileMediaLoading={props.mobileMediaLoading}
        />
      )}
      {props.mediaType === "video" && props.video && (
        <CustomVideo
          {...props.video}
          className={props.className}
          width={props.width}
          height={props.height}
          defaultMediaLoading={props.defaultMediaLoading}
          mobileMediaLoading={props.mobileMediaLoading}
        />
      )}
    </>
  );
}
