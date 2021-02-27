import { SHOW_LOADER } from './action-types';
import { AnyAction } from 'redux';

const initialState = {
	show: false
}

 const selectedCommerceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case SHOW_LOADER:
    return { ...state, show: payload }

    default:
    return state;
  }
}

export default selectedCommerceReducer
