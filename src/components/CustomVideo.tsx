import React, { useRef } from "react";
import { CustomVideoProps } from "@/app.types";

// const Loader = () => {
//   return (
//     <span className="bg-[#e7e7e7] absolute w-full h-full left-0 top-0"></span>
//   );
// };

// interface MuteProps {
//   videoRef: RefObject<HTMLVideoElement | null>;
// }

// const MuteButton = (props: MuteProps) => {
//   const { videoRef } = props;
//   const [isMuted, setIsMuted] = useState(true);

//   const handleMuteUnmute = () => {
//     const video = videoRef.current;
//     if (video) video.muted = !isMuted;
//     setIsMuted(!isMuted);
//   };

//   return (
//     <div
//       onClick={handleMuteUnmute}
//       className="absolute bottom-[2rem] right-[2rem] md:bottom-[1rem] md:right-[1rem] flex md:h-[5rem] md:w-[5rem] cursor-pointer items-center justify-center rounded-[50%] bg-[#ffffff21] h-[3rem] w-[3rem]"
//     >
//       {isMuted ? (
//         <svg
//           width="25"
//           height="20"
//           viewBox="0 0 25 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.4994 0.366975L6.15521 4.99983H1.17186C0.524409 4.99983 0 5.55921 0 6.24984V13.7499C0 14.44 0.524409 14.9999 1.17186 14.9999H6.15521L10.4994 19.6328C11.2333 20.4156 12.4999 19.8656 12.4999 18.7489V1.25084C12.4999 0.133118 11.2323 -0.414804 10.4994 0.366975ZM22.5408 9.99988L24.7693 7.62277C25.0769 7.29465 25.0769 6.76235 24.7693 6.43422L23.655 5.24567C23.3474 4.91754 22.8484 4.91754 22.5408 5.24567L20.3123 7.62277L18.0838 5.24567C17.7762 4.91754 17.2772 4.91754 16.9696 5.24567L15.8553 6.43422C15.5477 6.76235 15.5477 7.29465 15.8553 7.62277L18.0838 9.99988L15.8558 12.3765C15.5482 12.7046 15.5482 13.2369 15.8558 13.565L16.97 14.7536C17.2777 15.0817 17.7767 15.0817 18.0843 14.7536L20.3123 12.377L22.5408 14.7541C22.8484 15.0822 23.3474 15.0822 23.655 14.7541L24.7693 13.5655C25.0769 13.2374 25.0769 12.7051 24.7693 12.377L22.5408 9.99988Z"
//             fill="black"
//           />
//         </svg>
//       ) : (
//         <svg
//           width="26"
//           height="21"
//           viewBox="0 0 26 21"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10.2279 2.91646L6.36637 6.62253H1.93669C1.36117 6.62253 0.89502 7.07001 0.89502 7.62248V13.6222C0.89502 14.1743 1.36117 14.6222 1.93669 14.6222H6.36637L10.2279 18.3282C10.8803 18.9545 12.0061 18.5145 12.0061 17.6212V3.6235C12.0061 2.72938 10.8794 2.29107 10.2279 2.91646ZM20.3547 0.788222C19.8698 0.482819 19.2184 0.611563 18.9002 1.07779C18.5817 1.54319 18.7171 2.16857 19.2019 2.47398C22.0782 4.28597 23.7948 7.33208 23.7948 10.6228C23.7948 13.9134 22.0782 16.9595 19.2019 18.7715C18.7171 19.0765 18.5817 19.7023 18.9002 20.1673C19.2058 20.6135 19.8521 20.7739 20.3547 20.4569C23.8234 18.2712 25.895 14.5942 25.895 10.6223C25.895 6.65045 23.8234 2.97395 20.3547 0.788222ZM21.7284 10.6223C21.7284 7.97538 20.3369 5.54175 18.0057 4.11265C17.52 3.81516 16.8759 3.95349 16.5682 4.42347C16.2605 4.89345 16.4041 5.5155 16.8898 5.8134C18.6151 6.87127 19.645 8.66868 19.645 10.6223C19.645 12.576 18.6151 14.3734 16.8898 15.4313C16.4041 15.7288 16.2605 16.3508 16.5682 16.8212C16.8507 17.2529 17.4849 17.452 18.0057 17.132C20.3369 15.7029 21.7284 13.2697 21.7284 10.6223ZM15.5751 7.41958C15.0725 7.15584 14.4384 7.32958 14.1598 7.81331C13.8824 8.29704 14.066 8.90492 14.5699 9.17199C15.1303 9.4674 15.4784 10.0236 15.4784 10.6223C15.4784 11.2215 15.1303 11.7773 14.5704 12.0727C14.0665 12.3398 13.8829 12.9477 14.1602 13.4314C14.4393 13.9172 15.0738 14.0897 15.5756 13.8251C16.8008 13.1772 17.5621 11.9502 17.5621 10.6219C17.5621 9.29366 16.8008 8.06705 15.5751 7.41958Z"
//             fill="black"
//           />
//         </svg>
//       )}
//     </div>
//   );
// };

