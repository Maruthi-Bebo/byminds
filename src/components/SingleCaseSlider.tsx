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
      toggleActions: 'pause pause resume pause',
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

  return (
    <div
      ref={containerRef}
      className="singleCaseSlider pt-[10rem] overflow-x-scroll scrollbar-hidden px-[5.4rem] select-none"
    >
      <ul ref={listRef} className="flex gap-[1.6rem] w-max relative mb-[4rem]">
        <div className="h-full w-full absolute transparent z-[1] top-0 left-0"></div>
        {images.concat(images).map((image, idx) => (
          <li key={idx} className="min-w-[37.6rem]">
            <img
              loading="lazy"
              alt={props.caseItem?.heading}
              src={image.image.image?.desktopImage?.imageUrl}
              width={376}
              height={474}
              className="w-[37.6rem] h-[47.4rem] object-cover"
            />
          </li>
        ))}
      </ul>
      <div>
        <div className="">
          <p className="text-[4rem] font-[500] font-generalSans text-box-trim mb-[2rem]">{props.caseItem?.heading}</p>
          <p className="text-[2.2rem] font-[400] font-generalSans leading-[2.8rem] mb-[1rem]">{props.caseItem?.caption}</p>
        </div>
      </div>
    </div>
  );
}
