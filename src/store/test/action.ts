import { TEST } from './action-types';

export const changeState = param => {
  return {
    type: TEST,
    payload: param
  }
}