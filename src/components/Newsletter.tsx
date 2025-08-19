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
        <div className="newsletter py-[20rem] text-center w-[62rem] mx-auto">
            <Animate fromDown>
                <p className="web-p2 mb-[3rem]">{props.title}</p>
                <p className="web-h2 mb-[6rem]">{props.heading}</p>
                <form onSubmit={handleSubmit} className="mx-auto w-[40rem] flex py-[1rem] px-[2.3rem] bg-greenLight web-p2">
                    <label htmlFor="email" className="w-[25%] text-left">email id:</label>
                    <input className="w-[75%]" type="email" id="email" name="email" required />
                </form>
            </Animate>
        </div>
    )
}
