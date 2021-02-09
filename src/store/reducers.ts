import { combineReducers } from 'redux'
import category from './category/reducer'
import location from './location/reducer'

const reducers = combineReducers({
  category,
  location
})

export default reducers