export default function CustomVideo(props: CustomVideoProps) {
  const {
    desktopVideo,
    // mobileVideo,
    // showMuteIcon,
    // width = "100%",
    // height = "auto",
    className,
    // containerClassName,
    // mobileMediaLoading,
    defaultMediaLoading,
  } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  // const videoRefMobile = useRef<HTMLVideoElement>(null);
  // const [videoLoading, setVideoLoading] = useState(true);
  // const [mobileVideoLoading, setMobileVideoLoading] = useState(true);

  // const isIntrinsicSize = width === "auto" && height === "auto";

  if (!desktopVideo?.videoUrl) {
    return null;
  }

  return (
    <>
      <div>
        <video
          width={desktopVideo.videoDimensions?.width}
          height={desktopVideo.videoDimensions?.height}
          className={`${className ?? ""}`}
          autoPlay={true}
          muted={true}
          loop
          ref={videoRef}
          playsInline
          controls={false}
          // onCanPlay={() => {setVideoLoading(false); defaultMediaLoading?.(false)}}
        >
          <source src={desktopVideo.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div
        style={{
          width: width === "auto" ? "fit-content" : width,
          height: height === "auto" ? "fit-content" : height,
        }}
        className={`relative hidden md:block ${containerClassName}`}
      >
        <video
          style={{
            width: !isIntrinsicSize ? width : undefined,
            height: !isIntrinsicSize ? height : undefined,
          }}
          width={desktopVideo.videoDimensions?.width}
          height={desktopVideo.videoDimensions?.height}
          className={`${className ?? ""}`}
          autoPlay={true}
          muted={true}
          loop
          ref={videoRef}
          playsInline
          controls={false}
          onCanPlay={() => {setVideoLoading(false); defaultMediaLoading?.(false)}}
        >
          <source src={desktopVideo.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showMuteIcon && <MuteButton videoRef={videoRef} />}
        {videoLoading && <Loader />}
      </div>

      <div
        style={{
          width: width === "auto" ? "fit-content" : width,
          height: height === "auto" ? "fit-content" : height,
        }}
        className={`relative md:hidden ${containerClassName}`}
      >
        <video
          style={{
            width: !isIntrinsicSize ? width : undefined,
            height: !isIntrinsicSize ? height : undefined,
          }}
          src={mobileVideo?.videoUrl || desktopVideo.videoUrl}
          width={
            mobileVideo?.videoDimensions?.width ||
            desktopVideo.videoDimensions?.width
          }
          height={
            mobileVideo?.videoDimensions?.height ||
            desktopVideo.videoDimensions?.height
          }
          className={`${className ?? ""} `}
          autoPlay={true}
          muted={true}
          loop
          ref={videoRefMobile}
          playsInline
          controls={false}
          onCanPlay={() => {setMobileVideoLoading(false); mobileMediaLoading?.(false)}}
        >
          <source src={mobileVideo?.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showMuteIcon && <MuteButton videoRef={videoRefMobile} />}
        {mobileVideoLoading && <Loader />}
      </div> */}
    </>
  );
}
