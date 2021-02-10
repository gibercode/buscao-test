import { combineReducers } from 'redux'
import resource from './resource/reducer'
import featured from './featured/reducer'

const reducers = combineReducers({
  resource,
  featured
})

export default reducers
