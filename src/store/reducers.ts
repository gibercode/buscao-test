import { combineReducers } from 'redux'
import category from './category/reducer'
import location from './location/reducer'
import post from './post/reducer'
import select from './select/reducer'

const reducers = combineReducers({
  category,
  location,
  post,
  select
})

export default reducers
