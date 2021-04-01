import { GlobalStyles } from 'twin.macro';
import Styles from '@/styles/index';
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Styles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
