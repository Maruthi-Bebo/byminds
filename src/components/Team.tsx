import { PortableTextBlock } from 'next-sanity'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TeamSlider from './TeamSlider';

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

export default function Team(props: TeamProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const textElement = textRef.current;
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            // end: "+=1000",
            scrub: true,
            pin: true,
            pinSpacing: false,
        });

        const mm = gsap.matchMedia()

        mm.add("(min-width:768px)", () => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=1000",
                scrub: true,
                // pin: true,   
                // pinSpacing: false,
                // markers:true
                },
            })
            timeline.fromTo(
                textElement,
                { scale: 3, top: "50%", y: "-50%" },
                { scale: 1, top:"0%", y: "0%", ease: "power3.out", duration: 1 }
            );
        })

        mm.add("(max-width:768px)", () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: '.zoomOutTextContainer',
            start: "top top",
            end: "+=1000",
            scrub: true,
            // pin: true,   
            // pinSpacing: false,
            // markers:true
            },
        })
        timeline.fromTo(
            '.zoomOutText',
            { scale: 6, top: "0%", y: "0%" },
            { scale: 1, top:"50%", y: "-50%", ease: "power3.out", duration: 1 }
        );
        })
        // return () => {
        //     tl.kill();
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
    }, []);
    
    return (
        <div className='team'>
            <div ref={sectionRef} className='h-screen relative'>
                <h3 ref={textRef} className='titleText w-full absolute font-generalSans text-[6.6rem] font-[600] text-center left-0'>{props.title}</h3>
            </div>
        
            <TeamSlider {...props}/>
        </div>
    )
}
