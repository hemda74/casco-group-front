import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/bootstrapClasses.css';
import { useEffect, ReactElement, ReactNode } from 'react';
import transScript from '../helper/transScript';
import indexTrans from '../localization/index.trans';
import { NextPage } from 'next';
import Head from 'next/head';
import { LanguageProvider } from '../Context/LanguageContext';
import { ToastProvider } from '../providers/toast-provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import React from 'react';
// here we export the alias of next page with layout as optional.
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// here we are declaring nex page with layout as app props.
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available.
  const getLayout = Component.getLayout ?? (page => page);

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);
  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang === null || lang === undefined) {
      localStorage.setItem('lang', 'en');
    } else {
      transScript(indexTrans);
    }
  });
  const queryClientRef = React.useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <LanguageProvider>
        <ToastProvider />
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            {getLayout(<Component {...pageProps} />)}
          </Hydrate>
        </QueryClientProvider>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
