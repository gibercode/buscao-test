import { TEST, TEST_ASYNC } from './action-types';

export const changeState = param => {
  return {
    type: TEST,
    payload: param
  }
}

export const changeStateAsync = () => dispatch => {
  dispatch(
    {
      type: TEST_ASYNC,
      payload: {
        title: 'Bye'
      }
    }
  )
}
