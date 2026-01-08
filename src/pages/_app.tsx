import { reduxStore } from "@/config/redux-config";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fast Track</title>
      </Head>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
