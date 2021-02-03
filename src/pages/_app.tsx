import '../../public/styles/globals.css';
import initStore from '../store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default initStore.withRedux(MyApp);
