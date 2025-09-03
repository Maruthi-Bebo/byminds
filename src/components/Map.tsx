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
            <div className='relative'>
                <img src={"/images/map.png"} width={1329} height={705} className='w-full h-auto max-tab:h-full object-cover' alt='map'/>
                <div className='markOne absolute top-[35%] left-[16%] max-xl:left-[11%] max-tab:left-[17%] max-md:top-[31%] max-md:left-[9%] max-md:gap-[1px] max-md:flex-col max-md:items-end max-tab:gap-[0.5rem] flex gap-[1rem] items-center'>
                    <p className={`${visible?"opacity-100":"opacity-0"} delay-[0.6s] transition-opacity duration-[0.3s] ease-out text-[1.5rem] max-tab:text-[0.8rem] font-generalSans text-greenLight font-[400]`}>Montreal, Canada</p>
                    <div style={{animationDelay: "0s"}} className={`${visible?"animate-bounce-pop":""} opacity-0 w-[15px] h-[15px] max-tab:w-[10px] max-tab:h-[10px] bg-greenLight rounded-[50%]`}></div>
                </div>
                <div className='markTwo absolute top-[27%] left-[49%] max-md:top-[24%] max-md:left-[53%] flex flex-col'>
                    <div style={{animationDelay: "0.2s"}} className={`${visible?"animate-bounce-pop":""} opacity-0 w-[15px] h-[15px] max-tab:w-[10px] max-tab:h-[10px] bg-greenLight rounded-[50%]`}></div>
                    <p className={`${visible?"opacity-100":"opacity-0"} delay-[0.8s] transition-opacity duration-[0.3s] ease-out text-[1.5rem] max-tab:text-[0.8rem] font-generalSans text-greenLight font-[400]`}>Amsterdam, Netherlands</p>
                </div>
                <div className='markThree absolute top-[43%] left-[67%] max-md:top-[40%] flex gap-[1rem] max-md:gap-[0.2rem] max-md:flex-col max-md:items-start items-center'>
                    <div style={{animationDelay: "0.4s"}} className={`${visible?"animate-bounce-pop":""} opacity-0 w-[15px] h-[15px] max-tab:w-[10px] max-tab:h-[10px] bg-greenLight rounded-[50%]`}></div>
                    <p className={`${visible?"opacity-100":"opacity-0"} delay-[1s] transition-opacity duration-[0.3s] ease-out text-[1.5rem] max-tab:text-[0.8rem] font-generalSans text-greenLight font-[400]`}>Delhi, India</p>
                </div>
            </div>
        </div>
    )
}
