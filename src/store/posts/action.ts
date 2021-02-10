import { GET_POSTS, FILTER_POSTS, COUNTRY_POSTS } from './action_types'
import { AllPosts } from '../../graphql'
import { actionObject, Filter } from '../../utils'

export const getPosts = () => async dispatch => {
  const result = await AllPosts()
  dispatch(actionObject(GET_POSTS, { posts: result }))
}

export const countryPost = (country: string) => async (dispatch, getState) => {
  const { posts } = getState();
  const result = await Filter(posts.posts, country, 'country');
  dispatch(actionObject(COUNTRY_POSTS, { countryPosts: result, filterPosts: result }))
}

export const getStatePosts = (filter: string) => async (dispatch, getState) => {
  const { posts } = getState();
  const result = await Filter(posts.countryPosts, filter, 'estado');
  dispatch(actionObject(FILTER_POSTS, { statePosts: result, filterPosts: result }))
}

export const getTitlePosts = (filter: string) => async (dispatch, getState) => {
  const { posts } = getState();
  const result = await Filter(posts.statePosts, filter, 'title');
  dispatch(actionObject(FILTER_POSTS, { filterPosts: result }))
}