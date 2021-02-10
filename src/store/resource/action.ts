import { GET_RESOURCES } from './action-types'
import { actionObject } from '../../utils'
import { resources } from '../../graphql/querys'
import axios from 'axios'

export const getResources = () => async dispatch => {
  const allResources = await resources()
  const country = await _getCurrentLocation()
  allResources['currentLocation'] = country

  dispatch(actionObject(GET_RESOURCES, allResources))
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
