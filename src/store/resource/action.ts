import { CHANGE_RESOURCES, GET_RESOURCES } from './action-types'
import { GET_HOME_PAGE } from '../page/action-types'
import { actionObject } from '../../utils'
import { resources } from '../../graphql/querys'
import axios from 'axios'

export const getResources: any = () => async dispatch => {
  const allResources = await resources()

  dispatch(actionObject(GET_HOME_PAGE, { homePage: allResources.homePage }))
  delete allResources['homePage']

  const country = await _getCurrentLocation()
  allResources['currentLocation'] = country

  const states = _getStates(allResources.countries, country)
  allResources['currentStates'] = states ? states : []

  dispatch(actionObject(GET_RESOURCES, allResources))
}

export const changeResources = (country) => (dispatch, getState) => {
  const { resource: { countries } } = getState()
  const states = _getStates(countries, country)

  const resources = {
    currentLocation: country,
    currentStates: states ? states : []
  }

  dispatch(actionObject(CHANGE_RESOURCES, resources))
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
  return states?.statesField?.states
}
