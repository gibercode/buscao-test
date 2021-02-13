import { AnyAction } from 'redux'
import { GET_HOME_PAGE } from './action-types'

const initialState = {
  homePage: {}
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_HOME_PAGE:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default pageReducer
