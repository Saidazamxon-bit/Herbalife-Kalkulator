import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { registerSW } from '../utils/pwa';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    registerSW();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;