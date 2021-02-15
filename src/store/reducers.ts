import { combineReducers } from 'redux'
import resource from './resource/reducer'
import post from './post/reducer'
import page from './page/reducer'

const reducers = combineReducers({
  resource,
  post,
  page
})

export default reducers
