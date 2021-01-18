import { TEST } from './action-types';

const initialState = {
  title: 'Hello world'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TEST:
      return { title: payload }
  
    default:
      return state;
  }
}