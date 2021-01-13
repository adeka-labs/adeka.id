import 'antd/dist/antd.css';
import { globalStyle } from '../styles/styles';
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
