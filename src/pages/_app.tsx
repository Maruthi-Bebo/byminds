import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const SanityVisualEditing = dynamic(
  () => import("../components/SanityVisualEditing")
);

export interface SharedProps {
  draftMode: boolean;
}

export default function App({ Component, pageProps }: AppProps<SharedProps>) {
  const { draftMode } = pageProps;

  return (
    <>
      <Component {...pageProps} />
      {draftMode && <SanityVisualEditing />}
    </>
  );
}
