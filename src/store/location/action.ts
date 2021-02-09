import { GET_LOCATION } from './action-types'
import { actionObject } from '../../utils'
import axios from 'axios'

export const getLocation = () => async dispatch => {
  try {
    const response = await axios.get('https://extreme-ip-lookup.com/json/')
    const country = response.data.countryCode.toLowerCase()

    dispatch(actionObject(GET_LOCATION, { country }))

  } catch {  }
}
