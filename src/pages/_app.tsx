import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextTopLoader />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
