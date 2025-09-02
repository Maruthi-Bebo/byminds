import { useEffect, useRef, useState } from 'react'

export default function Map() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current && !visible) {
                const rect = containerRef.current.getBoundingClientRect();
                if (rect.top <= 150) {
                    setVisible(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visible]);

    return (
        <div ref={containerRef} className={`map ${visible?"mapVisible":""} pb-[20rem] px-[7rem] max-tab:px-0 max-tab:pb-[10rem]`}>
            <div className='relative max-tab:h-[80vh]'>
                <img src={"/images/map.png"} width={1329} height={705} className='w-full h-auto max-tab:h-full object-cover' alt='map'/>
                <div className='markOne absolute top-[35%] left-[16%] flex gap-[1rem] items-center max-tab:hidden'>
                    <p className={`${visible?"opacity-100":"opacity-0"} delay-[0.6s] transition-opacity duration-[0.3s] ease-out text-[1.5rem] font-generalSans text-greenLight font-[400]`}>Montreal, Canada</p>
                    <div style={{animationDelay: "0s"}} className={`${visible?"animate-bounce-pop":""} opacity-0 w-[15px] h-[15px] bg-greenLight rounded-[50%]`}></div>
                </div>
                <div className='markTwo absolute top-[27%] left-[49%] flex flex-col max-tab:hidden'>
                    <div style={{animationDelay: "0.2s"}} className={`${visible?"animate-bounce-pop":""} opacity-0 w-[15px] h-[15px] bg-greenLight rounded-[50%]`}></div>
                    <p className={`${visible?"opacity-100":"opacity-0"} delay-[0.8s] transition-opacity duration-[0.3s] ease-out text-[1.5rem] font-generalSans text-greenLight font-[400]`}>Amsterdam, Netherlands</p>
                </div>
                <div className='markThree absolute top-[43%] left-[67%] flex gap-[1rem] items-center max-tab:hidden'>
                    <div style={{animationDelay: "0.4s"}} className={`${visible?"animate-bounce-pop":""} opacity-0 w-[15px] h-[15px] bg-greenLight rounded-[50%]`}></div>
                    <p className={`${visible?"opacity-100":"opacity-0"} delay-[1s] transition-opacity duration-[0.3s] ease-out text-[1.5rem] font-generalSans text-greenLight font-[400]`}>Delhi, India</p>
                </div>
            </div>
        </div>
    )
}
