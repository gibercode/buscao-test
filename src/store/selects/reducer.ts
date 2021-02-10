import { AnyAction } from 'redux';
import { GET_SELECT } from './action_types'

const initialState = {
  categories: [],
  countries: [],
  states: []
}

const selects = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_SELECT:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default selects
