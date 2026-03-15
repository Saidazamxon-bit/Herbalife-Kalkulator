import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { registerServiceWorker } from '../utils/pwa';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;