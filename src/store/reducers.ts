import { combineReducers } from 'redux'
import category from './category/reducer'
import location from './location/reducer'
import posts from './posts/reducer'
import selects from './selects/reducer'

const reducers = combineReducers({
  category,
  location,
  posts,
  selects
})

export default reducers
