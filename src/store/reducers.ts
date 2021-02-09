import { combineReducers } from 'redux'
import category from './category/reducer'
import featured from './featured/reducer'

const reducers = combineReducers({
  category,
  featured
})

export default reducers
