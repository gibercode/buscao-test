import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useStore } from 'react-redux'
import { wrapper } from '../store'
import { Loader } from '../components';
import '../../public/styles/globals.scss'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore()
  const router = useRouter()

  useEffect(() => {
    if(router.route == '/') localStorage.clear()
    store.__persistor.persist()
  }, [])

  return (
    <>
    <Component {...pageProps} />
    <Loader />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
