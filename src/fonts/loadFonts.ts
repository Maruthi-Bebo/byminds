import localFont from "next/font/local";
// import { Montserrat } from "next/font/google";

// export const montserrat = Montserrat({ weight: ['400', '300', '600', '800'], subsets: ['latin'], variable: '--font-montserrat', })

// Export your local fonts here - Reference https://nextjs.org/docs/pages/api-reference/components/font#local-fonts

export const generalSans = localFont({
  src: [
    {
      path: "./GeneralSans-Regular.woff2",
      style: "regular",
      weight: "400",
    },
    {
      path: "./GeneralSans-Medium.woff2",
      style: "medium",
      weight: "500",
    },
  ],
  variable: "--font-generalSans"
});

export const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Regular.woff2",
      style: "regular",
      weight: "400",
    },
    {
      path: "./Satoshi-Bold.woff2",
      style: "bold",
      weight: "700",
    },
  ],
  variable: "--font-satoshi"
});

