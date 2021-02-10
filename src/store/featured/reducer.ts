import { AnyAction } from 'redux';
import { GET_FEATURED } from './action-types';

const initialState = {
  featured: []
}

const category = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_FEATURED:
      return {...state, ...payload }

    default:
      return state
  }
}

export default category
