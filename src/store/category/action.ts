import { GET_CATEGORIES } from './action_types'
import { categories } from '../../graphql/querys'
import { actionObject } from '../../utils'

export const getCategories = () => async dispatch => {
  const result = await categories()
  dispatch(actionObject(GET_CATEGORIES, { categories: result }))
}
