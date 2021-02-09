import { GET_FEATURED } from './action-types'
import { featuredShops } from '../../graphql/querys'
import { actionObject } from '../../utils'

export const getFeatured = () => async dispatch => {
  const result = await featuredShops()
  dispatch(actionObject(GET_FEATURED, { featured: result }))
}
