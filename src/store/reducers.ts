import { combineReducers } from 'redux'
import resource from './resource/reducer'
import post from './post/reducer'

const reducers = combineReducers({
  resource,
  post
})

export default reducers
