import { reduxStore } from "@/config/redux-config";
import LoadingProvider from "@/context/LoaderContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fast Track</title>
      </Head>
      <Provider store={reduxStore}>
        <LoadingProvider>
          <Component {...pageProps} />
        </LoadingProvider>
        <ToastContainer />
      </Provider>
    </>
  );
}
