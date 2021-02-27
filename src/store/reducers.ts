import { combineReducers } from 'redux'
import resource from './resource/reducer'
import post from './post/reducer'
import page from './page/reducer'
import selectedCommerce from './selected-commerce/reducer'
import loader from './loader/reducer'

const reducers = combineReducers({
  resource,
  post,
  page,
  selectedCommerce,
  loader
})

export default reducers
