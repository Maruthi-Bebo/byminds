import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PortableTextBlock } from 'next-sanity';
import CustomRichText from './CustomRichText';

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

export default function TeamHorizontalScroll(props: TeamProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof window === "undefined") return;
        const container = containerRef.current;
    
        const scrollAmount = (offset: number) => {
          if (!container) return 0;
          return (container.scrollWidth - window.innerWidth + offset)
        }

        gsap.to(
            container,
            {
              x: () => `-${scrollAmount(0)}px`,
              scrollTrigger: {
                trigger: container,
                start: `top 0px`,
                end: () => `+=${scrollAmount(0)}`,
                scrub: 0.6,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                // markers: true,
                invalidateOnRefresh: true
              },
            }
        );
    }, []);
  return (
    <>
        <div className="overflow-hidden">
            <div
                ref={containerRef}
                className="flex space-x-4"
            >
                <div className="flex-none w-[auto] h-screen flex pt-[18rem] tab:pt-[8rem] pb-[10rem] gap-[3.5rem]">
                    <div className="w-screen flex items-center justify-center">
                        <div className='flex items-center gap-[6.3rem]'>
                            <img src={props.introImage.imageUrl} alt="Intro Image" width={414} height={518} className='w-[41.4rem] h-[51.8rem] object-fit'/>
                            <CustomRichText value={props.introText} className='w-[40rem] web-p2'/>
                        </div>
                    </div>
                    {props.members.map((member) => (
                        <div key={member._key} className='w-screen flex items-center justify-center'>
                            <div className='flex items-center px-[12%]'>
                                <div className='w-[40%]'>
                                    <img src={member.image.imageUrl} alt={`${member.firstName} ${member.lastName}`} width={414} height={518} className='w-full h-auto'/>
                                </div>
                                <div className='w-[60%] pl-[5%] pr-[11%]'>
                                    <p className='text-[#030303] bigTitleBold'>{member.firstName} {member.lastName}</p>
                                    <p className='mt-[1rem] mb-[6rem] web-h3 text-[2rem]'>{member.role}</p>
                                    <CustomRichText value={member.about} className='web-p3'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}
