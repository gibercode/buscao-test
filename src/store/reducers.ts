import { combineReducers } from 'redux'
<<<<<<< HEAD
import category from './category/reducer'
import location from './location/reducer'
import featured from './featured/reducer'

const reducers = combineReducers({
  category,
  location,
  featured
=======
import resource from './resource/reducer'

const reducers = combineReducers({
  resource
>>>>>>> c7fb7722678e6e16f569074e6eeea2ed2f1fef1b
})

export default reducers
