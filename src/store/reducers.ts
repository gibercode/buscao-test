import { combineReducers } from 'redux';
import testReducer from './test/reducer';
import filterReducer from './filter/reducer';

const reducers = combineReducers({
  test: testReducer,
  filter: filterReducer
})

export default reducers;