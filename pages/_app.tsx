import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Calculate ETH Emissions | carbon.fyi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
