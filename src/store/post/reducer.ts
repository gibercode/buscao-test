import { AnyAction } from 'redux';
import { UPDATE_POSTS } from './action_types'

const initialState = {
  countryPosts: [],
  outstandingPosts: [],
  statePosts: [],
  categoryPosts: [],
  filterPosts: [],
}

const post = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case UPDATE_POSTS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default post
