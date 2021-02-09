import { AnyAction } from 'redux';
import { FILTER_POSTS, GET_POSTS, COUNTRY_POSTS } from './action_types'

const initialState = {
  posts: [],
  countryPosts: [],
  statePosts: [],
  filterPosts: [],
}

const posts = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case GET_POSTS:
      return { ...state, ...payload }
    case COUNTRY_POSTS:
      return { ...state, ...payload }
    case FILTER_POSTS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default posts
