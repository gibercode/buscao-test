import { CHANGE_RESOURCES, GET_RESOURCES } from './action-types'
import { actionObject } from '../../utils'
import { resources } from '../../graphql/querys'
import axios from 'axios'

export const getResources = () => async dispatch => {
  const allResources = await resources()
  const country = await _getCurrentLocation()
  allResources['currentLocation'] = country
  allResources['currentStates'] = _getStates(allResources.countries, country)

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
