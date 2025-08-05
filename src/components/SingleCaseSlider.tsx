import { TCustomMedia, Tlink } from "@/app.types";
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SingleCaseSliderProps {
  caseItem?: {
    heading?: string;
    caption?: string;
    roles?: {
      roleName?: string;
      personName?: string;
    }[];
    aboutLabel?: string;
    aboutContent?: string;
    impactLabel?: string;
    impactContent?: string;
    images?: {
      image: TCustomMedia;
    }[];
    link?: Tlink;
  };
}

export default function SingleCaseSlider(props: SingleCaseSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const pos = useRef({ left: 0, x: 0 });
  const [showSecond, setShowSecond] = useState(false);
  const text1Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;

    if (!container || !list) return;

    // Clone the list once to simulate infinite scroll
    const clone = list.cloneNode(true) as HTMLElement;
    list.appendChild(clone);

    const scrollWidth = list.scrollWidth / 2; // Width of original content

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    // Auto-scroll animation
    const scrollAnim = gsap.to(container, {
      scrollLeft: scrollWidth,
      ease: 'none',
      duration: 60,
      repeat: -1,
      modifiers: {
        scrollLeft(value) {
          const current = parseFloat(value);
          if (current >= scrollWidth) {
            container.scrollLeft = 0;
            return '0';
          }
          return value;
        }
      },
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play pause resume pause',
      }
    });

    // Pause scroll on drag
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollStart = container.scrollLeft;
      scrollAnim.pause();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll-fastness multiplier
      container.scrollLeft = scrollStart - walk;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      scrollAnim.invalidate(); // Refresh GSAP
      scrollAnim.restart();    // Restart from current scrollLeft
    };

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollStart = container.scrollLeft;
      scrollAnim.pause();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollStart - walk;
    };

    const onTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      scrollAnim.invalidate();
      scrollAnim.restart();
    };

    // Event listeners
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseUp);

    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      scrollAnim.kill();
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mouseDownHandler = (e: MouseEvent) => {
      scrollTween.current?.pause();
      setIsDragging(true);
      pos.current = {
        left: container.scrollLeft,
        x: e.clientX,
      };
      container.style.cursor = 'grabbing';
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - pos.current.x;
      container.scrollLeft = pos.current.left - dx;
    };

    const mouseUpHandler = () => {
      setIsDragging(false);
      scrollTween.current?.play();
      container.style.cursor = 'grab';
    };

    container.addEventListener('mousedown', mouseDownHandler);
    container.addEventListener('mousemove', mouseMoveHandler);
    container.addEventListener('mouseup', mouseUpHandler);
    container.addEventListener('mouseleave', mouseUpHandler);

    container.style.cursor = 'grab';

    return () => {
      container.removeEventListener('mousedown', mouseDownHandler);
      container.removeEventListener('mousemove', mouseMoveHandler);
      container.removeEventListener('mouseup', mouseUpHandler);
      container.removeEventListener('mouseleave', mouseUpHandler);
    };
  }, [isDragging]);

  const images = props.caseItem?.images || [];


  useEffect(() => {
    const handleScroll = () => {
      if (text1Ref.current) {
        const rect = text1Ref.current.getBoundingClientRect();
        const viewportCenter = 450;
        
        if (rect.top < viewportCenter) {
          setShowSecond(true);
        } else {
          setShowSecond(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="singleCaseSlider mb-[4rem] pt-[10rem] overflow-x-scroll scrollbar-hidden px-[5.4rem] select-none"
      >
        <ul ref={listRef} className="flex gap-[1.6rem] w-max relative">
          <div className="h-full w-full absolute transparent z-[1] top-0 left-0"></div>
          {images.concat(images).map((image, idx) => (
            <li key={idx} className="w-[37.6rem] h-[47.4rem]">
              <img
                loading="lazy"
                alt={props.caseItem?.heading}
                src={image.image.image?.desktopImage?.imageUrl}
                width={376}
                height={474}
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="px-[5.4rem] flex justify-between">
        <div className="">
          <p className="text-[4rem] font-[500] font-generalSans text-box-trim mb-[2rem]">{props.caseItem?.heading}</p>
          <p className="web-p2 mb-[1rem]">{props.caseItem?.caption}</p>
          <div>
            {props.caseItem?.roles?.map((role, id)=>(
              <p key={`role_item_${id}`} className="text-[1.4rem] font-generalSans flex gap-[2rem]">
                <span className="text-greyText w-[15rem]">{role.roleName}</span>
                <span className="text-foreground">{role.personName}</span>
              </p>
            ))}
          </div>
        </div>
        {/* <div>
          <div className="w-[45.6rem] text1">
            <p className="text-[2.2rem] font-satoshi font-[700] mb-[0.4rem]">{props.caseItem?.aboutLabel}</p>
            <p className="text-[2.2rem] font-generalSans font-[400] tracking-[0.5px]">{props.caseItem?.aboutContent}</p>
          </div>
          <div className="w-[45.6rem] text2">
            <p className="text-[2.2rem] font-satoshi font-[700] mb-[0.4rem]">{props.caseItem?.aboutLabel}</p>
            <p className="text-[2.2rem] font-generalSans font-[400] tracking-[0.5px]">{props.caseItem?.aboutContent}</p>
          </div>
        </div> */}
        <div className="relative w-[52.6rem] h-[15rem] overflow-hidden">
          <div ref={text1Ref} className="absolute top-0 h-0 w-full" />

          <div
            className={`absolute top-0 left-0 transition-all duration-[0.7s] ease ${
              showSecond ? "opacity-0 translate-y-[-20px]" : "opacity-100 translate-y-[0px] delay-[0.5s]"
            }`}
          >
            <p className="web-h3 mb-[0.4rem]">
              {props.caseItem?.aboutLabel}
            </p>
            <p className="web-p2">
              {props.caseItem?.aboutContent}
            </p>
          </div>

          <div
            className={`absolute top-0 left-0 transition-all duration-[0.7s] ease ${
              showSecond ? "opacity-100 translate-y-[0px] delay-[0.5s]" : "opacity-0 translate-y-[20px]"
            }`}
          >
            <p className="web-h3 mb-[0.4rem]">
              {props.caseItem?.impactLabel}
            </p>
            <p className="web-p2">
              {props.caseItem?.impactContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
