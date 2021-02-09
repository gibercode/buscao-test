import { combineReducers } from 'redux'
import category from './category/reducer'
import location from './location/reducer'
import featured from './featured/reducer'

const reducers = combineReducers({
  category,
  location,
  featured
})

export default reducers
