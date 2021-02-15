import { AnyAction } from 'redux'
import { CHANGE_RESOURCES, GET_RESOURCES } from './action-types'

const initialState = {
  currentLocation: '',
  categories: [],
  posts: [],
  countries: [],
  currentStates: []
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_RESOURCES:
      return { ...state, ...payload }

    case CHANGE_RESOURCES:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default resourceReducer
