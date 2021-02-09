import { AnyAction } from 'redux'
import { GET_LOCATION } from './action-types'

const initialState = {
  country: ''
}

const locationReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_LOCATION:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default locationReducer
