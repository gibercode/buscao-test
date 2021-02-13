import { combineReducers } from 'redux'
import resource from './resource/reducer'
import page from './page/reducer'

const reducers = combineReducers({
  resource,
  page
})

export default reducers
