import { combineReducers } from 'redux'
import category from './category/reducer'
import location from './location/reducer'
import filter from './location/reducer'

const reducers = combineReducers({
  category,
  location,
  filter
})

export default reducers
