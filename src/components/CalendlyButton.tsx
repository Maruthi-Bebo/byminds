import Head from "next/head";
import Script from "next/script";

export default function CalendlyButton(props: { buttonLabel: string, className?: string, calendlyUrl: string }) {
    const CALENDLY_URL = props.calendlyUrl;

    const openCalendly = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
        }
    };
    return (
        <>
            <Head>
                <link
                rel="stylesheet"
                href="https://assets.calendly.com/assets/external/widget.css"
                />
            </Head>

            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />
            <button onClick={openCalendly} className={`${props.className} cursor-pointer web-p2 py-[1rem] px-[2.7rem] bg-greenLight`}>{props.buttonLabel}</button>
        </>
    )
}
