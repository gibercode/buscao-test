import { AnyAction } from 'redux';
import { GET_CATEGORIES } from './action_types'

const initialState = {
  categories: []
}

const category = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_CATEGORIES:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default category
