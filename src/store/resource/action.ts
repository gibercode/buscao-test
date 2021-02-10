import { CHANGE_RESOURCES, GET_RESOURCES } from './action-types'
import { actionObject, Filter } from '../../utils'
import { resources } from '../../graphql/querys'
import axios from 'axios'
import { AllPosts } from '../../graphql'
import { GET_POSTS, UPDATE_POSTS } from '../post/action_types'
import { countryPost } from '../post/action'

export const getResources = () => async dispatch => {
  const allResources = await resources()
  const country = await _getCurrentLocation()
  const posts = await AllPosts()
  allResources['currentLocation'] = country
  allResources['currentStates'] = _getStates(allResources.countries, country)

  const countryPosts = Filter(posts, country, 'country');
  const outstanding = Filter(countryPosts, true, 'outstanding');

  dispatch(actionObject(GET_RESOURCES, allResources))
  dispatch(actionObject(GET_POSTS, { posts: posts }))
  dispatch(actionObject(UPDATE_POSTS, { countryPosts: countryPosts, filterPosts: countryPosts, outstandingPosts: outstanding }))
}

export const changeResources = (country) => (dispatch, getState) => {
  const { resource: { countries }, post: { posts } } = getState()
  const states = _getStates(countries, country)

  const resources = {
    currentLocation: country,
    currentStates: states ? states : []
  }

  const countryPosts = Filter(posts, country, 'country');
  const outstanding = Filter(countryPosts, true, 'outstanding');

  dispatch(actionObject(CHANGE_RESOURCES, resources))
  dispatch(actionObject(UPDATE_POSTS, { countryPosts: countryPosts, filterPosts: countryPosts, outstandingPosts: outstanding }))
}

const _getCurrentLocation = async () => {
  try {
    const response = await axios.get('https://extreme-ip-lookup.com/json/')
    const country = response.data.countryCode.toLowerCase()

    return country

  } catch {
    return 've'
  }
}

const _getStates = (countries, country) => {
  const states = countries.find(resource => resource.slug == country)
  return states.statesField.states
}
