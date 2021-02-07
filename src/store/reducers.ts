import { combineReducers } from 'redux'
import testReducer from './test/reducer'
import category from './category/reducer'

const reducers = combineReducers({
  test: testReducer,
  category
})

export default reducers
