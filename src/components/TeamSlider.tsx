import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PortableTextBlock } from "next-sanity";
import CustomRichText from './CustomRichText';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
    _key: string
    firstName: string
    lastName: string
    role: string
    image: {
        imageUrl: string
        imageDimensions: {
        width: number
        height: number
        }
    }
    about: PortableTextBlock[]
}

interface TeamProps {
    title: string
    introImage: {
        imageUrl: string
        imageDimensions: {
        width: number
        height: number
        }
    }
    introText: PortableTextBlock[];
    members: Array<TeamMember>
}

export default function TeamSlider(props: TeamProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const scrollTween = useRef<gsap.core.Tween | null>(null);
    const [isDragging, setIsDragging] = useState(true);
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
                // snap: 1,
                toggleActions: 'pause pause pause pause',
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

  return (
    <div>
        <div
            ref={containerRef}
            className="overflow-x-scroll scrollbar-hidden select-none"
        >
            <ul ref={listRef} className="flex w-max relative">
                <div className="h-full w-full absolute transparent z-[1] top-0 left-0"></div>
                <li className='w-screen h-screen flex justify-center items-center pt-[12rem]'>
                    <div className='flex items-center gap-[6.3rem]'>
                        <img src={props.introImage.imageUrl} alt="Intro Image" width={414} height={518} className='w-[41.4rem] h-[51.8rem] object-fit'/>
                        <CustomRichText value={props.introText} className='w-[40rem] web-p2'/>
                    </div>
                </li>
                {props.members.map((member) => (
                    <li key={member._key} className='w-screen flex justify-center items-center pt-[20rem] pb-[10rem]'>
                        <div className='flex flex-col items-center'>
                            <div className='relative'>
                                <img src={member.image.imageUrl} alt={`${member.firstName} ${member.lastName}`} width={414} height={518} className='w-[41.4rem] h-[51.8rem] object-fit'/>
                                <div className='bigTitleBold absolute top-0 w-full text-center translate-y-[-50%]'> 
                                    <p className='text-[#030303]'>{member.firstName}</p>
                                    <p className='text-[#FFFFFF]'>{member.lastName}</p>
                                </div>
                            </div>
                            <p className='mt-[2rem] mb-[2rem] web-p2'>{member.role}</p>
                            <CustomRichText value={member.about} className='web-p2 text-center w-[70rem]'/>
                            {/* <div className='web-p2'>
                                <h4 className='text-[2.4rem] font-bold'>{member.firstName} {member.lastName}</h4>
                                <p className='text-[1.8rem] font-medium'>{member.role}</p>
                                <CustomRichText value={member.about} />
                            </div> */}
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    </div>
  );
}
