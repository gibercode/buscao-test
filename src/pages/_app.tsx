import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'
import '../../public/styles/globals.scss'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore()

  return (
    <PersistGate persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default wrapper.withRedux(WrappedApp)
