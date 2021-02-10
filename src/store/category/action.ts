import { GET_CATEGORIES } from './action_types'
import { actionObject } from '../../utils'

export const getCategories = () => async dispatch => {
  dispatch(actionObject(GET_CATEGORIES, { categories: [] }))
}
