import { combineReducers } from 'redux'
import resource from './resource/reducer'
import post from './post/reducer'
import page from './page/reducer'
import selectedCommerce from './selected-commerce/reducer'

const reducers = combineReducers({
  resource,
  post,
  page,
  selectedCommerce
})

export default reducers
