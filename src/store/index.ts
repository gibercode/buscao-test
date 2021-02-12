import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload }
    return nextState
  }

  return reducers(state, action)
}

const makeStore: any = ({ isServer }) => {
  const createStoreHook = currentReducer => createStore(currentReducer, bindMiddleware([thunkMiddleware]))
  if(isServer) return createStoreHook(reducer)

  const { persistStore, persistReducer } = require('redux-persist')
  const storage = require('redux-persist/lib/storage').default

  const persistConfig = {
    key: 'buscaoRoot',
    whitelist: ['resource'],
    storage
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStoreHook(persistedReducer)
  store['__persistor'] = persistStore(store)

  return store
}

export const wrapper = createWrapper(makeStore)
