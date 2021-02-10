import { AnyAction } from 'redux'
import { GET_RESOURCES } from './action-types'

const initialState = {
  currentLocation: '',
  categories: [],
  countries: []
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_RESOURCES:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default resourceReducer
