import { GET_POSTS, UPDATE_POSTS } from './action_types'
import { AllPosts } from '../../graphql'
import { actionObject, Filter } from '../../utils'

const _filterSelection = (posts, filter, select) => {
  switch (select) {
    case 'state':
      let statePosts = Filter(posts.countryPosts, filter, select)
      return {
        statePosts: statePosts,
        categoryPosts: statePosts,
        filterPosts: statePosts
      }
    case 'categories':
      let categoryPosts = Filter(posts.statePosts, filter, select)
      return {
        categoryPosts: categoryPosts,
        filterPosts: categoryPosts
      }
    case 'title':
      let result = Filter(posts.categoryPosts, filter, select)
      return {
        filterPosts: result
      }
    default:
      break;
  }
}

export const countryPost = (country: string) => (dispatch, getState) => {
  const { post } = getState();
  const result = Filter(post?.posts, country, 'country');
  const outstanding = Filter(result, true, 'outstanding');
  dispatch(actionObject(UPDATE_POSTS, { countryPosts: result, filterPosts: result, outstandingPosts: outstanding }))
}

export const filterPosts = (filter: string, type) => (dispatch, getState) => {
  const { post } = getState();
  const result = _filterSelection(post, filter, type);
  dispatch(actionObject(UPDATE_POSTS, result))
}
