import Animate from "./Animate";

interface NewsletterProps{
    title: string;
    heading: string;
}

export default function Newsletter(props: NewsletterProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Add your submit logic here
    }
    return (
        <div className="newsletter py-[20rem] text-center w-[62rem] mx-auto max-md:w-full max-md:py-[10rem] max-md:px-[4rem]">
            <Animate fromDown>
                <p className="web-p2 mb-[3rem] max-md:mob-p2 max-md:mb-[2rem]">{props.title}</p>
                <p className="web-h2 mb-[6rem] max-md:mob-h2 max-md:mb-[4rem]">{props.heading}</p>
                <form onSubmit={handleSubmit} className="mx-auto w-[40rem] max-md:w-full flex py-[1rem] px-[2.2rem] pr-[4.5rem] bg-greenLight web-p2 max-md:mob-p2 relative">
                    {/* <label htmlFor="email" className="w-[25%] text-left">email id:</label> */}
                    <input className="w-[100%] web-p2 max-md:mob-p2 text-foreground placeholder-foreground" placeholder="Enter your email" type="email" id="email" name="email" required/>
                    <button type="submit" className="cursor-pointer absolute right-0 top-[50%] translate-y-[-50%] w-[4rem] h-[4rem] flex justify-center items-center">
                        <img src="/images/right-arrow.svg" width={24} height={24} className="w-[3rem] h-auto"/>
                    </button>
                </form>
            </Animate>
        </div>
    )
}
