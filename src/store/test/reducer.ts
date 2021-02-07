import { AnyAction } from 'redux';
import { TEST, TEST_ASYNC } from './action-types';

const initialState = {
  title: 'Hello world'
}

const testReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TEST:
    return {...state, ...action.payload}

    case TEST_ASYNC:
    return {...state, ...action.payload}

    default:
    return state
  }
}

export default testReducer
