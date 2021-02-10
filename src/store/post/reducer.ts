import { AnyAction } from 'redux';
import { UPDATE_POSTS, GET_POSTS } from './action_types'

const initialState = {
  posts: [],
  countryPosts: [],
  outstandingPosts: [],
  statePosts: [],
  categoryPosts: [],
  filterPosts: [],
}

const post = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_POSTS:
      return { ...state, ...payload }
    case UPDATE_POSTS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default post
