import { SELECTED_COMMERCE } from './action-types';
import { AnyAction } from 'redux';

const initialState = {
	id: null
}

export default (state = initialState, { type, payload }: AnyAction) => {

  switch(type) {
    case SELECTED_COMMERCE:
    return { ...state, id: payload }

    default:
    return state;
  }
}
