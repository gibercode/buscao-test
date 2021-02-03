import '../../public/styles/globals.scss';
import initStore from '../store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default initStore.withRedux(MyApp);
