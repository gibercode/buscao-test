import { combineReducers } from 'redux'
import category from './category/reducer'
import location from './location/reducer'
import posts from './posts/reducer'

const reducers = combineReducers({
  category,
  location,
  posts
})

export default reducers
