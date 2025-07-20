import React, { useState } from "react";
import Image from "next/image";
import { CustomImageProps } from "@/app.types";

const Loader = () => {
  return (
    <span className="bg-[#e7e7e7] absolute w-full h-full left-0 top-0"></span>
  );
};

export default function CustomImage(props: CustomImageProps) {
  const {
    width = "100%",
    height = "auto",
    className,
    desktopImage,
    mobileImage,
    caption,
    isLCP,
  } = props;

  const [imageLoading, setImageLoading] = useState(true);
  const [mobileImageLoading, setMobileImageLoading] = useState(true);

  const isIntrinsicSize = width === "auto" && height === "auto";

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleMobileImageLoad = () => {
    setMobileImageLoading(false);
  };

  if (!desktopImage?.imageUrl) {
    return null;
  }

  return (
    <>
      <div
        style={{
          width: width === "auto" ? "fit-content" : width,
          height: height === "auto" ? "fit-content" : height,
        }}
        className={`relative hidden md:block`}
      >
        <Image
          style={{
            width: !isIntrinsicSize ? width : undefined,
            height: !isIntrinsicSize ? height : undefined,
          }}
          className={`${className ?? ""}`}
          src={desktopImage?.imageUrl}
          width={desktopImage?.imageDimensions?.width}
          height={desktopImage?.imageDimensions?.height}
          priority={isLCP ?? false}
          alt={caption ?? "unkown"}
          onLoad={handleImageLoad}
          unoptimized
        />
        {imageLoading && <Loader />}
      </div>

      <div
        style={{
          width: width === "auto" ? "fit-content" : width,
          height: height === "auto" ? "fit-content" : height,
        }}
        className={`relative md:hidden`}
      >
        <Image
          style={{
            width: !isIntrinsicSize ? width : undefined,
            height: !isIntrinsicSize ? height : undefined,
          }}
          className={`${className ?? ""}`}
          src={mobileImage?.imageUrl || desktopImage?.imageUrl}
          width={
            mobileImage?.imageDimensions?.width ||
            desktopImage?.imageDimensions?.width
          }
          height={
            mobileImage?.imageDimensions?.height ||
            desktopImage?.imageDimensions?.height
          }
          priority={isLCP ?? false}
          alt={caption ?? "unkown"}
          onLoad={handleMobileImageLoad}
          unoptimized
        />
        {mobileImageLoading && <Loader />}
      </div>
    </>
  );
}
